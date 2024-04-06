
export default function NodejsHome(){

    return(
        <>
           <div className="container-fluid" id="fsm">
              <h1>Introduction to Node.js</h1>
              <b>What is Node.js ? </b>
              <ul>
               <li>Node.js is an open-source, cross-plateform JavaScript runtime.</li>
               <li>It runs on Chrome's V8 JavaScript engine.</li>
               <li>Node.js enables server-side JavaScript programming.</li>
               <li>Node.js helps create scalable and high-performance web applications.</li>
              </ul>
              <p><span className="td">Note</span>Node.js is neither a library nor a framework.</p>

              <b>Why was Node.js created ?</b>
              <ul>
                <li>Node.js was created to overcome the limitations of existing server-side technologies, such as Apache and PHP, which has issues handling multiple sumultaneous connection.</li>
                <li>Node.js was a better solution, especially for JavaScript developers.</li>
              </ul>
              <b>How was Node.js created ?</b>
              <p>
                Node.js is a  server-side runtime for JavaScript created by Ryan Dahl in 2009. His goal was to develop a fast and efficient platform that could handle the demands of modern web applications. He used Google's V8 JavaScript engine for its high performance and paired it with an event-driven, non-blocking I/O model to create a potent and effective server side runtime for JavaScript.
              </p>
              <b>Advantages of using an event-driven, non-blocking I/O model : -</b>
              <p>
                The main advantage of using an event-driven, non-blocking I/O model is that it allows for better performance and resource utilization, especially wen handling multiple connections simultaneously.
              </p>
              <b>Why is node.js Popular ?</b>
             <ul>
                <li>High-Performance</li>
                <li>Role of javascript</li>
                <li>Lightweight</li>
                <li>Works well with data-intensive applications.</li>
             </ul>
             <b>Runtimes</b>
             <p>A runtime is an environment that allows a programming language to execute code. It provides the necessary resoruces and tools for a language to interact with the operating system and hardware.Regarding JavaScript, the browser serves as the runtime environment, and NodeJS works as runtime on the server.</p>
             <b>What do Runtimes do ?</b>
             <ul>
                <li>Compiles or Interprets</li>
                <li>Memory Management</li>
                <li>Handles Input/Output Operations</li>
                <li>Garbage Collection</li>
             </ul>
             <b>Different Browser Runtimes for JavaScript</b>
             <p>There are several browser runtimes (Javascript engine) for Google Chhrome, SpiderMonkey for Mozilla Firefox, Chakra for Microsoft Edge, javaScriptCore for Apple Safari. Each of these engines has its way of implementing and optimizing JavaScript. </p>
           <h4 className="td">Setting up Node</h4>
           <b>Steps to install Node.js</b>
           <ol>
            <li>Go to nodejs.org, the official Node.js website.</li>
            <li>Choose between the LTS(Long Term Support) or the current version of Node.js.</li>
            <li>It is recommended to select the LTS version for better stability, especially for beginners.</li>
            <li>Download the LTS installer that matches your operating system.</li>
            <li>Follow the installation stpes.</li>
            <li>After the installation process, Node.js will be installed and ready to use.</li>
            <li>To check the Node.js installation, open the terminal/command prompt.</li>
            <li> Type "node -v" and press enter.</li>
            <li>The installed version will be displayed.</li>
           </ol>

           <h3>Creating and running the "Hello World" Node.js Program</h3>
           <ol>
            <li>Open a text editor and create a new file named "hello-world.js"</li>
            <li>Type the following code into the file:</li>
            <div className="code">
                console.log("Hello World !");
            </div>
            <li>Save the file with the .js extension.</li>
            <li>Type "node hello-world.js" and press enter.</li>
            <li>The program will execute and the output "Hello World !" will be displayed in the terminal/command prompt.</li>
           </ol>
           <h3 className="td">Blocking and Non-Blocking Code.</h3>
           <p> <span className="td">Blocking code,</span> or synchronous code, is code that stops the execution of your program until a task is completed. This can cause your application to become unresponsive, especially when dealing with tasks that take significant time, like calculations or loops. <br />
           Here's an example of blocking code:
           </p>
           <div className="code">
            console.log('Starting loop...'); <br />
            for(let i = 0; i&lt;10000000000; i++)&#123; <br />

                // this code illustrates a time-consuming task and does not perform any // practical action    <br/>
                &#125; <br />
                console.log("Finished loop")
           </div>
           <p>
            The code is blocking because it contains a long-running synchronous task. The program cannot perform other tasks during the execution of the loop, which may cause it to appear frozen or unresponsive to the user. <br />
            <b className="td">Non- Blocking</b> or asynchronous code enables a program to continue execution while waiting for a task to complete. This is done using callbacks, promises, or async/await syntax in JavaScript.
           </p>
           <div className="code">
            console.log('Starging timer'); <br />
            setTimeout(()=&gt; &#123; <br />
            console.log('Timer finished') <br />
            &#125;, 5000 ) <br />
            console.log('Finished timer.')
           </div>
           <p>In this example, the setTimeout function doesn't block the exection. Instead, it takes a callback function that gets executed after a specified delay.</p>

           <h3 className="td">How does NodeJS work ?</h3>
           <b>Event Loop</b>
           <p>The Event Loop is a crucial component of Node.js, responsible for enabling non-blocking I/O operations in a single-threaded architecture. Essentially, it is a continuous loop that checks for pending tasks and executes them one by one in the order they were added to the queue. This process continues until there are no more asynchronously, the Event Loop helps to ensure that the application remains responsive even when handling a large number of requests.</p>
           <h4 className="td">I/O Operations</h4>
           <p>Refer to the tasks that involve reading or writing data to external resources like files, databases, or network connetions. As there operations are generally time-consumong, Node.js manages them asynchronously to prevent the maon thread from being blocked.</p>
           <h4 className="td">Handling I/O Operations</h4>
           {/* --- */}
           <ul>
            <li>Node.js uses a combination of the Event Loop, <b>Worker thread,</b> and callback functions to handle I/O operations.
            </li>
            <li>
                When an I/O operation is initiated, Node.js Sends the task to a worker therad, which is seperate from main thread.
            </li>
            <li>
                The worker thread handles the I/O operation in the background, allowing the main thread to continue executing other tasks.
            </li>
            <li>Once the I/O operation is complete, the worker thread adds a callback function associated with the operation to the Event queue.</li>
            <li>
                The Event Loop executes the callback function when it becomes available, allowing Node.js to handle the result of the I/O operation asynchronously.
            </li>
           </ul>
           <h4 className="td">Performance: </h4>
           <p className="sh">Pros</p>
           <ul>
            <li>Node.js is excellent for I/O-bound operatins.</li>
         <li>Non-blocking, the event-driven architecture enables it to handle many simultaneous connections.</li>
           </ul>
           <p className="sh">Cons</p>
           <ul>
            <li>It may struggle with CPU-bound tasks.</li>
            <li>Single-threaded execution of JavaScript can cause decreased perfromance for complex calculations and data processing.</li>
           </ul>
     <h3 className="td">What is Server ?</h3>
     <b>How Web Applications Work ?</b>
     <p>Web applications follow a client-server architecture, where the client sends request and sends a response back to the client. The communication between the client and server happens via HTTP requests and responses. </p>

     <h5 className="sh">Server : </h5>
     <p>A server is a computer or software that provides resources or services to other computers over a network. In web applications, servers store and process data, handle user authentication, and execute server-side code. Servers are responsible for serving static files to the browser for rendering web pages, as well as receiving and processing user input to enable dynamic updates on the page.</p>
      
      <h5 className="sh">Web Application</h5>
     <p>A web application (web app) is an application program that is stored on a remote server and delivered over the internet through a browser interface. <br />
      &emsp;&emsp;&emsp;For a web app to operate, it needs a web server, application server and database. Web servers manage the requests that come from a client, while the application server completes the requested task. A database stores any necessary information.</p>

     <h3 className="td">Crealting an HTTP Server </h3>
     <h5>What is HTTP ?</h5>
     <p>HTTP stands for Hypertext Transfer Protocol. It is a communication protocol used to transmit and receive data over the Internet. HTTP allows clients (such as web browsers) to send requests to servers respond with the requested data.</p>
      
      <h5>Creating a Server</h5>
      <p>To create a server in Node.js use the built-in <span className="td">'http' module.</span></p>

      <ol type='I'>
        <li>Start by importing it : </li>
        <div className="code">
          const http = require('http');
        </div>
        <li>Now, create a simple server using the <b>'http.createServer()'</b> method: <br />
        The createServer method creates an HTTP server. It takes a callback function as an argument that will be called every time a request is made to the server. The callback function has two arguments: req, which represents the incoming HTTP request, and res, the HTTP response object we can use to send data back to the client.
        </li>
        <div className="code">
          const server = http.createServer((req,res)=&gt;&#123; <br />
           res.end('Hello World') <br />
          &#125;);
        </div>
        <li>Make the server listen on a specific port:</li>
        <div className="code">
          const PORT = 3000; <br />
          server.listen(PORT); <br />
          console.log(`server is listening at http://localhost:$&#123; PORT &#125;`)
        </div>
        With this code, we've created a basic server that listens on port 3000 and sends back a "Hello World !" message for every request.
      </ol>
      <h5>Understanding Ports</h5>
      <p>A port is a unique address that identifies a process or service. Each application has a unique port number assigned to it. When running multiple servers on a single computer, using a different port number for each server allows the client to know which server to communicate with.</p>

      <h5 className="td">Returning HTML as Response</h5>
     <p>To return an HTML file, we need to read it using the <b>fs</b> module and then send its content as a response. Let's create a simple ecsmple to demonstrate this.</p>
<ol>
  <li>First, create an HTML file named index.html with some primary content: </li>
  <div className="code">
    &lt;html lang='en'&gt; <br />
    &lt;head&gt; <br />
    &emsp;&emsp;&lt; meta charset="UFT-8" &gt; <br />
    &emsp;&emsp;&lt;title&gt; My Portfolio &lt;/title&gt; <br />
    &lt;/head&gt; <br />
    &lt;body&gt; <br />
    &emsp;&emsp;&lt;h1&gt; Welcome to My Portfolio&lt;/h1&gt; <br />
    &emsp;&emsp;&lt;p&gt;This is a simple example of serving an HTML file using Node.js &lt;/p&gt; <br />
    &lt;/body&gt; <br />
    &lt;/html&gt; <br />
  </div>
  <li>Now, modify the server that serves this file: </li>
  <div className="code">
    const http = require('http'); <br />
    const fs = require('fs'); <br />
    <br />
    const server = http.createServer((req,res)&#123; <br />
      const data = fs.readFileSync('index.html'); <br />
      res.end(data); <br />
     &#125;) <br /> 
     <br />
     server.listen(3100); <br />
     console.log('server is listening on 3100');
  </div>
</ol>
In this example, we are using the <b>fs.readFileSync</b> method to read the index.html file, and it can read files and provide content to you.
           </div>
        </>
    )
}