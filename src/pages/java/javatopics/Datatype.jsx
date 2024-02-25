export default function Datatype() {
  return (
    <div className="container-fluid" id="fsm">
      <h2 className="text-center text-white bg-success p-1">DATA TYPES</h2>
      <p>
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp; In Java every variable and every expression has
        some type. Each and every data type is clearly defined. Every assignment
        should be checked by compiler for type compatibility.
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Because of above reason we can
        conclude java language is <b>Strongly type programming language.</b>
      </p>
      <p className="text-danger">
        Why java is not pure object oriented programming language?
      </p>
      <ul>
        <li>
          Java is not consider as pure object oriented programming language
          because several OPP feature is not satisfied by java(like operator
          overloading, multiple inheritance etc.){" "}
        </li>
        <li>
          More over we are depending on primitive data types which are
          non-objects.
        </li>
      </ul>
      <div className="text-center">
        <img
          src="/static/images/java/datatype.png"
          alt="Decimal"
          width="70%"
          style={{ zIndex: "0" }}
        />
      </div>
      <p>
        <b className="text-danger">Note</b> Except boolean and char, remaining
        data types are considered as signed data types. Because we can represent
        both positive and negative numbers.
      </p>

      <p className="sh"> Byte Data Type</p>
      <ul>
        <li>
          <span className="text-danger">Size:</span>1 byte (8 bit)
        </li>
        <li>
          <span className="text-danger">MAX_VALUE=</span> 127
        </li>
        <li>
          <span className="text-danger">MIN_RANGE=</span>128
        </li>
        <li>
          <span className="text-danger">Range= </span> -128 to 127
        </li>
        <li>Most significant bit x as sign bit</li>
        <li>0 means positive number.</li>
        <li>1 means negative number</li>
        <li>
          Positive number will be represented directly in the memory where
          negative numbers will be represent in 2's complement form.
        </li>
      </ul>
      <div>
        <img
          src="/static/images/java/bytedata.png"
          alt="Decimal"
          width="70%"
          style={{ zIndex: "0" }}
        />
      </div>
      <hr />
      <h5 className="text-danger">Errors related to byte data type:</h5>
      <div className="text-center">
        <img
          src="/static/images/java/byteerror.png"
          alt="Decimal"
          width="100%"
          style={{ zIndex: "0" }}
        />
      </div>
      <p>
        Byte is the best choice if we want to handle data in terms of streams
        either from the file or from the network (file supported form and
        network supported form is byte.
      </p>
      <hr />
      <h5 className="sh">Short Data Type</h5>
      <ul>
        <li>
          <span className="text-danger">size : </span>2 byte (16 bit)
        </li>
        <li>
          <span className="text-danger">Range</span> -2<sup>15</sup> to 2
          <sup>15</sup>-1
        </li>
        <li>
          <span className="text-danger">Range: </span> -32768 to 32767
        </li>
        <li>This is the most rerely used data type in java.</li>
      </ul>
      <p>
        <span className="td">Note:</span> Short data type is best suitable for
        16 bit processor like 8085 but these processors are completely outdated
        and hence corresponding short data type is also outdated data type.
      </p>

      <h5 className="sh">int data type</h5>
      <ul>
        <li>
          The most commonly used data type in java is <b>int</b>
        </li>
        <li>
          <span className="td">Size:</span>4 byte (32 bit)
        </li>
        <li>
          <span className="td">Range:</span> -2<sup>31</sup>to 2<sup>31</sup>-1
          (-2147483648 to 2147483647)
        </li>
      </ul>
      <h5 className="sh">long data type</h5>
      <p>
        Some times int may not enough to hold big value, then we should go for
        long type.{" "}
      </p>
      <p>
        <span className="td">Ex-I:</span>Amount of distance travelled by light
        in thousand day, to hold this value int may o=not enough , we should go
        for long data type.
      </p>
      <p>
        <span className="text-success">long l = </span>1,23,000*60*60*24*1000
        miles
      </p>
      <ul>
        <li>
          <span className="td">Size : </span>8 bytes (64 bits)
        </li>
        <li>
          <span className="td">Range:</span>-2<sup>63</sup> to 2<sup>63</sup> -1
        </li>
      </ul>
      <p>
        <span className="td">Note:</span>All the above types (byte, short, int,
        long) mint for representing. If we want to represent floating point
        values then we should go for floating point data types.
      </p>
      <p className="sh">Floating point data type</p>
      <div className="text-center">
        <img
          src="/static/images/java/floatdata.png"
          alt="Decimal"
          width="80%"
          style={{ zIndex: "0" }}
        />
      </div>
      <hr />
      <h5 className="sh mt-3">boolean data type</h5>
      <ul>
        <li>
          <span className="td">Size:</span> NA(Not applicable), Virtual mission
          dependent
        </li>
        <li>
          <span className="td">Range:</span>NA (But allowed values are :
          true/false
        </li>
      </ul>
      <p>
        <span className="td">Note:</span> In old programming language (like C )
        it is valid but java doesn't support such type of code as java is
        strongly typed language.
      </p>
      <hr />
      <h5 className="sh">char data type</h5>

      <p>
        Old language (like C++) are ASCII code based under the number of allowed
        different ASCII code are less than equal to 256. To present these 256
        characters, 8 bits are enough. Hence the size of char in old language is
        one byte.{" "}
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; But java is unique code based and the
        different unicode characters are greater than 256 and less than equals
        to 65536. To represent these many characters, 8 but may not enough
        compulsory, we should go for 16 bit, Hance the size of char in java is 2
        bytes.
      </p>
      <ul>
        <li>
          <span className="td">Size:</span> 2 bytes
        </li>
        <li>
          <span className="td">Range:</span> 0 to 65536
        </li>
      </ul>
      <div className="text-center">
        <img
          src="/static/images/java/datatable.png"
          alt="Decimal"
          width="90%"
          style={{ zIndex: "0" }}
        />
      </div>
      <p>
        <span className="td">Note:</span>'null' is the default value for object
        reference and we can not apply for primitive. If we trying to use for
        primitive then we will get compile time error.
      </p>
      <p>
        <span className="td">Ex: </span>char ch=null;
      </p>
      <p>
        <span className="td">Error:</span> error: incompatible types:
        &lt;null&gt; cannot be converted to char
      </p>

      <hr />
      <h3 className="text-center">Literals</h3>
      <p>
        A constant value which can be assign to the variable is called a
        literal.
      </p>
      <div className="text-center">
        <img
          src="/static/images/java/literal.png"
          alt="Decimal"
          width="90%"
          style={{ zIndex: "0" }}
        />
        </div>
        <h3>Integral Literals:</h3>
        <p>
          {" "}
          For integral data types (bytes, short, int, long), we can specify
          literal value in the following base
        </p>
        <h5 className="sh">I. Decimal Form (base-10) : </h5>
        <p>Allowed digits are '0-9'.</p>
        <p>
          <span className="td">Ex:</span>int x = 10;
        </p>
        <h5 className="sh">II. Octal Form (base-8):</h5>
        <p>
          Allowed digits are <b>0 to 7</b>. Literal value should be prefixed
          with 0.
        </p>
        <p>
          <span className="td">Ex:</span>int x = 010;
        </p>

        <h5 className="sh">III. Hexa Decimal Form (base-16) : </h5>
        <p>
          Allowed digits are <b>0 - 9 and a-f</b> For extra digit (a to f) we
          can use both lowercase and uppercase character. This is one of very
          few area where java is not case sensitive.
        </p>
        <p>
          - The literal should be prefixed with <b>0X or 0x</b>
        </p>
        <p>
          <span className="td">Ex: </span> int x = 0x10
        </p>
        <p>
          These are only ways to specifies literal value for integral data
          types.
        </p>
        <li>
          By default every integral literal is of int type but we can specify
          explicitly long type by suffixed with small 'l' and capital 'L'.
        </li>
        <p className="td">Q. Which of the following are valid?</p>
        <ol>
          <li>int x = 10; --&gt; Valid</li>
          <li>Long l = 10L; --&gt; Valid</li>
          <li>int x = 10L; --&gt; Invalid</li>
          <li>Long x = 10; --&gt; Valid</li>
        </ol>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; There is no direct way to specify byte
          and short literal explicitly but indirectly we can specify. Whenever
          we are assigning integral literal to the byte variable and it's value
          within the range of byte then compiler treats it automatically as byte
          literal similarly short literal also.
        </p>

        <p>
          <span className="td">Ex:</span>
        </p>
        <li>byte b = 10; --&gt; Valid</li>
        <li>Short s = 32767; --&gt; Valid</li>
        <li>byte b = 128; --&gt; Invalid</li>
        <p>
          <span className="td">Error Message:-</span>Incompatible types:
          Possible lossy conversion from <b>int</b> to byte
        </p>
        <li>Short b = 32768; --&gt; Invalid</li>
        <p>
          <span className="td">Error Message:-</span>Incompatible types:
          Possible lossy conversion from <b>int</b> to short
        </p>

<h4 className="sh">Floating Point Literal:</h4>
<p>By defalut every floating point literal is of double type and hence we can't assign directly to the float variable. But we can specify floating point literal as float type by suffixed with <b>'f' or 'F'</b></p>
<p><span className="td">Ex:</span>float f = 123.456 --&gt; Invalid</p>
<p><span className="td">Error Message:</span>Incompatible types: Possible lossy conversion from double to float.</p>
<p>float f = 123.456f;</p>
<p>double d = 123.456</p>
<li>we can specify explicitly floating point literal as double type by suffixed with ‘d’ and ‘D’.  Of course this convention is not required. 
</li>
<p><span className="td">Ex:</span>double d = 123.456D;</p>
<p>float f = 123.456d;--&gt; error:incompatible types</p>
<li>We can specify floating point literals only in decimal form and we can not specify in <b>octal</b> and <b>decimal forms.</b></li>
<p><span className="td">Rule:</span>We can assign integral literal directly to floating point variables and the integral literal can be specified either in decimal or octal or hexa decimal form.</p>
<p><span className="td">Ex:</span></p>
<div className="ps-3">
    <p>double d = 0786; --&gt; Invalid</p>
    <p>double d = 0xFace; --&gt; valid</p>
    <p>double d = 0.786; --&gt; valid</p>
    <p>double d = 0xFace.0 --&gt; Invalid</p>
    <p>double d = 10; --&gt; valid</p>
    <p>double d = 0777; --&gt; valid</p>
</div>

<p><span className="td">Rule:</span> We can't assign floating point literals to integral types.</p>
<p><span className="td">Ex: </span> double d = 10; --&gt;Valid</p>
<p>int x = 10.0</p>
<p><span className="td">Error Message:</span> Incompatible types : possible lossy conversion from double to int.</p>

<p><span className="td">Rule: </span>We can specify floating point literal even in exponential form (Scientific notation);</p>
<p><span className="td">Ex:</span>double d = 1.2e3; --&gt;Valid</p>
<p className="ps-3">float f = 1.2e3;--&gt;Invalid</p>
<p className="ps-3">float f = 1.2e3f; --&gt; Valid </p>

<p><span className="td">Rule:</span> Only allowed for boolean data types are only 'true' or 'false'</p>
<p> <span className="td">Ex:</span>boolean b = true;</p>
<div className="ps-4">
    <p>boolean b = true;</p>
    <p>boolean b = 0; --&gt; Invalid</p>
    <p>boolean b = True;--&gt; Invalid</p>
    <p>boolean b = "true";--&gt; Invalid</p>
</div>

<h5 className="sh">char</h5>
<p><span className="td">Rule: </span> We can specify char literal as single character within single quote.</p>
<p><span className="td">Ex: </span>char ch = 'a'; --&gt; Valid</p>
<div className="ps-4">
    <p>char ch = a;--&gt; Invalid</p>
    <p>char ch = "a";--&gt; Invalid</p>
</div>

<p><span className="td">Rule: </span>We can specify char literal as integral literal which represent Unicode value of the character and that integral letter can be specified either in decimal, octal  or hex decimal forms but allowed range is 0 to 65535.
</p>
<p className="td">Ex:</p>
<div className="ps-4">
    <p>char ch = 97;</p>
    <p>char ch = 0XFace;</p>
    <p>char ch = 0777</p>
    <p>char ch = 65535</p>
    <p>char ch = 65536 --&gt; Error: Incompatible type</p>
</div>
<p><span className="td">Rule:</span> We can represent char literal in Unicode representation which is nothing but <b>'\uxxxx'</b></p>
<p><span className="td">Ex: </span> char ch = '\u0061' </p>
<p><span className="td">Output:</span> a</p>
<div className="text-center">
        <img
          src="/static/images/java/escapecharacter.png"
          alt="Decimal"
          width="90%"
          style={{ zIndex: "0" }}
        />
        </div>
        <hr />
        <div className="text-center">
        <img
          src="/static/images/java/escapeoutput.png"
          alt="Decimal"
          width="90%"
          style={{ zIndex: "0" }}
        />
        </div>
<h4 className="td">Four ways to represent character;</h4>
<ol type="I">
    <li>Within Single quote: <b>'a'</b></li>
    <li>Corresponding Unicode <value:b> 97</value:b> ( Corresponding value of a)</li>
    <li>Unicode representation : <b>'\0061'</b> (Unicode representation of a )</li>
    <li>Escape character : <b> \n</b></li>
</ol>

<p className="td">Q. Which of the following are valid ?</p>
<ol type="I">
    <li>char ch = 65535;--&gt; Valid </li>
    <li>char ch = 0XBeer;--&gt; Invalid (r out of range) </li>
    <li>char ch = \uface;--&gt; Invalid  </li>
    <li>char ch = '\ubeef';--&gt; Valid  </li>
    <li>char ch = \m;--&gt; Invalid  </li>
    <li>char ch = '\iface';--&gt; Invalid (Illegal escape character) </li>
</ol>

<h4 className="td">String</h4>
<p>Any sequence of character within double quote is treated as string literal.</p>
<p><span className="td">Ex: </span> String s = "Prem";</p>
<ul>
    <li>1.7 version enhancement with respect to literals.</li>
    <li>For integral data types until 1.6 version we can specify literal value in the following base.</li>
</ul>
<ol type="I">
    <li><b>Decimal Form</b></li>
    <li><b>Octal Form</b></li>
    <li><b>Hexa Decimal Form</b></li>
</ol>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; But from 1.7 version onward we can specify literal value even in binary form also. Allowed digits are 1 and 1. Literal value should be prefixed with <b>0b</b> or <b>0B</b></p>
<p><span className="td">Ex : </span> int x = 0b1111; --&gt; 15</p>

<h3 className="td">Uses of underscore symbol in numeric literals : </h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From 1.7 version onward we can use underscore symbol between digits of numeric literal.</p>
<p><span className="td">Ex: </span> double d = 123456.789</p>
<p className="ps-4">double d = 1_23_456.7_8_9 --&gt;123456.789</p>

<ul>
    <li>The main advantage of this approach is readability of the code will be improve.
</li>
<li>
At the time of compilation these underscore symbols will be removed automatically hence after compilation the above line will be become like :
</li>
</ul>
<p className="ps-4">double d = 123456.789</p>
<li>We can use more than one underscore symbols also between digits.</li>
<p><span className="td">Ex:</span> double d = 1__2____3.5___6</p>
<li>We can use underscore symbol only between the digits if we are using any where else, we will get compile time error.
</li>
<div className="ps-4">
    <p>double d = _1__2.3 --&gt; Invalid</p>
    <p>double d = 1__2_.3 --&gt; Invalid</p>
    <p>double d = 1__2.3_ --&gt; Invalid</p>
</div>

<div className="text-center">
        <img
          src="/static/images/java/typeconversion.png"
          alt="Decimal"
          width="90%"
          style={{ zIndex: "0" }}
        />
        </div>

        <li>8 byte long value, we can assign to 4 byte float variable because both are following different memory representation internally.</li>
        <p><span className="td">Ex: </span> float f = 10l --&gt; 10.0</p>
    </div>
  );
}
