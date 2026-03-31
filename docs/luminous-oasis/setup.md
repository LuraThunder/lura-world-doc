---
sidebar_position: 2
---

# セットアップと導入

LuminousOasis を新規 Unity プロジェクトへ導入し、シーンを正しく開ける状態まで進めるための手順です。

## 必要な環境

- Unity 2022.3 LTS 系
- VRChat Creator Companion
- VRChat SDK3 Worlds
- TextMeshPro
- VRC Light Volumes

## 1. VCC の導入と新規プロジェクト作成

VRChat の Web サイトから Creator Companion をインストールし、ワールド用の新規プロジェクトを作成してください。

:::warning ver2.0以前の既存 LuminousHotel プロジェクトには導入しない
ver2.0以前の既存の LuminousHotel とは互換性がなく、そのまま LuminousOasis を導入するとシーンや設定データが壊れるおそれがあります。
LuminousOasis を利用する場合は、必ず新規プロジェクトを作成したうえで導入してください。
:::

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image1.png" alt="Creator Companion のダウンロード画面" width="600" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image2.png" alt="Creator Companion のプロジェクト作成画面" width="600" />
	</div>
</div>

既存プロジェクトへ追加するよりも、新規プロジェクトを作成して導入する構成を推奨します。特に ver2.0以前の LuminousHotel を含む既存プロジェクトへの追加は避けてください。プロジェクト作成後は Open Project から Unity を開いてください。

:::warning 新規プロジェクトから導入する
既存プロジェクトへ追加せず、新規プロジェクトからセットアップしてください。
:::

ワールド向けの設定を選択し、Create Project を押してください。VRChat アップデートで表記が変わる可能性があります。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image3.png" alt="Open Project ボタンの位置" width="169.02" />
</div>

## 2. VRC Light Volumes を追加する

LuminousOasis は VRC Light Volumes を使用しています。導入前に VCC へ登録し、対象プロジェクトへインポートしてください。

1. [VPM Listing](https://redsim.github.io/vpmlisting/) を開く
2. Add to VCC を押して Creator Companion に登録する
3. 対象プロジェクトの Manage Project を開く
4. Manage Packages から VRC Light Volumes を追加する
5. Installed Version を確認してインポートする

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image4.png" alt="VPM Listing から VRC Light Volumes を追加する画面" width="624" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image5.png" alt="Manage Project ボタンの位置" width="624" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image6.png" alt="Manage Packages で VRC Light Volumes を確認する画面" width="624" />
</div>

これで事前準備は完了です。

## 3. UnityPackage をインポートする

購入したパックに応じて、必要な UnityPackage をインポートしてください。

### LuminousOasis 単体で使う場合

- LuminousOasis

### LuminousHotel と一緒に使う場合

- Condominium_701
- SimpleRoom_702
- LuminousHotel_FullPack
- LuminousOasis

LuminousHotel と組み合わせる場合は Full Pack 構成のみ対応しています。ホテル側のパッケージを先に入れてから、LuminousOasis.unitypackage をインポートしてください。

:::tip ヒント
LuminousHotel と一緒に使う場合は、Full Pack のみ対応しています。ご注意ください。
:::

:::warning ピンク色のシェーダーエラーが発生する場合
既存のプロジェクトにインポートしている場合は、シェーダーが重複している可能性があります。片方のシェーダーを削除するか、新規にプロジェクトを作成してください。
:::

## 4. TextMeshPro Essentials を導入する

インポート後に TMP Importer が表示されたら、**Import TMP Essentials** を実行してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image7.png" alt="TMP Importer のダイアログ" width="600" />
</div>

テキストの描画に必要なものです。先にシーンを開いた後に Import した場合は、シーンを開きなおしてみてください。

ウィンドウを閉じてしまった場合は、Window から Package Manager を開き、Unity Registry の TextMeshPro から導入してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image8.png" alt="Package Manager で TextMeshPro を導入する画面" width="600" />
</div>

## 5. シーンを開く

シーンは Project ウィンドウからダブルクリックで開いてください。ドラッグアンドドロップで開くとマルチシーン扱いになり、正しくセットアップできません。

:::warning シーンはダブルクリックで開く
ドラッグアンドドロップで開くとマルチシーン扱いになり、正しくセットアップできません。
:::

### LuminousOasis 単体

Assets/QuickBrown/LuminousOasis/SCENE/LuminousOasis.unity

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image9.png" alt="LuminousOasis 単体シーンの場所" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/setup-scene-open-oasis-2.jpg" alt="LuminousOasis 単体シーンの全景" width="520" />
	</div>
</div>

### LuminousHotel と一緒に使う場合

Assets/QuickBrown/LuminousHotel/FullPack_OasisPlus/SCENE/FullPack_OasisPlus.unity

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image10.png" alt="FullPack_OasisPlus シーンの場所" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/setup-scene-open-oasisplus-2.jpg" alt="FullPack_OasisPlus シーンの全景" width="520" />
	</div>
</div>

## 次に進むページ

[シーン初期設定](./scene-settings) で RoomOwner や BGM の設定へ進んでください。