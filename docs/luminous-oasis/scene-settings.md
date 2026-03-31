---
sidebar_position: 3
---

# シーン初期設定

シーンを開いた後、アップロード前に確認しておきたい設定項目をまとめています。

## RoomOwner の設定

LuminousOasis にはプールエリアへの入室を制限するためのユーザー名を事前登録する RoomOwner システムがあります。

RoomOwner と名前が一致するプレイヤーの場合、コンソールから鍵が出現し、入口のロックを解錠することが可能です。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image11.png" alt="LuminousOasis の入口とプールエリア" width="800" />
</div>

### LuminousOasis 単体でご利用の方

以下から RoomOwnerList に登録してください。RoomOwner に設定すると、実行時にディスプレイへ名前が表示され、入口の鍵を取得できるようになります。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image12.png" alt="RoomOwnerList_Pool の階層位置" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image13.png" alt="RoomOwner List のユーザー名入力欄" width="520" />
	</div>
</div>

RoomOwner は複数人登録することができます。VRChat のユーザーネームで判定しているので、自分の名前やフレンドの名前を登録してご利用ください。

### LuminousHotel と一緒に使いたい方

FullPack_OasisPlus のシーンでは、部屋ごとに RoomOwner を登録する必要があります。それぞれ部屋ごとに必要な名前を設定してください。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image14.png" alt="FullPack_OasisPlus の RoomOwner 関連階層" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image15.png" alt="FullPack_OasisPlus 側の RoomOwnerList 設定欄" width="520" />
	</div>
</div>

## BGM の設定

ワールドに BGM を簡単にセットアップできるように、簡易的な BGM 再生機能である MusicSequencer というシステムを用意してあります。

MusicSequencer は BGM を連続で再生し、ループさせることができます。簡易的ですがご利用ください。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image16.png" alt="MusicSequencer の階層位置" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image17.png" alt="MusicSequencer のインスペクター" width="520" />
	</div>
</div>

:::tip ヒント
最近は動画の再生が個人の環境によって不安定なこともあるため、ワールド BGM が無音にならないようにするため音源をインポートする方法をおすすめしています。
:::

:::tip ヒント
オーディオは LowPassTrigger で管理されており、エントランスやラウンジ内ではサウンドが遮蔽された感じになります。
:::

MusicSequencer の AudioSource も LowPassTrigger によってコントロールされているため、サウンドの遮蔽がかかります。特に何もする必要はありません。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image18.png" alt="LowPassTrigger の階層位置" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image19.png" alt="LowPassTrigger の設定欄" width="520" />
	</div>
</div>

別の音源を追加した際などは、ここに追加することで遮蔽の対象に加えることが可能です。

## 動画プレーヤーの設定

動画プレーヤーは MoviePlayerHere の階層に入れることで、想定の位置、回転、スケールで設置することができます。微調整はしてください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image20.png" alt="MoviePlayerHere の階層" width="525" />
</div>

お好みの動画プレーヤーを設定してご利用ください。

### 推奨動画プレイヤー: VizVid

推奨している動画プレーヤーは VizVid です。

VizVid の On-Screen Control であれば MoviePlayerHere の位置に配置することで、そのまま使用できます。その他のプレーヤーを使う場合は細かい位置を調整してください。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image21.png" alt="VVMW On-Screen Controls の配置例" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image22.png" alt="VVMW On-Screen Controls のインスペクター" width="520" />
	</div>
</div>

なお、動画プレーヤーについての詳細は VizVid のマニュアルを参照してください。

## 次に進むページ

[アップロードと Quest 対応](./upload) で公開準備へ進んでください。