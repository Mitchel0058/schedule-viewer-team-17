import express from 'express';
import cors from 'cors';
import {saveJsonToDB, setupTables} from '../controllers/dbController.js';
import multer from 'multer';
import fileupload from 'express-fileupload';
const router = express.Router();

import {
  getGroups,
  getProperties,
  getScheduleData,
  getTeacher,
  getWeeks,
  getAllSchedules,
  getAllYears,
  getAllTerms,
  getScheduleDataPerTerm,
  excelToJson
} from '../controllers/scheduleController.js';

// root level route, this one is optional
router.get('/', cors(), (req, res, next) => {
  res.json('Welcome to your local scheduler 🐶');
});

// save excel file to storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({storage: storage});

// save excel file to database
router.post('/excelToJson', upload.single('excelFile'), saveJsonToDB);


// Create tables in database
router.post('/setupdb', setupTables);

// Enable file upload middleware
router.use(fileupload());
/**
 * all appointments routes
 */
router.options('/schedule', (req, res, next) => {
  // set header before response
  res.header({
    allow: 'GET, POST, OPTIONS',
    'Content-type': 'application/json',
    Data: Date.now(),
    'Content-length': 0,
  });
  // response
  res.sendStatus(200);
});

// Version 1
const baseUrlV1 = '/api/v1';

// get a collection of all the appointments and you can use a query
router.get('/schedule', cors(), getScheduleData);
router.get('/teachers', cors(), getTeacher);
router.get('/groups', cors(), getGroups);
router.get('/weeks', cors(), getWeeks);
router.get('/properties', cors(), getProperties);

// Version 2
const baseUrlV2 = '/api/v2';
router.get(`${baseUrlV2}/schedule`, cors(), getAllSchedules);
router.get(`${baseUrlV2}/schedule/year`, cors(), getAllYears);
router.get(`${baseUrlV2}/schedule/year/:yearid/term`, cors(), getAllTerms);
router.get(`${baseUrlV2}/schedule/year/:yearid/term/:termid`, cors(), getScheduleDataPerTerm);

// Handle Excel file upload and conversion to JSON
router.post(`${baseUrlV2}/excelToJson`, cors(), excelToJson);

router.get(`${baseUrlV2}/excelToJson`, cors(), (req, res, next) => {
  res.json('Welcome to your local scheduler 🐶');
});

export default router;
