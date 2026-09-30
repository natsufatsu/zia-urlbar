# Zia URL Bar

Standalone extraction from [Zia](https://github.com/z1n-k/zia) by z1n-k, MIT licensed.

Includes the Dia-style address bar and search dropdown, domain / page-title display,
URL on hover, loading glow, site-colored top toolbar with readable text on light sites,
navigation icons, and rounded page frame. Toolbar colors follow page scrolling and
are remembered per host in this mod's own cache.

No sidebar styling, essentials, tab-group/folder changes, icon picker, media player,
PiP changes, split-view controls, download controls, find-bar changes, undo-close
shortcut, or new-tab redirects. Native Zen sidebar and tab behavior are preserved.

## Install

Requires Zen Browser and [Sine](https://github.com/CosmoCreeper/Sine), with
JavaScript from unofficial sources enabled in Sine's settings.

1. In Zen Settings → Sine Mods, enable installing JavaScript from unofficial sources.
2. Enter `natsufatsu/zia-urlbar` in Sine's install box.
3. Disable the original full Zia mod, then restart Zen.

Repository: https://github.com/natsufatsu/zia-urlbar
The ZIP is a repository-ready package, not a Firefox extension/XPI.

Disable full Zia, enable this mod, and restart Zen. Use Zen's **Sidebar and Top
Toolbar** layout. If necessary, clear the startup cache in `about:support`.
Restart after enabling, disabling or updating the mod's JavaScript.
The standalone Zia Media Player and Zia Split Tabs packages can also be enabled
if you separately want those features.

## Compatibility (1.0.1)

Checked together with [Quick Save Image](https://github.com/natsufatsu/Zen-Quick-Save-Image),
[Zia Media Player](https://github.com/natsufatsu/zia-media-player), and
[Zia Split Tabs](https://github.com/natsufatsu/zia-split-tabs).
The rounded frame keeps Zen's own split-pane corners, shadows, clipping and
header controls. The URL display and toolbar color follow the focused split tab.
Image saving, context menus, downloads, media colors and opacity settings are
handled by their respective mods.
See [the compatibility report](COMPATIBILITY.md) for tested versions and coverage.

## Settings

In Sine's settings for **Zia URL Bar**, choose whether to use Zen's accent color
for the loading glow. The default is Zia blue; the setting applies immediately.

## Rebuild and validation

The extraction tools live in the original development workspace, rather than this
standalone package. From that workspace, run `python tools/build_urlbar_mod.py`.
`python tools/build_mods.py` also rebuilds this package along with the other mods.
Run `node tools/check_urlbar_mod.cjs` for package and simulated browser checks.

Automated headless checks on Windows with Zen 1.22.3b load all four mods in an
isolated profile. They verify actual image downloads and duplicate filenames,
media playback and workspace colors, opacity settings, native split-pane styling
and controls, synthetic split drag/cancel/drop events, and URL/title/color updates
when focusing light and dark panes. Checks pass with URL Bar loaded first or last.
The development workspace contains `tools/check_urlbar_live.py` and
`tools/urlbar_live_checks.js` for reproducing those checks.

Interactive visual verification is still needed for drag feel, address hover,
Ctrl/Cmd+L and dropdown alignment. The popup retains upstream's dark styling.
Other Zen versions and platforms have not been tested live.
