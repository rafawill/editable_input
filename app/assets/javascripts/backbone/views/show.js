Joe.Views.Homes.Show = Backbone.View.extend({
	initialize: function( attributes ){
		this.collection.bind("add", this.render, this);
	},
	id: "index",
	template: JST["backbone/templates/homes/show"],
	events: {
		'click .save': 'save',
		'click .cancel': 'cancel',
		'change #value-joe': 'setValue'
	},
	save:function(event){
		var el = this.$el;
		var self = this;
         this.model = new Joe.Models.Value;
	        var attributes = {
	        	id: el.find('#input-editable').attr('data-id'),
				name: el.find('#input-editable').val(),
				selected: true
			}
		this.model.save(attributes,{
			success: function(model, response){
				var el = self.$el;
					self.model.set(response);
					self.collection.add(self.model);
				Backbone.history.navigate('', {trigger: true,replace: true});
			}
		});
	},
	setValue:function(event){
		var el = this.$el
		var inputText = el.find('select#value-joe option:selected').text();
		var id = el.find('select#value-joe option:selected').attr('id');
		el.find('#input-editable').attr('data-id',id);
	},
	cancel:function(event){
		Backbone.history.navigate('', {trigger: true});
	},
	render:function(){
		var self = this
		var el = this.$el
 		var index = this.template({model:this.model, collection:this.collection});
 		el.html(index);
		var inputText = el.find('select#value-joe option:selected').text();
		var id = el.find('select#value-joe option:selected').attr('id');
		el.find('#input-editable').attr('data-id',id);
		el.find('#input-editable').val(inputText)
		return this;
	}
});