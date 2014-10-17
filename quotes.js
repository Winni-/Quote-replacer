$(function() {
	"use strict"
	var target = "body";
	var text = $(target).html();
	var weAreInTag = false;// Means we are beetwen < and >
	var weHaveOpened = false;
	var newText = [];
	for (var i = 0; i <= text.length - 1; i++) {	
		if (weAreInTag) {
			if (text[i] == ">") {
				weAreInTag = false;				
			};			
		}else{
			if (text[i] == "<") {
				weAreInTag = true;				
			}else if (text[i]=='"'||text[i]=="'") {
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
	$(target).empty().append(text);
	$(document).trigger("ready");
});