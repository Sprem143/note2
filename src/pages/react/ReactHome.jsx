import "/src/App.css";
export default function ReactHome() {
  return (
    <div className="container-fluid" id="fsm">
      <h2 className="text-center"> Welcome to React Home Page</h2>
      <h4>Introduction Of React</h4>
      <p>
        React is a JavaScript library for building user interfaces. JavaScript
        libraries like React are collections of prewritten code snippets that
        can be used and reused to perform common JavaScript functions, helps in
        faster development with fewer vulnerability to have errors. UI(User
        Interface) is built from small units like buttons, text, and images.
        Everything on the screen can be broken down into components, from
        websites to phone apps. React lets you combine them into reusable,
        nestable components.
      </p>
      <h4>History of React</h4>
      <ul style={{ listStyle: "disc" }}>
        <li>
          {" "}
          React was originally created by Jordan Walke, a software engineer at
          Facebook. But today, it is maintained by Meta(formerly Facebook) and a
          community of over a thousand open-source developers
        </li>
        <li>
          It was first deployed on Facebook's News Feed in 2011 and later on
          Instagram in 2012. It was open-sourced at JSConf US in May 2013.
        </li>
        <li>
          Some of the major companies that currently use React include Netflix,
          Facebook, Instagram, Airbnb, Reddit, Dropbox, and Postmates.
        </li>
        <li>Current(Latest) version of React is v18.</li>
      </ul>
      <h4>Why use React?</h4>
      <h5>React is Composable:</h5>
      <p>
        Components are the building blocks of any React application, and a
        single app usually consists of multiple components. These components
        have their logic and controls, and they can be reused throughout the
        application, which in turn dramatically reduces the application’s
        development time.
      </p>
      <h5>Faster performance:</h5>
      <p>
        React uses Virtual DOM, thereby creating web applications faster.
        Virtual DOM compares the components’ previous states and updates only
        the items in the Real DOM that were changed, instead of updating all of
        the components again, as conventional web applications do.
      </p>
      <h5>React is Declarative:</h5>
      <p>
        React is easy to learn, mostly combining basic HTML and JavaScript
        concepts with some beneficial additions. Still, as is the case with
        other tools and frameworks, you have to spend some time to get a proper
        understanding of React’s library.
      </p>
      <h5>Dedicated tools for easy debugging:</h5>
      <p>
        Facebook has released a Chrome extension that can be used to debug React
        applications. This makes the process of debugging React web applications
        faster and easier.
      </p>

      <h4>What is React?</h4>
      <p>
        The best fit for developing user interfaces is React, as it is a very
        declarative, fast, and flexible JavaScript library. It allows you to
        create complex user interfaces using “components,” or small,
        self-contained pieces of code. It controls the view layer in web
        applications. Despite the fact that React is more of a library than a
        language, it is frequently used in web development.
      </p>
      <h4>Importance of React :</h4>
      <p>
        React is a popular and widely used JavaScript library for building user
        interfaces, particularly for single-page applications where user
        interactions and dynamic content updates are crucial. Here are some key
        reasons for the importance of React in web development:
      </p>
      <ol>
        <li>
          <h4>Declarative Syntax:</h4>
          <p>
            React uses a declarative syntax, making it easier to understand and
            debug code. Developers can describe the desired state of a UI, and
            React takes care of updating the DOM to match that state
            efficiently.
          </p>
        </li>
        <li>
          <h4>Component-Based Architecture:</h4>
          <p>
            React follows a component-based architecture, allowing developers to
            build reusable and modular UI components. This modular structure
            simplifies code organization, maintenance, and scalability.
          </p>
        </li>
        <li>
          <h4>Virtual DOM:</h4>
          <p>
            React uses a virtual DOM to optimize the updating process. Instead
            of directly manipulating the real DOM for every change, React first
            updates a virtual representation of the DOM and then calculates the
            most efficient way to update the real DOM. This results in improved
            performance and a smoother user experience.
          </p>
        </li>
        <li>
          <h4>Unidirectional Data Flow:</h4>
          <p>
            React enforces a unidirectional data flow, meaning that data in an
            application flows in a single direction. This makes it easier to
            understand and debug the flow of data, reducing the likelihood of
            bugs caused by unexpected changes in the application state.
          </p>
        </li>
        <li>
          <h4>Reusable Components:</h4>
          <p>
            ReactJS provides developers with reusable components that they can
            use to create new applications. Reusability is like a developer’s
            miracle cure. This platform enables developers to reuse any react
            component created for another application that performs the same
            function. As a result, development effort is reduced while flawless
            performance is maintained.If you thought React was only for web
            development, you were dead wrong! Facebook has already developed the
            React Native framework for creating mobile apps for both the Android
            and iOS platforms.
          </p>
        </li>
        <li>
          <h4>Fast Rendering:</h4>
          <p>
            When developing a complex, high-load app, it is essential to define
            the structure of the app at the beginning as it can greatly
            influence the app’s performance. Simply put, As the DOM is
            tree-structured, even little changes at the root can cause major
            impacts on others. To solve this problem, Facebook has brought up a
            virtual DOM feature. Virtual DOM, which allows all modifications to
            be tested first for calculating risks. This approach contributes to
            app performance and a better user experience.
          </p>
        </li>
        <li>
          <h4>JSX (JavaScript XML):</h4>
          <p>
            React uses JSX, a syntax extension for JavaScript that allows
            developers to write HTML-like code within their JavaScript files.
            JSX makes the code more readable and concise, facilitating the
            integration of HTML with JavaScript logic.
          </p>
        </li>
        <li>
          <h4>Proficient Data Binding:</h4>
          <p>
            ReactJS lags behind one-way data binding. So that anyone can track
            all the changes made on particular portions of the data. This is
            often an illustration of its simplicity.
          </p>
        </li>
        <li>
          <h4>State Management with Redux:</h4>
          <p>
            While React itself manages the UI component state, for more complex
            applications, developers often use libraries like Redux for
            centralized state management. This helps in maintaining a
            predictable state throughout the application.
          </p>
        </li>
        <li>
          <h4>Tooling and Ecosystem:</h4>
          <p>
            React has a rich ecosystem of tools and libraries that complement
            its functionality, such as React Router for navigation, PropTypes
            for type checking, and various development tools like React DevTools
            for debugging.
          </p>
        </li>
        <li>
          <h4>Strong Community Support:</h4>
          <p>
            React has a large and active community, which means a wealth of
            resources, tutorials, and third-party libraries are available. This
            community support contributes to the continuous improvement of
            React, making it easier for developers to find solutions to problems
            and stay updated with best practices.
          </p>
        </li>
      </ol>
      <h3>Multi-Page Applications vs Single-Page Applications</h3>
      <h5>Multi-Page Applications (MPA)</h5>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is a traditional implementation of a web application that reloads the
        whole page when a user interacts with the app
      </p>
      <div className="text-center">
        <img
          src="/static/images/mpa.png"
          alt=""
          width="70%"
          className="img-fluid"
        />
      </div>
     
      <div className="text-center">
        <img
          src="/static/images/spa.png"
          alt=""
          width="70%"
          className="img-fluid text-center"
        />
      </div>
      <h5>Single-Page Application(SPA)</h5>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is a web application that loads a single document(HTML) and updates the
        parts of the document using APIs(AJAX).
      </p>
      <div className="text-center">
        <img
          src="/static/images/spa1.png"
          alt=""
          width="70%"
          className="img-fluid text-center"
        />
      </div>
      <div className="text-center">
        <img
          src="/static/images/spa2.png"
          alt=""
          width="70%"
          className="img-fluid text-center"
        />
      </div>
      <h4> Difference between MPA and SPA </h4>
      <table>
        <tr>
            <th></th>
            <th>Multi-Page Application</th>
            <th>Single-Page Application</th>
        </tr>
        <tr>
            <td>1</td>
            <td>In MPAs, content is constantly
loaded, which increases the load on
your server. This can adversely affect
web page speed and overall system
performance.</td>
<td>SPAs provide increased content load
speed because they do not have
many pages and load content at
once.</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>Multi-page applications have more
features than single-page
applications. Therefore, more effort
and resources are required to make them. Development time increases
in proportion to the number of
pages created and the activity to be
executed.</td>
            <td>Single-page app development is
easy because you need to create
fewer pages, create less functionality,
and test and display less content.
</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>Multi-page applications are more
SEO-friendly than single-page
applications. Their content is
constantly updated. In addition, they
have many pages for adding various
keywords, images, and meta tags.
</td>
            <td>Single-page app developers have
trouble indexing a website properly
Multi-page applications are more
SEO-friendly than single-page
and achieve high search rankings.
</td>
        </tr>
        <tr>
            <td>4.</td>
            <td>It is difficult to maintain and is not
budget-friendly.</td>
            <td>It is easy to maintain at a low cost.
</td>
        </tr>
        <tr>
            <td>5.</td>
            <td>It always requires an internet
connection as it does not load all the
data at once.</td>
            <td>It has the ability to work offline if
there are some problems with the
internet connection, as it loads all
the data at once.</td>
        </tr>
      </table>
      <h4>How to include Javascript in HTML?</h4>
      <p>You can include JavaScript in your HTML in two ways:
        <ul>
            <li>Embedding code in your HTML file using &lt;script&gt; tag
</li>
            <li>Including it as a link to an external file</li>
        </ul>
</p>

<h4>Embedding Code</h4>
<p>You can add JavaScript code in an HTML document by employing the dedicated
HTML tag &lt;script&gt; that wraps around JavaScript code. The &lt;script&gt; tag can be
placed in the &lt;head&gt; section of your HTML or in the &lt;body&gt; section, depending on
when you want the JavaScript to load.
</p>
<div className="text-center">
        <img
          src="/static/images/js.png"
          alt=""
          width="70%"
          className="img-fluid text-center"
        />
      </div>
<h4>External File</h4>
<p>To include an external JavaScript file, we can use the script tag with the attribute src.
The value for the src attribute should be the path to your JavaScript file. This script
tag should be included between your HTML document's &lt;head&gt; tags.When
JavaScript files are cached, pages load more quickly.
</p>
<div className="text-center">
<textarea className="code"cols="100" rows="1">&lt;script type="text/javascript" src="path-to-javascript-file.js"&gt; &lt;/script&gt;</textarea>
</div>
<h4>How React is declarative?</h4>
<p>Declarative programming is when you say what you want to do, and describe the
final state of the desired UI. Imperative programming is when you say how to get
what you want and provide step-by-step DOM mutations until you reach the desired
UI. Javascript is an imperative Language whereas React is a declarative language.</p>
<p><span className="text-danger">For Example:</span>For the following output, You need to add an element to the DOM
imperatively using JavaScript. As your app gets bigger, with more DOM elements you
being created, this can become hard to maintain. But, React it performs all of the
JavaScript/DOM steps as per the declared code to get us to our desired result. It
abstracts away all the nuts and bolts of how the DOM renders these elements. In
your code you tell your page "Look like this" and you'll get that result. Declarative
programming is much easier to read and figure out what is going on in your code.
That makes it easier to debug and easier for other devs to work on</p>
<p className="text-success">Output of above program</p>
<div className="text-center">
        <img
          src="/static/images/reactoutput.png"
          alt=""
          width="20%"
          className="img-fluid text-center"
          style={{border:"1px solid black"}}
        />
      </div>
<h4>JavaScript Code</h4>
<h5>Index.html</h5>


<p className="code"cols="100" rows="4">
   <p>&lt;html &gt;</p> 
   <p>     &lt;head&gt;
</p>
   <p>     &lt; title&gt;  HTML
     &lt;/title&gt;
</p>
   <p>     &lt;/head &gt;
</p>
   <p>     &lt;body&gt;
</p>
   <p>     &lt;div  id="root" &gt; &lt;/div &gt;
</p>
   <p> &lt;script src="script.js" type="javascript:&gt;
     &lt;/script&gt;</p>
   <p>     &lt;/body&gt;
</p>
   <p>&lt;/html&gt;</p>  
</p>
<h5>script.js</h5>
<section className="code">
    <p>const div = document.createElement("div");
</p>
<p>const heading= document.createElement("h1");
</p>
<p>heading.textContent = "Hello";</p>
<p>heading.className = "header";
</p>
<p>const para= document.createElement("p");
para.textContent = "Welcome to the session"</p>
<p>para.className = "para";
</p>
<p>const btn = document.createElement("button");</p>
<p>btn.textContent="Click";</p>
<p>btn.className = "btn";</p>
<p>div.append(heading);</p>
<p>div.append(para);</p>
<p>div.append(btn);</p>
<p>document.getElementById("root").append(div);</p>
</section>

<h4>React Code</h4>
<h5>index.html</h5>
<section className="code">
    <p> &lt;html &gt;</p>
    <p> &lt;head &gt;</p>
    <p> &lt;title &gt;  &lt;/title &gt;</p>
    <p> &lt;script crossorigin src="https://unpkg.com/react@18/umd/react.development.js" &gt;&lt;/script &gt;</p>
    <p> &lt;script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" &gt; &lt; /script&gt;</p>
    <p> &lt;script src="https://unpkg.com/@babel/standalone/babel.min.js" &gt; &lt;/script &gt;</p>
    <p> &lt;head &gt;</p>
    <p> &lt; body&gt;</p>
    <p> &lt;div id="root" &gt; &lt; /div&gt;</p>
    <p> &lt;script src="scripts.js" type="text/babel" &gt; &lt;/script &gt;</p>
    <p> &lt;/body &gt;</p>
    <p> &lt;/html &gt;</p>
</section>
<h5>script.js</h5>
<section className="code">
    <p>const heading = React.createElement("h1", null, "Hello");
</p>
    <p>const para = React.createElement("p", &#123;className:"para" &#125;, "Welcome to the
session");</p>
    <p>const btn = React.createElement("button",&#123; className:"btn"&#125;, "Click");</p>
    <p>const div = React.createElement("div", &#123;className:"App", children :
[heading,para,btn]&#125;);
</p>
    <p>ReactDOM.createRoot(document.getElementById("root")).render(div);</p>
</section>
<h5>script.js (Using JSX)</h5>
<section className="code">
<p>const header = (</p>
<p>&lt;div &gt;</p>
<p>&lt;h1 className="header" &gt; Hello &lt; /h1&gt;</p>
<p>&lt;p className="para" &gt; Welcome to the session &lt;/p &gt;  </p>
<p>&lt; button className="btn"&gt; Click &lt; /button&gt;</p>
<p>&lt;/div &gt; </p>
<p>);</p>
<p>ReactDOM.createRoot(document.getElementById("root")).render(header);</p>
</section>

<h5>Creating First React Element</h5>
<p>To include React in a simple web page, CDN(Content Delivery Network) can be
used. You need to create a new HTML file and include the CDN links of the following:</p>
<p><b>React:</b> React-script-tag is an npm package that provides a React &lt;script&gt; tag which
supports universal rendering. With this library, we can create react components, that
is, a plain javascript object with some properties</p>
<div className="code">
  <p>&lt; script crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js" umd/react.development.js" &gt; &lt;script &gt;</p>
</div>

<p><b>React-DOM : </b>React-DOM basically converts the javascript object returned by React script tag to HTML nodes that can be rendered in the browser.</p>
<div className="code">
<p>&lt; script crossorigin
src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" &gt;&lt;script &gt;</p>
</div>
<p><b>Babel:</b> JSX files are not understandable by the browser. It is a tool that converts JSX
files to simple javascript code that the browser understands. Moreover, it also
converts ES6 and ES5 code to javascript code. </p>
<div className="code">
<p>&lt; script src = "https://unpkg.com/@babel/standalone/babel.min.js"&lt;/script &gt;</p>
</div>
<p>Now, we are ready to use React library in our webpage. So, introduce a div tag with
an id “root” in the body. We call this a “root” DOM node because everything inside it
will be managed by React DOM</p>

<div className="code">
  &lt;div id="root" type="text/babel" &gt; &lt;/div &gt;
</div>
<p>Now, create a script section at the end of the document. Then, pass the DOM
element to ReactDOM.createRoot(), and then to root.render() to render an
HTML element dynamically.</p>
<div className="code">
  <p>&lt; script langauge="javascript" &gt;</p>
  <p>heading= React.createElement("h1", null, "Hello");</p>
  <p>ReactDOM.createRoot(document.getElementById("root").render(heading);</p>
  <p>&lt;/script &gt;</p>
</div>
<p>After that, use the live server extension of VS Code to serve the webpage and see
the output.</p>

<h5>React.createElement</h5>
<p>A React element describes what the real Document Object Model (DOM) element
should look like. React.js uses virtual DOM to design the UI and interact with the
browser. It is made up of react elements that seem similar to HTML elements but
are JavaScript objects. In simple words, react elements are the instructions for how
the browser DOM should be created. We can create the react elements using the
below syntax by embedding HTML elements in JavaScript to display the content on
the screen</p>
<b>React.createElement(type,&#123;props&#125;,children);
</b>
<p>It takes three arguments, They ae:</p>
<ul>
  <li><b>type:</b> Specifies the type of the HTML element (h1, p, button).</li>
  <li><b>props:</b> Specifies properties of the object (&#123;style:&#123;size: 10px &#125;&#125;) or event handlers, classNames, etc</li>
  <li><b>childrend:</b> Anything that needs to be displayed on the screen.</li>
</ul>
<h5>React.createRoot</h5>
<p>It creates a React root for the supplied container and returns the root. The root can
be used to render a React element into the DOM with render:</p>
<b>const root = createRoot(container);</b>
<p><b>root.render(element);</b></p>
<h5>Root.render</h5>
<p>React elements are immutable. Once you create an element, you can’t change its
children or attributes. The only way to update the UI is to create a new element, and
pass it to root.render().
</p>
<p><b>root.render(element, container element);</b></p>
<p>It takes two arguments:</p>
<ul>
  <li><b>element:</b> The element that needs to be rendered to be rendered in the DOM.</li>
  <li><b>container element:</b>It specifies where to render the element in the DOM.</li>

</ul>
<p><b>Note:</b> For running your React.js project, there are two modes available –
development and Reactjs build production. During the development phase, we will
be running our code locally using the development mode where React provides us
with many helpful warnings and tools for easily detecting and fixing problems in our
application code and eliminating potential bugs. But in production mode, the
warning messages and other features present in development mode for debugging
are suppressed. It minifies your code, optimizes assets, and produces lighter-weight
source maps. As a result, the bundle size is drastically reduced, improving page load
time. React recommends utilizing the production mode while deploying the
application.</p>
<h5>Understanding Real DOM and Virtual DOM</h5>
<h6>Real DOM:</h6>
<p>DOM stands for “Document Object Model”. The DOM in simple words represents the
UI of your application. Every time there is a change in the state of your application
UI, the updated element and its children have to be re-rendered to represent that
change. But frequently manipulating the DOM affects performance, making it slow.
Therefore, the more UI components you have, the more expensive the DOM updates
could be, since they need to be re-rendered for every DOM update.</p>
<h6>Virtual DOM</h6>
<p>The virtual DOM is only a virtual representation of the DOM. Every time the state of
our application changes, the virtual DOM gets updated instead of the real DOM. If the state of any of these elements changes, a new virtual DOM tree is created. This
tree is then compared or “diffed” from the previous virtual DOM tree. Once this is
done, the virtual DOM calculates the best possible method to make these changes to
the real DOM. This ensures that there are minimal operations on the real DOM.
Hence, reducing the performance cost of updating the real DOM.
</p>
<div className="text-center">
          <img
            src="/static/images/dom.png"
            alt=""
            width="90%"
            className="img-fluid"
            style={{ zIndex: 0}}
          />
        </div>
<p>React compares the Virtual DOM with Real DOM. It finds out the changed nodes and
updates only the changed nodes in Real DOM leaving the rest nodes as it is. This
process is called <b>Reconciliation</b> . Diffing algorithm is a technique of reconciliation
that is used by React.
</p>
<h5>JSX</h5>
<p>JSX, or JavaScript XML, is an extension to the JavaScript language syntax. Similar
in appearance to HTML, JSX provides a way to structure component rendering using
syntax familiar to many developers. React components are typically written using
JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP
called XHP.</p>
<ul>
  <li><b>Why is a class not used as an attrubute in JSX?</b> We e cannot use class
attributes in script tags. Instead of this, we use it because the class is a
reserved keyword in javascript. </li>
<li><b>Using javascript variables in JSX:</b>We can use variable names instead of
static text by creating variables. We can add them in a JSX file using
&#123;variable_name&#125;.</li>
</ul>
<p><b>For Example</b></p>
<div className="code">
  <p>const name = "Prem";</p>
  <p>const header = () = =&gt; (</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className="header"&gt;Hello &#123;name&#125; &lt;h1 &gt;</p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p className="para" &gt; Welcome to the session &lt;/p &gt;</p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className="btn"&gt;Click &lt;/button&gt;</p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp; &lt;/&gt; </p>
 <p>);</p>
</div>
<p>
Here, a constant variable is created named “name” and in the h1 tag, it is
used in curly braces to display the name saved in the “name” variable.</p>
   <h5>Babel</h5>
   <p>React uses JSX syntax and JSX files are not understandable by the browser. Babel
is a transpiler i.e. it converts the JSX to vanilla JavaScript. It can also convert the
latest version of JavaScript code into the one that the browser understands.</p>
<div className="text-center">
          <img
            src="/static/images/babel.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: 0}}
          />
        </div>
   <h5>React Fragments</h5>
   <p>In React, when a component returns multiple elements, we must wrap them in a
container element like a div for the code to work. While this is fine, it may however
cause unintended issues in our components. React fragments serve as a cleaner
alternative to using unnecessary divs in our code. Fragments let you group a list of
children without adding extra nodes to the DOM</p>
<p>Here is a code snippet for your reference:</p>
<div className="code">
  <p> const header=()=&gt;(</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp; &lt;React.Fragment&gt;</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h1 className="header"&gt;Hello&lt;/h1&gt;</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className="btn"&lt;Click&gt;/button&gt;</p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp; &lt;React.Fragment&gt; </p>
 <p>);</p>
</div>
<p>You can create a React fragment using
  <b>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</b> .
You can also use the shorthand syntax to wrap components using an empty HTML
element like syntax, &lt;&gt;&lt;/&gt;.
</p>
<div className="code">
<p> const header=()=&gt;(</p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp; &lt;&gt; </p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt; className="header"&gt;Hello&lt;/h1&gt;  </p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p className="para"&gt; Welcome to the session </p>
 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className="btn"&gt;Click&lt;/button&gt;  </p>
<p> <p>&nbsp;&nbsp;&nbsp;&nbsp; &lt;/&gt; </p>
<p>)</p>
</p>
</div>

<h5>Components in React</h5>
<p>Components are independent and reusable codes. They work for the same purpose
as JavaScript functions but work independently and restore HTML with the render()
function. In simple words, react is like the lego game, and here components are
bricks of lego that are used to build different applications. Components are of two
types:</p>
<ul>
  <li><b>Class components:</b>The class component name must start with a capital
letter. This component should contain <b>React.Component</b>  statement, which
creates the inheritance for <b>React.Component</b> and gives your component access to the functions of <b>React.Component</b> . The component also requires a
render() method, which provides HTML.
</li>
<li><b>Function Components:</b>A functional component is just a plain JavaScript
function that accepts props (arguments passed into React components) as an
argument and returns a React element. There is no render method used in
functional components.</li>
</ul>

<h5>Arrow Functions in React</h5>
<p>An arrow function expression is a JavaScript expression that has a shorter syntax
than the function keyword. It is designed for situations where you want to create a
one−line anonymous function expression, like in event handlers</p>
<p>The arrow function expression syntax for the above function is as follows −</p>
<p><b>let handleClick = (parameter)=&gt;&#123; // code &#125;;</b></p>
<p>An arrow function expression always has a single parameter, following the =&gt; token,
and then an expression or statement within parentheses that follow the return value
using the parameter.</p>
<p>There are several benefits to using arrow functions in ReactJS.</p>
<ul>
  <li>They are much simpler to write and understand than traditional function
expressions. This can make your code more readable and easier to debug.</li>
  <li>Arrow functions do not create a new scope, so they can be used in ReactJS
without polluting the global scope.
</li>
  <li>Arrow functions can be used as arguments to other functions, which can
make your code more flexible and expressive.</li>
</ul>

    </div>
  );
}
