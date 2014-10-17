$(function() {
	"use strict"
	var target = "p";
	var elements = $(target).not(target+" "+target);
	elements.each(function(index, elem) {
		var weAreInTag = false;// Means we are beetwen < and >
		var weHaveOpened = false;
		var script = false; // We do not want to do anything beetwen <script> and </script>
		var newText = [];
		var text = $(elem).html();
		for (var i = 0; i <= text.length - 1; i++) {	
			if (weAreInTag) {
				if (text[i] == ">") {
					weAreInTag = false;	
					var ipt = ""+text[i-1]+text[i-2]+text[i-3];
					if ( ipt == "scr" || ipt == "SCR") {
						script = false;
					};			
				};			
			}else{
				if (text[i] == "<") {
					weAreInTag = true;
					var scr = ""+text[i+1]+text[i+2]+text[i+3];				
					if ( scr == "scr" || scr == "SCR") {
						script = true;
					};				
				}else if ( (text[i]=='"'||text[i]=="'") && !script) {
					
					if (weHaveOpened) {
						newText.push("»");
						weHaveOpened = false;
						continue
					}else{				
						newText.push("«");
						weHaveOpened = true;
						continue
					}
				}
			}	
			newText.push(text[i]);	
		};
		text = newText.join("");	
		$(elem).empty().html(text);
	})
});