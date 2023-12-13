const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {accessChats, fetchChats, createdGroupChat, renameGroup, addToGroup, removeFromGroup} = require('../controller/chatController');


const router = express.Router();

router.route('/').post(protect, accessChats);
router.route('/').get(protect, fetchChats);
router.route('/group').post(protect, createdGroupChat);
router.route('/rename').put(protect, renameGroup);
router.route('/groupadd').put(protect, addToGroup);
router.route('/groupremove').put(protect, removeFromGroup);


module.exports = router;