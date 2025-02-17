
const bodyParse = (req, res) => {
    let body = ''
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        if (body) {
            req.body= JSON.parse(body)
        }
    })
}

export default bodyParse()