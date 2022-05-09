import SignupPage from "../PageModel/SignupPage";

const url = 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register'

fixture('SignUp Page')
    .page(url)

test("Registration", async t => {
    await t
        .typeText(SignupPage.firstnameInput, 'John')
        .typeText(SignupPage.lastnameInput, 'Doe')
        .typeText(SignupPage.emailInput, 'johndoe@example.com')
        .typeText(SignupPage.telephoneInput, '0712345678')
        .typeText(SignupPage.passwordInput, 'Qwerty123!')
        .typeText(SignupPage.confirmInput, 'Qwerty123!')
        .click(SignupPage.agreeBtn)
        .click(SignupPage.continueBtn);
});