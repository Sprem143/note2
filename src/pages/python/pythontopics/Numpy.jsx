import "/src/App.css";
import { Link } from "react-router-dom";
export default function Numpy() {
  return (
    <>
      <div className="container-fluid" id="fsm">
        <h2 className="text-danger">
          <b>Numpy: A Python Library</b>
        </h2>
        <h3>
          <b>Need of Numpy:</b>
        </h3>
        <p>
          As the part of Data Science, Machine Learining, Deep Learning it is
          the very common requirement to perform complex mathematical operations
          like :{" "}
        </p>
        <ol>
          <li>Creation of Array/Matrices</li>
          <li>Perform several operations on array/matrices</li>
          <li>Perform integral calculus operations</li>
          <li>Solving Differential equations</li>
          <li>Statistics related operations etc</li>
        </ol>
        <p>
          To perform these complex mathematical operations, python does not
          contain any inbuilt library.
          <br />
          To perform these complex operations we require a library which is
          nothing but numpy.
        </p>
        <b className="text-danger">Note : </b>
        <p>
          Just because of these extra libraries like numpy,&nbsp;
          <Link to="/python/panda" target="_blank">
            Panda
          </Link>
          ,&nbsp;
          <Link to="/python/matlibplot" target="_blank">
            Matplotlib
          </Link>
          ,&nbsp;{" "}
          <Link to="/python/scikitlearn" target="_blank">
            Scikit-Learn
          </Link>
          &nbsp;etc , Python is recommended language for Data Science, and{" "}
          <Link to="/python/machinelearing" target="_blank">
            Machine Learning
          </Link>{" "}
          and{" "}
          <Link to="/python/deeplearing" target="_blank">
            Deep Learning
          </Link>{" "}
          etc{" "}
        </p>

        <h3>
          <b>Numpy and History:</b>
        </h3>
        <ul>
          <li>
            Numpy stands for <b>Numerical Python Library</b>
          </li>
          <li>The fundamental data structure in numpy is ndarray.</li>
          <li>Numpy is written in C and Python languages.</li>
          <li>
            It is the fundamental python library to perform complex numerical
            operations.{" "}
          </li>
          <li>Numpy is developed on top of Numeric Library in 2005.</li>
          <li>
            Numeric Library is developed by{" "}
            <a href="https://en.wikipedia.org/wiki/Jim_Hugunin" target="_blank">
              Travis Oliphant
            </a>
          </li>
          <li>
            Numpy is developed by{" "}
            <a
              href="https://en.wikipedia.org/wiki/Travis_Oliphant"
              target="_blank"
            >
              Travis Oliphant
            </a>{" "}
            and multiple contributors
          </li>
          <li>Numpy is freeware and open source library.</li>
          <li></li>
        </ul>
        <h3>
          <b>Q. In which language Numpy was written?</b>
        </h3>
        <p>
          Numpy was written in python and c language. As most of numpy written
          in C, Performance wise numpy is good (speed is more).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Because of high speed,
          numpy is best choice for ML algorithms than traditional python's in
          built data structures like List.
        </p>
        <h3>
          <b>What is various features of Numpy</b>
        </h3>
        <ol>
          <li>Numpy is superfast because it is written in C language.</li>
          <li>
            Numpy acs as backbone for Data science Libraries like{" "}
            <Link to="/python/panda" target="_blank">
              Pandas
            </Link>
            , &nbsp;
            <Link to="/python/scikitlearn" target="_blank">
              Scikit-learn
            </Link>{" "}
            etc Pan
          </li>
          <p>
            Pandas internally used <b>nd array</b> to store data, which is numpy
            data structure.
          </p>
          <p>Scikit-learn internally used numpy's nd array. </p>
          <li>
            Numpy has{" "}
            <abbr title="Vectorization is used to speed up the Python code without using loop. Using such a function can help in minimizing the running time of code efficiently.">
              {" "}
              vectorization
            </abbr>{" "}
            feature which improves performance while iterating.
          </li>
        </ol>
        <h3>
          {" "}
          <b>What is nd array in Numpy?</b>
        </h3>
        <ul style={{ listStyle: "disc" }}>
          <li>In Numpy, we can hold data by using Array Data Structure.</li>
          <li>
            The arrays whichh are created by using numpy are called nd arrays.
          </li>
          <li>
            <b>ndarray--</b>N-Dimensional Array or Numpy Array
          </li>
          <li>
            This nd array is most commonly used in Data Science Libraries like{" "}
            <Link to="/python/panda" target="_blank">
              Pandas
            </Link>
            , &nbsp;
            <Link to="/python/scikitlearn" target="_blank">
              Scikit-learn
            </Link>{" "}
            ect.
          </li>
        </ul>
        <ol type="I">
          <li>1-D Array is known as Vector</li>
          <li>2-D Array is known as Matrix</li>
        </ol>
        <p>
          Numpy library contains several functions to create nd arrays and to
          perform several required operations.
        </p>
        <h3>
          <b>Application Area of Numpy</b>
        </h3>
        <ol type="I">
          <li>To perform linear algebra functions</li>
          <li>To perfrom linear regression</li>
          <li>To perfrom logistic regression</li>
          <li>Deep Neural Networks</li>
          <li>K_means clustering</li>
          <li>Control Systems</li>
          <li>Operational Reasearch etc</li>
        </ol>
        <p>
          Numpy is the fundamental and compulsary required library for
          DataScience, Machine Learining, Deep Learning etc
        </p>

        <h3>
          <b>Purpose of Numpy :</b>
        </h3>
        <h3>
          <b>Advantage of numpy array over Python's inbuilt List :</b>
        </h3>

        <h3>
          <b>Installation of Numpy : </b>
        </h3>
        <b className="text-danger">
          {" "}
          <u>1st way</u>
        </b>
        <p>By using Anaconda Distribution</p>
        <p className="ms-2">
          {" "}
          Anaconda is python flavour for Data Science, ML etc
        </p>
        <p className="ms-2">
          Anaconda distrubution has inbuilt numpy library and hence we are not
          required to install explicitly.
        </p>
        <b className="text-danger">
          <u>2nd Way:</u>{" "}
        </b>
        <p>
          If python is already installed in our system, then we can install
          numpy library as follows :{" "}
        </p>
        <div className="text-center">
          <img
            src="/static/images/numpy-install.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <h4>How to check installation : </h4>
        <p className="ms-2">
          import numpy, if numpy installed successfully then we will get no
          error while importng otherwise we will get error,
        </p>
        <div className="text-center">
          <img
            src="/static/images/numpycheck.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>

        <h3>
          <b>Numpy vs Traditional Python code: Performance Test</b>
        </h3>
        <p>
          Tne Performance of Numpy is to good when compared with traditional
          python code
        </p>
        <div className="text-center">
          <img
            src="/static/images/numpyvspython.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <h4>
          <b>Output : </b>
        </h4>
        <div className="text-center">
          <img
            src="/static/images/numpyvspythonoutput.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <h3>
          <b>Array in Python: </b>
        </h3>
        <p>
          <b>Array : </b> An indexed collection of homogeneous data elements is
          nothing but array.
        </p>
        <p>
          It is commonly used concept in programming languages like C/C++/Java
          etc.
        </p>
        <p>
          <b>Note:</b>By default arrays concept is not available in python,
          instead we can use LIst.
        </p>
        <p>But in Python, we can create arrays in the following 2 ways : </p>
        <ol type="I">
          <li>By using array module</li>
          <li>By using numpy module</li>
        </ol>
        <h4>
          <b>I. By using array module: </b>{" "}
        </h4>
        <div className="text-center">
          <img
            src="/static/images/pythonarray.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <p>
          <b className="text-danger">Note : </b>Array module is not recommended
          to use because much library support is not available.
        </p>

        <h4>
          <b>II. By using Numpy module: </b>{" "}
        </h4>
        <div className="text-center">
          <img
            src="/static/images/numpyarray.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <h4>
          <b>Python List VS Numpy Arrays:</b>
        </h4>
        <ol type="I" className="ms-4">
          <li>Similarities</li>
          <li>Differences</li>
          <li>Advantage of arrays</li>
        </ol>
        <h5>
          <b>1. Similarities between Python List and Numpy Array:</b>
        </h5>
        <ol type="a" className="ms-4">
          <li>Both can be used to store data</li>
          <li>
            The order will be preserved in both types. Hence we can access
            elements by using index
          </li>
          <li>Slicing is also applicable for both</li>
          <li>
            Both are mutable, ie once we create list or array, we can change its
            elements.
          </li>
        </ol>
        <h4>
          <b>Differences between Python List and Numpy Array:</b>
        </h4>
        <ol type="a" className="ms-4">
          <li>
            List is inbuilt data type but numpy is not inbuilt. To use numpy
            arrays, we have to install and import numpy library explicitly.
          </li>
          <li>
            List can hold heterogeneous (differnt types) elements.
            <p>eg: arr= [10,10.5,True,"Prem"]</p>
            <p>But Array can hold only homogeneous elements.</p>
            <p>eg: arr= numpy.array([10,20,30])</p>
          </li>
          <li>
            On arrays we can perform vector operations(The operations which can
            be operated on every element of the array). But we can perform
            vector operations on List.
          </li>

          <div className="text-center">
            <img
              src="/static/images/vectoroperation.png"
              alt=""
              width="100%"
              className="img-fluid"
              style={{ zIndex: -1 }}
            />
          </div>
          <li>
            Arrays comsume less memory less memory when compared with List.{" "}
          </li>

          <div className="text-center">
            <img
              src="/static/images/sizeofarray.png"
              alt=""
              width="100%"
              className="img-fluid"
              style={{ zIndex: -1 }}
            />
          </div>
          <li>Arrays are Faster than List.</li>
          <li>
            Numpy Arrays are more convient to use while performing mathematical
            operations
          </li>
        </ol>
        <h4>
          <b>Creation of Numpy Arrays:</b>
        </h4>
        <p>
          Numpy library contains several functions to create ndarray based on
          our requirement.
        </p>
        <br />
        <p>The following are few of such functions:</p>
        <ol className="ms-4 fw-bold">
          <li>array()</li>
          <li>arange()</li>
          <li>zeros()</li>
          <li>ones()</li>
          <li>linspace()</li>
          <li>eye()</li>
          <li>
            random library functions:
            <ol className="ms-4" type="I">
              <li>randint()</li>
              <li>rand()</li>
              <li>uniform()</li>
              <li>randn()</li>
              <li>normal()</li>
              <li>shuffle()</li>
            </ol>
          </li>
        </ol>

        <h4>Array Attrubutes:</h4>
        <p>The following are various array attributes.</p>
        <ol>
          <li>
            <b>ndim:</b> TO get dimension of the array
          </li>
          <li>
            <b>shape:</b>To get shape of the array
          </li>
          <li>
            <b>size:</b>To get size of the array which is nothing but number of
            elements.
          </li>
          <li>
            <b>dtype:</b>To get data type of array elements
          </li>
          <li>
            <b>itemsize:</b> The size of each array element in bytes.
          </li>
        </ol>
        <div className="text-center">
          <img
            src="/static/images/arrayatr.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <br />
        <h4>
          <b>Numpy Data Types:</b>
        </h4>
        <p>
          In Python we have data types like int, float, complex, bool, str etc.
        </p>
        <p>
          But, Numpy has some extra data types in addition to these types. We
          can represent data types by using a single character also.
        </p>
        <ul style={{ listStyle: "disc" }}>
          <li>i-- integer (int8, int16, int32, int64)</li>
          <li>b-- boolean</li>
          <li>u-- unsigned integer (uint8, uint16, uint32, uint64)</li>
          <li>f-- float (float16, float32, float64)</li>
          <li>c-- complex (complex64, complex128)</li>
          <li>s-- String</li>
          <li>U-- Unicode string</li>
          <li>M-- datetime</li>
        </ul>
        <h5 className="text-danger">
          <b>integer</b>
        </h5>
        <h6>
          <b>int8</b>
        </h6>
        <ul style={{ listStyle: "circle" }}>
          <li>The value will be represented by using 8 bits.</li>
          <li>The range of values: -128 to 127</li>
        </ul>
        <h5 className="text-danger">
          <b>int16</b>
        </h5>
        <ul style={{ listStyle: "circle" }}>
          <li>The value will be represented by using 16 bits.</li>
          <li>The range of values: -32768 to 32767</li>
        </ul>
        <div className="text-center">
          <img
            src="/static/images/getsize.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <h5 className="text-danger">
          <b>int32</b>
        </h5>
        <ul style={{ listStyle: "circle" }}>
          <li>The value will be represented by using 32 bits.</li>
          <li>The range of values: -2147483648 to 2147483647</li>
          <li>This is by default int type</li>
        </ul>
        <h5 className="text-danger">
          <b>int64</b>
        </h5>
        <ul style={{ listStyle: "circle" }}>
          <li>The value will be represented by using 64 bits.</li>
          <li>
            The range of values: -9223372036854775808 to 9223372036854775807
          </li>
        </ul>
        <b>Note:</b>
        <p>1. By default int means int32 </p>
        <p>2. By default float means float64</p>

        <h4>
          <b>How to create array with required data type?</b>
        </h4>
        <p>
          By providing data type as second argument in array, we can get
          required data type of array
        </p>
        <p className="text-primary">Ex: a=np.array([10,20,30],int16)</p>
        <p>
          Instead of <b> 'int8/int16/32/int64'</b> you can also give second
          args. in this way{" "}
        </p>
        <p className="text-primary"> a=np.array([10,20,30],dtype='i8'</p>
        <p>but here 8 means 8 byte=64 bit</p>

        <div className="text-center">
          <img
            src="/static/images/inttype.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <i>dtype='i' means 32 bit( by default integer data type)</i>
        <ul style={{ listStyle: "disc" }}>
          <li> We convert data type of an array</li>
        </ul>
        <div className="text-center">
          <img
            src="/static/images/typeconvert.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <p>
          <b className="text-danger">Note: </b>If the array element unable to
          convert into our specified type then we will get error
        </p>
        <img
          src="/static/images/converterror.png"
          alt=""
          width="100%"
          className="img-fluid text-center text-center"
          style={{ zIndex: -1 }}
        />
        <p>
          <b className="text-danger">Note: </b>In above example if we will not pass any dtype in that
          case array data type will be converted into Unicode string type as
          there is one string and int can be converted into string
        </p>
        <img
          src="/static/images/automaticconversion.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
          style={{ zIndex: -1 }}
        />
<h4><b>How to convert the type of existing array?</b></h4>
<p>In general we can use astype() function</p>
<img
          src="/static/images/astype.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
          style={{ zIndex: -1 }}
        />
<p><b className="text-danger">Note:</b> By using the corresponding data type function also, we can convert the type of array</p>

<img
          src="/static/images/astype2.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
          style={{ zIndex: -1 }}
        />
<p>We can convert int data tpye into boolean by using <b> "np.bool_(array)"</b>method.</p>
<h4><b>Array Indexing: </b></h4>


        <br />
        <img
          src="/static/images/automaticconversion.png"
          alt=""
          width="100%"
          className="img-fluid text-center"
          style={{ zIndex: -1 }}
        />
      </div>
    </>
  );
}
