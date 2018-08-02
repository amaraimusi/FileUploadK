<?php

$fileNames = [];
foreach($_FILES as $key=> $file){
	if($_SERVER['SERVER_NAME']=='localhost'){
		move_uploaded_file($file["tmp_name"], 'upload_files/'.$file["name"]);
	}
	$fileNames[] = $file["name"];
}

$ent_json_str = $_POST['key1'];
$ent = json_decode($ent_json_str,true);//JSON文字を配列に戻す
$ent['animal_name'] = 'ビワマス';


$res = [
		'msg'=>'success',
		'fileNames'=>$fileNames,
		'ent'=>$ent,
];

$json_str = json_encode($res,JSON_HEX_TAG | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_HEX_APOS);
echo $json_str;
?>