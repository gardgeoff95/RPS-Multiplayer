
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
    


    function setState(player, state) {
        database.ref("players/player" + player + "State").set(state);


    };

    var database = firebase.database();

    console.log($("#p1Rock").text());
    $(".p1Choice").on("click", function () {
        //shows the player choice on the screen locally
        p1Choice = $(this).text();
        $("#p1Span").text(p1Choice);
        p1Chosen = true;
        if (p1Chosen = true) {
            //only puts it into databse once a choice is selected and submit button is pushed
            $("#p1Submit").on("click", function () {
                setState("1", "chosen");
                database.ref("players/p1Choice").set(p1Choice);

            });
        }



    });

    $(".p2Choice").on("click", function () {
        p2Choice = $(this).text();
        $("#p2Span").text(p2Choice);
        p2Chosen = true;
        if (p2Chosen) {
            //submits info to database
            $("#p2Submit").on("click", function () {
                setState("2", "chosen");
                database.ref("players/p2Choice").set(p2Choice);

            });
        };
    });

    //this will be reformated later, just used to reset Firebase

    $("#reset").on("click", function () {
        setState("1", "unchosen");
        setState("2", "unchosen");
        database.ref("players/p1Choice").set("null");
        database.ref("players/p2Choice").set("null");
        $("#p1Span, #p2Span, #p1Final, #p2Final, #whoWon").empty();
        $("#reset").css("display","none");



    });
    //When the value of "player1State" and "player2State"changes to "chosen" it displays the info to both players

    
    database.ref("players").on("value", function (snapshot) {
        console.log(snapshot.val());
        if ((snapshot.val().player1State == "chosen") && (snapshot.val().player2State == "chosen")) {
            
            var p1Final = snapshot.val().p1Choice;
            console.log(p1Final);
            var p2Final = snapshot.val().p2Choice;
            $("#p1Final").text(snapshot.val().p1Choice);

            console.log(snapshot.val().p1Choice);


            $("#p2Final").text(snapshot.val().p2Choice);
           
            if (p1Final == p2Final){
                $("#whoWon").text("A Tie? How Boring!");
                $("#reset").css("display","block");

            } else if ((p1Final == "Rock")&&(p2Final=="Scissors")){
                $("#whoWon").text("Player 1 Won!");
                $("#reset").css("display","block");

           
               
            
            } else if ((p1Final == "Paper")&&(p2Final == "Rock")){
                $("#whoWon").text("Player 1 Won!");
                $("#reset").css("display","block");
               

            } else if ((p1Final == "Scissors")&&(p2Final == "Paper")){
                $("#whoWon").text("Player 1 Won!");
                $("#reset").css("display","block");
            } else {
                $("#whoWon").text("Player 2 Won!");
                $("#reset").css("display","block");
                

            }
            
            



        }




    });

});
