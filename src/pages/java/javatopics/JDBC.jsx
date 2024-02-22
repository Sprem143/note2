export default function JDBC(){
    return(
        <div className="java-content ">
<h2 className="text-center text-danger"><b>JDBC By Mahesh Sir (Java Expert)</b></h2>
<h5>Definitions:</h5>
<p><span className="text-danger">Def-I</span> JDBC is a step by step</p>
<p><span className="text-danger">Def-II</span> JDBC is a technology, it will provide very good environment to connect with database from java application in order to perform database operations from java applications. </p>
<p><span className="text-danger">Def-I</span>JDBC is a API [collection of classes and interfaces] it will provide environment to intrac with database from java application in order to perform database operations from java applications </p>
<p><span className="text-danger">Def-I</span>JDBC is an abstraction provided by SUN Microsystem and implemented by all database vendors in order to connect with database from java applications to perform database operations from java application </p>
<div className="text-center">
          <img
            src="/static/images/jdbc1.png"
            alt=""
            width="90%"
            className="img-fluid"
            style={{ zIndex: 0}}
          />
        </div>
        <hr />
        <div className="text-center">
          <img
            src="/static/images/jdbc2.png"
            alt=""
            width="90%"
            className="img-fluid"
            style={{ zIndex: 0}}
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
        <div className="text-center">
          <img
            src="/static/images/jdbc3.png"
            alt=""
            width="90%"
            className="img-fluid"
            style={{ zIndex: 0}}
          />
        </div>
        </div>
    )
}