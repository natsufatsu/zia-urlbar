# Compatibility verification for Zia URL Bar 1.0.1

Checked on Windows with Zen 1.22.3b (Gecko 156.0.1), using a fresh headless
profile with **Sidebar and Top Toolbar**. The scripts and assets use Sine's
`chrome://sine/content/<mod-id>/` paths. Tests load the packages directly into
browser chrome; Sine's installation/update UI is outside this test.

| Mod | Version | GitHub commit tested |
| --- | --- | --- |
| [Quick Save Image](https://github.com/natsufatsu/Zen-Quick-Save-Image) | 1.0.0 | `4da1ebce5132115aa08bafd20cf730fb20c18d4c` |
| [Zia Media Player](https://github.com/natsufatsu/zia-media-player) | 1.0.8 | `8364994b7f6daeb983f0cc42881ff648717141c6` |
| [Zia Split Tabs](https://github.com/natsufatsu/zia-split-tabs) | 1.0.7 | `5738b6e44a76c29582024f2986c6547ace5d6879` |

All four mods ran together, with URL Bar loaded both before and after the peers.
Both runs passed:

- Startup with each mod's own guard and settings, with no mod errors.
- A real image context menu and native downloads producing `test.png` and
  `test (1).png` in the isolated profile's download folder, with the native
  “always ask” preference enabled.
- Actual local audio playback and the native media card, retaining workspace
  color, 40%/90% default opacity and custom 25%/75% settings through pane switches.
- Split targets appearing, canceling without making a split, and creating a
  split through the Split Tabs mod's drop handler. These drag events are
  synthesized in browser chrome; physical OS dragging is not simulated.
- Split panes retain native corner radii, shadows and clipping, checked against
  the same panes with URL Bar's stylesheet unloaded. Native headers remain.
- Light/dark pane focus updates the main URL title and toolbar color.
- Sidebar geometry and computed styling remain unchanged.

The 1.0.0 frame rules replaced native split-pane corners, shadows and clipping.
Version 1.0.1 limits those content rules to regular tab views while retaining the
outer page frame and top toolbar in split view.

The source development workspace has the reproducible checks in
`tools/check_urlbar_live.py` and `tools/urlbar_live_checks.js`. Check out the three
peer repositories into `.build/compat-urlbar/quick-save`, `media-player` and
`split-tabs`, then run:

```powershell
python tools/check_urlbar_live.py
python tools/check_urlbar_live.py --urlbar-last
node tools/check_urlbar_mod.cjs
```

The tests launch and close their own headless Zen instance and use a temporary
profile, test pages, audio and downloads. They do not change the normal profile.
Interactive drag feel, address hover, popup alignment and other platforms or Zen
versions still need manual verification.
