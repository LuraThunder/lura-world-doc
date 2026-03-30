---
sidebar_position: 5
---

# よくある質問

元ドキュメントの「よくあるお問い合わせ」と、改変時によく参照する項目をまとめています。

## 導入と公開

### ライトベイクをやり直したい

基本的には既定の設定のまま焼き直して問題ありません。

---

### Full Pack をパブリック化してよいか

Full Pack をパブリック化する場合は、全部屋に RoomOwner を設定したプライベート寄りの使い方が推奨されています。701 と 702 を個別利用するだけであれば、通常運用でも問題ありません。

---

### ムードボードの BGM がこもって聞こえる

空間に馴染ませるために LowPassFilter を使っています。クリアな音にしたい場合は、MoodBoard_701/System/MoodBoard_Manager/Audio Source_Music の AudioLowPassFilter を無効化してください。

---

### サンプルワールドと違って鍵が消えない

製品版では鍵は消えません。サンプルで消えていたのは OneTimeKey の設定によるものです。

---

### 全部ピンクになる

:::warning シェーダー競合の可能性
必要なパッケージ不足か、既存プロジェクト内の同名シェーダー競合を疑ってください。Full Pack は最後にインポートしてください。
:::

必要なパッケージが不足しているか、既存プロジェクト内で同名シェーダーが競合している可能性があります。Full Pack は最後にインポートし、それでも解消しない場合は新規プロジェクトでの導入を試してください。

## ワールド改変

### ムードボードを別の内容へ改変したい場合

新しいムードを完全追加する場合は、スクリプトやアニメーション修正が必要になるため作業量が増えます。まずは既存の使用頻度が低いプレートを改変する方法が安全です。

改変しやすい候補は Chill、Talk、Work です。修正時は以下を見直してください。

- SignPlate_Set 内の対象プレートのテキスト
- Text_Mood 内の表示文字列
- アイコン Sprite の差し替え

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image18.png" alt="SignPlate_Set 内のテキスト変更箇所" width="345.95" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image25.png" alt="Text_Mood 内の変更対象" width="458.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image53.png" alt="Sprite への変更が必要なアイコン設定" width="210.59" />
</div>

:::warning オブジェクト名は変更しない
オブジェクト名を変更するとアニメーション参照が切れるため、名前はそのままにしてください。
:::

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image58.png" alt="MoodBoard_RoomOwner 側の反映確認" width="387.7" />
</div>

---

### 写真を差し替えたい場合

写真を差し替える場合は、紙のマテリアルを複製してから新しいテクスチャを設定してください。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image51.png" alt="差し替え対象の紙オブジェクト" width="624" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image4.png" alt="紙マテリアルの複製" width="516.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image9.png" alt="複製したマテリアルの割り当て" width="418.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image16.png" alt="新しいテクスチャへの差し替え" width="367.84" />
</div>

画像のアスペクト比は、横長が 16:9、縦長が 9:16、正方形が 1:1 を目安にすると扱いやすくなります。

---

### Visitors Information Board を置きたい場合

Visitors Information Board を配置する場合は、UI_Info 配下の最後に入れると前後関係が崩れにくくなります。フォントやレイアウトはデモワールドの設定を参考に調整してください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image26.png" alt="Visitors Information Board の例" width="271.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image56.png" alt="UI_Info 配下での配置順" width="464.5" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image42.png" alt="Visitors Information Board の座標設定" width="624" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image30.png" alt="フォントとレイアウトの設定例" width="460.68" />
</div>

## 調整項目

### 朝の時間を変更したい

MorningSetter の Morning Hour を変更してください。4 なら朝 4 時、6 なら朝 6 時です。

---

### Room701 の音がロビーにも聞こえる

ロビーが無音にならないようにするための仕様です。ロビーへ聞こえないようにしたい場合は、701 側の AudioSource の位置と範囲を調整し、室内限定にしてください。702 側の設定が参考になります。

---

### 環境音のデフォルト音量を変更したい

AUDIO/CitySound と NoiseAmbient 以下の AudioSource の Volume を変更し、対応する CityAmbient_Slider と NoiseAmbient_Slider の Value も同じ値へ合わせてください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image48.png" alt="CitySound と NoiseAmbient の AudioSource" width="293.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image55.png" alt="AudioSource の Volume 設定" width="384.16" />
</div>

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image38.png" alt="CityAmbient_Slider の位置" width="237.04" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image40.png" alt="NoiseAmbient_Slider の位置" width="265.5" />
	</div>
</div>

---

### ミラーのフェード距離を変更したい

VRCMirror_HQ の Distance Fade と Distance Fade Length を調整し、その後 VRCMirror_Transparent と VRCMirror_LQ にも同じ値を反映してください。共通マテリアルの影響を避けるため、複製してから編集する構成を推奨します。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image33.png" alt="VRCMirror_HQ の設定" width="267.36" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image32.png" alt="VRCMirror_Transparent と VRCMirror_LQ の設定" width="287.5" />
	</div>
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image20.png" alt="Distance Fade のパラメーター" width="329" />
</div>

また、ミラーの起動トリガー範囲は Distance Fade と Distance Fade Length の合計距離を収められる大きさに調整してください。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image12.png" alt="ミラートリガーの位置" width="226.5" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image15.png" alt="ミラートリガーの範囲" width="224.86" />
	</div>
</div>

---

### ムードボードのデフォルト音量を変更したい

MoodBoard_Entrance/MoodBoard_Monitor_Canvas/Mood_UI/system/Sliders/Slider_Audio の Slider コンポーネントにある Value を変更してください。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image52.png" alt="Slider_Audio の設定" width="624" />
</div>

## 関連ページ

- [セットアップと導入](./setup.md)
- [シーン初期設定](./scene-settings.md)