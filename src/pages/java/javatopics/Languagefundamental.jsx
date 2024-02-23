
export default function Languagefundamental(){
    return(
       <div className="container-fluid" id="fsm">
        <h2 className="text-center">Language Fundamental</h2>
        <p> A name in java program is called identifier, which can be used for identification purpose . It can be method name, variable name, class name or label name.
</p>
<p><b> Q. How many identifiers in this program?</b></p>
<div className="text-center">
    <img src="/static/images/j1.png" alt="identifier" width="100%" style={{zIndex:"0"}} />
</div>
<p> <b className="text-danger">Ans:</b> Total five indentifiers</p>
<h4>RULES:</h4>
<h5>Rule-I:</h5>
<p>The only allowed characters in java identifiers are:</p>
<ul>
    <li>a-z</li>
    <li>A-Z</li>
    <li>0-9</li>
    <li>$ and _</li>
</ul>
<p>if we are using any other character we will get compile time error.
</p>
<b>Ex: </b>
<p>total_number  -(Valid)</p>
<p>Total#  (Invalid)</p>
<h5>Rule-II</h5>
<p>Identifiers can't start with digit.</p>
<p><b>Ex: </b> total123 -- Valid</p>
<p>123total -- Invalid</p>
<h5>Rule-III</h5>
<p>Java identifiers are case sensitive. Of course java language itself is treated as case sensitive programming language. </p>
<p><b>Ex: </b>int number=10;</p>
<p>int Number=10;</p>
<p>int NUMBER=30;</p>
<h5>Rule IV:</h5>
<p>There  is no length limit for java identifiers but it is not reccommended to take too lengthy identifiers.</p>
<h5>Rule-V:</h5>
<p>We can not use reserve word as identifiers.</p>
<b>Ex:</b>
<p>int x = 10; --&gt;Valid</p>
<p>int if = 20 --&gt;Invalid</p>
<h5>Ruel-VI:</h5>
<p>All predefine java class names and interfae names, we can use as identifiers.</p>

<div className="text-center">
    <img src="/static/images/j2.png" alt="identifier" width="100%" style={{zIndex:"0"}} />
</div>
<p><b>Note:</b> Even thought it is valid but it is not recommended because it reduces readability and create confusion.</p>
<b>Q. Which of the following are valid identifiers?</b>
<p>Options : Total_number, Java2Share, Total#, Integer, 123total, Int, Ca$h, int, _$_$_$_ , total123, all@hands</p>
<p><b className="text-success">ans</b>Total_number, Java2share,Integer,Int,Ca$h,_$_$_$_, total123</p>
 <h3 className="text-center bg-dark text-white p-2">Reserve word</h3>
 <p>In java some word are reserved to represent some meaning or functionality, such type of words are called reserved words.
</p>
<ul>
    <li><b className="text-danger">Keyword</b>If reserved word is associated with functionality, then reserved words are called keyword.</li>
    <li><b className="text-danger">Reserved Literal:</b>If reserved word only represent value, then that reserved words are called reserved literal</li>
</ul>
<div className="text-center">
    <img src="/static/images/j3.png" alt="identifier" width="80%" style={{zIndex:"0"}} />
</div>
<table>
    <thead>
        <tr>
            <th>keywords for data type (8)</th>
            <td>byte</td>
            <td>short</td>
            <td>int</td>
            <td>long</td>
            <td>boolean</td>
            <td>float</td>
            <td>double</td>
            <td>char</td>
        </tr>
    </thead>
    <tbody>
      <tr>
        <th>Keywords for flow control(11)</th>
        <td>if</td>
        <td>else</td>
        <td>switch</td>
        <td>case</td>
        <td>default</td>
        <td>while</td>
        <td>do</td>
        <td>for</td>
        <td>break</td>
        <td>continue</td>
        <td>return</td>
      </tr>
      <tr>
        <th>Keywords for modifier (11)</th>
        <td>public </td>
        <td>private</td>
        <td>protected</td>
        <td>static</td>
        <td>final</td>
        <td>abstract</td>
        <td>synchronized</td>
        <td>native</td>
        <td>strictfp (1.2v)</td>
        <td>transient</td>
        <td>volatile</td>
      </tr>
      <tr>
        <th>Keywords for exception handling (6)</th>
        <td>try</td>
        <td>catch</td>
        <td>finally</td>
        <td>throw</td>
        <td>throws</td>
        <td>assert(1.4v)</td>
      </tr>
      <tr>
        <th>Class related Keywords</th>
        <td>class</td>
        <td>interface</td>
        <td>extends</td>
        <td>implements</td>
        <td>package</td>
        <td>import</td>
      </tr>
      <tr>
        <th>Object related Keywords</th>
        <td>new</td>
        <td>instanceof</td>
        <td>super</td>
        <td>this</td>
      </tr>
      <tr>
        <th>Return type keywords</th>
        <td>void</td>
      </tr>
      <tr>
        <th>Unused Keywords</th>
        <td>goto</td>
        <td>const</td>
      </tr>
      <tr>
        <th>Reserved Literals (3)</th>
        <td>true</td>
        <td>false</td>
        <td>null</td>
      </tr>
      <tr>
        <th>Other keywords</th>
        <td>enum(1.5 V</td>
      </tr>
    </tbody>
</table>

<p><b className="text-danger">enum</b>We use enum to define a group of named constant.</p>
<p><b>Ex.</b>enum month &#123;</p>
<p>january, February....... March;</p>
<p>&#125;</p>
<p><b className="text-danger">goto</b>Uses of goto creaed several problems in old languages and hence SUN peoople banned this keyword in Java.</p>
<p><b className="text-danger">const:</b>Use final instead of const.</p>
<p><b className="text-danger">Note</b>: goto, const are unused  keywords and if we ae trying to use we will get compile time error.</p>
<p><b className="text-danger">Reserved Literals:</b> true and false are used for boolean data type.</p>
<p><b className="text-danger">null</b>Default value for object reference.</p>
<h5>Conclusion:</h5>
<ol type="I">
    <li>53 reserved words in jaava contains only lower case alphabets symbols.</li>
    <li>In java, we have only new keyword and there is no delete keyword because destruction of useless objec is the responsibility of Garbage collector.</li>
    <li>The following ae new keywords in Java.</li>
</ol>
<ol type="a">
    <li><b className="text-success">strictfp</b>- Came in 1.2 version</li>
    <li><b className="text-success">assert</b>Came in 1.4 version</li>
    <li><b className="text-success">enum</b>Came in 1.5 version</li>
</ol>
<p><b className="text-danger">Note:</b>All java reserved keyword and literals are in lower case:</p>
<ul>
    <li>'strictfp' but not 'strictFp'</li>
    <li>'instanceof' but not 'instanceOf'</li>
    <li>'synchronized' but not 'synchronize'</li>
    <li>'extends' but not 'extend'</li>
    <li>'implements' but not 'implement'</li>
    <li>'import' but not  'imports'</li>
    <li>'const' but not 'constant'</li>
</ul>
<p className="text-danger">Which of the following list contain only java reserved words:</p>
<ol>
    <li>new, delete</li>
    <li>goto, constant</li>
    <li>break, continue, return, exit</li>
    <li>implements, extends, imports</li>
    <li>notify, notifyAll</li>
    <li>final, finally finalize</li>
    <li>byte, short, Int</li>
    <li>instanceOf, StrictFp</li>
    <li>sizeof, instanceof</li>
    <li>None of above</li>
</ol>
<p><b className="text-success">Ans:</b>None of the above</p>
<p>Q. "public static void main string args"  how many reserved words in this line?</p>
<p><b className="text-danger">Ans:</b>3, public, static, void</p>
       </div>
    )
}