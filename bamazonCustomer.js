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

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayInventory();
});

//customer prompts
var itemIDPrompt = {
    type: "input",
    message: "Please enter the ID of the product you would like to buy.",
    name: "purchase_id"
};
var quantityPrompt = {
    type: "input",
    message: "How many units would you like?",
    name: "item_quantity"
};
var restartPrompt = {
    type: "list",
    message: "Would you like to purchase anything else?",
    choices: ["Yes", "No"],
    name: "restart_prompt"
};

//display all items for sale!!!!
var displayInventory = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("Here's what we have for sale!" + "\n" + "------------------");
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + "\n" + "Product Name: " + res[i].product_name + "\n" + "Department Name: " + res[i].department_name + "\n" + "Price Per Unit: " + res[i].price + "\n" + "Amount Available: " + res[i].stock_quantity);
        }
        customerPrompt(res);
    });
}

var prompt2 = function () {
    inquirer
        .prompt([
            quantityPrompt
        ])
        .then(function (inquirerResp) {
            var itemQuantitySelected = parseInt(inquirerResp.item_quantity);
            //Application checks the database to see if there are enough units in stock
            //compare input to stock
            if ((res[id].stock_quantity - itemQuantitySelected) >= 0) {
                var newQuantity = res[id].stock_quantity - itemQuantitySelected;
                var totalCost = res[id].price * itemQuantitySelected;
                var sql = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
                var valies = ["products", "stock_quantity", newQuantity, "item_id", itemIDSelected];
                connection.query(sql, values, function (err, res) {
                    if (err) throw err;
                    console.log("Item(s) purchased!" + "\n" + "Total Cost of Order: $" + totalCost);
                    inquirer
                        .prompt([
                            restartPrompt
                        ])
                        .then(function (inquirerResponse) {
                            if (inquirerResponse.restart_prompt === "Yes") {
                                displayInventory();
                            } else {
                                console.log("Thank you for your order!");
                                connection.end();
                            }
                        })
                })
            }
            else {
                console.log("I'm sorry! We do not have that many in stock! Please select a lesser number of items to purchase!");
                customerPrompt(res);
            }
        })
}

var customerPrompt = function (res) {
    inquirer
        .prompt([
            itemIDPrompt
        ])
        .then(function (inquirerResponse) {
            //store user answer as variable
            console.log("test");

            var itemIDSelected = parseInt(inquirerResponse.purchase_id);
            console.log(inquirerResponse);
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id === itemIDSelected) {
                    var id = i;

                    //prompt for the quantity of units they would like to buy
                    prompt2();

                }
            }
        })
}




    // connection.query("SELECT * FROM products", function (err, result, fields) {
    //     if (err) throw err; 
    //     console.log("What would you like to buy?");
    //     console.log("-------------------------------------------------");
    //     console.log(result);
    // })



//if order number > units in stock, log phrase and prevent order from being placed
//if units are in stock, place order
    //update database to reflect remaining amount of units
    //show customer total cost of their purchase

// function start() {
//     inquirer
//     //in initial function, need to ask the customer 
//     //1. ID of product they want to buy
//         .prompt({
//             name: "item_id",
//             type: "input", 
//             message: "What is the ID# of the product you would like to buy?",
//         })
//         .then(function(quantity) {
//             inquirer
//              //2. How many units of the product they would like to buy
//                 .prompt({
//                     name: "quantity",
//                     type: "number", 
//                     message: "How many units would you like?"
//                 })
//                 .then(function() {
//                     //Application checks the database to see if there are enough units in stock
//                     //compare input to stock
//                     console.log("Let me check to make sure we have that in stock!"); 
//                     if ()
//                 })
//         });
// }

// //********************************PUT YOUR PASSWORD IN TO TEST***************