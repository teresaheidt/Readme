function generateMarkdown(data) {
    return `
  # Project name:
  ${data.title}

  # Application:
  ${data.description}

  # Table of Contents:
  ${data.contents}
  * Title
  * Description
  * Table of contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  * Images

  # Installation:
  ${data.installation}

  # Usage:
  ${data.usage}

  # License:
 ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)
 
  # Contributors:
  ${data.contributing}

  # Tests:
  ${data.tests}

  # Questions:
  ${data.questions}

  # Images:
  ${data.imgs}

  `;
  }
  
  module.exports = generateMarkdown;
  