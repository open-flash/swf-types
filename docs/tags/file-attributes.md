# FileAttributes

```
interface FileAttributes variantof Tag(type) {
  useNetwork: Boolean;
  // Not in the spec, found in Shumway
  useRelativeUrls: Boolean;
  // Not in the spec, found in Shumway
  noCrossDomainCaching: Boolean;
  useAs3: Boolean;
  hasMetadata: Boolean;
  useGpu: Boolean;
  useDirectBlit: Boolean;
}
```
