Clazz.declarePackage("JM");
Clazz.load(["JM.BioPolymer"], "JM.PhosphorusPolymer", null, function(){
var c$ = Clazz.declareType(JM, "PhosphorusPolymer", JM.BioPolymer);
Clazz.makeConstructor(c$, 
function(monomers){
Clazz.superConstructor(this, JM.PhosphorusPolymer, [monomers, true]);
}, "~A");
});
;//5.0.1-v7 Thu May 08 14:17:10 CDT 2025
