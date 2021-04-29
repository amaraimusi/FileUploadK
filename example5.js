

var fileUploadK; // ファイルアップロードの拡張クラス


$(() => {
	
	fileUploadK = new FileUploadK();
	fileUploadK.addEvent('file1');

	//var fps = "upload_files/20210325a2.mp4";
	var fps = "upload_files/MVI_1057.MP4";
	fileUploadK.setFilePaths('file1',fps);
});
