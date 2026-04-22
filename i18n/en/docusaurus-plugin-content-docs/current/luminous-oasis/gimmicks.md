---
sidebar_position: 6
---

# Gimmick Reference

This page summarizes the role of each gimmick included in LuminousOasis and where to configure it.

## About AreaCullinger

This is a culling gimmick mainly intended for elements such as Canvas objects that are not affected by Occlusion Culling. When the player leaves the trigger range, the Canvas is hidden to reduce load.

It is configured to help control performance in large scenes such as OasisPlus.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image29.png" alt="Hierarchy location of AreaCullinger" width="624" />
</div>

---

## About LightVolumeTrigger

This controls the brightness of `PointLightVolume` within the trigger range. Entering the trigger turns the `PointLightVolume` on, and leaving it turns it off.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image30.png" alt="Hierarchy for LightVolumeManager and LightVolumeTrigger" width="624" />
</div>

---

## About LurasVoiceShutter

This gimmick separates voices by area. By placing a `VoicesTrigger_Area` with a specified `RoomId`, you can control how voices are heard. By default, voices are muffled in the lounge and sauna.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image31.png" alt="Hierarchy for LurasVoiceShutter_PoolSet" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image32.png" alt="Settings for the Luras Voice Shutter room trigger" width="520" />
	</div>
</div>

<div class="doc-media doc-media--left">
	<img src="/lura-world-doc/img/luminous-oasis/image33.png" alt="Luras Voice Shutter settings" width="600" />
</div>

---

## About TeleportSystem

The stair area contains teleport triggers. In the standalone LuminousOasis scene, they are inactive by default.

When you enter the range of `TeleportTrigger`, you are moved to `TARGET`.

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image34.png" alt="Hierarchy for TeleportSystem and TeleportTrigger" width="624" />
</div>

---

## About the elevator gimmick

The sample scene containing only the elevator is located here:

Assets/QuickBrown/LuminousHotel/FullPack/3DASSET/04_GIMMICK/Elevator/SCENE

<div class="doc-media doc-media--left doc-media--full">
	<img src="/lura-world-doc/img/luminous-oasis/image35.png" alt="Exterior of the elevator sample scene" width="624" />
</div>

If the spawn point is at the center of the elevator, in other words at the position of `teleportTarget`, the door opens when joining.

The `Elevator_Floor` script identifies each elevator, and `ElevatorManager` manages them.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image36.png" alt="Settings for Elevator_Floor" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image37.png" alt="Settings for Elevator_Manager" width="520" />
	</div>
</div>

- `FloorNumber` is the identifier for the floor.
- `ElevatorNumber` is the identifier when there are multiple elevators.
- Each elevator must be registered in `ElevatorManager`.
- Each switch must connect to `ElevatorManager` and specify the destination elevator by ID when pressed.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image38.png" alt="Settings for Elevator_Switch" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image40.png" alt="Hierarchy of the switches inside the elevator" width="520" />
	</div>
</div>

In the standalone LuminousOasis scene, a 7F elevator is prepared so you can connect the elevator to another area while customizing.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image39.png" alt="7F elevator in the standalone LuminousOasis scene" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image41.png" alt="Destination switches inside the elevator" width="520" />
	</div>
</div>

By default, the switch inside the elevator in the B2 area is inactive because it is not used. Enable it if you want to use it.

---

## About LowPassTrigger

`LowPassTrigger` controls the `AudioLowPassFilter` attached to an `AudioSource`.

When the player enters the trigger, the value changes to the specified amount so the sound becomes muffled and occluded.

<div class="doc-media-row">
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image42.png" alt="Audio Low Pass Filter settings" width="520" />
	</div>
	<div class="doc-media doc-media--left">
		<img src="/lura-world-doc/img/luminous-oasis/image43.png" alt="Low Pass Trigger settings" width="520" />
	</div>
</div>

---

## About mirrors and switches

This world uses `LuraSwitch2`.

For detailed usage, please refer to the [LuraSwitch2 documentation](https://lurathunder.github.io/lura-switch-docs/).

## Related pages

- [FAQ](./troubleshooting.md)
