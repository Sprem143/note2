
export default function Component() {
    return (
        <div className="container-fluid" id="fsm">
            <h1 className="td">Components in React </h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A component is a small, reusable chuck of code. It lets you split the UI into
                independent, reusable pieces, and think about each piece in isolation.
            </p><p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We can create components with JavaScript classes of functions. To use React's properties and methods in our class components we must subclass the component class from React.This way we can use the code from React library without having to write it over and over again. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A function is a valid react component if it accepts a single porps object argument with data and returns a React element. We call these functions as functioanl components because they are simple JavaScript functions.
            </p>
            <h4 className="td">Functional Component Snippet</h4>
            <div className="code">
                <p>
                    const Navbar=()=&gt;&#123; <br />
                    return( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span&gt;Navbar Component&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                    &nbsp;&nbsp;   ); <br />
                    &#125;; <br />
                    export default Navbar;
                </p>
            </div>
            <h4 className="td">Class component Snippet</h4>
            <div className="code">
                <p>
                    import &#123;Component&#125; from "react"; <br />
                    class Navbar extends Component&#123; <br />
                    render()&#123; <br />
                    &nbsp;&nbsp;return( <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&lt;div&gt; <br />
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&lt;span&gt;Navbar Component&lt;/span&gt; <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&lt;/div&gt; <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;  ) <br />
                    &nbsp;&nbsp; &#125; <br />
                    &#125;
                </p>
            </div>
            <h4 className="td">Function V/S Class Components</h4>
            <table>
                <thead>
                    <tr>
                        <th>Functional Components</th>
                        <th>Class Compoents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Functional components cannot extends from any class</td>
                        <td>Class Components must extend from React.Component class</td>
                    </tr>
                    <tr>
                        <td>Create and Maintain state information with hooks</td>
                        <td>Create and Maintain state information with lifecycle methods.</td>
                    </tr>
                    <tr>
                        <td>Do not support a constructor</td>
                        <td>Require a constructor to store state</td>
                    </tr>
                    <tr>
                        <td>Do not require the render function</td>
                        <td>Require a render function that returns an HTML element</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="td">Why use Functional Components</h4>
            <ul>
                <li>Make code more reusable and readable</li>
                <li>Are easy to test and debug</li>
                <li>Yield better performance</li>
                <li>Low coupling and cross dependency in code</li>
                <li>Easy to separate code into container and presentational components.</li>
            </ul>
            <h4 className="td">Why use Class Components?</h4>
            <li>If you prefer working with classes.</li>
            <li>Still used in some legacy projects</li>
            <h4 className="td">File Structure Conventions for Components</h4>
            <p>React doesn't have opinions on how you put files into folders. That said there are a few common approaches popular in the ecosystem you may want to consider.
                <br />
                &nbsp;&nbsp; &nbsp;&nbsp;The typical folder structure in a React project can follow the following conventions to make the code more organised.
            </p>
            <b>Example Snapshot-</b>
            <div className="text-center">
                <img src="/static/images/react/file.png" alt="File structure" width="60%" />
            </div>

            <h5 className="sh mt-4">Components</h5>
            <p>This folder consists of a collection of reusable UI components like buttons, modals, input, loader, etc. They can be used across various files in the project.</p>
            <h5 className="sh">Pages</h5>
            <p>The files in the pages folder indicate the route of the react application. Each file in this folder correspond to a standalone page of the project.</p>

            <h5 className="sh">Utils</h5>
            <p>Utils folder consists of some repeatedly used functions that are commonly used in the project.</p>
            <h3 className="td">State in React</h3>
            <p>State is a built-in object in React that is used to contain dynamic information about a component. Unlike props that are passed from the outside, a component maintains its own state. <br />
                &nbsp;&nbsp; &nbsp;&nbsp;A component's state is mutable and it can change over time. Whenever it changes, the component re-renders.
            </p>
            <h4 className="td">Adding an initial state</h4>
            <p>To add an initial state to a compnent instance we give that component a state property. This property should be declared inside of the class constructor and should be set to an object with key and value pairs. We must also call super with props inside of the constructor to access common properties of built-in Component class. </p>
            <h5 className="sh">Super</h5>
            <p>The super keyword calls the constructor of the parent class. in our case the call to super passes the props argument to the constructor of React. Component class and saves the return a value for the derived class component.</p>

            <h4 className="td">Updating state with setState</h4>
            <p>The components state can be updated with this.setState built-in method. It takes an object and merges it with the component's current state. If there are properties in the current state that are not a part of that object, Those properties remain unchanged. <br />
                &nbsp;&nbsp; &nbsp;&nbsp; Anything that we call this.setState it automatically calls the render method as soon as the state changes which rerenders the component with the updated state value.
            </p>

            <h4 className="td">Accessing previous state values</h4>
            <p>The <b>setState</b> method can take a callback function as an argument which receives the previous state as a default parameter. This is useful in cases where we need access to previous state values to update the current state.</p>
            <h4 className="td">State is Asynchronous</h4>
            <p>The <b>setState method</b> works in an asynchronous way. That means after calling setState the this.state variable is not immediately changed. <br />
                &nbsp;&nbsp; &nbsp;&nbsp; So if we want to perform an action after the state value is updated we can pass a callback function as a second parameter to the setStete method.
            </p>
            <b>Example-</b>
            <div className="code">
                <p>
                    import &#123; component&#125; from "react"; <br />
                    export default class Navbar extends Component&#123; <br />
                    &nbsp;&nbsp;constructor(props); <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props) <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//initialising state <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state=&#123; count:0 &#125;; <br />
                    &#125;
                    updateState=()=&gt;&#123; <br />
                    &nbsp;&nbsp;this.setState((prev)=&gt;(&#123; count:prev.count+1&#125;)); <br />
                    &#125;; <br />
                    render()&#123; <br />
                    &nbsp;&nbsp;return( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Count is &#123;this.state.count&#125; &lt;/h1&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;this.updateState&#125;&gt;Click Me&lt;/button&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                    &nbsp;&nbsp;); <br />
                    &nbsp;&#125; <br />
                    &#125;
                </p>
            </div>

            <h3 className="td">Props in React</h3>
            <p>A component can pass information to other components. Information that gets passed from one component to another is known as props short for properties. A components's prop is an object which holds information about that component. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Props are passed down from parent to child components as a key and vlaue pair. If we want to pass information that is not string we have to wrap it with curly braces. This information will be stored inside of the props object of the child component. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The most common use of props is to pass data and event handlers down to the child components.
            </p>

            <h4 className="td">Rules of Props</h4>
            <p>There is only one strict rule in regard to props in React. Props are read-only. A component should never try to mutate or change the value of its props.</p>
            <h4 className="td">Default props</h4>
            <p>Default props can be used to define any props that you want to be set for a component. They can be used to ensure that props will  have a value if it was not specified by the aprent component. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We can set default values for the props by assigning to the special <b>defaultProps</b> property on the component class.</p>
            <h4 className="td">Additional information : Type checking on props</h4>
            <p>Props type checking can be optionally used to ensure that the passed value is of the correct data. This can help prevent errors in rendering and force correct usages of components. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type checking of props can also help decument the code to make it easier to undeerstand and debug the component class. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We can add type checking to our props by specifying it on the <b>propsTypes</b> static property on the components class after it has been defined. The value of this property is an object that has multiple key and value pairs. Each key corresponds to a prop of that our component expects and the value should be the expected data type for that prop. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We need to import the PropTypes object from <b>'prop-types</b> and use it to specify the expected data type for each prop. <br />
                <b>Exaple snippet-</b>
            </p>
            <div className="code">
                <p>
                    import &#123;component&#125; from "react"; <br />
                    import PropType from "prop-types"; <br />
                    export default class Navbar extends Component&#123; <br />
                    &nbsp;&nbsp; render()&#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;const &#123;username,avtar&#125; = this.props; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; return( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span&gt;&#123;username&#125;&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img alt=&#123;username&#125; src=&#123;avatar&#125; /&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; ); <br />
                    &nbsp;&nbsp; &#125;<br />
                    &#125;
    //setting default props <br />
                    Navbar.defaultProps = &#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;username: "Prem", <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; avtar: "/images.png" <br />
                    &#123;; <br />
    //type checking props<br />
                    Navbar.propTypes = &#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; username: PropTypes.string, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; avatar: PropTypes.string <br />
                    &#125;;
                </p>
            </div>

            <h3 className="td">State v/s Props</h3>
            <p>Props and state are both plain JavaScript objects. While both hold information that influences the output of render, one important difference between the two is that Props get passed to the component whereas state is managed within component.</p>

            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Props</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>State can be changed(mutable)</td>
                        <td>Props are read-only and cannot be changed(immutable)</td>
                    </tr>
                    <tr>
                        <td>State changes can be asynchronous</td>
                        <td>Props cannot be changed</td>
                    </tr>
                    <tr>
                        <td> State is managed within the component.</td>
                        <td>Props get passed to the component</td>
                    </tr>
                    <tr>
                        <td>State can used to display changes with the component</td>
                        <td>Props are used to pass information between components</td>
                    </tr>
                </tbody>
            </table>
            <h1 className="text-center">Styling in React</h1>
            <h4 className="td">Styling in React</h4>
            <p>Styling is one of the most important aspects of the React application. There
                are various ways to follow when planning to style React components. Some of
                the most popular and modern styling strategies are:  </p>
            <ul>
                <li>CSS Stylesheets</li>
                <li>Inline Styling</li>
                <li>Styled Components</li>
                <li>CSS Modules</li>
            </ul>
            <h3 className="sh">I. CSS Style sheets</h3>
            <p>This is the conventional way of styling websites. In this method, we separate the
                CSS part into an external file with a .css extension which is simply imported into the
                React component. After that, we can give className and id to point which styles
                should point to which element.</p>
            <p><b>Note:</b> Class attribute is used in HTML, whereas className is used in React. This
                is because class is a reserved keyword in JavaScript and since React uses JSX,
                which is a syntax extension to JavaScript, we must use className instead of the
                class attribute. <br />
                <b>Example: Styling the Navbar</b> <br />

            </p>
            <p className="td">Basic structure</p>
            <b>Navbar.js</b>
            <div className="code">
                <p>
                    import "./Nabvar.css"; <br />
                    const Navbar = () =&gt;&#123; <br />
                    return( <br />
                    &nbsp;&nbsp;&lt;div &nbsp;&nbsp;&nbsp;&nbsp;className="Navbar"&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt; Title of Navbar&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt; Cart Icon&lt;sup&gt;count&lt;/sup&gt;&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                    &nbsp;&nbsp;); <br />
                    &#125;; <br />
                    export default Nabvar;
                </p>
            </div>
            <b>Navbar.css</b>
            <div className="code">
                <p>
                    .navbar&#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;  display:flex; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;  justify-content: space-between; <br />
                    &#125;
                </p>
            </div>

            <h5 className="td">Advantages of Stylesheet</h5>
            <ul>
                <li>Styles of numerous documents can be organized from one single  file.</li>
                <li>Good Performance as it is easy for the browser to optimize and cache the file locally for repreated visits.</li>
                <li>You can very easily rip out the entire stylesheet and create a new one to refresh the look and feel of your app.</li>
            </ul>
            <h5 className="td">Disadvantages:</h5>
            <li>If not properly structured,d, It can become long and difficult to navigate through
                as the application becomes complex.
            </li>
            <li>CSS Stylesheets have global scopes and can cause conflicts in styles if the
                same selector names are used in the codebase </li>

            <h3 className="sh">II. Inline Styling</h3>
            <p>Inline CSS is the widely preferred but less recommended way to style your website.
                In React, you will write your style using the style attribute followed by = and then
                CSS properties enclosed by double curly braces &#123;&#123; &#125;&#125; instead of quotes “ ”. React
                uses JSX, In JSX for evaluation of any variable, state object , expression etc has to
                be enclosed in &#123; &#125;. The style attribute in React only accepts a JavaScript object with
                camelCased properties and values enclosed with quotes rather than a CSS string.
                This is the reason there are two pairs of curly braces. <br />
                <b>Note: </b> Inline styles have got more priority, and they will overwrite any other styles given to them in any manner. <br />
                <b>Example: Styling the Navbar</b>
            </p>
            <b className="td">Navbar.js- Method 1(inline styling)</b>
            <div className="code">
                <p>
                    const Navbar=()=&gt;&#123; <br />
                    return( <br />
                    &nbsp;&nbsp; &lt;div style=&#123;&#123;display:"flex",   justifyContent:"space-between"&#125;&#125; &gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt; Title of Navbar&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt; Cart Icon&lt;sup&gt;count&lt;/sup&gt;&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                    &nbsp;&nbsp;); <br />
                    &#125;; <br />
                    export default Nabvar;

                    )
                </p>
            </div>

            <b className="td">Navbar.js - Method 2 (internal style object)</b>
            <div className="code">
                <p>
                    const Navbar = () =&gt;&#123; <br />
                    return( <br />
                    &lt;div style=&#123;styles&#125;&gt; <br />
                    &lt;span&gt;Title of Navbar&lt;/span&gt; <br />
                    &lt;span&gt;Card Icon&lt;sup&gt;count&lt;/sup&gt;&lt;/span&gt; <br />
                    &lt;/div&gt; <br />
                    ); <br />
                    &#125; <br />
                    <br />
                    let styles = &#123; <br />
                    display:"flex", <br />
                    justifyContent:"space-between" <br />
                    &#125;; <br />
                    export default Navbar;
                </p>
            </div>

            <h5 className="td">Advantages of Inline CSS</h5>
            <li>Inline CSS is best suited for learners and when you are testing a particular style.</li>
            <h5 className="td">Disadvantages of Inline CSS</h5>
            <li>It cannot be reused, i.e you must write the same CSS code repreatedly for the same styels.</li>
            <li>It does not provide browser cache advantages.</li>
            <li>Some useful CSS properties like pseudo-codes, pseudo-classes, media queries, etc. cannot be used in inline styles.</li>

            <h3 className="sh">Styled Components</h3>
            <p><b>styled-components</b> is a library for React that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS. This is done using tagged template literal syntax. Follow the following steps to implement styling using styles-components:</p>
            <p>I.  First, we need to install the styled components library by running <b>npm install styled-components</b> <br /><br />
                II.  We then need to import the styled component library into our component by writing <b>import styled from 'styled-components'</b> <br /> <br />
                III.  Now we can create a variable by selecting a particular HTML element where we store out style keys. <br /><br />
                IV.  Then we use the name of the variable we created as a wrapper around our JSX elements. <br />
                <b className="fs-5">Example: Styling the Navbar</b> <br />
                Navbar.js
            </p>
            <div className="code">
                <p>
                    import styled from "styled-components"; <br />
                    const Nav = styled.div` <br />&nbsp;&nbsp;&nbsp;&nbsp;display:flex; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;justify-content:space-between;<br />` ; <br />
                    <br />
                    const Navbar = () =&gt;&#123; <br />
                    return( <br />
                    &nbsp;&nbsp; &lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;Title of Navbar&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span&gt;Card Icon&lt;sup&gt;count&lt;/sup&gt;&lt;/span&gt; <br />
                    &nbsp;&nbsp; &lt;/div&gt; <br />
                    &nbsp;&nbsp;); <br />
                    &#125; <br />
                    <br />
                    export default Navbar;
                </p>
            </div>

            <h5 className="td">Example: Dynamic Styling with props</h5>
            <p>One of the advantages of styled-components is that the components themselves are
                functional, as in you can use props within the CSS. You can also use conditional
                statements to change styles based on a state or prop.
            </p>
            <div className="code">
                <p>
                    import styled from "styled-components"; <br />
                    const Nav = styled.div` <br />&nbsp;&nbsp;&nbsp;&nbsp;display:flex; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;justify-content:space-between; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;background-color:$&#123;(props)=&gt;props.color&#125;; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;font-weight:$&#123;(props)=&gt;(props.bold?"normal":"bolder")&#125;;
                    <br />` ; <br />
                    <br />
                    const Navbar = () =&gt;&#123; <br />
                    return( <br />
                    &lt;Nav color="yellow" bold=""&gt; <br />
                    &nbsp;&nbsp; &lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;Title of Navbar&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span&gt;Card Icon&lt;sup&gt;count&lt;/sup&gt;&lt;/span&gt; <br />
                    &nbsp;&nbsp; &lt;/div&gt; <br />
                    &lt;/Nav&gt; <br />
                    &nbsp;&nbsp;); <br />
                    &#125; <br />
                    <br />
                    export default Navbar;
                </p>
            </div>
            <h5 className="td">Advantages of Styled component:</h5>
            <li>Styled components eliminate specificity problems as it encapsulates CSS inside a component.</li>
            <li>styled-components allow you to combine CSS and CSS adn JS in the same fiel.</li>
            <li>
                You can make use of props to dynamically change the styles in any way.
            </li>
            <h5 className="td">Disadvantages of Styled components:</h5>
            <li>Writing CSS in JS means separating the two in the future will be difficult, which is terrible for maintainability.</li>
            <li>Differentiating between styled and React components can be difficult.</li>
            <li>For applications that use styled components, the browser downloads the CSS and parses it using JavaScript before injecting them into the page. THis causes performance issues because the user must download a lot of JavaScript in the initial load.</li>

            <h3 className="sh">IV. CSS Modules</h3>
            <p>A CSS module is a CSS file with <b>.module.css</b> extension in which all class names and animation names are scoped locally by default. One huge advantage of the CSS modules is that it is locally scoped to the component which prevents confilicting styles because of using the same selector names. <br />
                The CSS properties are hashed into unique class names during compilation. You can use CSS Modules by creating a file with extension <b>.module.css</b> file and import it into the specific React Component fie.
                <b>Example: Styling the Navbar</b>
            </p>

            <p className="td">Navbar.js</p>
            <div className="code">
                <p>
                    import styles from "./Navbar.module.css"; <br />
                    const Navbar = () =&gt;&#123; <br />
                    return( <br />
                    &lt;div className=&#123;styles.navbar&#125;&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;Title of Navbar&lt;/span&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span&gt;Card Icon&lt;sup&gt;count&lt;/sup&gt;&lt;/span&gt; <br />
                    &nbsp;&nbsp; &lt;/div&gt; <br />
                    &nbsp;&nbsp;); <br />
                    &#125; <br />
                    <br />
                    export default Navbar;
                </p>
            </div>

            <b>Navbar.module.css</b>
            <div className="code">
                <p>
                    .navbar&#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; display:flex; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;  justify-content:space-between; <br />
                    &#125;
                </p>
            </div>

            <b className="td">Note-</b>
            <p>When you check it in the browser. on inspecting, the class name is _src_Navbar_module_navbar which is further transformed into a Unique identifier. This will remove any chances of name collision in the React App.</p>
            <div className="text-center">
                <img src="/static/images/react/cssmodule.png" alt="File structure" width="100%" />
            </div>

<h4 className="td">Advantages of CSS Module</h4>
<li>Modular and reusable CSS</li>
<li>No more Styling conflicts, so, you can use the same CSS class in multiple CSS files</li>

<h4 className="td">Disadvantages of CSS Module</h4>
<li>Using the styles object whenever constructing a className is compulsory.</li>
<li>Only allows usage of camelCase CSS class names.</li>
<h3 className="td">Lifting up the State</h3>
<p>Lfting state up is a common pattern that is essential for React developers to know.It helps you avoid more complex (and aften unnecessary) pattern for managing your state. </p>
<br />
<h3 className="td">Presentational Components</h3>
<p>A component that has to have a state, make calculations based on any other complex app logic is called a container component. <br />
&emsp;A component whose only job is to contain some JSX and render it in UI is called a presentational component. A presentational component must be exported and will never render anything on its own. It will always be rendered by a container component. <br />
&emsp;All presentation components can be changed from class-based to stateless functioanl components as shown in the following example.
</p>
<b>Navbar.js (class-based)</b>
<div className="code">
    
</div>
        </div>
    )
}