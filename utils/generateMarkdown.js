// function to generate markdown for README
function generateMarkdown(data) {

  //running into an error with license, going to make it true by default
  var license = true;

  //declaring variable markdown
  var markdown = `# ${data.githubRepo.replace(/-/g, " ")}\n`

  //Badge for the repo
  markdown += `\n[![repo size](https://img.shields.io/github/repo-size/${data.githubUsername}/${data.githubRepo})](https://github.com/${data.githubUsername}/${data.githubRepo})`;

  //If a license exists next to the Repo badge
  if (license) {
    markdown += ` [![Github license](https://img.shields.io/badge/license-${data.license.replace(/\b \b/g, "%20")}-blue.svg)](https://opensource.org/licenses/${licenseLink})`;
  }

  markdown += `\n\n## Title\n\n${data.projectTitle}\n`;

  //add the Description data
  markdown += `\n\n## Description\n\n${data.description}\n`;

  //adding a table of contents

  if (data.table) {
    markdown += '\n## Table of contents\n';

    markdown += '\n* [Installation](#installation)\n';
    markdown += '\n* [Usage](#usage)\n';

    if (data.contributeTrueOrFalse) {
      markdown += '\n* [Contributing](#contributing)\n';
    }

    if (data.testsTrueorFalse) {
      markdown += '\n* [Tests](#tests)\n';
    }

    markdown += '\n* [Questions](#questions)\n'
    markdown += '\n* [License](#license)\n'
  }

  //Instructions for dependencies
  markdown += `\n## Installation\n\n>To install the needed dependencies, run this command:\n\n\`\`\`\n${data.install}\n\`\`\`\n`;

  //Instructions for usage
  markdown += `\n## Usage\n\n${data.usage}\n`;

  // Licensing switching between cases
  switch (data.license) {
    case 'MIT':
      var licenseLink = 'mit-license.php';
      break;
    case 'GPL 3.0':
      var licenseLink = 'GPL-3.0';
      break;
    case 'APACHE 2.0':
      var licenseLink = 'Apache-2.0';
      break;
    case 'BSD 3':
      var licenseLink = 'BSD-3-Clause';
      break;
    default:
      license = false;
  }

  //add the license
  if (license) {
    markdown += `\nLicensed under the [${data.license}](https://opensource.org/licenses/${licenseLink}) license.`
  }

  //if they wanted a contribute section
  if (data.contributeTrueOrFalse) {
    markdown += '\n## Contributing\n';
  }

  // If the user wants a tests section
  if (data.testsTrueorFalse) {
    markdown += `\n## Tests\n\n>To run tests, run this command:\n\n\`\`\`\n${data.testsContent}\n\`\`\`\n`;
  }

  markdown += `\n## Questions\n\nIf you have any questions, please open an issue or contact [${data.githubUsername}](https://github.com/${data.githubUsername}).\n`;

  markdown += `\n## Questions\n\nFor addition information, please contact ${data.emailAddress}.\n`;



  return markdown;
}

module.exports = generateMarkdown;