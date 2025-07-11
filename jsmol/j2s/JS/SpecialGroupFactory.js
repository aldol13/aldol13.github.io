Clazz.declarePackage("JS");
Clazz.load(null, "JS.SpecialGroupFactory", ["JS.SpecialGroup", "$.Symmetry"], function(){
var c$ = Clazz.declareType(JS, "SpecialGroupFactory", null);
Clazz.makeConstructor(c$, 
function(){
System.out.println("created");
});
Clazz.defineMethod(c$, "createSpecialGroup", 
function(base, sym, info, type){
var spg;
switch (type) {
case 300:
spg =  new JS.SpecialGroup.PlaneGroup(sym, info);
break;
case 400:
spg =  new JS.SpecialGroup.LayerGroup(sym, info);
break;
case 500:
spg =  new JS.SpecialGroup.RodGroup(sym, info);
break;
case 600:
spg =  new JS.SpecialGroup.FriezeGroup(sym, info);
break;
default:
return null;
}
if (base != null) {
spg.embeddingSymmetry = base.embeddingSymmetry;
spg.periodicity = base.periodicity;
}return spg;
}, "JS.SpecialGroup,JS.Symmetry,java.util.Map,~N");
Clazz.defineMethod(c$, "getSpecialGroup", 
function(sym, vwr, name, type){
return this.createSpecialGroup(null, sym, JS.Symmetry.getSpecialSettingInfo(vwr, name, type), type);
}, "JS.Symmetry,JV.Viewer,~S,~N");
});
;//5.0.1-v7 Thu May 08 14:17:10 CDT 2025
