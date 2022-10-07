# Polling API

## Features
- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- View a question with it’s options and all the votes given to it
- Delete a question -> (question can’t be deleted if one of it’s options has votes)
- Delete an option -> (option can’t be deleted if it has even one vote given to it)
- View all questions and options (HOME)


## Tech Stack
- Node Js
- Express Js
- MongoDB
- Heroku

## Routes
- GET  -  / (To get all the questions and options)
- POST -  /questions/create  (To create a question)
- POST -  /options/:id/create  (To add options to a question (the id of the question is provided in params))
- GET -  /questions/:id/delete (To delete a question)
- GET -  /options/:id/delete (To delete an option. An option can't be deleted if it has votes)
- GET -  /options/:id/add_vote (To increment the count of votes to an option)
- GET  -  /questions/:id (To view a question and it’s options)

## How to add questions / options
```
// to add a new question 
// pass 'title' through body
// and post it to https://polling-api-0.herokuapp.com/questions/create
{
    "title": "vote your Fav Coding platform"
}


// to add new option
// pass 'text' through body
// and post it to https://polling-api-0.herokuapp.com/questions/:id/options/create
{
    "text": "Code Studio"
}
```

## Demo 
```
[
{
"_id": "6320b1e83e4894f0e7c93bab",
"title": "#!/bin/bash is commonly called as",
"options": [
{
"_id": "6320b2de3e4894f0e7c93bba",
"text": "shebang",
"votes": 1,
"question": "6320b1e83e4894f0e7c93bab",
"__v": 0,
"votingUrl": "/options/6320b2de3e4894f0e7c93bba/add_vote"
},
{
"_id": "6320b2f83e4894f0e7c93bbf",
"text": "Script Initialiser",
"votes": 0,
"question": "6320b1e83e4894f0e7c93bab",
"__v": 0,
"votingUrl": "/options/6320b2f83e4894f0e7c93bbf/add_vote"
},
{
"_id": "6320b3093e4894f0e7c93bc4",
"text": "hashbang",
"votes": 0,
"question": "6320b1e83e4894f0e7c93bab",
"__v": 0,
"votingUrl": "/options/6320b3093e4894f0e7c93bc4/add_vote"
}
],
"__v": 5
}
]
```


## Directory Structure

```
.
├── README.md      
├── config
│   └── mongoose.js
├── controllers
│   ├── home_controller.js
│   ├── option_controller.js
│   └── question_controller.js
├── index.js
├── models
│   ├── Option.js
│   └── Question.js
├── package-lock.json
├── package.json
└── routes
    ├── index.js
    ├── options.js
    └── questions.js
```


## Git Clone
To use this repository in your local system-

<a href="https://github.com/CoderOnTheRoad/polling-API.git" target="_blank">https://github.com/CoderOnTheRoad/polling-API.git </a>


or run this command in your GitHub CLI

###### `gh repo clone CoderOnTheRoad/polling-API`
<br>




## Hosted URL 
<a href="https://polling-question-api-app.herokuapp.com/">https://polling-question-api-app.herokuapp.com/</a>