import "/src/App.css";
export default function Csshome() {
  return (
    <>
      <div className="container-fluid"  id="fsm">
        <h2 className="text-center fw-bold text-success">
          Welcome to CSS home Page
        </h2>

          <h4>What is CSS in web development</h4>
          <p>CSS stands for Cascading Style Sheets. It is a fundamental technology in web development that plays a significant part in shaping websites’ visual appearance and layout. CSS helps you style your content sheet online and make it look attractive and user-friendly.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS operates by defining a set of guidelines that specify how HTML elements should be displayed in a web browser. These rules include properties like colors, fonts, spacing, positioning, and more. By applying CSS to HTML documents, web developers are able to develop an integrated and visually pleasing design for their websites.</p>
        <div className="text-center">
          <img
            src="/static/images/css1.png"
            alt=""
            width="100%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
          <h4>CSS Introduction</h4>
          <p>
            CSS (Cascading Style Sheets) is a simply designed language intended
            to simplify the process of making web pages presentable. CSS allows
            you to apply styles to HTML documents. It describes how a webpage
            should look. It prescribes colors, fonts, spacing, etc. In short,
            you can make your website look however you want. CSS lets developers
            and designers define how it behaves, including how elements are
            positioned in the browser.
          </p>
          <p>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;HTML uses tags and CSS uses rulesets. CSS
            styles are applied to the HTML element using selectors. CSS is easy
            to learn and understand, but it provides powerful control over the
            presentation of an HTML document.
          </p>

          <h4>Why CSS?</h4>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              <b>CSS saves time:</b>
            </li>
            <p>
              You can write CSS once and reuse the same sheet in multiple HTML
              pages.
            </p>
            <li>
              <b>Easy Maintenance:</b>
            </li>
            <p>
              To make a global change simply change the style, and all elements
              in all the webpages will be updated automatically.
            </p>
            <li>
              <b>Search Engines:</b>
            </li>
            <p>
              CSS is considered a clean coding technique, which means search
              engines won’t have to struggle to “read” its content.
            </p>
            <li>
              <b>Superior styles to HTML:</b>
            </li>
            <p>
              CSS has a much wider array of attributes than HTML, so you can
              give a far better look to your HTML page in comparison to HTML
              attributes.
            </p>
            <li>
              <b>Offline Browsing:</b>
            </li>
            <p>
              CSS can store web applications locally with the help of an offline
              cache. Using this we can view offline websites.
            </p>
          </ul>
        <div className="text-center">
          <img
            src="/static/images/css2.png"
            alt=""
            width="40%"
            className="img-fluid"
            style={{ zIndex: -1 }}
          />
        </div>
          <h4>
            <b>CSS Syntax</b>
          </h4>
          <p>
            CSS comprises style rules that are interpreted by the browser and
            then applied to the corresponding elements in your document. A style
            rule set consists of a selector and declaration block.
          </p>

          <h4><b>Importance of CSS in web development</b></h4>
          <p>Let us have a look at some of the major benefits of using CSS in web development here through this article.</p>
          <ul style={{ listStyleType: "circle" }}>
            <li><b><h4>Enhancing Website Aesthetics</h4></b></li>
            <p>CSS is a crucial tool for web developers to optimize websites for higher search engine rankings. It empowers developers to carefully adjust the visual aspects of web pages, including colors, fonts, layouts, backgrounds, and borders. </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the help of CSS, websites can achieve a visually appealing and consistent appearance that aligns seamlessly with their brand identity, leaving a positive impression on both users and search engines.</p>
            <li><b><h4>Easy Updates</h4></b></li>
            <p>CSS can make the website faster and less tedious. With the help of it we can easily update our elements, paragraphs, backgrounds, and fonts and make them attractive and engaging.</p>
            <li><b><h4>Boosting SEO Through Code Organization</h4></b></li>
            <p>CSS helps to separate the content and design of our web page. It greatly benefits SEO and makes the web page look attractive. Developers create a clean and well-organized codebase by separating the fundamental elements and content of a website from its stylistic attributes. This separation enhances code readability, maintainability, and reusability, enabling developers to quickly implement SEO-related updates and improvements while minimizing the risk of unintentional errors.</p>
            <li><b><h4>Responsive Design for Greater Impact</h4></b></li>
            <p>In today’s world, there are plenty of devices with different screen sizes available. We need to have a responsive web page which can happen with the help of a Cascading style sheet. It offers powerful tools like media queries, flexbox, and grid layouts, which help developers to craft websites that effortlessly adjust to different screen dimensions and orientations. </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This ensures a consistent and user-friendly experience across desktops, tablets, and mobile devices.</p>
            <li><b><h4>Helps Websites Load Faster</h4></b></li>
            <p>A minor but significant advantage of CSS is faster website loading times. To load all website pages, browsers download the CSS rules only once and cache them. It speeds up website navigation and improves the user experience as a whole. This function helps websites function properly even at slower internet speeds. Improved loading times also result in greater accessibility on low-end devices.</p>
            <li><b><h4>Efficiency and Consistency</h4></b></li>
            <p>With the help of CSS, we can apply consistent styles across our page. It helps us define styles with the help of classes and ID. It can be reused anytime to modify the web page according to the new requirements. With less code duplication and potential SEO issues, this efficiency helps create clean websites.</p>
            <li><b><h4>Cross-Browser Compatibility</h4></b></li>
            <p>Cross-browser compatibility is ensured by CSS, which offers a standard method for styling web pages. Developers can write code that works consistently in all major browsers by using CSS, eliminating the need for intensive browser-specific modifications or workarounds. Users and search engines value this compatibility, improving overall SEO performance.</p>
            <li><b><h4>Engaging User Experience</h4></b></li>
            <p>With the help importance Of CSS, we can implement various transitions and animations on our website, which makes it look better and more engaging. We can create smooth transitions, hover effects, beautiful backgrounds, animations, and more.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These interactive features improve user experience and keep visitors happy and engaged, which may indirectly help SEO rankings.</p>
          </ul>

          <h4>
            <b>CSS Syntax</b>
          </h4>
          <p>
            CSS comprises style rules that are interpreted by the browser and
            then applied to the corresponding elements in your document. A style
            rule set consists of a selector and declaration block.
          </p>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              <b>Selector:</b>
            </li>
            <p>
              A selector in CSS is used to target and select specific HTML
              elements to apply styles.
            </p>
            <li>
              <b>Declaration:</b>
            </li>
            <p>
              A declaration in CSS is a combination of a property and its
              corresponding value.
            </p>

            <li>
              The selector points to the HTML element that you want to style.
            </li>

            <li>
              The declaration block contains one or more declarations separated
              by semicolons.
            </li>

            <li>
              Each declaration includes a CSS property name and a value,
              separated by a colon.
            </li>
          </ul>
        <div className="bg-dark text-white p-3">
          &lt;h1&gt;Welcome to PremNote&lt;/h2&gt; <br />
          <br />
          CSS Style
          <br />
          h1 &#123; color: blue; font-size: 12px; &#125;
          <br />
          <br />
          Where - Selector - h1 Declaration - &#123; color: blue; font-size:
          12px; &#125;
        </div>
      </div>
    </>
  );
}
