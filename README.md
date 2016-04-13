## A full stack web application framework

- A preconfigured MEAN/LAMP web app, ready for API, database and mail activity.
- Includes a modified version of Bootstrap with attribute modules and SASS modules.
- Front-end functionality and routing is managed with AngularJS.
- Precompiling and minification is handled with Codekit and Grunt.

## Use as MEAN application

**Remove LAMP directory**

`sudo rm -rf ./LAMP`

**Install & build**

`npm run install`

`npm run build`

**Setup preprocessing**

Drag `./public` into Codekit

**Start in development mode**

`npm run dev`



## Use as LAMP application

**Move & alter MEAN files**

`mv ./public/* ./ && sudo rm -rf ./package.json ./Gruntfile.js ./README.md ./server.js ./server ./public ./index.html ./directives ./views ./framework/js/routes ./framework/js/run`

**Move LAMP files**

`mv ./LAMP/* ./ && sudo rm -rf ./LAMP`

**Install & build**

`npm run install`

`npm run build`

**Edit JS files**

Remove all `run` and `routes` includes and the `ngRoute` dependency injection in `/framework/js/config/config.js`

**Setup preprocessing**

Drag project into Codekit and compile JS