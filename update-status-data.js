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
  "generated_at": "2026-06-22T03:08:50+00:00",
  "host": "vision-desktop",
  "overall_status": "WARNING",
  "page_url": "https://fabbiologia.github.io/goc-climate-change/update-status.html",
  "reason": "SNIIM weekly cron wrapper",
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
      "latest_event": {
        "body": "SNIIM weekly update status\nGenerated: 2026-06-22T03:08:46+00:00\nProject: /ssd/data_automation/sniim_prices\n\nRaw records: 5,418,342\nLatest raw record date: 2026-06-19\nLatest raw scraped_at: 2026-06-22T02:58:21Z\nDashboard generated_at: 2026-06-22T03:04:52+00:00\nDashboard records_end: 2026-06-19\nDashboard consolidated_end: 2026-06-22\nResearch DB quick_check: ok\nResearch monthly_price_series rows: 143,437\nResearch latest month: 2026-06\nFuel covariate rows: 0\nResearch summary generated_at: 2026-06-22T03:06:32+00:00\n\nStatus: WARNING\n\nWarnings:\n- fuel covariate table is empty; SNIIM data are still usable\n- 1 warning/error lines appeared in the SNIIM update log\n\nRecent log excerpt:\n2026-06-22T03:03:23Z update consolidated Robalo 2026-05: 17 rows\n2026-06-22T03:03:24Z update consolidated Robalo 2026-06: 17 rows\n2026-06-22T03:03:25Z update consolidated Robalo chico 2026-04: 5 rows\n2026-06-22T03:03:26Z update consolidated Robalo chico 2026-05: 5 rows\n2026-06-22T03:03:27Z update consolidated Robalo chico 2026-06: 4 rows\n2026-06-22T03:03:27Z update consolidated Robalo del pac\u00edfico 2026-04: 8 rows\n2026-06-22T03:03:28Z update consolidated Robalo del pac\u00edfico 2026-05: 8 rows\n2026-06-22T03:03:29Z update consolidated Robalo del pac\u00edfico 2026-06: 8 rows\n2026-06-22T03:03:30Z update consolidated Ronco amarillo 2026-04: 2 rows\n2026-06-22T03:03:30Z update consolidated Ronco amarillo 2026-05: 2 rows\n2026-06-22T03:03:31Z update consolidated Ronco amarillo 2026-06: 2 rows\n2026-06-22T03:03:32Z update consolidated Rubia o Biajaiba 2026-04: 7 rows\n2026-06-22T03:03:33Z update consolidated Rubia o Biajaiba 2026-05: 7 rows\n2026-06-22T03:03:33Z update consolidated Rubia o Biajaiba 2026-06: 7 rows\n2026-06-22T03:03:34Z update consolidated Sardina 2026-04: 2 rows\n2026-06-22T03:03:35Z update consolidated Sardina 2026-05: 2 rows\n2026-06-22T03:03:36Z update consolidated Sardina 2026-06: 2 rows\n2026-06-22T03:03:36Z update consolidated Sargo 2026-04: 6 rows\n2026-06-22T03:03:37Z update consolidated Sargo 2026-05: 6 rows\n2026-06-22T03:03:38Z update consolidated Sargo 2026-06: 6 rows\n2026-06-22T03:03:39Z update consolidated Sierra del Golfo 2026-04: 18 rows\n2026-06-22T03:03:39Z update consolidated Sierra del Golfo 2026-05: 16 rows\n2026-06-22T03:03:40Z update consolidated Sierra del Golfo 2026-06: 17 rows\n2026-06-22T03:03:41Z update consolidated Sierra del Pac\u00edfico 2026-04: 13 rows\n2026-06-22T03:03:42Z update consolidated Sierra del Pac\u00edfico 2026-05: 13 rows\n2026-06-22T03:03:43Z update consolidated Sierra del Pac\u00edfico 2026-06: 12 rows\n2026-06-22T03:03:43Z update consolidated Tenazas de cangrejo 2026-04: 7 rows\n2026-06-22T03:03:44Z update consolidated Tenazas de cangrejo 2026-05: 7 rows\n2026-06-22T03:03:45Z update consolidated Tenazas de cangrejo 2026-06: 7 rows\n2026-06-22T03:03:46Z update consolidated Tiburon c/cabeza 2026-04: 0 rows\n2026-06-22T03:03:46Z update consolidated Tiburon c/cabeza 2026-05: 0 rows\n2026-06-22T03:03:47Z update consolidated Tiburon c/cabeza 2026-06: 0 rows\n2026-06-22T03:03:48Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-04: 1 rows\n2026-06-22T03:03:49Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-05: 1 rows\n2026-06-22T03:03:50Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-06: 1 rows\n2026-06-22T03:03:50Z update consolidated Tibur\u00f3n sin cabeza 2026-04: 4 rows\n2026-06-22T03:03:51Z update consolidated Tibur\u00f3n sin cabeza 2026-05: 4 rows\n2026-06-22T03:03:52Z update consolidated Tibur\u00f3n sin cabeza 2026-06: 1 rows\n2026-06-22T03:03:53Z update consolidated Tilapia chica 2026-04: 22 rows\n2026-06-22T03:03:53Z update consolidated Tilapia chica 2026-05: 21 rows\n2026-06-22T03:03:54Z update consolidated Tilapia chica 2026-06: 21 rows\n2026-06-22T03:03:55Z update consolidated Tilapia grande 2026-04: 27 rows\n2026-06-22T03:03:56Z update consolidated Tilapia grande 2026-05: 26 rows\n2026-06-22T03:03:56Z update consolidated Tilapia grande 2026-06: 26 rows\n2026-06-22T03:03:57Z update consolidated Tilapia mediana 2026-04: 20 rows\n2026-06-22T03:03:58Z update consolidated Tilapia mediana 2026-05: 19 rows\n2026-06-22T03:03:59Z update consolidated Tilapia mediana 2026-06: 19 rows\n2026-06-22T03:04:00Z update consolidated Tolete 2026-04: 0 rows\n2026-06-22T03:04:00Z update consolidated Tolete 2026-05: 0 rows\n2026-06-22T03:04:01Z update consolidated Tolete 2026-06: 0 rows\n2026-06-22T03:04:02Z update consolidated Torito 2026-04: 2 rows\n2026-06-22T03:04:03Z update consolidated Torito 2026-05: 2 rows\n2026-06-22T03:04:04Z update consolidated Torito 2026-06: 2 rows\n2026-06-22T03:04:04Z update consolidated Trucha 2026-04: 2 rows\n2026-06-22T03:04:05Z update consolidated Trucha 2026-05: 2 rows\n2026-06-22T03:04:06Z update consolidated Trucha 2026-06: 2 rows\n2026-06-22T03:04:07Z update consolidated Trucha Arcoiris 2026-04: 3 rows\n2026-06-22T03:04:07Z update consolidated Trucha Arcoiris 2026-05: 3 rows\n2026-06-22T03:04:08Z update consolidated Trucha Arcoiris 2026-06: 3 rows\n2026-06-22T03:04:09Z update consolidated Trucha marina 2026-04: 5 rows\n2026-06-22T03:04:10Z update consolidated Trucha marina 2026-05: 5 rows\n2026-06-22T03:04:10Z update consolidated Trucha marina 2026-06: 5 rows\n2026-06-22T03:04:11Z update consolidated Vaqueta 2026-04: 1 rows\n2026-06-22T03:04:12Z update consolidated Vaqueta 2026-05: 1 rows\n2026-06-22T03:04:13Z update consolidated Vaqueta 2026-06: 1 rows\n2026-06-22T03:04:13Z update consolidated Verdillo 2026-04: 2 rows\n2026-06-22T03:04:14Z update consolidated Verdillo 2026-05: 2 rows\n2026-06-22T03:04:15Z update consolidated Verdillo 2026-06: 2 rows\n2026-06-22T03:04:15Z update complete: 61236 rows, 66651 annual rows, 251 cuaresma pages, 2982 consolidated rows, 0 recoverable errors\nWrote /ssd/data_automation/sniim_prices/dashboard_data.js with 199,720 monthly rows and 6,988 market rows\nLoaded 318 CPI months through 2026-06\nHarmonized 306 raw product labels\nBuilt 1,317,622 deduplicated price records and 143,437 monthly series rows\nBuilt inflation-corrected annual and consolidated tables\nBuilt Lent covariates for 2000-2027\nLoaded 33 closure rows and 131 monthly closure covariates\nFuel terminal price covariate skipped: resource listing failed: HTTPSConnectionPool(host='datos.gob.mx', port=443): Max retries exceeded with url: /api/3/action/package_show?id=petroliferos (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1007)')))\nWrote /ssd/data_automation/sniim_prices/sniim_research.sqlite\nWrote /ssd/data_automation/sniim_prices/storage_status.json\n2026-06-22T04:08:46+01:00 SNIIM weekly update complete\n",
        "captured_at": "2026-06-22T03:08:51+00:00",
        "reason": "SNIIM weekly cron wrapper",
        "status": "WARNING",
        "subject": "[WARNING] SNIIM weekly update on vision-desktop"
      },
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
          "value": "unknown at /media/vision/SANDISK"
        },
        {
          "label": "SANDISK archive state",
          "value": "inactive / not mounted"
        },
        {
          "label": "dashboard age",
          "value": "0.0 days"
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
          "value": "0.0 days"
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
        "Latest SNIIM scheduled log block contains 1 warning/error lines.",
        "The latest wrapper run reported WARNING."
      ]
    },
    {
      "failures": [],
      "id": "ocean",
      "latest_data": [
        {
          "label": "ocean dashboard generated",
          "value": "2026-06-17T03:23:01+00:00"
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
          "label": "temperature storymap generated",
          "value": "2026-06-10T03:22:47+00:00"
        },
        {
          "label": "storymap coverage end",
          "value": "2026-04"
        },
        {
          "label": "marine heatwave coverage end",
          "value": "2026-04-30"
        },
        {
          "label": "Ocean storage status generated",
          "value": "2026-06-16T14:42:55+00:00"
        },
        {
          "label": "latest scheduled log line",
          "value": "subprocess.CalledProcessError: Command '['/home/vision/Research/.venv/bin/python', '/ssd/data_automation/ocean_data/build_temperature_storymap_data.py']' returned non-zero exit status 1."
        }
      ],
      "latest_event": null,
      "log_excerpt": [
        "2026-06-17T04:22:02+01:00 starting ocean update",
        "2026-06-17 04:22:06,423 INFO Starting monthly update for oisst",
        "2026-06-17 04:22:08,814 INFO Downloading OISST historical data from 2026-05 to 2026-05",
        "2026-06-17 04:22:40,723 INFO Downloaded /ssd/data_automation/ocean_data/raw/oisst/oisst_2026_05.nc",
        "2026-06-17 04:22:40,768 INFO Ingested 1 new NOAA OISST v2.1 products up to 2026-05",
        "2026-06-17 04:22:40,768 INFO Starting monthly update for esa_oc",
        "2026-06-17 04:22:40,982 INFO Downloading ESA OC historical data from 2026-01 to 2026-05",
        "2026-06-17 04:22:43,596 ERROR Monthly update failed for esa_oc",
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
        "2026-06-17 04:22:43,603 INFO Rebuilding marine heatwave metrics",
        "Wrote /ssd/data_automation/ocean_data/gulf_sst_marine_heatwaves.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_daily.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_monthly.csv",
        "{",
        "  \"generated_at\": \"2026-06-17T03:22:54+00:00\",",
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
        "  \"coverage_end\": \"2026-04-30\"",
        "}",
        "2026-06-17 04:22:54,555 INFO Rebuilding Gulf-only dashboard data",
        "Wrote /ssd/data_automation/ocean_data/ocean_dashboard_data.js with 3 variables, 93 daily rows, 3 monthly rows",
        "Completed with 876 file errors; first error: missing file: /media/vision/SANDISK/ocean_data/raw/esa_oc/esa_oc_1997_09.nc",
        "2026-06-17 04:23:01,716 INFO Rebuilding temperature storymap data",
        "Traceback (most recent call last):",
        "  File \"/ssd/data_automation/ocean_data/build_temperature_storymap_data.py\", line 321, in <module>",
        "    main()",
        "  File \"/ssd/data_automation/ocean_data/build_temperature_storymap_data.py\", line 162, in main",
        "    latest_april = next(row for row in aprils if months[row[1]] == f\"{latest_year}-04\")",
        "StopIteration",
        "Traceback (most recent call last):",
        "  File \"/ssd/data_automation/ocean_data/run_ocean_update.py\", line 60, in <module>",
        "    raise SystemExit(main())",
        "  File \"/ssd/data_automation/ocean_data/run_ocean_update.py\", line 50, in main",
        "    subprocess.run(",
        "  File \"/usr/lib/python3.10/subprocess.py\", line 526, in run",
        "    raise CalledProcessError(retcode, process.args,",
        "subprocess.CalledProcessError: Command '['/home/vision/Research/.venv/bin/python', '/ssd/data_automation/ocean_data/build_temperature_storymap_data.py']' returned non-zero exit status 1."
      ],
      "metrics": [
        {
          "label": "SANDISK archive mount",
          "value": "unknown at /media/vision/SANDISK"
        },
        {
          "label": "SANDISK archive state",
          "value": "inactive / not mounted"
        },
        {
          "label": "ocean dashboard age",
          "value": "5.0 days"
        },
        {
          "label": "source files",
          "value": "877"
        },
        {
          "label": "daily rows",
          "value": "93"
        },
        {
          "label": "monthly rows",
          "value": "3"
        },
        {
          "label": "temperature storymap age",
          "value": "12.0 days"
        },
        {
          "label": "latest month",
          "value": "2026-04"
        },
        {
          "label": "latest SST anomaly",
          "value": "2.896"
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
          "value": "2026-06-17T03:22:54+00:00"
        },
        {
          "label": "ocean_dashboard_data.js mtime",
          "value": "2026-06-17T03:23:01.345384+00:00"
        },
        {
          "label": "temperature_storymap_data.js mtime",
          "value": "2026-06-10T03:22:48+00:00"
        },
        {
          "label": "gulf_sst_mhw_metadata.json mtime",
          "value": "2026-06-17T03:22:54.417161+00:00"
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
          "value": "17,848"
        },
        {
          "label": "Ocean Parquet size",
          "value": "482.3 KB"
        }
      ],
      "name": "Ocean/SST dashboard",
      "project_path": "/ssd/data_automation/ocean_data",
      "schedule": "Wednesdays 04:22 local time",
      "status": "WARNING",
      "warnings": [
        "temperature storymap is 12.0 days old; expected weekly automation has not refreshed it recently.",
        "Latest ocean scheduled log block contains 6 warning/error lines.",
        "One or more provider monthly ingests failed; published data may lag provider availability.",
        "Latest ocean log block does not show GitHub Pages publish completion."
      ]
    }
  ]
};
