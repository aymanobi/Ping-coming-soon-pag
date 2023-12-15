const btn = document.querySelector('#sumbit')
const email_input = document.querySelector('#email_input')
const error_text = document.querySelector('.error_text')

btn.addEventListener('click', () => {
    if (email_input.value === '' || !isValidEmail(email_input.value)) {
        error_text.style.display = 'block'
        email_input.style.border = '1px solid hsl(354, 100%, 66%)'
    } else {
        error_text.style.display = 'none'
        email_input.style.border = '1px solid hsl(0, 0%, 59%)'
    }
})
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}