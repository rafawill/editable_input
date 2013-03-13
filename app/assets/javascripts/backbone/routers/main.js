Joe.Routers.Main = Backbone.Router.extend({

routes: {
	'':'indexValues',
	'values/:id':'homesShow'
},
indexValues:function(){
	var modelValue = new Joe.Models.Value();
	modelValue.fetch({
		success:function(respond,model){
			var homes = new Joe.Views.Homes.Index({model: modelValue});
			this.$("#content").html(homes.render().el);
		}
	});
},
homesShow:function(id){
	Joe.values = new Joe.Collections.Values();
	Joe.values.fetch({
		success:function(collection){
			var value = Joe.values.get(id)
			var homes = new Joe.Views.Homes.Show({model: value, collection:collection});
			this.$("#content").html(homes.render().el);
		}
	});
	
}
});