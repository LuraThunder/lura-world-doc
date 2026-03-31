---
sidebar_position: 4
---

# アップロードと Quest 対応

シーン設定が済んだら、PC 版と Quest 版のアップロード準備を行います。

## PC 向けアップロード

VRChatSDK から Show Control Panel でパネルを出します。ログインしてください。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image23.png" alt="VRChat SDK のログイン画面" width="420" />
</div>

ワールド名、サムネイルを設定します。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image24.png" alt="VRChat SDK の Builder 画面" width="420" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image25.png" alt="Build & Publish ボタン" width="420" />
</div>

Build and Upload を押してアップロードします。

## Quest 向けアップロード

Platform の項目を Windows / Android / iOS にチェックします。初回は切り替えにかなり時間がかかります。

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image26.png" alt="Multi-Platform Build & Publish の設定画面" width="624" />
</div>

:::warning iOS / Android 向けアップロードの対応範囲
iOS / Android へのアップロードをサポートしているのは LuminousOasis 単体のシーンのみです。LuminousHotel とあわせて使う FullPack_OasisPlus は容量オーバーのため、iOS / Android へのアップロードをサポートしていません。
:::

:::tip ヒント
iOS / Android でのアップロード時に自動的にオブジェクトのオン / オフを切り替えるギミックが設定されているので、負荷調整などにご利用ください。
:::

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image27.png" alt="Quest 用オブジェクト切り替えギミックの階層" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image28.png" alt="SwitchPlatformOverride の設定欄" width="520" />
	</div>
</div>

## 次に進むページ

[よくある質問](./troubleshooting) で、導入時の注意点を確認できます。