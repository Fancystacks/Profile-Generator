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
    inquirer
        .prompt(questions)
        .then(function ({ username, color }) {
            const queryUrl = `https://api.github.com/users/${username}`;

            axios
                .get(queryUrl)
                .then((response) => {
                    console.log(response.data)
                    switch (color) {
                        case 'green':
                            data.color = 0;
                            break;
                        case 'blue':
                            data.color = 1;
                            break;
                        case 'pink':
                            data.color = 2;
                            break;
                        case 'red':
                            data.color = 3;
                            break;
                    }
                    axios
                        .get(`https://api.github.com/users/${username}/repos?per_page=100`)
                        .then((response) => {
                            data.stars = 0;
                            for (var i = 0; i < response.data.length; i++) {
                                data.stars += res.data[i].stargazers_count;
                            }
                            let resumeHTML = generateHTML(data);
                            pdf.create({ html: resumeHTML }).toFile('github.pdf', function (err, res) {
                                if (err) {
                                    return console.error(err);
                                }

                                pdf.create({ html: resumeHTML }).toStream(function (err, stream) {
                                    stream.pipe(fs.createWriteStream('github.pdf'));
                                });

                            })
                        })
                });
        })
}

init();
