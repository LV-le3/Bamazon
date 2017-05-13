var inquire = require("inquirer");
var mysql = require('mysql');

var connection = mysql.createConnection(
        {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: "",
            database: 'BamazonDB'
        }
    );

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
// ====================================================

var start = function (){
    connection.query("SELECT * FROM products", function (err,results){
        for (var i=0; i< results.length; i++){
            console.log(results[i].item_id + " | " + results[i].product_name + "|" + results[i].department_name + " | $" + results[i].price);
        } 
        console.log("---");

    });
}
        start();


var questions = function (){
    inquirer.prompt([{
        name: "select_Id",
        type: "input",
        message:"Choose the item you want to buy."
    }, {

        name: "quantity",
        type: "input",
        message: "How many?"

    }]).then(function(answer){
        connection.query("SELECT product_name, price FROM products WHERE ?", {
            item_id:answer.select__Id
        }, function (err,results) {

                for(var i = 0; i < results.length; i++) {
                    if ((results[i].stock_quantity - answer.quantity) > 0) {
                        var cost = results[i].price;
                        var numberItems = answer.quantity;
                        totalCost = (cost * numberItems);
                        console.log("item: " + results[i].product_name + " | " + "price: $" +results[i].price);
                }


         };

    


    
    
