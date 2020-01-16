const fs = require("fs");
const axios = require('axios');
const inquirer = require('inquirer');
const pdf = require('html-pdf');
const { generateHTML } = require("./generateHTML")

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
