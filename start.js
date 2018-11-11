const gateway = require('./gateway')
const port = process.env.PORT || 5000

gateway.listen(port, () => console.log(`Gateway start on ${port}`))
