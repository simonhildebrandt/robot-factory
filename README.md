# Robot Factory Code Test

To get started, make sure you have your Node package manager of choice installed, and then install all the dependencies, something like this:

```
npm install
```

# Development

Building the code is broken up into stages, each represented by a script described in the `package.json` file. First, we use [Babel](https://babeljs.io/) to transliterate the Typescript, ES6, JSX files into plain ES5 files:

```
npm run babel
```

Then we package those files for the web using [Browserify](http://browserify.org/):

```
npm run browserify
```

(Babel is configured to stay running, watching source files for changes - we can do the same with Browserify using Watchify:)

```
npm run watchify
```

Once we've got a build sitting in our public directory was can display it using `live-server`:

```
npm run serve
```

...which will automatically open a browser window, and will wire up a page refresh on code changes.

# Testing

Testing is done using `babel-jest`, to handle the same transliteration configuration we use for browser code.

```
npm run test
```

Jest runs in Node, though, and so we need to do a little extra to get the code running - we use the `babel-polyfill` to get browser-style `async/await` calls, and we need a transform for the spread operator: `@babel/plugin-proposal-object-rest-spread`.

# Notes

I would have liked to flesh out my implementation more, but this week I have a cold, and serious time constraints - so instead I focused demonstrating a solid build process with all the required machinery (React, Redux, Typescript and Jest) and a skeleton of my approach (async network and Redux actions, snapshot testing, functional modern Javascript.)
Unfortunately Babel, my preferred transliteration tools, are currently moving to version 7, and the transition is a really difficult one, which ate quite a lot of time.
