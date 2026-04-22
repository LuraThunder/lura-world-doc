---
sidebar_position: 5
---

# FAQ

This page collects items from the original FAQ along with points that are frequently referenced while customizing the world.

## Installation and publishing

### I want to rebake the lighting

In most cases, rebaking with the default settings is fine.

---

### Can I publish the Full Pack as a public world?

If you make the Full Pack public, a more private style of use is recommended by assigning RoomOwner for every room. If you only use rooms 701 and 702 separately, normal operation is usually fine.

---

### The mood board BGM sounds muffled

A `LowPassFilter` is used so the sound blends into the space. If you want a clearer sound, disable `AudioLowPassFilter` on `MoodBoard_701/System/MoodBoard_Manager/Audio Source_Music`.

---

### The key does not disappear like it does in the sample world

In the product version, the key does not disappear. In the sample, that behavior came from the `OneTimeKey` setting.

---

### Everything turned pink

:::warning Possible shader conflict
Check whether a required package is missing or whether another shader with the same name exists in your existing project. Import the Full Pack last.
:::

You may be missing a required package, or a shader with the same name may be conflicting inside an existing project. Import the Full Pack last, and if that still does not fix it, try installing in a new project.

## World customization

### I want to change the mood board to something else

If you want to add a completely new mood, you will need to edit scripts and animations, so the workload increases. A safer approach is to repurpose an existing plate that is used less often.

Good candidates are `Chill`, `Talk`, and `Work`. Review the following items while editing:

- Text on the target plate inside `SignPlate_Set`
- Display string inside `Text_Mood`
- Replacement of the icon `Sprite`

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image18.png" alt="Where to edit the text inside SignPlate_Set" width="345.95" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image25.png" alt="Target inside Text_Mood" width="458.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image53.png" alt="Icon setting that needs a Sprite replacement" width="210.59" />
</div>

:::warning Do not rename objects
If you change object names, animation references will break. Leave the names unchanged.
:::

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image58.png" alt="Checking the reflected changes on the MoodBoard_RoomOwner side" width="387.7" />
</div>

---

### I want to replace the photos

When replacing photos, duplicate the paper material first and then assign the new texture.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image51.png" alt="Paper object to be replaced" width="624" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image4.png" alt="Duplicating the paper material" width="516.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image9.png" alt="Assigning the duplicated material" width="418.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image16.png" alt="Replacing the texture with a new one" width="367.84" />
</div>

For image aspect ratios, these are easy to work with as a rough guide: landscape `16:9`, portrait `9:16`, and square `1:1`.

---

### I want to place a Visitors Information Board

When placing a Visitors Information Board, putting it at the end of `UI_Info` makes the front-to-back ordering less likely to break. Adjust the font and layout while referencing the demo world.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image26.png" alt="Visitors Information Board example" width="271.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image56.png" alt="Placement order under UI_Info" width="464.5" />
</div>

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image42.png" alt="Coordinate settings for the Visitors Information Board" width="624" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image30.png" alt="Example font and layout settings" width="460.68" />
</div>

## Adjustment points

### I want to change the morning time

Change the `Morning Hour` value in `MorningSetter`. `4` means 4 AM, `6` means 6 AM.

---

### Audio from Room701 can also be heard in the lobby

This is intentional so the lobby does not become completely silent. If you want to keep the sound inside Room701 only, adjust the `AudioSource` position and range on the 701 side. The 702 settings are a useful reference.

---

### I want to change the default volume of the ambient sounds

Change the `Volume` of the `AudioSource` components under `AUDIO/CitySound` and `NoiseAmbient`, then set the matching `Value` on `CityAmbient_Slider` and `NoiseAmbient_Slider` to the same number.

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image48.png" alt="AudioSource for CitySound and NoiseAmbient" width="293.5" />
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image55.png" alt="AudioSource volume settings" width="384.16" />
</div>

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image38.png" alt="Location of CityAmbient_Slider" width="237.04" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image40.png" alt="Location of NoiseAmbient_Slider" width="265.5" />
	</div>
</div>

---

### I want to change the mirror fade distance

Adjust `Distance Fade` and `Distance Fade Length` on `VRCMirror_HQ`, then apply the same values to `VRCMirror_Transparent` and `VRCMirror_LQ`. To avoid changing a shared material directly, duplicating it before editing is recommended.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image33.png" alt="Settings for VRCMirror_HQ" width="267.36" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image32.png" alt="Settings for VRCMirror_Transparent and VRCMirror_LQ" width="287.5" />
	</div>
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-hotel/image20.png" alt="Distance Fade parameter" width="329" />
</div>

Also adjust the mirror trigger range so it is large enough to contain the combined distance of `Distance Fade` and `Distance Fade Length`.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image12.png" alt="Mirror trigger location" width="226.5" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-hotel/image15.png" alt="Mirror trigger range" width="224.86" />
	</div>
</div>

---

### I want to change the default mood board volume

Change the `Value` on the `Slider` component of `MoodBoard_Entrance/MoodBoard_Monitor_Canvas/Mood_UI/system/Sliders/Slider_Audio`.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-hotel/image52.png" alt="Settings for Slider_Audio" width="624" />
</div>

## Related pages

- [Setup and Installation](./setup.md)
- [Initial Scene Setup](./scene-settings.md)
