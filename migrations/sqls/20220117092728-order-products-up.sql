create table order_products (
    order_id INT NOT NULL REFERENCES orders(id),
    quantity INT,
    product_id INT NOT NULL REFERENCES products(id)
    );