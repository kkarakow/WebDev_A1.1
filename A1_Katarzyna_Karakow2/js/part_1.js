function printResult(){

    var name = prompt("Enter your name");
    var mark1 = parseInt(prompt("Enter first mark"));
    var mark2 = parseInt(prompt("Enter second mark"));
    var mark3 = parseInt(prompt("Enter third mark"));

    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3))
        document.getElementById("print").innerHTML="You cannot enter string, please refresh the page again";
    else
        document.getElementById("print").innerHTML=average; 
    
  
    var average = (mark1 + mark2 + mark3)/3; 

    if (average >= 90) 
        document.getElementById("print").innerHTML="Awesome";
    else if(average >= 80)  
        document.getElementById("print").innerHTML="Very Good";
    else if(average >= 50)  
        document.getElementById("print").innerHTML="OK"; 
    else if(average < 50) 
        document.getElementById("print").innerHTML="Fail"; 
    

    document.getElementById("result").innerHTML="Below grades along with name:" + "</br>" + name + "</br>" + mark1 + "</br>" + mark2 + "</br>"+ mark3 + "</br>";
    
}