ShopManager.Collections.Shops = Backbone.Collection.extend({
	model: ShopManager.Models.Shop,
	localStorage : new Backbone.LocalStorage('shops')
});
