const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const chalk = require('chalk');

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const message = chalk.bold.blue;
const IPnet = chalk.green.underline;
const conn = chalk.yellow.bold;

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/hello', (req, res) => {
    res.send("Hello From Express");
});

app.post('/send', (req, res) => {

    var cmd=require('node-cmd');

    console.log("\n----------------------------------------------------------");

    console.log(conn("\nDevice connected : "), IPnet(req.ip));

    var process=cmd.get('node');
    console.log(conn("\nProcess ID:"), IPnet(process.pid));

    cmd.get(
        req.body.post,
        function(err, data, stderr){
            if(!err){
                console.log('\n'+data);
                console.log("----------------------------------------------------------");
            }
            else{
                console.log('\n'+err);
                console.log("----------------------------------------------------------");
            }
        }
    );



    res.send(
        `This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(message('Express server running on '+warning(port)+' !')));
