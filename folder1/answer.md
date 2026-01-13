#### Node.js Architecture and Internals

1. Node.js Architecture

Node.js is a runtime that allows us to run JavaScript outside the browser.
It is designed to handle a large number of requests efficiently using a non-blocking, event-driven model.
Node.js works using the following main components:

JavaScript Engine (V8)
Node.js Core APIs
Native Bindings
Event Loop
libuv
Thread Pool

These components together allow Node.js to run JavaScript, interact with the operating system, and handle many users at the same time.

2. JavaScript Engine (V8)

V8 is the JavaScript engine developed by Google.
Its job is:

To read JavaScript code
Convert it into machine code
Execute it on the CPU

In Node.js, V8 runs:
Our JavaScript logic
Variables, functions, loops, objects, etc.
V8 does not know anything about files, networking, or databases.
It only knows how to run JavaScript.

3. Node.js Core APIs

Node.js Core APIs are built-in features that allow JavaScript to do things outside the browser, such as:
Reading files
Writing files
Making network requests
Creating servers
Working with OS

Examples:
fs → file system
http → web server
path → file paths
crypto → encryption

These APIs give JavaScript superpowers.

4. Native Bindings

JavaScript cannot directly talk to the operating system.
So Node.js uses native bindings, which are small pieces of C/C++ code that connect JavaScript to system-level functions.
Native bindings act as:
A bridge between JavaScript and the operating system.
For example:
When we use fs.readFile()
JavaScript calls native C++ code
That C++ code talks to the OS

5. Event Loop

The Event Loop is the heart of Node.js.
It controls:
When code runs
Which task runs next
How asynchronous code is handled
It keeps checking:
Are there callbacks ready?
Are there completed tasks?
Are there promises to resolve?
The Event Loop allows Node.js to handle thousands of users without blocking.

6. libuv

What is libuv?

libuv is a C library used by Node.js that provides:
Event loop
Thread pool
Async I/O handling
It works behind the scenes.

Why Node.js needs ?

JavaScript is single-threaded and cannot do:
File reading
Networking
Timers - all by itself.

libuv does these heavy tasks in the background so JavaScript does not get blocked.
Responsibilities of libuv
libuv handles:
File system operations
Network requests
Timers
Thread pool management
Event loop management

7. Thread Pool

What is a Thread Pool?
A thread pool is a group of background threads that do heavy or slow tasks.
These threads run outside the main JavaScript thread.
Why Node.js uses a thread pool
Some operations are slow:
Reading files
Encrypting data
DNS lookup
If JavaScript waited for them, the whole server would freeze.
So Node.js sends these tasks to the thread pool.
Operations handled by the thread pool
Thread pool handles:
File system (fs)
Crypto operations
Compression
DNS lookup

8. Worker Threads

What are worker threads?
Worker threads allow Node.js to run JavaScript code in multiple threads.
Each worker has:
Its own event loop
Its own memory
Why worker threads are needed

They are used for:
Heavy calculations
CPU-intensive tasks
Data processing
They prevent the main thread from freezing.


9. Event Loop Queues

Node.js has different queues to manage tasks.
Macro Task Queue
Contains:
setTimeout
setInterval
I/O callbacks
Network responses
These are bigger async tasks.

Micro Task Queue
Contains:
Promise.then()
Promise.catch()
queueMicrotask
These are smaller, faster tasks.

Execution priority
Micro task queue always runs before macro task queue.

So:
Examples
Micro tasks
Promise.resolve().then(() => console.log("done"));
Macro tasks
setTimeout(() => console.log("timer"), 0);
The promise runs before the timer.