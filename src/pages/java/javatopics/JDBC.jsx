import "/src/App.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function JDBC() {
  return (
    <div className="java-content lyout">
      <div>
        <h2 className="text-center text-danger"><b>JDBC By Mahesh Sir (Java Expert)</b></h2>
        <h5>Definitions:</h5>
        <p><span className="text-danger">Def-I: </span> JDBC is a step by step</p>
        <p><span className="text-danger">Def-II: </span> JDBC is a technology, it will provide very good environment to connect with database from java application in order to perform database operations from java applications. </p>
        <p><span className="text-danger">Def-III: </span> JDBC is a API [collection of classes and interfaces] it will provide environment to intrac with database from java application in order to perform database operations from java applications </p>
        <p><span className="text-danger">Def-IV: </span> JDBC is an abstraction provided by SUN Microsystem and implemented by all database vendors in order to connect with database from java applications to perform database operations from java application </p>
        <div className="text-center">
          <img
            src="/static/images/jdbc1.png"
            alt=""
            width="90%"
            className="img-fluid"
            style={{ zIndex: 0 }}
          />
        </div>
        <hr />
        <div className="text-center">
          <img
            src="/static/images/jdbc2.png"
            alt=""
            width="90%"
            className="img-fluid"
            style={{ zIndex: 0 }}
          />
        </div>
        <section className="code">
          <p>public interface Driver &#123;</p>
          <p>-------- abstract methods----------</p>
          <p>&#125;</p>
          <p>class OracleDriver implements Driver &#123;</p>
          <p>---------implementation by Oracle----------</p>
          <p>&#125;</p>
          <p>class MySquDriver implements  Driver &#123;</p>
          <p>-------------implementation by MySql --------</p>
          <p>&#125;</p>
          <p>class DB2Driver implements Driver &#123;</p>
          <p>-----------implementation by DB2</p>
          <p>&#125;</p>
        </section>
        <hr />
        <div className="text-center">
          <img
            src="/static/images/jdbc3.png"
            alt=""
            width="90%"
            className="img-fluid"
            style={{ zIndex: 1 }}
          />
        </div>
        <hr />
        {/* 26/02/2024 */}
        <h2 className="text-center bg-success p-2 text-white">Types of Driver</h2>
        <h3>There are four types of driver in JDBC:</h3>
        <ol style={{ fontWeight: "bold", color: "magenta" }}>
          <li>Type-1 Driver</li>
          <li>Type-2 Driver</li>
          <li>Type-3 Driver</li>
          <li>Type-4 Driver</li>
        </ol>
        <h5 className="sh">Type-1 Driver</h5>
        <ol type="I">
          <li>It also called as bridge Driver or JDBC-ODBC Driver.</li>
          <li>It was provided by SUN Microsystem as reference implementation for  driver interface inorder to provide environment for all the database vendors to implement driver interface.</li>
          <li>SUN Microsystem has provided TYPE-1  driver in the form of <u>sun.jdbc.odbc.jdbcOdbcDdriver</u> in JAVA software along with java predefine library.</li>
          <li>This driver was provided by SUN microsystem with interdependency on the Microsoft product "ODBC Driver" [Open database connectivty]</li>
          <li>ODBC is provided by Mcrosoft and implemented by using some native implementation and it will provide very good environment to connect with any type of database from JDBC-ODBC Driver.</li>
          <li>If we want to use Type-1 driver in JDBC application then we must install ODBC Driver [ODBC native library] in our system.</li>
          <li>ODBC driver is available by default in Microsoft product but it is not available in non Microsoft product by defalut, so that Type-1 driver is dependent on Microsoft products, Therefore  Type-1 driver is less portable driver.</li>
          <li>Type-1 Driver is not suitable for web applications and distrubuted applications.</li>
          <li>Type-1 driver is suitable for standalone applications.</li>
          <li>It is not for complex JDBC  Applications. It is for simple jdbc applications requirements.</li>
          <li>Type-1 driver is slower driver, because it must require two times conversion inorder to intract with database from java applications.</li>
          <ol type="1" className="ms-4 fw-bold">
            <li>From java to ODBC by JDBC-ODBC Driver.</li>
            <li>From ODBC to DB representation by ODBC Driver.</li>
          </ol>
          <li>It will reduce JDBC applications performance.</li>
        </ol>
        <hr />
        <div className="text-center">
          <img src="/static/images/java/type1.png" alt="" width="90%" className="img-fluid" style={{ zIndex: 1 }} />
        </div>
        <hr />
        <h5 className="sh">Type-2 Driver</h5>
        <ol>
          <li>It is called as <b>"part java, part native driver"</b> or simply <b>"Native driver"</b> </li>
          <li>Type-2 driver was prepared by using some java implementation and by using Database vender provided native library</li>
          <li> If we want to use Type-2 driver  in JDBC applications then we have to install the respective DB vender provided native library in our machine</li>
          <li>When compared with Type-I driver, Type-2 driver  is more portable driver.</li>
          <li>When compared with type-1 driver, type-2 driver is faster driver, type-2 driver should not required two times conversion, it is sufficient to have one time conversion to intract with database from java applications.</li>
          <li>When compared with type-1, it will improve jdbc applications performance.</li>
          <li>Type-2 driver is not Economical driver, it is costly.</li>
          <li>Type-2 driver is suggestible for standalone application only, not for web applications or enterprise applications.</li>
        </ol>
        <div className="text-center">
          <img src="/static/images/java/type2.png" alt="" width="90%" className="img-fluid" style={{ zIndex: 1 }} />
        </div>
        <h5 className="sh">Type-3 Driver</h5>
        <ol>
          <li>Type-3 driver is also called as "Network Driver".</li>
          <li>Type-1 driver and type-2 driver are suggestible for only standalone applications but, type-3 driver is suggestible for web applications and distributed applications.</li>
          <li>Type-1 driver is dependent on ODBC driver, Type-2 driver is dependent on Database vendor provided Native Library, but type-3 driver is dependent on application server which we have used for our applications.</li>
          <li>Type-3 driver is more portable driver when compared with Type-1 and Type-2 Drivers.</li>
          <li>Type-3 driver  is faster driver when compareed with Type-1 adn Type-2 driver, because Type-3 driver is not required to perform two times conversion and it is not required to load DB vendor provided native library, it is sufficient to start application server.</li>
          <li>Type-3 driver will increase performance of the JDBC applications when compared type-1 adn type-2 drivers.</li>
          <li>Type-3 driver is able to provide very good environment to connect with multiple database from multiple client at a time.</li>
          <li>It is not applicable for standalone applications, because it must require server environment.</li>
        </ol>
        <hr />
        <div className="text-center">
          <img src="/static/images/java/type3.png" alt="" width="90%" className="img-fluid" style={{ zIndex: 1 }} />
        </div>
        <h5 className="sh">Type-4 Driver</h5>
        <ol>
          <li>Type-4 driver is also called as "pure java driver" of "thin driver".</li>
          <li>It was implemented completely on the basis of java implementations.</li>
          <li>Type-4 driver is more portable driver when compared to type-1, type-2 and type-3.</li>
          <li>Type-4 driver is suggestible for both standalone applications and web applications, distributed applications.</li>
          <li>It is possible to use type-4 driver with or without application server.</li>
          <li>Type-4 driver is frequently  used  driver in the applications.</li>
          <li>Type-4 driver is light weight driver and faster driver when compared with type-1,type-2 and type-3 drivers.</li>
          <li>Type-4 driver is most Economical driver.</li>
        </ol>
        <div className="text-center">
          <img src="/static/images/java/type4.png" alt="" width="90%" className="img-fluid" style={{ zIndex: 1 }} />
        </div>
        <p className="bg-dark text-white ps-4">Class Date: 27/02/2024</p>
        <h3 className="td">Steps to prepare first JDBC applications</h3>
        <ol type="I">
          <li>Load the register driver</li>
          Establish connection between java application and database.
          <li>Create either statement or PreparedStatement or CollableStatement as per the requirements. </li>
          <li>Write and execute Sql queres.</li>
          <li>Close the statement and connection</li>
        </ol>

        <h3 className="sh">1. Load and Register the driver</h3>
        <p className="code">
          public static Class forName(String Driver_class_name) throws ClassNotFoundException <br />
          class c = Class.forName("oracle.jdbc.OracleDriver");
        </p>
        <h5 className="td">Internal flow of above statement:-</h5>
        <p className="code">
          package oracle.jdbc; <br />
          public class OracleDriver implements Driver &#123; <br />
          &nbsp;&nbsp; static &#123; <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;   DriverManager.registerDriver(); <br />
          &nbsp;&nbsp;  &#125; <br />
          &#125; <br />
          package java.sql; <br />
          public class DriverManager&#123; <br />
          &nbsp;&nbsp; public static void registerDriver(Driver d)&#123; <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; -------------- <br />
          &nbsp;&nbsp; &#125; <br />
          &#125; <br />
          public class JDBCApp&#123; <br />
          &nbsp;&nbsp; public static void main(String[]e) throws Exception&#123; <br />
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; class c = Class.forName("oracle.jdbc.OracleDriver"); <br />
          &nbsp;&nbsp; &#125; <br />
          &#125; <br />
        </p>

        <h5 className="td">Java.sql package : </h5>
        <ul>
          <li>Driver [I]</li>
          <li>DriverManager [C]</li>
          <li>Connection [I]</li>
          <li>Statement [I]</li>
          <li>PreparedStatement [I]</li>
          <li>CallableStatement [I]</li>
          <li>ResultSet [I]</li>
          <li>ResultSetMetaData [I]</li>
          <li>DatabaseMetaData [I]</li>
        </ul>
        <h5 className="td">Establish Connection between java application and database</h5>
        <p className="code">
          public static Connection getConnection(String driver_url,String db_user_Name, String db_pwd) throws SqlException <br />
          Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","java") <br />
        </p>

        <h5 className="sh">Driver URL</h5>
        <p><b className="td">Type-4</b> Driver provided by Oracle</p>
        <p> <b className="td">Driver class:</b> oracle.jdbc.OracleDriver</p>
        <p><b className="td">Driver_URL: </b>jdbc:oracle:thin:@localhost:1521:xe</p>
        <p><b className="td">Type-4 :</b> driver provided by MySql: </p>
        <p><b className="td">Driver Class:</b> com.mysql.jdbc.Driver</p>
        <p><b className="td">Driver_URL:</b> jdbc:mysql://localhost:3306/db_Name</p>
        <p className="text-success">Q. In JDBC, Connection is an interface, but how getConection() method will create Connection object? </p>
        <p><b className="td">Ans:</b> JDBC is an abstraction [collection of interfaces] provided by <b>SUN</b> and implemented by all database vendors.</p>
        <div className="text-center">
          <img src="/static/images/java/connection.png" alt="" width="90%" className="img-fluid" style={{ zIndex: 1 }} />
        </div>

      </div>
      {/* -----------sider--------------------- */}

      <div className="sider">
        <Card style={{ width: '18rem', border: '2px solid black' }}>
          <Card.Img variant="top" src="/static/images/java/jdbcquestion.jpg" height="180" />
          <Card.Body>
            <Card.Title>JDBC Quiz</Card.Title>
            <Card.Text>
              In this Test, there will be 10 multi optional questions from JDBC each for 1 mark and time for that is 10 minutes.
            </Card.Text>
            <Button variant="primary"><Link to='quiz' style={{ color: 'white', textDecoration: "none" }}>Start Test</Link></Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', border: '2px solid black' }}>
          <Card.Img variant="top" src="/static/images/React.jpg" height="180" />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>
              For react note from scratch, visite react page by clicking below.
            </Card.Text>
            <Button variant="primary"><Link to='react' style={{ color: 'white', textDecoration: "none" }}>Go to React Page</Link></Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}