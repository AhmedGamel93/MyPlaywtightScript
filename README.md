# SauceDemo Playwright Automation

[![Playwright Tests](https://github.com/AhmedGamel93/MyPlaywtightScript/actions/workflows/playwright.yml/badge.svg)](https://github.com/AhmedGamel93/MyPlaywtightScript/actions/workflows/playwright.yml)

An end-to-end UI test automation framework for [SauceDemo](https://www.saucedemo.com/), built with **Playwright** and **TypeScript**. The suite validates the core shopping journey—from authentication through cart management and order completion—using a maintainable Page Object Model, reusable fixtures, data-driven tests, and Allure reporting.

## What This Project Tests

- Successful and unsuccessful login scenarios
- Data-driven login coverage using JSON test data
- Adding all available products to the cart
- Removing products from the cart
- Checkout form completion
- Subtotal and total-price validation
- Successful end-to-end order completion

## Built With

- [Playwright Test](https://playwright.dev/)
- TypeScript
- [Allure Playwright](https://allurereport.org/docs/playwright/)
- `xlsx` for Excel-based test data
- `csv-parse` for CSV-based test data
- GitHub Actions for continuous integration

## Project Structure

```text
.
├── .github/workflows/
│   └── playwright.yml              # GitHub Actions workflow
├── fixtures/
│   └── homePageFixture.ts           # Logged-in user fixture
├── pages/
│   ├── LoginPage.ts                 # Login page object
│   ├── HomePage.ts                  # Inventory page object
│   ├── cartPage.ts                  # Cart page object
│   ├── checkOutPage.ts              # Checkout details page object
│   └── compeleteOrderPage.ts        # Checkout overview and completion page object
├── test_data/
│   ├── LoginData.json               # Active login test data
│   ├── LoginData.csv                # Alternative data source
│   └── LoginData.xlsx               # Alternative data source
├── tests/
│   ├── 1.LoginTest.spec.ts
│   ├── 2.AddAndRemoveItemsInCart.spec.ts
│   ├── 3.CheckOutTests.spec.ts
│   └── CompeleteOrderTests.spec.ts
├── utils/
│   ├── dataReader.ts                # Selects the data reader by file type
│   ├── csvReader.ts                 # CSV reader
│   └── ExcelReader.ts               # Excel reader
├── playwright.config.ts             # Playwright configuration
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

## Installation

```bash
git clone https://github.com/AhmedGamel93/MyPlaywtightScript.git
cd MyPlaywtightScript
npm install
npx playwright install
```

For Linux or a CI runner, install browser dependencies too:

```bash
npx playwright install --with-deps
```

## Run the Tests

Run the full suite in Chromium:

```bash
npx playwright test
```

Useful alternatives:

```bash
# Run a single file
npx playwright test tests/1.LoginTest.spec.ts

# Run one test by name
npx playwright test -g "Complete Order"

# Watch the browser execute the tests
npx playwright test --headed

# Debug with Playwright Inspector
npx playwright test --debug
```

### Important Local Setup Note

The tests navigate directly to SauceDemo, but the current `playwright.config.ts` also starts a local server with `npm run start` on port `3000`. `package.json` does not currently define a `start` script.

Before running the suite locally, either add a valid `start` script for your application or remove/comment out the `webServer` block in `playwright.config.ts`. For this SauceDemo-only suite, removing that block is the appropriate option.

## Test Data

The login suite reads test cases from `test_data/LoginData.json`. Each enabled record should include:

```json
{
  "username": "standard_user",
  "password": "secret_sauce",
  "expected": "success",
  "run": true
}
```

Set `run` to `false` to skip a dataset without deleting it. The reader also supports `.csv` and `.xlsx`; change the source file in `tests/1.LoginTest.spec.ts` when needed.

## Test Design

The framework separates responsibilities to keep tests focused and maintainable:

- **Page Objects** keep selectors and page actions in one place.
- **Fixtures** create an isolated authenticated browser context for shopping and checkout tests.
- **Test data readers** support JSON, CSV, and Excel-driven test coverage.
- **Playwright artifacts** capture a screenshot and video for each run, plus a trace on the first retry.

## Reports and Debugging

The project uses the line reporter in the terminal and writes Allure result files to `allure-results/`.

Generate and open an Allure report with:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

To inspect a Playwright trace produced after a retry:

```bash
npx playwright show-trace <path-to-trace.zip>
```

## Continuous Integration

The GitHub Actions workflow runs whenever changes are pushed to `main` or `master`, and for pull requests targeting those branches. It:

1. Checks out the repository.
2. Installs Node.js dependencies with `npm ci`.
3. Installs Playwright browsers and operating-system dependencies.
4. Runs the Playwright suite.
5. Uploads the Playwright report as a workflow artifact.

## Recommended Improvements

- Add `allure-results/`, `allure-report/`, `playwright-report/`, and `test-results/` to `.gitignore` if they are not already excluded.
- Add npm scripts such as `test`, `test:headed`, and `report` for shorter commands.
- Keep test credentials and environment-specific URLs in environment variables when testing non-public systems.
- Add assertions after every major business action to make failures more precise.

## Contributing

1. Fork the repository and create a feature branch.
2. Add or update the relevant Page Object and test.
3. Run the complete suite locally.
4. Open a pull request with a concise description of the change and its test coverage.

## Author

Ahmed Gamel — [GitHub](https://github.com/AhmedGamel93)
