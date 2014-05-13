ShopManager.Views.Shops = Marionette.CompositeView.extend({
	template:'#tpl-shops',
	itemView:ShopManager.Views.Shop,
	itemViewContainer:'.contacts-container',
	triggers:{
		'click .add-contact-btn' : 'addContact:clicked'
	}
});
