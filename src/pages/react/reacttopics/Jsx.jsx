
export default function Jsx(){
    return(
        <div className="container-fluid"  id="fsm">
<h2 className="text-danger fw-bold">What is JSX?</h2>
<dfn>JSX stands for JavaScript XML. It is syntactic sugar for creating React
Elements. It is a syntax extension to JavaScript. It is used with React to
describe what the UI should look like. JSX may remind you of a template
language, but it comes with the full power of JavaScript. It produces React
“elements.” Example:</dfn>

<p className="code">const element= &lt;h1&gt;Hello World ! &lt;/h1&gt;;</p>

<h2 className="fw-bold  td">Why JSX </h2>
<p>JSX allows us to write HTML elements in JavaScript and place them in the
DOM without any createElement() and appendChild() methods. JSX
converts HTML tags into react elements. You are not required to use JSX, but
JSX makes it easier to write React applications. Example:
</p>

<h4 className="text-success ">Without JSX</h4>
<p className="code">
    const myElement = React.createElement('h1',{},'I do not use JSX'); <br />
    const root = ReactDOM.createRoot(document.getElementById('root')); br
    root.render(myElement);
</p>
<h4 className="text-success">With JSX</h4>
<p className="code">
    const myElement = &lt;h1&gt;I Love JSX! &lt;/h1&gt;;
    <br />const root = ReactDOM.createRoot(document.getElementById('root'));
    <br />root.render(myElement);
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React embraces the fact that rendering logic should be coupled with UI logic.
It is helpful as a visual aid when working with UI inside the javascript. React
separates concerns instead of separating technologies. It allows React to
show more valuable errors and warning messages.</p>
<h3 className="sh">Babel</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Babel is a JavaScript Compiler that allows us to use future JavaScript in
today's browsers. Simply put, it can convert the latest version of JavaScript
code into the one the browser understands.
Babel can convert JSX syntax. It is therefore used to convert JSX expressions
into JavaScript code browsers can understand.</p>

<h3 className="sh">React Fragments</h3>
<p>It is a common pattern in React that a component returns multiple elements.
Fragments let you group a list of children without adding extra nodes to the
DOM. We know that we use the render method inside a component whenever
we want to render something to the screen. We may generate single or
multiple elements. However, rendering multiple elements will require a ‘div’ tag
around the content as the render method will only render a single root node
inside it at a time. Example:</p>
<p className="code">
    function App()&#123; <br />
    return( <br />
        &nbsp;&nbsp; &lt;div&gt; <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &lt;h2&gt;Hello &lt;/h2&gt; <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;How are you doing ? &lt;/p&gt; <br />
        &nbsp;&nbsp;  &lt;/div&gt;<br />
        &nbsp;&nbsp; ) <br />
    &#125;
</p>
<h5><b>Reason to use Fragments: </b></h5>
<p>As we saw in the above code, when we are
trying to render more than one root element, we have to put the entire content
inside the ‘div’ tag, which is not a good approach because no one wants to
include an extra div element if that is not required in the code. Hence Fragments were introduced, and we use them instead of the extraneous ‘div’
tag.
</p>
<p className="td">Example</p>
<p className="code">
function App()&#123; <br />
    return( <br />
        &nbsp;&nbsp; &lt;React.Fragment&gt; <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &lt;h2&gt;Hello &lt;/h2&gt; <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;How are you doing ? &lt;/p&gt; <br />
        &nbsp;&nbsp;  &lt;/React.Fragment&gt;<br />
        &nbsp;&nbsp; ) <br />
    &#125;
</p>

<h5 className="td"><b>Shorthand Fragment</b></h5>
<p>The output of the first code and the code above is the
same, but the main reason for using it is that it is a tiny bit faster when
compared to the one with the ‘div’ tag inside it, as we didn’t create any DOM
nodes. Also, it takes less memory. Another shorthand also exists for the above
method in which we use ‘&lt;&gt;’ and ‘&lt;/&gt;’ instead of the ‘React.Fragment’.
</p>
<p className="td">Example : </p>
<p className="code">
function App()&#123; <br />
    return( <br />
        &nbsp;&nbsp; &lt;&gt; <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &lt;h2&gt;Hello &lt;/h2&gt; <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;How are you doing ? &lt;/p&gt; <br />
        &nbsp;&nbsp;  &lt;/&gt;<br />
        &nbsp;&nbsp; ) <br />
    &#125;
</p>
<h3 className="td">JSX Expression</h3>
<p>With JSX, you can write expressions inside curly braces { }. JSX Expressions,
written inside curly brackets, allow only things that evaluate some value like
string, number, array map method, etc. The expression can be a React
variable, property, or any other valid JavaScript expression. JSX will execute
the expression and return the result.
</p>
<p className="code">
    function App()&#123; <br />
    &nbsp;&nbsp;var name = 'Prem Kumar' <br />
    &nbsp;&nbsp;let age = 24; <br />
    &nbsp;&nbsp;const header=&lt;h2&gt;This is Header&lt;/h2&gt;; <br />
    &nbsp;&nbsp;return( <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123;header&#125;. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;My name is &#123;name&#125;.&lt;/p&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;My age is &#123;age&#125; &lt;/p&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
        &nbsp;&nbsp; ) <br />
       &#125;
</p>

<p>Returning two items at a time is invalid in Javascript. Since JSX is still
JavaScript, its return can only handle one expression therefore, to return more
than one element, we need to wrap it in another (an outer element), which
most commonly will be a &lt;div&gt;&lt;/div&gt;.</p>
<p>For eg, The code below will throw an error because JSX expressions must
have only one parent element.</p>
<p className="code">
    function App()&#123; <br />
    &nbsp;&nbsp; &nbsp;&nbsp;return( <br />
    &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div&gt;Hello &lt;/div&gt; <br />
    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div&gt;World &lt;/div&gt; <br />
  &nbsp;&nbsp;  ) <br />
  &#125;
</p>

<h5 className="td">Comments in JSX</h5>
<p>To add JavaScript code inside JSX, we need to write it in curly brackets. To
add a comment for that code, then you have to wrap that code in JSX
expression syntax inside the /* and */ comment symbols like this:</p>
<p className="code">
    &#123;/* &lt;p&gt; This is some text &lt;/p&gt; */ &#125;
</p>
<h4 className="td">Null/Undefines/Boolean in JSX</h4>
<p>JSX ignores null, undefined and Booleans (false, true). They don't render as JSX is syntactic sugar for React.createElement(component, props,
...children). </p>
<p><span className="td">For Eg:</span>These JSX expression will all render the same thing:</p>
<p className="code">
    &lt;div/&gt; <br />
    &lt;div&gt; &lt;/div&gt;  <br />
    &lt;div&gt;&#123;false&#125; &lt;/div&gt; <br />
    &lt;div&gt;&#123;null&#125; &lt;/div&gt;<br />
    &lt;div&gt;&#123;undefined&#125; &lt;/div&gt;<br />
    &lt;div&gt;&#123;true&#125; &lt;/div&gt;
</p>
<p>If you want a value like false, true, null, or undefined to appear in the output,
you have to convert it to a string first:</p>
<p className="code">
    &lt;div&gt; <br />
    &nbsp;&nbsp; &nbsp;&nbsp;My JavaScript variable is &#123;String(myVariable)&#125; <br />
    &lt;/div&gt; <br />
</p>

<h3 className="sh">Functins in JSX </h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A function can be defined and used by the expression. The component takes the
function's output to produce content. We can simply define a function inside our
component, and we can call it inside the return() method. We can invoke the function
by adding parentheses () at the end.</p>

<p className="td">For Eg:</p>
<p className="code">
    const App = () =&gt; &#123; <br />
    &nbsp;&nbsp; const a = 4; <br />
    &nbsp;&nbsp; const b = 6;<br />
    &nbsp;&nbsp; const sum = (a,b) =&gt; a+b;<br />
    &nbsp;&nbsp;return(<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt; Sum of &#123;a&#125; and &#123;b&#125; is : &#123;sum(a,b)&#125; &lt;/h2&gt;<br />
  &nbsp;&nbsp;  )<br />
  &#125;
</p>

<h3 className="sh">Arrays in JSX</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrays can be rendered inside the JSX Expressions easily using curly braces
similar to any variable. For example:</p>
<p className="code">
    const arr = [1,2,3,4,5]; <br />
    const App = () =&gt; &#123; <br />
    &nbsp;&nbsp; &nbsp;&nbsp;return( &lt;h2&gt; Array is : &#123;arr&#125; &lt;/h2&gt;); <br />
    &nbsp;&nbsp;&#125;;
</p>
<p><span className="td">Output:</span>Array is : 12345;</p>

<h3 className="sh">Iterating over the array</h3>
<p>We usually use the map function to iterate through the array in React. The
map is a JavaScript function that can be called on any array. With the map
function, we map every element of the array to the custom components in a
single line of code. That means there is no need to call components and their
props array elements repeatedly</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The .map() method allows you to run a function on each item in the array,
returning a new array. In React, <b>map()</b>  can be used to generate lists and
render a list of data to the DOM. To use the map() function, we attach it to an
array we want to iterate over.</p>
<p className="td">Example</p>
<p className="cd">
    const myArray = ['apple','banana','orange']; <br />
    const myList = myArray.map((item,index)=&gt; &lt;p key=&#123;index&#125;&gt;&#123;item&#125;&lt;/p&gt;)
</p>
<p><span className="td">Note:</span>Keys allow React to keep track of elements. This way, if an item is
updated or removed, only that item will be re-rendered instead of the entire
list. Keys need to be unique to each sibling.
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Generally, the key should be a unique ID assigned to each item. As a last
resort, you can use the array index as a key.</p>

<h2 className="sh">FIlter()</h2>
<p>The filter() method is an iterative method. It calls a provided callbackFn
function once for each element in an array and constructs a new array of all
the values for which callbackFn returns a truthy value. Array elements that do
not pass the callbackFn test are not included in the new array.
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The JavaScript Array filter() Method is used to create a new array from a
given array consisting of only those elements from the given array which
satisfy a condition set by the argument method.
</p>
<p className="td">Example:</p>
 <p className="code">
    function isEven(value)&#123; <br />
    &nbsp;&nbsp; return value % 2 == 0;
    &#125;
    var originalArr = [11,98,31,23,944]; <br />
    var newArr = originalArr.filter(isEven); <br />
    console.log(newArr);
 </p>
<p><span className="td">Output:</span>[98,944]</p>
<p>The function passed in the filter function checks whether each element is even or odd. The filter function then return only the e truthy element; hence, the new
array returned consists of only 2 elements, 98 and 944.</p>

<h3 className="sh">Objects in JSX </h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objects can be defined as an unordered collection of data in the form of “key:
value” pairs. JSX can’t render objects. React has no way to tell what to render
when provided with an object, thus the Invariant Violation error pops up when
attempting so. The error "Objects are not valid as a React child" is standard,
and the solution is to manipulate the object so that it becomes a valid element And this is excellent because it now remains in the developer's hand to decide
how to present the data in the object in its application. </p>
<p className="td">Example:</p>
<p className="code">
    const App=()=&gt; <br />
    const myVariable = &#123; <br />
    &nbsp;&nbsp;&nbsp;&nbsp; productName: "Watermelon", <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; price : 12 <br />
        &#125; <br />
        return ( <br />
            &nbsp;&nbsp;&nbsp;&nbsp;   &lt;div&gt; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123;myVariable.productName  : $&#123;myVariable.price&#125;&#125; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
       &nbsp;&nbsp; ) <br />
</p>
<p>And the above code would render a div with the content: Watermelon: $12</p>

<h4 className="sh">Tables in JSX : </h4>
<p>The tables are created using the &lt;table&gt; tag in which the &lt;tr&gt; tag is used to
create table rows, and the &lt;td&gt; tag is used to create data cells. The elements
under &lt;td&gt; are regular and left aligned by default. Here, the border is an
attribute of &lt;table&gt; tag, and it is used to put a border across all the cells. If
you do not need a border, then you can use border = "0".
</p>
<h5 className="td">Table Heading</h5>
<p>Table heading can be defined using &lt;th&gt; tag. This tag will be put to replace
&lt;td&gt; tag, which is used to represent actual data cells. Normally you will put
your top row as a table heading as shown below; otherwise, you can use &lt;th&gt;
element in any row. Headings, which are defined in &lt;th&gt; tag are centred and
bold by default</p>
<h3 className="td">Colspan and Rowspan Attributes:</h3>
<p>You can use the <b>colSpan</b> attribute if you want to merge two or more columns
into a single column. Similarly, you can use <b>rowSpan</b> if you want to merge two
or more rows. Example:</p>
<p className="code">
    &lt;table border="1" &gt; <br />
    &nbsp;&nbsp; &lt;tr&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;th&gt; Column 1 &lt;/th&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;th&gt; Column 2 &lt;/th&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;th&gt; Column 3 &lt;/th&gt;<br />
    &nbsp;&nbsp; &lt;/tr&gt;<br />
    &nbsp;&nbsp; &lt;tr&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;td rowSpan="2"&gt; Row 1 cell  1 &lt;/td&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;Row 1 Cell 2 &lt;/td&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;Row 1 Cell 3&lt;/td&gt;<br />
    &nbsp;&nbsp; &lt;/tr&gt; <br />
    &nbsp;&nbsp; &lt;tr&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;Row 2 Cell 2 &lt;/td&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;Row 2 Cell 3&lt;/td&gt; <br />
    &nbsp;&nbsp; &lt;/tr&gt; <br />
    &nbsp;&nbsp; &lt;tr&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;td&gt;Row 3 Cell 1 &lt;/td&gt; <br />
    &nbsp;&nbsp; &lt;/tr&gt; <br />
    &lt;/tabel &gt; <br />
</p>
<div className="text-center">
    <img src="/static/images/react/tableborder.png" alt="table border"  width='50%'/>
</div>
<hr />
<h4 className="td">Table Caption</h4>
<p>The caption tag will serve as a title or explanation for the table and will show
up at the top. It can be just before the table's 1st &lt;tr&gt; element.
</p>
<p className="td">Example</p>
<p className="code">
    &lt;table border="1"&gt; <br />
    &nbsp;&nbsp; &lt;caption&gt;This is the caption &lt;/caption&gt; <br />
    &nbsp;&nbsp;&lt;tr&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt; row 1, column 1 &lt;/td&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt; row 1, column 2 &lt;/td&gt; <br />
    &nbsp;&nbsp;&lt;/tr&gt;<br />

    &nbsp;&nbsp;&lt;tr&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt; row 2, column 1 &lt;/td&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt; row 2, column 2 &lt;/td&gt; <br />
    &nbsp;&nbsp;&lt;/tr&gt;<br />
    &lt;table&gt;
</p>
<div className="text-center">
    <img src="/static/images/react/tablecaption.png" alt="table border"  width='90%'/>
</div>

<h4 className="td">&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</h4>
<p>
The &lt;thead&gt; tag is used to group header content in a table. The &lt;tbody&gt; tag
is used to group the body content in a table. The &lt;tfoot&gt; tag is used to group
footer content in a table. These are the semantic tags that not only provide
meaning to the elements but also have some other useful functions as well.
Browsers can use these elements to enable scrolling of the table body
independently of the header and footer. Also, when printing a large table that
spans multiple pages, these elements can enable the table header and footer
to be printed at the top and bottom of each page.
</p>
<p className="td">Note:</p>
<p>You can use one table inside another table. Not only tables, but you can
also use almost all the tags inside table data tag &lt;td&gt;. This is called a nested
table.</p>

<h4 className="sh">Conditional Rendering</h4>
<p>Conditional rendering in React works the same way conditions work in
JavaScript. We can use JavaScript operators like if - else or the conditional
operator (ternary operator) or AND operator or OR operator in JSX.
</p>
<h5 className="fw-bold">Conditional rendering with if else statement</h5>
<p>We can use the if-else statements to render a JSX expression on the basis of
some conditions. Note that if-else statements can’t return additional JSX
elements apart from the elements which are inside the if-else statements. This
is because the return keyword inside the App component will return the
elements which are after the return statement. So, if any condition inside the
if-else statement is true, then just the elements inside that condition gets
rendered and it doesn’t even check the rest of the conditions or elements
which are put outside that truthy condition. Example:</p>

<p className="code">
    const App = () =&gt &#123; <br />
    &nbsp;&nbsp; const email = "demo@prem.com" <br />
    &nbsp;&nbsp; const pass@prem.com" <br />
    if(email=="demo@prem.com")&#123; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;User is an employee.&lt;/h1&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &#125;else&#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Incorrect password.&lt;/h1&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125; <br />
    &#125;else&#123; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return &lt;h1&gt;User is a student. &lt;/h1&gt; <br />
    &nbsp;&nbsp;&#125;<br />
    &#125;<br />
</p>
<h5>Conditional rendering with the ternary operator</h5>
<p>The conditional (ternary) operator is the only JavaScript operator that takes
three operands: a condition followed by a question mark (?), then an
expression to execute if the condition is truthy followed by a colon (:), and finally, the expression to execute if the condition is falsy. This operator is
frequently used as an alternative to an if...else statement.</p>
<p className="td">Example : </p>
<p className="code">
    const App = () =&gt; <br />
    &nbsp;&nbsp;const email = "demo@prem.com" <br />
    &nbsp;&nbsp;const password = "demo"; <br />
    &nbsp;&nbsp; return( <br />
    &nbsp;&nbsp;&nbsp;&nbsp;   &lt;&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &#123; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   (email == "demo@prem.com")?(password == "demo")?&lt;h1&gt; User is an employee. &lt;/h1&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &lt;h1&&lt;Incorrect password &lt;/h1&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : &lt;h1&gt;User is a student. &lt;/h1&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;    &#125; <br />
    &nbsp;&nbsp;  &nbsp;&nbsp;  &lt;&gt; <br />
    &nbsp;&nbsp;  ) <br />
    &#125;
</p>
<h5 className="td">Conditional rendering with AND operator</h5>
<p>Another way to conditionally render a React component is by using the &&
operator. It returns the first falsy and last truthy value.
</p>
<p className="td">Example</p>
<p className="code">
    const App = () =&gt; &#123; <br />
    &nbsp;&nbsp;const email = "demo@prem.com" <br />
    &nbsp;&nbsp;const password = "demo"; <br />
    &nbsp;&nbsp; return(  <br />
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#123; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   (email=="demo@prem.com" && password == "demo") <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   && (&lt;h1&gt; User is an employee. &lt;/h1&gt;) <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &#125; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#123; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   (email=="demo@prem.com" && password != "demo") <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    && (&lt;h1&gt; Incorrect Password &lt;/h1&gt;) <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#125; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &#123; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    (email!="demo@prem.com") <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    && (&lt;h1&gt;User is a student &lt;/h1&gt;) <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     &#125; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;    &lt;/&gt; <br />
    &nbsp;&nbsp;  ) <br />
    &#125;
</p>

<h5 className="td">Conditional rendering with OR operator</h5>
<p>We can also render a React component by using the || operator. It returns last
falsy and first truthy value.</p>

<p className="td">Example:</p>
<p className="code">
    const App = () =&gt; &#123; <br />
    &nbsp;&nbsp;  const email = "demo@prem.com" <br />
    &nbsp;&nbsp;&nbsp;&nbsp; return ( <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;&gt; <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &#123;( email == "demo@prem.com" || email == "demo2@prem.com") && ( <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &lt;h1&gt; User is an employee. &lt;/h1&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    )&#125; <br />
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/&gt;<br />
             &nbsp;&nbsp;&nbsp;&nbsp; ) <br />
    &#125;
</p>






        </div>
    )
}