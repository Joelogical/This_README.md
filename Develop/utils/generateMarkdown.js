// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
    " ",
    "_"
  )}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return ""; // Return empty string if no license is provided
  if (license === "MIT") {
    return `[License Information](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "ISC") {
    return `[License Information](https://choosealicense.com/licenses/isc/)`; // Add ISC license link
  } else if (license === "GNU") {
    return `[License](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else if (license === "GPL") {
    return `[License](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  return ""; // Return empty string if no valid license is matched
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (!badge && !link) return ""; // If no badge or link, return an empty string

  return `
  ## License
  ${badge}
  ${link}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Email](#email)
* [GitHub](#github)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contributing}

## Test
${data.tests}

## License
${renderLicenseSection(data?.license)}

## Email
${data.email}

## GitHub
${data.github}
`;
}

export default generateMarkdown;
