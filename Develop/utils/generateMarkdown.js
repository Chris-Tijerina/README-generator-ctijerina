// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "Mozilla 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
    case "Boost":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
    case "IBM":
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
    case "Perl":
      return "![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)";
    case "Eclipse":
      return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
    case "GNU":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Mozilla 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "Boost":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "IBM":
      return "https://opensource.org/licenses/IPL-1.0";
    case "Perl":
      return "https://opensource.org/licenses/Artistic-2.0";
    case "Eclipse":
      return "https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0";
    case "GNU":
      return "https://www.gnu.org/licenses/gpl-3.0";
    default:
      return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = "";
  license.forEach(item => {
    licenseSection += "[" + renderLicenseBadge(item) + "]" + "(" + renderLicenseLink(item) + ")\n"
  });


  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
