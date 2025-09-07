export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): boolean => {
  // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

export const validateUsername = (username: string): boolean => {
  // Only alphanumeric and underscore, 3-20 characters
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
  return usernameRegex.test(username)
}

export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return ''
  return input
    .replace(/[<>"/]/g, '')
    .trim()
    .substring(0, 100)
}

// Additional validation functions you might find useful:

export const validateName = (name: string): boolean => {
  // Allow letters, spaces, hyphens, apostrophes, 2-50 characters
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/
  return nameRegex.test(name.trim())
}

export const validatePhone = (phone: string): boolean => {
  // Indonesian phone number format (variations)
  const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

// Validation result type for more detailed feedback
export interface ValidationResult {
  isValid: boolean
  message?: string
}

export const validatePasswordStrength = (password: string): ValidationResult => {
  if (password.length < 8) {
    return { isValid: false, message: 'Password minimal 8 karakter' }
  }
  
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password harus mengandung huruf kecil' }
  }
  
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password harus mengandung huruf besar' }
  }
  
  if (!/\d/.test(password)) {
    return { isValid: false, message: 'Password harus mengandung angka' }
  }
  
  return { isValid: true }
}

export const validateEmailDetailed = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, message: 'Email harus diisi' }
  }
  
  if (!validateEmail(email)) {
    return { isValid: false, message: 'Format email tidak valid' }
  }
  
  return { isValid: true }
}

// Form validation helper
export interface FormErrors {
  [key: string]: string
}

export const validateForm = (
  data: Record<string, any>,
  rules: Record<string, (value: any) => ValidationResult>
): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {}
  
  Object.keys(rules).forEach(field => {
    const result = rules[field](data[field])
    if (!result.isValid && result.message) {
      errors[field] = result.message
    }
  })
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}