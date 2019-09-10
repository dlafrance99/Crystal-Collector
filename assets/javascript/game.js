$(document).ready(function () {


    var goalNum = 0;
    var userNum = 0;
    var win = 0;
    var losses = 0;
    var redCrystalVal = 0;
    var blueCrystalVal = 0;
    var purpleCrystalVal = 0;
    var greenCrystalVal = 0;

    var goalNumber = function () {
        goalNum = (Math.floor(Math.random() * 101) + 19);
        console.log(goalNum);
        $("#random-number").text(goalNum);
    }

    var redCrystalRan = function () {
        redCrystalVal = (Math.floor((Math.random() * 12) + 1));
        console.log("red crystal = " + redCrystalVal);
        $("#red-crystal").val(redCrystalVal);
    }

    var blueCrystalRan = function () {
        blueCrystalVal = (Math.floor((Math.random() * 12) + 1));
        console.log("blue crystal = " + blueCrystalVal);
        $("#blue-crystal").val(blueCrystalVal);
    }

    var purpleCrystalRan = function () {
        purpleCrystalVal = (Math.floor((Math.random() * 12) + 1));
        console.log("purple crystal = " + purpleCrystalVal);
        $("#purple-crystal").val(purpleCrystalVal);
    }

    var greenCrystalRan = function () {
        greenCrystalVal = (Math.floor((Math.random() * 12) + 1));
        console.log("green crystal = " + greenCrystalVal);
        $("#green-crystal").val(greenCrystalVal);
    }


    var startgame = function () {
        goalNumber();
        userNum = 0;
        redCrystalRan();
        blueCrystalRan();
        purpleCrystalRan();
        greenCrystalRan();
    }

    $("#red-crystal").on("click", function () {
        userNum = userNum + redCrystalVal;
        $("#player-score").text(userNum)
    })

    $("#blue-crystal").on("click", function () {
        userNum = userNum + blueCrystalVal;
        $("#player-score").text(userNum);
    })

    $("#purple-crystal").on("click", function () {
        userNum = userNum + purpleCrystalVal;
        $("#player-score").text(userNum);
    })

    $("#green-crystal").on("click", function () {
        userNum = userNum + greenCrystalVal;
        $("#player-score").text(userNum);
    })

    if (userNum === goalNum) {
        win++
        $("#wins").text(win);
        startgame();
    }else if (userNum > goalNum) {
        win++
        $("#loses").text(win);
        startgame();
    }


});