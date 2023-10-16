document.getElementById("simpleAlert").onclick = function () {
    alert("Simple Alert")
}






// clear text input
document.getElementById("clearButton").onclick = function () {
    document.getElementById("textinput").value = "";
}




// print my name
document.getElementById("printName").onclick = function () {
    let myName = document.getElementById("textinput").value

    // if(myName === ""){
    if (!myName) {
        alert("Please type your name.")
        return
    }
    document.getElementById("textoutput").innerHTML = '<span style="color: green; font-size: 20px;"> ' + myName + '</span> '
}






// Array Cities List
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Gojra", "Sailkot", "Quetta"]
console.log("cities")






// Print all Cities
// let textinput = document.getElementById("textinput").value
document.getElementById("printAllCities").onclick = function () {
    document.getElementById("textoutput").innerHTML = "";

    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("textoutput").innerHTML += num + ") " + cities[i] + '<br>'
    }
}



// Add cities in list
document.getElementById("addCity").onclick = function () {
    let city = document.getElementById("textinput").value;
    if (!city) {
        alert("Please type your City.")
        return
    }
    cities.push(city);
    document.getElementById("textoutput").innerHTML = '<span style="color: green; font-size: 20px;"> "' + city + '"</span> has been successfully added into list.'
}






// Generate Table
document.getElementById('table').onclick = function () {
    let allnum = document.getElementById('textinput').value;
    if (!allnum) {
        alert('Enter your number');
    } 
    if(allnum){
        let limit = +prompt('Enter your limit')
        document.getElementById('textoutput').innerHTML = " ";
        for (let i = 1; i <= limit; i++) {
            document.getElementById('textoutput').innerHTML += allnum + " * " + i + " = " + allnum * i + " </br>" ;
        }
    }
}











// Clear Output
document.getElementById("clearOutputButton").onclick = function () {
    document.getElementById("textoutput").innerText = ""
}