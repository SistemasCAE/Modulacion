var bcs = {
	abrirCamara: function(){
		window.plugins.toast.show("aquiiiiiiiiiiii", 'long', 'center');
			cordova.plugins.barcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  },
		  function (error) {
			  alert("Scanning failed: " + error);
		  },
		  {
			  preferFrontCamera : true, // iOS and Android
			  showFlipCameraButton : true, // iOS and Android
			  showTorchButton : true, // iOS and Android
			  torchOn: true, // Android, launch with the torch switched on (if available)
			  saveHistory: true, // Android, save scan history (default false)
			  prompt : "Place a barcode inside the scan area", // Android
			  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
			  formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
			  orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
			  disableAnimations : true, // iOS
			  disableSuccessBeep: false // iOS and Android
		  }
	   );
		
		/*cordova.plugins.barcodeScanner.scan(
			function (result) {
				if(result.text != ""){
					//navigator.vibrate(500);
					$("#botonEscanea").removeClass("ui-btn-active");
					//alert("Datos Obtenidos\n" +
					//		"Result: " + result.text);
					if(networkInfo.estaConectado() == false){
						window.plugins.toast.show("No existe conexión a internet, Datos almacenados localmente", 'long', 'center');
						almacena.guardaPedimento(window.localStorage.getItem("nombreUsuario"),result.text,"");
						fn.sleep(2500);
						//alert("No existe conexión a internet, revisela e intente de nuevo");
					}else{
						fn.enviarRegistro(result.text);
					}
				  }
			  },
			  
			function (error) {
				//alert("Scanning failed: " + error);
				window.plugins.toast.show("Scanning failed: " + error, 'long', 'center');
			},
			{
				"preferFrontCamera" : false, // iOS and Android 
				"showFlipCameraButton" : true, // iOS and Android 
				"prompt" : "Coloque el código en el área especificada", // supported on Android only 
				"formats" : "QR_CODE,RSS_EXPANDED,PDF_417",//"QR_CODE,DATA_MATRIX,UPC_E,UPC_A,EAN_8,EAN_13,CODE_128,CODE_39,CODE_93,CODABAR,ITF,RSS14,RSS_EXPANDED,PDF_417", // default: all but PDF_417 and RSS_EXPANDED 
				//"orientation" : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device 
				"showTorchButton" : true, // iOS and Android 
				"torchOn": false // Android, launch with the torch switched on (if available) 
			}
		);*/	
	}
};