ShopManager.Router = Marionette.AppRouter.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    this.navigate('shops', {
      trigger: true,
      replace: true
    });
  }
});
