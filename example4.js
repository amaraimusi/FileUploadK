

var fileUploadK; // ファイルアップロードの拡張クラス


$(() => {
	
	fileUploadK = new FileUploadK({
		'ajax_url':'php/example4.php',
		'prog_slt':'#prog1',
		'err_slt':'#err',
		'valid_ext':'image',
		});
	fileUploadK.addEvent('file1',{'img_width':120,'img_height':120});
	fileUploadK.addEvent('file2',{'valid_ext':'audio'});
	fileUploadK.addEvent('file3',{'valid_ext':'txt'});
	
});



function ajaxReg(){
	
	// ファイル情報と一緒に送信するデータ
	var withData = {
			'category1':'汽水・淡水魚',
			'category2':'サケ',
			};
	
	fileUploadK.uploadByAjax(resOutput,withData);
}


//レスポンス出力
function resOutput(res){
	var resElm = jQuery('#res1');
	resElm.html(res.msg + '<br>');
	
	resElm.append('<p>ファイル名の出力</p>');
	var str_fns = res.fileNames.join('<br>');
	resElm.append(str_fns);
	
	// エンティティの出力
	var ent_str = '<br><p>エンティティの出力</p>';
	var ent = res.ent;
	for(field in ent){
		var value = ent[field];
		ent_str += field + ' = ' + value + '<br>';
	}
	resElm.append(ent_str);
	
}


