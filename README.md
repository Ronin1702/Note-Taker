# Note Taker [![GPLv3](https://img.shields.io/static/v1.svg?label=📃%20License&message=GPL%20v3.0&color=important)](./LICENSE)

* This is an application called ***Note Taker*** that can be used to write and save notes.
* This application will use an *Express.js* back end and will save and retrieve note data from a *JSON* file.
* This application is also deployed to [*Heroku*](https://www.heorku.com).

## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Links](#links)
* [License](#license)

## Description

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

[*back to top*](#table-of-contents)

## Technology

* [![Heroku CLI](https://img.shields.io/badge/Heroku-v8.1.9-informational?logo=heroku)](https://devcenter.heroku.com/articles/heroku-cli)
* [![Node.js](https://img.shields.io/badge/Node.js®-v20.4.0-blue?logo=node.js)](https://nodejs.org/en)

* [![npm](https://img.shields.io/badge/npm-v9.7.2-blue?logo=npm)](https://docs.npmjs.com/cli/v9/)
  * [![Express Package](https://img.shields.io/badge/Express-4.18.2-green?logo=express)](https://expressjs.com/)
  * [![Inquirer Package](https://img.shields.io/badge/Inquirer-9.2.7-green?logo=npm)](https://www.npmjs.com/package/inquirer)
  * [![Jest Package](https://img.shields.io/badge/Jest-29.6.1-green?logo=npm)](https://www.npmjs.com/package/jest)
  * [![Mock-fs Package](https://img.shields.io/badge/Mock--fs-5.2.0-green?logo=npm)](https://www.npmjs.com/package/mock-fs)
  * [![Nodemon Package](https://img.shields.io/badge/Nodemon-3.0.1-green?logo=nodemon)](https://nodemon.io/)

[*back to top*](#table-of-contents)

## Installation

* Packages to support this application can be installed by using [*npm install*](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

> **Note**: If you do not have a `package.json` in your directory already, enter command below to [*initiate*](https://docs.npmjs.com/cli/v9/commands/npm-init).
>
>```bash
>npm init -y
>```
>
>```bash
>npm i express@4.18.2 inquirer@9.2.7 jest@29.6.1 mock-fs@5.2.0
>```
>
> **Important**: Make sure to @ the **EXACT** versions as shown above.

[*back to top*](#table-of-contents)

## Usage

* This application can be invoked by using the following command:

```bash
npm start
```

* Workflow:

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Tests

> **Note**: You must have ***Express***, ***Jest***, ***Mock-fs*** and ***Inquirer*** packages installed before running any tests. See [Installation](#installation).

* To run a specific test *e.g.* `index.test.js`, use the command below:

```bash
npm run test index.test.js
```

* To run all tests at once, use the command below:

```bash
npx jest
```

[*back to top*](#table-of-contents)

## Links

[![Tweet about this](https://img.shields.io/static/v1.svg?label=Tweet%20about%20this&message=🎵&color=blue&logo=twitter&style=social)](https://rb.gy/kh9be)

* GitHub Repo: [Note-Taker](https://github.com/Ronin1702/Note-Taker)
<!-- * ![Screenshot1](./examples/) -->
<!-- * ![Screenshot2](./examples/) -->
[*back to top*](#table-of-contents)

## License

* This application is licensed by [![GPLv3](https://img.shields.io/static/v1.svg?label=📃%20License&message=GPL%20v3.0&color=important)](./LICENSE).

[*back to top*](#table-of-contents)
- - -
![Copyright](https://img.shields.io/static/v1.svg?label=Note%20Taker%20©️%20&message=%202023%20Kai%20Chen&labelColor=informational&color=033450)
