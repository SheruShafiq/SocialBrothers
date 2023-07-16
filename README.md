# **Social Brothers Skill Assesment Web App**

> ## _Tech Stack_

- React: TypeScript
- Compiler: Vite
- Styles: SCSS

> ## The API

- The API used throughout the App is *https://frontend-case-api.sbdev.nl/api/*
- Both fetch and mutation calls require an API key which can be passed in the header.
  The key name is `token` and the value is stored in the .env file.
- Further documentation on the API can be found [here](https://documenter.getpostman.com/view/3923287/UVJWrfnK)

> ## App Strucure

- The App consists of two pages `Home` and `Posts`.
  `Home` is the landing page that consists of a form to make new posts and a list of the 4 latest posts.
  The form accepts a title, a banner image, and a description. The data is then sent to the API provided by Social Brothers. The latest posts preview section (Also known as `postsComponent` in the `src/components` folder) is a reusable component that is also used on the `Posts` page. `Posts` also supports pagination and filtering by title as well as some skeleton loading for a better user experience.
- The mentatlity behind the building of this project was a pageless aproach that I have with all my work, I learnt to work with this mentality at Aer Software Solutions. The idea is to make sure that every aspect of the app is a reusable component. Hence even if the pages directory was removed, so long as the components are strucutred and called with the apropriate data according the designs as props. I should be able to remake the whole pages directory in under 30 minutes.

# **Getting started**

## Running the App locally

- Minimum Reqiurements: Node.js v14.17.0

### Install dependencies

```
npm install
```

### Running the app locally

```
npm run dev
```

---

## Building the app for deployment

### Build command

```
npm run build
```

- The build will be located in the `dist` folder.

## Testing (Cypress)

### You can open the Cypress testing suite using

```
npx cypress open
```

- The `src/tests` folder contains all the necassary component tests. Which will also be visible in the
  testing suite.
- More documentation on Cypress can be found at [Cypress Docs](https://docs.cypress.io/)

### Testing deployed build (Netlify):

*https://64b403f441c2c541f0fabdb5--lucky-alpaca-148ec7.netlify.app/*
