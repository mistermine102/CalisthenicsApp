class AppError extends Error {
  statusCode: number
  errors: any[]

  constructor(message = 'Something went wrong', statusCode = 500, errors: any[] = []) {
    super(message)
    this.statusCode = statusCode
    this.errors = errors
  }
}

export default AppError
