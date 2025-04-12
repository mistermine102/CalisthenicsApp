import { RequestHandler } from 'express'

export const signup: RequestHandler = async (req, res) => {
  const body = req.body as {
    username: string
    email: string
    password: string
  }
}
