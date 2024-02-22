import '../Pynavbar.css'
export default function StartProject(){
    return(
        <div className="container-fluid"i id="fsm">
            <h1 className='text-center text-success'>How to start Django Project</h1>
          
        <h5> FRAMEWORK:- </h5>   
<dfn>a framework is a particularset of rules,ideas or behalf which you use in order to deal with problems or to decide what to do.
</dfn> 
<h5>DJANGO:- </h5>
<dfn>django is a high level python web application framework.use to create web application.
it is a open source python framework.it is use to follow the model view template.</dfn>

<h5> MVT(MODEL VIEW TEMPLATE):-</h5>
<p>mvt is a software design pattern</p>
<h5>model:-</h5>
<p>it is use to store your data related files or it is use to work with your data .
</p>
<h5>view:-</h5>
<p>it is use to store your function means all the python functions store into the view.</p>
<h5>template:-</h5>
<p>it is used to hold your html files.</p>

<h5>HOW TO INSTALL DJANGO:-</h5>
<ol type='I'>
    <li>install the python</li>
    <li>open cmd</li>
    <li> <b>*pip freeze :</b> it is use to show the all lib </li>
    <li> <b>*pip install django</b> :  this command is use to install the django in your system
</li>
</ol>
<h5>HOW TO CREATE A PROJECT IN DJANGO:-
</h5>
<p>*django-admin startproject name_of_the_project</p>
<p><b>eg: </b>django-admin startproject ducat</p>
<h5>HOW TO RUN DJANGO PROJECT:-</h5>
<p><b>*python manage.py runserver</b>this command is use to run our project.copy the server url and then paste into the web browser.
</p>
<h5>how to change port no in django project
</h5>
<p><b>*python manage.py runserver1252</b>  this command is used to change django project port no because our multiple technology is use to handle the same server.
</p>

<h5>HOW TO MANAGE OUR PROJECT:-
</h5>
<ul>
    <li>create a template folder.(use to hold html files).
</li>
<li>you have to create a static folder.(use to store css,javascript files,static image)
</li>
<li>create a media folder.(use to store the dynamic file or dynamic image)
</li>
</ul>
<p><b>Static image:-</b>this type of images are fix in our web pages called static image.
</p>

<p><b>Dynamic image:-</b>this type of image or files select by admin pannel called dynamic image.
</p>

<h5>MIGRATION AND MIGRATE:-
</h5>
<ul>
    <li>if we want to create a model related to database in our project then we use migrate and migration
</li>
<li>migrate and migration is used to perform our crud operation in our project.
</li>
</ul>
<p>if we run this command it will create a default table in your sqlight database.
</p>
<b>  *python manage.py migrate
</b>
<h4>INSTALL DB BROWER
</h4>
<h5>SUPER USER IN DJANGO:-</h5>
<b>Q. why we create a super user?</b>
<p>if we want to create a super user we can not use the admin pannel of django.
</p>
<h5>HOW TO CREATE A SUPERUSER:-</h5>
<b>  *python manage.py createsuperuser
</b>
<p>we use superuser to access your admin pannel
if we run this coomand ...it will ask some details like:-username
password</p>
<h5>HOW TO CREATE A URL:-
</h5>
<ol>
    <li>create a new file
</li>
    <li>create view file
</li>
    <li>open url.py file
</li>
<li>path('url name/',view.function name),
</li>
</ol>
<p><b>eg:- </b>(path('about/',view.about),)</p>
<p>open view file
</p>
 <p><b>def about(request):</b> return HttpResponse("welcome ")</p>

 <h5>HOW TO CREATE A DYNAMIC URL:-
</h5>   
<p>dynamic url is used to redirect your web page with id and name.
</p>
<p>we can open a web page with id  </p>
<p>and create a function in view.py in rul.py page</p>
<p>path('contact/&lt;int:data&gt;',view.contact),
</p>

<b>view.py</b>
<p><b>def contact(request,data):</b>return HttpResponse(data) </p>
<ul>
    <li>username-parul</li>
    <li>password-*********</li>
    <li>mail-id:-test@gmail.com</li>
</ul>
    
<h5> Hwo to render a html page?</h5>
<p><b>def home(request):</b>	Return render(request,"index.html")
</p>
<h5>how to print python data in html page through dynamic url?
</h5>
<p>view.py</p>
<section className="code"> 
        <p>def wait(request,z):
</p>
        <p>data1= &#123;</p>
        <p>'da':z</p>
        <p>&#125;</p>
        <p>return render(request,"home.html",data1)</p>
</section>
<b>urls.py</b>
<section className="code">
<p>path('wait/ &lt;int:z  &gt;, view.wait),</p>
</section>
<p><b>home.html</b></p>
<section className="code">
    &lt;h1&gt; Nice! your html file is read to use &lt;/h1&gt;
    &lt;h1&gt; &#123;&#123;da&#12\5;&#125; &lt;/h1&gt;
</section>
<h5>functions of for loop in django to return multiple value::
</h5>
<ol type='I'>
    <li><b> forrloop.counter:-</b>it is used to return the counting of the for loop...in simple words we can say no of repetition.
</li>
    <li><b>forloop.revcounter:-</b>it is used to return the reverse counting. 
</li>
</ol>

<p>project name-crud1
</p>
<p>user-******
</p>
<p>pass-*****
</p>
<h5>how to create a model:-
</h5>
<p>python manage.py startapp model_name
</p>
<p><b>eg:-</b>python manage.py startapp tabledata</p>
<h5>how to connect a model to our project crud1:-
</h5>
<ol>
    <li>open a file settings.py</li>
    <li>go to INSTALLED APPS</li>
    <li>go to the bootom of the installed apps</li>
    <li>'tabledata'</li>
</ol>
<p><b>migrate=</b> use to create table</p>
<p><b>migrations=</b> use to create modal</p>

<p><b>GET=</b>data save on the url thatswhy get is  unsecured method.if we use get then we can only fetch 1024 byte data only
</p>
<p><b>POST=</b>data will not save on url so thatswhy post is more secured method.but if we use post method we can fetch unlimitted data from our form.
</p>
<h5>CSRF TOKEN:-
</h5>
<p>we will use csrf token for security purpose.if we creste dynamic url and pass data on the url..then csrf token will check weather the passed data and csrf token data same or not if both are same that will proceed otherwise not.
</p>

<h5>how to create a model:-
</h5>
<ul>
    <li>python manage.py startapp model_name</li>
    <li>open settings.py
</li>
    <li>go to installed_apps
</li>
    <li>'login',--connect model
</li>
<li>go to models.py </li>
<li><b>python manage.py makemigrations</b></li>

    </ul>
<h5>connect model into admin panel:-
</h5>
<p>go to admin.py
</p>

   
        </div>
    )
}