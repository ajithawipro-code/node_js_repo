# Q2: Database Relationships

## Definition of Database Relationship
A **database relationship** means the **connection between two tables** in a relational database.
This connection is created using:
- **Primary Key (PK)** in one table
- **Foreign Key (FK)** in another table

It helps to store data in a clean way without repeating the same information again and again, and it maintains **data consistency**.

Example (e-commerce):
A customer places orders, so the `orders` table contains `customer_id` (FK) which references `customers.id` (PK).

---

## Types of Database Relationships (with E-commerce examples)

### 1) One-to-One Relationship (1:1)
**Meaning:**  
One record in table A is linked to **exactly one** record in table B.

**E-commerce example:**  
`users` table and `user_profile` table.
- One user has only one profile
- One profile belongs to only one user

**Example tables:**
- `users(id, name, email, password)`
- `user_profile(id, user_id(FK), address, dob)`


### 2) One-to-Many Relationship (1:M)
**Meaning:**  
One record in table A can be linked to **many records** in table B, but each record in table B belongs to only one record in table A.

**E-commerce example:**  
`customers` table and `orders` table.
- One customer can place many orders
- One order belongs to only one customer

**Example tables:**
- `customers(id, name, email)`
- `orders(id, customer_id(FK), total_amount, status, created_at)`



### 3) Many-to-Many Relationship (M:M)
**Meaning:**  
Many records in table A can be linked to many records in table B.

This relationship cannot be created directly, so we use a **junction table (bridge table)**.

**E-commerce example:**  
`orders` and `products`
- One order can contain many products
- One product can appear in many orders

So we create a junction table: `order_items`.

**Example tables:**
- `orders(id, customer_id)`
- `products(id, title, price)`
- `order_items(id, order_id(FK), product_id(FK), quantity)`


---

## Conclusion
Database relationships are very important in e-commerce applications because:
- it avoids duplicate data (normalization)
- it enforces proper connection between tables using FK
- it helps to fetch related data using JOIN queries
- it makes database design clean, structured, and professional



