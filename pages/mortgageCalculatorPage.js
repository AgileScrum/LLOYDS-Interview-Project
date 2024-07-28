import { Selector, t } from "testcafe";
import homePage from "../pages/homePage.js";



class mortgageCalculatorPage {

    constructor() {
        this.firstTimeBuyerCalculatorButton = Selector('span').withText('First time buyer calculator').nth(1)
        this.howMuchCouldIBorrowButton = Selector('span').withText('How much could I borrow?');
        this.howMuchWillItCostMeButton = Selector('span').withText('How much will it cost me?');
        this.bothButton = Selector('span').withText('Both');
        this.cookies = Selector('#accept')

}

    // async firstTimeBuyerCalculator(t, data) {
   
    //     await t.maximizeWindow();
    //     t.click(homePage.tryOurMortgageCalculator)
      
    //     if (this.cookies.exists) {
    //         await t.click(this.cookies)
    //     }
    //     await t.click(this.firstTimeBuyerCalculatorButton)
        
    //     await t.click(whatToDoSelector(data.whatToDo));
    //     await t.click(firstHomeSelector(data.firstHome));
    //     await t.click(homeBuyingJourneySelector(data.homeBuyingJourney));
    //     await t.click(peopleApplyingSelector(data.peopleApplying));
    //     await t.click(continueButton);

    //     await t.click(whatToKnowSelector(data.whatToKnow));
    //     await t.click(continueButton);

    //     await t.click(employmentStatusSelector(data.employmentStatus));
    //     await t.typeText(salaryInput, data.salary);
    //     await t.click(additionalIncomeSelector(data.additionalIncome));
    //     if (await mortgageCalculatorPage.cookies.exists) {
    //         await t.click(mortgageCalculatorPage.cookies)
    //     }
    //     await t.click(continueButton);

    //     await t.click(dependentsSelector(data.dependents));
    //     await t.click(continueButton);

    //     await t.click(getResultButton);

    //     // Verify the result
    //     await t.expect(resultText.innerText).contains(data.expectedQuote);


    // }
   


}
export default new mortgageCalculatorPage()