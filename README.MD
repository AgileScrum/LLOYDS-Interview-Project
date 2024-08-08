# Lloyds Interview Project

This is the Lloyds Interview Project, designed to demonstrate the implementation of automated tests using TestCafe.

## Description

The Lloyds Interview Project is set up to run various automated tests using TestCafe.

The tests include regression tests, home page tests, mortgage calculator tests, register tests and log on page tests. Each test script is configured to take screenshots and videos on failure.

## Installation

To get started with this project, clone the repository and install the dependencies using npm:

```sh
git clone https://github.com/AgileScrum/LLOYDS-Interview-Project.git
npm install
npm install testcafe@3.6.0 --save-dev
```

## Configuration

This project uses environment variables to manage different environments. Ensure that the following environment variables are set:
Each script will set the appropriate environment variables.

For local Environment
```sh
$env:ENV_NAME = 'local'
$env:LOCAL_ENV_DNS = 'localhost:3000'
```
For Test Environment
```sh
$env:ENV_NAME='test'
$env:TEST_ENV_DNS='lloydsbank.test.com'
```
For Pre-production Environment
```sh
$env:ENV_NAME='pre-prod'
$env:PREPROD_ENV_DNS='lloydsbank.pre.com'
```
For Production Environment
```sh
$env:ENV_NAME='prod'
$env:PROD_ENV_DNS='lloydsbank.com'
```
## Usage

Running Tests

Once you configured ENV_NAME and ENV_DNS variable, the following scripts are available to run the tests:

Run Regression Tests: This command runs all regression test scripts located in the testScript folder.

```sh
npm run testRegression
```

Run Home Page Tests: This command runs the test script for the home page.

```sh
npm run testHome
```
Run Log On Page Tests: This command runs the test script for the log on page.

```sh
npm run testLogOn
```
Run Register Page Tests: This command runs the test script for the register page.

```sh
npm run testRegister
```
Run First Time Mortgage Calculator Tests: This command runs the test script for the first time mortgage calculator

```sh
npm run testFirstTimeCal
```
Run Home Mover Mortgage Calculator Tests: This command runs the test script for the home mover mortgage calculator

```sh
npm run testHomeMoverCal
```

## This Command Runs The Test Execution Report

```sh
node report-generator.js
```

## Here is a summary of the available scripts in the package.json file:

1. testRegression: Runs all regression tests in the testScript folder.

2. testHome: Runs the home page test script.

3. testLogOn: Runs the log on page test script.

4. testRegister: Runs the register page test script.

5. testFirstTimeCal: Runs the first time mortgage calculator test script.

6. testHomeMoverCal: Runs the home mover mortgage calculator test script.
