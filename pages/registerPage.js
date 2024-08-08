import { Selector, t } from "testcafe";
import logOnPage from "./logOnPage";
import homePage from "./homePage";

class registerPage {
    constructor() {
        this.accountTypesForRegistration = Selector('.sc-gtssRu.ddFoKD.csl-typography.csl-text-s2');

        this.firstNameInput = Selector('#firstName');
        this.lastNameInput = Selector('#lastName');
        this.dobDayInput = Selector('#dateOfBirth-day');
        this.dobMonthInput = Selector('#dateOfBirth-month');
        this.dobYearInput = Selector('#dateOfBirth-year');
        this.emailInput = Selector('#email');
        this.confirmEmailInput = Selector('#confirmEmail');
        this.ukResidentYes = Selector('.sc-hTRkEk.iLvGOt.csl-selector-item__button').nth(0);
        //this.ukResidentNoRadio = Selector('#uk-resident-no');
        this.postcodeInput = Selector('#postcode');
        this.accountTypeOption = text => Selector('.sc-khIgXV.kPCQml.csl-selector-item').withText(text);
        this.sortCodeInput1 = Selector('#firstSortCode');
        this.sortCodeInput2 = Selector('#secondSortCode');
        this.sortCodeInput3 = Selector('#thirdSortCode');
        this.accountNumberInput = Selector('#accountNumber');
        this.referenceNumberInput = Selector('#accountNumber');
        this.accountNumberInputMortgage = Selector('#accountNumber');
        this.creditCardNumberInput = Selector('#accountNumber');
        this.accountCodeInput = Selector('#accountNumber');
        this.termsCheckbox = Selector('.sc-hBMVcZ.gpQWSI.csl-checkbox__appearance');
        this.continueButton = Selector('.sc-pNWxx.jCUxmp.csl-button.csl-button--primary');
        this.errorMessage = Selector('#csl-error-summary-heading1').withText("Sorry, we couldn't find your account. Please check the details and try again.");
        this.registerHere = Selector("span").withText('Register here');
    }

    async verifyingAccountTypesRequireForRegistration() {
        await t.maximizeWindow();
        await t.click(logOnPage.logOnLink);
        await t.click(logOnPage.registerLink);
        const expectedAccountTypes = [
            "current or savings account",
            "loan",
            "mortgage",
            "credit card",
            "share dealing account"
        ];
        const accountTypesCount = await this.accountTypesForRegistration.count; //5

        // Loop through the extracted account types and compare with expected types
        for (let i = 0; i < accountTypesCount; i++) {
            const accountTypeText = await this.accountTypesForRegistration.nth(i).innerText;
            await t.expect(accountTypeText).eql(expectedAccountTypes[i], `Account type "${accountTypeText}" does not match expected type "${expectedAccountTypes[i]}"`);
        }
    }
    
    async registrationDataInput() {  
        await t
        .typeText(this.firstNameInput, 'David')
        .typeText(this.lastNameInput, 'Smith')
        .typeText(this.dobDayInput, '01')
        .typeText(this.dobMonthInput, '01')
        .typeText(this.dobYearInput, '2000')
        .typeText(this.emailInput, 'testinvaliduser@gmail.com')
        .typeText(this.confirmEmailInput, 'testinvaliduser@gmail.com')
        .typeText(this.postcodeInput, 'SW1A 1AA')
        .typeText(this.sortCodeInput1, '02')
        .typeText(this.sortCodeInput2, '27')
        .typeText(this.sortCodeInput3, '44')
        .typeText(this.accountCodeInput, '12345678')
    }

    async verifyingUserCanNotRegisterWithIncorrectSavingAccount() {
        await t.maximizeWindow()
        .click(logOnPage.logOnLink)
        .click(logOnPage.registerLink)
        .click(this.registerHere)
        await this.registrationDataInput()
        await t
        .click(this.termsCheckbox)
        .click(this.continueButton)
        .expect(this.errorMessage.visible).eql(true)
    }


} export default new registerPage();
