---
sidebar_position: 3
---

# Initial Scene Setup

This page summarizes the settings you should review after opening the scene and before uploading.

## RoomOwner settings

LuminousOasis includes a RoomOwner system that lets you pre-register usernames to restrict access to the pool area.

If the player's name matches a RoomOwner entry, a key appears from the console and they can unlock the entrance.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image11.png" alt="Entrance and pool area of LuminousOasis" width="800" />
</div>

### If you use LuminousOasis by itself

Register names in `RoomOwnerList` from the following location. When a user is set as RoomOwner, their name is displayed at runtime and they can obtain the entrance key.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image12.png" alt="Hierarchy location of RoomOwnerList_Pool" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image13.png" alt="Username input field in RoomOwnerList" width="520" />
	</div>
</div>

You can register multiple RoomOwners. The check uses the VRChat username, so register your own name or your friends' names as needed.

### If you want to use it together with LuminousHotel

In the `FullPack_OasisPlus` scene, you need to register RoomOwner names for each room. Set the required names for each room individually.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image14.png" alt="RoomOwner-related hierarchy in FullPack_OasisPlus" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image15.png" alt="RoomOwnerList field on the FullPack_OasisPlus side" width="520" />
	</div>
</div>

## BGM settings

To make world BGM easy to set up, LuminousOasis includes a simple playback system called `MusicSequencer`.

`MusicSequencer` can play BGM continuously and loop it. It is a lightweight solution, but it is ready to use.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image16.png" alt="Hierarchy location of MusicSequencer" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image17.png" alt="MusicSequencer inspector" width="520" />
	</div>
</div>

:::tip Tip
Video playback can be unstable depending on the player's environment, so importing audio files is recommended if you want to avoid silent world BGM.
:::

:::tip Tip
Audio is managed by `LowPassTrigger`, so the sound feels muffled inside areas such as the entrance and lounge.
:::

Because the `AudioSource` used by `MusicSequencer` is also controlled by `LowPassTrigger`, the occlusion effect is already applied. No extra work is required.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image18.png" alt="Hierarchy location of LowPassTrigger" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image19.png" alt="LowPassTrigger settings" width="520" />
	</div>
</div>

If you add another audio source later, you can include it there so it is also affected by the occlusion system.

## Video player settings

By placing a video player under `MoviePlayerHere`, it will appear with the intended position, rotation, and scale. Fine-tune it if needed.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image20.png" alt="MoviePlayerHere hierarchy" width="525" />
</div>

Configure your preferred video player and use it as needed.

### Recommended video player: VizVid

The recommended video player is VizVid.

If you use VizVid's On-Screen Control, placing it at `MoviePlayerHere` lets it work as-is. If you use another player, adjust the placement manually.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image21.png" alt="Example placement of VVMW On-Screen Controls" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image22.png" alt="Inspector for VVMW On-Screen Controls" width="520" />
	</div>
</div>

For detailed information about the video player itself, refer to the VizVid manual.

## Next page

Continue to [Upload and Quest Support](./upload.md) to prepare the world for publishing.
