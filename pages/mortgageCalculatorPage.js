import { Selector, t } from "testcafe";
import homePage from "../pages/homePage.js";


const whatToDoSelector = (text) => Selector('.sc-uVWWZ.gWSlSS.csl-selector-item__button.question-0-option-0').withText(text);
const firstHomeSelector = (text) => Selector('[class^="sc-uVWWZ gWSlSS csl-selector-item__button"]').withText(text);
const homeBuyingJourneySelector = (text) => Selector('[class^="sc-uVWWZ gWSlSS csl-selector-item__button"]').withText(text);
const peopleApplyingSelector = (text) => Selector('span.sc-uVWWZ.gWSlSS.csl-selector-item__button.question-5-option-0').withText(text).find('div[data-qa-id="question-5-option-0-text"]');
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

class mortgageCalculatorPage {

    constructor() {
        this.firstTimeBuyerCalculatorButton = Selector('span').withText('First time buyer calculator').nth(1)
        this.homeMoverCalculatorButton = Selector('span').withText('Home mover calculator').nth(1)
        this.howMuchCouldIBorrowButton = Selector('span').withText('How much could I borrow?');
        this.howMuchWillItCostMeButton = Selector('span').withText('How much will it cost me?');
        this.bothButton = Selector('span').withText('Both');
        this.cookies = Selector('#accept')

}
      
async performMortgageCalculation(data, calculatorType = 'firstTimeBuyer') {
    // handle cookies if present
    const handleCookies = async () => {
        if (await this.cookies.exists) {
            await t.click(this.cookies);
        }
    };

    await t.maximizeWindow()
           .setNativeDialogHandler(() => true)
           .click(Selector(homePage.tryOurMortgageCalculator));    
    await handleCookies();

    // Click appropriate calculator button
    const calculatorButton = calculatorType === 'homeMover'
        ? this.homeMoverCalculatorButton
        : this.firstTimeBuyerCalculatorButton;

    await t.click(calculatorButton);

    // form filling
    await t
        .click(whatToDoSelector(data.whatToDo))
        .click(firstHomeSelector(data.firstHome))
        .click(homeBuyingJourneySelector(data.homeBuyingJourney))
        await t.click(peopleApplyingSelector(data.peopleApplying))
        .click(continueButton)
        .click(whatToKnowSelector(data.whatToKnow))
        .click(continueButton)
        .click(employmentStatusSelector(data.employmentStatus))
        .typeText(salaryInput, data.salary)
        .click(additionalIncomeSelector(data.additionalIncome));
        await handleCookies();

    await t
        .click(continueButton)
        .click(dependentsSelector(data.dependents))
        .click(continueButton)
        .typeText(creditCardBalanceInput, data.anycreditcardbalance)
        .typeText(loanPayBackMonthlyInput, data.anyloanspaybackmonthly)
        .typeText(monthlyExpenseInput, data.anyothermonthlyexpense)
        .click(getResultButton);

    // Validate the result
    const resultTextContent = await resultText(data.expectedQuote).innerText;
    await t.expect(resultTextContent).eql(data.expectedQuote);
}
    
    
    
}
export default new mortgageCalculatorPage()