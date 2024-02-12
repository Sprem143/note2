import Htmlnavbar from "./Htmlnavbar";
import "/src/App.css";
export default function HtmlHome() {
  return (
    <>
      <div className="container-fluid"  id="fsm">
        <h1 className="text-center">Welcome to Html Home page</h1>
          <h4>What is HTML?</h4>
          <p>
            HTML, or HyperText Markup Language, is a standard markup language
            used to create and design the structure of a web page. It is the
            backbone of web development and provides the basic building blocks
            for creating content on the World Wide Web. HTML uses a system of
            tags and attributes to define and structure the elements on a web
            page.
          </p>
       
          <h4>HTML Versions</h4>
          <p>
            HTML is a markup language used by the browser to manipulate text,
            images, and other content, in order to display it in the required
            format. HTML was created by Tim Berners-Lee in 1991. The first-ever
            version of HTML was HTML 1.0, but the first standard version was
            HTML 2.0, published in 1995.
          </p>
        <div className="text-center">
          <img
            src="/static/images/html_release_year.png"
            alt=""
            width="70%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>

          <h4>HTML Elements and Tags</h4>
          <p>
            HTML uses predefined tags and elements which tell the browser how to
            properly display the content. Remember to include closing tags. If
            omitted, the browser applies the effect of the opening tag until the
            end of the page.
          </p>
          <h4>HTML Page Structure</h4>
          <p>
            The basic structure of an HTML page is laid out below. It contains
            the essential building-block elements (i.e. doctype declaration,
            HTML, head, title, and body elements) upon which all web pages are
            created.
          </p>
        <div className="text-center">
          <img
            src="/static/images/htmlpagestr.png"
            alt=""
            width="70%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>

          <ul>
            <li>
              <span className="text-primary fw-bold">
                &lt;!DOCTYPE html&gt; :
              </span>
              <p>
                This is the document type declaration (not technically a tag).
                It declares a document as being an HTML document. The doctype
                declaration is not case-sensitive.
              </p>
            </li>
            <li>
              <span className="text-primary fw-bold">&lt;html&gt; :</span>
              <p>
                This is called the HTML root element. All other elements are
                contained within it.
              </p>
            </li>
            <li>
              <span className="text-primary fw-bold">&lt;head&gt; :</span>
              <p>
                The head tag contains the “behind the scenes” elements for a
                webpage. Elements within the head aren’t visible on the
                front-end of a webpage. HTML elements used inside the
                &lt;head&gt; element include:{" "}
              </p>
            </li>

            <li>
              <span className="text-primary fw-bold">&lt;style&gt; :</span>
              <p>
                {" "}
                This html tag allows us to insert styling into our webpages and
                make them appealing to look at with the help of CSS.
              </p>
            </li>
            <li>
              <span className="text-primary fw-bold">&lt;title&gt; :</span>
              <p>
                The title is what is displayed on the top of your browser when
                you visit a website and contains the title of the webpage that
                you are viewing.
              </p>
            </li>

            <li>
              <span className="text-primary fw-bold">&lt;base&gt; :</span>
              <p>
                It specifies the base URL for all relative URL’s in a document.
              </p>
            </li>

            <li>
              <span className="text-primary fw-bold">&lt;noscript&gt; :</span>
              <p>
                Defines a section of HTML that is inserted when the scripting
                has been turned off in the users browser.
              </p>
            </li>
            <li>
              <span className="text-primary fw-bold">&lt;script&gt; :</span>
              <p>
                This tag is used to add functionality in the website with the
                help of JavaScript.
              </p>
            </li>
            <li>
              <span className="text-primary fw-bold">&lt;meta&gt; :</span>
              <p>
                This tag encloses the meta data of the website that must be
                loaded every time the website is visited. For eg:- the metadata
                charset allows you to use the standard UTF-8 encoding in your
                website. This in turn allows the users to view your webpage in
                the language of their choice. It is a self closing tag.
              </p>
            </li>
            <li>
              <span className="text-primary fw-bold">&lt;link&gt; :</span>
              <p>
                The ‘link’ tag is used to tie together HTML, CSS, and
                JavaScript. It is self closing.
              </p>
            </li>
            <li>
              <span className="text-primary fw-bold">&lt;body&gt; :</span>
              <p>
                {" "}
                The body tag is used to enclose all the visible content of a
                webpage. In other words, the body content is what the browser
                will show on the front-end.
              </p>
            </li>
            <p>
              An HTML document can be created using any text editor. Save the
              text file using .html or .htm. Once saved as an HTML document, the
              file can be opened as a webpage in the browser. Note:
              Basic/built-in text editors are Notepad (Windows) and TextEdit
              (Macs). Basic text editors are entirely sufficient for when you’re
              just getting started. As you progress, there are many feature-rich
              text editors available which allow for greater function and
              flexibility.
            </p>
          </ul>
        <div className="text-center">
          <img
            src="/static/images/htmldemo.png"
            alt=""
            width="70%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
        <h3>Output :</h3>
        <div className="text-center">
          <img
            src="/static/images/htmldemo2.png"
            alt=""
            width="70%"
            className="img-fluid"
            style={{ zIndex: -1, border:"2px solid black" }}
          />
        </div>
          <h4>Features of HTML</h4>
          <ul style={{listStyleType:"circle"}}>
            <li>It is easy to learn and easy to use.</li>
            <li>It is platform-independent.</li>
            <li>Images, videos, and audio can be added to a web page.</li>
            <li>Hypertext can be added to the text.</li>
            <li>It is a markup language.</li>
          </ul>

          <h4>Why learn HTML?</h4>
          <ul style={{listStyleType:"circle"}}>
            <li>It is a simple markup language. Its implementation is easy.</li>
            <li>It is used to create a website.</li>
            <li>Helps in developing fundamentals about web programming.</li>
            <li>Boost professional career.</li>
          </ul>

          <h4>Advantages of HTML</h4>
         <ul style={{listStyleType:"circle"}}>
             <li>HTML is used to build websites.</li>
             <li>It is supported by all browsers.</li>
             <li>It can be integrated with other languages like CSS, JavaScript, etc.</li>
         </ul>

          <h4>Disadvantages of HTML</h4>
          <ul style={{listStyleType:"circle"}}>
             <li>HTML can only create static web pages. For dynamic web pages, other languages have to be used.</li>
             <li>A large amount of code has to be written to create a simple web page.</li>
             <li>The security feature is not good.</li>
          </ul>
      </div>
    </>
  );
}
