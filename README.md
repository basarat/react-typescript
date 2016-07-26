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

**Checking**

* Misspell the component (Hellow)
* Misspell an attribute (compler)
* Invalid type for an attribute (compiler={123})
* Add an invalid attribute (message)

**Refactoring**

* Add a new attribute (message: string)
* Change the type of an attribute (message: number)
* Rename an attribute (message -> messages)
* Rename the component (Hello -> HelloPeople)