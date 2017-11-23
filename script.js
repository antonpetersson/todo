$(document).ready(function(){
//login info
    var userName = "test";
    var passWord = "password";
    
    
//Kolla om man redan är inloggad och isåfall visa inloggad sida.
    if (sessionStorage.getItem("userId"))  {
        showLoggedInPage();                       
    }

//Om inte, visa första sidan
    else{
        ShowStartPage();
    }
     
//loginknappen, visa inloggad sida ifall ID och pass är rätt.
    $(".loginButton").click(function(){
        if ($(".UN").val() == userName && $(".PW").val() == passWord) {
            showLoggedInPage(); 

//Sparar användaren i sessionStorage
            sessionStorage.setItem("userId", $(".UN").val());
        }
//Om inte, visa "glömt lösen"-sida.
        else{
            ShowForgotPwPage();        
        }
        

    });
//logga ut, refresh
    $(".logoutButton").click(function(){
        sessionStorage.clear(); 
        location.reload();
    });
    

// FUNKTIONER
// Inloggnignssidan
function showLoggedInPage(loopArray){
    
    var stuffToDo = [
        "Klipp gräset", 
        "Betala räkningar",
        "Köp mjölk", 
        "Spika upp tavlor"
        ];
    var json_str = JSON.stringify(stuffToDo);
    localStorage.doList = json_str; 

    $(".welcome").hide();
    $(".incorrect").hide();
    $(".UN").hide();
    $(".PW").hide();
    $(".loginButton").hide();
    $(".logoutButton").show();
    $(".loggedIn").fadeIn(1000);
    $(".nameMessage").text(userName + "'s ToDo:");
    createTodo();   
}

//Fel lösen sidan
function ShowForgotPwPage(){
$(".loggedIn").hide();
$(".welcome").hide();
$(".logoutButton").hide();
$(".incorrect").fadeIn(1000);
}

//startsidan
function ShowStartPage(){
    $(".welcome").hide();
    $(".loggedIn").hide();
    $(".incorrect").hide();
    $(".logoutButton").hide();
    $(".welcome").fadeIn(1000);
}

//Gör listan till en ul
function createTodo(){

    var loopArray = JSON.parse(localStorage.doList);

    todoList = "<ul>";
    for(var i = 0; i < loopArray.length; i++){
    todoList += "<li><a href='#' onClick='delTodoItem(" + i + ")'>" + loopArray[i] + "</a></li>";
    }
    todoList += "</ul>"
    
    $(".toDoList").html(todoList);
}
// testing testing, ta bort från listan
function delTodoItem(i){
    var todoArray = JSON.parse(localStorage.doList);

    todoArray.splice(i,1);
    createTodo();



}




});