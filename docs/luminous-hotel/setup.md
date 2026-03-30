---
sidebar_position: 2
---

# セットアップと導入

LuminousHotel を**新規 Unity プロジェクトへ導入**し、シーンを**正しく開ける状態**まで進めるための手順です。

## 必要な環境

- Unity 2022.3 LTS 系
- VRChat Creator Companion
- VRChat SDK3 Worlds
- TextMeshPro
- VRC Light Volumes

## 1. VCC の導入と新規プロジェクト作成

VRChat の Web サイトから **Creator Companion をインストール**してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image6.png" alt="Creator Companion のダウンロード画面" width="346.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image50.png" alt="Creator Companion のプロジェクト作成画面" width="564.5" />
</div>

特別な理由がない限り、既存プロジェクトへ追加するよりも**新規プロジェクトを作成**する構成を推奨します。ワールド向けのテンプレートを選び、**Create Project** でプロジェクトを作成してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image37.png" alt="Open Project ボタンの位置" width="169.02" />
</div>

## 2. VRC Light Volumes を追加する

LuminousHotel **ver1.10 以降**では VRC Light Volumes に対応しています。導入前に **VCC へ登録**してください。

1. [VPM Listing](https://redsim.github.io/vpmlisting/) を開く
2. **Add to VCC** を押して Creator Companion に登録する
3. 対象プロジェクトの **Manage Project** を開く
4. **Manage Packages** から VRC Light Volumes を追加する
5. **Installed Version を最新**にしてインポートする

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image8.png" alt="VPM Listing から VRC Light Volumes を追加する画面" width="624" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image46.png" alt="Manage Project ボタンの位置" width="624" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image11.png" alt="Manage Packages で VRC Light Volumes を追加する画面" width="624" />
</div>

**ver1.10 以降の LuminousHotel** をインポートすれば、シーンを開いた時点で Light Volume の設定は適用済みです。

## 3. UnityPackage をインポートする

購入したパックでダウンロードできる UnityPackage は、対象パックに応じて**すべてインポート**してください。  


### Full Pack の場合

- SimpleRoom_702
- Condominium_701
- LuminousHotel_FullPack

:::warning
**Full Pack は最後にインポートする必要があります。**  
先に入れると、扉の鍵が開けられない問題が発生することがあります。   
順番を誤った場合は、再インポートしてからシーンを開き直してください。
:::

### Condominium 701 と 702 の場合

- SimpleRoom_702
- Condominium_701

### SimpleRoom 702 の場合

- SimpleRoom_702

既存プロジェクトへ導入した場合、シェーダー競合で**全体がピンク**になることがあります。原因が切り分けにくい場合は、**新規プロジェクトでの導入**が安全です。

## 4. TextMeshPro Essentials を導入する

インポート後に TMP Importer が表示されたら、**Import TMP Essentials** を実行してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image1.png" alt="TMP Importer のダイアログ" width="600" />
</div>

先にシーンを開いてから導入した場合は、**シーンを開き直す**と表示が安定します。もしウィンドウを閉じてしまった場合は、**Window から Package Manager** を開き、**Unity Registry の TextMeshPro** から導入してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image7.png" alt="Package Manager から TextMeshPro を導入する画面" width="600" />
</div>

## 5. シーンを開く

以下のシーンは **Project ウィンドウからダブルクリック**で開いてください。ドラッグアンドドロップで開くと、**マルチシーン扱い**になり正しくセットアップできません。

:::warning シーンはダブルクリックで開く
ドラッグアンドドロップで開くとマルチシーン扱いになり、正しくセットアップできません。
:::

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image41.png" alt="Project ウィンドウからシーンを開く例" width="800" />
</div>

### Full Pack

Assets/QuickBrown/LuminousHotel/FullPack/SCENE/LuminousHotel_FullPack.unity

### Condominium 701

Assets/QuickBrown/LuminousHotel/Room701_Condominium/SCENE/Condominium_701.unity

### SimpleRoom 702

Assets/QuickBrown/LuminousHotel/Room702_SimpleRoom/SCENE/SimpleRoom_702.unity

## 次に進むページ

[シーン初期設定](./scene-settings.md) で RoomOwner やサインプレートの設定へ進んでください。