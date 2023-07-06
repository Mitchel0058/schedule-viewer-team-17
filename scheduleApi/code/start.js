// start.js setup from learnnode.com by Wes Bos
import express from 'express';
import * as dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import indexRouter from './routes/index.js';

dotenv.config({ path: 'variables.env' });

async function startServer() {
  const app = express();

  // support json encoded and url-encoded bodies, mainly used for post and update
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'db-1', // replace these with your own values
      user: 'root',
      password: 'mauFJcuf5dhRMQrjj',
      database: 'schedule'
    });
    console.log('Connection established');
  } catch (err) {
    console.log('Error connecting to Db', err);
    process.exit(1); // Stop the process if connection fails
  }

  // assign the connection to the app.locals object
  app.locals.connection = connection;

  // now that we have a connection, set up the routes
  app.use('/', indexRouter);

  app.set('port', process.env.PORT || 3010);
  const server = app.listen(app.get('port'), () => {
    console.log(`🍿 Express running → PORT ${server.address().port}`);
  });
}


