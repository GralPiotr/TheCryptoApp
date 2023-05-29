## The Crypto App
The Crypto App is a simple cryptocurrency tracker built using Angular and TypeScript. The application provides real-time cryptocurrency information fetched from a free API and enables users to explore detailed data about individual cryptocurrencies.
## Key Features
1.	Cryptocurrency List: Displays a list of top cryptocurrencies along with brief details such as their current price, change percentage, market cap, etc. This data is fetched from an external API and is cached to reduce the number of requests.
2.	Cryptocurrency Details: Users can click on any cryptocurrency from the list to view detailed information about it. The details page also includes a performance graph, which displays the price trend of the selected cryptocurrency over the past month.
3.	Google Sign-In: Implemented a simple sign-in feature using Google OAuth. Users can log into the application using their Google account. Once logged in, users' details (name and profile picture) are displayed in the application header.
## Technologies Used
1.	Angular: The application is built using the Angular framework, which is known for its robustness and scalability.
2.	TypeScript: TypeScript, a statically typed superset of JavaScript, is used for building the application. TypeScript provides additional features like type safety and autocompletion which improves developer productivity and reduces runtime errors.
3.	Material UI: Material UI is used for designing the user interface. This provides a modern, responsive design to the application.
4.	Chart.js and ng2-charts: These libraries are used for rendering the performance graph in the cryptocurrency details page.
5.	@abacritt/angularx-social-login: This library is used for implementing the Google Sign-In feature.
6.	WebStorm: WebStorm, an IDE by JetBrains, is used for developing the application. It provides a rich set of features like intelligent code completion, on-the-fly error detection, and powerful navigation and refactoring for JavaScript, TypeScript, stylesheet languages, and popular frameworks.
## Project Structure
The application is organized into modules and services for better scalability and maintainability. Here is a brief overview of the project structure:
*  src/app: The main application directory, containing all the application files.
* 	src/app/cryptos: The Cryptos module, responsible for displaying the list of top cryptocurrencies.
* 	src/app/crypto-details: The CryptoDetails module, responsible for displaying detailed information about a selected cryptocurrency.
* 	src/app/shared/services: Contains services used across the application, including the CryptoService which interacts with the external API, and the CacheService which caches the API responses to reduce the number of requests.
## Future Improvements
While the application is functional and provides key features, there are a few enhancements that could be added:
* Pagination: Currently, the app shows only a limited number of cryptocurrencies in the list. Adding pagination would allow users to navigate through the entire list of available cryptocurrencies.
* Search: Implementing a search feature would enable users to easily find and view details of any cryptocurrency they are interested in.
* User Preferences: With the login feature in place, user preferences could be stored and remembered across sessions. For example, users could bookmark their favorite cryptocurrencies.
* More Granular Performance Data: While the application currently shows the price trend for the past month, providing options to view performance data for different periods (like 1 week, 3 months, 1 year, etc.) would offer a more detailed perspective to users.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
