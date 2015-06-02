describe('App', function() {

  describe('Home view', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/#/');
    });


    it('On home page should apper the word Hola Mundo', function() {
      var paragraph = element(by.css('.jumbotron p'));
      expect(paragraph.getText()).toEqual('Hola Mundo');
    });

  });

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/#/phones');
    });


    it('should filter the phone list as a user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('m');
      expect(phoneList.count()).toBe(3);
    });

  });


});