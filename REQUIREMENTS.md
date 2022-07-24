# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index                        (/products)      => Get Method
- Show                         (/products/:id)  => Get Method
- Create [token required]      (/products)      => POST Method
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]        (/users)        => Get Method
- Show [token required]         (/users/:id)    => Get Method
- Create N[token required]      (/users)        => POST Method

#### Orders
- Current Order by user (args: user id)[token required]     (/orders/:userID)       => Get Method
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product            (products)
-  id                   (id SERIAL PRIMARY KEY)       
- name                  (product_name VARCHAR)
- price                 (price INT)
- [OPTIONAL] category   (category VARCHAR)

#### User               (users)
- id                    (id SERIAL PRIMARY KEY)
- firstName             (first_name VARCHAR(20))
- lastName              (last_name VARCHAR(20))
- password              (user_password VARCHAR)

#### Orders                                      (orders)
- id                                             (id SERIAL PRIMARY KEY)
- user_id                                        (user_id INT REFERENCES users(id))

#### Order Products
- order_id                                       (order_id INT REFERENCES orders(id))
- quantity of each product in the order          (quantity INT)
- id of each product in the order                (product_id REFERENCES products(id))
- status of order (active or complete)           (order_status)

