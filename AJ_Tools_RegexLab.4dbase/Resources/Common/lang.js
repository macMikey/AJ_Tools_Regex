﻿<!--

// Display the localized help file according to the browser lang
// Uncomment or add a "else if" clause

if (navigator.browserLanguage)
	var language = navigator.browserLanguage;
else
	var language = navigator.language;
		
if (language.indexOf('fr') > -1) document.location.href = 'Resources/French.lproj/Help/Help.html';
		
	else if (language.indexOf('en') > -1) document.location.href = 'Resources/English.lproj/Help/Help.html';  
		
//	else if (language.indexOf('it') > -1) document.location.href = 'Resources/Italian.lproj/Help/Help.html';
		
else
		
	document.location.href = 'Resources/English.lproj/Help/Help.html';

// -->		