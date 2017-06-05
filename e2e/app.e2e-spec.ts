import { RouteStartPage } from './app.po';

describe('route-start App', () => {
  let page: RouteStartPage;

  beforeEach(() => {
    page = new RouteStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
