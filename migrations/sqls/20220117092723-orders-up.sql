CREATE TABLE orders (
                        id SERIAL PRIMARY KEY,                        
                        user_id INT REFERENCES users(id),
                        order_status VARCHAR
                    );