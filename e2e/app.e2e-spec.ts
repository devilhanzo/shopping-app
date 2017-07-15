import { ShoppingAppPage } from './app.po';

describe('shopping-app App', () => {
  let page: ShoppingAppPage;

  beforeEach(() => {
    page = new ShoppingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
