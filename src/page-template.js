
const generateTable = tableText =>{
    if(!tableText){
        return '';
    }

    return `
        ## Table of Contents
        ${table}
    `
};

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
        ${License}
        ## Contributions
        ${Contributing}
        ## Tests
        ${Tests}
        ## Questions
        - ${username}
        - ${email}
    `
};



