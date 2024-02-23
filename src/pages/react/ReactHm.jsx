import "../java/Jnavbar.css";
import "/src/App.css";
export default function ReactHm() {
  return (
    <div className="container-fluid" id="fsm">
     
      <h5>script.js</h5>
      <div className="text-center">
        <img
          src="/static/images/rscript.png"
          alt=""
          width="100%"
        />
      </div>
     
      <h5>script.js (Using JSX)</h5>
      <div className="text-center">
        <img
          src="/static/images/jsx1.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
        />
      </div>
      <div className="text-center">
        <img
          src="/static/images/jsx2.png"
          alt=""
          width="100%"
          className="img-fluid "
        />
      </div>

      <h5>Creating First React Element</h5>
      <p>
        To include React in a simple web page, CDN(Content Delivery Network) can
        be used. You need to create a new HTML file and include the CDN links of
        the following:
      </p>
      
      <p>
        <b>React:</b> React-script-tag is an npm package that provides a React
        &lt;script&gt; tag which supports universal rendering. With this
        library, we can create react components, that is, a plain javascript
        object with some properties
      </p>
      <div className="text-center">
        <img
          src="/static/images/jsx3.png"
          alt=""
          width="100%"
          style={{zIndex:"1"}}
        />
      </div>
      <p>
        <b>React-DOM : </b>React-DOM basically converts the javascript object
        returned by React script tag to HTML nodes that can be rendered in the
        browser.
      </p>
      <div className="text-center">
        <img
          src="/static/images/jsx4.png"
          alt=""
          width="100%"
          style={{zIndex:"1"}}
        />
      </div>
      <p>
        <b>Babel:</b> JSX files are not understandable by the browser. It is a
        tool that converts JSX files to simple javascript code that the browser
        understands. Moreover, it also converts ES6 and ES5 code to javascript
        code.
      </p>
     <p className="bg-dark text-white">&lt;script src = "https://unpkg.com/@babel/standalone/babel.min.js"&gt;&lt;/script&gt;</p>
      <p>
        Now, we are ready to use React library in our webpage. So, introduce a
        div tag with an id “root” in the body. We call this a “root” DOM node
        because everything inside it will be managed by React DOM
      </p>

   <p className="bg-dark text-white">
   &lt;div id="root" type="text/babel"&gt; &lt;/div&gt;
   </p>
      <p>
        Now, create a script div at the end of the document. Then, pass the
        DOM element to ReactDOM.createRoot(), and then to root.render() to
        render an HTML element dynamically.
      </p>
     <p className="bg-dark text-white">
        &lt;script language="javaScript"&gt; <br />
        heading=React.createElement("h1",null,"Hello");
        <br />
        ReactDOM.createRoot(document.getElementById("root")).render(heading);
        &lt;script&gt;
     </p>
      <p>
        After that, use the live server extension of VS Code to serve the
        webpage and see the output.
      </p>

      <h5>React.createElement</h5>
      <p>
        A React element describes what the real Document Object Model (DOM)
        element should look like. React.js uses virtual DOM to design the UI and
        interact with the browser. It is made up of react elements that seem
        similar to HTML elements but are JavaScript objects. In simple words,
        react elements are the instructions for how the browser DOM should be
        created. We can create the react elements using the below syntax by
        embedding HTML elements in JavaScript to display the content on the
        screen
      </p>
    {/* ------------------------- */}
    <b>React.createElement(type,&#123;props&#125;,children);</b>
      <p>It takes three arguments, They ae:</p>
      <ul>
        <li>
          <b>type:</b> Specifies the type of the HTML element (h1, p, button).
        </li>
        <li>
          <b>props:</b> Specifies properties of the object
          (&#123;style:&#123;size: 10px &#125;&#125;) or event handlers,
          classNames, etc
        </li>
        <li>
          <b>childrend:</b> Anything that needs to be displayed on the screen.
        </li>
      </ul>
      <h5>React.createRoot</h5>
      <p>
        It creates a React root for the supplied container and returns the root.
        The root can be used to render a React element into the DOM with render:
      </p>
      <b>const root = createRoot(container);</b>
      <p>
        <b>root.render(element);</b>
      </p>
      <h5>Root.render</h5>
      <p>
        React elements are immutable. Once you create an element, you can’t
        change its children or attributes. The only way to update the UI is to
        create a new element, and pass it to root.render().
      </p>
      <p>
        <b>root.render(element, container element);</b>
      </p>
      <p>It takes two arguments:</p>
      <ul>
        <li>
          <b>element:</b> The element that needs to be rendered to be rendered
          in the DOM.
        </li>
              <li>
          <b>container element:</b>It specifies where to render the element in
          the DOM.
        </li>
      </ul>
      <p>
        <b>Note:</b> For running your React.js project, there are two modes
        available – development and Reactjs build production. During the
        development phase, we will be running our code locally using the
        development mode where React provides us with many helpful warnings and
        tools for easily detecting and fixing problems in our application code
        and eliminating potential bugs. But in production mode, the warning
        messages and other features present in development mode for debugging
        are suppressed. It minifies your code, optimizes assets, and produces
        lighter-weight source maps. As a result, the bundle size is drastically
        reduced, improving page load time. React recommends utilizing the
        production mode while deploying the application.
      </p>
      <h5>Understanding Real DOM and Virtual DOM</h5>
      <h6>Real DOM:</h6>
      <p>
        DOM stands for “Document Object Model”. The DOM in simple words
        represents the UI of your application. Every time there is a change in
        the state of your application UI, the updated element and its children
        have to be re-rendered to represent that change. But frequently
        manipulating the DOM affects performance, making it slow. Therefore, the
        more UI components you have, the more expensive the DOM updates could
        be, since they need to be re-rendered for every DOM update.
      </p>
      <h6>Virtual DOM</h6>
      <p>
        The virtual DOM is only a virtual representation of the DOM. Every time
        the state of our application changes, the virtual DOM gets updated
        instead of the real DOM. If the state of any of these elements changes,
        a new virtual DOM tree is created. This tree is then compared or
        “diffed” from the previous virtual DOM tree. Once this is done, the
        virtual DOM calculates the best possible method to make these changes to
        the real DOM. This ensures that there are minimal operations on the real
        DOM. Hence, reducing the performance cost of updating the real DOM.
      </p>
      <div className="text-center">
        <img
          src="/static/images/dom.png"
          alt=""
          width="80%"
          className="img-fluid"
          style={{ zIndex: 0 }}
        />
      </div>
      <p>
        React compares the Virtual DOM with Real DOM. It finds out the changed
        nodes and updates only the changed nodes in Real DOM leaving the rest
        nodes as it is. This process is called <b>Reconciliation</b> . Diffing
        algorithm is a technique of reconciliation that is used by React.
      </p>
      <h5>JSX</h5>
      <p>
        JSX, or JavaScript XML, is an extension to the JavaScript language
        syntax. Similar in appearance to HTML, JSX provides a way to structure
        component rendering using syntax familiar to many developers. React
        components are typically written using JSX, although they do not have to
        be (components may also be written in pure JavaScript). JSX is similar
        to another extension syntax created by Facebook for PHP called XHP.
      </p>
      <ul>
        <li>
          <b>Why is a class not used as an attrubute in JSX?</b> We e cannot use
          class attributes in script tags. Instead of this, we use it because
          the class is a reserved keyword in javascript.
        </li>
        <li>
          <b>Using javascript variables in JSX:</b>We can use variable names
          instead of static text by creating variables. We can add them in a JSX
          file using &#123;variable_name&#125;.
        </li>
      </ul>
      <p>
        <b>For Example</b>
      </p>
      <p className="bg-dark text-white p-2">
        const name="Joy"; <br />
        const header= () =&gt; ( <br />
            &lt;&gt; <br />
            &lt;h1 className = "header"&gt; <br />Hello &#123;name &#125;&lt;/h1&gt; <br />
            &lt;p className="para"&gt; Welcome to the session &lt;/p&gt; <br />
            &lt;button className="btn"&gt;Click&lt;/button&gt; <br />
            &lt;/&gt; <br />
       &nbsp; );
        

      </p>
      <p>
        Here, a constant variable is created named “name” and in the h1 tag, it
        is used in curly braces to display the name saved in the “name”
        variable.
      </p>


      <h5>Babel</h5>
      <p>
        React uses JSX syntax and JSX files are not understandable by the
        browser. Babel is a transpiler i.e. it converts the JSX to vanilla
        JavaScript. It can also convert the latest version of JavaScript code
        into the one that the browser understands.
      </p>
      <div className="text-center">
        <img
          src="/static/images/babel.png"
          alt=""
          width="80%"
          className="img-fluid"
          style={{ zIndex: 0 }}
        />
      </div>
      <h5>React Fragments</h5>
      <p>
        In React, when a component returns multiple elements, we must wrap them
        in a container element like a div for the code to work. While this is
        fine, it may however cause unintended issues in our components. React
        fragments serve as a cleaner alternative to using unnecessary divs in
        our code. Fragments let you group a list of children without adding
        extra nodes to the DOM
      </p>
      <p>Here is a code snippet for your reference:</p>
     <p className="bg-dark text-white">
        const header = ()=&gt;( <br />
            &lt;React.Fragment&gt; <br />
            &lt;h1 className="header"&gt;Hello&lt;/h1&gt; <br />
            &lt;p className="para"&gt;Welcome to the session&lt;/p&gt; <br />
            &lt;button className="btn"&gt;Click&lt;/button&gt; <br />
            &lt;/React.Frangment&gt;
        )
     </p>
      <p>
        You can create a React fragment using
        <b>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</b> . You can also use
        the shorthand syntax to wrap components using an empty HTML element like
        syntax, &lt;&gt;&lt;/&gt;.
      </p>
      <p className="bg-dark text-white">
        const header = () =&gt;( <br />
            &lt;&gt; <br />
            &lt;h1 className="header"&gt;Hello&lt;/h1&gt; <br />
            &lt;p className="para"&gt;WElcome to the session&lt;/p&gt; <br />
            &lt;button className="btn"&gt;Click&lt;/button&gt; <br />
            &lt;&gt; <br />
        )
</p>

      <h5>Components in React</h5>
      <p>
        Components are independent and reusable codes. They work for the same
        purpose as JavaScript functions but work independently and restore HTML
        with the render() function. In simple words, react is like the lego
        game, and here components are bricks of lego that are used to build
        different applications. Components are of two types:
      </p>
      <ul>
        <li>
          <b>Class components:</b>The class component name must start with a
          capital letter. This component should contain <b>React.Component</b>{" "}
          statement, which creates the inheritance for <b>React.Component</b>{" "}
          and gives your component access to the functions of{" "}
          <b>React.Component</b> . The component also requires a render()
          method, which provides HTML.
        </li>
        <li>
          <b>Function Components:</b>A functional component is just a plain
          JavaScript function that accepts props (arguments passed into React
          components) as an argument and returns a React element. There is no
          render method used in functional components.
        </li>
      </ul>

      <h5>Arrow Functions in React</h5>
      <p>
        An arrow function expression is a JavaScript expression that has a
        shorter syntax than the function keyword. It is designed for situations
        where you want to create a one−line anonymous function expression, like
        in event handlers
      </p>
      <p>
        The arrow function expression syntax for the above function is as
        follows −
      </p>
      <p>
        <b>let handleClick = (parameter)=&gt;&#123; // code &#125;;</b>
      </p>
      <p>
        An arrow function expression always has a single parameter, following
        the =&gt; token, and then an expression or statement within parentheses
        that follow the return value using the parameter.
      </p>
      <p>There are several benefits to using arrow functions in ReactJS.</p>
      <ul>
        <li>
          They are much simpler to write and understand than traditional
          function expressions. This can make your code more readable and easier
          to debug.
        </li>
        <li>
          Arrow functions do not create a new scope, so they can be used in
          ReactJS without polluting the global scope.
        </li>
        <li>
          Arrow functions can be used as arguments to other functions, which can
          make your code more flexible and expressive.
        </li>
      </ul>
    </div>
  );
}
