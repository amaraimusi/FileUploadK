

var fileUploadK; // ファイルアップロードの拡張クラス


$(() => {
	
	fileUploadK = new FileUploadK();
	fileUploadK.addEvent('file1');

	var fps = ["upload_files/imori.jpg","upload_files/tokage.jpg","upload_files/yagi.txt"];
	fileUploadK.setFilePaths('file1',fps);
});
