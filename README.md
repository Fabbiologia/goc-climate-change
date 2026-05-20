# Gulf of California Climate Change Storymap

Static GitHub Pages site for the Gulf of California sea-surface temperature storymap.

## Contents

- `index.html`: browser-ready storymap.
- `temperature_storymap_data.js`: generated NOAA OISST v2.1 summary data used by the page.
- `ocean_gulf_sample_points.csv`: sampled Gulf station points used to build the series.
- `.github/workflows/pages.yml`: GitHub Actions workflow that deploys the site on every push to `main`.

## Local Update Source

The source data and update scripts live on the SANDISK drive at:

```bash
/media/vision/SANDISK/ocean_data
```

The weekly ocean update rebuilds the storymap data locally, then publishes any changed site files to this repository.

## Public Site

After GitHub Pages finishes deploying, the site should be available at:

```text
https://fabbiologia.github.io/goc-climate-change/
```

If the first deployment does not appear, open the repository on GitHub, go to **Settings > Pages**, and select **GitHub Actions** as the Pages source.
