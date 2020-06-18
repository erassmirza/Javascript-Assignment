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
document.write("My birth year is "+birthYear,"<br />Data type of my declared variable is number");
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
document.write("<b>"+Visitors_name+"</b> ordered <b>"+Quantity+" "+Product_title+"</b>(s) on XYZ Clothing store");
document.write("<hr />");


// =========================> Chapter 04 <=========================


// 1. Declare 3 variables in one statement
var firstvar, secondvar, thirdvar;

// 2. Declare 5 legal & 5 illegal variable names
var legal1,legal2,legal3,legal4,legal5;      // legal variables
// var 1a,2b,3c,4d,5e;                         // illegal variables

// 3. Display this in your browser
//          a) A heading stating “Rules for naming JS variables”
//          b) Variable names can only contain ______, ______,______ and ______.
//             For example $my_1stVariable
//          c) Variables must begin with a ______, ______ or_____.
//             For example $name, _name or name
//          d) Variable names are case _________
//          e) Variable names should not be JS _________
document.write("<h2>Rules for naming JS variables</h2><br />");
document.write("Variable names can only contain numbers, $ and _. For example : $my_1stVariable<br />");
document.write("Variables must begin with a letter, $ or _. For example : $name, _name or name<br />");
document.write("Variable names are case sensitive<br />");
document.write("Variable names should not be JS keywords");
document.write("<hr />");


// =========================> Chapter 05 <=========================


// 1. Write a program that take two numbers & add them in a new variable. Show
//    the result in your browser
var num1 = +prompt("First number","Enter your first number");
var num2 = +prompt("Second number","Enter your second number");
document.write("Sum of "+num1+" and "+num2+" is ",num1+num2);
document.write("<hr />");

// 2. Repeat task1 for subtraction, multiplication, division & modulus
document.write("Subtraction of "+num1+" and "+num2+" is ",num1-num2+"<br />");
document.write("Multiplication of "+num1+" and "+num2+" is ",num1*num2+"<br />");
document.write("Modulus of "+num1+" and "+num2+" is ",num1%num2);
document.write("<hr />");

// 3. Do the following using JS Mathematic Expressions
//          a. Declare a variable.
//          b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//          c. Initialize the variable with some number.
//          d. Show the value of variable in your browser like “Initial value: 5”.
//          e. Increment the variable.
//          f. Show the value of variable in your browser like “Value after increment is: 6”.
//          g. Add 7 to the variable.
//          h. Show the value of variable in your browser like “Value after addition is: 13”.
//          i. Decrement the variable.
//          j. Show the value of variable in your browser like “Value after decrement is: 12”.
//          k. Show the remainder after dividing the variable’s value by 3.
//          l. Output : “The remainder is : 0”.
var declare_var;
document.write("Value after variable declaration is ",declare_var+"<br />");
var initial_value = 5;
document.write("Initial Value: ",initial_value+"<br />");
var inc_value = ++initial_value;
document.write("Value after increment is: ",inc_value+"<br />");
var add_value = initial_value + 7;
document.write("Value after addition is: ",add_value+"<br />");
var dec_value = --add_value;
document.write("Value after decrement is: ",dec_value+"<br />");
var rem_value = dec_value % 3;
document.write("The reminder is : ",rem_value);
document.write("<hr />");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & 
//    calculate the cost of buying 5 tickets to a movie. Example output:
var ticket_price = 600;
var final_price = ticket_price * 5;
document.write("Total cost to buy 5 tickets to a movie is ",final_price+"PKR");
document.write("<hr />");

// 5. Write a script to display multiplication table of any number in your browser. E.g
var table_val = 4;
document.write("Table of ",table_val+"<br />");
document.write("4x1=",table_val*1+"<br />");
document.write("4x2=",table_val*2+"<br />");
document.write("4x3=",table_val*3+"<br />");
document.write("4x4=",table_val*4+"<br />");
document.write("4x5=",table_val*5+"<br />");
document.write("4x6=",table_val*6+"<br />");
document.write("4x7=",table_val*7+"<br />");
document.write("4x8=",table_val*8+"<br />");
document.write("4x9=",table_val*9+"<br />");
document.write("4x10=",table_val*10);
document.write("<hr />");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//          a. Store a Celsius temperature into a variable.
//          b. Convert it to Fahrenheit & output “NN o C is NN o F”.
//          c. Now store a Fahrenheit temperature into a variable.
//          d. Convert it to Celsius & output “NN o F is NN o C”.
var tempInCel = 25;
var tempInFar = ( tempInCel*9/5 ) + 32;
document.write("25<sup>o</sup>C is ",tempInFar+"<sup>o</sup>F<br />");
var tempInFar = 70;
var tempInCel = ( tempInFar - 32 ) *5/9;
document.write("70<sup>o</sup>F is ",tempInCel+"<sup>o</sup>C");
document.write("<hr />");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
//    Store the following in variables
//          a. Price of item 1
//          b. Price of item 2
//          c. Ordered quantity of item 1
//          d. Ordered Quantity of item 2
//          e. Shipping charges
//    Compute the total cost & show the receipt in your browser.
var priceOfItem1 = 650;
var priceOfItem2 = 100;
var orderedQuantityOfItem1 = 3;
var orderedQuantityOfItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceOfItem1*orderedQuantityOfItem1)+(priceOfItem2*orderedQuantityOfItem2)+shippingCharges;
document.write("<h1>Shopping Cart</h1><br />");
document.write("Price of item 1 is ",priceOfItem1+"<br/ >");
document.write("Quantity of item 1 is ",orderedQuantityOfItem1+"<br/ >");
document.write("Price of item 2 is ",priceOfItem2+"<br/ >");
document.write("Quantity of item 2 is ",orderedQuantityOfItem2+"<br/ >");
document.write("Shipping Charges ",shippingCharges+"<br/ ><br />");
document.write("Total cost of your order is ",totalCost);
document.write("<hr />");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the 
//    result in your browser
var total_marks = 980;
var marks_obt = 804;
var perc = (marks_obt/total_marks)*100;
document.write("<h1>Marks Sheet</h1><br />");
document.write("Total marks: ",total_marks+"<br />");
document.write("Marks obtained: ",marks_obt+"<br />");
document.write("Percentage: ",perc+"%");
document.write("<hr />");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to 
//    Pakistani Rupees. Perform all calculations in a single expression.
//    (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var USdollar = 104.80;
var saudiRiyal = 28;
var PKRcur = USdollar*10+saudiRiyal*25;
document.write("<h1>Currency in PKR</h1><br />");
document.write("Total Currency in PKR: ",PKRcur);
document.write("<hr />");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//          a. Add 5
//          b. Multiply by 10
//          c. Divide the result by 2
//     Perform all calculations in a single expression
var some_num = 3;
var final_num = ( 3+5 )*10/2;
document.write("Initial value: ",some_num+"<br />")
document.write("Final result after add 5, multiply by 10 & divide by 2 of initial value is: ",final_num);
document.write("<hr />");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
//          a. Store the current year in a variable.
//          b. Store their birth year in a variable.
//          c. Calculate their 2 possible ages based on the stored values.
var currentYear = 2016;
var birthYear = 1992;
var yourAge = (2000-birthYear)+(currentYear-2000);
document.write("<h1>Age Calculator</h1><br />");
document.write("Current Year: ",currentYear+"<br />");
document.write("Birth Year: ",birthYear+"<br />");
document.write("Your Age: ",yourAge);
document.write("<hr />");

// 12. The Geometrizer: Calculate properties of a circle. 
//          a. Store a radius into a variable.
//          b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//             (Hint : Circumference of a circle = 2 π r , π = 3.142)
//             Calculate the area based on the radius, and output “The area is NN”. 
//             (Hint : Area of a circle = π r 2 , π = 3.142)
var radius = 20;
var pi = 3.142;
var circum = 2 * pi * radius;
var area = pi * radius ** 2;
document.write("<h1>The Geometrizer</h1><br />");
document.write("Radius of a circle is: ",radius+"<br />");
document.write("The circumference is: ",circum+"<br />");
document.write("The area is: ",area);
document.write("<hr />");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
//     Wonder no more.
//          a. Store your favorite snack into a variable
//          b. Store your current age into a variable.
//          c. Store a maximum age into a variable.
//          d. Store an estimated amount per day (as a number).
//          e. Calculate how many would you eat total for the rest of your life.
var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maximumAge = 65;
var snaksPerDay = 3;
var totalSnaks = (maximumAge - currentAge) * snaksPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1><br />");
document.write("Favourite Snack: ",favoriteSnack+"<br />");
document.write("Current Age: ",currentAge+"<br />");
document.write("Estimated Maximum Age: ",maximumAge+"<br />");
document.write("Amounts of snacks per day: ",snaksPerDay+"<br />");
document.write("You will need "+totalSnaks+" "+favoriteSnack+" to last you until the ripe old age of ",maximumAge);
document.write("<hr />");


// =========================> Chapter 06-09 <=========================


// 1. Write a program to take a number in a variable, do the required arithmetic to display the following
//    result in your browser:
var a = +prompt("Value of a","Enter the value of a");
document.write("Result:<br />");
document.write("The value of a is: ",a+"<br />");
document.write("......................................<br /><br />");
var a = ++a;
document.write("The value of ++a is: ",a+"<br />");
document.write("Now the value of a is: ",a+"<br /><br /><br />");
document.write("The value of a++ is: ",a+"<br />");
var a = a++ +1;
document.write("Now the value of a is: ",a+"<br /><br /><br />");
var a = --a;
document.write("The value of --a is: ",a+"<br />");
document.write("Now the value of a is: ",a+"<br /><br /><br />");
document.write("The value of a-- is: ",a+"<br />");
var a = a-- -1;
document.write("Now the value of a is: ",a+"<br /><br /><br />");
document.write("<hr />");

// 2. What will be the output in variables a, b & result after execution of the following script:
//    var a = 2, b = 1; 
//    var result = --a - --b + ++b + b--;
//    Explain the output at each stage:
//    --a;
//    --a - --b;
//    --a - --b + ++b;
//    --a - --b + ++b + b--;
var a = 2, b = 1;
var result = --a;
document.write("<h5>For --a</h5>");
document.write("a is ",a+"<br />b is ",b+"<br /> result is ",result);
var a = 2, b = 1;
var result = --a - --b;
document.write("<h5>For --a - --b</h5>");
document.write("a is ",a+"<br />b is ",b+"<br /> result is ",result);
var a = 2, b = 1;
var result = --a - --b + ++b;
document.write("<h5>For --a - --b + ++b</h5>");
document.write("a is ",a+"<br />b is ",b+"<br /> result is ",result);