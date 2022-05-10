# Next

- **[Change]** Match flag order for `DefineFont` and `DefineFontInfo`.

## Rust

- **[Breaking change]** Use bitflags instead of separate `bool` fields in `Bevel`, `ButtonCond`, `ButtonRecord`,
  `ClipEventFlags`, `DefineDynamicText`, `DefineFont`, `DefineFontInfo`, `FileAttributes`, `Glow`, `GradientBevel`,
  `GradientGlow`, `LineStyle` and `MorphLineStyle`.
- **[Breaking change]** Box big variants to reduce size of enums `FillStyle`, `MorphFillStyle`, `MorphShapeRecord`,
  `ShapeRecord` and `Tag`.

# 0.14.0 (2022-05-07)

## Rust

- **[Breaking change]** Require Rust `1.60.0`.
- **[Breaking change]** Rename the feature `use-serde` to `serde`.
- **[Fix]** Update dependencies.

# Typescript

- **[Breaking change]** Update to `kryo@0.14`.
- **[Breaking change]** Compile to `.mjs`.
- **[Fix]** Update dependencies.
- **[Internal]** Use Yarn's Plug'n'Play linker.

# 0.13.0 (2021-07-23)

## Rust

- **[Fix]** Update dependencies.
- **[Fix]** Remove all `unsafe` uses.

## Typescript

- **[Breaking change]** Update to `kryo@0.13`.
- **[Breaking change]** Drop `lib` prefix and `.js` extension from deep-imports.
- **[Fix]** Update dependencies.

# 0.12.0 (2020-09-05)

- **[Breaking change]** Use `PascalCase` for enums and types.
- **[Breaking change]** Require `colorTransform` in `ButtonRecord` ([#85](https://github.com/open-flash/swf-types/issues/85)).
- **[Breaking change]** Rename `DefineButton.characters` to `records` ([#86](https://github.com/open-flash/swf-types/issues/86)).

## Rust

- **[Fix]** Update dependencies.

## Typescript

- **[Breaking change]** Update to native ESM.
- **[Internal]** Switch from `tslint` to `eslint`.

# 0.11.0 (2020-02-05)

- **[Breaking change]** Update `DoAbc` to allow optional flags and name.
- **[Breaking change]** Rename custom image media type to be closer to the corresponding tag names.

## Rust

- **[Internal]** Add clippy support ([#83](https://github.com/open-flash/swf-types/issues/83)).

# 0.10.0 (2019-11-21)

- **[Breaking change]** Rename from `swf-tree`  to `swf-types`.
- **[Breaking change]** Replace `Unknown` tag with `RawBody`.
- **[Feature]** Add `Raw` tag.

## Rust

- **[Feature]** Make `serde` optional (enabled by default) ([#73](https://github.com/open-flash/swf-types/issues/73)).
- **[Fix]** Expose `float_is` module, to allow bit-pattern float equality.
- **[Fix]** Update dependencies.

## Typescript

- **[Fix]** Fix pre-release npm tag.

# 0.9.0 (2019-10-17)

- **[Breaking change]** Change field order in `DefineMorphShape`.
- **[Feature]** Define `DefineButtonSound` tag.
- **[Feature]** Define `DefineButtonColorTransform` tag.
- **[Feature]** Define `DefineVideoStream` tag.
- **[Feature]** Define `EnablePostscript` tag.
- **[Feature]** Define `VideoFrame` tag.
- **[Feature]** Define `SetTabIndex` tag.
- **[Feature]** Define `DefineScalingGrid` tag.
- **[Feature]** Add `image/x-ajpegd` image type to support JPEG with deblocking.
- **[Fix]** Fix `DefineCffFont` definition: reorder fields and ensure data is optional ([#40](https://github.com/open-flash/swf-types/issues/40)).

## Rust

- **[Fix]** Fix `Telemetry` serialization.

# 0.8.0 (2019-07-08)

- **[Breaking change]** Require `language` to be defined in `DefineFontInfo`.
- **[Breaking change]** Reorder `FileAttributes` fields.
- **[Breaking change]** Remove `DefinePartialFont` tag (replaced by `DefineGlyphFont`).
- **[Internal]** Update `README.md`.

## Rust

- **[Breaking change]** Use `[f32; 20]` in `ColorMatrix` filter ([#25](https://github.com/open-flash/swf-types/issues/25)).
- **[Fix]** Fix `Is` implementation for vectors (used to compare floats by bit pattern).
- **[Internal]** Add `rustfmt` support.

# 0.7.2 (2019-07-05)

- **[Feature]** Define `DefineGlyphFont` tag.

# 0.7.1 (2019-07-05)

- **[Feature]** Define `Protect` tag.

### Typescript

- **[Fix]** Update dependencies.

# 0.7.0 (2019-05-21)

- **[Breaking change]** Add `em_square_size` field to `DefineFont` ([#42](https://github.com/open-flash/swf-types/issues/42)).
- **[Breaking change]** Require `align` to be defined in `DefineDynamicText` ([#41](https://github.com/open-flash/swf-types/issues/41)).
- **[Fix]** Update `ButtonCond` field order.
- **[Fix]** Update `ButtonRecord` field order.
- **[Internal]** Update test samples.

### Typescript

- **[Internal]** Update build tools.

# 0.6.0 (2019-04-22)

- **[Breaking change]** Update to MIT/Apache2 license.
- **[Feature]** Define `TagHeader`.
- **[Internal]** Refactor test samples organization.
- **[Internal]** Add `CHANGELOG.md`.

### Rust

- **[Fix]** Skip `control_delta` serialization when `None`.
- **[Fix]** Remove binary-only dependencies from published crate.
- **[Fix]** Update to `swf-fixed@0.1.4`.

### Typescript

- **[Breaking change]** Rename `ClipActions` to `ClipAction` ([#26](https://github.com/open-flash/swf-types/issues/26)).

# 0.5.0 (2019-04-13)

- **[Breaking change]** Unify `StraightEdge` and `CurvedEdge` into `Edge` as well as their morph counterparts. ([#22](https://github.com/open-flash/swf-types/issues/22)).

# 0.4.2 (2019-04-05)

### Rust

- **[Feature]** Derive the following traits when applicable: `Copy`, `Clone`, `PartialOrd`, `Ord` and `Hash`.
- **[Feature]** Implement `Default` for matrices.
- **[Fix]** Update to `swf-fixed@0.1.3`.

# 0.4.1 (2019-03-30)

### Rust

- **[Fix]** Export `SoundEnvelope` and `SoundInfo`
- **[Fix]** Update dependencies

# 0.4.0 (2019-03-29)

- **[Feature]** Add definitions for the following tags: `DoAbc`, `ScriptLimits`, `StartSound`, `StartSound2` and `SymbolClass`

### Rust
- **[Feature]** Derive `Copy` trait for simple enums

# 0.3.2 (2019-03-28)

- **[Breaking change]** Refactor sound tags: reorder fields and rename `streamSoundSampleCount` to `streamSampleCount` and `streamSoundCompression` to `streamFormat`.

# 0.2.1 (2019-03-28)

- **[Fix]** Use `Sint32` for `Rect` dimensions
