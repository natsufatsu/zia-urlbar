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

## Settings

In Sine's settings for **Zia URL Bar**, choose whether to use Zen's accent color
for the loading glow. The default is Zia blue; the setting applies immediately.

## Rebuild and validation

The extraction tools live in the original development workspace, rather than this
standalone package. From that workspace, run `python tools/build_urlbar_mod.py`.
`python tools/build_mods.py` also rebuilds this package along with the other mods.
Run `node tools/check_urlbar_mod.cjs` for package and simulated browser checks.

Live Zen visual verification is still required. Check address hover, click and
Ctrl/Cmd+L, searching, loading and error pages, tab switching, scrolling on light
and dark sites, and native split view. The popup retains upstream's dark styling.
Verify that sidebar, folders and PiP keep their normal Zen appearance and behavior.
