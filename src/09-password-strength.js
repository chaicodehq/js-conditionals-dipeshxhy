/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (typeof password !== 'string') return 'weak';
  const checkPassword = password + '';
  if (checkPassword.length === 0 || checkPassword === '') return 'weak';

  if (checkPassword.length >= 8) {
    if (
      /[A-Z]/.test(checkPassword) &&
      /[a-z]/.test(checkPassword) &&
      /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?)]/.test(checkPassword) &&
      /[0-9]/.test(checkPassword)
    )
      return 'very strong';
    if (
      /[A-Z]/.test(checkPassword) &&
      /[a-z]/.test(checkPassword) &&
      /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?)]/.test(checkPassword)
    )
      return 'strong';
    if (
      /[A-Z]/.test(checkPassword) &&
      /[a-z]/.test(checkPassword) &&
      /[0-9]/.test(checkPassword)
    )
      return 'strong';
    if (/[a-z]/.test(checkPassword)) return 'medium';
  } else {
    if (
      /[a-z]/.test(checkPassword) &&
      /[0-9]/.test(checkPassword) &&
      /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?)]/.test(checkPassword)
    )
      return 'medium';
    if (/^[a-z]+$/.test(checkPassword)) return 'weak';
    if (/^[0-9]+$/.test(checkPassword)) return 'weak';
  }
}
