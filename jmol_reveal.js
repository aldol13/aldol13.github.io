var jmolApplet;
var jmolInfo;
(function () {

//	var bg_color = $(".reveal-viewport").css("background-color").split("(")[1].split(")")[0].split(",").slice(0,3); //match(/(\d+)/g).split(",");
//	console.log("BackGround Color "+bg_color+" "+$("#theme").css("background-color"));
	var s = document.location.search;
	Jmol.debugCode = (s.indexOf("debugcode") >= 0 );

	jmol_isReady = function(jmolApplet){
	// TO DO will need to activate widgets
		document.title = (applet._id + " - Jmol " + Jmol.___JmolVersion)
		Jmol._getElement(applet, "appletdiv").style.border="1px solid blue"
	}

	jmolInfo = {
		width: "100%",
		height: "100%" ,
		debug: false ,
		color: "#FFFFFF", //"["+bg_color+"]" , //#191919
		use: "HTML5",
		j2sPath: "jsmol/j2s",
		jarPath: "jsmol/java",
		jarFile: "JmolAppletSigned.jar",
		readyFunction: jmol_isReady,
		script:  "set frank off;",
		allowJavaScript: true,
	}
	// ?_USE=JAVA   ?_USE=SIGNED   ?_USE=HTML5
	if (s.indexOf("USE=") >= 0)
		jmolInfo.use = s.split("USE=")[1].split("&")[0]
	else if (s.indexOf("JAVA") >= 0)
		jmolInfo.use = "JAVA"
	else if (s.indexOf("IMAGE") >= 0)
		jmolInfo.use = "IMAGE"
	else if (s.indexOf("NOWEBGL") >= 0)
		jmolInfo.use = "JAVA IMAGE"
	else if (s.indexOf("WEBGL") >= 0)
		jmolInfo.use = "WEBGL HTML5"
	if (s.indexOf("NOWEBGL") >= 0)
		jmolInfo.use = use.replace(/WEBGL/,"")
	var useSignedApplet = (s.indexOf("SIGNED") >= 0);
	if(useSignedApplet && jmolInfo.use == "HTML5") jmolInfo.use = "JAVA";
	
	var protocol = window.location.protocol.toLowerCase();
	if (protocol == "file:") {
		jmolInfo.width= "100%";
		jmolInfo.height= "100%";
		jmolInfo.jarPath = "jsmol/java";
		jmolInfo.j2sPath = "jsmol/j2s";
		jmolInfo.makeLiveImg = "jsmol/j2s/img/play_make_live.jpg";
		jmolInfo.jarFile = "JmolAppletSigned.jar";
		jmolInfo.isSigned= "true";
		jmolInfo.allowJavaScript= "true";
	}

})();

Jmol.setDocument(document);

// notice that we are using no document.write() function here. All DOM-based.
// Jmol.getAppletHtml is working.

$(document).ready(function(){//set up each of the applet locations
	var jmol_ElementList = document.getElementsByClassName("jmol_div");
	console.log("Document Ready Function Start")
	console.log(jmol_ElementList.length)
	for (var i = 0; i  <  jmol_ElementList.length ; i++) {
		console.log(jmol_ElementList[i].id)
		var jmolAppId = jmol_ElementList[i].id
		//var jmolAppdata = jmol_ElementList[i].getAttribute("data")
		var jmolAppscr = jmol_ElementList[i].getAttribute("scr")
		//console.log(jmolAppdata)
		var tempjmolInfo = jmolInfo ;
                //tempjmolInfo.script = "set frank off; load " + jmolAppdata + "; " + jmolAppscr
				tempjmolInfo.script = "set frank off" + "; " + jmolAppscr
//		tempjmolInfo.script(jmolAppdata)
		console.log("jmolApplet"+jmolAppId+" "+tempjmolInfo.script)
		$(jmol_ElementList[i]).html(Jmol.getAppletHtml("jmolApplet"+jmolAppId,tempjmolInfo));
	};
	console.log("Jmol Document Ready Function Stop")

	$("input[name='jmolradio']").on("change",function(){
		var jscr = $(this).attr("scr")
		var japp =  window[$(this).attr("app")]
		console.log(japp + " " +"jmolAppletjmol0"+" " + jscr)
//		$(this).html(Jmol.script("japp",jscr))
		Jmol.script(japp,jscr)
	})
// Works only once have to reload page again to make it work. name should be same for RadioGroup to work
//	$("input[type=radio]").click(function(){
//		console.log("Clicked")
//	})


//	var radio_list = document.getElementsByClassName("jmolradio");
//	console.log("RadioListlength"+radio_list.length)
//	for (var i; i< radio_list.length; i++){
//		var japp = "jmolApplet" + radio_list[i].getAttribute("app");
//		var jscr = radio_list[i].getAttribute("scr");
//		var tempjmolInfo = jmolInfo;
//		tempjmolInfo.script = jscr;
//		$(radio_list[i]).click(function(){
//			console.log(japp+" "+jscr)
//		});
//	}
//	var jmolscript_EleList = document.getElementsByClassName("jmolscript");
//	console.log(jmolscript_EleList.length)
//	for (var i = 0; i< jmolscript_EleList.length; i++) {
//		var japp = jmolscript_EleList[i].getAttribute("app");
//		var jscr = jmolscript_EleList[i].getAttribute("scr");
//		var jtxt = jmolscript_EleList[i].getAttribute("txt");
////		Jmol.jmolButton("jmolApplet"+japp,jscr,"Push");
//		$(jmolscript_EleList[i]).html(Jmol.setButtonCss(japp,"style='position:absolute;left:0px;font-size:30px'"));
//		$(jmolscript_EleList[i]).html(Jmol.jmolButton(japp,jscr,jtxt))
//	};

});


	      

