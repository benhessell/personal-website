# Template_React-Basic

### Description
This template is for react apps with no back-end set up

### Set Up
Need to use node v16 to run this. Get nvm then do 'nvm use 16'.
To install dependencies do 'yarn', not npm install.
To add a dependency use 'yarn add xxxx' or 'yarn add --dev xxxx', not npm install xxxx.
Might need to install serve globally to test the build state (yarn global add serve)

### Scripts
-build -> builds
-start -> uses webpack serve and then opens
-build-run -> builds and then opens built code locally to test built state
-test -> run Jest and execute the tests
-test:watch -> run all test on watch mode, so if you make changes to tests, it will execute them again.
-test:coverage -> generate coverage report on all tests it executes 

### Routing
Currently using Hash Routing to deploy easier, to change to Browser routing just change the import from HashRouter to BrowserRouter, then remove the # in front of each route link anchor

### Additional modules
For apis: (yarn add axios)

### Adding pages
To add a page, go to Routes and add a page in the same format to Home. Then add a new file to the pages folder

### Tests
Add a test in the same folder as the script, see example in pages/Home.

### Styles
Every styles file you create, add it to the index.scss file. Assets contain base colors, fonts and variables

### Extras
For working on work mac: do 'nvm use 12.22.10' in order to handle node-sass
Otherwise you get error like:
'Node Sass does not yet support your current environment: OS X Unsupported architecture (arm64) with Unsupported runtime (93)'