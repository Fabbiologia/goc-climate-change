# Gulf of California Climate Change Storymap

Static GitHub Pages site for the Gulf of California sea-surface temperature storymap.

## Contents

- `index.html`: browser-ready storymap.
- `temperature_storymap_data.js`: generated NOAA OISST v2.1 summary data used by the page.
- `ocean_gulf_sample_points.csv`: sampled Gulf station points used to build the series.

## Data Sources & Credits

Original sea-surface temperature source:

- [NOAA/NCEI Optimum Interpolation Sea Surface Temperature (OISST) v2.1](https://www.ncei.noaa.gov/products/optimum-interpolation-sst)
- [NOAA PSL monthly OISST files](https://downloads.psl.noaa.gov/Datasets/noaa.oisst.v2.highres/)

Analysis and storymap: combined UoP-SIO Gulf of California climate monitoring
group by Fabio Favoretto and Octavio Aburto-Oropeza.

The weekly ocean update rebuilds the storymap data, then publishes any changed
site files to this repository.

## Public Site

After GitHub Pages finishes deploying, the site should be available at:

```text
https://fabbiologia.github.io/goc-climate-change/
```

If the page does not appear, open the repository on GitHub, go to **Settings > Pages**, choose **Deploy from a branch**, and select `gh-pages` with `/ (root)`.
