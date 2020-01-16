const fs = require("fs");
const axios = require('axios');
const inquirer = require('inquirer');
const { generateHTML } = require("./generateHTML.js")

const questions = [
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ['green', 'blue', 'pink', 'red'],
    }

];

function writeToFile(fileName, data) {
 
}

function init() {

init();
