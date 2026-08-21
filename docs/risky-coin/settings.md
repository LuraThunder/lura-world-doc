---
sidebar_position: 3
---

# ルールと Level の設定

標準設定のままでも使用できます。遊び方に合わせてカスタマイズしたい場合に、以下の項目を調整してください。

## RiskyCoin 本体の設定を開く

Hierarchy から `RiskyCoin` を選択すると、Inspector の **Risky Coin Controller** に基本設定が表示されます。

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/Inspector_RiskyCoin_All.jpg" alt="RiskyCoin Controller の基本設定全体" width="624" />
</div>

ここで変更した値は、Prefab 内の `Event Manager` と `Jail State` へ反映されます。

:::warning 通常は折りたたみ項目を変更しない
`詳細設定 / Advanced`、`同期状態 / Network State`、`内部参照 / System References` は、演出や内部同期のための項目です。通常の導入では開く必要はありません。
:::

## 1. イベント発生ルール

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/Inspector_RiskyCoin_EventStreakRules.jpg" alt="Win Streak と Loss Streak の設定" width="624" />
</div>

| 項目 | 標準値 | 内容 |
|---|---:|---|
| `Win Streak` | 3 | 表が何回連続したときに、メリット Orb の抽選を開始するか |
| `Loss Streak` | 3 | 裏が何回連続したときに、デメリット Orb の抽選を開始するか |

連勝・連敗は**プレイヤーごとではなく、インスタンス全体**で数えます。

たとえば A さん、B さん、C さんが順番に表を出した場合も、3 連勝として扱われます。

## 2. イベント確率

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/Inspector_RiskyCoin_EventWeight.jpg" alt="Orb Weight と Reverse Chance の設定" width="624" />
</div>

| 項目 | 内容 |
|---|---|
| `Shield Weight` | 連勝時に Shield が選ばれる相対 Weight |
| `Key Weight` | 連勝時に Key が選ばれる相対 Weight |
| `Chase Weight` | デメリット抽選で追跡 Orb が選ばれる相対 Weight |
| `Slash Weight` | デメリット抽選で範囲攻撃 Orb が選ばれる相対 Weight |
| `Reverse Chance` | 連勝で選ばれたメリット Orb が、デメリット Orb へ反転する確率。`0` で反転なし、`1` で必ず反転 |

Weight は割合ではなく**相対値**です。

- `Shield 1 / Key 1`：ほぼ同じ比率
- `Shield 2 / Key 1`：Shield が Key の約 2 倍の Weight
- `0`：その種類を抽選対象から外す

`Shield / Key` は互いに比較され、`Chase / Slash` は互いに比較されます。

:::warning Shield と Key を両方 0 にしない
メリット Orb の候補を少なくとも 1 種類は有効にしてください。
:::

### Prefab の標準値

| Prefab | Shield | Key | Chase | Slash | Reverse |
|---|---:|---:|---:|---:|---:|
| SafeMode | 1 | 1 | 0 | 0 | 0 |
| DangerMode | 1 | 1 | 1 | 1 | 0.5 |

SafeMode でも `Chase Weight`、`Slash Weight`、`Reverse Chance` を増やすと、DangerMode に近い動作になります。Prefab 名ではなく、最終的にはこれらの設定値によって挙動が決まります。

:::note DangerMode の最初の連勝 Orb
標準仕様では、インスタンス内で最初に発生する連勝 Orb はデメリット Orb へ反転しません。2 回目以降の連勝イベントから `Reverse Chance` が適用されます。
:::

## 3. 報酬の有効時間

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/Inspector_RiskyCoin_RewardDuration.jpg" alt="Key と Shield の有効時間" width="624" />
</div>

| 項目 | 標準値 | 内容 |
|---|---:|---|
| `Key Duration Seconds` | 300 | 出現した Key が未使用のまま存在できる時間 |
| `Shield Duration Seconds` | 180 | Shield を獲得してから有効な時間 |

値の単位は秒です。

Shield を有効時間内に追加で獲得した場合は、残り時間が延長されます。

## 4. 収監時間

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/Inspector_RiskyCoin_Time.jpg" alt="Initial Sentence Seconds の設定" width="624" />
</div>

| 項目 | 標準値 | 内容 |
|---|---:|---|
| `Initial Sentence Seconds` | 300 | 通常のコイントス失敗、または Orb 攻撃で収監されたときの初期刑期 |

値の単位は秒です。標準値の `300` は 5 分です。

収監後は Jail 内のスロットによって、残り時間が増減したり、倍率が変更されたりします。

## Level 条件を設定する

Level は、各プレイヤーの**累計勝利数**で決まります。

Hierarchy から `RiskyCoin_Board` を選択してください。

<div class="doc-media doc-media--left">
  <img src="/lura-world-doc/img/risky-coin/Hierarcy_MainBoard.jpg" alt="Hierarchy で RiskyCoin_Board を選択" width="536" />
</div>

Inspector の **Risky Coin Progress Board** に、各 Level に必要な累計勝利数が表示されます。

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/Inspector_RiskyCoin_LVControl.jpg" alt="各 Level の必要累計勝利数" width="624" />
</div>

### 標準の Level 条件と効果

| Level | 必要累計勝利数 | Slot Cooldown | Minutes 系 Weight | Hours 系 Weight |
|---:|---:|---:|---:|---:|
| LV0 | 0～9 | 10 秒 | ×1.00 | ×1.00 |
| LV1 | 10 | 7 秒 | ×1.00 | ×1.00 |
| LV2 | 20 | 5 秒 | ×1.05 | ×1.25 |
| LV3 | 40 | 3 秒 | ×1.10 | ×2.00 |
| LV4 | 100 | 2 秒 | ×1.15 | ×3.00 |
| LV5 | 200 | 1 秒 | ×1.20 | ×7.00 |

Level が上がると、Jail 内スロットの再使用までの時間が短くなり、収監時間が大きく変化する `Minutes` / `Hours` 系の結果が出やすくなります。

:::note Weight 倍率について
表の倍率は、対象となる結果の抽選 Weight に掛けられる補正値です。表示された倍率が、そのまま最終的な出現確率になるわけではありません。
:::

### Level 条件を変更するときの注意

- 値は累計勝利数です
- LV2 以降は、必ず直前の Level より大きい値にしてください
- 同じ値や小さい値を入力した場合、実行時には直前の Level より少なくとも 1 大きい値として扱われます
- 公開後に条件を変更しても累計勝利数は消えませんが、新しい条件で Level が再判定されます

## Save Data の設定

累計勝敗は PlayerObject Persistence を使用して保存されます。

Hierarchy から `System` を展開し、`SaveData` を選択します。

<div class="doc-media doc-media--left">
  <img src="/lura-world-doc/img/risky-coin/Hierarcy_SaveData.jpg" alt="Hierarchy で SaveData を選択" width="528" />
</div>

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/Inspector_RiskyCoin_SaveData.jpg" alt="RiskyCoin Save Key の設定" width="624" />
</div>

標準の Save Key は次の値です。

`RiskyCoin.Progress.v1`

:::danger 公開後は Save Key を変更しない
Save Key を変更すると、それまで保存されていた累計勝敗は使用されず、新しい Progress として開始します。  
プレイヤー全員の進行を意図的にリセットする場合を除き、標準値のまま使用してください。
:::
