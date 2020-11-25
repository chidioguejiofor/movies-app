# Movie Comments Application

This project creates is allows users to search for movies by name and genre.
It allows users to drop comments about a particular movie.

## Tools used

#### [@emotion](https://emotion.sh/docs/introduction)

This project setup leverages atomic design principles and uses Emotion to create styled-components.

## Installing dependencies
You install dependencies by running:

```bash
yarn
```
## Starting the project
You can start the project by running: 

```bash
yarn  start
```
Since the [create-react-app](https://create-react-app.dev/docs/getting-started) module was used to bootstrap initially, whatever command that worked there should work here as well.


## Linting
Linting has been setup using [eslint](https://www.npmjs.com/package/eslint). You can run fix up the files here by running:

```bash
npm run lint
```

## Commit Template
Once you clone the project you can decide to enforce a commit template by running 

```bash
git config --local commit.template .gitmessage
```
This would open up the `.gitmessage` file anytime you run `git commit`. 
The idea is to make following a commit convention a bit easier.
You can modify the conventions by simply modifying the `.gitmessage` file.

## Explanation of the project's architecture

#### UI Components
This project uses the atomic architectural pattern to build out the UI. 
Each page has a layout which are placed in the `components/layouts` folder. A corresponding smart component(in the `pages/*` folder)  handles the logic for each page and passes down props to the layout.

This separation of concern, allows the developers to easily focus on mock-up or logic but not both at the same time. 

All reuseable components are placed in `components/lib`. Each component is created as a styled-component which greatly reduces the possibility for any CSS rule conflicts. 


## What I would love to add
If I had more time on this project, I would love to:
- add authentication for users. This would make associating a comment to a user more effective. Currently comments are associated to a user by storing the id in localStorage.
- move movies.json data to firebase. 
- adding loading state to the comments layout. This would show when the comments are still coming from firebase.
