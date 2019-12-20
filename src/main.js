const sanitizeHtml = require('sanitize-html')

let dirty = 'some really tacky HTML'
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


dirty = '<a href="http://somelink.com"></a>'

clean = sanitizeHtml(dirty, {
    allowedAttributes: {
        'a': ['href']
    },
    transformTags: {
        'a': function (tagName, attribs) {
            return {
                tagName: 'a',
                text: 'Some text'
            }
        }
    }
})

console.log(dirty)
console.log(clean)