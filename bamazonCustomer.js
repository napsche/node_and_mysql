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
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err; 
        console.log("What would you like to buy?");
        console.log("-------------------------------------------------");
        console.log(result);
    })
    // start();
});
// module.exports = connection;
//display all items for sale!!!!
//in initial function, need to ask the customer 
    //1. ID of product they want to buy
    //2. How many units of the product they would like to buy
//Application checks the database to see if there are enough units in stock
//compare input to stock
//if order number > units in stock, log phrase and prevent order from being placed
//if units are in stock, place order
    //update database to reflect remaining amount of units
    //show customer total cost of their purchase

// function start() {
//     inquirer
//         .prompt({
//             name: "productToBuy",
//             type: "input", 
//             message: "What is the ID# of the product you would like to buy?",
//         })
//         .then(function(quantity) {
//             inquirer
//                 .prompt({
//                     name: "quantity",
//                     type: "number", 
//                     message: "How many units would you like?"
//                 })
//                 .then(function() {

//                 })
//         });
// }

// //********************************PUT YOUR PASSWORD IN TO TEST***************