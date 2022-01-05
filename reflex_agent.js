// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states, currentState) {
    if(currentState == 8)
        return; 

    if ( currentState == 8 || (currentState === 5 && getState(states) === 4)) {
        states = ["B", "DIRTY", "DIRTY"];
    }
    let newCurrentState = getState(states)
    var location = states[0];
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    setTimeout(function () { test(states, newCurrentState); }, 2000);
}

function getState(states) {
    if (states[0] === "A") {
        if (states[1] == "DIRTY") {
            if (states[2] == "DIRTY") {
                return 1;
            } else {
                return 8;
            }
        } else {
            if (states[2] == "DIRTY") {
                return 2;
            } else {
                return 5;
            }
        }
    } else if (states[0] === "B") {
        if (states[2] == "DIRTY") {
            if (states[1] == "DIRTY") {
                return 6;
            } else {
                return 3;
            }
        } else {
            if (states[1] == "DIRTY") {
                return 7;
            } else {
                return 4;
            }
        }
    }
}


var states = ["A", "DIRTY", "DIRTY"];
test(states, 1);