import { Selector, t } from "testcafe";
import axios from "axios";

class logOnPage {
    constructor() {
        this.logOnLink = Selector('[data-selector="cta-item-flyout"][data-tealium-event="Internal Click"][data-tealium-narrative="Log on"] span').withText('Log on');
        this.logOnLinkPersonal = Selector('[title="Internet Banking"][data-selector="cta-item-primary"] span').withText('Personal');
        this.logOnContinueButton = Selector('[name="frmLogin:btnLogin1"][alt="Continue"][title="Continue"]');
        this.thereIsAProblemError = Selector('.formSubmitError[role="alert"]');
        this.userIdInputBox = Selector('input[id="frmLogin:strCustomerLogin_userID"]');
        this.passwordInputBox = Selector('input[id="frmLogin:strCustomerLogin_pwd"]');
        this.pleaseEnterValueError = Selector('span[role="alert"]').withText('Please enter a value.');
        this.RB1LogOnHelpOptions = Selector('label').withText('Change your password');
        this.RB2LogOnHelpOptions = Selector('label').withText('Change your memorable information');
        this.RB3LogOnHelpOptions = Selector('label').withText('Change both');
        this.RB4LogOnHelpOptions = Selector('label').withText('Find out your User ID');
        this.forgottenYourLogOnLink = Selector('a[id="frmLogin:lkFrgtLogonLinkDMC"]');
        this.registerLink = Selector('a[title="for internet banking"] span[class="btn-text"]');      
    }

     async loginWithoutAnyCredentials() {
    
        await t.maximizeWindow()
        .click(this.logOnLink)
        .click(this.logOnLinkPersonal)
        .click(this.logOnContinueButton)
        .expect(this.thereIsAProblemError.exists).ok()
        .expect(this.thereIsAProblemError.visible).ok()
        .expect(this.thereIsAProblemError.innerText).contains('There is a problem with some of the information you have submitted.\nPlease amend the fields highlighted below and re-submit this form.');
    }

    async loginWithoutPassword() {
    
        await t.maximizeWindow()
        .click(this.logOnLink)
        .click(this.logOnLinkPersonal)
        .typeText(this.userIdInputBox, 'test@gmail.com')
        .click(this.logOnContinueButton)
        .expect(this.pleaseEnterValueError.visible).ok()
        .expect(this.thereIsAProblemError.visible).ok()
        .expect(this.thereIsAProblemError.innerText).contains('There is a problem with some of the information you have submitted.\nPlease amend the fields highlighted below and re-submit this form.');
    }

    async loginWithoutUserId() {
    
        await t.maximizeWindow()
        .click(this.logOnLink)
        .click(this.logOnLinkPersonal)
        .typeText(this.passwordInputBox, 'password')
        .click(this.logOnContinueButton)
        .expect(this.pleaseEnterValueError.visible).ok()
        .expect(this.thereIsAProblemError.visible).ok()
        .expect(this.thereIsAProblemError.innerText).contains('There is a problem with some of the information you have submitted.\nPlease amend the fields highlighted below and re-submit this form.');
    }
    
    async VerifyingLogOnHelpOptions() {
        await t.setNativeDialogHandler(() => true);
        await t.maximizeWindow()
        .click(this.logOnLink)
        .click(this.logOnLinkPersonal)
        .click(this.forgottenYourLogOnLink)
        .click(this.forgottenYourLogOnLink)
        .expect(this.RB1LogOnHelpOptions.visible).eql(true)
        .expect(this.RB2LogOnHelpOptions.visible).eql(true)
        .expect(this.RB3LogOnHelpOptions.visible).eql(true)
        .expect(this.RB4LogOnHelpOptions.visible).eql(true)
    }

}
export default new logOnPage();