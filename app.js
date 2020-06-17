// =========================> Chapter 01 <=========================


// 1. Write a script to greet your website visitor using JS alert box.
alert("Hello, Welcome to Javascript!");

// 2. Write a script to display following message on your web page
alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web page: 
//    (Hint : Use line break)
alert("Welcome to Js Land...\nHappy Coading!");

// 4. Write a script to display following messages in sequence
alert("Welcome to Js Land...");

// 5. Generate the following message through browser’s developer console
//  =====> Open this webpage and press ctrl+shift+i and go to console mode then type
//         alert("Hello... I can run JS through my web browser's console")

// 6. Make use of alerts in your new/existing HTML & CSS project
//  =====> Yes use in previous Saylani webpage and successfully done

// 7. Practice placement of <script></script> element in following sections of
//    your project in exercise 6:
//          a. Head
//          b. Body (before your page’s HTML)
//          c. Body (inside your page’s HTML)
//          d. Body (after your page’s HTML
//  =====> Sucessfully done, can see in index.html file but they are in comment form 
//         and want to run just remove comment and refresh page


// =========================> Chapter 02 <=========================


// 1. Declare a variable called username
var username;

// 2. Declare a variable called myName & assign to it a string that represents
//    your Full Name.
var myName = "Erass Mirza";

// 3. Write script to
//      a) Declare a JS variable, titled message.
//      b) Assign “Hello World” to variable message
//      c) Display the message in alert box.
var message;
var message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the
//    data in alert boxes
var name = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

// 5. Write a script to display the following alert using one JS variable
var msg = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(msg);

// 6. Declare a variable called email and assign to it a string that represents
//    your Email Address(e.g. example@example.com). Show the below mentioned
//    message in an alert box.(Hint: use string concatenation)
var email = "erass.mirza@gmail.com";
alert("My email address is "+email);

// 7. Declare a variable called book & give it the value “A smarter way to 
//    learn JavaScript”. Display the following message in an alert box
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

// 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript");
document.write("<hr />");

// 9. Store following string in a variable and show in alert and browser 
//    through JS
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
document.write("<hr />");


// =========================> Chapter 03 <=========================


// 1. Declare a variable called age & assign to it your age. Show your age in 
//    an alert box.
var age = 22;
alert("I am "+age+" years old")

// 2. Declare & initialize a variable to keep track of how many times a visitor
//    has visited a web page. Show his/her number of visits on your web page.
//    For example: “You have visited this site N times”.
var track_no;
var track_no = 14;
alert("You have visited this site "+track_no+" times");

// 3. Declare a variable called birthYear & assign to it your birth year. 
//    Show the following message in your browser:
var birthYear = 1998;
document.write("My birth year is "+birthYear,"<br />","Data type of my declared variable is number");
document.write("<hr />");

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a 
//    script to store in variables the following information:
//          a. Visitor’s name
//          b. Product title
//          c. Quantity i.e. how many products a visitor wants to order
//    Show the following message in your browser: 
//    “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var Visitors_name = "John Doe";
var Product_title = "T-shirt";
var Quantity = "5";
document.write("<b>"+Visitors_name+"</b>"+" ordered "+"<b>"+Quantity+" "+Product_title+"</b>"+"(s) on XYZ Clothing store");
document.write("<hr />");


// =========================> Chapter 04 <=========================


// 1. Declare 3 variables in one statement
var firstvar, secondvar, thirdvar;

// 2. Declare 5 legal & 5 illegal variable names
var legal1,legal2,legal3,legal4,legal5;      // legal variables
// var 1a,2b,3c,4d,5e;                         // illegal variables

// 3. Display this in your browser
//    a) A heading stating “Rules for naming JS variables”
//    b) Variable names can only contain ______, ______,______ and ______.
//       For example $my_1stVariable
//    c) Variables must begin with a ______, ______ or_____.
//       For example $name, _name or name
//    d) Variable names are case _________
//    e) Variable names should not be JS _________
document.write("<h2>"+"Rules for naming JS variables"+"</h2>"+"<br />");
document.write("Variable names can only contain numbers, $ and _. For example : $my_1stVariable"+"<br />");
document.write("Variables must begin with a letter, $ or _. For example : $name, _name or name"+"<br />");
document.write("Variable names are case sensitive"+"<br />");
document.write("Variable names should not be JS keywords");
document.write("<hr />");


// =========================> Chapter 05 <=========================


// 1. Write a program that take two numbers & add them in a new variable. Show
//    the result in your browser
