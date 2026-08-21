---
sidebar_position: 4
---

# よくある質問

## Board や Jail 内のテキストが表示されない

TextMeshPro Essentials が未導入の可能性があります。

1. Unity の **Window → TextMeshPro → Import TMP Essential Resources** を実行する
2. **Import TMP Essentials** を押す
3. 使用中のシーンを開き直す

<div class="doc-media doc-media--left doc-media--full">
  <img src="/lura-world-doc/img/risky-coin/TextMeshPro.jpg" alt="Import TMP Essentials" width="624" />
</div>

## 3連勝の報酬が攻撃 Orb へ変わった

DangerMode の標準動作です。

`Reverse Chance` の標準値は `0.5` で、2 回目以降の連勝イベントでは Shield / Key が Chase / Slash へ反転する可能性があります。

反転させたくない場合は、`Reverse Chance` を `0` にしてください。

## Sample Scene と同じように 2 つ配置してよい？

Sample Scene は SafeMode と DangerMode の比較用です。

実際のワールドには、使用する Main Prefab を 1 つだけ配置してください。

## Quest で動作する？

Quest 対応は未検証です。Quest 向けワールドとして公開する場合は、シェーダー、描画負荷、Udon 動作、UI 表示を実機で個別に検証してください。
