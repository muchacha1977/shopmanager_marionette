ShopManager.Views.Shop = Marionette.ItemView({
	tagName:'li',
	className:'media col-md-6 col-lg-4',
	template:'#tpl-contact',
	triggers:{
		'click .delete-shop': 'delete:clicked',
		'click .edit-shop': 'edit:clicked'
	}
	

});