import "/src/App.css";
import { Link } from "react-router-dom";
export default function Reservedword() {
  return (
    <div className="container-fluid" id="fsm">
        <h1 className="text-center text-white bg-dark p-2">Reserved Words</h1>
        <p>In Python some words are reserved to represent some meaning or functionality. Such type of words are called Reserved words.</p>
        <h5>Threr are 33 reserved words available in python.</h5>
        <ul>
            <li>True, False, None</li>
            <li>and, or, not, is</li>
            <li>if, elif, else</li>
            <li>while, for, break, continnue, return, in, yield</li>
            <li>try, except, finally, raise, assert</li>
            <li>import, from, as, class, def, pass, global, nonlocal, lambda, del, with</li>
        </ul>
        <b>Note: </b>
        <ol>
            <li>All reserved words in python contain only alphabet symbols.</li>
            <li>Except the following 3 reserved words, all contain only lower case alphabet symbols.</li>
        </ol>
        <ul style={{fontWeight:"bold"}}>
            <li>True</li>
            <li>False</li>
            <li>None</li>
        </ul>
        <p><b className="text-danger">Eg-</b> a= true --&gt; Invalid</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  a=True --&gt; Valid</p>

        <div className="text-center">
    <img src="/static/images/keylist.png" alt="identifier" width="100%" style={{zIndex:"0"}} />
</div>
</div>
  )}