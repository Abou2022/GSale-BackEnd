# [Final Project - GSale](https://gsalefrontend.herokuapp.com/)

![Badge](https://img.shields.io/badge/license-MIT-blue)

---

# Description

Welcome to GSale, a full-stack garage sale event organizer application that allows users to search for the hottest local deals in their area or host their own sale.

This platform aims to be a fun and unique way for users to filter through available sales by date, location, and item category based on their needs. Additionally, users will be able to create their own sale event listing.

Our goal is to help users explore their creative side by offering a balance between simplicity and robust functionality all within one easy-to-use application.

Check out our deployed project [here](https://gsalefrontend.herokuapp.com/)! 

&nbsp;

---
# Table of Contents

  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#Usage)
  - [User Story](#user-story)
  - [Technologies Used](#technologies-used)
  - [Acceptance-Criteria](#acceptance-criteria)
  - [Demo](#demo)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [Contact](#contact)
  - [License](#license)

&nbsp;

---
# Installation

Instructions: 
1. Fork the application repository from GitHub and clone this project to your machine.
2. Open the project with your preferred text-editor, such as VS code.
3. Prerequisite installations: Node.js, MySQL, React
4. This project includes a `package.json` file that specifies dependencies for this project, which can be installed by running the command `"npm install"`
5. Run command "npm start" to start the react app on your local host server. It will automatically open

&nbsp;

---
# User Story

AS A USER, I want:
1. to be able to filter garage sales by location, date, and category, SO THAT I can search for specific items or sales based on my preferences
2. to be able to update my profile to include item categories I am interested in

&nbsp;

---
# Technologies Used

General Technologies: 
- [HTML](https://html.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.javascript.com/)
- [Node](https://www.npmjs.com/package/node)
- [Heroku](https://www.heroku.com/)
- [React](https://reactjs.org/)
- [Google Maps API](https://developers.google.com/maps)

&nbsp;

---
# Acceptance-Criteria
Project requirements:
- Must use a Node and Express web server
- Must be backed by a MySQL database with a Sequelize ORM 
- Must have both GET and POST routes for retrieving and adding new data
- Must be deployed using Heroku (with data)
- Must utilize at least one new library, package or technology that we haven't discussed
- Must have a front end/UI built on React
- Must have a folder structure that meets the MVC paradigm
- Must meet good-quality coding standards (indentation, scoping, naming, etc.)
- Must protect API keys in Node with environmental variables

&nbsp;

---

# Screenshots

## Homepage
![Homepage](./public/Assets/Homepage%20Demo.gif)

## Signup Page
![Signup](./public/Assets/Upload%20Demo.gif)

## Sale Event Page
![Event](./public/Assets/Editor%20Demo.gif)

## Page
![Updating Account](./public/Assets/UpdateAccount.gif)

&nbsp;

---
# Contributing

This project was completed as a collaborative group for Project 3 from the University of Washington Web Development Bootcamp. If you would like to contribute, please feel free to contact any of the team members with questions or comments.

&nbsp;

---
# Credits
- [Google Maps API](https://developers.google.com/maps) - map API

---
# Contact

If you have any questions feel free to contact our team:
- Andrew Ryu | [Github](https://github.com/ryuandrew) | [email](andrewryu@outlook.com)
- Bakary Sylla | [Github](https://github.com/Abou2022) | [email](syllabakary2002@gmail.com)
- Brian Bixby | [Github](https://github.com/brianbixby) | [email](BrianBixby0@gmail.com)
- Joe Choe | [Github](https://github.com/jchoe125) | [email](joechoe125@gmail.com)

&nbsp;

---
## License

[MIT License](./LICENSE) 

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# [Final Project - GSale Backend](https://gsale-backend.herokuapp.com/)

![Badge](https://img.shields.io/badge/license-MIT-blue)

---

# Description

Welcome to GSale, a full-stack garage sale event organizer application that allows users to search for the hottest local deals in their area or host their own sale.

This platform aims to be a fun and unique way for users to filter through available sales by date, location, and item category based on their needs. Additionally, users will be able to create their own sale event listing.

Our goal is to help users explore their creative side by offering a balance between simplicity and robust functionality all within one easy-to-use application.

Check out our deployed project [here](https://gsalefrontend.herokuapp.com/)! 

&nbsp;

---
# Table of Contents

  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [User Story](#user-story)
  - [Technologies Used](#technologies-used)
  - [Acceptance-Criteria](#acceptance-criteria)
  - [Demo](#demo)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [Contact](#contact)
  - [License](#license)

&nbsp;

---
# Installation

Instructions: 
1. Fork the application repository from GitHub and clone this project to your machine.
2. Open the project with your preferred text-editor, such as VS code.
3. Prerequisite installations: Node.js, MySQL, React
4. This project includes a `package.json` file that specifies dependencies for this project, which can be installed by running the command `"npm install"`
5. Run command "npm start" to start the react app on your local host server. It will automatically open

&nbsp;


## Usage 
---
After following the instructions in installation: 
1. Open the database file in your terminal. 
2. Run command "mysql -uroot -p" and enter your password (note: keystrokes will not show).
3. Run command "SOURCE schema.sql" to set up the database and tables.
4. Optionally, run command "npm run resetdb" to replace steps 2 and 3 (enter password when prompted).
5. OK to 'quit' MySql.
6. Create a file called ".env" in the root folder of the program. In this folder include the following information: <br>
DB_NAME='' <br>
DB_USER='' <br>
DB_PW='' <br>
JWT_SECRET=''<br>
7. Open the "index.js" file in your integrated terminal. 
8. Run command "npm run seed" (or "node seed/seed.js") to seed the database if desired.
9. Run command "npm run start" (or "node index.js"). Alternatively, if you have Nodemon installed, run "npm run watch" (or "nodemon index.js"). 
10. Open 'localhost:3001' in your browser and see the site in action.
11. When finished, run CONTROL-C in terminal to end stop nodemon, and trash the session. 
<br>


---
# User Story

AS A USER, I want:
1. to be able to filter garage sales by location, date, and category, SO THAT I can search for specific items or sales based on my preferences
2. to be able to update my profile to include item categories I am interested in

&nbsp;

---
# Technologies Used

General Technologies: 
- [HTML](https://html.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.javascript.com/)
- [Node](https://www.npmjs.com/package/node)
- [Heroku](https://www.heroku.com/)
- [React](https://reactjs.org/)
- [Google Maps API](https://developers.google.com/maps)

&nbsp;

---
# Acceptance-Criteria
Project requirements:
- Must use a Node and Express web server
- Must be backed by a MySQL database with a Sequelize ORM 
- Must have both GET and POST routes for retrieving and adding new data
- Must be deployed using Heroku (with data)
- Must utilize at least one new library, package or technology that we haven't discussed
- Must have a front end/UI built on React
- Must have a folder structure that meets the MVC paradigm
- Must meet good-quality coding standards (indentation, scoping, naming, etc.)
- Must protect API keys in Node with environmental variables

&nbsp;

---

# Screenshots

## Homepage
![Homepage](./public/Assets/Homepage%20Demo.gif)

## Signup Page
![Signup](./public/Assets/Upload%20Demo.gif)

## Sale Event Page
![Event](./public/Assets/Editor%20Demo.gif)

## Page
![Updating Account](./public/Assets/UpdateAccount.gif)

&nbsp;

---
# Contributing

This project was completed as a collaborative group for Project 3 from the University of Washington Web Development Bootcamp. If you would like to contribute, please feel free to contact any of the team members with questions or comments.

&nbsp;

---
# Credits
- [Google Maps API](https://developers.google.com/maps) - map API

---
# Contact

If you have any questions feel free to contact our team:
- Andrew Ryu | [Github](https://github.com/ryuandrew) | [email](andrewryu@outlook.com)
- Bakary Sylla | [Github](https://github.com/Abou2022) | [email](syllabakary2002@gmail.com)
- Brian Bixby | [Github](https://github.com/brianbixby) | [email](BrianBixby0@gmail.com)
- Joe Choe | [Github](https://github.com/jchoe125) | [email](joechoe125@gmail.com)

&nbsp;

---
## License

[MIT License](./LICENSE) 

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
