// // alert("hi");
// console.log("hello ");\
// var yourage = prompt("enter your age")


function ageindays()
{
    var birthyear= prompt('what year u born');
    var ageindays= ( 2022 - birthyear)*365;
    var h1 = document.createElement("h1");
    var textanswer = document.createTextNode("you are"+ ageindays + " days old");
    h1.setAttribute('id','ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flexboxresult').appendChild(h1);
    // console.log(ageindays);
}

function reset(){
    document.getElementById("ageindays").remove();
}