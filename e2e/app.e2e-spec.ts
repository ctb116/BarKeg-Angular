import { BeerBarPage } from './app.po';

describe('beer-bar App', () => {
  let page: BeerBarPage;

  beforeEach(() => {
    page = new BeerBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
