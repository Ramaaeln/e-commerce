export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  export const validatePassword = (password) => {
    // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  }
  
  export const validateUsername = (username) => {
    // Only alphanumeric and underscore, 3-20 characters
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
    return usernameRegex.test(username)
  }
  
  export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return ''
    return input
      .replace(/[<>"/]/g, '')
      .trim()
      .substring(0, 100)
  }
  