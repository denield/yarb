# YARB - Yet Another React Boilerplate

*Just as much as you need, nothing more, nothing less*

![Set it up in seconds](https://github.com/denield/yarb/raw/master/yarb.gif)

If you have done this dozens of times and don't want to do it again, this is for you. Transpile ES7/JSX, launch a dev server, build for production, run tests right out of the box.

If you have never used React before, you might want to start [here](https://github.com/facebook/create-react-app) instead and come back a little later.

## The Stack

As simple as possible. You have everything you need to start to build and test. You can add any extra you will need at the time you need it.

- [React 16](https://reactjs.org/) (Front-end)
- [Babel 7](https://babeljs.io/) ([preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env), [preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)) (Transpiler)
- [Webpack 4](https://webpack.js.org/) (Module bundler)
- [Jest 22](https://facebook.github.io/jest/) (Unit test runner)
- [Cypress 2.1](https://www.cypress.io/) (Integration test runner)

The build size is 100KB (~33KB gzipped).

## Requirements
- Node JS 8 (probably will work with 6 but haven't tested)

## How to use

First, install the dependencies:
```
$ npm install
```

Then you can use the following commands:

```
$ npm start     // run the development server with hot reloading feature enabled on http://localhost:8080
$ npm run build // create production build into the dist/ folder
$ run run test:server // run a static http server with the production build (not to be used in production!)
$ npm run test:unit  // run jest tests
$ npm run test:integration  // run cypress tests (you need to run the test server in parallel)
$ npm run test  // run both unit and integration tests (regression)
```

Note: To run the integrations tests, you need to create a production bundle (`npm run build`) first and then you also has to start a server which will serve this build (`npm run test:server`). You only will be able to successfully run the command (`npm run test` or `npm run test:integration`) thereafter. While you can run the tests against the development server (`npm start`) as well, it is not recommended because it is not guaranteed that your development bundle will behave exactly the same as your production build.

## Where to start to develop

I'd suggest to take a look on the whole thing to understand how it works. It has few enough dependency to not to make it hard to understand but for a quick demo you can start the development server (`npm start`), go to [`http://localhost:8080`](http://localhost:8080) in your browser and change `Hello World` in `src/app.jsx` to something else. Just make sure to save the changes and they should appear in the browser right away. ;)

## FAQ

#### Why is this for?

I like to create things in React but does not like the fact I always need to create everything from the ground. Putting a lot of time into it just to get to the point where I finally can start to do the real work can be frustrating.

> Oh, I had this weird Jest error last time too, but what was the solution?

> Oh, no, why can't I use this syntax in my test when it perfectly works in the app?

Have you ever experienced anything like the above? This is to avoid them for good.

#### React does not supposed to be handle the state, it is the View, this is half-done.

That's not the whole truth actually, for eg.: React is more than enough to handle the state of a demo app built to test a couple of API endpoints. You still can add and use [Redux](https://redux.js.org/), [MobX](https://mobx.js.org) or whatever would fit your need but only [when you really need it](https://redux.js.org/docs/faq/General.html#when-should-i-learn-redux).

#### I need SEO but this is a Single Page App which only renders on the client, what can I do?

Go isomorphic by [yourself](https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a) or leave [Next.js](https://learnnextjs.com/) to handle it for you.

#### I don't need Jest/Cypress, why did not you go with React only?

It's fairly easy to remove and replace them to something else but I felt that they are popular enough to deserve to be the test runners here. Just so you can start to test your app right out of the box!