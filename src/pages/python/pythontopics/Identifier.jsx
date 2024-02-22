import '/src/App.css'
export default function Identifier(){
    return(
        <div className="container-fluid" id="fsm">
           <h2 className='text-center'>Identifiers</h2>
           <p>A name in Python program is called identifier</p>
           <p>It can be class name or function name or module name or variable name</p>
           <p>a=10</p>
           <h4>Rules to define Identifiers in Python:</h4>
           <h5>1.  The only allowed characters in python are</h5>
           <ul>
            <li>Alphabet symbols (either lower case or upper case)</li>
            <li>digits(0 to 9)</li>
            <li>underscore symbol(_)</li>
           </ul>
           <p>By mistake if we are using any other symbol like $ then we will get syntax error. </p>
           <ul>
            <li>cash = 10 (valid)</li>
            <li>ca$h = 20 (Invalid)</li>
           </ul>
           <h5>2.  Identifier should not starts with digit</h5>
           <ul>
            <li>123total ( Invalid)</li>
            <li>total123 (Valid)</li>
           </ul>
<h5>3. Identifiers are case sensitive. Of course Python language is case sensitive language</h5>
<ul>
    <li>total = 10</li>
    <li>TOTAL = 999</li>
    <li>print(total) #10</li>
    <li>print(TOTAL) #999</li>
</ul>

<h4>Identifier: </h4>
<ol>
    <li>Alphabet symbols (Either Upper case OR Lower case)</li>
    <li>If identifier is start with Underscore(_) then it indicates it is private.</li>
    <li>Identifier should not start with Digits.</li>
    <li>Identifiers are case sensitive.</li>
    <li>We cannot use reserved words as identifiers.</li>
    <p><b>Eg : def = 10 (Invalid)</b></p>
    <li>There is no length limit for Python identifiers. But not recommended to use too lengthy Identifiers.</li>
    <li>Dollar ($) symbol is not allowed in Python.</li>
</ol>

<h5>Q. Which of the following are valid Python Identifiers?</h5>
<ol>
    <li>123total (Invalid)</li>
    <li>total123 (valid)</li>
    <li>java2share (Valid)</li>
    <li>ca$h (Invalid)</li>
    <li>_abc_abc_ (Valid)</li>
    <li>def (Invalid)</li>
    <li>if (Invalid)</li>
</ol>


        </div>
    )
}