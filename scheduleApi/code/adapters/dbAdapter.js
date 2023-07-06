export async function createTables(connection) {
    try {
        const createMetadataTable = `
      CREATE TABLE IF NOT EXISTS metadata (
        id INT PRIMARY KEY,
        title VARCHAR(255),
        program VARCHAR(255),
        year INT,
        semester INT,
        version BIGINT
      );`;

        const createWeeksTable = `
      CREATE TABLE IF NOT EXISTS weeks (
        id INT PRIMARY KEY,
        weeknr INT
      );`;

        const createDaysTable = `
      CREATE TABLE IF NOT EXISTS days (
        id INT PRIMARY KEY,
        day CHAR(2)
      );`;

        const createSessionsTable = `
      CREATE TABLE IF NOT EXISTS sessions (
        id INT PRIMARY KEY,
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
        id INT PRIMARY KEY,
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
