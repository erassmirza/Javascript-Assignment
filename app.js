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
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<h5>For --a - --b + ++b + b--</h5>");
document.write("a is ",a+"<br />b is ",b+"<br /> result is ",result);
document.write("<hr />");

// 3. Write a program that takes input a name from user & greet the user.
var name = prompt("Hi There","Enter your name");
document.write("Good Evening <b>",name+"</b>");
document.write("<hr />");

// 5. Write a program to take input a number from user & display it’s multiplication table on your
//    browser. If user does not enter a new number, multiplication table of 5 should be displayed by 
//    default.
var table = +prompt("Table number","Enter the table number");
if (table === 0) {
    document.write("<b>Table of 5</b><br /><br />");
    document.write("5x1=",5*1+"<br />");
    document.write("5x2=",5*2+"<br />");
    document.write("5x3=",5*3+"<br />");
    document.write("5x4=",5*4+"<br />");
    document.write("5x5=",5*5+"<br />");
    document.write("5x6=",5*6+"<br />");
    document.write("5x7=",5*7+"<br />");
    document.write("5x8=",5*8+"<br />");
    document.write("5x9=",5*9+"<br />");
    document.write("5x10=",5*10);
}
else{
    document.write("<b>Table of ",table+"</b><br /><br />");
    document.write(table+"x1=",table*1+"<br />");
    document.write(table+"x2=",table*2+"<br />");
    document.write(table+"x3=",table*3+"<br />");
    document.write(table+"x4=",table*4+"<br />");
    document.write(table+"x5=",table*5+"<br />");
    document.write(table+"x6=",table*6+"<br />");
    document.write(table+"x7=",table*7+"<br />");
    document.write(table+"x8=",table*8+"<br />");
    document.write(table+"x9=",table*9+"<br />");
    document.write(table+"x10=",table*10);
};
document.write("<hr />");

// 6. Take
//          a) Take three subjects name from user and store them in 3 different variables.
//          b) Total marks for each subject is 100, store it in another
//          c) Take obtained marks for first subject from user and stored it in different variable.
//          d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//          e) Now calculate total marks and percentage and show the result in browser like this.
//    (Hint: user table)
var sub1 = prompt("Subject 1","Enter the name of first subject");
var sub2 = prompt("Subject 2","Enter the name of second subject");
var sub3 = prompt("Subject 3","Enter the name of third subject");
var totalMar = 100;
var sub1Num = +prompt("Obt number of Subject 1","Enter the number of first subject");
var sub2Num = +prompt("Obt number of Subject 2","Enter the number of second subject");
var sub3Num = +prompt("Obt number of Subject 3","Enter the number of third subject");
var perSub1 = sub1Num / totalMar * 100;
var perSub2 = sub2Num / totalMar * 100;
var perSub3 = sub3Num / totalMar * 100;
var totSubs = totalMar * 3;
var totObtMar = sub1Num + sub2Num + sub3Num;
var totPer = ( perSub1 + perSub2 + perSub3 ) / 3;
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>"+sub1+"</td><td>"+totalMar+"</td><td>"+sub1Num+"</td><td>"+perSub1+"%</td></tr>");
document.write("<tr><td>"+sub2+"</td><td>"+totalMar+"</td><td>"+sub2Num+"</td><td>"+perSub2+"%</td></tr>");
document.write("<tr><td>"+sub3+"</td><td>"+totalMar+"</td><td>"+sub3Num+"</td><td>"+perSub3+"%</td></tr>");
document.write("<tr><th></th><th>"+totSubs+"</th><th>"+totObtMar+"</th><th>"+totPer+"%</th></tr>");
document.write("</table>");
document.write("<hr />");


// =========================> Chapter 09-11 <=========================


// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user
//    like this: “Welcome to city of lights”
var cityName = prompt("City Name","Enter the city name");
if (cityName === "Karachi") {
    document.write("Welcome to city of Lights");
}
else{
    document.write("Welcome to the ",cityName);
};
document.write("<hr />");

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: 
//    Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Gender","Enter your gender");
if (gender === "male") {
    document.write("Good Morning Sir");
}
else if (gender === "female") {
    document.write("Good Morning Ma'am");
}
else{
    document.write("Enter valid gender");
};
document.write("<hr />");

// 3. Write a program to take input color of road traffic signal from the user & show the message
//    according to this table:
var colorOfRoad = prompt("Road of Color","Enter the color");
if (colorOfRoad === "Red" || colorOfRoad === "Yellow" || colorOfRoad === "Green") {
    document.write("<table style='color: royalblue; border-spacing: 0; text-align: center'>");
    document.write("<tr style=''><th>Signal color</th><th>Message</th></tr>");
    document.write("<tr style='background-color: lightblue;'><th>Red</th><td>Must Stop</td></tr>");
    document.write("<tr><th>Yellow</th><td>Ready to move</td></tr>");
    document.write("<tr style='background-color: lightblue;'><th>Green</th><td>Move now</td></tr>");
    document.write("</table>");    
}
else{
    document.write("Enter valid color like Red or Yellow or Green");
};
document.write("<hr />");

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel
//    is less than 0.25litres, show the message “Please refill the fuel in your car”
var remFuel = +prompt("Remaining Fuels (in litres)","Enter the remaining fuel number");
if (remFuel < 0.25) {
    document.write("Please refill the fuel in your car");
}
else{
    document.write("Enjoy the ride");
};
document.write("<hr />");

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//    a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
//      Yes, Alert message displayed
//    b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//      No, Alert message not displayed
//    c.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//      Yes, Alert message displayed ==> (condition 2 is true) also (condition 4 is true)
//    d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//      Yes, Alert message displayed
//    e.
if (true){
    alert("True");
}
if (false){
    alert("False");
}
//      Yes, Alert message displayed ==> only first condition (True)
//    f.
if("car" < "cat"){
    alert("car is smaller than cat");
}
//      Yes, Alert message displayed

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute& show
//    the resulting percentage on your page. Take percentage & compute  grade as per following table:
var subj1 = +prompt("Obt number of Subject 1","Enter the number of first subject");
var subj2 = +prompt("Obt number of Subject 2","Enter the number of second subject");
var subj3 = +prompt("Obt number of Subject 3","Enter the number of third subject");
var totMarks = +prompt("Overall total Marks","Enter total marks of three subjects");
var obtmarks = subj1 + subj2 + subj3;
var totper = obtmarks / totMarks * 100;
document.write("<h1>Marks Sheet</h1><br />");
document.write("<h4>Total marks : "+totMarks+"</h4>");
document.write("<h4>Marks obtained : "+obtmarks+"</h4>");
document.write("<h4>Percentage : "+totper+"%</h4>");
if (totper >= 80) {
    document.write("<h4>Grade : A-one</h4>");
    document.write("<h4>Remarks : Excellent</h4>");
}
else if (totper >= 80) {
    document.write("<h4>Grade : A</h4>");
    document.write("<h4>Remarks : Good</h4>");
}
else if (totper >= 70) {
    document.write("<h4>Grade : B</h4>");
    document.write("<h4>Remarks : You need to improve</h4>");
}
else {
    document.write("<h4>Grade : Fail</h4>");
    document.write("<h4>Remarks : Sorry</h4>");
};
document.write("<hr />");

// 7. Guess game:
//    Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//          a. If user guesses the same number, show “Bingo! Correct answer”.
//          b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var guessNum = 5;
var usrguessNum = +prompt("Guess number","Enter the number from 1-10");
if (usrguessNum === guessNum) {
    document.write("Bingo! Correct answer");
}
else if (usrguessNum === guessNum+1) {
    document.write("Close enough to the correct answer");
}
else {
    document.write("Sorry wrong guess");
};
document.write("<hr />");

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the
//    user if the number is divisible by 3.
var divNum = +prompt("Divisible by 3","Enter your number for check");
if ((divNum%3)===0) {
    document.write("Your number is completely divisible by 3");
}
else {
    document.write("Your number is not divisible by 3");
};
document.write("<hr />");

// 9. Write a program that checks whether the given input is an even number or an odd number.
var checkNum = +prompt("Check even or odd number","Enter your number");
if ((checkNum%2)===0) {
    document.write("Provided number is even number");
}
else {
    document.write("Provided number is odd number");
};
document.write("<hr />");

// 10. Write a program that takes temperature as input and shows a message based on following criteria
//          a. T > 40 then “It is too hot outside.”
//          b. T > 30 then “The Weather today is Normal.”
//          c. T > 20 then “Today’s Weather is cool.”
//          d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = +prompt("Weather Update","Enter the temperature value");
if (temp > 40) {
    document.write("It is too hot outside.");
}
else if (temp > 30) {
    document.write("The Weather today is Normal.");
}
else if (temp > 20) {
    document.write("Today’s Weather is cool.");
}
else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool.");
}
else {
    document.write("Winter Season");
};
document.write("<hr />");

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//          a. First number
//          b. Second number
//          c. Operation (+, -, *, /, %)
//     Compute & show the calculated result to user.
var firstNum = +prompt("First Number","Enter your first number");
var secNum = +prompt("Second Number","Enter your second number");
var oper = prompt("Operator +, -, *, /, %","Enter one of the operator");
if (oper === "+") {
    totNum = firstNum + secNum;
    document.write("After addition of "+firstNum+" and "+secNum+" is: "+totNum);
}
else if (oper === "-") {
    totNum = firstNum - secNum;
    document.write("After subtraction of "+firstNum+" and "+secNum+" is: "+totNum);
}
else if (oper === "*") {
    totNum = firstNum * secNum;
    document.write("After multiplication of "+firstNum+" and "+secNum+" is: "+totNum);
}
else if (oper === "/") {
    totNum = firstNum / secNum;
    document.write("After division of "+firstNum+" and "+secNum+" is: "+totNum);
}
else if (oper === "%") {
    totNum = firstNum % secNum;
    document.write("After moludus of "+firstNum+" and "+secNum+" is: "+totNum);
}
else {
    document.write("Enter valid operator");
};
document.write("<hr />");


// =========================> Chapter 12-13 <=========================


// 1. Write a program that takes a character (number or string) in a variable & checks whether the given 
//    input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var charTest = prompt("Enter value");
var index = 0;
if (charTest.charCodeAt(index)>=65 && charTest.charCodeAt(index)<=90) {
    document.write("Your input character is Uppercase");
}
else if (charTest.charCodeAt(index)>=97 && charTest.charCodeAt(index)<=122) {
    document.write("Your input character is Lowercase");
}
else if (charTest.charCodeAt(index)>=48 && charTest.charCodeAt(index)<=57) {
    document.write("Your input is number");
}
else {
    document.write("Invalid")
}
document.write("<hr />");

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two 
//    integers are equal.
var firstInt = +prompt("First Number","Enter your number");
var secInt = +prompt("Second Number","Enter your number");
if (firstInt > secInt) {
    document.write("Your first number is greater than second number");
}
else if (firstInt === secInt) {
    document.write("Your first number is equal than second number");
}
else {
    document.write("Your first number is less than second number");
};
document.write("<hr />");

// 3. Write a program that takes input a number from user & state whether the number is positive, 
//    negative or zero.
var inpNum = +prompt("Check Postive, Negative or Zero","Enter the number");
if (inpNum > 0) {
    document.write("Your number is postive");
}
else if (inpNum < 0) {
    document.write("Your number is negative");
}
else {
    document.write("Your number is zero");
};
document.write("<hr />");

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a 
//    vowel, false otherwise
var charinp = prompt("Vowel test","Enter the character");
if (charinp === "a" || charinp === "e" || charinp === "i"|| charinp === "o"|| charinp === "u") {
    document.write("True");
}
else if (charinp === "A" || charinp === "E" || charinp === "I"|| charinp === "O"|| charinp === "U") {
    document.write("True");
}
else {
    document.write("False");
};
document.write("<hr />");

// 5. Write a program that
//      a. Store correct password in a JS variable.
//      b. Asks user to enter his/her password
//      c. Validate the two passwords:
//          i. Check if user has entered password. If not, then give message “ Please enter your password”
//          ii. Check if both passwords are same. If they are same, show message “Correct! The password you
//              entered matches the original password”. Show “Incorrect password” otherwise.
var correctPass = "Pass1285";
var usrPass = prompt("Enter your password");
if (usrPass === "") {
    document.write("Please enter your password");
}
else {
    if (usrPass === correctPass) {
        document.write("Correct! The password you entered matches the original password");
    }
    else {
        document.write("Incorrect password");
    };
};
document.write("<hr />");

// 6. This if/else statement does not work. Try to fix it:
//          var greeting;
//          var hour = 13;
//          if (hour < 18) {
//          greeting = "Good day";
//          else
//          greeting = "Good evening";
//          }
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
//    Implement the following case using if, else & else if statements
var timeInp = +prompt("Time format 24 hours like: 1900 = 7pm","Enter the time");
if (timeInp >= 0000 && timeInp < 1200) {
    document.write("Good morning");
}
else if (timeInp >= 1200 && timeInp < 1700) {
    document.write("Good afternoon");
}
else if (timeInp >= 1700 && timeInp < 2100) {
    document.write("Good evening");
}
else if (timeInp >= 2100 && timeInp <= 2359) {
    document.write("Good night");
}
else {
    document.write("Enter valid time");
};
document.write("<hr />");


// =========================> Chapter 14-16 <=========================


// 1. Declare an empty array using JS literal notation to store student names in future.
var studentsName = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var studentsName = {};

// 3. Declare and initialize a strings array.
var stringsArr;
stringsArr = ["Ali", "Hassan", "Huzaifa"];

// 4. Declare and initialize a numbers array.
var numbersArr;
numbersArr = [1,2,3,4,5];

// 5. Declare and initialize a boolean array.
var booleanArr;
booleanArr = [true,false];

// 6. Declare and initialize a mixed array.
var mixedArr;
mixedArr = ["Ali", 18, "BS", true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
//    (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var eduQual;
eduQual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<h1>Qualifications</h1>");
document.write("<ol><li>"+eduQual[0]+"</li>");
document.write("<li>"+eduQual[1]+"</li>");
document.write("<li>"+eduQual[2]+"</li>");
document.write("<li>"+eduQual[3]+"</li>");
document.write("<li>"+eduQual[4]+"</li>");
document.write("<li>"+eduQual[5]+"</li>");
document.write("<li>"+eduQual[6]+"</li>");
document.write("<li>"+eduQual[7]+"</li></ol>");
document.write("<hr />");

// 8. Write a program to store 3 student names in an array.Take another array to store score of these 
//    three students. Assume that total marks are 500 for each student, display the scores & percentages 
//    of students like:
