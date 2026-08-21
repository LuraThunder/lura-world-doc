---
sidebar_position: 2
---

# セットアップと配置

RiskyCoin を既存の VRChat Worlds プロジェクトへ導入し、使用できる状態にするまでの手順を説明します。

## 必要な環境

- Unity 2022.3 LTS
- VRChat Creator Companion で作成した Worlds プロジェクト
- VRChat SDK3 Worlds
- TextMeshPro Essentials

## 1. UnityPackage をインポートする

Unity のメニューから **Assets → Import Package → Custom Package...** を開き、購入した RiskyCoin の UnityPackage を選択します。

Import Unity Package ウィンドウでは、基本的にすべての項目にチェックを入れたまま **Import** を押してください。

インポートが完了すると、次のフォルダが追加されます。

`Assets/QuickBrown/RiskyCoin`

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/ProjectPanel_ImportRiskyCoin.jpg" alt="RiskyCoin インポート後の Project ウィンドウ" width="624" />
</div>

## 2. TextMeshPro Essentials をインポートする

TextMeshPro Essentials が未導入の場合は、TMP Importer が表示されます。

**Import TMP Essentials** を押してください。

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/TextMeshPro.jpg" alt="Import TMP Essentials ボタン" width="624" />
</div>

ウィンドウを閉じてしまった場合は、Unity のメニューから **Window → TextMeshPro → Import TMP Essential Resources** を実行します。

:::tip テキストが表示されない場合
TextMeshPro Essentials を導入したあと、シーンを開き直してください。Board や Jail 内 UI の文字が表示されない場合は、まずこの手順を確認してください。
:::

## 3. 使用する Prefab を選ぶ

`Assets/QuickBrown/RiskyCoin` に、次の 2 種類の Prefab が入っています。

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/ProjectPanel_MainPrefab.jpg" alt="RiskyCoin SafeMode と DangerMode の Prefab" width="624" />
</div>

| Prefab | 用途 |
|---|---|
| `RiskyCoin_Set_(SafeMode)` | コイントスの参加者以外を攻撃に巻き込みたくない場合 |
| `RiskyCoin_Set_(DangerMode)` | 3連敗時の攻撃 Orb や Orb の反転を含む、よりカオスな遊び方を楽しみたい場合 |

<div class="doc-media-row">
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/RiskyCoin_SafeMode.jpg" alt="SafeMode の見た目" width="300" />
  </div>
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/RiskyCoin_DangerMode.jpg" alt="DangerMode の見た目" width="380" />
  </div>
</div>

:::warning どちらか一方だけを配置する
通常のワールドでは、SafeMode と DangerMode のどちらか一方だけを使用してください。  
同じシーンに複数の RiskyCoin Set を置くと、同期、Progress、Jail、Orb イベントが意図しない動作をする可能性があります。
:::

## 4. Prefab をシーンへ配置する

使用する Prefab を Project ウィンドウから Hierarchy または Scene ビューへドラッグ＆ドロップします。

この時点でギミック本体の参照は設定済みです。Prefab 内の `System` や内部参照を接続し直す必要はありません。

## 5. RiskyCoin の位置を調整する

配置した Set を展開し、Hierarchy から `RiskyCoin` を選択します。

<div class="doc-media-row">
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/Hierarcy_RiskyCoin.jpg" alt="Hierarchy で RiskyCoin を選択" width="330" />
  </div>
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/SceneView_Selection_RiskyCoin_.jpg" alt="Scene ビューで RiskyCoin の位置を調整" width="624" />
  </div>
</div>

Transform の Position を調整し、プレイヤーが Pickup しやすい場所に配置します。

- 床や台にめり込ませない
- 周囲の Collider に引っかからない場所にする
- トスしたコインが落下しても回収できる場所にする

## 6. Jail の位置を調整する

Hierarchy から `Jail` を選択します。

<div class="doc-media-row">
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/Hierarcy_Jail.jpg" alt="Hierarchy で Jail を選択" width="330" />
  </div>
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/SceneView_Selection_Jail.jpg" alt="Scene ビューで Jail の位置を調整" width="624" />
  </div>
</div>

Jail は、収監されたプレイヤーが実際に移動する空間です。ワールド本体や通常の移動範囲と重ならない空きスペースへ移動してください。

:::warning Jail を他の空間と重ねない
Jail の内部には、移動・Voice・カメラ・収監判定に使用する範囲があります。既存の部屋や Collider と重なると、意図しない判定が発生する場合があります。
:::

## 7. Board の位置を調整する

Hierarchy から、次の 2 つを選択します。

- `RiskyCoin_Board`
- `RuleBoard`

<div class="doc-media-row">
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/Hierarcy_Boards.jpg" alt="Hierarchy で 2 種類の Board を選択" width="330" />
  </div>
  <div class="doc-media doc-media--left">
    <img src="/lura-world-doc/img/risky-coin/SceneView_Boards.jpg" alt="Scene ビューで Board の位置を調整" width="624" />
  </div>
</div>

プレイヤーがコインを使用する場所から見やすい位置へ移動し、正面がプレイヤーの方を向くように Rotation を調整します。

`RuleBoard` はルール説明用の Board です。ワールド内に配置しなくても、RiskyCoin の動作に問題はありません。

## 8. 配置を確認する

RiskyCoin、Jail、Board の位置を調整したら導入完了です。

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/SceneView_RiskyCoinAndBoards.jpg" alt="RiskyCoin と Board の配置例" width="624" />
</div>

Unity の Play Mode だけでなく、VRChat の Build & Test、またはアップロードしたテストワールドでも、次の項目を確認してください。

- コインを Pickup して手放すとトスされる
- 裏が出ると Jail へ移動する
- 表が出ると収監されているプレイヤーを救出できる
- Board のテキストが表示される
- 複数人で、コイントスの結果・収監状態・Orb が正しく同期する

次に、[ルールと Level の設定](./settings)で、収監時間や Orb の発生条件を確認します。
