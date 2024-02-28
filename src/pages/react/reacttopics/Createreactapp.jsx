
export default function Createreactapp(){
    return(
        <div className="container-fluid"  id="fsm">
 <h1 className="td fw-bold">Create-React-App</h1>
  <h3 className="sh">CDN (Content Delivery Network)</h3>
  <p>A CDN is a network of servers that distributes content from an "origin" server
to end users around the globe by caching content nearby each user's point of
internet access. They initially request content from the origin server, which is
copied and stored elsewhere as needed. Both React and ReactDOM are
available over a CDN. </p>
<h4 className="sh">Drawbacks of using CDNs</h4>
<ul>
    <li>An essential prerequisite is an internet connection.</li>
    <li>If there is a server issue, packages might not load.</li>
    <li>Since one script file may be dependent on another, the order of CDN links is important. Browsers are not capable of linking files together it's possible that script files won't link correctly.</li>
    <li>You may forget to list all of the CDN connections required for an
application.</li>
</ul>
<h4 className="td">How to overcome the drawbacks?</h4>
<p>We can overcome drawbacks by installing packages locally and using
webpack which helps in file management and linking.</p>
<h3 className="sh">Webpack</h3>
<p><b>Webpack</b> is a module bundler. Its main purpose is to bundle JavaScript files
for usage in a browser. For eg: if there are 2-3 files like - index.js, app.js,
form.js, button.js. A module bundler will create a bundle of these files with
their dependencies. Webpack goes through your package and creates a
dependency graph which consists of various modules which your web app
would require to function as expected. Then, depending on this graph, it
creates a new package which consists of the minimum number of files required, often just a single bundle.js file which can be plugged into the html
file easily and used for the application. CRA comes pre configured with a
webpack.
</p>
<h4 className="fw-bold">Webpack Configuration</h4>
<p>Webpack can be configured by adding a <b>webpack.config.js file</b> in the root of
our application structure. It requires the following:</p>
<ul>
    <li><b>Entry property</b>, which  is used to specify which file webpack should
start with to get the internal dependency graph created. A path is
passed while creating the entry point (for eg: src/index.js).
</li>
<li><b>Loaders</b> check all the imports if any file needs any transformations or not. So, it internally transforms the file which need transformations. </li>
<li><b>Output property</b> specifying where the bundled file should be generated. Generally kept in the "dist" or "build" folder.</li>
</ul>
<h3 className="sh">Tools Installation</h3>
<h4 className="td">Nodejs</h4>
<p>Node.js is a run-time environment that comes with everything you need to run a JavaScript programme. It is used for running scripts on the server to render content before it is delivered to a web browser. <b>Node Package Manager, or NPM</b>, is a tool and repository for developing and sharing JavaScript code. You can download Node.js installer form <a href="https://nodejs.org/en/download/">here</a> NPM is installed automatically when node js is installed.</p>

<h4 className="td">Google Chrome Browser:</h4>
<p>Chrome, an internet browser released by Google, Inc. It is an open source program fro accessing the world wide web and running Web-based applications. <b>Chrome DevTools</b> is a amazing set of web developer tools built directly into the Google Chrome browser.</p>
<h4 className="td">VS Code</h4>
<p>Visual Studio Code is a lightweight but powerful source code editor which runs
on your desktop and is available for Windows, macOS and Linux.. Visit the
official website of the Visual Studio Code using any web browser like Google
Chrome, Microsoft Edge, etc to install the VS Code according to your
operating system.</p>

<h3 className="sh">Create React App</h3>
<p><b>Create-React-App</b> is a tool given by Facebook that provides us with boilerplate code and helps us to create our own react app. It comes preconfigured with webpack and babel.</p>
<h4 className="td">Instructions to create react app:</h4>
<ol>
    <li>Go to the desktop using <b>cd Desktop</b> or your project root directly where you want to create the project.</li>
    <li>Use command <b>npx create-react-app &lt;App_name&gt;</b>, to create the react app.</li>
    <li>Use the command <b>cd &lt;app_name&gt;</b> and go to the app.</li>
    <li>Use 1s to display the list of files in the current directory.</li>
    <li>And now open the file in VS code.</li>
    <li>use <b>npm start</b> to start your react project.</li>
</ol>
<p>Create-React-App can also be installed globally so that you can create a react
project anywhere inside your system. npm install -g create-react-app
is used to install CRA globally. But it is not recommended as versions may
change, and you may have two projects going that use two different versions.
It's not even needed to install create-react-app as you can do npx
create-react-app &lt;app_name&gt; and always use the latest version without
polluting your system.
</p>
<h3 className="td">Folder and File Structure</h3>
<p>The React application automatically creates required folders, as shown below.</p>
<ul>
    <li><b>node_module :</b> This folder will contain all the third party libraries and other react js dependencies. </li>
    <li><b>index.html : </b> It is the html file which get loaded on the browser. It contains html tags.</li>
    <li><b>manifest.json : </b>It contains information about your app like name, description, icon etc. </li>
    <li><b>src folder</b>: src is one of the main folders in react project. You can delete or modify any file of this folder except index.js as it is the entry point for webpack. </li>
    <li><b>index.js : </b> index.js is the file that will be called once we will run the project.</li>
    <li><b>app.js</b> App.js is a componeent that will get loaded under index.js file.</li>
    <li><b>.gitignore: </b> This file is used by source control tool to identify which files and folders should be icluded or ignored during code commit.</li>
    <li><b>package.json : </b> This file contains dependencies and scripts required for the project. </li>
    <li><b>package.lock.json: </b> It is created for locking the dependency with the installed version. It will install the exact latest version of that package </li>
</ul>

<h3 className="sh">Imports/Exports</h3>
<p>If you declare some value/function in some file, and you try to access that in file, you won't be able to do so. As each individual has its own local scope all these available in another file, We can use export and import.</p>
<p>The <b>export</b> and <b>import</b> are the keywords to utilize the code of one file to other files. </p>
 <h5 className="sh">Export</h5>
 
<p>Export keyword is used to provide code to other files. There are two types of exports:</p>
<li><b>Named Exports:</b>This syntax allows you to individually import values
that have been exported by their name. It can be done in two ways:</li>
<h5 className="td">I. Export Individually</h5>
<p className="code">
    export var a = 10; <br />
    export let obj = &#123;name:"Prem"&#125; ; <br />
    export function greet()&#123; <br />
 &nbsp;&nbsp;   console.log("Hello");
    &#125;
</p>
<h5 className="td">Export all at once at the bottom</h5>
<p className="code">
    var a = 10; <br />
    let obj = &#123;name:"Alexa"&#123<br /> function greet()&#123; <br />
    console.log("Hello"); <br />
    &#125; <br />
    export &#123;a,obj,greet&#125;;
</p>
<h4 className="td">Default Exports:</h4>
<p>You can export multiple named exports and imported
them individually or as one object with each export as a method on the
object. But, files can also contain a default export, using the default
keyword. A default export will not be imported with curly brackets, but
will be directly imported into a named identifier. It can be done in two
ways:</p>
<h5 className="td">I. Export individually : </h5>
<p className="code">
    function default function greet()&#123; <br />
    console.log("Hello");
</p>
<h5 className="td">Export at the bottom</h5>
<p className="code">
    export function greet()&#123; <br />
    console.log("Hello"); <br />
    &#125; <br />
    export default greet;
</p>
<h3 >Import</h3>
<p>Import keyword is used to read code exported from another files. The as keyword is
used to create an alias to import under different names. Import can be done in three
ways:</p>
<li>Importing named export</li>
<p className="code">
    import &#123;x,...&#125; from "file"
</p>
<li>Importing the default export:</li>
<p className="code">
    import &#123;x,...&#125; from "file"
</p>
<li>Importing the default export: </li>
<p className="code">import x from "file" </p>
<li>Import all : </li>
<p className="code">
    import * as obj from "file"
</p>

<h2 className="">Additional Note</h2>
<h4>File structure and conventions</h4>
Some of the common approaches that are followed while creating the folder
structure of the application are as follows:
<div className="ms-4">
    <li><b>Grouping by features or routes: </b> Structuring project by locating CSS, JS, and tests together </li>
</div>
<li><b>Grouping by file type: </b> structuring project by grouping similar files
together. For eg: separate folder for CSS files, Test files etc. This is the
most common approach which is followed.</li>
The top level directory structure of src folder can be as follows:
<ul>
    <li><b>assets-</b>For keeping global static assets such as image company logo, etc.</li>
    <li><b>component-</b>or keeping global shared/reusable components, such
as layout (wrappers, navigation), form components, buttons</li>
    <li><b>Services</b> this folder can have JavaScript modules
</li>
    <li><b>Stor</b>Global Redux store
</li>
    <li><b>util</b>Utilities, helpers, constants, etc. can be kept in this folder
</li>
    <li><b>views</b>Can also be called "pages", the majority of the app would be
contained here</li>
</ul>
<p> <b>Note: </b>Try to minimise nesting of folders as much as possible as it becomes
harder to write relative imports between them.</p> 
         </div>
    )
}