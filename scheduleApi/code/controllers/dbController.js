import { createTables } from '../adapters/dbAdapter';

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
