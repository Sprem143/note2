
export default function Typecasting() {
    return (
        <div className="container-fluid" id="fsm">
            <h1>Type Casting</h1>
            <p>We can convert one type value to another type. This conversion is called Typecasting or
                Type coersion.</p>
            <p className="text-success">The following are various inbuilt functions for type casting.</p>
            <ul>
                <li className="fw-bold">int()</li>
                <li className="fw-bold">float()</li>
                <li className="fw-bold">complex()</li>
                <li className="fw-bold">bool()</li>
                <li className="fw-bold">str()</li>
            </ul>

            <h4 className="sh">I. int()  </h4>
            <p>We can use this function to convert values from other types to int</p>
            <div className="code">
                <p>&gt;&gt;&gt;int(123.987)</p>
                <p>123</p>
                <p>&gt;&gt;&gt;int(10+5j)</p>
                <p>TypeError: can't complex to int</p>
                <p>&gt;&gt;&gt;int(True)</p>
                <p>1</p>
                <p>&gt;&gt;&gt;int(False)</p>
                <p>0</p>
                <p>&gt;&gt;&gt;int(10)</p>
                <p>10</p>
                <p>&gt;&gt;&gt;int("10.5")</p>
                <p>ValueError: invalid literal for int() with base 10 : '10.5'</p>
                <p>&gt;&gt;&gt;int("ten")</p>
                <p>ValueError: invalid literal for int() with base 10: 'ten'</p>
                <p>&gt;&gt;&gt;int("0B1111")</p>
                <p>ValueError: invalid literal for int() with base 10:'0B1111'</p>
            </div>
            <p className="td fw-bold">Note:</p>
            <ol>
                <li>We can convert from any type to int except complex type.</li>
                <li>If we want to convert str type to int type, compulsary str should contain only integral value and should be specified in base-10</li>
            </ol>

            <h4 className="sh">II. float()  </h4>
            <p>We can use float() function to convert other type values to float type.</p>
            <div className="code">
                <p>
                    &gt;&gt;&gt;float(10) <br />
                    10.0 <br />
                    &gt;&gt;&gt;float(10+5j)  <br />
                    TypeError: can't convert complex to float <br />
                    &gt;&gt;&gt;float(True) <br />
                    1.0 <br />
                    &gt;&gt;&gt;float(False) <br />
                    0.0 <br />
                    &gt;&gt;&gt;float("10") <br />
                    10.0 <br />
                    &gt;&gt;&gt;float("10.5")
                    <br />10.5 <br />&gt;&gt;&gt;float("ten")
                    <br />ValueError: could not convert string to float: 'ten' <br />
                    &gt;&gt;&gt;float("0B1111")
                    <br />ValueError: could not convert string to float: '0B1111'
                </p>
            </div>

            <p className="td fw-bold">Note: </p>
            <p>1. We can convert n=any type value to float type except complex type.</p>
            <p>2. Whenever we are trying to convert str type to float type compulsary str should be either integral or floating point literal and should be specified only in base-10.</p>

            <h4 className="sh">III. complex()  </h4>
            <p>We can use complex() function to convert other types to complex type.</p>
            <b>Form-I : <span className="td">complex(x) : </span></b>
            <p>We can use this function to convert x into complex number with real part x and imaginary part 0.</p>
            <b>Eg:</b>
            <div className="code">
                complex(10) ==&gt; 10+0j <br />
                complex(10.5) ==&gt; 10.5+0j <br />
                complex(True)==&gt; 1+0j <br />
                complex(False)==&gt; 0j <br />
                complex("10")==&gt;10+0j <br />
                complex("10.5") ==&gt;10.5+0j <br />
                complex("ten") <br />
                ValueError:complex()arg is a malformed string
            </div>
            <b>Form-II : <span className="td">complex(x,y) : </span></b>
            <p>We can use this method  to convert x and y into complex number such that x will be real part and y will be imaginary part.</p>
            <p><b>Eg-</b> complex(10,-2)==&gt;10-3j <br />
                complex(True,False)==&gt;1+0j
            </p>


            <h4 className="sh">IV. bool()  </h4>
            <p>We can use this function to convert other type values to bool type.</p>
            <b>Eg-</b>
            <div className="code">
                <p>
                    bool(0)==&gt;False <br />
                    bool(1)==&gt;True <br />
                    bool(10)==&gt;True <br />
                    bool(10.5)==&gt;True <br />
                    bool(0.178)==&gt;True <br />
                    bool(0.0)==&gt;False <br />
                    bool(10-2j)==&gt;True <br />
                    bool(0+1.5j)==&gt;True <br />
                    bool(0+0j)==&gt;False <br />
                    bool("True")==&gt;True <br />
                    bool("False")==&gt;True <br />
                    bool("")==&gt;False <br />
                </p>
            </div>
            <div className="text-center">
                <img src="/static/images/python/booltype.png" alt="Boolean type" width="90%" />
            </div>

            <h4 className="sh">V. str()  </h4>
            <p>We can use this method to convert other type values to str type.</p>
            <b>Eg-</b>
            <div className="code">
                <p>
                    &gt;&gt;&gt;str(10) <br />
                    '10' <br />
                    &gt;&gt;&gt;str(10.5) <br />
                    '10.5' <br />
                    &gt;&gt;&gt;str(10.5j) <br />
                    '(10+5j)' <br />
                    str(True) <br />
                    'True'
                </p>
            </div>

            <h2 className="td">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fundamental Data Types vs Immutability : </h2>
            <p>All Fundamental Data types are immutable. i.e once we creates an object,we cannot
                perform any changes in that object. If we are trying to change then with those changes a
                new object will be created. This non-chageable behaviour is called immutability.
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In Python if a new object is required, then PVM wont create object immediately. First it
                will check is any object available with the required content or not. If available then
                existing object will be reused. If it is not available then only a new object will be created.
                The advantage of this approach is memory utilization and performance will be improved.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; But the problem in this approach is,several references pointing to the same object,by
                using one reference if we are allowed to change the content in the existing object then the
                remaining references will be effected. To prevent this immutability concept is required.
                According to this once creates an object we are not allowed to change content. If we are
                trying to change with those changes a new object will be created.</p>
            <b>Eg: </b>
            <div className="code">
                <p>
                    &gt;&gt;&gt;a=10 <br />
                    &gt;&gt;&gt;b=10 <br />
                    &gt;&gt;&gt;a is b <br />
                    True <br />
                    &gt;&gt;&gt;id(a) <br />
                    1572353952 <br />
                    &gt;&gt;&gt;id(b) <br />
                    1572353952 <br />
                </p>
            </div>
            <div className="text-center">
                <img src="/static/images/python/immutable.png" alt="Boolean type" width="90%" />
            </div>

            <h3 className="sh">bytes Data Type </h3>
            <b>Eg-</b>
            <div className="code">
                <p>
                    x=[10,20,30,40] <br />
                    b=bytes(x) <br />
                    type(b) ==&gt;bytes <br />
                    print(b[0])==&gt;10 <br />
                    print(b[-1])==&gt;40 <br />
                    &gt;&gt;&gt; for i in b:print(i) <br />
                    <br />
                    <p className="fw-bold">
                        10 <br />
                        20 <br />
                        30 <br />
                        40 <br />
                    </p>
                </p>
            </div>
            <b>Conclusion 1 :</b>
            <p>The only allowed values for byte data type are 0 to 256. By mistake if we are trying to
                provide any other values then we will get value error.</p>

            <b>Conclusion 2 : </b>
            <p>Once we creates bytes data type value, we cannot change its values,otherwise we will get
                TypeError.</p>
            <b>Eg-</b>
            <div className="code">
                <p>
                    &gt;&gt;&gt;x=[10,20,30,40] <br />
                    &gt;&gt;&gt;b=bytes(x) <br />
                    &gt;&gt;&gt;b[0]=100 <br />
                    TypeError: 'bytes' object does not support item assignment
                </p>
            </div>
            
         <h3 className="sh">bytearray Data type:</h3>
         <p>bytearray is exactly same as bytes data type except that its elements can be modified</p>
         <b>Eg 1 : </b>
         <div className="code">
            <p>
               x=[10,20,30,40] <br />
               b=bytearray(x) <br />
               for i in b:print(i) <br />
               10 <br />
               20 <br />
               30 <br />
               40 <br />
               b[0]=100 <br />
               for i in b:print(i) <br />
               100 <br />
               20 <br />
               30 <br />
               40
            </p>
         </div>
      <b>Eg 2 : </b>
      <div className="code">
        <p>
        &gt;&gt;&gt;x=[10,256] <br />
        &gt;&gt;&gt;b=bytearray(x) <br />
        ValueError: byte must be in range(0,256)
        </p>
      </div>

      <h3 className="sh">List Data Type:</h3>
      <p>If we want to represent a group of values as a single entity where insertion order required 
to preserve and duplicates are allowed then we should go for list data type.</p>
<ol>
    <li>Insertion order is preserved</li>
    <li>Heterogeneous objects are allowed.</li>
    <li>Duplicates are allowed</li>
    <li>Growable in nature</li>
    <li>Values should be enclosed within square brackets.</li>
</ol>
<b>Eg: </b>
<div className="code">
    <p>
        list=[10,10.5,'durga',True,10] <br />
        print(list) #[10,10.5,'durga',True,10]
    </p>
</div>
<b>Eg-</b>
<div className="code">
    <p>
        list=[10,20,30,40] <br />
        &gt;&gt;&gt;list[0] <br />
        10 <br />
        &gt;&gt;&gt;list[-1] <br />
        40 <br />
        &gt;&gt;&gt;list[1:3] <br />
        [20,30] <br />
        &gt;&gt;&gt;list[0]=100 <br />
        &gt;&gt;&gt;for i in list:print(i) <br />
        ...output--- <br />
        100 <br />
        20 <br />
        10 <br />
        40 <br />
    </p>
</div>
<p>list is growable in nature. i.e based on our requirement we can increase or decrease the size  </p>
<div className="code">
    <p>
    &gt;&gt;&gt;list=[10,20,30] <br />
    &gt;&gt;&gt;list.append("durga") <br />
    &gt;&gt;&gt;list <br />
    [10,20,30,'durga'] <br />
    &gt;&gt;&gt;list2=list*2 <br />
    &gt;&gt;&gt;list2 <br />
    [10,30,'durga',10,30,'durga']
    </p>
</div>
, mutable, heterogenous collection of elements is nothing but list, where duplicates also allowed.<p><b className="td">Note:</b> An ordered</p>

<h3 className="sh">tuple data type:</h3>
<p>tuple data type is exactly same as list data type except that it is immutable i.e we cannot change values.</p>
<p>Tuple elements can be represented within parenthesis.</p>
<b>Eg-</b>
<div className="code">
    <p>
        t=(10,20,30,40) <br />
        type(t) <br />
        &lt;class 'tuple'&gt; <br />
        t[0]= 100 <br />
        TypeError:'tuple' object does not support item assignment.
        &gt;&gt;&gt;t.append("Prem") <br />
        AttrubuteError:'tuple' object has no attribute 'append' <br />
        &gt;&gt;&gt;t.remove(10) <br />
        AttrubuteError:'tuple' object has no attribute 'remove'
    </p>
</div>
<p><b className="td">Note:</b> tuple is the read only version of list.</p>

<h3 className="sh">range Data Type:</h3>
<li>range data type represents a sequence of numbers.</li>
<li>The elements present in range Data type are not modifiable. i.e range Data type is immutable. </li>

<h5 className="td">Form-I : range(10)</h5>
<p>Generate number from 0 to 9</p>
<b>Eg-</b>
<p>r=range(10)</p>
<p>for i in r:prnt(i) --&gt; 0 to 9</p>

<h5 className="td">Form-II : range(10,20)</h5>
<p>Generate numbers from 10 to 19</p>
<p>r=range(10,20)</p>
<p>for i in r:print(i) 0=--&gt;10 to 19 </p>
<h5 className="td">Form-III : range(10,20,2)</h5>
<p> <b>2</b> means increment value.</p>
<p>r=range(10,10,2)</p>
<p>for i in r:print(i) --&gt;10,12,14,16,18</p>
<p>We can access elemets present in the range Data type by using index.</p>
<p>r=range(10,20) <br />
r[0]==&gt;10 <br />
r[15] ==&gt;IndexError:range object index out of range
</p>
<p>We cannot modify the values of range data type.</p>
<b>Eg-</b>
<p>
    r[0]=100 <br />
    TypeError: 'range' object does not support item assignment.
</p>
<p>We can create a list of vlaues with range data type</p>
<b>Eg-</b>
<div className="code">
    <p>
        &gt;&gt;&gt;l=list(range(10)) <br />
        &gt;&gt;&gt;l <br />
        [0,1,2,3,4,5,6,7,8,9]
    </p>
</div>

<h3 className="sh">set Data Type</h3>

<p>If we want to represent a group of values without duplicates where order is not important the we should go for set Data Type.</p>
<ol>
    <li>Insertion order is not preserve</li>
    <li>Duplicates are not allowed</li>
    <li>Heterogeneous objects are allowed</li>
    <li>Index concept is not applicable</li>
    <li>It is mutable collection</li>
    <li>Growable in nature</li>
</ol>
<b>Eg-</b>
<div className="code">
    <p>
        s=&#123;100,0,10,200,10,'durga'&#125; <br />
        s <br />
        &#123;0,100,'durga',200,10 &#125; <br />
        s[0] ==&gt; TypeError: 'set' object does not support indexing <br />
        &gt;&gt;&gt;s.add(60) <br />
        &gt;&gt;&gt;s <br />
        &#123;0,100,'durga',200,10&#125; <br />
        &gt;&gt;&gt;s.remove(100) <br />
        &gt;&gt;&gt;s <br />
        &#123;0,'durga',200,10,60 &#125;
    </p>
</div>
<p> set is growable in nature, based on our requirement we can increase or decrease the size.</p>

<h3 className="sh">frozenset Data Type</h3>
<p>It is exactly same as set except that it is immutable. Hence we cannot use add or remove functions.</p>
<div className="code">
    <p>
    &gt;&gt;&gt;s=&#123;10,20,30,40&#125; <br />
    &gt;&gt;&gt;fs=forzenset(s) <br />
    &gt;&gt;&gt;type(fs) <br />
    &lt;class 'frozenset'&gt; <br />
    &gt;&gt;&gt;fs <br />
    forzenset(&#123;40,10,20,30&#125;) <br />
    &gt;&gt;&gt;for i in fs:print(i) <br />
    #output <br />
    40 <br />
    10 <br />
    20 <br />
    30 <br /><br />
    &gt;&gt;&gt;fs.add(70) <br />
    AttrubuteError:'frozenset' object has no attrubute 'add' <br />
    &gt;&gt;&gt;fs.remove(10) <br />
    AttributeError:'frozenset' object has no attribute 'remove'

    </p>
</div>

<h3 className="sh">dist Data Type</h3>
<p>If we want to represent a group of values as key-value pairs then we should go for dict data type.</p>
<b>Eg-</b>
d=&#123;101:'prem', 102:'Deepak',103:'Soni' &#125;

<p>Duplicate keys are not allowed but values can be duplicated. If we are trying to insert an entry with deplicate key then old value will be replaced with new value.</p>

<b>Eg-</b>
<div className="code">
    <p>
    &gt;&gt;&gt;d=&#123;101:'Prem', 102:'Deepak',103:'Soni'&#125; <br />
    &gt;&gt;&gt;d[101]='sunny' <br />
    &gt;&gt;&gt;d <br />
    &#123;101:'sunny',102:'Deepak',103:'Soni'&#125; <br />
    #We can create empty dictionary as follows- <br />
    d=&#123; &#125; <br />
    #We can add key-value pairs as follows <br />
    d['a']='apple' <br />
    d['b']='banana' <br />
    print(d) <br />

    </p>
</div>
<p><span className="td">Note:</span>dict is mutable and the order wont be preserved.</p>
<b className="td">Note:</b>
<ol>
    <li>In general we can use bytes an bytearray data types to represent binary information like images, video files etc</li>
    <li>
        In Python2 long data type is available. But in Python3 it is not available and we can represent long values also by using int type only.
        
    </li>
    <li>In python there is no char data type. Hence we can represent char vlues also by using str type.</li>
</ol>

<h3 className="td">Summary of Datatypes in Python3</h3>
<div className="text-center d-flex flex-column">
    <img src="/static/images/python/datatype1.png" alt="summary of data type" width="95%" />
    <img src="/static/images/python/datatype2.png" alt="summary of data type" width="94%" />
</div>

<h3 className="sh">None Data type</h3>
<li>None means Nothing or No value associated.</li>
<li>If the value is not available, then to handle such type of cases None introduced.</li>
<li>It is something like null value in Java</li>
<b>Eg-</b>
<p>
    deg m1() <br />
    a=10  <br />
    print(m1()) <br />
    None
</p>
<h4 className="td">Escape Characters</h4>
<p>In String literals we can use escape characters to associate a special meaning</p>
<div className="code">
    <p>
    &gt;&gt;&gt;s="durga\nsoftware" <br />
    &gt;&gt;&gt;print(s) <br />
    durga <br />
    software <br />
    &gt;&gt;&gt;s="durga\tsoftware" <br />
    &gt;&gt;&gt;print(s) <br />
    durga &nbsp;&nbsp;&nbsp;software <br />
    &gt;&gt;&gt;s="This is \" symbol" <br />
          print(s) <br />
          This is " symbol
    </p>
</div>

 <p className="fw-bold">
    The following are various important excape characters in Python
 </p>
<ul>
    <li>\n ==&gt;New Line</li>
    <li>\t ==&gt;Horizontal tab </li>
    <li>\r ==&gt;Carriage Return </li>
    <li>\b ==&gt;Back Space </li>
    <li>\f ==&gt;Form Feed </li>
    <li>\v ==&gt;Vertical tab </li>
    <li>\' ==&gt;single quote </li>
    <li>\" ==&gt;Double quote </li>
    <li>\\ ==&gt;Back slash symbol </li>
</ul>
<h3 className="sh">Constants</h3>
<p>Constants concept is not applicable in Python but it is convention to use only uppercase characters if we don't want to change value.
    <br />MAX_VALUE=10 </p>
<p>It is just Convention but we can change the value.</p>








        </div>
    )
}