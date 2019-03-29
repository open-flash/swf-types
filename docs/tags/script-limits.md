# ScriptLimits

```
interface ScriptLimits variantof Tag(type) {
  maxRecursionDepth: Uint(16);
  scriptTimeout: Uint(16);
}
```

- `maxRecursionDepth` has a default of 256.
- `scriptTimeout` is in seconds. Default is between 15 and 20 seconds.
