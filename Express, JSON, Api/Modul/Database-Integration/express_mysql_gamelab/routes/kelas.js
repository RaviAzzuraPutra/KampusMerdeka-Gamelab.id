const express = require('express');
const router = express.Router();

const {getALLKelas, getIDKelas, insertKelas, updateKelas, deleteKelas} = require('../controller/CRUD_Kelas_Controller');

router.get('/', getALLKelas);
router.get('/:ID', getIDKelas);
router.post('/', insertKelas);
router.put('/:ID', updateKelas);
router.delete('/:ID', deleteKelas);



module.exports = router;