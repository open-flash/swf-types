use header::Header;
use tags;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum Tag {
  Unknown(tags::Unknown),
  DefineSceneAndFrameLabelData(tags::DefineSceneAndFrameLabelData),
  DefineShape(tags::DefineShape),
  DoAction(tags::DoAction),
  End,
  FileAttributes(tags::FileAttributes),
  Metadata(tags::Metadata),
  PlaceObject(tags::PlaceObject),
  SetBackgroundColor(tags::SetBackgroundColor),
  ShowFrame,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct SwfFile {
  pub header: Header,
  pub tags: Vec<Tag>,
}
