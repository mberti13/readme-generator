
const generateTable = tableText =>{
    if(!tableText){
        return '';
    }

    return `
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Licensing](#Licensing)
4. [Contributions](#Contributions)
5. [Tests](#Tests)
6. [Questions?](#Questions)
    `
};

const generateBadge = License =>{
    if(License === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if(License === "GNU GPL 2.0"){
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    }else if(License === "Apache License 2.0"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if(License === "GNU GPL 3.0"){
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if(License === "BSD License"){
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }else if(License === "ISC License"){
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    }
}

module.exports = readMeTemplate =>{
    console.log(readMeTemplate);
    //divides sections into the readMeTemplate
    const {title,description,table,Installation,Usage,License,Contributing,Tests,username,email} = readMeTemplate
    //logs each individual response 
    console.log(title,description,table,Installation,Usage,License,Contributing,Tests,username,email)

    //generates the .md file
    return `
# ${title}
## Description
${description}
${generateTable(table)}
## Installation
${Installation}
## Usage
${Usage}
## Licensing
${generateBadge(License)}
## Contributions
${Contributing}
## Tests
${Tests}
## Questions
- [${username}](https://github.com/${username})
- [Contact Me](mailto:${email})
`
};



