# FileAttributes

```
interface FileAttributes variantof Tag(type) {
  useDirectBlit: Boolean;
  useGpu: Boolean;
  hasMetadata: Boolean;
  useAs3: Boolean;
  // Not in the spec, found in Shumway
  noCrossDomainCaching: Boolean;
  // Not in the spec, found in Shumway
  useRelativeUrls: Boolean;
  useNetwork: Boolean;
}
```
