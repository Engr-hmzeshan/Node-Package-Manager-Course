# GET VERSION

npm -v (or --version)

# GET HELP

npm help
npm

# Package.JSON File

This File contain the dependencies of the projects or in other word the module/ packages that needs to run the project we can start with npm int

# CREATE PACKAGE.JSON

**npm init**

This will create a default package.json file with a few questions.

npm init -y (or --yes)

This allow us to accep all answers and create a default package.json file.

# SET DEFAULTS

npm config set init-author-name "YOUR NAME"
npm set init-license "MIT"

# GET DEFAULTS

npm config get init-author-name
npm get init-license

# REMOVE DEFAULTS

npm config delete init-author-name
npm delete init-license

# INSTALLING LOCAL PACKAGES

When we install local module i.e lodash we should consider depandencies in attensions cause whenever the other devolpers use or clone the project they simply install npm which automatically install the local production dependiencies which an app needs to start.
The commands are below;

npm install lodash --save (or npm install --save lodash)
npm install moment --save

The other dependency we take care of is dev-dependencies cause we use them during our production so no need to save in local dependencies i.e gulp or babel etc for compiling the code.

npm install gulp gulp-sass --save-dev

# MOVE TO ANOTHER FOLDER

If we wanna install every dependencies i.e dev and local we simply run

**npm install**.

To install only local dependencies we simply type

**npm install --production** in cloned folder to run the app in other folder

# REMOVING MODULES

npm uninstall gulp-sass --save-dev
npm remove gulp --save-dev

# INSTALL CERTAIN VERSIONS

npm install lodash@4.17.3 --save

# UPDATE

npm update lodash --save

This will only updated the minor and patch versions in our current project directory, so that application not crashed.

npm i -g npm-check-updates

This will install the npm-check-updates package globally so that we can update outdated dependencies in one command **ncu**

ncu -u

Firstly, we install npm-check-update and then use this command to update the package.json file. This will update the major versions in all package.json file when we run the command **npm i**

# OUTDATED

To check the outdated package globally or locally we use the following commands;

npm outdated

npm -g outdated

# PUBLISH

This is another usefull feature in npm registery, through this we can create our own modules and publish them on npm registery.

In order to publish packages or modules on npm we need to follow some steps;

- Create an account or sign in if existing one with npm account.

**npm adduser or login**

- Create a directory includes all dependencies and modules that needs to be publish

- Run **npm publish** to publish the first version of module

## UPDATE THE MODULE

We can add more features in module(minor), resolve bugs(patch) or even change the syntex of module(major).

After every change in module we need to republish the module by using **npm version minor|major|patch** command and select the type of change in the module.

Finally run **npm publish** to publish on npm registery.

# View Registory

npm view **packagename**
npm view **mongoose** dependencies
npm view **lodash** versions

# Sematic Version Desciption

Let say we have a version of any module is **4.17.2**. We split it up in three parts;

1. Patch Version(.2)
   In this version only bugs fixes by module providers so, no app breaks
2. Minor version(.17)
   In this version new features were added o the app still not breaks and we can use the updated features
3. Major Version(4)
   This version update the syntex of the module so, the app breaks until we update the syntex of the app

# Sematic Version Symbol Description(^~\*)

Let say we have a version **4.17.2** we can write it as follow;

1. **^4.17.2**
   This will install the latest minor version if it's updated. We can also write this as ^4.x
2. **~4.17.2**
   This will install the latest patch version if it's updated. We can also write this as ~4.17.x
3. **4.17.2**
   This will install the exact same version either it is updated or not
4. lodash:{**'\*'**} (not Recommended)
   This will install the latest updatedversion.

# INSTALL GLOBAL MODULE

We install the global module cause we need them in every project i.e live server
npm install -g nodemon
**npm install -g live-server** and to run we use **live-server** on project folder.

# RUN NODEMON

nodemon

# FIND ROOT FOLDER

npm root -g

# REMOVE GLOBAL PACKAGES

npm remove -g nodemon

# LISTING PACKAGES

We can see the local and dev dependencies by using these commands

npm list
npm list --depth 0
npm list --depth 1

# INSTALL LIVE-SERVER LOCALLY

npm install live-server --save-dev

# NPM SCRIPT

"scripts": {
"start": "node index.js",
"dev": "live-server"
},
