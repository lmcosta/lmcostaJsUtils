// JavaScript Document

/**
	Detecta a presença de devices Android
**/
if ( (navigator.userAgent.indexOf('Android') != -1) ) {
	document.location = "http://www.altacomunicazione.com.br/mobile";
} 

/**
	Detecta a presença de devices OS
**/
if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
	document.location = "http://www.altacomunicazione.com.br/mobile";
} 