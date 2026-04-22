---
sidebar_position: 4
---

# Upload and Quest Support

Once the scene settings are ready, prepare uploads for both the PC and Quest versions.

## Uploading for PC

Open **Show Control Panel** from the VRChat SDK, log in, set the world name and thumbnail, then run **Build and Upload**.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image35.png" alt="Show Control Panel in the VRChat SDK" width="420" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image23.png" alt="World name and thumbnail settings" width="420" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image44.png" alt="Build and Upload button" width="420" />
</div>

## Uploading for Quest

Change **Selected Platform** at the bottom of the SDK panel from **Windows** to **Android**, then build again. The first switch can take some time.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image5.png" alt="Selected Platform set to Windows" width="514" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image14.png" alt="Selected Platform switched to Android" width="515" />
	</div>
</div>

### Optimization settings for Quest

For the Quest version, enable the optimization objects marked **Turn it Active during Quest** before uploading.

:::warning Enable them before Quest upload
Before uploading the Quest version, enable the objects labeled `Turn it Active during Quest`.
:::

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image34.png" alt="Quest optimization object" width="600" />
</div>

### If lightmaps break in the Android build

If the colors break in the Android build after rebaking the lighting, change the lightmap **Format** to **RGB(A) Compressed ASTC 4x4 block**.

:::warning If colors break in the Android build
Change the lightmap `Format` to `RGB(A) Compressed ASTC 4x4 block`.
:::

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image3.png" alt="Lightmap settings for the Android build" width="624" />
</div>

## Notes

Before publishing, it is a good idea to enter Play mode once and confirm that RoomOwner, sign plates, mood objects, and the video player behave as expected.

## Next page

You can review common issues and adjustment points on [Troubleshooting](./troubleshooting.md).
