import "/src/App.css";
import { Link } from "react-router-dom";
export default function Datatype() {
  return (
    <div className="container-fluid" id="fsm">
<h1 className="text-center bg-dark text-white">DATA TYPES</h1>
<p>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp; Data Types represent the type of data present inside a variable. In python we are not required to specify the type explicitly. Based on value provided, the type will be assigned automatically. Hence Python is Dynamically Typed Language.</p>
<h5>Python contains the flilowing inbuilt data types</h5>
<ol type="I">
    <li>int</li>
    <li>float</li>
    <li>complex</li>
    <li>bool</li>
    <li>str</li>
    <li>bytes</li>
    <li>bytearray</li>
    <li>range</li>
    <li>list</li>
    <li>tuple</li>
    <li>set</li>
    <li>forzenset</li>
    <li>dict</li>
    <li>None</li>
</ol>
<p><b className="text-danger">Note:</b>Python contains several inbuilt functions</p>
<ol type="I">
    <li><b>type()</b>To check the type of variable.</li>
    <li><b>id()</b>To get address of object</li>
    <li><b>print()</b>To print the value</li>
</ol>
<p><b className="text-danger">Note:</b>In python everything is object.</p>
<h4 className="text-center bg-dark text-white p-2">int data type</h4>
<p>We can use int data type to represent whole numbers (Integral values)</p>
<b>Eg:</b>
<p>a=10</p>
<p>type(a) #int</p>
<b className="text-danger">Note:</b>
<p>In python2 we have long data type to represent very large integral values. But in Python3 there is no long type explicitly and we can represent long values also by using int type only.</p>
<h5 className="text-success">we can rrepresent int values in the following ways:-</h5>
<ol type="I">
    <li>Decimal form</li>
    <li>Binary form</li>
    <li>Octal form</li>
    <li>Hexa decimal form</li>
</ol>
<h5 className="text-success">1. Decimal form (base-10):</h5>
<ul>
    <li>It is the default number number system in python</li>
    <li>The allowed digits are : 0 to 9</li>
</ul>
<p><b className="text-danger">Eg: </b>a = 10</p>
<h5 className="text-success">2. Binary form (base-2):</h5>
<ul>
    <li>The allowed digits are : 0 & 1</li>
    <li>Literal value should be prefixed with '0b' or '0B'</li>
</ul>
<p><b className="text-danger">Eg: </b>a = 0B1111</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = 0b111</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

<h5 className="text-success">3. Octal form (base-8):</h5>
<ul>
    <li>The allowed digits are : 0 to 7</li>
    <li>Literal value should be prefixed with 0o or 0O.</li>
</ul>
<p><b className="text-danger">Eg: </b>a = 0o123</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = 0O765</p>


<h5 className="text-success">4. Hexa Decimal form (base-16):</h5>
<ul>
    <li>The allowed digits are : 0 to 9, a-f (both lower and upper cases are allowed)</li>
    <li>Literal value should be prefixed with 0x or 0X</li>
</ul>
<p><b className="text-danger">Eg: </b>a = 0xFace</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = 0XBeef</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = 0xfeed</p>

<p><b className="text-danger">Note:</b>Being a programmer we can specify literal values in decimal,  binary, octal and decimal forms. But PVM will always provide values only in decimal form.</p>
<p className="bg-dark text-white p-3">
    a = 10 <br />
    b = 0o10 <br />
    c = 0X10 <br />
    d = 0B10 <br />
    print(a) --&gt;10<br />
    print(b) --&gt;10<br />
    print(c) --&gt;10<br />
    print(d) --&gt;10
</p>

<h2 className="text-danger">Base Conversions:</h2>
<p>Python provides the following in-built functions for base conversions.</p>
<h4 className="text-success">1. bin()</h4>
<p>We can use bin() to convert from any base to binary.</p>
<b className="text-danger">Eg: </b>
<p className="bg-dark text-white p-3">
    bin(15) <br />
    - '0b1111' <br />
    bin(0o11) <br />
    - '0b1001' <br />
    bin(0X10) <br />
    -'0b10000'
</p>
<h4 className="text-success">2. oct()</h4>
<p>We can use oct() to convert from any base to octal</p>
<b className="text-danger">Eg: </b>
<p className="bg-dark text-white p-3">
   oct(10) <br />
   -'0o12' <br />
   oct(0B1111) <br />
   -0o17 <br />
   oct(0X123) <br />
   -0o443
   </p>

   <h4 className="text-success">3. hex()</h4>
<p>We can use hex() to convert from any base to hexa decimal.</p>
<b className="text-danger">Eg: </b>
<p className="bg-dark text-white p-3">
    hex(100) <br />
    -'0x64' <br />
    hex(0B111111) <br />
    -'0x3f' <br />
    hex(0o12345) <br />
 -'0x14e5'
</p>
<hr />
<h4 className="text-success text-center">float data type</h4>
<hr />
<p>We can use float data type to represent floating poit values (decimal values)</p>
<b className="text-danger">Eg:</b>
<p className="bg-dark text-white p-3">
    f=1.234 <br />
    type(f) --&gt;float
</p>
<p>We can also represent floating point value using exponentioal form (scientific notation)</p>
<b className="text-danger">Eg: </b>
<p className="bg-dark text-white p-3">
    f = 1.2e3 <br />
    print(f) --&gt; 1200.0
</p>
<p>Instead of 'e' we can use 'E'</p>
<p>The main advantage of exponential form is we can represent big values in less memory.</p>

<b className="text-danger">***Note:</b>
<p>We can represent int values in decimal, binary, octal and hexa decimal forms. But we can represent float values only by using decimal form.</p>
<b className="text-danger">Eg: </b>
<div className="text-center">
    <img src="/static/images/decimalform.png" alt="Decimal" width="80%" style={{zIndex:"0"}} />
</div><hr />
<h4 className="text-success text-center">Complex Data Type:</h4>
<hr />
<p>A complex number is of the form</p>
<div className="text-center">
    <img src="/static/images/complexdata.png" alt="Decimal" width="30%" style={{zIndex:"0"}} />
</div>
<p>a and b contain integral or floating poing values.</p>
<b className="text-danger">Eg: </b>
<p>3+5j</p>
<p>10.5+5j</p>
<p>0.5+0.1j</p>
<p>In the real part if we use int value then we can specify the either by decimal, octal, binary or hexa decimal form.But imaginary part should be specified only by using decimal form. </p>

<p className="bg-dark text-white p-3">
    a=0B11+5j <br />
    print(a) --&gt; (3+5j) <br />
    a= 3+0B11j <br />
    SyntaxError: invalid syntax
</p>
<p>Even we can perform operations on complex type values.</p>

<p className="bg-dark text-white p-3">
    a=10+1.5j <br />
    b=20+2.5j <br />
    c=a+b <br />
    print(c) <br />
    (30+4j) <br />
    type(c) <br />
    &lt;class 'complex'&gt;
</p>
<p><b className="text-danger">Note:</b> Complex data type has some inbuilt attrubutes to retrieve the real part and imaginary part.</p>
<p className="bg-dark text-white p-3">
    c=10.5+3.6j <br />
    c.real --&gt;10.5
    c.imag --&gt;3.6
</p>
<p>We can use complex type generally in scientific applications and electrical engineering applications.</p>
<hr />
<h4 className="text-success text-center">bool data type</h4>
<hr />
<p>We can use this data type to represent boolean values. The only allowed values for this data type are: True & false</p>
<p>Internally Python represents True as 1 and False as 0.</p>
<p className="bg-dark text-white p-3">
    b=True <br />
    type(b) --&gt; bool <br />
    a=10 <br />
    b=20 <br />
    c=a&lt;b <br />
    print(c) --&gt; True
    <hr />
    True+True --&gt;2 <br />
    True+False--&gt;1
</p>

<hr />
<h2 className="text-success text-center">str type:</h2>
<hr />
<p>str represents String data type</p>
<li>A string is a sequence of characters enclosed within single quotes or double quotes.</li>
<p>s1='Prem'</p>
<p>s1="Soni"</p>
<li>By using single quotes or double quotes we cannot represent multi line string literals.</li>
<p>s1="Prem</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kumar"</p>
<li>For this requirement we should go for triple single quotes (''') or triple double quotes (""")</li>
<p>s1='''Prem</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kumar'''</p>
  
<p>s1="""Prem</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kumar"""</p>
<p>We can also use triple quotes to use single quote or double quote in our String.</p>
<p className="bt-dark text-white">'''This is " character '''</p>
<p className="bt-dark text-white">'This is " character '</p>
  <p>We can embed one string on another string</p>
  <p>'''this "python class very helpful" for java Students'''
  </p>
  <h5 className="text-danger">Slicing of Strings:</h5>
  <ul>
    <li>slice means a piece</li>
    <li>[] operator is called slice operator, which can be used to retrieve parts of String.</li>
    <li>In Python Strings follows zero based index. </li>
    <li>The index can be either +ve or -ve.</li>
    <li>+ve index means forward directiosn from Left to Right</li>
    <li>-ve index means backward direction from Right to Left.</li>
  </ul>
  <table>
    <thead>
        <tr>
            <td>-4</td>
            <td>-3</td>
            <td>-2</td>
            <td>-1</td>
        </tr>
    </thead>
</table>
<table>
    <thead>
        <tr>
            <th className="p-2">P</th>
            <th className="p-2">r</th>
            <th className="p-2">e</th>
            <th className="p-2">m</th>
        </tr>
    </thead>
</table>
<table>
    <thead>
        <tr>
            <td className="p-2">0</td>
            <td className="p-2">1</td>
            <td className="p-2">2</td>
            <td className="p-2">3</td>
        </tr>
    </thead>
</table>
<p className="text-white bg-dark p-2">
    &gt;&gt;&gt;s="Prem" <br />
    &gt;&gt;&gt;s[0] --&gt;'P' <br />
    &gt;&gt;&gt;s[1] --&gt;'r' <br />
    &gt;&gt;&gt;s[90] --&gt; <br />
    <span className="text-danger">IndexError: string index out of range</span> <br />
    &gt;&gt;&gt; s[1:40] <br />
    'rem' <br />
    &gt;&gt;&gt; s[:3] <br />
    'Pre' <br />
    &gt;&gt;&gt;s[:] <br />
    'durga' <br />
    &gt;&gt;&gt;s*3 <br />
    'PremPremPrem' <br />
    &gt;&gt;&gt;len(s) <br />
    4
</p>
  <b>Note:</b>
  <p>1. In Python the following data types are considered as Fundamental Data types</p>
<ul>
    <li>int</li>
    <li>float</li>
    <li>complex</li>
    <li>bool</li>
    <li>str</li>
</ul>
  
<p>2.  In Python, we can represent char vlaues also by using str type and explicitly char type is not available.</p>
<b>Eg:</b>
  <p className="text-white bg-dark p-2">
    &gt;&gt;&gt;c='a' <br />
    &gt;&gt;&gt;type(c) <br />
    &lt;class 'str'&gt;
  </p>
  <p>3. long Data type is available in Python2 but not in Python3. In Python logn vlaues also represented by using int type only.</p>
  
  
    </div>
  )}