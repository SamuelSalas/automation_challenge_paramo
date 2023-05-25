import HomePage from '../page-objects/HomePage';
import WelcomeModal from '../page-objects/modal/WelcomeModal';
import SignUpPage from '../page-objects/SignUpPage';
import SuccessPage from '../page-objects/SuccessPage';

describe('User Registration Test', () => {
  before(async () => {
    await HomePage.open();
    await browser.maximizeWindow();
  });

  it('Should navigate to the Sign Up page', async () => {
    await WelcomeModal.waitForDisplayed();
    await WelcomeModal.clickCloseButton();
    await HomePage.clickSignUpButton();
    await SignUpPage.waitForDisplay();
  });

  it('Should display all required error fields', async () => {
    await SignUpPage.clickCreateAccountButton();
    await SignUpPage.waitForDisplay();

    await SignUpPage.isEmailErrorMessageDisplayed();
    await SignUpPage.clickPhoneOption();
    await SignUpPage.isPhoneErrorMessageDisplayed();
    await SignUpPage.isTermsAndConditionsMessageDisplayed();
    await SignUpPage.isPassErrorMessageDisplayed();
    await SignUpPage.emptyPassErrorMessage();
    await SignUpPage.isPassConfirmErrorMessageDisplayed();
    await SignUpPage.emptyPassConfirmErrorMessage();
  });

  it('Should type valid phone number', async () => {
    const customNumber: number = Math.floor(Math.random() * 1000000000000);
    await SignUpPage.typePhoneInputValue(customNumber.toString());
    await SignUpPage.clickCreateAccountButton();
    await SignUpPage.waitForDisplay();
    await SignUpPage.isPhoneErrorMessageNotDisplayed();
  });

  it('Should type valid email', async () => {
    await SignUpPage.clickEmailOption();
    const customNumber: string = Math.floor(Math.random() * 100000).toString();
    await SignUpPage.typeEmailInputValue(`${customNumber}@example.com`);
    await SignUpPage.clickCreateAccountButton();
    await SignUpPage.waitForDisplay();
    await SignUpPage.isEmailErrorMessageNotDisplayed();
  });

  it('Should click Terms and Services checkbox', async () => {
    await SignUpPage.clickTermsAndConditionsCheckbox();
    await SignUpPage.clickCreateAccountButton();
    await SignUpPage.waitForDisplay();
    await SignUpPage.isTermsAndConditionsMessageNotDisplayed();
  });

  it('Should select currency option', async () => {
    await SignUpPage.selectCurrency('USDTT');
    await SignUpPage.isCurrencySelectValue('USDTT');
  });

  it('Should displayed required password message', async () => {
    await SignUpPage.typePassInputValue('{');
    await SignUpPage.clickCreateAccountButton();
    await SignUpPage.waitForDisplay();
    await SignUpPage.isPassErrorMessageDisplayed();
    await SignUpPage.requiredDigitPassErrorMessage();
    await SignUpPage.requiredLengthPassErrorMessage();
    await SignUpPage.requiredLetterPassErrorMessage();
    await SignUpPage.requiredUppercaseLetterPassErrorMessage();
    await SignUpPage.requiredLowercaseLetterPassErrorMessage();
  });

  it('Should displayed not equal passwords', async () => {
    await SignUpPage.typePassInputValue('TestPass1234');
    await SignUpPage.typePassConfirmInputValue('test');
    await SignUpPage.clickCreateAccountButton();
    await SignUpPage.waitForDisplay();
    await SignUpPage.isPassErrorMessageNotDisplayed();
    await SignUpPage.differentPassConfirmErrorMessage();
  });

  it('Should create account successfully', async () => {
    await SignUpPage.typePassConfirmInputValue('TestPass1234');
    await SignUpPage.clickCreateAccountButton();
    await SuccessPage.isSuccessIconDisplayed();
  });
});
