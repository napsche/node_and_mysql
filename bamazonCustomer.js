var mysql = require("mysql");
var inquirer = require("inquirer"); 

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Crouton!23",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err; 
    //display all items for sale!!!!
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err; 
        console.log("What would you like to buy?");
        console.log("-------------------------------------------------");
        console.log(result);
    })
    start();
});

//Application checks the database to see if there are enough units in stock
//compare input to stock
//if order number > units in stock, log phrase and prevent order from being placed
//if units are in stock, place order
    //update database to reflect remaining amount of units
    //show customer total cost of their purchase

function start() {
    inquirer
    //in initial function, need to ask the customer 
    //1. ID of product they want to buy
        .prompt({
            name: "item_id",
            type: "input", 
            message: "What is the ID# of the product you would like to buy?",
        })
        .then(function(quantity) {
            inquirer
             //2. How many units of the product they would like to buy
                .prompt({
                    name: "quantity",
                    type: "number", 
                    message: "How many units would you like?"
                })
                .then(function() {
                    //Application checks the database to see if there are enough units in stock
                    //compare input to stock
                    // console.log("You would like " + quantity + "unit(s)!"); 
                })
        });
}

// //********************************PUT YOUR PASSWORD IN TO TEST***************