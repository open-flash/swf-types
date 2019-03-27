extern crate swf_tree;

extern crate serde_json;

use swf_tree::{SRgb8, Tag, tags};

fn main() {
  println!("NotImplemented: This should be an example program trying to parse a JSON file");

  let rgb: SRgb8 = SRgb8 { r: 2, g: 4, b: 8 };

  let attrs = tags::FileAttributes {
    use_direct_blit: true,
    use_gpu: true,
    has_metadata: true,
    use_as3: true,
    no_cross_domain_caching: true,
    use_relative_urls: true,
    use_network: true,
  };

  let t = Tag::FileAttributes(attrs);

  println!("{}", serde_json::to_string_pretty(&rgb).unwrap());
  println!("{}", serde_json::to_string_pretty(&t).unwrap());
}
