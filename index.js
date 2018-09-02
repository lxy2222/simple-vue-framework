let express = require('express')
let app = express()
let port = process.env.PORT || 3030
app.set('port', port)
app.use(express.static(__dirname + '/public'))
app.listen(app.get('port'), function() {
    console.log(`running at ${port}`)
})