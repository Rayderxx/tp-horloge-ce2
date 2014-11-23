describe('angularjs homepage title', function() {
  it('should have "apprendre à lire en ce2"', function() {
    browser.get('http://0.0.0.0:7777');
    expect(browser.getTitle()).toEqual('Apprendre à lire en CE2');
  });
});

describe('angularjs options', function() {
  it('should have "apprendre à lire en ce2"', function() {
    browser.get('http://0.0.0.0:7777');
    element(by.css('#credits-button')).click();
    expect(element(by.css('.choice')).getText()).toEqual('Choix de la pendule');
  });
});

describe('popup', function() {
  it('should display popup on click"', function() {
    browser.get('http://0.0.0.0:7777');
    element(by.css('#game-button')).click();
    element(by.css('.check')).click();
    expect(element(by.css('#modal')).isDisplayed()).toBeTruthy();
  });

  it('should display wrong popup"', function() {
    expect(element(by.css('.loose')).isPresent()).toBeTruthy();
  });
});