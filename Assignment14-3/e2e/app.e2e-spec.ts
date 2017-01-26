import { Assignment143Page } from './app.po';

describe('assignment14-3 App', function() {
  let page: Assignment143Page;

  beforeEach(() => {
    page = new Assignment143Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
