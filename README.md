# Objective
Provide a simple setup steps that can fit in one page.

This is a sample project from the TypeScript book : [*TypeScript Deep Dive*](https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html).

# Setup

* Kick off
```
git clone https://github.com/basarat/react-typescript.git
npm install
npm start
```

* Now visit `http://localhost:8080` in your browser to see the results. 
* Edit a TypeScript file in the `src/app` folder and your browser will refresh automatically with the new application code.
* When you are ready to deploy your application run `npm run build` and ship the `public` folder to some web server.

# Things worth demoing

**Setup**
> The following files are where the magic happens.

* package.json 
* tsconfig.json
* webpack.config.js
* index.html
* app.tsx

**Why React**
> UI as data. Allows you to use your standard JavaScript code patterns to maintain UI applications.

* `console.log(<div>Hello world</div>)`;
* `console.log(ReactDomServer.renderToString(<div>Hello world</div>))`;

**Checking**
> TypeScript type checking!

* Misspell the component (Hellow)
* Misspell an attribute (compler)
* Invalid type for an attribute (compiler={123})

**Refactoring**
> TypeScript refactoring! 

* Add a new attribute (message: string)
* Change the type of an attribute (message: number)
* Rename an attribute (message -> messages)
* Rename the component (Hello -> HelloPeople)

**Usages**
> TypeScript code navigation!

* The component (2 places)
* The attribute (3 places)
