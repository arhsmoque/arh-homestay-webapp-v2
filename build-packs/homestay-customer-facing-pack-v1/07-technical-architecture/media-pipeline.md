# Media Pipeline

## Media Role

Media is not decoration.

```text
photos prove reality
video creates desire
layout reduces anxiety
route video helps arrival
night/rain photos show ambience
event photos show use case
```

## Build Now

- compress images
- generate responsive sizes
- use modern formats where possible
- set width and height
- lazy-load below-fold images
- write alt text
- reserve layout space
- avoid autoplay-heavy first screen

## Scaffold Now

- media registry
- image usage map
- owner upload rules
- hero image validation
- Open Graph image selection
- video purpose tags

## Future

- Cloudflare R2 storage
- Cloudflare Images transformations
- automatic resizing
- owner media manager
- video transcoding/CDN if needed

## Media Registry Item

```yaml
id: ""
file: ""
type: "image | video"
group: "hero | pool | room | event | layout | location | route | night | rain | parking"
alt_text: ""
caption: ""
subject: ""
page_usage:
  - home
  - private_pool
  - gallery
featured: true
aspect_ratio: "16:9 | 4:3 | 1:1 | 9:16"
priority: "hero | above_fold | normal | lazy"
permission_status: "owned | guest_approved | hidden"
```
