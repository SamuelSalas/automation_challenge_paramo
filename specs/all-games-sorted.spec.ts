import HomePage from '../page-objects/HomePage';
import AllGamesPage from '../page-objects/AllGamesPage';
import { browser } from '@wdio/globals';

describe('Sort All Games Test', () => {
  before(async () => {
    await HomePage.open();
    await browser.maximizeWindow();
  });

  it('should all games be sorted from a to z', async () => {
    await HomePage.clickGamesCategoryButton();
    await AllGamesPage.isCorrectTitleDisplay();
    await AllGamesPage.sortGamesByAZ();

    while (await AllGamesPage.isMoreGamesButtonDisplayed()) {
      await AllGamesPage.clickMoreGamesButton();
      await browser.pause(1000);
    }

    await AllGamesPage.isGamesSortedCorrectly();
  });
});
