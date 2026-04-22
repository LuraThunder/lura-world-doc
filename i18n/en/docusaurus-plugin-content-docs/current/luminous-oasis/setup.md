---
sidebar_position: 2
---

# Setup and Installation

This page walks you through importing LuminousOasis into a new Unity project and reaching the point where the scene opens correctly.

## Required environment

- Unity 2022.3 LTS
- VRChat Creator Companion
- VRChat SDK3 Worlds
- TextMeshPro
- VRC Light Volumes

## 1. Install VCC and create a new project

Install Creator Companion from the VRChat website and create a new project for worlds.

:::warning Do not install into an existing LuminousHotel project from before version 2.0
LuminousOasis is not compatible with older LuminousHotel projects from before version 2.0. Installing it there can break the scene or its saved settings.
Always create a new project first when using LuminousOasis.
:::

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image1.png" alt="Creator Companion download screen" width="600" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image2.png" alt="Creator Companion project creation screen" width="600" />
	</div>
</div>

Creating a new project is recommended over adding the asset to an existing one. In particular, avoid adding it to a project that already contains LuminousHotel from before version 2.0. After creating the project, open Unity with **Open Project**.

:::warning Start from a new project
Do not add it to an existing project. Set it up from a fresh project.
:::

Choose the settings intended for worlds and click **Create Project**. The exact wording may change when VRChat updates VCC.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image3.png" alt="Open Project button location" width="169.02" />
</div>

## 2. Add VRC Light Volumes

LuminousOasis uses VRC Light Volumes. Register it in VCC and import it into the target project before continuing.

1. Open [VPM Listing](https://redsim.github.io/vpmlisting/)
2. Click **Add to VCC** to register it with Creator Companion
3. Open **Manage Project** for the target project
4. Add **VRC Light Volumes** from **Manage Packages**
5. Check the **Installed Version** and import it

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image4.png" alt="Adding VRC Light Volumes from VPM Listing" width="624" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image5.png" alt="Manage Project button location" width="624" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image6.png" alt="Checking VRC Light Volumes in Manage Packages" width="624" />
</div>

Once that is done, the prerequisites are complete.

## 3. Import the UnityPackages

Import the required UnityPackages based on how you plan to use the asset.

### Using LuminousOasis by itself

- LuminousOasis

### Using it together with LuminousHotel

- Condominium_701
- SimpleRoom_702
- LuminousHotel_FullPack
- LuminousOasis

When combining it with LuminousHotel, only the Full Pack setup is supported. Import the hotel-side packages first, then import `LuminousOasis.unitypackage`.

:::tip Tip
When using LuminousOasis together with LuminousHotel, only the Full Pack configuration is supported.
:::

:::warning If pink shader errors appear
If you imported into an existing project, duplicate shaders may be causing the issue. Delete one of the conflicting shaders or create a new project.
:::

## 4. Import TextMeshPro Essentials

If the TMP Importer appears after import, run **Import TMP Essentials**.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image7.png" alt="TMP Importer dialog" width="600" />
</div>

This package is required for text rendering. If you imported it after opening the scene, try reopening the scene.

If you closed the TMP window, open **Package Manager** from **Window** and install **TextMeshPro** from the **Unity Registry**.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image8.png" alt="Installing TextMeshPro from Package Manager" width="600" />
</div>

## 5. Open the scene

Open the scene by double-clicking it in the Project window. If you drag and drop it, Unity treats it as a multi-scene setup and the project will not be configured correctly.

:::warning Open scenes by double-clicking
Dragging and dropping a scene causes Unity to treat it as a multi-scene setup and prevents correct configuration.
:::

### LuminousOasis only

Assets/QuickBrown/LuminousOasis/SCENE/LuminousOasis.unity

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image9.png" alt="Location of the standalone LuminousOasis scene" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/setup-scene-open-oasis-2.jpg" alt="Overview of the standalone LuminousOasis scene" width="520" />
	</div>
</div>

### Using it together with LuminousHotel

Assets/QuickBrown/LuminousHotel/FullPack_OasisPlus/SCENE/FullPack_OasisPlus.unity

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image10.png" alt="Location of the FullPack_OasisPlus scene" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/setup-scene-open-oasisplus-2.jpg" alt="Overview of the FullPack_OasisPlus scene" width="520" />
	</div>
</div>

## Next page

Continue to [Initial Scene Setup](./scene-settings.md) to configure RoomOwner and BGM.
