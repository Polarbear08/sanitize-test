const sanitizeHtml = require('sanitize-html')

const dirty = 'some really tacky HTML'
const clean = sanitizeHtml(dirty)

console.log(dirty)
console.log(clean)