// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input", 
            name: "project",
            message: "What is the name of your project?(Required)"
        },
        {
            type: "input", 
            name: "github", 
            message: "Enter your GitHub username (Required)"  
        }, 
        {
            type: "input", 
            name: "email", 
            message: "Enter your email address (Required)" 
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