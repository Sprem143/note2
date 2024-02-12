import "/src/App.css";
export default function JsHome() {
  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center fw-bold text-primary">
          Welcome to JavaScript Page
        </h2>
        <div className="text-center">
          <img
            src="/static/images/js1.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <h4>
          <b>What is JavaScript</b>
        </h4>
        <dfn>
          JavaScript is a cross-platform, object-oriented scripting language
          used to make webpages interactive (e.g., having complex animations,
          clickable buttons, popup menus, etc.). There are also more advanced
          server side versions of JavaScript such as Node.js, which allow you to
          add more functionality to a website than downloading files (such as
          realtime collaboration between multiple computers). Inside a host
          environment (for example, a web browser), JavaScript can be connected
          to the objects of its environment to provide programmatic control over
          them.
        </dfn>
        <p>
          JavaScript contains a standard library of objects, such as Array,
          Date, and Math, and a core set of language elements such as operators,
          control structures, and statements. Core JavaScript can be extended
          for a variety of purposes by supplementing it with additional objects;
          for example:
        </p>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            <p>
              Client-side JavaScript extends the core language by supplying
              objects to control a browser and its Document Object Model (DOM).
              For example, client-side extensions allow an application to place
              elements on an HTML form and respond to user events such as mouse
              clicks, form input, and page navigation.
            </p>
          </li>
          <li>
            <p>
              Server-side JavaScript extends the core language by supplying
              objects relevant to running JavaScript on a server. For example,
              server-side extensions allow an application to communicate with a
              database, provide continuity of information from one invocation to
              another of the application, or perform file manipulations on a
              server.
            </p>
          </li>
        </ul>
        <p>
          This means that in the browser, JavaScript can change the way the
          webpage (DOM) looks. And, likewise, Node.js JavaScript on the server
          can respond to custom requests sent by code executed in the browser.
        </p>
        <p>
          JavaScript is a versatile and widely-used programming language that is
          primarily known for its ability to add interactivity and dynamic
          behavior to web pages. It was initially created by Netscape in 1995
          and has since become a crucial component of web development.
        </p>
        <h4>
          <b>1. Purpose and Use : </b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            JavaScript is a scripting language that enables you to create
            dynamic content, manipulate the Document Object Model (DOM), and
            interact with users.
          </li>
          <li>
            It is commonly used for front-end web development to enhance user
            interfaces, handle user input, and update page content without
            requiring a full page reload.
          </li>
        </ul>
        <h4>
          <b>2. Integration with HTML and CSS: </b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            JavaScript is often embedded directly within HTML documents using
            &lt;script&gt; tags.
          </li>
          <li>
            It works in conjunction with HTML to manipulate the structure and
            content of web pages and CSS to control the presentation and
            styling.
          </li>
        </ul>
        <h4>
          <b>3. Syntax:</b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            JavaScript syntax is similar to other C-style languages like C++ and
            Java, making it relatively easy for programmers to learn if they are
            familiar with those languages.
          </li>
          <li>Statements are terminated with a semicolon (;).</li>
        </ul>
        <h4>
          <b>Variables and Data Types:</b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>Variables are used to store and manage data.</li>
          <li>
            JavaScript has dynamic typing, meaning you don't need to declare the
            data type explicitly.
          </li>
          <li>
            Common data types include strings, numbers, booleans, arrays, and
            objects.
          </li>
        </ul>
        <h4>
          <b>Control Flow : </b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            JavaScript supports traditional control flow structures like
            if-statements, switch statements, and loops (for, while, do-while).
          </li>
          <li>
            Conditional statements and loops allow you to control the flow of
            your program based on certain conditions.
          </li>
        </ul>
        <h4>
          <b>Functions : </b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            Functions are blocks of reusable code that can be defined and called
            with or without parameters.
          </li>
          <li>
            JavaScript functions can be named or anonymous and can be assigned
            to variables.
          </li>
        </ul>
        <h4>
          <b>Objects and the DOM:</b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            JavaScript treats everything as an object, and you can create your
            own objects.
          </li>
          <li>
            The DOM is a representation of the structure and content of a
            document, and JavaScript can be used to manipulate it, enabling
            dynamic changes to a webpage.
          </li>
        </ul>
        <h4>
          <b>Events :</b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            JavaScript allows you to respond to user interactions, such as
            clicks, keypresses, and form submissions, through event handling.
          </li>
        </ul>
        <h4>
          <b>Asynchronous Programming:</b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            JavaScript is single-threaded, but it supports asynchronous
            programming using callbacks, promises, and async/await to handle
            tasks like fetching data from servers without blocking the main
            thread.
          </li>
        </ul>
        <h4>
          <b>Libraries and Frameworks:</b>
        </h4>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            There are numerous libraries and frameworks built on top of
            JavaScript, such as jQuery, React, Angular, and Vue.js, which
            streamline and enhance the development process.
          </li>
        </ul>
        <p>
          JavaScript is an integral part of modern web development, and its
          versatility makes it suitable for both front-end and back-end
          development. Learning JavaScript opens the door to creating
          interactive and dynamic web applications.
        </p>
      </div>
    </>
  );
}
