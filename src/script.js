/**
 * Date:07/02/2022
 * Name:Yash Agrawal
 */
function submitData()
{
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var weight=document.getElementById("weight").value;

    console.log(age);
    if(age <= 20)
    {
        //manipulation of age function 
        var result=ageCheck(age,weight);

        //display output
        display(name,result,age);
    }
    else
    {
        document.getElementById("output").innerHTML="Please enter the age less than 20";
    }
}

//function to perform the age check
function ageCheck(age, weight)
{
    var result;
    if(age => 5 && age <=7)
    {
        result=weightCheck(15 ,20, weight)
    }
    else if(age => 8 && age <=10)
    {
        result=weightCheck(21 , 25 ,weight)
    }
    else if(age => 11 && age <=15)
    {
        result=weightCheck(26,30,weight);
    }
    else if(age => 16 && age <= 20)
    {
        result=weightCheck(31,40,weight);
    }
    else
    {
        result="Please enter a age less than 20 or equal to 20";
    }
    return result;
}

//function to perform the weight check
function weightCheck(lowerValue,upperValue,weight)
{
    if(weight > upperValue)
    {
        return "Your weight is greater than recommended value of "+upperValue;  
    }
    else if(weight < lowerValue)
    {
        return "Your weight is less than recommended value of "+lowerValue;
    }
    else
    {
      return "Your weight is perfect";
    }
}

function display(name,result,age)
{
    document.getElementById("output").innerHTML=`Hello ${name} !! ${result} at an age of ${age}.`;
}

