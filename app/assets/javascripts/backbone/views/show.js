Joe.Views.Homes.Show = Backbone.View.extend({
	id: "index",
	template: JST["backbone/templates/homes/show"],
	events: {
		'click .save': 'save',
		'click .cancel': 'cancel'
	},
	save:function(event){
		var el = this.$el;
		var self = this;
	    var attributes = {
				name: el.find('#input-editable').val(),
				selected: true
		}
		this.model.save(attributes,{
			success: function(model, response){
					self.model.set(response);
					self.collection.add(self.model);
				    Backbone.history.navigate('', {trigger: true,replace: true});
			}
		});
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
		el.find('#input-editable').val(inputText)
		return this;
	}
});