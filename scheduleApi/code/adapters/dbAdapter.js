export async function createTables(connection) {
    try {
        const createMetadataTable = `
        CREATE TABLE IF NOT EXISTS metadata (
          id INT PRIMARY KEY AUTO_INCREMENT,
          title VARCHAR(255),
          program VARCHAR(255),
          year INT,
          semester INT,
          version BIGINT
        );`;

                const createWeeksTable = `
        CREATE TABLE IF NOT EXISTS weeks (
          id INT PRIMARY KEY AUTO_INCREMENT,
          weeknr INT
        );`;

                const createDaysTable = `
        CREATE TABLE IF NOT EXISTS days (
          id INT PRIMARY KEY AUTO_INCREMENT,
          day CHAR(2)
        );`;

        const createSessionsTable = `
          CREATE TABLE IF NOT EXISTS sessions (
            id INT PRIMARY KEY AUTO_INCREMENT,
            week INT,
            term_week INT,
            month INT,
            day INT,
            dow CHAR(2),
            start TIME,
            end TIME,
            time INT,
            course_code VARCHAR(255),
            course_name VARCHAR(255),
            module VARCHAR(255),
            subject VARCHAR(255),
            type VARCHAR(255),
            rooster_text VARCHAR(255),
            \`groups\` VARCHAR(255),
            students INT,
            rooms VARCHAR(255),
            week_id INT,
            day_id INT,
            FOREIGN KEY (week_id) REFERENCES weeks (id),
            FOREIGN KEY (day_id) REFERENCES days (id)
          );`;


        const createTeachersTable = `
        CREATE TABLE IF NOT EXISTS teachers (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255)
        );`;

                const createSessionTeachersTable = `
        CREATE TABLE IF NOT EXISTS session_teachers (
          session_id INT,
          teacher_id INT,
          PRIMARY KEY (session_id, teacher_id),
          FOREIGN KEY (session_id) REFERENCES sessions (id),
          FOREIGN KEY (teacher_id) REFERENCES teachers (id)
        );`;


        await connection.query(createMetadataTable);
        await connection.query(createWeeksTable);
        await connection.query(createDaysTable);
        await connection.query(createTeachersTable);
        await connection.query(createSessionsTable);
        await connection.query(createSessionTeachersTable);

        return 'Tables created successfully';
    } catch (err) {
        console.error(err);
        throw new Error('Error creating tables');
    }
}


export async function insertIntoDatabase(schedule, connection) {
    try {
        // start the transaction
        await connection.beginTransaction();

        const [metadata] = await connection.query(
            'INSERT INTO metadata (title, program, year, semester, version) VALUES (?, ?, ?, ?, ?)',
            [schedule.meta.title, schedule.meta.program, schedule.meta.year, schedule.meta.semester, schedule.meta.version]
        );

        for (let week of schedule.data) {
            const [weekRow] = await connection.query(
                'INSERT INTO weeks (weeknr) VALUES (?)',
                [week.weeknr]
            );

            for (let day in week) {
                if (day !== 'weeknr') {
                    const [dayRow] = await connection.query(
                        'INSERT INTO days (day) VALUES (?)',
                        [day]
                    );

                    for (let session of week[day]) {
                        const [sessionRow] = await connection.query(
                            'INSERT INTO sessions (week, term_week, month, day, dow, start, end, time, course_code, course_name, module, subject, type, rooster_text, `groups`, students, rooms, week_id, day_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                            [session.week, session.term_week, session.month, session.day, session.dow, session.start, session.end, session.time, session.course_code, session.course_name, session.module, session.subject, session.type, session.rooster_text, session.groups, session.students, session.rooms, weekRow.insertId, dayRow.insertId]
                        );

                        for (let teacher of session.teachers) {
                            const [teacherRow] = await connection.query(
                                'INSERT INTO teachers (name) VALUES (?) ON DUPLICATE KEY UPDATE name = VALUES(name)',
                                [teacher, teacher]
                            );

                            await connection.query(
                                'INSERT INTO session_teachers (session_id, teacher_id) VALUES (?, ?)',
                                [sessionRow.insertId, teacherRow.insertId]
                            );
                        }
                    }
                }
            }
        }

        // commit the transaction if everything is fine
        await connection.commit();

        console.log('Data successfully inserted into the database.');
    } catch (error) {
        // rollback the transaction if something went wrong
        await connection.rollback();

        console.error('An error occurred while inserting the data into the database:', error);
        throw error;
    }
}