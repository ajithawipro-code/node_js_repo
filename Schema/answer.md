1) What schema design is and what a database schema represents

Schema design is the process of planning and structuring how data will be stored in a relational database. It includes deciding:

what tables are needed,
what columns each table should contain,
what relationships exist between tables,
what rules/constraints should be applied to ensure valid data.

A database schema represents the blueprint of the database. It defines the structure of data and how tables connect with each other.
Example: In an e-commerce project, schema design decides that we need tables like users, products, orders, payments, and links between them.

2) Why schema design is required before writing backend code

Schema design should be done before backend development because the backend logic depends on the database structure. Backend APIs mainly perform CRUD operations (Create, Read, Update, Delete), so without a proper schema:

you won’t know what columns exist,
you won’t know how to store relationships (example: which user placed which order),
you will end up changing your API code repeatedly.

So schema design avoids confusion and rework. It ensures backend code is built on a stable foundation.

3) How poor schema design impacts data consistency, maintenance, and scalability

Bad schema design causes long-term problems:

Data Consistency problems:

Duplicate values may occur (ex: same email stored multiple times)
Invalid data may be stored (ex: age = -5, order without user)
This leads to incorrect results and unreliable data.

Maintenance becomes difficult:

If design is not clean, developers face:
complex queries,
repeated code,
frequent bug fixing.

Example: if you store user details again inside orders table, updating user information becomes difficult.

Scalability becomes hard:

As data grows, bad schema makes:
joins expensive,
database slow,
upgrades difficult.

Good schema design ensures the system can handle more users/orders later without breaking.

4) What validations are in schema design and why databases enforce validations

Validations in schema design are constraints applied on columns so only valid data gets stored. Databases enforce them because database is the final storage and must stay correct even if backend has bugs.

Common constraints:
NOT NULL → value must be present
Example: email should not be null.

UNIQUE → no duplicates allowed
Example: email must be unique so two users cannot signup with same email.

DEFAULT → assigns a value if user doesn’t send it
Example: status DEFAULT 'placed'

PRIMARY KEY → uniquely identifies each row
Example: id UUID PRIMARY KEY

These validations protect data integrity and avoid garbage/duplicate data.

5) Difference between database schema and database table

A database schema is the overall structure/plan of the database (like the design of the entire building).
A table is one part inside the schema (like one room).

So:
Schema = collection of tables + relationships + constraints
Table = stores rows/records for one specific type of data

6) Why a table should represent only one entity

An entity means a real-world object like:
User
Product
Order

A table should represent only one entity because mixing multiple entities in one table causes confusion and duplication.

Example:
If you store user + product + order in a single table, then:

user data will repeat for every order,
updating user details becomes messy,
database becomes inconsistent.

So best practice:
one entity → one table.

7) Why redundant or derived data should be avoided in table design

Redundant data means storing the same information multiple times.
Derived data means data that can be calculated from existing values.

These should be avoided because they create inconsistency.

Example (redundant):
Storing user email in both users and orders table.
If user updates email, old orders will still show old email → inconsistency.

Example (derived):
Storing totalAmount even though it can be derived from:
price * quantity.

Sometimes derived data can be stored for performance reasons, but only when necessary and then it must be handled carefully.

8) Importance of choosing correct data types

Choosing correct data types is important because it affects:
accuracy,
storage size,
performance,
validations.

Examples:

age INT (not string)
price NUMERIC (better than int if decimals possible)
email TEXT
created_at TIMESTAMP DEFAULT now()

Wrong types lead to errors like:

storing numbers as strings (causes sorting/calculation issues),
storing dates as text (comparison becomes difficult).
Correct data types ensure clean data and faster queries.