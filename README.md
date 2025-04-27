# Articles Application

This is a simple application that fetches the most viewed articles from the New York Times API and displays them in a list.

## How to run/start it

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create a ".env" file in the root folder of the application with the "NEXT_PUBLIC_API_KEY" key and the value would be the API key from NYC times so that articles can be fetched
4. Start the application with `npm run dev`
5. Open your web browser and navigate to `http://localhost:3000`
6. Application should retrieve articles and user should be able to click on an article to view the article details page

## How to run Cypress testing

1. Make sure localhost:3000 is running in your browser and then run `npm cypress open`
2. Cypress will open in your default web browser
3. Select `E2E Testing`
4. Choose browser and click the `start E2E testing` button
5. When you're in `Specs` tab, Click on `home_page.cy.js` to run the Cypress tests

## How to run Jest testing

1. Run `npm run test`
2. Jest will run all the tests

Note: Make sure you have the `NEXT_PUBLIC_API_KEY` environment variable set with your New York Times API key.
