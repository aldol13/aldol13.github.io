Clazz.declarePackage("JM");
Clazz.load(["JM.ProteinStructure"], "JM.Turn", ["J.c.STR"], function(){
var c$ = Clazz.declareType(JM, "Turn", JM.ProteinStructure);
Clazz.makeConstructor(c$, 
function(apolymer, monomerIndex, monomerCount){
Clazz.superConstructor (this, JM.Turn, []);
this.setupPS(apolymer, J.c.STR.TURN, monomerIndex, monomerCount);
this.subtype = J.c.STR.TURN;
}, "JM.AlphaPolymer,~N,~N");
});
;//5.0.1-v7 Thu May 08 14:17:10 CDT 2025
