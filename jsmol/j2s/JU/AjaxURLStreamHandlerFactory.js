Clazz.declarePackage("JU");
Clazz.load(["java.net.URLStreamHandlerFactory", "java.util.Hashtable"], "JU.AjaxURLStreamHandlerFactory", ["JU.AjaxURLStreamHandler"], function(){
var c$ = Clazz.decorateAsClass(function(){
this.htFactories = null;
Clazz.instantialize(this, arguments);}, JU, "AjaxURLStreamHandlerFactory", null, java.net.URLStreamHandlerFactory);
Clazz.prepareFields (c$, function(){
this.htFactories =  new java.util.Hashtable();
});
Clazz.overrideMethod(c$, "createURLStreamHandler", 
function(protocol){
var fac = this.htFactories.get(protocol);
if (fac == null) this.htFactories.put(protocol, fac =  new JU.AjaxURLStreamHandler(protocol));
return (fac.protocol == null ? null : fac);
}, "~S");
});
;//5.0.1-v7 Thu May 08 14:17:10 CDT 2025
