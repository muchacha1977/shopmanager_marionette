ShopManager.Views.ShopForm = Marionette.ItemView.extend({
	template:'#tpl-new-shop',
	ui:{
		titleInput: '.shop-title-input',
		priceInput: '.shop-price-input',
		descriptionInput: '.shop-description-input'
	},
	triggers:{'click .form-cancel-btn' : 'form:canceled'},
	events:{'submit .shop-form' : 'onFormSubmit'},
	serializeData:function(){
		return _.extend(this.model.toJSON(),{
			isNew: this.model.isNew()
		});
	},
	onFormSubmit:function(e){
		e.preventDefault();
		this.trigger('form:submitted',{
			  title: this.ui.titleInput.val(),
			  price: this.ui.priceInput.val(),
			  description: this.ui.descriptionInput.val()
		})
	}
});

