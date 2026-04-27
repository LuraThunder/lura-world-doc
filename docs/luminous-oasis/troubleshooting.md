---
sidebar_position: 5
---

# よくある質問

セットアップ時や公開前に詰まりやすい項目をまとめています。


### 古いバージョンのLuminous HotelにLuminous Oasisを入れても大丈夫？

エレベーターのギミックなどを刷新しているため、**壊れてしまう可能性が高い**です。  
新規プロジェクトを作成し、中身の移植を検討してください。  
壊れてしまってもサポート対応はできかねますのでご注意ください。


:::tip 移植のヒント
・旧プロジェクトを開き、Hierarchyから必要なオブジェクトを複数選択して、右クリックからコピー  
・空の新規シーンを作成し、ExportSceneなどの名前で保存。  
・ExportSceneのHierarchyの空いているところを右クリックしてペースト。  
・プロジェクトパネルからそのシーンを選択し、右クリックしてExportPackage。（必要なものだけ）  
・新プロジェクトにインポートして、ExportSceneを開き、すべてコピー後、新シーンにぺースト。  
  
  という流れでシーンの中身を移植するのが比較的簡単な方法です。
:::

---

### LuminousHotel と一緒に使う時の対応構成

LuminousOasis をホテルと組み合わせる場合は、Full Pack 構成のみ対応しています。  
  
Condominium_701  
SimpleRoom_702  
LuminousHotel_FullPack  
  
を先に入れ、その後に   
  
LuminousOasis.unitypackage   
  
をインポートしてください。

---

### テキストが表示されない

TMP Importer で Import TMP Essentials を実行するか、Package Manager の Unity Registry から TextMeshPro を導入してください。

---

### シーンが正しく開けない

シーンは Project ウィンドウから**ダブルクリック**で開いてください。**ドラッグアンドドロップで開くとマルチシーン扱いになり**、想定外の状態になります。
:::tip
なぜかマルチシーンでもアップロードできてしまうことがありますが、ワールドに入ることができません。
:::

---

### 実行時やアップロード時にエラーが出て起動できない / アップロードできない

アセットを追加したり削除したりした後などに、Scene ID の不整合が発生して、Unity での実行や VRChat へのアップロードが失敗することがあります。

その場合は **Network ID Utility** を開いて、**Regenerate Scene IDs** を押してください。

1. **VRChat SDK > Utilities > Network ID Import and Export Utility** を開く
2. Target が **VRCWorld** になっていることを確認する
3. **Regenerate Scene IDs** を押す
4. 必要に応じてシーンを保存してから、もう一度実行またはアップロードする

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/NetworkIDUtility_open.jpg" alt="VRChat SDK から Network ID Utility を開く場所" width="460" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/NetworkIDUtility.jpg" alt="Network ID Utility の画面と Regenerate Scene IDs ボタン" width="460" />
</div>

---



## 関連ページ

- [セットアップと導入](./setup)
- [シーン初期設定](./scene-settings)
- [ギミック解説](./gimmicks)
