import { test, Selector } from "testcafe";
import homePage from "../pages/homePage.js";
import mortgageCalculatorPage from "../pages/mortgageCalculatorPage.js";
import { testData } from './testData';


const whatToDoSelector = (text) => Selector('.sc-uVWWZ.gWSlSS.csl-selector-item__button.question-0-option-0').withText(text);
const firstHomeSelector = (text) => Selector('[class^="sc-uVWWZ gWSlSS csl-selector-item__button"]').withText(text);
const homeBuyingJourneySelector = (text) => Selector('[class^="sc-uVWWZ gWSlSS csl-selector-item__button"]').withText(text);
const peopleApplyingSelector = (text) => Selector('div[data-qa-id="question-5-option-0-text"]').withText(text);
const whatToKnowSelector = (text) => Selector('span.sc-gEvEer.exIfeM.csl-typography.csl-text-s2').withText(text);
const employmentStatusSelector = (text) => Selector('span.sc-gEvEer.exIfeM.csl-typography.csl-text-s2').withText(text);
const additionalIncomeSelector = (text) => Selector('span.sc-gEvEer.exIfeM.csl-typography.csl-text-s2').withText(text);
const dependentsSelector = (text) => Selector('span.sc-gEvEer.exIfeM.csl-typography.csl-text-s2').withText(text);
const salaryInput = Selector('#applicantOneBasicIncome');
const creditCardBalanceInput = Selector('#appOneCrdCardBlnc');
const loanPayBackMonthlyInput = Selector('#appOneLoanToPay');
const monthlyExpenseInput = Selector('#appOneMnthlyPymnts');
const continueButton = Selector('button').withText('Continue');
const getResultButton = Selector('button').withText('Get results');
const resultText = (text) => Selector('span.sc-gEvEer.lbrYjM.csl-typography.csl-heading-s5').withText(text);

fixture `First Time Buyer Calculator`.only
    .page `https://www.lloydsbank.com`; 

testData.forEach(data => {
    test(`Complete Calculator - ${data.whatToDo} - ${data.firstHome} - ${data.salary} - ${data.homeBuyingJourney}`, async t => {
        await t.maximizeWindow();
        await t.click(Selector(homePage.tryOurMortgageCalculator));
      
        if (await mortgageCalculatorPage.cookies.exists) {
            await t.click(mortgageCalculatorPage.cookies);
        }
        await t.click(mortgageCalculatorPage.firstTimeBuyerCalculatorButton);
        
        await t.click(whatToDoSelector(data.whatToDo));
        await t.click(firstHomeSelector(data.firstHome));
        await t.click(homeBuyingJourneySelector(data.homeBuyingJourney));
        await t.click(peopleApplyingSelector(data.peopleApplying));
        await t.click(continueButton);

        await t.click(whatToKnowSelector(data.whatToKnow));
        await t.click(continueButton);

        await t.click(employmentStatusSelector(data.employmentStatus));
        await t.typeText(salaryInput, data.salary);
        await t.click(additionalIncomeSelector(data.additionalIncome));
        if (await mortgageCalculatorPage.cookies.exists) {
            await t.click(mortgageCalculatorPage.cookies);
        }
        await t.click(continueButton);

        await t.click(dependentsSelector(data.dependents));
        await t.click(continueButton);
        await t.typeText(creditCardBalanceInput, data.anycreditcardbalance);
        await t.typeText(loanPayBackMonthlyInput, data.anyloanspaybackmonthly);
        await t.typeText(monthlyExpenseInput, data.anyothermonthlyexpense);
      
        await t.click(getResultButton);

        const resultTextContent = await resultText(data.expectedQuote).innerText;
        // Assert that the text content matches the expected quote
        await t.expect(resultTextContent).eql(data.expectedQuote);
            
    });
});
