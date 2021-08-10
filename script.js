// global var

var player1Array = [];
var individualScoreArray = [];
var diceArray = [];
var mode = "input num of dice";
var players = 2;

//dice roll
// var diceRoll = function() {
//     var dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
//     return dice;
// };

var main = function(input) {
    var myOutputValue = "";
    if (mode == "input num of dice") {
        return (myOutputValue = numberOfDice(input));
    } else if (mode == "enter number of dice") {
        return (myOutputValue = Player1());
    }
    return myOutputValue;
};

var numberOfDice = function(input) {
    mode = "enter number of dice";
    var numOfDice = Number(input);
    var myOutputValue = `${numOfDice} dice will be used`;
    console.log("num of dice", numOfDice);
    return myOutputValue;
};

//dice roll
var diceRoll = function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    if (dice == 0) {
        return (dice = 1);
    }
    if (dice == 1) {
        return (dice = 2);
    }
    if (dice == 2) {
        return (dice = 3);
    }
    if (dice == 3) {
        return (dice = 4);
    }
    if (dice == 4) {
        return (dice = 5);
    }
    if (dice == 5) {
        return (dice = 6);
    }
};

var diceMultiplierAi = function() {
    var dices = numberOfDice();
    var diceGenerator = 0;
    var scoreArray = [];
    while (diceGenerator < dices) {
        var num = diceRoll();
        diceGenerator += 1;
        scoreArray.push(num);
    }
    diceArray.sort((a, b) => a - b);
    return scoreArray;
};

var diceMultiplier = function() {
    var dices = numberOfDice();
    var diceGenerator = 0;
    var scoreArray = [];
    while (diceGenerator < dices) {
        var num = diceRoll();
        diceGenerator += 1;
        scoreArray.push(num);
    }
    diceArray.sort((a, b) => a - b);
    return scoreArray;
};

// var diceOutcome = diceMultiplier();
// var diceOutcomeAi = diceMultiplierAi();
var Player1 = function() {
    mode = "player 1";
    var diceOutcome = diceMultiplier();
    var diceOutcomeAi = diceMultiplierAi();

    var formula = function() {
        if (diceOutcome == diceOutcomeAi) {
            return "It's a draw!";
        } else if (diceOutcome < diceOutcomeAi) {
            return "You lose!";
        } else if (diceOutcome > diceOutcomeAi) {
            return "You win!";
        }
    };
    var judge = formula();
    var myOutputValue = `You rolled ${diceOutcome}<br>A.I. rolled ${diceOutcomeAi}<br>${judge}`;
    return myOutputValue;
};

// var player1Arrange = function(input) {
//     var A = player1Array[0];
//     var B = player1Array[1];
//     var myOutputValue = "";
//     if (input == "ab") {
//         return (myOutputValue = `${A}${B}`);
//     }
//     if (input == "ba") {
//         return (myOutputValue = `${B}${A}`);
//     }
//     return myOutputValue;
// };
// var player2Arrange = function() {
//     var dice2A = player2Array[0];
//     var dice2B = player2Array[1];
// };