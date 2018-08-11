

var fileUploadK; // ファイルアップロードの拡張クラス


$(() => {
	
	fileUploadK = new FileUploadK();
	fileUploadK.addEvent('file1',{'pacb':callback1});

});

function callback1(){
	jQuery('#btn1').show();
}

function getFileNames(){
	
	var fns = fileUploadK.getFileNames();
	var fns_str = fns.join('<br>');
	jQuery('#res').append(fns_str);
}
