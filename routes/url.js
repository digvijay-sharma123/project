const express = require('express');
const {handleGenerateNewShortURL, gethandleanalytics} = require("../controllers/url");
const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/analytics/:shortId', gethandleanalytics);
module.exports = router;