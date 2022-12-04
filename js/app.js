// Biyer Condition Checkup
// Odd/Even Number Checkup
// Mathematical Operation with function



// var num1 = 50;
// var num2 = 50;

// var result = num1+num2;

// console.log(result);

var num = 555;

if (num >= 80 && num <=  100){
    document.write("If number equal = 55");
    document.write('<br>');
    document.write("You have obtained A+");
}else if(num >= 70 && num <= 79 ){
    document.write("If number equal = 55");
    document.write('<br>');
    document.write("You have obtained A ");
}else if(num >=65 && num <= 69){
    document.write("If number equal = 55");
    document.write('<br>');
    document.write("You have obtained A-");
}else if(num >=60 && num <= 64){
    document.write("If number equal = 55");
    document.write('<br>');
    document.write("You have obtained B");
}else if(num >=50 && num <= 59){
    document.write("If number equal = 55");
    document.write('<br>');
    document.write("You have obtained C");
}else if(num >=45 && num <= 49){
    document.write("If number equal = 55");
    document.write('<br>');
    document.write("You have obtained D");
}else if(num >=33 && num <= 44){
    document.write("If number equal = 55");
    document.write('<br>');
    document.write("You have obtained E");
}else if(num >=0 && num < 33){
    document.write("Sorry! You Failed");
}else{
    alert("Please enter a valid number 'XD'")
}


// var num2 = 27;

// if(num2 * 2){
//     document.write("It's an Even number");
// }

document.write("Using a function: ");
document.write("<br>");
document.write(" X = 73 , Y = 20");
document.write("<br>");
function sum(x,y){
    document.write(x + y)
    document.write("<br>")
    document.write(x - y)
}
sum(73,20);