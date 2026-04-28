---
sidebar_position: 2
---

# セットアップと導入

LuminousHotel を**新規の Unity プロジェクトへ導入**し、**シーンを正しく開ける状態**まで進めるための手順です。

## 必要な環境

- Unity 2022.3 LTS
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

特別な事情がない限り、既存のプロジェクトへ追加するよりも **新規プロジェクトを作成**する方法をおすすめします。ワールド向けテンプレートを選び、**Create Project** でプロジェクトを作成してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image37.png" alt="Open Project ボタンの位置" width="169.02" />
</div>

## 2. VRC Light Volumes を追加する

LuminousHotel **ver1.10 以降**では VRC Light Volumes に対応しています。先に **VCC へ追加**しておいてください。

1. [VPM Listing](https://redsim.github.io/vpmlisting/) を開く
2. **Add to VCC** を押して Creator Companion に追加する
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

**ver1.10 以降の LuminousHotel** をインポートすると、シーンを開いた時点で Light Volume の設定は適用済みです。

## 3. lilToon を追加する

[lilToon 公式サイト](https://lilxyzw.github.io/lilToon/) にアクセスし、**VCC に追加**から最新の **lilToon** を導入してください。

1. [lilToon 公式サイト](https://lilxyzw.github.io/lilToon/) を開く
2. **VCC に追加** を押して Creator Companion に登録する
3. 対象プロジェクトの **Manage Project** を開く
4. **Manage Packages** から **lilToon** を追加する
5. **Installed Version を最新**にしてインポートする

## 4. UnityPackage をインポートする

購入したパックに対応する UnityPackage を、対象パックに応じて**すべてインポート**してください。

:::warning ver2.0以前の既存 LuminousHotel プロジェクトには導入しない
ver2.0以前の既存の LuminousHotel とは互換性がなく、そのまま LuminousOasis を導入するとシーンや設定データが壊れるおそれがあります。  
ver1.x系を利用していてver2.0に移行する場合は、必ず新規プロジェクトを作成したうえで導入してください。
:::

:::tip Ver2.0 のアップデート
・スイッチやミラーがLuraSwitch2 仕様に置き換わっています。  
・エレベーターで他のフロアに移動できるようになりました。

**この変更が不要な場合は、Ver1系から無理にアップデートする必要はありません。**
:::
[関連する質問：古いバージョンのLuminous Hotelに入れても大丈夫？](./troubleshooting)

### Full Pack の場合

- SimpleRoom_702
- Condominium_701
- LuminousHotel_FullPack

:::warning
**Full Pack は最後にインポートする必要があります。**  
先に入れると、部屋の鍵が開けられない不具合が起きることがあります。  
順番を間違えた場合は、インポートし直してからシーンを開き直してください。
:::

### Condominium 701 と 702 の場合

- SimpleRoom_702
- Condominium_701

### SimpleRoom 702 の場合

- SimpleRoom_702

既存のプロジェクトへ導入した場合、シェーダー競合で**全体がピンク**になることがあります。原因の切り分けが難しい場合は、**新規プロジェクトでの導入**が安全です。

## 5. TextMeshPro Essentials を導入する

インポート後に TMP Importer が表示されたら、**Import TMP Essentials** を実行してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image1.png" alt="TMP Importer のダイアログ" width="600" />
</div>

先にシーンを開いてから TMP を導入した場合は、表示を正しく反映させるために**シーンを開き直す**必要があります。もしウィンドウを閉じてしまった場合は、**Window から Package Manager** を開き、**Unity Registry の TextMeshPro** から導入してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image7.png" alt="Package Manager から TextMeshPro を導入する画面" width="600" />
</div>

## 6. シーンを開く

以下のシーンは **Project ウィンドウからダブルクリック**して開いてください。ドラッグアンドドロップで開くと、**マルチシーン構成**として扱われ、正しくセットアップできません。

:::warning シーンはダブルクリックで開く
ドラッグアンドドロップで開くとマルチシーン構成として扱われ、正しくセットアップできません。
:::

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image41.png" alt="Project ウィンドウからシーンを開く例" width="800" />
</div>

## 各シーンの格納場所

### Full Pack

Assets/QuickBrown/LuminousHotel/FullPack/SCENE/LuminousHotel_FullPack.unity

### Condominium 701

Assets/QuickBrown/LuminousHotel/Room701_Condominium/SCENE/Condominium_701.unity

### SimpleRoom 702

Assets/QuickBrown/LuminousHotel/Room702_SimpleRoom/SCENE/SimpleRoom_702.unity

次に、[シーン初期設定](./scene-settings.md)で RoomOwner やサインプレートを設定します。
