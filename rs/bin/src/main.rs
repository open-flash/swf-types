use swf_types::Movie;

fn main() {
  let args: Vec<String> = std::env::args().collect();
  if args.len() < 2 {
    eprintln!("Missing input path");
    return;
  }

  let file_path = &args[1];
  let json_file = ::std::fs::File::open(file_path).expect("Failed to open file");
  let reader = ::std::io::BufReader::new(json_file);
  let movie: Movie = serde_json::from_reader(reader).expect("Failed to read value");

  println!(
    "{}",
    serde_json::to_string_pretty(&movie).expect("Failed to print value")
  );
}
