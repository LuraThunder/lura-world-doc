---
sidebar_position: 1
---

# LuminousHotel クイックスタートガイド

LuminousHotel のクイックスタートガイドを、作業順に沿って読みやすく再構成した入口ページです。  
  
[旧ドキュメントのリンクはこちら](https://docs.google.com/document/d/1TH8b4Rt0ePBYBGVfuUHRdahtu_fBqqa3Lnloy0ehhoE/edit?usp=sharing)


<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image43.png" alt="LuminousHotel キービジュアル" width="601.7" />
</div>

## このドキュメントで扱う内容

- VCC と新規プロジェクトの作成
- VRC Light Volumes と UnityPackage の導入
- RoomOwner、サインプレート、ムードオブジェクトの初期設定
- 動画プレーヤーと VizVid の配置例
- PC / Quest へのアップロード
- ムードボード、写真、Visitors Information Board の改変
- 不具合対応と各種パラメーター調整

## 先に確認しておきたい注意点

- Full Pack を利用する場合、FullPack の UnityPackage は最後にインポートしてください。
- シーンはドラッグアンドドロップではなく、Project ウィンドウからダブルクリックで開いてください。
- ver1.10 以降は VRC Light Volumes の導入が前提です。
- TextMeshPro の Essentials が未導入だと文字表示が崩れます。

:::warning ver2.0以前の既存 LuminousHotel プロジェクトには導入しない
ver2.0以前の既存の LuminousHotel とは互換性がなく、そのまま LuminousOasis を導入するとシーンや設定データが壊れるおそれがあります。  
ver1.x系を利用していてver2.0に移行する場合は、必ず新規プロジェクトを作成したうえで導入してください。
:::

:::tip Ver2.0 のアップデート
・スイッチやミラーがLuraSwitch2 仕様に置き換わっています。  
・エレベーターで他のフロアに移動できるようになりました。  
・Luminous Oasisと接続可能になりました。

**この変更が不要な場合は、Ver1系から無理にアップデートする必要はありません。**
:::

## 読み進め方

1. [セットアップと導入](./setup.md) でプロジェクト作成からシーン起動まで進める
2. [シーン初期設定](./scene-settings.md) で RoomOwner やサインプレートを整える
3. [アップロードと Quest 対応](./upload.md) で公開準備を進める
4. [トラブルシューティング](./troubleshooting.md) で詰まりやすいポイントや調整項目を確認する
