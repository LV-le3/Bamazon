/*CREATE DATABASE BamazonDB;
*/

USE BamazonDB;

/*CREATE TABLE products (
	item_id integer NULL,
    product_name varchar(20) null,
    department_name varchar(20) null,
    price decimal(10,2) null,
    stock_quanity integer(20) null
    
    );
*/

SELECT * FROM BamazonDB.products;

INSERT INTO products
(item_id, product_name, department_name, price, stock_quanity) 

VALUES
(1, "Fantastic Beasts", "book", 25, 10),
(2, "Raddish Earrings", "jewelry", 20, 5),
(3, "Striped Scarf", "clothing", 20, 15),
(4, "Treacle Tart", "food", 10, 30),
(5, "Sleezy's Hair Potion", "beauty", 8, 25),
(6, "Snitch", "game", 50, 7),
(7, "Chinois Dress Robes", "clothing", 150, 3),
(8, "Owl Pellets", "pet food", 15, 20),
(9, "Quills", "pens", 3, 28),
(10, "Love Potion", "medicine", 100, 2);

SELECT * FROM BamazonDB.products;