import { test, Selector } from "testcafe";
import mortgageCalculatorPage from "../pages/mortgageCalculatorPage.js";
import { testData } from './testData.js';
import { baseUrl } from "../helper/configuration.js";

fixture `Home Mover Mortgage Calculator`
    .page(baseUrl) 

    testData.forEach(data => {
        test(`Home Mover Mortgage Calculator TC_HMM_001 to TC_HMM_008 - ${data.whatToDo} - ${data.firstHome} - ${data.salary} - ${data.homeBuyingJourney}`, async t => {
            await mortgageCalculatorPage.performMortgageCalculation(data,'homeMover');
        });
    });