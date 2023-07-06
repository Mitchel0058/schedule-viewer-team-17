import express from 'express';
import cors from 'cors';
const router = express.Router();
import fileupload from "express-fileupload";
router.use(fileupload());

import {
  getGroups,
  getProperties,
  getScheduleData, getTeacher, getWeeks,
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


/**
 * all appointments routes
 */
router.options('/schedule', (req, res, next) => {
  //set header before response
  res.header({
    allow: 'GET, POST, OPTIONS',
    'Content-type': 'application/json',
    Data: Date.now(),
    'Content-length': 0,
  });
  //response
  res.sendStatus(200);
});

// Version 1
const baseUrlV1 = '/api/v1';

// get a collection of all the appointments and ou can use a query
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
router.post(`${baseUrlV2}/excelToJson`, cors(), excelToJson);
router.get(`${baseUrlV2}/excelToJson`, cors(), (req, res, next) => {
  res.json('Welcome to your local scheduler 🐶');
});


//better url's: 
/** 
 * head url: domain/api/v1
 * /schedule/term/
 * /schedule/term/teachers
 * /schedule/data (put) - add an wel structured json to the system
*/
export default router;
