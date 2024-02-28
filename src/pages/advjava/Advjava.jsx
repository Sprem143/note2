

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
<h5 className="td">JDBC</h5>
<p>JDBC stands for Java Database Connectivity. It is a Java-based API (Application Programming Interface) that allows Java applications to interact with relational databases. JDBC provides a standard interface for connecting to databases, executing SQL queries, and processing the results. It is a part of the Java Standard Edition (SE) platform and is essential for database connectivity in Java applications.</p>
<h5 className="td">JSP</h5>
<p>
JSP stands for JavaServer Pages. It is a technology used in Java web development to create dynamic, server-side web pages. JSP allows Java code to be embedded within HTML pages, enabling the separation of dynamic and static content in a web application.</p>

    <h5 className="td">Servlet</h5> 
    <p>A servlet in Java is a server-side component that extends the capabilities of a server. It is specifically designed to handle requests and generate dynamic responses for web applications. Servlets are part of the Java Platform, Enterprise Edition (Java EE) and are commonly used to build web applications.</p>  
<h4 className="td">Edition of Java</h4>
<ol type="I">
<li><b>Standard Edition (J2SE/JSE)</b>- Core Java+JDBC(use for develop stand alone applications)</li>
<li><b>Enterprise Edition (J2EE/JEE)</b>- Servlets + JSPs(used for develop web applications)</li>
<li><b>Java Micro Edition (J2ME/JME) -</b> Use to develop mobile application and embedded application(remote devices).</li>
</ol>

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

        </div>
    )
}