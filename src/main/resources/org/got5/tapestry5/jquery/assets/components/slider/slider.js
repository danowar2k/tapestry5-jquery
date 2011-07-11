(function( $ ) {
$.extend(Tapestry.Initializer, {
    slider: function(specs) {
		if(!specs.displayTextField) $("#" + specs.textFieldId).css("display", "none");
		var options={
			slide:function(e,u){
				$("#" + specs.textFieldId).val(u.value);
			}, 
			change:function(e,u){
				if(specs.url) 
					$("#" + specs.zoneId).tapestryZone("update", {
						url: specs.url+"?slider="+u.value
					});
			}
		};
        $("#" + specs.sliderId).slider(specs.params).slider("option", options);	
    }
});
}) ( jQuery );