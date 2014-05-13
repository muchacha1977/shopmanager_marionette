ShopManager.Controller = Marionette.Controller.extend({
	initialize:function(options){
		this._router = options.router;
		this._mainRegion = options.mainRegion;
		this._shops = options.shops;
		this._shops.fetch();	
	if (this._shops.isEmpty()){
		this._createSampleData();
	}
  },
showShops: function(){
	var shopsView = new ShopManager.Views.Shops({
		collection:this._shops
	});
	
	this.listenTo(shopsView,'addShop:clicked', this.newShop);

	this.listenTo(shopsView, 'itemview:delete:clicked', function(shopView){
		shopView.model.destroy();
	});
	this.listenTo(shopsView, 'itemview:edit:clicked', function(shopView){
		this.editShop(shopView.model.id);
	});

	ShopManager.mainRegion.show(shopsView);
	
	this._router.navigate('shops');


},
newShop: function(){
	var newViewForm = new ShopManager.Views.ShopForm({
	model: new ShopManager.Models.Shop()
	});
this.listenTo(newViewForm, 'form:submitted', function(attrs) {
	attrs.avatar = _.random(1,15) + '.jpg';
	this._shops.create(attrs);
	this.showShops();
	
});
this.listenTo(newViewForm, 'form:canceled', this.showShops);
ShopManager.mainRegion.show(newViewForm);
this._router.navigate('shops/new');
},

editShop:function(id){
var shop=this._shops.get(id),
	editShopForm;
if(shop){
	editShopForm = new ShopManager.Views.ShopForm({
	model:shop
	});
this.listenTo(editShopForm, 'form:submitted', function(attrs){
	shop.save(attrs);
	this.showShops();
});
this.listenTo(editShopForm, 'form:canceled', this.showShops);

   
ShopManager.mainRegion.show(editShopForm);
this._router.navigate('shops/edit/' + id);
}else {
      this.showShops();
   
 }
  },

_createSampleData:function(){
 _.each([
      {
        
	id: 1,

        title: 'Terrence S. Hatfield',

        price: '15',
      
	description: 'TerrenceSHatfie',
   
        avatar: '1.jpg'
      
 }], function(shop) {
        this._shops.create(shop);
      }, this);
  }
});
