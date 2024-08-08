import { test, Selector } from "testcafe";
import mortgageCalculatorPage from "../pages/mortgageCalculatorPage.js";
import { testData } from './testData.js';
import { baseUrl } from "../helper/configuration.js";

fixture `First Time Buyer Calculator`
    .page(baseUrl) 

    testData.forEach(data => {
        test(`First Time Buyer Calculator TC_FTM_001 to TC_FTM_008 - ${data.whatToDo} - ${data.firstHome} - ${data.salary} - ${data.homeBuyingJourney}`, async t => {
            await mortgageCalculatorPage.performMortgageCalculation(data);
        });
    });