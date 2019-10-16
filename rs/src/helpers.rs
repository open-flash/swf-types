use hex;
use hex::FromHex;
use serde::{Deserialize, Deserializer, Serializer};

/// Serializes `buffer` to a lowercase hex string.
pub fn buffer_to_hex<T, S>(buffer: &T, serializer: S) -> Result<S::Ok, S::Error>
where
  T: AsRef<[u8]>,
  S: Serializer,
{
  serializer.serialize_str(hex::encode(buffer).as_ref())
}

/// Deserializes a lowercase hex string to a `Vec<u8>`.
pub fn hex_to_buffer<'de, D>(deserializer: D) -> Result<Vec<u8>, D::Error>
where
  D: Deserializer<'de>,
{
  use serde::de::Error;
  String::deserialize(deserializer)
    .and_then(|string| Vec::from_hex(&string).map_err(|err| Error::custom(err.to_string())))
}

pub fn optional_buffer_to_hex<S>(buffer: &Option<Vec<u8>>, serializer: S) -> Result<S::Ok, S::Error>
where
  S: Serializer,
{
  use serde::Serialize;

  #[derive(Serialize)]
  struct Wrapper<'a>(#[serde(serialize_with = "buffer_to_hex")] &'a Vec<u8>);

  let v: Option<Wrapper> = match buffer {
    Some(ref x) => Option::Some(Wrapper(x)),
    None => Option::None,
  };

  v.serialize(serializer)
}

pub fn hex_to_optional_buffer<'de, D>(deserializer: D) -> Result<Option<Vec<u8>>, D::Error>
where
  D: Deserializer<'de>,
{
  #[derive(Deserialize)]
  struct Wrapper(#[serde(deserialize_with = "hex_to_buffer")] Vec<u8>);

  let v = Option::deserialize(deserializer)?;
  Ok(v.map(|Wrapper(bytes)| bytes))
}
