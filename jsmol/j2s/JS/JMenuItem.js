Clazz.declarePackage("JS");
Clazz.load(["JS.AbstractButton"], "JS.JMenuItem", null, function(){
var c$ = Clazz.decorateAsClass(function(){
this.btnType = 0;
Clazz.instantialize(this, arguments);}, JS, "JMenuItem", JS.AbstractButton);
Clazz.makeConstructor(c$, 
function(text){
Clazz.superConstructor(this, JS.JMenuItem, ["btn"]);
this.setText(text);
this.btnType = (text == null ? 0 : 1);
}, "~S");
Clazz.makeConstructor(c$, 
function(type, i){
Clazz.superConstructor(this, JS.JMenuItem, [type]);
this.btnType = i;
}, "~S,~N");
Clazz.overrideMethod(c$, "toHTML", 
function(){
return this.htmlMenuOpener("li") + (this.text == null ? "" : "<a>" + this.htmlLabel() + "</a>") + "</li>";
});
Clazz.overrideMethod(c$, "getHtmlDisabled", 
function(){
return " class=\"ui-state-disabled\"";
});
Clazz.defineMethod(c$, "htmlLabel", 
function(){
return (this.btnType == 1 ? this.text : "<label><input id=\"" + this.id + "-" + (this.btnType == 3 ? "r" : "c") + "b\" type=\"" + (this.btnType == 3 ? "radio\" name=\"" + this.htmlName : "checkbox") + "\" " + (this.selected ? "checked" : "") + " />" + this.text + "</label>");
});
});
;//5.0.1-v7 Thu May 08 14:17:10 CDT 2025
