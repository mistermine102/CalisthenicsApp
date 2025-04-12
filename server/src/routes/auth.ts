import express from 'express'
import tryCatch from '../utils/tryCatch'
import { signup } from '../controllers/auth'

const router = express.Router()

router.post('/signup', tryCatch(signup))

