---
sidebar_position: 6
---

# ギミック解説

LuminousOasis に含まれる各ギミックの役割と設定箇所をまとめています。

## AreaCullinger について

Occlusion Culling が効かない Canvas などを目的にしたカリング用ギミックです。トリガーの範囲外に出ると Canvas を非表示にして負荷を軽減します。

OasisPlus のような大規模なシーンでの負荷調整のために設定してあります。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image29.png" alt="AreaCullinger の階層位置" width="624" />
</div>

---

## LightVolumeTrigger について

トリガー範囲内の PointLightVolume の明るさをコントロールしています。トリガー内に入ると PointLightVolume が点灯し、出ると消灯します。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image30.png" alt="LightVolumeManager と LightVolumeTrigger の階層" width="624" />
</div>

---

## LurasVoiceShutter について

エリアごとに声を分離するためのギミックです。RoomId を指定した VoicesTrigger_Area を配置することで、声の聞こえ方をコントロールできます。デフォルトでは、ラウンジとサウナは声が遮蔽されます。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image31.png" alt="LurasVoiceShutter_PoolSet の階層" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image32.png" alt="Luras Voice Shutter Room Trigger の設定欄" width="520" />
	</div>
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image33.png" alt="Luras Voice Shutter の設定欄" width="600" />
</div>

---

## TeleportSystem について

階段エリアにはテレポート用のトリガーが設定してあります。LuminousOasis 単体ではデフォルトで非アクティブです。

TeleportTrigger の範囲内に入ったら TARGET へと移動します。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image34.png" alt="TeleportSystem と TeleportTrigger の階層" width="624" />
</div>

---

## エレベーターギミックについて

エレベーターだけのサンプルシーンは以下にあります。

Assets/QuickBrown/LuminousHotel/FullPack/3DASSET/04_GIMMICK/Elevator/SCENE

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image35.png" alt="エレベーターのサンプルシーン外観" width="624" />
</div>

スポーン位置がエレベーターの中心位置、つまり teleportTarget の位置にある場合、ジョイン時に扉が開きます。

Elevator_Floor のスクリプトで、エレベーターを識別し、ElevatorManager で管理します。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image36.png" alt="Elevator_Floor の設定欄" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image37.png" alt="Elevator_Manager の設定欄" width="520" />
	</div>
</div>

- FloorNumber はフロアの識別番号です。
- ElevatorNumber は複数台あるエレベーターの識別番号です。
- ElevatorManager にはそれぞれのエレベーターを登録する必要があります。
- 各スイッチは ElevatorManager と接続し、押した時の移動先エレベーターを ID で指定してください。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image38.png" alt="Elevator_Switch の設定欄" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image40.png" alt="エレベーター内スイッチの階層" width="520" />
	</div>
</div>

LuminousOasis 単体シーンでは、改変が可能なようにエレベーターを別エリアなどに接続することができるよう、7F フロア用のエレベーターを用意してあります。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image39.png" alt="LuminousOasis 単体シーンの 7F フロア用エレベーター" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image41.png" alt="エレベーター内の行き先スイッチ" width="520" />
	</div>
</div>

デフォルトでは地下 2 階エリアのエレベーターの中にあるスイッチは使用しないため、非アクティブになっています。使用する際はアクティブにしてください。

---

## LowPassTrigger について

LowPassTrigger は AudioSource についている AudioLowPassFilter をコントロールします。

トリガー内に入ったときに指定の値になるため、音が遮蔽され、くぐもったようにする演出が可能です。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image42.png" alt="Audio Low Pass Filter の設定欄" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image43.png" alt="Low Pass Trigger の設定欄" width="520" />
	</div>
</div>

---

## Mirror / スイッチ類について

LuraSwitch2 を使用しています。

詳細の使い方については [LuraSwitch2 ドキュメント](https://lurathunder.github.io/lura-switch-docs/) をご確認ください。

## 関連ページ

- [よくある質問](./troubleshooting)