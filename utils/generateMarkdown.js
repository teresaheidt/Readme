function generateMarkdown(data) {
    return `
  # Project name:
  ${data.name}

  # Application:
  ${data.application}

  # Table of Contents:
  * [Project name](https://github.com/teresaheidt/readme-${data.contents}-project-name)
  * [Application](https://github.com/teresaheidt/readme-${data.contents}-application)
  * [Table of contents](https://github.com/teresaheidt/readme-${data.contents}-table-of-contents)
  * [Installation](https://github.com/teresaheidt/readme-${data.contents}-installation)
  * [Usage](https://github.com/teresaheidt/readme-${data.contents}-usage)
  * [License](https://github.com/teresaheidt/readme-${data.contents}-license)
  * [Contributing](https://github.com/teresaheidt/readme-${data.contents}-contributors)
  * [Tests](https://github.com/teresaheidt/readme-${data.contents}-tests)
  * [Questions](https://github.com/teresaheidt/readme-${data.contents}-questions)
  * [Images](https://github.com/teresaheidt/readme-${data.contents}-images)

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
  