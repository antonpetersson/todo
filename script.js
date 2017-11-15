$(document).ready(function(){
//login info
    sessionStorage.userName = "test";
    sessionStorage.passWord = "password";

    var stuffToDo = [
        "Klipp gräset", 
        "Betala räkningar",
        "Köp mjölk", 
        "Spika upp tavlor"
        ];
    var json_str = JSON.stringify(stuffToDo);
    localStorage.doList = json_str; 

    var loopArray = JSON.parse(localStorage.doList);
   
//welcome message
    $(".welcome").hide();
    $(".loggedIn").hide();
    $(".incorrect").hide();
    $(".logoutButton").hide();
    $(".welcome").fadeIn(1000);



   

    $(".loginButton").click(function(){
        if ($(".UN").val() == sessionStorage.userName && $(".PW").val() == sessionStorage.passWord) {
            $(".welcome").hide();
            $(".incorrect").hide();
            $(".UN").hide();
            $(".PW").hide();
            $(".loginButton").hide();
            $(".logoutButton").show();
            $(".loggedIn").fadeIn(1000);
            $(".nameMessage").text(sessionStorage.userName + "'s ToDo:");
            $(".toDoList").text(loopArray);
            
            
        }
        else{
            $(".loggedIn").hide();
            $(".welcome").hide();
            $(".logoutButton").hide();
            $(".incorrect").fadeIn(1000);

            
        }
        

    });

    $(".logoutButton").click(function(){
        window.location = "index.html";
    });
    
});



/*

    $(".nameMessage").text($("input").val());




*/