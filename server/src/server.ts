import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express();
const port = 8080;

app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}))




app.get('/', (req, res, next) => {
  res.send("Hello");
})

import ratingRoutes from './routes/ratings'
import userRoutes from './routes/users'

app.use('/ratings', ratingRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})