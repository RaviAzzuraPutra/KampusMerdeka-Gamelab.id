const express = require('express');
const router = express.Router();
const {getALLcontacts, insertContact, updateContact, deleteContact} = require('../controler/CURD_Controller')

router.use(express.json());

router.get('/', getALLcontacts);

router.post('/', insertContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;