import express from 'express'
import * as User from '../models/User'
import * as UserRating from '../models/UserRating'
import * as MachineRating from '../models/MachineRating'

const router = express.Router()

// user rates an article
router.post('/user', async (req, res, next) => {
  const article = req.body.article;
  const id = req.body.userId; // a uuid
  const value = req.body.value;

  try {
    const user = await User.GetUserById(id);
  
    if(user.length < 1) {
      res.status(400).json("User Does not exist")
    }
  
    await UserRating.CreateUserRating(article, id, value)
    
    return res.status(200).json("Rating Counted")
  }
  catch(e) {
    return next(e);
  }
})

router.get('/:article', async (req, res, next) => {
  try {
    // Call The Machine to compute the goods

    const article = req.params.article;

    let value = Math.floor((Math.random()*10)) + 1

    await MachineRating.CreateMachineRating(value, article)


    return res.json(value)
  } catch(e) {
    return next(e);
  }
})



export default router