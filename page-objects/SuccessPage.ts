class SuccessPage {
  get successIcon(): Promise<WebdriverIO.Element> {
    return $('i.icon-success');
  }

  async isSuccessIconDisplayed(): Promise<void> {
    await expect(this.successIcon).toBeDisplayed();
  }
}

export default new SuccessPage();
