<!--
  ============================================================
  IMAGE OPTIMISATION GUIDE
  ------------------------------------------------------------
  Current sizes (check with: dir images):
    project6.png  ~8.1 MB  <-- MUST compress
    project2.png  ~7.4 MB  <-- MUST compress
    project3.png  ~1.6 MB  <-- should compress
    about.jpg     ~0.8 MB  <-- should compress
    profile.jpeg  ~0.5 MB  <-- should compress
    project4.jpg  ~0.5 MB  <-- should compress

  TARGET: every image under 300 KB (0.3 MB).

  HOW TO COMPRESS (free, no installs):
    1. Go to https://squoosh.app
    2. Drag each image in.
    3. Choose:
         Photos (jpg/jpeg/png screenshots) -> MozJPEG, quality 75
         Graphics/logos/flat colour        -> WebP, quality 80
    4. Resize to max width: 1600px (hero/covers), 1200px (gallery).
    5. Download and overwrite the file in /images with the SAME name.

  WHY: Netlify serves files as-is. A visitor on mobile data currently
  downloads ~20 MB before the site feels fast. Below ~2 MB total the
  portfolio opens in under 2 seconds on 4G.

  NOTE: lazy-loading is already enabled on every below-the-fold image,
  so after compression the gallery will load rows on demand.
  ============================================================
-->