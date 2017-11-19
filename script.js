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

//Kolla om man redan är inloggad och isåfall visa inloggad sida.
    if (sessionStorage.getItem("userId"))  {
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

//Om inte, visa första sidan
    else{
        $(".welcome").hide();
        $(".loggedIn").hide();
        $(".incorrect").hide();
        $(".logoutButton").hide();
        $(".welcome").fadeIn(1000);
    }
    



   
//loginknappen, visa inloggad sida ifall ID och pass är rätt.
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
            
            sessionStorage.setItem("userId", sessionStorage.userName);
        }
//Om inte, visa "glömt lösen"-sida.
        else{
            $(".loggedIn").hide();
            $(".welcome").hide();
            $(".logoutButton").hide();
            $(".incorrect").fadeIn(1000);

            
        }
        

    });
//logga ut, refresh
    $(".logoutButton").click(function(){
        sessionStorage.clear(); 
        location.reload();
    });
    
});



