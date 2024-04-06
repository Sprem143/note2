
export default function Module(){
    return(
        <>
        <div className="container-fluid" id="fsm">
<h1>Module in Node.JS</h1>
<h5 className="td">What is a Module ?</h5>
<p>A module is a self-contained code that can be easily reused across different parts of an application. It helps in organizing code and makes it easier to maintain and understand. In Node.js, there are two syntaxes available to use modules: <br />
I. CommonJS <br />
II. ES6 module</p>

<h5 className="sh">CommonJS Module</h5>
<p>CommonJS is the default module system in Node.js that uses the 'require' function to import modules and the 'module.exports' object to export them. <br />
 <br />
 Here is an example of a CommonJS module :
 <div className="code">
    // utils.js  <br/>
    const add = (a,b)=&gt; a+b; <br />
    const subtract = (a,b) =&#123; a-b &#125; <br />
    module.exports = &#123; add, subtract &#125;
 </div>
 In the above example, a module called util.js exports two functions, add and subtract, using the moddule.exports object. They can be used in another file as follows:
</p>
<div className="code">
    // app.js   <br/>
    const &#123; add, subtract &#125; = require('./utils'); <br />
    console.log(add(2,3)); // output: 5 <br />
    console.log(subtract(5,2)); // output: 3
</div>
<h5 className="sh">ES6 Module </h5>
<p>The ES6 module syntax is a more modern approach that is supported by modern JavaScript  environments, and it employs the "import" and "export" keywords. <br />
Here is an example of an ES6 module: 
<div className="code">
    //utils.mjs br
    export const add = (a,b) =&gt; a+b; <br />
    export const subtract = (a, b) =&gt; a-b; 
</div>
<br />
In the above example, a module called utils.mjs exports two functions add and subtract using the export keyword. They can be used in another file as follow:
<div className="code">
    // app.mjs <br/>
    import &#123; add, subtract &#125; from './utils.mjs' <br />
    // import * as utility from './utils.mjs' <br/>
    console.log(add(2,3)); // output: 5 <br />
    console.log(subtract(5,2)); // output: 3 <br />
    // console.log(utility.add(2,3)); output: 5; <br/> 
    //console.log(utility.subtract(5,2)); output: 3;
</div>
In the above example, the add and subtract functions from the utils.mjs module are imported into the app.mjs file using destructuring and then invoked with arguments 2, 3 adn 5,2 respectively. This would output 5 and 3 to the console.
<b className="td">Note</b> : You must sue the .mjs extension for ES6 module files.
</p>

<h5 className="td">Types of Modules : </h5>
<p>There are three main types of modules in Node.js : <br />
<span className="td">I. Core modules:</span> These are built-in modules in Node.js that provide basic functionality for tasks like file I/O, networking, and more. They can be imported and used in your application without installation or configuration. Here are some common core modules:
<li>'fs': The 'fs' module works with the file system, like reading and writing files.</li>
<li>'http' : The 'http' module is used for creating HTTP servers adn clients.</li>
<li>'path': The 'path' module is used for working with file paths.</li> <br />
<span className="td">II. Internal/User-defined/local moduels: </span> These are custom modules you create for your own application. They are created as separated files in your application and can be imported and used in other parts of your application using either the CommonJS or ES6 module syntax. <br />
<span className="td">III. Third-party moduels: </span> These are modules created by other developers and published on package registries like npm. They can be installed using a package manager like npm or yarn and then imported and used in your application.
</p>

<h4 className="td">Package Managers and NPM</h4>
 <h5>Package </h5>
 <p>A package is a collection of reusable code that can be easily shared and installed in projects. It usually contains one or more modules, along with other files like documentation, license information, and configuration files. Packages in Node.js are usually distributed via the npm registry.</p>

 <h5 className="fw-bold">Package Manager</h5>
 <p>A package manager is a tool that simplifies managing, installing, and updating packages. In the Node.js ecosystem, the most popular package manager is NPM, which unofficially stands for Node Package Manager. <br />
 <b>NPM allows:</b>  <br />
 <ul>
    <li>Installation of packages</li>
    <li>version Management</li>
    <li>Managing dependencies</li>
    <li>Publishing packages</li>
 </ul>
 <span className="td">Note: </span>When we install Node.js, NPM is installed by default.
 <br />
 Here is the command to the npm version:
 <div className="code">
    npm -v
 </div>
 </p>

<h5 className="sh">Nodemon </h5>
<p>Nodemon is a popular utility for Node.js development that automatically restarts your application when file changes are detected. This can save you much time during development, as you won't have to manually restart your server each time you make changes. <br />
To install "nodemon" globally, you can use the following command in  the terminal:</p>
<div className="code">
    npm install -g nodemon
</div>
<p>This will download and install "nodemon" globally on your system. Now, you can use nodemon to start your application by running:</p>
<div className="code">
    nodemon app.js
</div>
<p>Here, app.js is the entry point of your application. Nodemon will watch for changes in your code automatically restart the server when any changes are detected. This can be huge time-saver during development.</p>
<h5 className="td">Understanding Package.json file</h5>
<p>Package.json file is a crucial part of any Node.js project and contains metadata about your project such as its name, version, description, author information, dependencies, scripts and other configuration options. <br />
Dependencies listed in package.json can be installed by running the command "npm install" in the project directory. <br />
Here's an example of a packge.json file for a Node.js project that includes nodemon as a dev dependency:</p>

<div className="code">
    &#123; <br />
    &emsp;"name":"my project", <br />
    &emsp;"description":"A cool Node.js project!", <br />
    &emsp;"main":"server.js", <br />
    &emsp;"scripts":&#123; <br />
    &emsp;&emsp;"start":"node server.js", <br />
    &emsp;&emsp;"go":"nodemon server.js" <br />
    &emsp;&#125;, <br />
    &emsp;"author":"Prem Kumar", <br />
    &emsp;"dependencies": &#123; <br />
    &emsp;&emsp;"mongodb":"^5.1.0" <br />
    &emsp; &#125;, <br />
    &emsp;"devDependencies":&#123; <br />
    &emsp;&emsp;"nodemon":"^2.0.22" <br />
    &emsp; &#125; <br />
    &#125;
</div>
<p>In this example, we have added "nodemon":"^2.0.22" as a dev dependency by including it in the devDependencies section of the package.json file. We have also added a new script called "go" that runs nodemon with server.js file. <br />
This means that during development, we can use <span className="code p-0">npm run go</span> to start the server with nodemon, which will automatically restart the server whenever changes are made to the code. 
</p>

<h5 className="td">Dependencies adn devDependencies</h5>
<p>In a Node.js project, the package.json file lists all of the external dependencies that the project needs to run, Two types of external dependencies can be included in the file:</p>

<ul>
    <li><b>dependencies: </b> These are the dependencies that are required for the project to run in a production environment. An example of a dependency could be MongoDB, which is a popular database system used with Node.js. You can install MongoDB as a dependency using the following command: <span className="code p-0">npm install mongodb</span></li>
    <li><b>devDependencies: </b> These dependencies are only needed for development purposes, such as testing or building the project. They are installed with the command npm install and can be listed with the --save-dev or -D flag. For example, to install Nodemon as a dev dependency, you can run the followong command: <span className="code p-0">npm install nodemon --save-dev</span> or <span className="code p-0">npm install -D nodemon</span></li>
</ul>
<p>Listing dependencies separately can help make it clear which dependencies are requried for the project to run in production, and which are only needed for development. This can also help with managing dependencies and reducing the size of the project's node_modules directory.</p>

<h5 className="td">Understanding package-lock.json</h5>

<ul>
    <li>The package-lock.json file is automatically generated by npm when packages are installed.</li>
    <li>It contains information about the exact versions of all installed packages and their dependencies.</li>
    <li>The purpose of package-lock.json is to ensure the same versions of packages are installed on every environment your project runs in, avaoiding unexpected issues caused by different package versions.</li>
    <li>Without package-lock.json, developers or environments might end up with different package versions, leading to inconsistent behavior and bugs that are difficult to reproduce and fix.</li>
</ul>

<h5 className="td">Differences between package.json and package-lock.json</h5>
<p>The package.json file contains high-level information about a Node.js project and its direct dependencies, while the package-lock.json file stores the exact version of all installed packages, including nested dependencies. In other words, the package.json file is a metadata file that lsits the project's dependencies, script and other configuration options, while the package-lock.json file is a detailed record of the exact versions of each dependency, ensuring consistency across different environments.</p>

<h5 className="td">Understanding Node Version Manageer (NVM)</h5>
<p>Node Version Manager(NVM) is a tool allows the management of multiple Node.js versions on a computer. As a developer, managing multiple projects with different Node.js versions can be difficult, but NVM helps to swotch between then easily, ensuring consistency and smooth operation.</p>

<h5 className="b">How to use NVM</h5>
<b>Installing NVM</b>
<ol>
    <li>Open a terminal window</li>
    <li>Install NVM using one of the following commands, depending on your operating system:</li>
    <p><span className="fw-bold">For window: </span> You can download and run the installer from the NVM windows repository on GitHub: 
    <a href="https://github.com/coreybutler/nvm-windows/releases">Link</a></p>
    <li>VErify that NVM is installed correctly by running <span className="code p-0">nvm --version</span></li>
</ol>
<b>Some basic commands to use NVM:</b>
<ol type="I">
    <li>To list all the available Node.js versions:</li>
    <p className="code p-0">nvm ls-remote</p>
    <li>To install a specific Node.js version:</li>
    <p className="code p-0">nvm install &lt;version&gt;</p>
    <li>To switch to a different Node.js version:</li>
    <p className="code p-0">nvm use &lt;version&gt;</p>
    <li>To set a default Node.js version to use in new shells:</li>
    <p className="code p-0">
        nvm alias default &lt;version&gt;
    </p>
</ol>

<h5 className="td">Reading Data from Console</h5>
<p>Reading user input from the console is crucial for building interactive CLI apps and collecting user preferences in command-line tools. This feature enables command-line applications to interact with users and process their input in the application. Other use cases include creating a chat application, a command-line calculator, or using git and npm commnands in the terminal.</p>

<h5 className="fw-bold">Readline module</h5>
<p>To read input from the consle in Node.js, we can use the built-in Readline module. Readline is a module that provides an interface for reading data from a readable stream(such as process.stdin) on a line-by-line basis. <br />
To use the Readline module, we need to require it at the beginning of our file:
<div className="code">
    const readline = require('readline');
</div>
Here's an example code snippet that takes two inputs from the command line using Readline module and returns their sum:
<div className="code">
    const readline = require('readline'); <br />
    const rl = readline.createInterface(&#123; <br />
      &emsp;input: process.stdin, <br />
      &emsp;output: process.stdout <br />
     &#125;) <br />
     rl.question('Enter the first number: ', (num1) =&gt; &#123; <br />
     &emsp;rl.question('Enter the second number: ',(num2) =&gt; &#123;
     &emsp;&emsp;const sum = parseInt(num1)+parseInt(num2); <br />
     &emsp;&emsp;console.log(`The sum is : $&#123; sum &#125;`); <br />
     &emsp;&emsp;rl.close(); <br />
     &emsp; &#125;) <br />
      &#125;)
</div>
The readline module exports several functions that we can use to interact with the console. The most commonly used are: 
</p>
<li> <b>readline.createInterface():</b> This function creates a new Readline interface, which provides methods for reading input from the console.</li>
<li><b>rl.question():</b> This function displays a prompt to the user and waits for them to enter a response. The response is then passed to a callback function that we provide.  </li>
<li><b>rl.close(): </b> This function closes the Readline interface adn frees up resources.</li>

<h5 className="td">File System Module:</h5>
<p>The FileSystem module, also known as 'fs', is a built-in module in Node.js that provides a variety of methods for interacting with the file system. It enables you to perform various operations on files and directories, including reading, writing, deleting, and updating them.</p>

<h5 className="fw-bold">Types of "fs" methods</h5>
<p>There are two types of fs methods available: <br />
I. blocking (or synchronous) and <br />
II. non-blocking (asynchronous) 
</p>

<h5 className="td">Using Synchronous Methods </h5>
<ol type="I">
    <li> <span className="fw-bold">Reading a file: </span>To read a file, you can use the fs.readFileSync() method, which returns a bufer. You can convert the buffer to a string, or you can set the encoding property to 'utf8' to get the content directly as a string.</li>
    <div className="code">
        const fs = require('fs'); <br />
        const path = 'example.txt'; //A file at path exists <br />
        //reading a file synchronously <br/>
        const data = fs.readFileSync(path, &#123; encoding : 'utf8' &#125;); <br />
        console.log(data);
    </div>
    <li> <span className="fw-bold"> Writing to a file: </span> TO write data to a file, use the fs.writeFileSync() method. It creates a new file or overwrites an existing one.</li>
    <div className="code">
        const fs = require('fs'); <br />
        const path = 'example.txt'; <br />
        // writing to a file synchronously <br/> 
        fs.writeFileSync(path,"Hello World!"); <br />
        console.log('File written successfully.');
    </div>
    <li> <span className="fw-bold"> Updating a file: </span>If you want to append content to an existing file, use the fs.appendFileSync() method.</li>
    <div className="code">
        const fs = require('fs'); <br />
        const path = 'example.txt'; <br />
        // updating a file synchronously <br/> 
        fs.appendFileSync(path, '\nThis is an update.'); <br />
        console.log('File updated successfully.');
    </div>
    <li> <span className="fw-bold"> Deleting File: </span> To delete a file, use the fs.unlinkSync() method.</li>
    <div className="code">
        const fs = require('fs'); <br />
        const path = 'example.txt'; <br />
        // Deleting a file synchronously using fs.unlinkSync() <br/>
        fs.unlinkSync(path); <br />
        console.log('File deleted successfully.');
    </div>
</ol>
<h5 className="fw-bold">Using Asynchronous methods</h5>
<p>We learned about performing CRUD operations using blocking code with File System module, which means while file operations are being performed, our main thread is blocked, and it can't perform any other task. Blocking code can make your app less responsive and slow. To avoid this, we can use non-blocking or asynchronous methods available in the FileSystem module.</p>
 <ol type='I'>
    <li><span className="fw-bold">Reading a file:</span> To read a file asynchronously, use fs.readFile().</li>
    <div className="code">
        fs.readFile('data.txt',(err,data)=&gt; <br />
        if(err)&#123; <br />
        &emsp;&emsp;console.log(err); <br />
        &#125;else&#123; <br />
        &emsp;&emsp;console.log(data.toString()); <br />
        &emsp;&#125; <br />
        &#125;)
    </div>
<li> <span className="fw-bold">Writing to a file : </span>To write data to a file asynchronously, use fs.writeFile().</li>
<div className="code">
        fs.readFile('employee.txt','New Employee', (err)=&gt; <br />
        if(err) <br />
        &emsp;&emsp;console.log(err); <br />
        else <br />
        &emsp;&emsp;console.log('File is written'); <br />
        &#125;)
    </div>
<li> <span className="fw-bold">Updating a file:</span> To append content to a file asynchronously, use fs.appendFile().</li>
<div className="code">
    fs.appendFile('employee.txt','\n Another employee', (err)=&gt; &#123; <br />
     &emsp;if(err)&#123; <br />
     &emsp; &emsp;console.log(err); <br />
     &emsp;&#125; else &#123; <br />
     &emsp; &emsp;console.log('File is updated') <br />
     &#125;)
</div>
<li> <span className="fw-bold">Deleting a file: </span> To delete a file asynchronously, use fs.unlink().</li>
<div className="code">
    fs.unlink('employee.txt',(err)=&gt;&#123; <br />
    &emsp;if(err)&#123; <br />
    &emsp;&emsp;console.log(err); <br />
    &emsp;&#125; else &#123; <br />
    &emsp;&emsp;console.log('File is deleted');
    &emsp;&#125;
    &#125;)
</div>
 </ol>
 <h4 className="td">Path module</h4>
 <p>The Path module in Node.js is a buult-in module that provides various methods to work with file paths. it can be used to normalize, join, resolve, and manipulate file and directory paths.</p>
 <ol type="I">
    <li><span className="fw-bold">path.join(): </span> This method joins two or more path segments using the plateform-specific separator and returns the combined path. <br />
    Here is an example : 
    <div className="code ">
        const path = require('path'); <br />
        const filePath = path.join('folder','file.txt'); <br />
        console.log(filePath); <br />
       <span className="text-secondary"> // output: folder/file.txt (on Unix-based systems)</span> <br/> 
        <span className="text-secondary">// output: folder\file.txt (on windows systems)</span>
    </div>
    </li>
    <li><span className="fw-bold">path.resolve(): </span> This method resolves the given sequence of paths or path segments into an absolute path. It takes multiple arguments as input and returns the resolved absolute path. <br />
    Here is an example : </li>
    <div className="code">
        const path = require('path'); <br />
        const absPath = path.resolve('folder','file.txt'); <br />
        console.log(absPath); <br />
        <span className="text-secondary">// output</span> <br />
        /home/user/folder/file.txt (on Unix-based system) <br />
        <span className="text-secondary">// output</span> <br />
        \home\user\folder\file.txt (on windows system)
    </div>
    <li><span className="fw-bold">path.extname(): </span>This method returns the extension of the given file path. It takes a file path as input, and returns the extension (including the dot). If there is no extension, an empty string is returned. <br />
    Here is an example:  </li>
    <div className="code">
        const path = require('path'); <br />
        const ext = path.extname('file.txt'); <br />
        console.log(ext); <span className="text-secondary">//output: .txt</span>
    </div>
 </ol>
        </div>
        </>
    )
}