const sanitizeHtml = require('sanitize-html')

const dirty = 'some really tacky HTML'
let clean = sanitizeHtml(dirty)

console.log(dirty)
console.log(clean)

// Allow only a super restricted set of tags and attributes
clean = sanitizeHtml(dirty, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
    allowedAttributes: {
        'a': ['href']
    },
    allowedIframeHostnames: ['www.youtube.com']
})

console.log(clean)

clean = sanitizeHtml(dirty, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
})
