---
sidebar_position: 4
---

# Upload and Quest Support

Once the scene settings are ready, prepare uploads for both the PC and Quest versions.

## Uploading for PC

Open **Show Control Panel** from the VRChat SDK and log in.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image23.png" alt="VRChat SDK login screen" width="420" />
</div>

Set the world name and thumbnail.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image24.png" alt="VRChat SDK builder screen" width="420" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image25.png" alt="Build and Publish button" width="420" />
</div>

Click **Build and Upload** to publish the world.

## Uploading for Quest

Enable **Windows / Android / iOS** in the platform section. The first platform switch can take quite a while.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image26.png" alt="Multi-Platform Build and Publish settings" width="624" />
</div>

:::warning Supported scope for iOS / Android uploads
Only the standalone LuminousOasis scene supports iOS / Android uploads. `FullPack_OasisPlus`, which is used together with LuminousHotel, exceeds the size limit and does not support iOS / Android uploads.
:::

:::tip Tip
The scene already contains a gimmick that automatically switches certain objects on and off during iOS / Android uploads, so you can use it for performance tuning.
:::

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image27.png" alt="Hierarchy for the Quest object switching gimmick" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image28.png" alt="SwitchPlatformOverride settings" width="520" />
	</div>
</div>

## Next page

Review setup notes and common issues on [FAQ](./troubleshooting.md).
