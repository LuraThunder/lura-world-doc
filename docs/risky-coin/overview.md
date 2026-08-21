---
sidebar_position: 1
---

# RiskyCoin クイックスタートガイド

RiskyCoin をご購入いただきありがとうございます。

<div class="doc-media doc-media--left">
  <img src="/lura-world-doc/img/risky-coin/MainThumb.jpg" alt="RiskyCoin メインビジュアル" width="600" />
</div>

RiskyCoin は、**裏が出るとコインの中に閉じ込められる** VRChat ワールド向けのコイントスギミックです。

コインを投げて表が出れば、中に閉じ込められたプレイヤーを救出できます。また、表／裏が連続すると Orb イベントが発生します。

Prefab をシーンに配置し、`RiskyCoin`、`Jail`、`RiskyCoin_Board`、`RuleBoard` の位置を調整すれば導入完了です。**ライトベイクは不要**です。

:::info 対応状況
PC 版 VRChat での利用を想定しています。Quest 対応は未検証です。
:::

## 基本の遊び方

1. コインを Pickup する
2. コインを手放すとトスされる
3. **表**なら、収監されているプレイヤーがいる場合は 1 人を救出する
4. **裏**なら、コインを投げたプレイヤーが Jail へ収監される
5. Jail 内のスロットを回すことで、残りの収監時間を変化させることができる

収監中は、**外の声は中へ聞こえますが、中の声は外へ聞こえません**。

## Orb イベント

標準設定では、インスタンス全体で同じ結果が 3 回続くと Orb イベントが発生します。

- **3連勝**：Shield または Key を獲得できる Orb が出現
- **3連敗**：Chase または Slash による攻撃 Orb が出現（DangerMode のみ）
- **反転**：3連勝で選ばれたメリット Orb が、一定確率でデメリット Orb に変化（DangerMode のみ）

### Shield

コイントスの失敗、または Orb 攻撃による収監を 1 回防ぎます。  
有効時間内に追加で獲得した場合は、残り時間が延長されます。

### Key

Jail の内外を安全に移動できる鍵です。  
未使用のまま有効時間を過ぎると消滅します。

## SafeMode と DangerMode

### SafeMode

<div class="doc-media doc-media--left">
  <img src="/lura-world-doc/img/risky-coin/RiskyCoin_SafeMode.jpg" alt="RiskyCoin SafeMode" width="600" />
</div>

コイントスの参加者以外を巻き込まずに遊びたい場合に使用します。

- 3連勝では Shield / Key を獲得できる Orb が発生
- 3連敗では攻撃 Orb が発生しない
- メリット Orb がデメリット Orb へ反転しない

### DangerMode

<div class="doc-media doc-media--left">
  <img src="/lura-world-doc/img/risky-coin/RiskyCoin_DangerMode.jpg" alt="RiskyCoin DangerMode" width="600" />
</div>

コイントスの参加者以外も巻き込む、よりカオスな遊び方を楽しみたい場合に使用します。

- 3連敗で Chase / Slash の攻撃 Orb が発生
- 3連勝のメリット Orb が、設定した確率でデメリット Orb へ反転
- Orb 攻撃は、コイントスをしていない周囲のプレイヤーも対象になる

:::note
DangerMode でも、インスタンス内で最初に発生する連勝 Orb は、標準仕様ではデメリット Orb へ反転しません。
:::

## Board について

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/RiskyCoin_Board.jpg" alt="RiskyCoin Board の表示内容" width="624" />
</div>

`RiskyCoin_Board` には、次の情報が表示されます。

- 収監中のプレイヤーと残り時間
- 自分の累計勝敗
- 現在の Level と、次の Level までの進捗
- スロットのクールダウン
- Slot Large-Time Chance
- インスタンス内ランキング

`RuleBoard` には、プレイヤー向けの基本ルールが表示されます。

## クイックガイド

1. [セットアップと配置](./setup)：UnityPackage のインポートから配置完了まで
2. [ルールと Level の設定](./settings)：連勝・連敗、Orb の発生確率、収監時間、Level 条件
3. [よくある質問](./troubleshooting)：テキストが表示されない、Orb が出ない、Progress が消えた場合など
