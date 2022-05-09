import { Selector, t } from 'testcafe';

class LoginPage {

    constructor() {
        this.emailInput = Selector('#input-email');
        this.passwordInput = Selector('#input-password');
        this.loginBtn = Selector('input.btn-primary');
    }
}

export default new LoginPage();