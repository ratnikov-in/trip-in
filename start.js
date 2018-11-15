const gateway = require('./gateway')
const port = process.env.PORT || 3000

gateway.listen(port, () => console.log(`Gateway start on ${port}`))
