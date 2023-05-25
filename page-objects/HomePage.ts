import Helpers from '../helpers/Helpers';

class HomePage {
  get signUpButton(): Promise<WebdriverIO.Element> {
    return $('a[data-test="nav-reg-head"]');
  }

  get allGamesButton(): Promise<WebdriverIO.Element> {
    return $('//div[@class="container"]//a[@href="/gameList"]');
  }

  async open(): Promise<void> {
    await browser.url('/');
  }

  async clickSignUpButton(): Promise<void> {
    await Helpers.clickElement(this.signUpButton);
  }

  async clickGamesCategoryButton(): Promise<void> {
    await Helpers.clickElement(this.allGamesButton);
  }
}

export default new HomePage();
