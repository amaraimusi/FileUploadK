#!/bin/sh
echo 'ソースコードを差分アップロードします。'

rsync -auvz ../FileUploadK amaraimusi@amaraimusi.sakura.ne.jp:www/

echo "------------ 送信完了"
#cmd /k