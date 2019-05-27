# SWEX Raid Notifier

This plugin will allow you to receive a notification on your proxy machine when a raid run has finished so you are not the dude who stays _In Battle_ while everyone else is waiting.

## Installation

1. Download the [latest release](https://github.com/chinleung/sw-exporter-raid-notifier/releases/latest/).
2. Unzip the package.
2. Move both the **raid-exporter.asar** and **raid-exporter.asar.unpacked** into the plugins folder of SWEX.

## FAQ

### Why do I need the raid-exporter-asar.unpacked folder?
This plugin uses [node-notifier](https://github.com/mikaelbr/node-notifier), therefore you need the unpacked folder for it to work. For more information: https://github.com/mikaelbr/node-notifier#within-electron-packaging

### Why do I have an error when I start SWEX?
It's normal that you are receiving a "Invalid plugin raid-notifier.asar.unpacked. Missing one or more required module exports." when you start SWEX as it is trying to load the unpacked directory as a plugin even though it is not a SWEX plugin.
