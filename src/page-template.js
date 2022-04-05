
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
    console.log(title,description,table,install,usage,license,contribute,test,questions)

    //generates the .md file
    return `
        # ${title}
        ## ${description}
        ## ${generateTable(table)}
        ## ${Installation}
        ## ${Usage}
        ## ${License}
        ## ${Contributing}
        ## ${Tests}
        ## Questions
        - ${username}
        - ${email}
    `
};



