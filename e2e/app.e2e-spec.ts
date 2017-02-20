import { MagicMirrorPage } from './app.po';

describe('magic-mirror App', () => {
  let page: MagicMirrorPage;

  beforeEach(() => {
    page = new MagicMirrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
