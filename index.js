// TODO: Include packages needed for this application
const { fs } = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title for the project"
    },
    {
        type: "input",
        name: "table",
        message: "What's the description for the project"
    },
    {
        type: "input",
        name: "description",
        message: "What are the installation steps for the project"
    },
    {
        type: "list",
        name: "license",
        message: "What's the license for the project",
        choices: ["Apache 2.0", "Mozilla", "MIT"]
    },
];

inquirer
    .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers)
        console.log(__dirname)
        writeToFile("test.md", generateMarkdown({...answers}))
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(),fileName), data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })

}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
