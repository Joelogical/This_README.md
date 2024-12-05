const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please list the contribution guidlines to your project:",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide the test instructions for your project:",
  },
  {
    type:"list",
    name:"license",
    choices:["MIT","ISC","GNU","GPL"]
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email:"
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub URL:"
  }
];

function init(){
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    return generateMarkdown(answers)
  }).then(readmeContent => {
    writeToFile("OUTPUT.md",readmeContent)
  })
  .catch((error) => {
    console.error("Error during prompting:", error);
  });
}


//Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`File has been saved as ${fileName}`);
    }
  });
}

// writeToFile("example.txt", "Hello, world!");


// Call the init function to start the application
init();
