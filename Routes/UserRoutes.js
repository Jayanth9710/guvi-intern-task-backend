import express from 'express';
import { registerUser,loginUser,singleUser,updateUser } from'../Controllers/User.js';
const router = express.Router();

router.post('/signup',registerUser);
router.post('/signin',loginUser);
router.get('/:id',singleUser)
router.put("/update/:id",updateUser)


export default router;