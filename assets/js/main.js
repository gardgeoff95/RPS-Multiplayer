
$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyBVyJV1Cc8eTvQx-vlQs8l2i9Sh-pw331Q",
        authDomain: "rps-database-61693.firebaseapp.com",
        databaseURL: "https://rps-database-61693.firebaseio.com",
        projectId: "rps-database-61693",
        storageBucket: "rps-database-61693.appspot.com",
        messagingSenderId: "813563502966",
        appId: "1:813563502966:web:31d4b7e743b3e7e5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var p1Choice;
    var p2Choice;

    var database = firebase.database();

    console.log($("#p1Rock").text());
    $(".p1Choice").on("click", function () {
        //shows the player choice on the screen locally
        p1Choice = $(this).text();
        $("#p1Span").text(p1Choice);
        p1Chosen = true;
        if (p1Chosen = true){
            //only puts it into databse once a choice is selected and submit button is pushed
            $("#p1Submit").on("click",function(){
                database.ref("players/player1State").set("chosen");
                database.ref("players/p1Choice").set(p1Choice);
                
            });
        }



    });

    $(".p2Choice").on("click", function () {
        p2Choice = $(this).text();
        $("#p2Span").text(p2Choice);
        p2Chosen = true;
        if (p2Chosen){
            //submits info to database
            $("#p2Submit").on("click",function(){
                database.ref("players/player2State").set("chosen");
                database.ref("players/p2Choice").set(p2Choice);
            });
        };
    });

});
