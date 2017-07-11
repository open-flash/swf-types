# Tag

This is the main structure of an SWF file. Each tag either defines a new character or is a control tag
modifying the state of the scene.

This is an enum representing all the types of tag, and a special variant `Unknown` representing
an unknown tag. This specification never uses the whole enum but always specific variants to
provide tagged unions for languages missing this feature.
A TagType variant is denoted with a dot: `TagType.Unknown` represents the type of the `Unknown` variant
of `TagType`.


- JSON: string, kebab-case name of the enum variant
- Typescript: enum
- Rust: Implicit, name of the corresponding `Tag` variant.

**Important node**: Since this defines the AST of SWF files, there are less tags than in the
original documentation. Some tags have the same AST but different grammars.

```
union(type) Tag {
  CharacterSet;
  CsmTextSettings;
  DebugId;
  DefineBehaviour;
  DefineBinaryData;
  DefineBits;
  DefineBitsJpeg2;
  DefineBitsJpeg3;
  DefineBitsJpeg4;
  DefineBitsLossless;
  DefineBitsLossless2;
  DefineButton;
  DefineButton2;
  DefineButtonColorTransform;
  DefineButtonSound;
  DefineCommandObject;
  DefineEditText;
  DefineFont;
  DefineFont2;
  DefineFont3;
  DefineFont4;
  DefineFontAlignZones;
  DefineFontInfo;
  DefineFontInfo2;
  DefineFontName;
  DefineFunction;
  DefineMorphShape;
  DefineMorphShape2;
  DefineScalingGrid;
  DefineSceneAndFrameLabelData;
  DefineShape;
  DefineShape2;
  DefineShape3;
  DefineShape4;
  DefineSound;
  DefineSprite;
  DefineText;
  DefineText2;
  DefineTextFormat;
  DefineVideo;
  DefineVideoStream;
  DoAbc;
  DoAbcDefine;
  DoAction;
  DoInitAction;
  EnableDebugger;
  EnableDebugger2;
  End;
  ExportAssets;
  ExternalFont;
  FileAttributes;
  FrameLabel;
  FreeAll;
  FreeCharacter;
  GenCommand;
  GenerateFrame;
  GenTagObjects;
  ImportAssets;
  ImportAssets2;
  JpegTables;
  Metadata;
  NameCharacter;
  PathsArePostscript;
  PlaceFunction;
  PlaceObject;
  PlaceObject2;
  PlaceObject3;
  ProductInfo;
  Protect;
  RemoveObject;
  RemoveObject2;
  ScriptLimits;
  SetBackgroundColor;
  SetTabIndex;
  ShowFrame;
  SoundStreamHead;
  SoundStreamHead2;
  SoundStreamBlock;
  StartSound;
  StartSound2;
  StopSound;
  SymbolClass;
  SyncFrame;
  Telemetry;
  VideoFrame;
  Unknown;
}
```
