window.UPDATE_STATUS_DATA = {
  "automation": {
    "alert_signal": "A commit and push to main and gh-pages is made whenever this status is published.",
    "archive_target": "/media/vision/SANDISK",
    "cron": [
      "SNIIM: Mondays 03:17 local time via /home/vision/update_alerts/run_sniim_update_with_alert.sh",
      "Ocean/SST: Wednesdays 04:22 local time via /home/vision/update_alerts/run_ocean_update_with_alert.sh"
    ],
    "live_data_root": "/ssd/data_automation",
    "status_page": "https://fabbiologia.github.io/goc-climate-change/update-status.html"
  },
  "generated_at": "2026-06-24T03:22:42+00:00",
  "host": "vision-desktop",
  "overall_status": "WARNING",
  "page_url": "https://fabbiologia.github.io/goc-climate-change/update-status.html",
  "reason": "Ocean/SST weekly cron wrapper",
  "remote": "git@github.com:Fabbiologia/goc-climate-change.git",
  "repo": "/home/vision/goc-climate-change",
  "systems": [
    {
      "failures": [],
      "id": "sniim",
      "latest_data": [
        {
          "label": "dashboard generated",
          "value": "2026-06-22T03:04:52+00:00"
        },
        {
          "label": "raw records end",
          "value": "2026-06-19"
        },
        {
          "label": "consolidated records end",
          "value": "2026-06-22"
        },
        {
          "label": "research dataset generated",
          "value": "2026-06-22T03:06:32+00:00"
        },
        {
          "label": "research latest month",
          "value": "2026-06"
        },
        {
          "label": "SNIIM storage status generated",
          "value": "2026-06-22T03:07:11+00:00"
        },
        {
          "label": "latest scheduled log line",
          "value": "2026-06-22T04:08:46+01:00 SNIIM weekly update complete"
        }
      ],
      "latest_event": null,
      "log_excerpt": [
        "2026-06-22T03:02:53Z update consolidated Pargo coconaco 2026-04: 5 rows",
        "2026-06-22T03:02:53Z update consolidated Pargo coconaco 2026-05: 5 rows",
        "2026-06-22T03:02:54Z update consolidated Pargo coconaco 2026-06: 5 rows",
        "2026-06-22T03:02:55Z update consolidated Pargo rojo 2026-04: 2 rows",
        "2026-06-22T03:02:56Z update consolidated Pargo rojo 2026-05: 2 rows",
        "2026-06-22T03:02:56Z update consolidated Pargo rojo 2026-06: 2 rows",
        "2026-06-22T03:02:57Z update consolidated Payaso 2026-04: 1 rows",
        "2026-06-22T03:02:58Z update consolidated Payaso 2026-05: 1 rows",
        "2026-06-22T03:02:59Z update consolidated Payaso 2026-06: 1 rows",
        "2026-06-22T03:02:59Z update consolidated Peto o Carito 2026-04: 5 rows",
        "2026-06-22T03:03:00Z update consolidated Peto o Carito 2026-05: 5 rows",
        "2026-06-22T03:03:01Z update consolidated Peto o Carito 2026-06: 5 rows",
        "2026-06-22T03:03:02Z update consolidated Pierna 2026-04: 2 rows",
        "2026-06-22T03:03:02Z update consolidated Pierna 2026-05: 2 rows",
        "2026-06-22T03:03:03Z update consolidated Pierna 2026-06: 2 rows",
        "2026-06-22T03:03:04Z update consolidated Plateado 2026-04: 0 rows",
        "2026-06-22T03:03:05Z update consolidated Plateado 2026-05: 0 rows",
        "2026-06-22T03:03:06Z update consolidated Plateado 2026-06: 0 rows",
        "2026-06-22T03:03:06Z update consolidated Pulpo c/v\u00edsceras 2026-04: 2 rows",
        "2026-06-22T03:03:07Z update consolidated Pulpo c/v\u00edsceras 2026-05: 2 rows",
        "2026-06-22T03:03:08Z update consolidated Pulpo c/v\u00edsceras 2026-06: 2 rows",
        "2026-06-22T03:03:09Z update consolidated Pulpo congelado 2026-04: 10 rows",
        "2026-06-22T03:03:09Z update consolidated Pulpo congelado 2026-05: 10 rows",
        "2026-06-22T03:03:10Z update consolidated Pulpo congelado 2026-06: 9 rows",
        "2026-06-22T03:03:11Z update consolidated Pulpo fresco 2026-04: 13 rows",
        "2026-06-22T03:03:12Z update consolidated Pulpo fresco 2026-05: 14 rows",
        "2026-06-22T03:03:13Z update consolidated Pulpo fresco 2026-06: 13 rows",
        "2026-06-22T03:03:13Z update consolidated Pulpo s/v\u00edsceras 2026-04: 5 rows",
        "2026-06-22T03:03:14Z update consolidated Pulpo s/v\u00edsceras 2026-05: 5 rows",
        "2026-06-22T03:03:15Z update consolidated Pulpo s/v\u00edsceras 2026-06: 5 rows",
        "2026-06-22T03:03:16Z update consolidated Rat\u00f3n 2026-04: 1 rows",
        "2026-06-22T03:03:16Z update consolidated Rat\u00f3n 2026-05: 1 rows",
        "2026-06-22T03:03:17Z update consolidated Rat\u00f3n 2026-06: 1 rows",
        "2026-06-22T03:03:18Z update consolidated Raya 2026-04: 0 rows",
        "2026-06-22T03:03:19Z update consolidated Raya 2026-05: 0 rows",
        "2026-06-22T03:03:20Z update consolidated Raya 2026-06: 0 rows",
        "2026-06-22T03:03:20Z update consolidated Robaleta 2026-04: 0 rows",
        "2026-06-22T03:03:21Z update consolidated Robaleta 2026-05: 0 rows",
        "2026-06-22T03:03:22Z update consolidated Robaleta 2026-06: 0 rows",
        "2026-06-22T03:03:23Z update consolidated Robalo 2026-04: 18 rows",
        "2026-06-22T03:03:23Z update consolidated Robalo 2026-05: 17 rows",
        "2026-06-22T03:03:24Z update consolidated Robalo 2026-06: 17 rows",
        "2026-06-22T03:03:25Z update consolidated Robalo chico 2026-04: 5 rows",
        "2026-06-22T03:03:26Z update consolidated Robalo chico 2026-05: 5 rows",
        "2026-06-22T03:03:27Z update consolidated Robalo chico 2026-06: 4 rows",
        "2026-06-22T03:03:27Z update consolidated Robalo del pac\u00edfico 2026-04: 8 rows",
        "2026-06-22T03:03:28Z update consolidated Robalo del pac\u00edfico 2026-05: 8 rows",
        "2026-06-22T03:03:29Z update consolidated Robalo del pac\u00edfico 2026-06: 8 rows",
        "2026-06-22T03:03:30Z update consolidated Ronco amarillo 2026-04: 2 rows",
        "2026-06-22T03:03:30Z update consolidated Ronco amarillo 2026-05: 2 rows",
        "2026-06-22T03:03:31Z update consolidated Ronco amarillo 2026-06: 2 rows",
        "2026-06-22T03:03:32Z update consolidated Rubia o Biajaiba 2026-04: 7 rows",
        "2026-06-22T03:03:33Z update consolidated Rubia o Biajaiba 2026-05: 7 rows",
        "2026-06-22T03:03:33Z update consolidated Rubia o Biajaiba 2026-06: 7 rows",
        "2026-06-22T03:03:34Z update consolidated Sardina 2026-04: 2 rows",
        "2026-06-22T03:03:35Z update consolidated Sardina 2026-05: 2 rows",
        "2026-06-22T03:03:36Z update consolidated Sardina 2026-06: 2 rows",
        "2026-06-22T03:03:36Z update consolidated Sargo 2026-04: 6 rows",
        "2026-06-22T03:03:37Z update consolidated Sargo 2026-05: 6 rows",
        "2026-06-22T03:03:38Z update consolidated Sargo 2026-06: 6 rows",
        "2026-06-22T03:03:39Z update consolidated Sierra del Golfo 2026-04: 18 rows",
        "2026-06-22T03:03:39Z update consolidated Sierra del Golfo 2026-05: 16 rows",
        "2026-06-22T03:03:40Z update consolidated Sierra del Golfo 2026-06: 17 rows",
        "2026-06-22T03:03:41Z update consolidated Sierra del Pac\u00edfico 2026-04: 13 rows",
        "2026-06-22T03:03:42Z update consolidated Sierra del Pac\u00edfico 2026-05: 13 rows",
        "2026-06-22T03:03:43Z update consolidated Sierra del Pac\u00edfico 2026-06: 12 rows",
        "2026-06-22T03:03:43Z update consolidated Tenazas de cangrejo 2026-04: 7 rows",
        "2026-06-22T03:03:44Z update consolidated Tenazas de cangrejo 2026-05: 7 rows",
        "2026-06-22T03:03:45Z update consolidated Tenazas de cangrejo 2026-06: 7 rows",
        "2026-06-22T03:03:46Z update consolidated Tiburon c/cabeza 2026-04: 0 rows",
        "2026-06-22T03:03:46Z update consolidated Tiburon c/cabeza 2026-05: 0 rows",
        "2026-06-22T03:03:47Z update consolidated Tiburon c/cabeza 2026-06: 0 rows",
        "2026-06-22T03:03:48Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-04: 1 rows",
        "2026-06-22T03:03:49Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-05: 1 rows",
        "2026-06-22T03:03:50Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-06: 1 rows",
        "2026-06-22T03:03:50Z update consolidated Tibur\u00f3n sin cabeza 2026-04: 4 rows",
        "2026-06-22T03:03:51Z update consolidated Tibur\u00f3n sin cabeza 2026-05: 4 rows",
        "2026-06-22T03:03:52Z update consolidated Tibur\u00f3n sin cabeza 2026-06: 1 rows",
        "2026-06-22T03:03:53Z update consolidated Tilapia chica 2026-04: 22 rows",
        "2026-06-22T03:03:53Z update consolidated Tilapia chica 2026-05: 21 rows",
        "2026-06-22T03:03:54Z update consolidated Tilapia chica 2026-06: 21 rows",
        "2026-06-22T03:03:55Z update consolidated Tilapia grande 2026-04: 27 rows",
        "2026-06-22T03:03:56Z update consolidated Tilapia grande 2026-05: 26 rows",
        "2026-06-22T03:03:56Z update consolidated Tilapia grande 2026-06: 26 rows",
        "2026-06-22T03:03:57Z update consolidated Tilapia mediana 2026-04: 20 rows",
        "2026-06-22T03:03:58Z update consolidated Tilapia mediana 2026-05: 19 rows",
        "2026-06-22T03:03:59Z update consolidated Tilapia mediana 2026-06: 19 rows",
        "2026-06-22T03:04:00Z update consolidated Tolete 2026-04: 0 rows",
        "2026-06-22T03:04:00Z update consolidated Tolete 2026-05: 0 rows",
        "2026-06-22T03:04:01Z update consolidated Tolete 2026-06: 0 rows",
        "2026-06-22T03:04:02Z update consolidated Torito 2026-04: 2 rows",
        "2026-06-22T03:04:03Z update consolidated Torito 2026-05: 2 rows",
        "2026-06-22T03:04:04Z update consolidated Torito 2026-06: 2 rows",
        "2026-06-22T03:04:04Z update consolidated Trucha 2026-04: 2 rows",
        "2026-06-22T03:04:05Z update consolidated Trucha 2026-05: 2 rows",
        "2026-06-22T03:04:06Z update consolidated Trucha 2026-06: 2 rows",
        "2026-06-22T03:04:07Z update consolidated Trucha Arcoiris 2026-04: 3 rows",
        "2026-06-22T03:04:07Z update consolidated Trucha Arcoiris 2026-05: 3 rows",
        "2026-06-22T03:04:08Z update consolidated Trucha Arcoiris 2026-06: 3 rows",
        "2026-06-22T03:04:09Z update consolidated Trucha marina 2026-04: 5 rows",
        "2026-06-22T03:04:10Z update consolidated Trucha marina 2026-05: 5 rows",
        "2026-06-22T03:04:10Z update consolidated Trucha marina 2026-06: 5 rows",
        "2026-06-22T03:04:11Z update consolidated Vaqueta 2026-04: 1 rows",
        "2026-06-22T03:04:12Z update consolidated Vaqueta 2026-05: 1 rows",
        "2026-06-22T03:04:13Z update consolidated Vaqueta 2026-06: 1 rows",
        "2026-06-22T03:04:13Z update consolidated Verdillo 2026-04: 2 rows",
        "2026-06-22T03:04:14Z update consolidated Verdillo 2026-05: 2 rows",
        "2026-06-22T03:04:15Z update consolidated Verdillo 2026-06: 2 rows",
        "2026-06-22T03:04:15Z update complete: 61236 rows, 66651 annual rows, 251 cuaresma pages, 2982 consolidated rows, 0 recoverable errors",
        "Wrote /ssd/data_automation/sniim_prices/dashboard_data.js with 199,720 monthly rows and 6,988 market rows",
        "Loaded 318 CPI months through 2026-06",
        "Harmonized 306 raw product labels",
        "Built 1,317,622 deduplicated price records and 143,437 monthly series rows",
        "Built inflation-corrected annual and consolidated tables",
        "Built Lent covariates for 2000-2027",
        "Loaded 33 closure rows and 131 monthly closure covariates",
        "Fuel terminal price covariate skipped: resource listing failed: HTTPSConnectionPool(host='datos.gob.mx', port=443): Max retries exceeded with url: /api/3/action/package_show?id=petroliferos (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1007)')))",
        "Wrote /ssd/data_automation/sniim_prices/sniim_research.sqlite",
        "Wrote /ssd/data_automation/sniim_prices/storage_status.json",
        "2026-06-22T04:08:46+01:00 SNIIM weekly update complete"
      ],
      "metrics": [
        {
          "label": "SANDISK archive mount",
          "value": "rw at /media/vision/SANDISK"
        },
        {
          "label": "dashboard age",
          "value": "2.0 days"
        },
        {
          "label": "dashboard rows",
          "value": "5,418,342"
        },
        {
          "label": "annual rows",
          "value": "66,651"
        },
        {
          "label": "consolidated rows",
          "value": "320,600"
        },
        {
          "label": "raw DB mtime",
          "value": "2026-06-22T03:08:35.554749+00:00"
        },
        {
          "label": "research dataset age",
          "value": "2.0 days"
        },
        {
          "label": "monthly price series",
          "value": "143,437"
        },
        {
          "label": "deduped price records",
          "value": "1,317,622"
        },
        {
          "label": "closure covariates",
          "value": "33"
        },
        {
          "label": "fuel covariate rows",
          "value": "0"
        },
        {
          "label": "research DB quick_check",
          "value": "ok"
        },
        {
          "label": "SNIIM raw DB size",
          "value": "4.5 GB"
        },
        {
          "label": "SNIIM raw DB quick_check",
          "value": "ok"
        },
        {
          "label": "SNIIM research DB size",
          "value": "586.0 MB"
        },
        {
          "label": "SNIIM research DB quick_check",
          "value": "ok"
        },
        {
          "label": "SNIIM Parquet exports",
          "value": "7"
        },
        {
          "label": "SNIIM Parquet rows",
          "value": "1,848,967"
        },
        {
          "label": "SNIIM Parquet size",
          "value": "32.5 MB"
        }
      ],
      "name": "SNIIM fisheries prices",
      "project_path": "/ssd/data_automation/sniim_prices",
      "schedule": "Mondays 03:17 local time",
      "status": "WARNING",
      "warnings": [
        "Fuel-price covariates are empty; the SNIIM price dataset is still usable.",
        "SNIIM raw DB is 4.5 GB; keep live storage on SSD/ext4 and avoid FAT32 archives.",
        "Latest SNIIM scheduled log block contains 1 warning/error lines."
      ]
    },
    {
      "failures": [],
      "id": "ocean",
      "latest_data": [
        {
          "label": "ocean dashboard generated",
          "value": "2026-06-24T03:22:35+00:00"
        },
        {
          "label": "SST coverage end",
          "value": "2026-05-31"
        },
        {
          "label": "SST anomaly coverage end",
          "value": "2026-05-31"
        },
        {
          "label": "chlorophyll coverage end",
          "value": "2025-12-01"
        },
        {
          "label": "temperature storymap generated",
          "value": "2026-06-24T03:22:35+00:00"
        },
        {
          "label": "storymap coverage end",
          "value": "2026-05"
        },
        {
          "label": "marine heatwave coverage end",
          "value": "2026-05-31"
        },
        {
          "label": "Ocean storage status generated",
          "value": "2026-06-24T03:22:37+00:00"
        },
        {
          "label": "latest scheduled log line",
          "value": "2026-06-24T04:22:40+01:00 ocean update complete"
        }
      ],
      "latest_event": {
        "body": "Ocean/SST weekly update status\nGenerated: 2026-06-24T03:22:40+00:00\nProject: /ssd/data_automation/ocean_data\n\nocean_dashboard_data.js mtime: 2026-06-24T03:22:35.378433+00:00\ntemperature_storymap_data.js mtime: 2026-06-24T03:22:35.926451+00:00\ngulf_sst_mhw_metadata.json mtime: 2026-06-24T03:22:19.433923+00:00\nMHW coverage_end: 2026-05-31\nMHW events: 121\n\nStatus: WARNING\n\nWarnings:\n- one or more provider monthly ingests failed; dashboard may still have refreshed from existing data\n- tracebacks appeared in the ocean update log\n\nRecent log excerpt:\n2026-06-24T04:22:01+01:00 starting ocean update\n2026-06-24 04:22:03,280 INFO Starting monthly update for oisst\n2026-06-24 04:22:05,620 INFO No new NOAA OISST v2.1 data available up to 2026-05-01\n2026-06-24 04:22:05,620 INFO Starting monthly update for esa_oc\n2026-06-24 04:22:05,815 INFO Downloading ESA OC historical data from 2026-01 to 2026-05\n2026-06-24 04:22:08,589 ERROR Monthly update failed for esa_oc\nTraceback (most recent call last):\n  File \"/ssd/data_automation/ocean_data/run_ocean_update.py\", line 32, in main\n    pipeline.ingest_monthly_updates(dataset_keys=[dataset_key])\n  File \"/home/vision/Research/src/oceandata/pipeline.py\", line 184, in ingest_monthly_updates\n    paths = list(\n  File \"/home/vision/Research/src/oceandata/download/esa_oc.py\", line 77, in download_historical\n    yield download_month(year, month, session=session, overwrite=overwrite)\n  File \"/home/vision/Research/src/oceandata/download/esa_oc.py\", line 39, in download_month\n    return erddap.download_griddap(\n  File \"/home/vision/Research/src/oceandata/erddap.py\", line 92, in download_griddap\n    return stream_download(\n  File \"/home/vision/Research/src/oceandata/utils.py\", line 59, in stream_download\n    resp.raise_for_status()\n  File \"/home/vision/Research/.venv/lib/python3.10/site-packages/requests/models.py\", line 1026, in raise_for_status\n    raise HTTPError(http_error_msg, response=self)\nrequests.exceptions.HTTPError: 404 Client Error:  for url: https://coastwatch.pfeg.noaa.gov/erddap/griddap/pmlEsaCCI60OceanColorMonthly_Lon0360.nc?chlor_a%5B(2026-01-01T00:00:00Z):1:(2026-01-01T00:00:00Z)%5D%5B(22.0):1:(32.5)%5D%5B(244.5):1:(255.0)%5D\n2026-06-24 04:22:08,596 INFO Rebuilding marine heatwave metrics\nWrote /ssd/data_automation/ocean_data/gulf_sst_marine_heatwaves.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_daily.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_monthly.csv\n{\n  \"generated_at\": \"2026-06-24T03:22:19+00:00\",\n  \"source\": \"/ssd/data_automation/ocean_data/ocean_dashboard_data.js\",\n  \"method\": \"Python implementation of Hobday/heatwaveR-style marine heatwave definition\",\n  \"heatwaveR_available\": false,\n  \"baseline_start\": 1982,\n  \"baseline_end\": 2011,\n  \"threshold_percentile\": 90,\n  \"window_half_width_days\": 5,\n  \"min_duration_days\": 5,\n  \"max_gap_days\": 2,\n  \"events\": 121,\n  \"coverage_start\": \"1981-09-01\",\n  \"coverage_end\": \"2026-05-31\"\n}\n2026-06-24 04:22:19,572 INFO Rebuilding Gulf-only dashboard data\nWrote /ssd/data_automation/ocean_data/ocean_dashboard_data.js with 4 variables, 49354 daily rows, 1951 monthly rows\n2026-06-24 04:22:35,652 INFO Rebuilding temperature storymap data\nWrote /ssd/data_automation/ocean_data/temperature_storymap_data.js\n{\n  \"latest_month\": \"2026-05\",\n  \"latest_observed\": 24.931,\n  \"latest_anomaly\": 1.518,\n  \"latest_climatology\": 23.413,\n  \"april_rank\": 45,\n  \"april_count\": 45,\n  \"previous_april_record_month\": \"2015-04\",\n  \"previous_april_record\": 23.083,\n  \"last_el_nino_label\": \"2023-24 El Ni\\u00f1o\",\n  \"last_el_nino_peak_month\": \"2023-08\",\n  \"last_el_nino_peak_observed\": 30.285,\n  \"last_el_nino_peak_anomaly_month\": \"2024-02\",\n  \"last_el_nino_peak_anomaly\": 1.402,\n  \"strong_el_nino_label\": \"2015-16 El Ni\\u00f1o\",\n  \"strong_el_nino_peak_month\": \"2015-09\",\n  \"strong_el_nino_peak_observed\": 31.24,\n  \"all_time_peak_month\": \"2015-09\",\n  \"all_time_peak_observed\": 31.24,\n  \"all_time_peak_anomaly_month\": \"2026-04\",\n  \"all_time_peak_anomaly\": 2.896,\n  \"slope_all_per_decade\": 0.253,\n  \"slope_since_2016_per_decade\": 0.036,\n  \"median_april_to_peak_increase\": 8.863,\n  \"q25_april_to_peak_increase\": 8.786,\n  \"q75_april_to_peak_increase\": 9.231,\n  \"projected_peak\": 32.863,\n  \"projected_low\": 32.786,\n  \"projected_high\": 33.231,\n  \"projected_vs_last_el_nino\": 2.578,\n  \"projected_vs_2015_16\": 1.623\n}\n2026-06-24 04:22:35,959 INFO Ocean update finished with 1 dataset failures\nWrote /ssd/data_automation/ocean_data/storage_status.json\n2026-06-24T04:22:37+01:00 ocean storage maintenance complete\n[main 095ce71] Update Gulf temperature storymap data\n 1 file changed, 1 insertion(+), 1 deletion(-)\nTo github.com:Fabbiologia/goc-climate-change.git\n   ab0dc7a..095ce71  main -> main\nTo github.com:Fabbiologia/goc-climate-change.git\n   ab0dc7a..095ce71  main -> gh-pages\n2026-06-24T04:22:40+01:00 published GitHub Pages update\n2026-06-24T04:22:40+01:00 GitHub Pages publish complete\n2026-06-24T04:22:40+01:00 ocean update complete\n",
        "captured_at": "2026-06-24T03:22:43+00:00",
        "reason": "Ocean/SST weekly cron wrapper",
        "status": "WARNING",
        "subject": "[WARNING] Ocean/SST weekly update on vision-desktop"
      },
      "log_excerpt": [
        "2026-06-24T04:22:01+01:00 starting ocean update",
        "2026-06-24 04:22:03,280 INFO Starting monthly update for oisst",
        "2026-06-24 04:22:05,620 INFO No new NOAA OISST v2.1 data available up to 2026-05-01",
        "2026-06-24 04:22:05,620 INFO Starting monthly update for esa_oc",
        "2026-06-24 04:22:05,815 INFO Downloading ESA OC historical data from 2026-01 to 2026-05",
        "2026-06-24 04:22:08,589 ERROR Monthly update failed for esa_oc",
        "Traceback (most recent call last):",
        "  File \"/ssd/data_automation/ocean_data/run_ocean_update.py\", line 32, in main",
        "    pipeline.ingest_monthly_updates(dataset_keys=[dataset_key])",
        "  File \"/home/vision/Research/src/oceandata/pipeline.py\", line 184, in ingest_monthly_updates",
        "    paths = list(",
        "  File \"/home/vision/Research/src/oceandata/download/esa_oc.py\", line 77, in download_historical",
        "    yield download_month(year, month, session=session, overwrite=overwrite)",
        "  File \"/home/vision/Research/src/oceandata/download/esa_oc.py\", line 39, in download_month",
        "    return erddap.download_griddap(",
        "  File \"/home/vision/Research/src/oceandata/erddap.py\", line 92, in download_griddap",
        "    return stream_download(",
        "  File \"/home/vision/Research/src/oceandata/utils.py\", line 59, in stream_download",
        "    resp.raise_for_status()",
        "  File \"/home/vision/Research/.venv/lib/python3.10/site-packages/requests/models.py\", line 1026, in raise_for_status",
        "    raise HTTPError(http_error_msg, response=self)",
        "requests.exceptions.HTTPError: 404 Client Error:  for url: https://coastwatch.pfeg.noaa.gov/erddap/griddap/pmlEsaCCI60OceanColorMonthly_Lon0360.nc?chlor_a%5B(2026-01-01T00:00:00Z):1:(2026-01-01T00:00:00Z)%5D%5B(22.0):1:(32.5)%5D%5B(244.5):1:(255.0)%5D",
        "2026-06-24 04:22:08,596 INFO Rebuilding marine heatwave metrics",
        "Wrote /ssd/data_automation/ocean_data/gulf_sst_marine_heatwaves.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_daily.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_monthly.csv",
        "{",
        "  \"generated_at\": \"2026-06-24T03:22:19+00:00\",",
        "  \"source\": \"/ssd/data_automation/ocean_data/ocean_dashboard_data.js\",",
        "  \"method\": \"Python implementation of Hobday/heatwaveR-style marine heatwave definition\",",
        "  \"heatwaveR_available\": false,",
        "  \"baseline_start\": 1982,",
        "  \"baseline_end\": 2011,",
        "  \"threshold_percentile\": 90,",
        "  \"window_half_width_days\": 5,",
        "  \"min_duration_days\": 5,",
        "  \"max_gap_days\": 2,",
        "  \"events\": 121,",
        "  \"coverage_start\": \"1981-09-01\",",
        "  \"coverage_end\": \"2026-05-31\"",
        "}",
        "2026-06-24 04:22:19,572 INFO Rebuilding Gulf-only dashboard data",
        "Wrote /ssd/data_automation/ocean_data/ocean_dashboard_data.js with 4 variables, 49354 daily rows, 1951 monthly rows",
        "2026-06-24 04:22:35,652 INFO Rebuilding temperature storymap data",
        "Wrote /ssd/data_automation/ocean_data/temperature_storymap_data.js",
        "{",
        "  \"latest_month\": \"2026-05\",",
        "  \"latest_observed\": 24.931,",
        "  \"latest_anomaly\": 1.518,",
        "  \"latest_climatology\": 23.413,",
        "  \"april_rank\": 45,",
        "  \"april_count\": 45,",
        "  \"previous_april_record_month\": \"2015-04\",",
        "  \"previous_april_record\": 23.083,",
        "  \"last_el_nino_label\": \"2023-24 El Ni\\u00f1o\",",
        "  \"last_el_nino_peak_month\": \"2023-08\",",
        "  \"last_el_nino_peak_observed\": 30.285,",
        "  \"last_el_nino_peak_anomaly_month\": \"2024-02\",",
        "  \"last_el_nino_peak_anomaly\": 1.402,",
        "  \"strong_el_nino_label\": \"2015-16 El Ni\\u00f1o\",",
        "  \"strong_el_nino_peak_month\": \"2015-09\",",
        "  \"strong_el_nino_peak_observed\": 31.24,",
        "  \"all_time_peak_month\": \"2015-09\",",
        "  \"all_time_peak_observed\": 31.24,",
        "  \"all_time_peak_anomaly_month\": \"2026-04\",",
        "  \"all_time_peak_anomaly\": 2.896,",
        "  \"slope_all_per_decade\": 0.253,",
        "  \"slope_since_2016_per_decade\": 0.036,",
        "  \"median_april_to_peak_increase\": 8.863,",
        "  \"q25_april_to_peak_increase\": 8.786,",
        "  \"q75_april_to_peak_increase\": 9.231,",
        "  \"projected_peak\": 32.863,",
        "  \"projected_low\": 32.786,",
        "  \"projected_high\": 33.231,",
        "  \"projected_vs_last_el_nino\": 2.578,",
        "  \"projected_vs_2015_16\": 1.623",
        "}",
        "2026-06-24 04:22:35,959 INFO Ocean update finished with 1 dataset failures",
        "Wrote /ssd/data_automation/ocean_data/storage_status.json",
        "2026-06-24T04:22:37+01:00 ocean storage maintenance complete",
        "[main 095ce71] Update Gulf temperature storymap data",
        " 1 file changed, 1 insertion(+), 1 deletion(-)",
        "To github.com:Fabbiologia/goc-climate-change.git",
        "   ab0dc7a..095ce71  main -> main",
        "To github.com:Fabbiologia/goc-climate-change.git",
        "   ab0dc7a..095ce71  main -> gh-pages",
        "2026-06-24T04:22:40+01:00 published GitHub Pages update",
        "2026-06-24T04:22:40+01:00 GitHub Pages publish complete",
        "2026-06-24T04:22:40+01:00 ocean update complete"
      ],
      "metrics": [
        {
          "label": "SANDISK archive mount",
          "value": "rw at /media/vision/SANDISK"
        },
        {
          "label": "ocean dashboard age",
          "value": "0.0 days"
        },
        {
          "label": "source files",
          "value": "877"
        },
        {
          "label": "daily rows",
          "value": "49,354"
        },
        {
          "label": "monthly rows",
          "value": "1,951"
        },
        {
          "label": "temperature storymap age",
          "value": "0.0 days"
        },
        {
          "label": "latest month",
          "value": "2026-05"
        },
        {
          "label": "latest SST anomaly",
          "value": "1.518"
        },
        {
          "label": "all-time anomaly month",
          "value": "2026-04"
        },
        {
          "label": "marine heatwave events",
          "value": "121"
        },
        {
          "label": "marine heatwave generated",
          "value": "2026-06-24T03:22:19+00:00"
        },
        {
          "label": "ocean_dashboard_data.js mtime",
          "value": "2026-06-24T03:22:35.378433+00:00"
        },
        {
          "label": "temperature_storymap_data.js mtime",
          "value": "2026-06-24T03:22:35.926451+00:00"
        },
        {
          "label": "gulf_sst_mhw_metadata.json mtime",
          "value": "2026-06-24T03:22:19.433923+00:00"
        },
        {
          "label": "Ocean SQLite DB size",
          "value": "1.6 MB"
        },
        {
          "label": "Ocean SQLite DB quick_check",
          "value": "ok"
        },
        {
          "label": "Ocean Parquet exports",
          "value": "5"
        },
        {
          "label": "Ocean Parquet rows",
          "value": "17,881"
        },
        {
          "label": "Ocean Parquet size",
          "value": "483.5 KB"
        }
      ],
      "name": "Ocean/SST dashboard",
      "project_path": "/ssd/data_automation/ocean_data",
      "schedule": "Wednesdays 04:22 local time",
      "status": "WARNING",
      "warnings": [
        "Latest ocean scheduled log block contains 3 warning/error lines.",
        "One or more provider monthly ingests failed; published data may lag provider availability.",
        "The latest wrapper run reported WARNING."
      ]
    }
  ]
};
