import { browser } from '@wdio/globals';

class Helpers {
  static async typeValue(
    element: Promise<WebdriverIO.Element>,
    value: string,
  ): Promise<void> {
    const elem: WebdriverIO.Element = await element;
    await elem.setValue(value);
  }

  static async clickElement(element: Promise<WebdriverIO.Element>): Promise<void> {
    const elem: WebdriverIO.Element = await element;
    await elem.click();
  }

  static async longPress(element: Promise<WebdriverIO.Element>): Promise<void> {
    const elem: WebdriverIO.Element = await element;
    await elem.moveTo();
    await browser.action('pointer').down({ button: 0 }).pause(500).up({ button: 0 });
  }

  static async scrollIntoView(element: Promise<WebdriverIO.Element>): Promise<void> {
    const elem: WebdriverIO.Element = await element;
    await elem.scrollIntoView();
  }

  static async waitForElementToDisplayed(
    element: Promise<WebdriverIO.Element>,
  ): Promise<void> {
    const elem: WebdriverIO.Element = await element;
    await elem.waitForDisplayed();
  }

  static async typeInputValue(
    element: Promise<WebdriverIO.Element>,
    value: string,
  ): Promise<void> {
    const input: WebdriverIO.Element = await element;
    await input.clearValue();
    await input.setValue(value);
  }
}

export default Helpers;
