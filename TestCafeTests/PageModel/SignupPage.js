import {Selector, t} from 'testcafe';

class SignupPage {

    constructor(){
        this.firstnameInput = Selector('#input-firstname');
        this.lastnameInput = Selector('#input-lastname');
        this.emailInput = Selector('#input-email');
        this.telephoneInput = Selector('#input-telephone');
        this.passwordInput = Selector('#input-password');
        this.confirmInput = Selector('#input-confirm');
        this.agreeBtn = Selector('#input-agree');
        this.continueBtn = Selector('input.btn-primary');
    }
}

export default new SignupPage();