import express from 'express';
import cors from 'cors';
const router = express.Router();

// root level route, this one is optional
router.get('/', cors(), (req, res, next) => {
    res.json('Welcome to your local excel to json 🐶');
  });
  


export default router;