const express = require('express');
const morgan = require('morgan');
const http = require('http')

const router = require('./routes/router');

function haltOnTimedout(req, res, next){
    if (!req.timedout) next();
}
// let ddos = new Ddos({whitelist: [process.env.SELF_IP], burst:10, limit:6,maxexpiry: 3600})


/**
 * Express Config
 */
let app = express();
app.disable('x-powered-by')
app.use(morgan('combined'));
// app.use(ddos.express);
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({ extended: true }));

app.use(function (err, req, res, next) {
    // console.error(err.stack)
    res.status(500).send(ctx.systemError())
})

/**
 * End Point Access
 */
app.use('/', router);
app.use(haltOnTimedout);



/**
 * Run Server
 */
const port = 5000

let httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`listening on ${port}`);
});