
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },

    {
        type: "input",
        name: "description",
        message: "What is this application?"
    },

    {
        type: "list",
        message: "contents",
        name: "contents",
        choices: [
            "Title",
            "Description",
            "Table of contents",
            "Installation",
            "Usage",
            "License",
            "Contributing",
            "Tests",
            "Questions",
            "Images"
        ]
    },  

    {
        type: "input",
        name: "installation",
        message: "What was installed?"
    },

    {
        type: "input",
        name: "usage",
        message: "How do you use this application?"
    },

    {
        type: "list",
        message: "Which license are you using for your project?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "GPL"
        ]
    },

    {
        type: "input",
        name: "contributing",
        message: "Who contributed?"
    },

    {
        type: "input",
        name: "tests",
        message: "What tests were run?"
    },

    {
        type: "input",
        name: "questions",
        message: "questions about the application?"
    },

    {
        type: "input",
        name: "imgs",
        message: "images"
    },


];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    console.log('asking questions');
    inquirer.prompt(questions).then(function (answers) {
        writeToFile("README.md", generateMarkdown(answers))
    })

}


init();
