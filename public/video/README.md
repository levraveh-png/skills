# Hero background video

`hero-glass.mp4` / `hero-glass.webm` — a real, free-license (Pexels
License, no attribution required) aerial shot of a glass office tower
facade, trimmed to a 10s loop, desaturated and darkened via ffmpeg so it
reads as an abstract dark glass texture behind the hero copy rather than
a literal building photo. Both formats are served (webm first, mp4
fallback) since some Chromium builds ship without licensed H.264
decoding. No real AMPM job footage existed to use instead — replace both
files with real footage (a job site, a glass installation, LA at night)
when available, keeping the same filenames, a muted 8-12s loop, and
roughly this color treatment (darkened, desaturated) so text stays
legible over it.

`hero-poster.jpg` is the fallback/poster frame shown before the video
loads and on connections where video is disabled.

Video is disabled below the `lg` breakpoint (loads the poster image
instead) to avoid burning mobile data, per-practice and because vertical
mobile viewports crop the widescreen framing badly anyway.
