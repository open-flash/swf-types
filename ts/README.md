# SWF Tree

See the home website for documentation

## Usage

```shell
# Run as a simple user
npm install -S swf-tree
```

```typescript
import {readFileString} from "fs";
import {Movie} from "swf-tree";

// Deserialize
const jsonString: string = readFileString("ast.json").toString("utf8");
const parsedJson: Movie.Json = JSON.parse(jsonString);
const movie: Movie = Movie.Type.read("json", parsedJson);

// Serialize
const emittedJson: Movie.Json = Movie.Type.write("json", movie);
console.log(JSON.stringify(jsonMovie, null, 2));
```
