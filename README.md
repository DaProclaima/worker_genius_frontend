# Worker Genius front end project for Worker Genius application
This application is developed by Jean-Baptiste VESLEER and Sébastien NOBOUR.
They are both student at My Digital School Paris 19e, France.

## Status
### IN DEVELOPMENT. RELEASE to come on JUNE 2020

## Why this application ?
It is our project for final exams. It's a whole marketing, design and project behind this applicatin.
Its purpose is to get job seekers to get their skills certificated and become hired by companies looking for new
talents. Let's imagine a tech company looking for Symfony 5 backend developer.
The company subscribes to our service, to access a page showing all Symfony 5 backend developers on our website.
Are only showed job seekers, now called as candidates, who validated Symfony 5 backend tests on our platform. Then
 the company can slide in our Direct Message candidate's window is interested in to plan an interview. 
, then contact 
 
## What is the required env to use this application ?
You need to use Node JS 10

## Which technologies are used ?
ExpressJS for server, yarn as node package manager, handlebars as view engine templating

## What is the application architecture ?
The architecture is MVC type. Here is a representative tree of the project ( made with 'tree -I node_modules' command,
 given by brew install tree) :
 
```
.
├── README.md
├── app
│   ├── jwt.js
│   └── server.js
├── assets
│   ├── css
│   │   └── app.css
│   ├── fonts
│   │   ├── bebas_neue
│   │   └── montserrat
│   ├── images
│   │   ├── banner_homepage
│   │   ├── code_js.jpg
│   │   └──favicon
│   ├── javascripts
│   │   └──component
│   └── scss
│       ├── app.scss
│       ├── base
│       ├── components
│       ├── helpers
│       ├── layouts
│       └── pages
├── index.js
├── package.json
├── test
├── views
│   ├── home.hbs
│   ├── layouts
│   └── partials
│       └── components
└── yarn.lock
```
## How to set up the app ?
Get the project on your device from github repo by doing this:
> git clone git@github.com:DaProclaima/worker_genius_frontend.git

Once you have NodeJS on your computer, simply go in the project directory and run a 
> yarn install

## How to run the application locally in dev env ?

In an other tab:
 > yarn css-build
 > yarn start

Want to stop the app ? Just type CTRL + C

## How to access the backend application locally in dev env ?
Get the backend project with the command below:
> git clone git@github.com:DaProclaima/worker_genius_frontend.git

Then, install the node dependencies with yarn with this command:
> yarn install

After, run a mongoDB server with this command:
> mongoDB run

Execute the backend application server with this command in an other terminal:
> yarn start

This will run the backend application on port 3010. In parallel, keep your frontend application running on port 3000.

## How to fetch backend datas locally in dev env ?

Go in app/server.js.
Enable node-fetch package which is required to fetch datas from an url.
And write an instruction as below to fetch datas:
```
 const myvar = fetch('http://localhost:3010/myentity/crudmethod/')
```
To get the CRUD methods and entities available, please, refer to the readme.md documentation on https://github.com/DaProclaima/worker_genius_backend#readme


