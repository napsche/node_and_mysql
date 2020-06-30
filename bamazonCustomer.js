var mysql = require("mysql");
var inquirer = require("inquirer"); 

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err; 
    start();
})
function start() {
    inquirer
        .prompt({
            // name: "postOrBid",
            // type: "list", 
            // message: "Would you like to [POST] an auction or [BID] on an auction?",
            // choices: ["POST", "BID", "EXIT"]
        })
        .then(function(answer) {
            //based on their answer, either call the bid or post functions
            // if (answer.postOrBid === "POST") {
            //     postAuction();
            // }
            // else if(answer.postOrBid === "BID") {
            //     bidAuction();
            // } else{
            //     RTCPeerConnection.end();
            // }
        });
}