<?php

require_once 'FileUploadK/FileUploadK.php';

if($_SERVER['SERVER_NAME']=='localhost'){
	
	$option = array(
			'dpDatas' => array(
					'file1' => array(
						'orig_dp' => '/FileUploadK/upload_files/file1/orig',
						'thums'	=> array(
								array(
										'thum_dp' => '/FileUploadK/upload_files/file1/thum',
										'thum_width' => 64,
										'thum_height' => 64,
								),
								array(
										'thum_dp' => '/FileUploadK/upload_files/file1/mid/',
										'thum_width' => 240,
										'thum_height' => null,
								),
						),
					),
					'file3' => array(
							'orig_dp' => '/FileUploadK/upload_files/file3/orig/',
							'thums'	=> array(
									array(
											'thum_dp' => '/FileUploadK/upload_files/file2/thum',
											'thum_width' => 64,
											'thum_height' => 64,
									),
							),
					),
			),
			
			'valids' => array(
					'file1' => array(
							'permit_exts' => 'png,jpg,jpeg,gif',
							'permit_mimes' => 'image/jpeg,image/png,iamge/gif',
							'mime_check_flg' => 1,
							'wamei' => 'ファイル1'
					),
					'file3' => array(
							'permit_exts' => 'txt',
					)
			),
	);
	
	// ファイルアップロードの一括処理
	$fileUploadK = new FileUploadK();
	$res = $fileUploadK->workAllAtOnce($_FILES,$option);
	var_dump($res);
}

// ファイル名リストを取得する
$fileNames = [];
foreach($_FILES as $fue_id=> $files){
	foreach($files['name'] as $i => $fn){
		$fileNames[] = $fn;
	}
}

$ent_json_str = $_POST['key1'];
$ent = json_decode($ent_json_str,true);//JSON文字を配列に戻す
$ent['animal_name'] = 'ティラピア';


$res = [
		'msg'=>'success',
		'fileNames'=>$fileNames,
		'ent'=>$ent,
];

$json_str = json_encode($res,JSON_HEX_TAG | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_HEX_APOS);
echo $json_str;
?>