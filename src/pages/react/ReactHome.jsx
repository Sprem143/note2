import "../java/Jnavbar.css";
import "/src/App.css";
import { Link } from "react-router-dom";
export default function ReactHome() {
  return (
    <>
      <div className="container-fluid"  id="fsm">
      <h2 className="text-center">Welcome to World of Python</h2>
            <h2 className="text-center"> Welcome to React Home Page</h2>
      <h4>Introduction Of React</h4>
      <p id="react">
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is a traditional
        implementation of a web application that reloads the whole page when a
        user interacts with the app
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is a web application
        that loads a single document(HTML) and updates the parts of the document
        using APIs(AJAX).
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
        <thead>
            <tr>
          <th></th>
          <th>Multi-Page Application</th>
          <th>Single-Page Application</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>
            In MPAs, content is constantly loaded, which increases the load on
            your server. This can adversely affect web page speed and overall
            system performance.
          </td>
          <td>
            SPAs provide increased content load speed because they do not have
            many pages and load content at once.
          </td>
        </tr>
        <tr>
          <td>2.</td>
          <td>
            Multi-page applications have more features than single-page
            applications. Therefore, more effort and resources are required to
            make them. Development time increases in proportion to the number of
            pages created and the activity to be executed.
          </td>
          <td>
            Single-page app development is easy because you need to create fewer
            pages, create less functionality, and test and display less content.
          </td>
        </tr>
        <tr>
          <td>3.</td>
          <td>
            Multi-page applications are more SEO-friendly than single-page
            applications. Their content is constantly updated. In addition, they
            have many pages for adding various keywords, images, and meta tags.
          </td>
          <td>
            Single-page app developers have trouble indexing a website properly
            Multi-page applications are more SEO-friendly than single-page and
            achieve high search rankings.
          </td>
        </tr>
        <tr>
          <td>4.</td>
          <td>It is difficult to maintain and is not budget-friendly.</td>
          <td>It is easy to maintain at a low cost.</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>
            It always requires an internet connection as it does not load all
            the data at once.
          </td>
          <td>
            It has the ability to work offline if there are some problems with
            the internet connection, as it loads all the data at once.
          </td>
        </tr>
        </tbody>
      </table> 

    {/* ----------- */}

    <h4>How to include Javascript in HTML?</h4>
      <p>
        You can include JavaScript in your HTML in two ways: </p>
        <ul>
          <li>Embedding code in your HTML file using &lt;script&gt; tag</li>
          <li>Including it as a link to an external file</li>
        </ul>
     

      <h4>Embedding Code</h4>
      <p>
        You can add JavaScript code in an HTML document by employing the
        dedicated HTML tag &lt;script&gt; that wraps around JavaScript code. The
        &lt;script&gt; tag can be placed in the &lt;head&gt; section of your
        HTML or in the &lt;body&gt; section, depending on when you want the
        JavaScript to load.
      </p>
      <div className="text-center">
        <img
          src="/static/images/js.png"
          width="70%"
          className="img-fluid text-center"
        />
      </div>
      <h4>External File</h4>
      <p>
        To include an external JavaScript file, we can use the script tag with
        the attribute src. The value for the src attribute should be the path to
        your JavaScript file. This script tag should be included between your
        HTML document's &lt;head&gt; tags.When JavaScript files are cached,
        pages load more quickly.
      </p>
      <div className="text-center">
        <p className="bg-dark text-white">
          &lt;script type="text/javascript" src="path-to-javascript-file.js"&gt;
          &lt;/script&gt;
        </p>
      </div>

     <h4>How React is declarative?</h4>
      <p>
        Declarative programming is when you say what you want to do, and
        describe the final state of the desired UI. Imperative programming is
        when you say how to get what you want and provide step-by-step DOM
        mutations until you reach the desired UI. Javascript is an imperative
        Language whereas React is a declarative language.
      </p>
      <p>
        <span className="text-danger">For Example:</span>For the following
        output, You need to add an element to the DOM imperatively using
        JavaScript. As your app gets bigger, with more DOM elements you being
        created, this can become hard to maintain. But, React it performs all of
        the JavaScript/DOM steps as per the declared code to get us to our
        desired result. It abstracts away all the nuts and bolts of how the DOM
        renders these elements. In your code you tell your page "Look like this"
        and you'll get that result. Declarative programming is much easier to
        read and figure out what is going on in your code. That makes it easier
        to debug and easier for other devs to work on
      </p>
      <p className="text-success">Output of above program</p>
      <div className="text-center">
        <img
          src="/static/images/reactoutput.png"
          alt=""
          width="20%"
          className="img-fluid text-center"
          style={{ border: "1px solid black" }}
        />
      </div>
      <h4>JavaScript Code</h4>
      <h5>Index.html</h5>

      <p className="bg-dark text-white">
        &lt;html &gt; <br />
         &lt;head&gt; <br />
         &lt; title&gt; HTML &lt;/title&gt;
        &lt;/head &gt;
         &lt;body&gt;
         &lt;div id="root" &gt; &lt;/div &gt;
         &lt;script src="script.js" type="javascript:&gt; &lt;/script&gt;
         &lt;/body&gt;
        &lt;/html&gt;
      </p>
      <h5>script.js</h5>
        <div className="text-center">
        <img
          src="/static/images/scriptjs.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
          style={{ border: "1px solid black" }}
        />
      </div>
      <div className="text-center">
        <img
          src="/static/images/scriptjs2.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
          style={{ border: "1px solid black" }}
        />
        
      </div>
      <h4>React Code</h4>
      <h5>index.html</h5>
      <div className="text-center">
        <img
          src="/static/images/reactcodeindex.html.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
          style={{ border: "1px solid black" }}
        />
      </div>
     
     










      <button><Link to="reacthm">Next Page</Link></button>

      </div>
    </>
  );
}
