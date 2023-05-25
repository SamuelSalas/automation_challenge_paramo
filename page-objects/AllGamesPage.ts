import Helpers from '../helpers/Helpers';

class AllGamesPage {
  get title(): Promise<WebdriverIO.Element> {
    return $('h1.page__title');
  }

  get gamesName(): Promise<WebdriverIO.Element[]> {
    return $$('div.games-item__name');
  }

  get moreGamesButton(): Promise<WebdriverIO.Element> {
    return $('a.button.button--s4.button--t4');
  }

  get sortSelect(): Promise<WebdriverIO.Element> {
    return $('//select[@data-sort-select]');
  }

  async isCorrectTitleDisplay(): Promise<void> {
    await expect(this.title).toHaveText('All Games');
  }

  async sortGamesByAZ(): Promise<void> {
    const sortSelect = await this.sortSelect;
    await sortSelect.selectByAttribute('value', 'az');
  }

  async isGamesSortedCorrectly(): Promise<void> {
    const games: WebdriverIO.Element[] = await this.gamesName;
    const result: string[] = await Promise.all(
      games.map((game: WebdriverIO.Element) => game.getText()),
    );
    const expectedResult: string[] = result.sort();
    result.forEach((name: string, index: number) => {
      expect(name).toEqual(expectedResult[index]);
    });
  }

  async clickMoreGamesButton(): Promise<void> {
    await Helpers.scrollIntoView(this.moreGamesButton);
    await Helpers.clickElement(this.moreGamesButton);
  }

  async isMoreGamesButtonDisplayed(): Promise<boolean> {
    const moreGamesButton = await this.moreGamesButton;
    return await moreGamesButton.isDisplayed();
  }
}

export default new AllGamesPage();
