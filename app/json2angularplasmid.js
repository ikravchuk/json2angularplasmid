



// get JSON from somewhere

$.getJSON("data.json", function (data) {

	// little hack to transfer source-feature from features item
        // and make it independent backbone-item in data
        // this makes parsing in template easier

	data["backbone"] = data.features[0];
        data.features.splice(0, 1);
                                                                                                 
	$.get('plasmidTemplate.hbs', function (hbs) {
		var template = Handlebars.compile(hbs);
		$("#plasmidPic").append(template(data));
		
	}, 'html');
});
