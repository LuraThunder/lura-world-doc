---
sidebar_position: 3
---

# シーン初期設定

シーンを開いた後、アップロード前に確認しておきたい設定項目をまとめています。

## RoomOwner の設定

RoomOwner には複数人を登録できます。登録したユーザーは、実行時にディスプレイへ名前が表示され、ムードボードのサインプレートにアクセスできます。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image24.png" alt="RoomOwner の設定場所" width="500" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image31.png" alt="RoomOwnerList のインスペクター" width="500.5" />
	</div>
</div>

判定は VRChat のユーザー名で行われます。自分やフレンドのユーザー名を登録して利用してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image45.png" alt="RoomOwner のユーザー名入力欄" width="361.5" />
</div>

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image47.png" alt="VRChat 名での判定例 1" width="199.5" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image21.png" alt="VRChat 名での判定例 2" width="114.5" />
	</div>
</div>

Full Pack を利用している場合、RoomOwner に登録されたユーザーはロビーでルームキーを利用できます。701 と 702 で個別にリストを持てます。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image49.png" alt="Full Pack での RoomOwner 関連設定" width="800" />
</div>

## サインプレートの設定

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image28.png" alt="サインプレート全体の設定位置" width="800" />
</div>

### BGM の設定

各プレートごとに BGM を設定できます。AudioClip を使う方法と、動画 URL を使う方法があります。動画 URL を使う場合は isVideoMode を有効にしてください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image19.png" alt="BGM と Video URL の設定欄" width="600" />
</div>

SignPlate_0(Default) は、プレートが掛かっていない時の既定 BGM 用です。必須ではありませんが、動画読み込みが発生しない AudioClip 方式を推奨します。

### ムードオブジェクトの設定

SignPlateObjects に追加したオブジェクトは、そのムードの時だけ表示されます。反対に SignPlateObjects Inactive に入れたものは非表示になります。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image10.png" alt="SignPlateObjects の設定欄" width="624" />
</div>

:::warning 既存オブジェクトは消さない
もともと含まれている 1_Chill などのオブジェクトは、ポストエフェクトやリバーブ調整に使われているため、そのまま残してください。
:::

もともと含まれている 1_Chill などのオブジェクトは、ポストエフェクトやリバーブ調整に使われているため、そのまま残してください。

## 動画プレーヤーの設定

動画プレーヤーは MoviePlayerHere の階層へ入れると、Movie プレート選択時に表示される構成です。好みの動画プレーヤーを配置して使ってください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image27.png" alt="MoviePlayerHere の階層" width="525" />
</div>

デモワールドでは VizVid を利用しています。動画プレーヤー固有の操作や設定は、各プレーヤーのマニュアルを参照してください。

### VizVid の配置例

#### 701 の画面配置

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image2.png" alt="VizVid の画面プレート" width="600" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image36.png" alt="701 の VizVid 配置位置" width="800" />
</div>

#### 701 のオーディオ設定

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image22.png" alt="701 のオーディオ設定 1" width="400" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image17.png" alt="701 のオーディオ設定 2" width="600" />
	</div>
</div>

#### 702 の配置とオーディオ設定

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image2.png" alt="702 の画面プレート" width="600" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image57.png" alt="702 の VizVid 配置位置" width="800" />
</div>

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image39.png" alt="702 のオーディオ設定 1" width="400" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image54.png" alt="702 のオーディオ設定 2" width="600" />
	</div>
</div>

## 次に進むページ

[アップロードと Quest 対応](./upload.md) で公開準備へ進んでください。