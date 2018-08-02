

var fileUploadK; // ファイルアップロードの拡張クラス


$(() => {
	
	fileUploadK = new FileUploadK({
		'ajax_url':'upload.php',
		'prog_slt':'#prog1',
		'err_slt':'#err',
		});
	fileUploadK.addEvent('file1');
	fileUploadK.addEvent('file2');
	
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


function getFileParams(){
	var data = fileUploadK.getFileParams();
	var tbody = '';

	for(var i in data){
		var ent = data[i];
		tbody += "<tr>" +
				"<td>" + ent.fu_id + "</td>" +
				"<td>" + ent.name + "</td>" +
				"<td>" + ent.size + "</td>" +
				"<td>" + ent.mime + "</td>" +
				"<td>" + ent.modified + "</td>" +
				"</tr>";
	}
	jQuery("#f_param_tbl tbody").html(tbody);
}

// ■■■□□□■■■□□□■■■□□□
//
//function ajaxReg(){
//
//	m_ajax_url = 'upload_demo4.php';
//	var prog_slt = '#prog1';
//	
//	var option={};
//	if(option['fu_show_flg'] == null){
//		option['fu_show_flg'] = 0;
//	}
//	
//	_uploadByAjax(m_files,prog_slt,m_ajax_url,callbackAfter,option); // AJAXによるアップロード
//}
//
//function callbackAfter(res){
//	$('#res1').html(res);
//}
//
///**
// * ファイルアップロード要素のラッパー要素にファイルドラッグ＆ドロップイベントを追加する
// * 
// * @param fue_id ファイルアップロード要素のセレクタ
// * @param option 未使用
// */
//function addEvent(fue_id,option){
//	
//	// ■■■□□□■■■□□□■■■□□□
////	if(option['fu_show_flg'] == null){
////		option['fu_show_flg'] = 0;
////	}
//	
//	// ファイルアップロード要素のラッパー要素（DnD要素）を取得する
//	var fuw = jQuery("[for='" + fue_id + "']");
//	
//	// DnDイベントをラッパー要素に追加
//	fuw[0].addEventListener('drop',function(evt){
//		evt.stopPropagation();
//		evt.preventDefault();
//
//		var files = evt.dataTransfer.files; 
//		console.log('test=ドロップイベント');//■■■□□□■■■□□□■■■□□□)
//		//_uploadByAjax(files,prog_slt,ajax_url,callback,option); // AJAXによるアップロード
//		
//		m_files = files;
//	},false);
//	
//	fuw[0].addEventListener('dragover',function(evt){
//		evt.preventDefault();
//	},false);
//	
//	// ファイルアップロード要素のイベント
//	var fu = jQuery('#' + fue_id);
//	fu.change(function(e) {
//		
//		var files = e.target.files; // ファイルオブジェクト配列を取得（配列要素数は選択したファイル数を表す）
//		//_uploadByAjax(files,prog_slt,ajax_url,callback,option); // AJAXによるアップロード
//		m_files = files;
//	});
//	
////	// ファイルアップロード要素の表示フラグがOFFならファイルアップロード要素を隠す。
////	if(option.fu_show_flg == 0){
////		fu.hide();
////	}
//	
//}
//
//
//
///**
// * AJAXによるアップロード
// * @param files ファイルオブジェクトリスト
// * @param prog_slt 進捗バー要素のセレクタ
// * @param ajax_url 
// * @param callback(res) ファイルアップロード後コールバック
// * @param option
// *  - fu_show_flg ファイルアップロード要素の表示 0:非表示（デフォルト） , 1:表示
// */
//function _uploadByAjax(files,prog_slt,ajax_url,callback,option){
//	
//	console.log('test=_uploadByAjax');//■■■□□□■■■□□□■■■□□□)
//
//	var fd = new FormData();
//	for(var i in files){
//		fd.append(i, files[i]);
//	}
//	
//	var ent = {
//			'category1':'汽水・淡水魚',
//			'category2':'サケ',
//			};
//	var ent_json_str = JSON.stringify(ent);
//	fd.append( "key1", ent_json_str );
//
//	var prog1 = $(prog_slt); // 進捗バー要素
//	
//	// AJAXによるファイルアップロード
//	$.ajax({
//		type: "POST",
//		url: ajax_url,
//		data: fd,
//		cache: false,
//		dataType: "text",
//		processData : false,
//		contentType : false,
//		xhr : function() { // 進捗イベント
//			var XHR = $.ajaxSettings.xhr();
//			if (XHR.upload) {
//				XHR.upload.addEventListener('progress',
//						function(e) {
//							var prog_value = parseInt(e.loaded / e.total * 10000) / 100;
//							prog1.val(prog_value);
//						}, false);
//			}
//			return XHR;
//		},
//
//	})
//	.done((str_json, type) => {
//		var res;
//		try{
//			res =jQuery.parseJSON(str_json);//パース
//		}catch(e){
//			jQuery("#err").html(str_json);
//			return;
//		}
//		
//		resOutput(res); // レスポンス出力
//		
//		
//	})
//	.fail(function(jqXHR, statusText, errorThrown) {
//		
//		var err_res = jqXHR.responseText;
//		console.log(err_res);
//		jQuery('#err').html(err_res);
//		alert(statusText);
//	});
//}
//
//
//// レスポンス出力
//function resOutput(res){
//	var resElm = jQuery('#res1');
//	resElm.html(res.msg + '<br>');
//	
//	resElm.append('<p>ファイル名の出力</p>');
//	var str_fns = res.fileNames.join('<br>');
//	resElm.append(str_fns);
//	
//	// エンティティの出力
//	var ent_str = '<br><p>エンティティの出力</p>';
//	var ent = res.ent;
//	for(field in ent){
//		var value = ent[field];
//		ent_str += field + ' = ' + value + '<br>';
//	}
//	resElm.append(ent_str);
//	
//}