---
sidebar_position: 3
---

# シーン初期設定

シーンを開いた後、アップロード前に以下の項目を設定します。

## RoomOwner の設定（必須）

LuminousOasis にはプールエリアへの入室を制限するための **RoomOwner システム**があります。

**RoomOwner** と名前が一致するプレイヤーがワールドにログインすると、コンソールから鍵が出現し、入口を開けることができます。

RoomOwner にするユーザーの名前を Unity シーン上で入力してください。  
ユーザーの名前とは、VRChat 上で表示される名前です。


:::warning 注意
RoomOwner に登録しないと鍵を取り出すことができず、プールエリアに入ることができません。必ず設定してください。
:::

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image11.png" alt="LuminousOasis の入口とプールエリア" width="800" />
</div>


:::warning VN3ライセンスによる規約
Public 化はいずれかの状態を満たした場合に許可します。

- **RoomOwner** の設定がされていて、入室できるユーザーが制限されている場合
- サンプルシーンと同一と見なせないほど、構造的に十分な改変がされている場合
:::
[VN3ライセンスへのリンク](https://drive.google.com/drive/folders/1hld-5Japswx4XnFD4AgBRPKsS9bKdO57?usp=drive_link)

:::tip ヒント
ほとんどそのままのワールドや微改変のワールドをパブリック化する場合は**RoomOwnerを設定**してね、という制限です。
:::

### LuminousOasis 単体でご利用の方

以下から RoomOwnerList に登録してください。RoomOwner に設定すると、ワールドログイン時にディスプレイへ名前が表示され、入口の鍵を取得できるようになります。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image12.png" alt="RoomOwnerList_Pool の階層位置" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image13.png" alt="RoomOwner List のユーザー名入力欄" width="520" />
	</div>
</div>

RoomOwner は複数人登録することができます。VRChat のユーザーネームで判定しているので、**自分の名前やフレンドの名前**を登録してご利用ください。

### LuminousHotel と一緒に使いたい方

**FullPack_OasisPlus** のシーンでは、部屋ごとに RoomOwner を登録する必要があります。それぞれ部屋ごとに必要な名前を設定してください。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image14.png" alt="FullPack_OasisPlus の RoomOwner 関連階層" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image15.png" alt="FullPack_OasisPlus 側の RoomOwnerList 設定欄" width="520" />
	</div>
</div>

## BGM の設定

ワールドに BGM を簡単にセットアップできるように、簡易的な BGM 再生機能である **MusicSequencer** というシステムを用意してあります。

**MusicSequencer** は設定した音源を連続で再生し、ループさせることができます。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image16.png" alt="MusicSequencer の階層位置" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image17.png" alt="MusicSequencer のインスペクター" width="520" />
	</div>
</div>

:::tip 音源について
動画 URL の再生が個人の環境によって不安定なこともあるため、無音にならないよう音源をインポートする方法をおすすめしています。
:::

:::tip 音の遮蔽
エントランスやラウンジ内では BGM が遮蔽されます。
:::

遮蔽対象は MusicSequencer の AudioSource を LowPassTrigger によってコントロールしています。特に何もする必要はありません。

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

動画プレーヤーは MoviePlayerHere の階層に入れ、位置、回転、スケールを調整してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image20.png" alt="MoviePlayerHere の階層" width="525" />
</div>

ここにお好みの動画プレーヤーを設定してご利用ください。
:::tip ヒント
配置箇所はMoviePlayerHereの子でも問題ありません。
:::


### 推奨動画プレイヤー: VizVid

推奨している動画プレーヤーは VizVid です。  
  
[VizVidをダウンロード](https://booth.pm/ja/items/5056077)

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

### Vizvidのオーディオ設定
:::tip ヒント
エリア外で音が聞こえないようにするための設定です。  
**デフォルト設定の場合、2D音源のため遠くにいても聞こえてしまいます。**
:::

#### 1.VizVidを選択 


#### 2.Default Audio Source を設定 


<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_1.jpg" alt="VVMW On-Screen Controls の配置例" width="520" />
	</div>
</div>



#### 3.Default Audio Source を設定

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_2.jpg" alt="VVMW On-Screen Controls の配置例" width="520" />
	</div>
</div>

**Spatial Blend を1に**  
**Spreadを120に**  
**Linear Rolloffに**  
**Min Distance 19**  
**Max Distance 35**  

### 動画・BGM にフィルターをかけたい人向けの設定

:::tip ヒント
動画プレイヤーにのみ、**部屋に入ったときに音をくぐもらせる LowpassFilter**を設定します。  
少し複雑なため、不要な場合はここまでの設定のみでも問題ありません。
:::

#### 4.複製してAVPro用オーディオを作成 (ctrl+D)

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_3.jpg" alt="VVMW On-Screen Controls の配置例" width="520" />
	</div>
</div>

#### 5.Default Audio Source にフィルターを設定

Default Audio Sourceに戻り、以下を設定してください。  
  
**・AudioLow Pass Filter を追加**

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_4-1.jpg" alt="VVMW On-Screen Controls の配置例" width="250" />
	</div>
</div>
**・VRC AVPro Video Speakerを右クリックしてRemove Component**
<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_4-2.jpg" alt="VVMW On-Screen Controls の配置例" width="600" />
	</div>
</div>
<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_4-3.jpg" alt="VVMW On-Screen Controls の配置例" width="600" />
	</div>
</div>

#### 6.LowpassTriggerに登録  
3つのLowPassTriggerのターゲットに Default Audio Source をそれぞれ追加してください。  

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_5.jpg" alt="VVMW On-Screen Controls の配置例" width="600" />
	</div>
</div>
<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_6.jpg" alt="VVMW On-Screen Controls の配置例" width="600" />
	</div>
</div>

#### 7. VizVidにオーディオソースを登録

**Vizvid** (Core) を選択し、Live(AVPro Module) のプライマリオーディオソースに**複製したAVPro用オーディオ**を設定してください。
<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/VizVidSetting_7.jpg" alt="VVMW On-Screen Controls の配置例" width="600" />
	</div>
</div>
  

モジュール設定のオーディオソースの配列に、  
  
・**AVPro用オーディオソース**  
・**Default Audio Source**   
という順番になるように設定  

:::warning 警告
VRChatの仕様により、**AVPro用のオーディオソースにLowPassFilterやスクリプトがついている場合  
音量など、あらゆるコントロールが効かなくなってしまいます**。（将来的には修正されるかも）  
そのため、面倒ですが、フィルターを使うためにはAudioSourceを分ける必要があります。  
現状はBuiltinのビデオのみ、オーディオフィルターを機能させることができます。  
:::
  






次に、[VRChat への公開準備とアップロード](./upload)を行います。
