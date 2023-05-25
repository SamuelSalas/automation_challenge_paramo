import Helpers from '../helpers/Helpers';
import { expect } from '@wdio/globals';

class SignUpPage {
  get formBody(): Promise<WebdriverIO.Element> {
    return $('form.form.form--registration');
  }

  get emailOptionButton(): Promise<WebdriverIO.Element> {
    return $('//li[text()="E-mail"]');
  }

  get phoneOptionButton(): Promise<WebdriverIO.Element> {
    return $('//li[text()="Phone"]');
  }

  get emailInput(): Promise<WebdriverIO.Element> {
    return $('input[data-test="input-email"]');
  }

  get emailErrorMessage(): Promise<WebdriverIO.Element> {
    return $('div[data-test="error-email"]');
  }

  get phoneInput(): Promise<WebdriverIO.Element> {
    return $('input[data-test="input-phone"]');
  }

  get phoneErrorMessage(): Promise<WebdriverIO.Element> {
    return $('div[data-test="error-phone"]');
  }

  get termsAndConditionsCheckbox(): Promise<WebdriverIO.Element> {
    return $(
      '#core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions',
    );
  }

  get termsAndConditionsError(): Promise<WebdriverIO.Element> {
    return $('div[data-test="error-terms_and_conditions"]');
  }

  get currencySelector(): Promise<WebdriverIO.Element> {
    return $(
      '//div[@class="selectric-wrapper selectric-below"]/div[@class="selectric"]/span',
    );
  }

  get currencySelectorOptions(): Promise<WebdriverIO.Element[]> {
    return $$(
      '//div[@class="selectric-wrapper selectric-below"]//div[@class="selectric-scroll"]//li',
    );
  }

  get passwordInput(): Promise<WebdriverIO.Element> {
    return $('input[data-test="input-password"]');
  }

  get passwordErrorMessage(): Promise<WebdriverIO.Element> {
    return $('div[data-test="error-password"]');
  }

  get rePasswordInput(): Promise<WebdriverIO.Element> {
    return $('input[data-test="input-password_confirmation"]');
  }

  get rePasswordMessage(): Promise<WebdriverIO.Element> {
    return $('div[data-test="error-password_confirmation"]');
  }

  get createAccountButton(): Promise<WebdriverIO.Element> {
    return $('button[data-test="control-submit"]');
  }

  async waitForDisplay(): Promise<void> {
    await Helpers.waitForElementToDisplayed(this.formBody);
    await Helpers.scrollIntoView(this.formBody);
  }

  async clickEmailOption(): Promise<void> {
    await Helpers.clickElement(this.emailOptionButton);
  }

  async clickPhoneOption(): Promise<void> {
    await Helpers.clickElement(this.phoneOptionButton);
  }

  async typeEmailInputValue(value: string): Promise<void> {
    await Helpers.typeInputValue(this.emailInput, value);
  }

  async isEmailErrorMessageDisplayed(): Promise<void> {
    await expect(this.emailErrorMessage).toBeDisplayed();
  }

  async invalidEmailErrorMessage(): Promise<void> {
    await expect(this.emailErrorMessage).toHaveText('Invalid email.');
  }

  async isEmailErrorMessageNotDisplayed(): Promise<void> {
    await expect(this.emailErrorMessage).not.toBeDisplayed();
  }

  async typePhoneInputValue(value: string): Promise<void> {
    await Helpers.typeInputValue(this.phoneInput, value);
  }

  async isPhoneErrorMessageDisplayed(): Promise<void> {
    await expect(this.phoneErrorMessage).toBeDisplayed();
  }

  async isPhoneErrorMessageNotDisplayed(): Promise<void> {
    await expect(this.phoneErrorMessage).not.toBeDisplayed();
  }

  async clickTermsAndConditionsCheckbox(): Promise<void> {
    await Helpers.clickElement(this.termsAndConditionsCheckbox);
  }

  async isTermsAndConditionsMessageDisplayed(): Promise<void> {
    await expect(this.termsAndConditionsError).toBeDisplayed();
  }

  async isTermsAndConditionsMessageNotDisplayed(): Promise<void> {
    await expect(this.termsAndConditionsError).not.toBeDisplayed();
  }

  async selectCurrency(currency: string): Promise<void> {
    const currencyOptions = await this.currencySelectorOptions;
    await Helpers.clickElement(this.currencySelector);

    for (const option of currencyOptions) {
      if ((await option.getText()) === currency) {
        await option.click();
      }
    }
  }

  async isCurrencySelectValue(currency: string): Promise<void> {
    await expect(this.currencySelector).toHaveText(currency);
  }

  async typePassInputValue(value: string): Promise<void> {
    await Helpers.typeInputValue(this.passwordInput, value);
  }

  async isPassErrorMessageDisplayed(): Promise<void> {
    await expect(this.passwordErrorMessage).toBeDisplayed();
  }

  async emptyPassErrorMessage(): Promise<void> {
    await expect(this.passwordErrorMessage).toHaveText('Password cannot be blank.');
  }

  async requiredDigitPassErrorMessage(): Promise<void> {
    await expect(this.passwordErrorMessage).toHaveTextContaining('Required 1 digit');
  }

  async requiredLetterPassErrorMessage(): Promise<void> {
    await expect(this.passwordErrorMessage).toHaveTextContaining('Required 1 letter');
  }

  async requiredUppercaseLetterPassErrorMessage(): Promise<void> {
    await expect(this.passwordErrorMessage).toHaveTextContaining(
      'Required 1 capital letter',
    );
  }

  async requiredLowercaseLetterPassErrorMessage(): Promise<void> {
    await expect(this.passwordErrorMessage).toHaveTextContaining(
      'Required 1 lower letter',
    );
  }

  async requiredLengthPassErrorMessage(): Promise<void> {
    await expect(this.passwordErrorMessage).toHaveTextContaining(
      'Required Password is too short (minimum is 6 characters).',
    );
  }

  async isPassErrorMessageNotDisplayed(): Promise<void> {
    await expect(this.passwordErrorMessage).not.toBeDisplayed();
  }

  async typePassConfirmInputValue(value: string): Promise<void> {
    await Helpers.typeInputValue(this.rePasswordInput, value);
  }

  async isPassConfirmErrorMessageDisplayed(): Promise<void> {
    await expect(this.rePasswordMessage).toBeDisplayed();
  }

  async emptyPassConfirmErrorMessage(): Promise<void> {
    await expect(this.rePasswordMessage).toHaveText(
      'Password confirmation cannot be blank.',
    );
  }

  async differentPassConfirmErrorMessage(): Promise<void> {
    await expect(this.rePasswordMessage).toHaveText(
      'Password must be strictly repeated.',
    );
  }

  async clickCreateAccountButton(): Promise<void> {
    await Helpers.longPress(this.createAccountButton);
  }
}

export default new SignUpPage();
