import { AngularMylearningPage } from './app.po';

describe('angular-mylearning App', () => {
  let page: AngularMylearningPage;

  beforeEach(() => {
    page = new AngularMylearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
