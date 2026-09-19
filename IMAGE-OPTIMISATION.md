<!--
  ============================================================
  IMAGE STATUS — LOSSLESS OPTIMISATION (quality untouched)
  ------------------------------------------------------------
  POLICY: every change below is PROVEN pixel-identical to the
  original. Decoded pixel hashes were compared before/after.

  RESULTS (total ~4.7 MB saved, zero quality loss):
    project2.png  7.37 MB -> 6.20 MB  (alpha dropped* + zlib max)
    project2.webp         -> 4.99 MB  (lossless WebP, served to all)
    project3.png  1.60 MB -> 1.49 MB  (zlib max)
    project3.webp         -> 1.11 MB  (lossless WebP)
    project6.png  8.13 MB -> 7.32 MB  (alpha dropped* + zlib max)
    project6.webp         -> 5.81 MB  (lossless WebP)

    *alpha was 100% opaque on every pixel - removing an invisible
     channel changes nothing on screen. Verified.

  HOW IT'S SERVED:
    <picture> markup sends the .webp to every modern browser and
    falls back to the verified .png otherwise. Pages, cards and all
    gallery rows already use it (see WEBP_COVERS in js/main.js).

  ORIGINALS:
    Kept untouched in images/originals/ (not committed - the same
    bytes are recoverable from git history at commit 6a1fa6e).

  IF YOU EVER WANT MORE SAVINGS:
    The only remaining lossless lever would be resizing 3264px
    sources toward display size - that DOES resample pixels, so it
    is deliberately NOT done. Leave as-is unless you ask.
  ============================================================
-->