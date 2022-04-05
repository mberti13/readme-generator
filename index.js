const inquirer = require('inquirer');

const fs = require('fs');


//Import page-template.js into index.js(generateReadMe function)
const markdownTemplate = require('./src/page-template.js');


//creates function to prompt user in CL
const promptUser = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput =>{
                if(titleInput){
                    return true;
                }else{
                    console.log('Please enter your projects title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a Description for your project.',
            validate: descriptionInput =>{
                if(descriptionInput){
                    return true;
                }else{
                    console.log('Please enter a Description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to include a Table of Contents?',
            validate: contentsInput =>{
                if(contentsInput){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Enter directions for installation of your project.',
            validate: contentsInput =>{
                if(contentsInput){
                    return true;
                }else{
                    console.log('Please enter directions for installation for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please enter the expected usage/use-case for your project.',
            validate: contentsInput =>{
                if(contentsInput){
                    return true;
                }else{
                    console.log('Please enter the expected usage/use-case for your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'What Licenses were used in this project?',
            choices: ['MIT','GNU GPL 2.0', 'Apache License 2.0','GNU GPL 3.0','BSD License','ISC License']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'How can others contribute to your project?',
            validate: contributionInput =>{
                if(contributionInput){
                    return true;
                }else{
                    console.log('Please enter how others can contribute!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'How can users test this project?',
            validate: testsInput =>{
                if(testsInput){
                    return true;
                }else{
                    console.log('Please enter how users can test this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
            validate: usernameInput =>{
                if(usernameInput){
                    return true;
                }else{
                    console.log('Please enter your Github username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your contact email?',
            validate: emailInput =>{
                if(emailInput){
                    return true;
                }else{
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
        //Console Logs Users Input
    ]).then((data) =>{
        console.log(data);
    })
};

// const pageMd = markdownTemplate();

//Prompt User
//Take info from input and add it to .md through generateReadMe in page-template
//send completed template to generateMarkdown in utils folder

promptUser();
    // .then(page)
