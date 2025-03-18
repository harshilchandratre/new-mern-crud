const express = require('express')
const { createName, getName, removeName } = require('../controller/nameController')

const router = express.Router()

router.post('/createName', createName);
router.get('/getName', getName);
router.delete('/removeName/:id', removeName);

module.exports = router;