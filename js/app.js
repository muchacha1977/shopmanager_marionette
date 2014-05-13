
var ShopManager = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

ShopManager.addRegions({
  mainRegion: '.main-container'
});

ShopManager.addInitializer(function(data) {
  var contacts = new ShopManager.Collections.Shops(),
      router = new ShopManager.Router(),
      controller = new ShopManager.Controller({
        shops: contacts,
        router: router,
        mainRegion: this.mainRegion
      });

  router.processAppRoutes(controller, {
    'shops': 'showShops',
    'shops/new': 'newShop',
    'shops/edit/:id': 'editShop'
  });
});

ShopManager.on('initialize:after', function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});
