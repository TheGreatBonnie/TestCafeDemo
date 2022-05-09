import LoginPage from "../PageModel/LoginPage";

const url = 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login'

fixture('Login Page')
    .page(url)

test("Login", async t => {
    await t
        .typeText(LoginPage.emailInput, 'johndoe@example.com')
        .typeText(LoginPage.passwordInput, 'Qwerty123!')
        .click(LoginPage.loginBtn);
});