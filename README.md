# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The first step that occurs when the website is reached is that an HTTP GET request is received by the server. 
The request is used to seek HTML, images, or some other asset. The request has a header that has key information that 
lists things like the version of HTTP, the exact page that is being sought, and other browser based information<sup>1</sup>. 
The server will reply with an HTTP response that contains a similar header. This one will have information like the 
status code, server type, and the software running on the server itself. After the header, the body contains assets 
like HTML, CSS, images, and JavaScript. This information gets sent back to the client that requested it to become a 
web page. After this is done, the connection is closed.

## From start to finish, how does data reach you to be rendered in the browser?

When a universal resource locator (URL) is entered into the address bar, the computer first checks a local hosts file 
to see if it can resolve the domain name. If this isn’t successful, the computer will reach out to a 
domain name system (DNS) to find the IP address associated with the domain name. If it does not have the correct 
record, it will seek out another DNS to check against it. When the client has the IP address, it sends an HTTP request 
to the server<sup>2</sup>. The server will then respond with an HTTP response that is used by the browser to render the 
HTML. If the requested page exists and no errors are encountered, the browser will send subsequent requests for objects 
embedded in HTML, like images, JavaScript, and CSS<sup>3</sup>. The responses from the server will allow the browser to 
load these objects as well. Once the page has been rendered, the browser may send additional requests as it needs.

## What code is rendered in the browser?

HTML is rendered in the browser. CSS stylizes parts of the HTML, and JavaScript alters how the HTML is rendered and 
provides interactivity. The HTML is received from an HTTP response by the browser, which is then used to build the page 
and the document object model (DOM) tree DOM. If any CSS is linked in a script tag in the HTML document, then another 
request is sent out to fetch it. If it can be found, it is returned and then applied to the HTML as indicated. 
JavaScript is also grabbed if it shows up under a script tag. It is not rendered, but does act on the DOM tree. The 
page will display as much as is available and may update as it is being seen by the user. This is more prevalent with 
increased latency, and can result in the style of the page shifting as the CSS is applied, or with element appearing or 
disappearing as the JavaScript is applied<sup>4</sup>.

## What is the server-side code’s main function?

The server-side code’s main function is to respond to any requests with a response. For web pages, this is usually an 
HTTP response with an HTML page, along with any associated CSS, JavaScript, images, or other assets that may be needed. 
If the user does not have appropriate credentials or requests something incorrectly, then the request may be denied. If 
this occurs, the header of the response will contain a status code that gives more details on the request<sup>5</sup>. 
Additionally, the server-side code may interact with a database, or with an application server that 
interacts with a database.

## What is the client-side code’s main function?

The client-side code’s main function is to be rendered, provide styling, or control how elements are rendered and 
create interactivity. HTML is rendered as the page and is stylized based on any accompanying CSS. Alterations to the 
page are made using JavaScript. Images are rendered after the HTML<sup>4</sup>.

## What is runtime?

The runtime environment(RTE) is the state in which an application runs. This allows the program to access resources it 
needs to run like environment and system variables, and libraries. It also allows access to to the RAM and processor, 
which would not be possible for high level languages without the environment. This environment can also be helpful for 
debugging as it can provide helpful information when the program crashes or experiences an error<sup>6</sup>. An example
of this is V8, which is the JavaScript runtime environment used in Chrome. This runtime environment provides AJAX, the
DOM tree, and other assets. Node.JS is another JavaScript RTE that is used for backend development and provides 
different resources than V8<sup>7</sup>.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Potentially many instances of the client side assets may be created. One copy is created in the clients browser, but 
the page can be cached elsewhere to allow for lower latency. An example is that Youtube videos that are more commonly 
viewed get cached on more servers to meet the higher demand for it as compared to less popular videos<sup>8</sup>.

## How many instances of the server-side code are available at any given time?

This depends on the setup of the web server. A low traffic static page might only have one copy of the code it 
delivers, but multiple clients can access it. With larger websites like Ebay, or Facebook, there are multiple copies 
of the same code across many servers, and possibly copies in HTTP caches that exist between the clients and servers to 
reduce latency due to high traffic<sup>9</sup>.

## How many instances of the databases connected to the server application are created?



At least one instance of a database must be connected to the server application. Different setups may not have the 
database connected to the web server itself however. Some times a configuration is used where a web server is connected 
to an application server that is then connected to the database. This three tier setup is done to increase security so 
that if the web layer is compromised, there is still some buffer between it and the database. It also increases 
modularity and facilitates the ability to make desired changes to any part of the system<sup>10</sup>. Additionally, 
there can be multiple instances of a database if a fall back is desired. A fall back copy may not be directly attached 
to the web server itself, though<sup>11</sup>. Although only one instance of the database may be connected to a server, 
the database can have multiple concurrent connections. This can mean that simultaneous reads and writes may be 
occurring. To insure that the database works properly, a set of properties called ACID are used to govern how database 
transactions happen<sup>12</sup>. 
