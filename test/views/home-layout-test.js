describe('Home Page', function() {
  var HomeLayout = require('views/home-layout');
  var homeLayout = new HomeLayout({page: 'index'});
  var view, headerEl;
  beforeEach(function() {
    view = homeLayout.render().view;
    headerEl = view.$el.find('header');
  });
  describe('Layout', function() {
    it('should have a jquery wrapped $el',function() {
      expect(homeLayout).to.have.property('$el');
    });
    it('layout should be rendered', function() {
      homeLayout.__manager__.should.have.property('hasRendered')
        .that.equals(true);
    });
    it('$el should be able to find a child element', function() {
      expect(view.$el.find('header')).to.have.length(1);
    });
  });
  describe('Header', function() {
    it.skip('should display 4 links', function() {
      expect(headerEl.find('ul')).to.have.length(4);
    });
    it.skip('expect external links to have target=_blank', function() {
      expect(headerEl.find('a[target="_blank"]')).to.have.length(1);
    });
    it.skip('expect to have 2 external links', function() {
      expect(headerEl.find('a[target="_blank"]')).to.have.length(2);
    });
    it.skip('should have a logo', function() {
      console.log(view);
      expect(headerEl.find('img')).to.have.length(1);
    });
  });
});
