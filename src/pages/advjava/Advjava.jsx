

export default function Advjava(){
    return(
        <div className="container-fluid" id="fsm">
            <h1>Advance Java</h1>
            <h4 className="text-danger">Java is divided into two parts</h4>
          
                <li className="fw-bold fs-5 td">Core Java</li>
                <p> The core Java part covers the fundamentals (data types, functions, operators, loops, thread, exception handling, etc.) of the Java programming language. It is used to develop general purpose applications or stand alone application(application that run on single computer).</p>
                <li className="fw-bold fs-5 td">Advance Java</li>
                <p>Advanced Java covers the standard concepts such as database connectivity, networking, Servlet, web-services,JSP etc. It  is the collection of technologies and tools that enable developers to create dynamic and secure applications,</p>
                <h3 className="td">Need Of advanced Java</h3>
                <p>Without using advance java, we can not develop web application. </p>
                <p><b className="td">Web application:</b>It is a type of computer program that usually runs with the help of a web browser and also uses many web technologies to perform various tasks on the internet.</p>
                <p>Here are some reasons why advanced Java is important</p>
                <ul>
                    <li>
                     <b>Enterprise-level Development :</b>  Advanced Java is crucial for developing enterprise-level applications. It provides features such as Java Database Connectivity (JDBC), Java Naming and Directory Interface (JNDI), and Enterprise JavaBeans (EJB), which are essential for building robust and scalable enterprise applications. 
                    </li>
                    <li><b>Web Development: </b> Advanced Java plays a significant role in web development. Technologies like Servlets, JSP (JavaServer Pages), and frameworks like Spring and Struts are part of advanced Java and are widely used for developing dynamic and interactive web applications.</li>
                    <li><b>Database Connectivity:</b>
                    Advanced Java includes features like JDBC, which facilitates database connectivity. This is crucial for developing applications that need to interact with databases to store and retrieve data.
                    </li>
                    <li><b>Distributed Computing:</b> Advanced Java provides technologies such as Remote Method Invocation (RMI) and Java Message Service (JMS) that support distributed computing. These technologies enable communication between different components of a distributed application.</li>
                    <li><b>Multithreading: </b> Advanced Java provides advanced multithreading capabilities, allowing developers to create efficient and concurrent applications. Multithreading is essential for improving the performance of applications by executing multiple tasks simultaneously</li>
                    <li><b>Security: </b> Security is a critical aspect of software development. Advanced Java includes features like Java Authentication and Authorization Service (JAAS) that help in implementing security measures to protect applications and data</li>
                    <li><b>Advanced APIs:</b>Advanced Java includes various APIs (Application Programming Interfaces) that provide additional functionalities. For example, JavaMail API for sending and receiving emails, Java Naming and Directory Interface (JNDI) for accessing directory services, and Java Cryptography Extension (JCE) for cryptographic operations. </li>
                    <li><b>Frameworks:</b>Many popular Java frameworks, such as Spring and Hibernate, are considered part of advanced Java. These frameworks simplify development tasks and promote best practices, making it easier for developers to build scalable and maintainable applications. </li>
                </ul>
                <h4 className="sh">Stand-alone application</h4>
                <p>There are two type of stand alone application:-</p>
                <h5 className="td">GUI Based applications : </h5>
                <p>GUI( Graphical User Interface) is a user-friendly visual experience builder for Java applications. It comprises graphical units like buttons, labels, windows, etc. via which users can connect with an application. Swing and JavaFX are two commonly used applications to create GUIs in Java.</p>
                <p><b className="td">Eg- </b>Calculator, MS word, Video Game</p>
                <h5 className="td">
                    CUI based applications
                </h5>
                <p>CUI( Character User Interface) is a user interface where the user interacts with the computer solely through the keyboard and requires a command to perform any task. CUI is the precursor of GUI and was utilized in most of the early computers.</p>
                <p><b className="td">Eg-</b> cmd&gt;Java Test (console applications)</p>
<div className="text-center">
    <img src="/static/images/java/advjava.png" alt="advance java" width='100%' />
</div>
<h4 className="td">Edition of Java</h4>
<ol type="I">
<li><b>Standard Edition (J2SE/JSE)</b>- Core Java+JDBC(use for develop stand alone applications)</li>
<li><b>Enterprise Edition (J2EE/JEE)</b>- Servlets + JSPs(used for develop web applications)</li>
<li><b>Java Micro Edition (J2ME/JME) -</b> Use to develop mobile application and embedded application(remote devices).</li>
</ol>

<h5 className="td">JSP</h5>
<p>
JSP stands for JavaServer Pages. It is a technology used in Java web development to create dynamic, server-side web pages. JSP allows Java code to be embedded within HTML pages, enabling the separation of dynamic and static content in a web application.</p>

    <h5 className="td">Servlet</h5> 
    <p>A servlet in Java is a server-side component that extends the capabilities of a server. It is specifically designed to handle requests and generate dynamic responses for web applications. Servlets are part of the Java Platform, Enterprise Edition (Java EE) and are commonly used to build web applications.</p>  
    <h5 className="td">JDBC</h5>
<p>JDBC(Java Database Connectivity) is a technology which can be used to communicate with database from java application.It is a Java-based API (Application Programming Interface) that allows Java applications to interact with relational databases. JDBC provides a standard interface for connecting to databases, executing SQL queries, and processing the results. It is essential for database connectivity in Java applications.</p>
<ul>
    <li>JDBC is part of Java standard edition(J2SE/JSE)</li>
    <li>JDBC is a specification(Guidelines) defined by Java vendor and implemented by Database vender.</li>
    <li>Database vender provided implementation is called Driver software.</li>
</ul>

<div className="text-center">
    <img src="/static/images/java/jdbccomponent.png" alt="advance java" width='100%' />
</div>
<h4 className="td">Steps to develop JDBC Application:-</h4>
<ol type="I">
    <li>Load and Register Driver</li>
    <li>Establish Connection between Java application and database</li>
    <li>Creation of statement object</li>
    <li>Send and execute SQL query.</li>
    <li>Process result from resultSet</li>
    <li>Close connection</li>
</ol>
<div className="text-center">
    <img src="/static/images/java/jdbcprocess.png" alt="advance java" width='100%' style={{border:"1px solid black"}} />
</div>
<hr />

  <h2 className="text-center fw-bold text-danger">JDBC</h2>
<ul>
    <li>JDBC is a technology which can be used to communicate with database from java application</li>
    <li>JDBC is a part of <span className="fw-bold">Java Standard Edition( J2SE/JSE)</span></li>    <li>JDBC is a specification (Guidelines) defined by Java Vendor and implemented by Database vendor.</li>
    <li>Database Vendor provided implementation is called Driver software.</li>
</ul>

<h4 className="sh">JDBC Features</h4>
<ol type="I">
    <li>JDBC is a standard API. We can communicate with any database without rewriting our application, i.e it is platform independent technology.</li>
    <li>Most of JDBC Drivers are developed in Java and hence JDBC concept can work for any platform i.e it is platform independent technology.</li>
    <li>By using JDBC API, we can perform basic CRUD operation very easily.
    <ul className="text-success">
        <li>C - Create (Insert)</li>
        <li>R - Retrieve (select)</li>
        <li>U - Update (Update)</li>
        <li>D - Delete (Delete)</li>
    </ul>
We can also perform complete operations (like joins calling stored procedures) very easily.
    </li>
    <li>Huge vendor support for JDBC. They developed multiple products based on JDBC API.. </li>
</ol>

<h4 className="sh">JDBC versions</h4>
<ul>
    <li>Java 1.1V (Java SE 1.1 V) =&gt; JDBC 1.0V</li>
    <li>Java 1.4V (Java SE 1.4 V) =&gt; JDBC 3.0V</li>
    <li>Java 5 (Java SE 5) =&gt; No update in JDBC</li>
    <li>Java 6 (Java SE 6) =&gt; JDBC 4.0V</li>
    <li>Java 8 (Java SE 8) =&gt; JDBC 4.2V</li>
    <li>Java 9 (Java SE 9) =&gt; JDBC 4.3V (Latest version)</li>
</ul>


<h4 className="fw-bold">Differences between ODBC & JDBC</h4>
<table>
    <thead>
       <tr className="fw-bold ">
        <td><span className="text-center">ODBC</span></td>
        <td ><span className="text-center">JDBC</span></td>
       </tr>
    </thead>
    <tbody>
      <tr>
        <td>I. ODBC  stands for Open Data Base Connectivity.</td>
        <td>JDBC stands for Java Data Base Connectivity.</td>
      </tr>
      <tr>
        <td>II. Introduced by microsoft in 1992.</td>
        <td>Introduced by Sun Micro Systems in 1997</td>
      </tr>

      <tr>
        <td>III. We can use ODBC for any  language like C, C++, Java etc.</td>
        <td>We can use JDBC only for Java language.</td>
      </tr>
      <tr>
        <td>IV. We can use ODBC only for window platform.</td>
        <td>We can use JDBC for any platform.</td>
      </tr>
      <tr>
        <td>V. Mostly ODBC Drivers are developed in native language like C,C++</td>
        <td>Mostly JDBC Drivers are developed in Java.</td>
      </tr>
      <tr>
        <td>For Java Applications, it is not recommended to use ODBC because performance  will be down due to internal conversions and application will become platform dependent.</td>
        <td>For Java application, It is highly recommended to use JDBC because there are no performance and platform dependent problems.</td>
      </tr>
    </tbody>
</table>
<hr />
<h4 className="text-bold text-danger">Q. How Java is data base independent ?</h4>
<div className="text-center">
    <img src="/static/images/java/dbindependent.png" alt="advance java" width='100%' style={{border:"1px solid black"}} />
</div>
<hr />
<p> <span className="td">Note: </span> Java is data base independent but driver is database dependent</p>
<div className="text-center">
    <img src="/static/images/java/platformindependent.png" alt="advance java" width='100%' style={{border:"1px solid black"}} />
</div>
<hr />
<p><span className="td">Note: </span> Java is platform independent but JVM is platform dependent.</p>




        </div>
    )
}