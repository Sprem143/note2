import "/src/App.css";
import '../Pynavbar.css'
export default function LanguageFundamental(){
    return(
        <div className="container-fluid" id="fsm">
            <h2>Language Fundamental</h2>
            <h4>Introduction</h4>
            <ul>
                <li>Python is a general purpose high level programming language.</li>
                <li>Python was developed by <a href="https://en.wikipedia.org/wiki/Guido_van_Rossum">Guido Van Rossam</a> in 1989 while working at National Research institute at Netherlands. </li>
                <li>But officially python was made available to public in 1991. The official Date of birth for python is : Feb 20th 1991</li>
                <li>Python is recommended as first programming language for beginners</li>
            </ul>
            <p><b>eg-1:</b> To print Hello World:</p>
            <h5>Java :</h5>
            <section className='code' cols="100" rows="1">
<p>public class HelloWorld &#123;</p>
<p>public static void main(String[] args)&#123;</p>
<p>System.out.println("Hello World");</p>
<p>&#125;&#125;</p>
            </section>
            <h5>C :</h5>
            <section className="code">
                <p>void main()&#123;</p>
                <p>print("Hello World")</p>
                <p>&#125;</p>
            </section>
            <h5>Python : </h5>
            <p>print("Hello World")</p>
<h4>To print the sum of 3 numbers</h4>
<h5>Java : </h5>
<section className="code">
               <p>public class Add &#123;</p>
               <p>public static void main(String[]args)&#123;</p>
               <p>int a,b;</p>
               <p>a=10</p>
               <p>b=10</p>
               <p>System.out.println("The  sum:"+(a+b));</p>
               <p>&nbsp; &nbsp; &#125;</p>
               <p>&#125;</p>
            </section>

            <h5>C: </h5>
<section className="code">
               <p>\ void main()&#123;</p>
               <p>int a,b;</p>
               <p>a=10</p>
               <p>b=10</p>
               <p>printf("The  sum:%d",(a+b));</p>
               <p>&#125;</p>
            </section>
            <h5>Python : </h5>
<section className="code">
              <p>a=10</p>
              <p>b=10</p>
              <p>print("The Sum:",(a+b))</p>
            </section>

<ul>
    <br />
    <li>The name python was selected from the TV show :The Complete Monty Python's Circus", which was broadcasted in BBC from 1969 jto 1974</li>
    <li>Guido developed python language by taking almost all programming features from different languages</li>
</ul>
<ol>
    <li>Functional programming features from C</li>
    <li>Object oriented programming features from C++</li>
    <li>Scripting Language features from Perl and shell script</li>
    <li>programming features from Modula-3Modular </li>
</ol>
<p>Most of syntax in python derived from C and ABC langauges</p>
<h4>Where can use Python :</h4>
<p>We can use everywhere. The most common imnportant applications areas are :</p>
<ol>
    <li>For developint desktop applications</li>
    <li>For developint web applications</li>
    <li>For developing detabase applications</li>
    <li>For network Programming</li>
    <li>For devloping games</li>
    <li>For data analysis applications</li>
    <li>For machine learning</li>
    <li>For developing artificial intelligence applications</li>
    <li>For IOT</li>
</ol>
<b>Note:</b>
<ul>
    <li>Internally Google and youtube use python coding</li>
    <li>NASA and Nework Stock Exchange applications developed by python</li>

    <li>Top Software companies like Google, Microsoft, IBM, Yahoo using python.</li>
</ul>
<h4>Features of Python:</h4>
<h5>I.  Simple and easy to learn : </h5>
<ul>
    <li>Python is a simple programming language, When we read Python program, we can feel like reading english statemennts.</li>
    <li>The syntaxes are very simple and only 30+ keywords are available.</li>
    <li>When compared with other languages, we can write programs with very less number of lines. Hence more readability and simplicity.</li>
    <li>We can reduce development and cost of the project.</li>
</ul>
<h5>II.  Freeware and open source:</h5>
<p>We can use Python software without any licence and it is freeware.
Its source code is open,so that we can we can customize based on our requirement</p>
<p><b>Eg: </b> Jython is customized version of python to work with Java applications.</p>
<h5>III.  High Level Programming Language:</h5>
<p>Python is high level programming language and hence it is programmer friendly language.
Being a programmer we are not required to concentrate low level activities like memory 
management and security etc..</p>
<h5>IV.  Platform Independent:</h5>
<p>Once we write a Python program,it can run on any platform without rewriting once again.
Internally PVM is responsible to convert into machine understandable form.</p>
<h5>Portability:</h5>
<p>Python programs are portable. ie we can migrate from one platform to another platform 
very easily. Python programs will provide same results on any paltform.</p>
<h5>Dynamically Typed:</h5>
<p>In Python we are not required to declare type for variables. Whenever we are assigning 
the value, based on value, type will be allocated automatically.Hence Python is considered 
as dynamically typed language.</p>
<p>But Java, C etc are Statically Typed Languages b'z we have to provide type at the beginning 
only</p>
<p>This dynamic typing nature will provide more flexibility to the programmer.</p>
<h5>VII.  Both Procedure oriented and Object oriented:</h5>
<p>Python language supports both Procedure oriented (like C, pascal etc) and object oriented 
(like C++,Java) features. Hence we can get benefits of both like security and reusability etc</p>
<h5>VIII. Interpreted : </h5>
<p>We are not required to compile Python programs explcitly. Internally Python interpreter 
will take care that compilation.</p>
<p>If compilation fails interpreter raised syntax errors. Once compilation success then PVM
(Python Virtual Machine) is responsible to execute.</p>
<h5>Extensible: </h5>
<p>We can use other language in python. The main advantages of this approach are :</p>
<ol>
    <li>We can use already existing legacy non python code</li>
    <li>We can imporve performance of the application.</li>
    <li></li>
</ol>
<h5>X. Embedded:</h5>
<p>We can use Python programs in any other language program. i.e we can emedded python programs anywhere.</p>
<h5>Extensive Library:</h5>
<p>Python has a rich inbuilt library. Being a programer we can use this library directly and we are not responsible to implemet the functionality.</p>

<h3>Limitations of Python:</h3>
<ul>
    <li>Performance wise not up to mark because it is interpreted language.</li>
    <li>Not using mobile applications</li>
</ul>

<h3>Flavors of Python:</h3>
<h5>a. CPython: </h5>
<p>It is the standard flavor of Python. It can be used to work with C language applications</p>
<h5>b. Jython or JPython:</h5>
<p>It is for Java applications. It can run on JVM.</p>

<h1>c. IronPython:</h1>
<p>It is for C#.Net plateform</p>
<h5>d. PyPy</h5>
<p>The main advantage of PyPy is performance will be imporved because JIT compiler is available inside PVM.</p>
<h5>e. RubyPython:</h5>
<p>For Ruby Plateforms.</p>
<h5>f. AnacondaPython:</h5>
<p>It is specially designed for handling large volume of data processing. </p>
<h3>Python Versions: </h3>
<ul>
    <li>Python 1.0V introduced in Jan 1994</li>
    <li>Python 2.0V introduced in October 2000</li>
    <li>Python 3.0V introduced in December 2008</li>
</ul>
<p><b>Note:</b> Python 3 won't provide backward compatibility to Python-2 i.e there is no gurantee that Python-2 programs will run in Python-3.</p>
<p>Current Version(Date: 21/02/2024): <b>Python 3.12.0</b>(Release Date: Oct. 2, 2023)</p>












        </div>
        
    )
}