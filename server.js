// server.js
// where your node app starts

// init project
let express = require('express')
let app = express()
let PORT = 3000

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
let cors = require('cors')
app.use(cors({ optionSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

// header parser API endpoint...
app.get('/api/whoami', (req, res) => {
	let {
		ip: ipaddress,
		headers: { 'accept-language': language, 'user-agent': software }
	} = req

	res.json({ ipaddress, language, software })
})

// listen for requests :)
app.listen(PORT, () => {
	console.log(`Your app is listening on port ${PORT}`)
})
