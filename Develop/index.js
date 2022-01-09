// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatePage = require("./utils/generateMarkdown")
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input", 
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input", 
            name: "github", 
            message: "Enter your GitHub username:"  
        }, 
        {
            type: "input", 
            name: "email", 
            message: "Enter your email address:" 
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: " Provide a step-by-step description of how to get the development environment running:"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions for the use of your project:"
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide instructions for anyone who would like to contribute to your project:"
        },
        {
            type: "input",
            name: "test",
            message: "Leave examples or suggestions of tests that can be run on your project:"
        }, 
        {
            type:"checkbox",
            name: "licenses",
            message: "What licenses would you like to include for your project? (check all that apply)",
            choices: ["Apache 2.0", "Mozilla 2.0", "GitHub", "NPM", "Perl", "Eclipse", "GNU"]
        }


    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions()
    .then(questions => {
        console.log(questions)
    });