import express from 'express'
import * as User from '../models/User'

const router = express.Router()

// Called on extension install, creates a user and returns their unique id to be used in future requests
router.post('/', async (req, res, next) => {
  const user = await User.CreateUser();
  
  return res.json(user)
})



export default router