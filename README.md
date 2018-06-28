# Typescript Workshop

This repo is intended to help teach the basics about TypeScript and some of the features that it has to offer to developers.

The repo contains a number of examples of different things that can be done with TypeScript and JavaScript.

The topics that are covered inside this repo are listed below:
  * [Arrays](./src/arrays/arrays.ts)
  * [Classes](./src/classes/classes.ts)
  * [Declarations](./src/declarations/declarations.ts)
  * [Deconstruction](./src/deconstruction/deconstruction.ts)
  * [Enumerators](./src/enumerators/enumerators.ts)
  * [Exports](./src/exports/exports.ts)
  * [Functions](./src/functions/functions.ts)
  * [Interfaces](./src/interfaces/interfaces.ts)
  * [Iterators](./src/iterators/iterators.ts)
  * [Objects](./src/objects/objects.ts)
  * [Promises](./src/promises/promises.ts)
  * [Template Strings](./src/template-strings/template-strings.ts)
  * [Data Types](./src/types/types.ts)

To make use of this repo, its necessary to have [Node.js](https://nodejs.org/en/) installed in your computer.

It is also recommended to use [Visual Studio Code](https://code.visualstudio.com/) as your code editor.

After you have downloaded the repo run the command `npm install` to install all the needed dependencies.

With evrything installed you can make use of two different commands inside the repo:
  * `npm run tsc` This command runs the TypeScript transpiler, that inspects all the `.ts` files and tranpsiles them into their JavaScript ES6 equivalents. To run the JavaScript generated files, use the command `node <path to .js file>`.

  * `npm run ts-node` This command runs the TypeScript-Node REPL, which is a real time TypeScript terminal, so you can write TypeScript code inside the terminal without the need of transpiling.