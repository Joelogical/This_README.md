const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: "usage information",
        message: "Please provide the usage information:"
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Please list the contribution guidlines to your project:'
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Please provide the test instructions for your project:'
    }
];

inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
    })
    .catch(error => {
        console.error("Error during prompting:", error);
    });

    const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log(`File has been saved as ${fileName}`);
        }
    });
}

writeToFile('example.txt', 'Hello, world!');

function generateREADME(data) {
    return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}
`;
}

// Call the init function to start the application
init();