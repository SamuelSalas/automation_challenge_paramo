import Helpers from '../../helpers/Helpers';

class WelcomeModal {
  get closeButton(): Promise<WebdriverIO.Element> {
    return $('button.mfp-close');
  }

  get modal(): Promise<WebdriverIO.Element> {
    return $('div.modal__content');
  }

  async waitForDisplayed(): Promise<void> {
    await Helpers.waitForElementToDisplayed(this.modal);
  }

  async clickCloseButton(): Promise<void> {
    await Helpers.clickElement(this.closeButton);
  }
}

export default new WelcomeModal();
