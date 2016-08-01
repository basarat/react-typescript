# Objective
Provide a simple setup steps that can fit in one page.

This is a sample project from the TypeScript book : [*TypeScript Deep Dive*](https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html).

# Setup

```
git clone https://github.com/basarat/react-typescript.git
npm install
npm start
```

Now you can open `index.html` in your browser to see the results. Edit a TypeScript file and refresh your browser to play around.

# Things worth demoing

**Setup**

* package.json 
* tsconfig.json
* webpack.config.js
* index.html
* app.tsx

**Why React**

* `console.log(<div>Hello world</div>)`;
* `console.log(ReactDomServer.renderToString(<div>Hello world</div>))`;

**Checking**

* Misspell the component (Hellow)
* Misspell an attribute (compler)
* Invalid type for an attribute (compiler={123})

**Refactoring**

* Add a new attribute (message: string)
* Change the type of an attribute (message: number)
* Rename an attribute (message -> messages)
* Rename the component (Hello -> HelloPeople)

**Usages**

* The component (2 places)
* The attribute (3 places)