# Asset provenance

- `public/headshot.png`: inherited from adapt22-ai/adapt22-site, starting main commit a822807. Existing repository identifies subject as Jackson McConnell. Preserved unchanged.
- `public/images/landscape.jpg`: Unsplash image source https://images.unsplash.com/photo-1464822759023-fed622ff2c3b ; downloaded at 2400px, quality 85. Mountain landscape; visually inspect before acceptance.
- `public/images/forest.jpg`: Unsplash image source https://images.unsplash.com/photo-1441974231531-c6227db76b6e ; downloaded at 2000px, quality 85. Forest; visually inspect before acceptance.
- `public/images/wildlife.jpg`: Unsplash image source https://images.unsplash.com/photo-1472396961693-142e6e269027 ; downloaded at 1600px, quality 85. Deer; visually inspect before acceptance.
- License checked October 25, 2026: https://unsplash.com/license allows free commercial use and modification. Download source identifiers retained above. No claim that these are user-selected photographs.
- New triskelion: authored SVG. Three identical arms rotated 120 degrees around a shared center. Logo draft based on the user's approved identity direction; original artwork approval is not claimed.
- Legacy public assets remain preserved in Git. The new pages do not load legacy architectural videos or old wordmark images.
- Manrope regular: self-hosted font from Google Fonts, https://fonts.google.com/specimen/Manrope ; source https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf . SIL Open Font License retained at public/fonts/OFL.txt. Bold browser synthesis is used for small labels only.

## Review 2 photography
- `public/images/ridges.jpg`: https://images.unsplash.com/photo-1483354483454-4cd359948304 . Muted mountain ridges, selected to match slate, stone, and paper. Retrieved at 2000px, quality 85. Unsplash free image source, under the same Unsplash license above.
- `public/images/bison.jpg`: Trevor Vannoy, https://unsplash.com/photos/a-large-bison-standing-on-top-of-a-snow-covered-slope-qJJJiwtRn1c ; source https://images.unsplash.com/photo-1565198660388-26aaf474f0d8 . Free Unsplash image under the standard license. Winter wildlife replaces the saturated green deer scene. Retrieved at 2000px, quality 85.
- Existing forest and deer files remain in Git for provenance but are no longer loaded by website pages.
- `/brand-review` contains three authored SVG studies in the approved palette. The current mark remains the site identity until a direction is chosen. These are new studies, not a reconstruction of missing generated artwork. The review route returns 404 in production and is excluded from the sitemap.
- Review 2 also replaces favicon, Apple touch icon, and manifest icons with rasterizations of the current authored triskelion in bronze on ink. The manifest now uses adapt22 / a22 and the approved palette; no legacy green icon remains active in linked metadata.

## Review 3 banners
- Services: `public/images/coast.jpg`, https://images.unsplash.com/photo-1518837695005-2083093ee35b . Ocean surface and pale horizon; downloaded at 2200px under the standard Unsplash license.
- About and service detail default: `public/images/summit.jpg`, Tobias Stonjeck, https://unsplash.com/photos/F2gembQ10zA ; source https://images.unsplash.com/photo-1508972036778-18166e320345 . Muted alpine summit; standard Unsplash license.
- Contact: `public/images/lake.jpg`, Zak Bernadsky, https://unsplash.com/photos/a-mountain-with-a-lake-in-front-of-it-xk-zYQSopow ; source https://images.unsplash.com/photo-1643662372752-b4263e1b41ab . Mountain lake reflection; standard Unsplash license.
- Home's secondary ridge scene remains unique to that homepage placement; Services, Approach, About, and Contact use four distinct sources as full-width backgrounds. The original homepage mountain is preserved.
- Logo review expanded to 12 newly authored SVG studies in four families: geometric, fluid, engineered, and emblematic. No new study has been adopted as the website logo.

## Review 4
- Services: `public/images/alpine-valley.jpg`, Florian Schindler, https://unsplash.com/photos/winding-path-through-mountain-valley-fzt9wBqln-8 ; source https://images.unsplash.com/photo-1791190291291-c521b1e30d9e . Standard Unsplash license explicitly displayed on the source page, checked October 26, 2026. Downloaded at 2400px, quality 85. Warm alpine pine valley replaces the generic ocean surface; the earlier file is preserved but unused.
- Bison and summit source files unchanged. Responsive composition preserves the bison's complete outline and the summit's peak. CSS grading retains more natural source color.
- Logo review now contains four unchanged reference studies (G1/G2/F1/B2) and twelve new authored SVG studies (N1–N12). Rejected prior options removed from the review. No study adopted as the final identity.

## Review 5 image edits
- `public/images/bison-banner.png` and `public/images/bison-mobile.png`: image-tool edits/outpainting of the existing licensed `bison.jpg` (Trevor Vannoy / Unsplash source above), made October 26, 2026. Wide 2172×724 and vertical 1024×1536 compositions extend snowy grassland for responsive text placement. AI-edited photographic compositions; no claim that the added surroundings were captured by the original photographer. Original source retained unchanged.
- `public/images/portrait-repair.png`: image-tool repair derived from `public/headshot.png`, 1086×1448. Used only as a clipped underlay at the defective lower shirt/arm alpha notch. Original headshot remains the foreground and its file is unchanged; generated identity features elsewhere in the repair file are not used in the rendered portrait.
- Logo studies: four original references, three N2/N4/N11 baselines, ten new authored vector refinements. Rejected N1/N3/N5–N10/N12 removed from the review. Current mark unchanged.

## Review 6 vector studies
`src/components/LogoStudy.js` contains twelve new authored single-color SVG studies around the unchanged N11-C reference. C1–C6 explore tapered and connected returns; P1–P6 explore looser paisley, floral and three-part forms, including a mathematically constructed trefoil curve. No raster assets or public-site identity assets changed. Studies are unapproved exploration, with no trademark-clearance claim.

## Review 7 selected identity
C3 / Shared center is owner-selected. Exact path/stroke from the C3 exploration is centralized in `src/lib/brand-mark.js` and shared by `Mark` and the private C3 study. SVG favicon/app icon, multi-size ICO (16/32/48/256), 96px browser PNG, 180px Apple icon and 192/512px manifest icons are rasterizations of that same authored SVG, bronze on ink. Social preview now includes the selected C3 mark. No photo assets changed.

## Prelaunch audit derivatives
Seven active landscape/wildlife sources have responsive WebP derivatives in `public/images/optimized/`, generated by `scripts/optimize-images.mjs` with Sharp at quality 68, widths 480/768/1200/1600/2200 where smaller than the source, plus the source width. Source files remain unchanged. Filenames include source fingerprints and receive immutable caching. `src/lib/image-manifest.json` includes small inline WebP placeholders; `hero-intents.json` contains only route warmup metadata. These are compression/resizing derivatives, not newly generated scenes. Bison source composition remains the documented review 5 edit.
