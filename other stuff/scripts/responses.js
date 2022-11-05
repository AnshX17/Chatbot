function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "hi") {
        return "Hello ,This bot was made by Ansh. If you wanna know about UN Sustainable Development Goals type 'About UN Goals' ";
    } 
    else if (input == "About UN Goals") {
        return "The Sustainable Development Goals or Global Goals are a collection of 17 interlinked global goals designed to be a 'shared blueprint for peace and prosperity for people and the planet, now and into the future'. The SDGs were set up in 2015 by the United Nations General Assembly and are intended to be achieved by 2030. Type 'Details' to know more.";
}
else if (input == "Details") {
    return "There are total 17 goals choose the number to know more about it. for example type '1'.";
}
else if (input == "1") {
    return "The 1st Goal is NO POVERTY. Copy this link to another tab to know more https://sdgs.un.org/goals/goal1";
}
else if (input == "2") {
    return "The 2nd Goal is ZERO HUNGER. Copy this link to another tab to know more https://sdgs.un.org/goals/goal2";
}
else if (input == "3") {
    return "The 3rd Goal is GOOD HEALTH AND WELL-BEING. Copy this link to another tab to know more https://sdgs.un.org/goals/goal3";
}
else if (input == "4") {
    return "The 4th Goal is QUALITY EDUCATION. Copy this link to another tab to know more https://sdgs.un.org/goals/goal4";
}
else if (input == "5") {
    return "The 5th Goal is GENDER EQUALITY. Copy this link to another tab to know more https://sdgs.un.org/goals/goal5";
}
else if (input == "6") {
    return "The 6th Goal is CLEAN WATER AND SANITATION. Copy this link to another tab to know more https://sdgs.un.org/goals/goal6";
}
else if (input == "7") {
    return "The 7th Goal is AFFORDABLE AND CLEAN ENERGY. Copy this link to another tab to know more https://sdgs.un.org/goals/goal7";
}
else if (input == "8") {
    return "The 8th Goal is DECENT WORK AND ECONOMIC GROWTH. Copy this link to another tab to know more https://sdgs.un.org/goals/goal8";
}
else if (input == "9") {
    return "The 9th Goal is INDUSTRY, INOVATION AND INFASTRUCTURE. Copy this link to another tab to know more https://sdgs.un.org/goals/goal9";
}
else if (input == "10") {
    return "The 10th Goal is REDUCED INEQUALITIES. Copy this link to another tab to know more https://sdgs.un.org/goals/goal10";
}
else if (input == "11") {
    return "The 11th Goal is SUSTAINABLE CITIES AND COMMUNITIES. Copy this link to another tab to know more https://sdgs.un.org/goals/goal11";
}
else if (input == "12") {
    return "The 12th Goal is RESPONSIBLE CONSUMPTION AND PRODUCTION. Copy this link to another tab to know more https://sdgs.un.org/goals/goal12";
}
else if (input == "13") {
    return "The 13th Goal is CLIMATE ACTION. Copy this link to another tab to know more https://sdgs.un.org/goals/goal13";
}
else if (input == "14") {
    return "The 14th Goal is LIFE BELOW WATER. Copy this link to another tab to know more https://sdgs.un.org/goals/goal14";
}
else if (input == "15") {
    return "The 15th Goal is LIFE ON LAND. Copy this link to another tab to know more https://sdgs.un.org/goals/goal15";
}
else if (input == "16") {
    return "The 16th Goal is PEACE, JUSTICE AND STRONG INSTITUTIONS. Copy this link to another tab to know more https://sdgs.un.org/goals/goal16";
}
else if (input == "17") {
    return "The 17th Goal is PARTNERSHIP FOR THE GOALS. Copy this link to another tab to know more https://sdgs.un.org/goals/goal17";
}
}