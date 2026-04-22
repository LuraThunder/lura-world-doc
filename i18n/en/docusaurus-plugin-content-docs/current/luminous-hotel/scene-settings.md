---
sidebar_position: 3
---

# Initial Scene Setup

This page summarizes the settings you should review after opening the scene and before uploading.

## RoomOwner settings

You can register multiple people in RoomOwner. Registered users have their names shown on the display at runtime and can access the mood board sign plate.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image24.png" alt="RoomOwner setting location" width="500" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image31.png" alt="RoomOwnerList inspector" width="500.5" />
	</div>
</div>

The check is based on the VRChat username. Register your own username or your friends' usernames as needed.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image45.png" alt="RoomOwner username input field" width="361.5" />
</div>

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image47.png" alt="VRChat username check example 1" width="199.5" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image21.png" alt="VRChat username check example 2" width="114.5" />
	</div>
</div>

If you use the Full Pack, users registered in RoomOwner can use the room key in the lobby. Rooms 701 and 702 can each have their own list.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image49.png" alt="RoomOwner-related settings in the Full Pack" width="800" />
</div>

## Sign plate settings

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image28.png" alt="Overall sign plate setting location" width="800" />
</div>

### BGM settings

Each plate can have its own BGM. You can either assign an AudioClip or use a video URL. If you use a video URL, enable `isVideoMode`.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image19.png" alt="BGM and Video URL fields" width="600" />
</div>

`SignPlate_0(Default)` is the default BGM used when no plate is hanging. It is optional, but using an AudioClip is recommended because it avoids extra video loading.

### Mood object settings

Objects added to `SignPlateObjects` appear only for that mood. Objects placed in `SignPlateObjects Inactive` are hidden instead.

:::tip How to use the plates
Assigning objects to `SignPlateObjects` lets you show items only when a specific sign plate is selected.
:::

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image10.png" alt="SignPlateObjects field" width="624" />
</div>

:::warning Do not remove existing objects
Objects such as `1_Chill` are already used for post effects and reverb tuning. Leave them as they are.
:::

## Video player settings

If you place the video player under `MoviePlayerHere`, it appears when the Movie plate is selected. Put your preferred video player there and use it as needed.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/vizvid_inspector_1.jpg" alt="MoviePlayerHere hierarchy" width="525" />
</div>

The demo world uses VizVid. For player-specific controls and settings, refer to that player's manual.

:::warning Placement notes
With VizVid, putting the player under `MoviePlayerHere` is enough for the position to line up correctly.  
If you use another player, place it at the same position as `MoviePlayerHere` and fine-tune the transform if needed.
:::

### VizVid placement example

#### Screen placement for 701

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image2.png" alt="VizVid screen plate" width="600" />
</div>

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/vizvid_inspector_1.jpg" alt="VizVid placement in the 701 hierarchy" width="600" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/vizvid_inspector_2.jpg" alt="VizVid transform settings for 701" width="600" />
	</div>
</div>

#### Audio settings for 701

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image22.png" alt="Audio settings for 701, part 1" width="400" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image17.png" alt="Audio settings for 701, part 2" width="600" />
	</div>
</div>

#### Placement and audio settings for 702

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image2.png" alt="Screen plate for 702" width="600" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/vizvid_inspector_1.jpg" alt="VizVid placement for 702" width="800" />
</div>

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image39.png" alt="Audio settings for 702, part 1" width="400" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image54.png" alt="Audio settings for 702, part 2" width="600" />
	</div>
</div>

## Next page

Continue to [Upload and Quest Support](./upload.md) to prepare the world for publishing.
