
const express = require('express')

const {validation, ctrlWrapper} = require("../../middlrwares");
const contactsSchema = require("../../schemas");
const {contacts: ctrl} = require("../../controllers");


const validateMiddleware = validation(contactsSchema);
const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getById));

router.post('/', validateMiddleware, ctrlWrapper(ctrl.add));

router.delete('/:id', ctrlWrapper(ctrl.removeById));

router.put('/:id', validateMiddleware, ctrlWrapper(ctrl.apdateById));

module.exports = router
