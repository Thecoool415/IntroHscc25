var express = require('express');
var router = express.Router();
var APIRequests = require('../middleware/APIRequests');

//get electionsmeta page.
router.get('/', function(req, res, next) {
  // pass url and token into Restapiget and pull informatoin from response
  APIRequests.getwithbearerToken(express.urlencoded,)