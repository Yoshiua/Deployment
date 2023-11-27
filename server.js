const express = require('express')

const app = express()

app.listen(4000, () => console.log(`server running on 4000`))

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '524ccf4cbb514473bdb14a82442d3cca',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')