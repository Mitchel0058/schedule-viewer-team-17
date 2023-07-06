import { createTables, insertIntoDatabase } from '../adapters/dbAdapter.js';
import { convertExcelToJson } from '../adapters/excelToJson.js';

export async function setupTables(req, res) {
    const connection = req.app.locals.connection;

    try {
        await createTables(connection);
        res.status(200).send('Tables created successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating tables');
    }
}

export async function saveJsonToDB(req, res) {
    const connection = req.app.locals.connection;
    const excelFile = req.file.path;

    try {
        const schedule = convertExcelToJson(excelFile);
        await insertIntoDatabase(schedule, connection);
        res.status(200).send('Json saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving json to database');
    }
}