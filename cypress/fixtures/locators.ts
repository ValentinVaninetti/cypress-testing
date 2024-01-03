export const loginPageLocators ={
    emailInput:'#Email',
    passwordInput: '#Password',
    completeLoginButton: 'form > .buttons > .button-1',
    logoutButton: '.ico-logout',
    loginButton: '.ico-login',

}
export const registerPageLocators={
    genderSelectorInput: '#gender-male',
    firstNameInput: '#FirstName',
    lastNameInput: '#LastName',
    dayOfBirthOption: '[name="DateOfBirthDay"]',
    monthOfBirthOption: '[name="DateOfBirthMonth"]',
    yearOfBirthOption: '[name="DateOfBirthYear"]',
    emailInput: '#Email',
    companyName: '#Company',
    passwordInput: '#Password',
    reTypePasswordInput: '#ConfirmPassword',
    registerButton: '#register-button',
    resultText: '.result',
    errorMessage: '.message-error > ul > li'
}