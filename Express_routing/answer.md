#### Database Fundamentals – Conceptual 

1. Why is db.json not suitable as a database for real projects?

Using db.json (or any file-based storage) is acceptable only for learning or very small demo applications. It is not suitable for real-world projects due to several limitations:

### Limitations of File-Based Storage

Performance

Entire files must be read and written for every operation.
Becomes very slow as data size increases.
No indexing or query optimization.

Scalability

Not designed to handle large datasets.
Cannot efficiently support thousands or millions of records.
Difficult to scale across multiple servers.

Reliability

High risk of data corruption if the server crashes during a write.
No automatic backup or recovery mechanisms.
No transaction support (partial writes can break data).

Concurrency Issues

Multiple users accessing the file simultaneously can cause race conditions.
Requires manual locking logic, which is error-prone.

Because of these reasons, db.json is only suitable for practice, prototyping, or mock APIs, not production systems.

2. Ideal characteristics of a database system (beyond storage)

A proper database system provides much more than just storing data. Key characteristics include:

Performance

Fast read and write operations.
Uses indexing and query optimization.
Handles large volumes of data efficiently.

Concurrency

Supports multiple users accessing data at the same time.
Prevents conflicts using locking and transaction mechanisms.
Ensures consistent results under concurrent access.

Reliability

Ensures data is not lost during crashes or failures.
Provides backup and recovery mechanisms.
Maintains consistency even in unexpected situations.

Data Integrity

Enforces rules like primary keys, foreign keys, and constraints.
Prevents invalid or duplicate data.
Maintains accuracy and consistency of data.

Scalability

Can grow with increasing data and users.
Supports vertical scaling (better hardware) and horizontal scaling (more servers).

Fault Tolerance

Continues functioning even if part of the system fails.
Supports replication and failover mechanisms.

3. Types of databases and their use cases

Databases are broadly classified into two main types:

1. Relational Databases (SQL)

Description

Store data in tables (rows and columns).
Use structured schema.
Follow ACID properties (Atomicity, Consistency, Isolation, Durability).

Examples

MySQL
PostgreSQL
Oracle
SQL Server

Use Cases

Banking and financial systems
E-commerce applications
ERP and CRM systems
Applications requiring complex queries and strong data integrity

2. Non-Relational Databases (NoSQL)

Description

Store data in flexible formats (documents, key-value, graphs, etc.).
Schema-less or semi-structured.
Designed for high scalability and performance.

Examples

MongoDB (Document-based)
Redis (Key-value)
Cassandra (Wide-column)
Neo4j (Graph)

Use Cases

Real-time applications
Social media platforms
Big data and analytics
Applications with rapidly changing data structures

Conclusion

Relational databases are ideal for structured data and strong consistency, while NoSQL databases are better suited for scalability and flexible data models. Choosing the right database depends on the application’s requirements.