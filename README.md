# React + TypeScript Boilerplate

This project is a React + Redux + Typescript boilerplate that contains setup ideas I have picked up from 
years of writing React. 


This setup leverages atomic design concepts and uses several

## Tools used

#### [@emotion](https://emotion.sh/docs/introduction)

This project setup leverages atomic design principles and uses Emotion to create styled component.


## Starting the project
You can start the project by running: 

```bash
npm run start
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
