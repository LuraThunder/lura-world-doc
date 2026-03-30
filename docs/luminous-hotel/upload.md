---
sidebar_position: 4
---

# アップロードと Quest 対応

シーン設定が済んだら、PC 版と Quest 版のアップロード準備を行います。

## PC 向けアップロード

VRChat SDK から Show Control Panel を開き、ログイン後にワールド名とサムネイルを設定して Build and Upload を実行します。

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image35.png" alt="VRChat SDK の Show Control Panel" width="420" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image23.png" alt="ワールド名とサムネイルの設定画面" width="420" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image44.png" alt="Build and Upload ボタン" width="420" />
</div>

## Quest 向けアップロード

SDK パネル下部の Selected Platform を Windows から Android へ切り替えてからビルドします。初回切り替え時は時間がかかります。

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image5.png" alt="Selected Platform が Windows の状態" width="514" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image14.png" alt="Selected Platform を Android に切り替えた状態" width="515" />
	</div>
</div>

### Quest 向けの軽量化設定

Quest 版では、Turn it Active during Quest と書かれた軽量化用オブジェクトを事前に有効化してください。

:::warning Quest 前に有効化
Quest 版をアップロードする前に、Turn it Active during Quest のオブジェクトを有効にしてください。
:::

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image34.png" alt="Quest 用軽量化オブジェクト" width="600" />
</div>

### Android ビルドでライトマップが崩れる場合

ライトベイクをやり直した後に Android ビルドで色が崩れる場合は、ライトマップの Format を RGB(A) Compressed ASTC 4x4 block に変更してください。

:::warning Android ビルドで色が崩れる場合
ライトマップの Format を RGB(A) Compressed ASTC 4x4 block に変更してください。
:::

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image3.png" alt="Android ビルド時のライトマップ設定" width="624" />
</div>

## 補足

公開前に RoomOwner、サインプレート、ムードオブジェクト、動画プレーヤーの設定が意図通りか一度 Play で確認しておくと事故が減ります。

## 次に進むページ

[トラブルシューティング](./troubleshooting.md) で、詰まりやすいポイントと調整項目を確認できます。