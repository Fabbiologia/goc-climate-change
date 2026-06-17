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
  "generated_at": "2026-06-17T03:23:02+00:00",
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
          "value": "2026-06-08T03:26:03+00:00"
        },
        {
          "label": "raw records end",
          "value": "2026-06-05"
        },
        {
          "label": "consolidated records end",
          "value": "2026-06-08"
        },
        {
          "label": "research dataset generated",
          "value": "2026-06-16T11:37:08+00:00"
        },
        {
          "label": "research latest month",
          "value": "2026-06"
        },
        {
          "label": "SNIIM storage status generated",
          "value": "2026-06-16T14:43:46+00:00"
        },
        {
          "label": "latest scheduled log line",
          "value": "2026-06-08T04:28:48+01:00 SNIIM weekly update complete"
        }
      ],
      "latest_event": null,
      "log_excerpt": [
        "2026-06-08T03:23:39Z update consolidated Tenazas de cangrejo 2026-03: 7 rows",
        "2026-06-08T03:23:40Z update consolidated Tenazas de cangrejo 2026-04: 7 rows",
        "2026-06-08T03:23:40Z update consolidated Tenazas de cangrejo 2026-05: 7 rows",
        "2026-06-08T03:23:41Z update consolidated Tenazas de cangrejo 2026-06: 7 rows",
        "2026-06-08T03:23:42Z update consolidated Tiburon c/cabeza 2026-03: 0 rows",
        "2026-06-08T03:23:43Z update consolidated Tiburon c/cabeza 2026-04: 0 rows",
        "2026-06-08T03:23:44Z update consolidated Tiburon c/cabeza 2026-05: 0 rows",
        "2026-06-08T03:23:46Z update consolidated Tiburon c/cabeza 2026-06: 0 rows",
        "2026-06-08T03:23:47Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-03: 1 rows",
        "2026-06-08T03:23:48Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-04: 1 rows",
        "2026-06-08T03:23:49Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-05: 1 rows",
        "2026-06-08T03:23:50Z update consolidated Tibur\u00f3n Majarro sin cabeza 2026-06: 1 rows",
        "2026-06-08T03:23:51Z update consolidated Tibur\u00f3n sin cabeza 2026-03: 4 rows",
        "2026-06-08T03:23:52Z update consolidated Tibur\u00f3n sin cabeza 2026-04: 4 rows",
        "2026-06-08T03:23:52Z update consolidated Tibur\u00f3n sin cabeza 2026-05: 4 rows",
        "2026-06-08T03:23:53Z update consolidated Tibur\u00f3n sin cabeza 2026-06: 1 rows",
        "2026-06-08T03:23:55Z update consolidated Tilapia chica 2026-03: 22 rows",
        "2026-06-08T03:23:56Z update consolidated Tilapia chica 2026-04: 22 rows",
        "2026-06-08T03:23:57Z update consolidated Tilapia chica 2026-05: 21 rows",
        "2026-06-08T03:23:58Z update consolidated Tilapia chica 2026-06: 21 rows",
        "2026-06-08T03:23:59Z update consolidated Tilapia grande 2026-03: 27 rows",
        "2026-06-08T03:24:00Z update consolidated Tilapia grande 2026-04: 27 rows",
        "2026-06-08T03:24:01Z update consolidated Tilapia grande 2026-05: 26 rows",
        "2026-06-08T03:24:02Z update consolidated Tilapia grande 2026-06: 26 rows",
        "2026-06-08T03:24:03Z update consolidated Tilapia mediana 2026-03: 20 rows",
        "2026-06-08T03:24:04Z update consolidated Tilapia mediana 2026-04: 20 rows",
        "2026-06-08T03:24:05Z update consolidated Tilapia mediana 2026-05: 19 rows",
        "2026-06-08T03:24:06Z update consolidated Tilapia mediana 2026-06: 19 rows",
        "2026-06-08T03:24:07Z update consolidated Tolete 2026-03: 0 rows",
        "2026-06-08T03:24:08Z update consolidated Tolete 2026-04: 0 rows",
        "2026-06-08T03:24:09Z update consolidated Tolete 2026-05: 0 rows",
        "2026-06-08T03:24:10Z update consolidated Tolete 2026-06: 0 rows",
        "2026-06-08T03:24:11Z update consolidated Torito 2026-03: 2 rows",
        "2026-06-08T03:24:12Z update consolidated Torito 2026-04: 2 rows",
        "2026-06-08T03:24:13Z update consolidated Torito 2026-05: 2 rows",
        "2026-06-08T03:24:14Z update consolidated Torito 2026-06: 2 rows",
        "2026-06-08T03:24:15Z update consolidated Trucha 2026-03: 2 rows",
        "2026-06-08T03:24:16Z update consolidated Trucha 2026-04: 2 rows",
        "2026-06-08T03:24:17Z update consolidated Trucha 2026-05: 2 rows",
        "2026-06-08T03:24:18Z update consolidated Trucha 2026-06: 2 rows",
        "2026-06-08T03:24:19Z update consolidated Trucha Arcoiris 2026-03: 3 rows",
        "2026-06-08T03:24:20Z update consolidated Trucha Arcoiris 2026-04: 3 rows",
        "2026-06-08T03:24:21Z update consolidated Trucha Arcoiris 2026-05: 3 rows",
        "2026-06-08T03:24:22Z update consolidated Trucha Arcoiris 2026-06: 3 rows",
        "2026-06-08T03:24:23Z update consolidated Trucha marina 2026-03: 5 rows",
        "2026-06-08T03:24:24Z update consolidated Trucha marina 2026-04: 5 rows",
        "2026-06-08T03:24:25Z update consolidated Trucha marina 2026-05: 5 rows",
        "2026-06-08T03:24:26Z update consolidated Trucha marina 2026-06: 5 rows",
        "2026-06-08T03:24:27Z update consolidated Vaqueta 2026-03: 1 rows",
        "2026-06-08T03:24:28Z update consolidated Vaqueta 2026-04: 1 rows",
        "2026-06-08T03:24:29Z update consolidated Vaqueta 2026-05: 1 rows",
        "2026-06-08T03:24:30Z update consolidated Vaqueta 2026-06: 1 rows",
        "2026-06-08T03:24:31Z update consolidated Verdillo 2026-03: 2 rows",
        "2026-06-08T03:24:32Z update consolidated Verdillo 2026-04: 2 rows",
        "2026-06-08T03:24:33Z update consolidated Verdillo 2026-05: 2 rows",
        "2026-06-08T03:24:34Z update consolidated Verdillo 2026-06: 2 rows",
        "2026-06-08T03:24:34Z update complete: 74248 rows, 66651 annual rows, 251 cuaresma pages, 3986 consolidated rows, 0 recoverable errors",
        "Wrote /media/vision/SANDISK/SNIIM prices/dashboard_data.js with 199,702 monthly rows and 6,913 market rows",
        "Loaded 318 CPI months through 2026-06",
        "Harmonized 306 raw product labels",
        "Built 1,314,507 deduplicated price records and 143,363 monthly series rows",
        "Built inflation-corrected annual and consolidated tables",
        "Built Lent covariates for 2000-2027",
        "Loaded 33 closure rows and 131 monthly closure covariates",
        "Traceback (most recent call last):",
        "  File \"/usr/lib/python3/dist-packages/urllib3/connectionpool.py\", line 700, in urlopen",
        "    httplib_response = self._make_request(",
        "  File \"/usr/lib/python3/dist-packages/urllib3/connectionpool.py\", line 383, in _make_request",
        "    self._validate_conn(conn)",
        "  File \"/usr/lib/python3/dist-packages/urllib3/connectionpool.py\", line 1029, in _validate_conn",
        "    conn.connect()",
        "  File \"/usr/lib/python3/dist-packages/urllib3/connection.py\", line 411, in connect",
        "    self.sock = ssl_wrap_socket(",
        "  File \"/usr/lib/python3/dist-packages/urllib3/util/ssl_.py\", line 449, in ssl_wrap_socket",
        "    ssl_sock = _ssl_wrap_socket_impl(",
        "  File \"/usr/lib/python3/dist-packages/urllib3/util/ssl_.py\", line 493, in _ssl_wrap_socket_impl",
        "    return ssl_context.wrap_socket(sock, server_hostname=server_hostname)",
        "  File \"/usr/lib/python3.10/ssl.py\", line 513, in wrap_socket",
        "    return self.sslsocket_class._create(",
        "  File \"/usr/lib/python3.10/ssl.py\", line 1100, in _create",
        "    self.do_handshake()",
        "  File \"/usr/lib/python3.10/ssl.py\", line 1371, in do_handshake",
        "    self._sslobj.do_handshake()",
        "ssl.SSLCertVerificationError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1007)",
        "",
        "During handling of the above exception, another exception occurred:",
        "",
        "Traceback (most recent call last):",
        "  File \"/home/vision/.local/lib/python3.10/site-packages/requests/adapters.py\", line 644, in send",
        "    resp = conn.urlopen(",
        "  File \"/usr/lib/python3/dist-packages/urllib3/connectionpool.py\", line 756, in urlopen",
        "    retries = retries.increment(",
        "  File \"/usr/lib/python3/dist-packages/urllib3/util/retry.py\", line 576, in increment",
        "    raise MaxRetryError(_pool, url, error or ResponseError(cause))",
        "urllib3.exceptions.MaxRetryError: HTTPSConnectionPool(host='datos.gob.mx', port=443): Max retries exceeded with url: /api/3/action/package_show?id=petroliferos (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1007)')))",
        "",
        "During handling of the above exception, another exception occurred:",
        "",
        "Traceback (most recent call last):",
        "  File \"/media/vision/SANDISK/SNIIM prices/build_research_dataset.py\", line 843, in <module>",
        "    main()",
        "  File \"/media/vision/SANDISK/SNIIM prices/build_research_dataset.py\", line 836, in main",
        "    write_fuel_prices(conn, max_resources=args.fuel_max_resources)",
        "  File \"/media/vision/SANDISK/SNIIM prices/build_research_dataset.py\", line 643, in write_fuel_prices",
        "    resources = fetch_petroliferos_resources()",
        "  File \"/media/vision/SANDISK/SNIIM prices/build_research_dataset.py\", line 596, in fetch_petroliferos_resources",
        "    response = requests.get(PETROLIFEROS_PACKAGE, timeout=60)",
        "  File \"/home/vision/.local/lib/python3.10/site-packages/requests/api.py\", line 73, in get",
        "    return request(\"get\", url, params=params, **kwargs)",
        "  File \"/home/vision/.local/lib/python3.10/site-packages/requests/api.py\", line 59, in request",
        "    return session.request(method=method, url=url, **kwargs)",
        "  File \"/home/vision/.local/lib/python3.10/site-packages/requests/sessions.py\", line 589, in request",
        "    resp = self.send(prep, **send_kwargs)",
        "  File \"/home/vision/.local/lib/python3.10/site-packages/requests/sessions.py\", line 703, in send",
        "    r = adapter.send(request, **kwargs)",
        "  File \"/home/vision/.local/lib/python3.10/site-packages/requests/adapters.py\", line 675, in send",
        "    raise SSLError(e, request=request)",
        "requests.exceptions.SSLError: HTTPSConnectionPool(host='datos.gob.mx', port=443): Max retries exceeded with url: /api/3/action/package_show?id=petroliferos (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1007)')))",
        "2026-06-08T04:28:48+01:00 WARNING build_research_dataset.py failed",
        "2026-06-08T04:28:48+01:00 SNIIM weekly update complete"
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
          "value": "9.0 days"
        },
        {
          "label": "dashboard rows",
          "value": "5,405,586"
        },
        {
          "label": "annual rows",
          "value": "66,651"
        },
        {
          "label": "consolidated rows",
          "value": "319,633"
        },
        {
          "label": "raw DB mtime",
          "value": "2026-06-16T14:46:23.587718+00:00"
        },
        {
          "label": "research dataset age",
          "value": "0.7 days"
        },
        {
          "label": "monthly price series",
          "value": "143,363"
        },
        {
          "label": "deduped price records",
          "value": "1,314,507"
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
          "value": "4.4 GB"
        },
        {
          "label": "SNIIM raw DB quick_check",
          "value": "ok"
        },
        {
          "label": "SNIIM research DB size",
          "value": "584.6 MB"
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
          "value": "1,844,811"
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
        "dashboard is 9.0 days old; expected weekly automation has not refreshed it recently.",
        "Fuel-price covariates are empty; the SNIIM price dataset is still usable.",
        "SNIIM raw DB is 4.4 GB; keep live storage on SSD/ext4 and avoid FAT32 archives.",
        "Latest SNIIM scheduled log block contains 10 warning/error lines."
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
      "latest_event": {
        "body": "Ocean/SST weekly update status\nGenerated: 2026-06-17T03:23:02+00:00\nProject: /ssd/data_automation/ocean_data\n\nocean_dashboard_data.js mtime: 2026-06-17T03:23:01.345384+00:00\ntemperature_storymap_data.js mtime: 2026-06-10T03:22:48+00:00\ngulf_sst_mhw_metadata.json mtime: 2026-06-17T03:22:54.417161+00:00\nMHW coverage_end: 2026-04-30\nMHW events: 121\n\nStatus: WARNING\n\nWarnings:\n- temperature_storymap_data.js was not regenerated during this run\n- GitHub Pages publish completion was not seen in the new log block\n- one or more provider monthly ingests failed; dashboard may still have refreshed from existing data\n- tracebacks appeared in the ocean update log\n- ocean update completion line was not seen in the new log block\n\nRecent log excerpt:\n2026-06-17T04:22:02+01:00 starting ocean update\n2026-06-17 04:22:06,423 INFO Starting monthly update for oisst\n2026-06-17 04:22:08,814 INFO Downloading OISST historical data from 2026-05 to 2026-05\n2026-06-17 04:22:40,723 INFO Downloaded /ssd/data_automation/ocean_data/raw/oisst/oisst_2026_05.nc\n2026-06-17 04:22:40,768 INFO Ingested 1 new NOAA OISST v2.1 products up to 2026-05\n2026-06-17 04:22:40,768 INFO Starting monthly update for esa_oc\n2026-06-17 04:22:40,982 INFO Downloading ESA OC historical data from 2026-01 to 2026-05\n2026-06-17 04:22:43,596 ERROR Monthly update failed for esa_oc\nTraceback (most recent call last):\n  File \"/ssd/data_automation/ocean_data/run_ocean_update.py\", line 32, in main\n    pipeline.ingest_monthly_updates(dataset_keys=[dataset_key])\n  File \"/home/vision/Research/src/oceandata/pipeline.py\", line 184, in ingest_monthly_updates\n    paths = list(\n  File \"/home/vision/Research/src/oceandata/download/esa_oc.py\", line 77, in download_historical\n    yield download_month(year, month, session=session, overwrite=overwrite)\n  File \"/home/vision/Research/src/oceandata/download/esa_oc.py\", line 39, in download_month\n    return erddap.download_griddap(\n  File \"/home/vision/Research/src/oceandata/erddap.py\", line 92, in download_griddap\n    return stream_download(\n  File \"/home/vision/Research/src/oceandata/utils.py\", line 59, in stream_download\n    resp.raise_for_status()\n  File \"/home/vision/Research/.venv/lib/python3.10/site-packages/requests/models.py\", line 1026, in raise_for_status\n    raise HTTPError(http_error_msg, response=self)\nrequests.exceptions.HTTPError: 404 Client Error:  for url: https://coastwatch.pfeg.noaa.gov/erddap/griddap/pmlEsaCCI60OceanColorMonthly_Lon0360.nc?chlor_a%5B(2026-01-01T00:00:00Z):1:(2026-01-01T00:00:00Z)%5D%5B(22.0):1:(32.5)%5D%5B(244.5):1:(255.0)%5D\n2026-06-17 04:22:43,603 INFO Rebuilding marine heatwave metrics\nWrote /ssd/data_automation/ocean_data/gulf_sst_marine_heatwaves.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_daily.csv, /ssd/data_automation/ocean_data/gulf_sst_mhw_monthly.csv\n{\n  \"generated_at\": \"2026-06-17T03:22:54+00:00\",\n  \"source\": \"/ssd/data_automation/ocean_data/ocean_dashboard_data.js\",\n  \"method\": \"Python implementation of Hobday/heatwaveR-style marine heatwave definition\",\n  \"heatwaveR_available\": false,\n  \"baseline_start\": 1982,\n  \"baseline_end\": 2011,\n  \"threshold_percentile\": 90,\n  \"window_half_width_days\": 5,\n  \"min_duration_days\": 5,\n  \"max_gap_days\": 2,\n  \"events\": 121,\n  \"coverage_start\": \"1981-09-01\",\n  \"coverage_end\": \"2026-04-30\"\n}\n2026-06-17 04:22:54,555 INFO Rebuilding Gulf-only dashboard data\nWrote /ssd/data_automation/ocean_data/ocean_dashboard_data.js with 3 variables, 93 daily rows, 3 monthly rows\nCompleted with 876 file errors; first error: missing file: /media/vision/SANDISK/ocean_data/raw/esa_oc/esa_oc_1997_09.nc\n2026-06-17 04:23:01,716 INFO Rebuilding temperature storymap data\nTraceback (most recent call last):\n  File \"/ssd/data_automation/ocean_data/build_temperature_storymap_data.py\", line 321, in <module>\n    main()\n  File \"/ssd/data_automation/ocean_data/build_temperature_storymap_data.py\", line 162, in main\n    latest_april = next(row for row in aprils if months[row[1]] == f\"{latest_year}-04\")\nStopIteration\nTraceback (most recent call last):\n  File \"/ssd/data_automation/ocean_data/run_ocean_update.py\", line 60, in <module>\n    raise SystemExit(main())\n  File \"/ssd/data_automation/ocean_data/run_ocean_update.py\", line 50, in main\n    subprocess.run(\n  File \"/usr/lib/python3.10/subprocess.py\", line 526, in run\n    raise CalledProcessError(retcode, process.args,\nsubprocess.CalledProcessError: Command '['/home/vision/Research/.venv/bin/python', '/ssd/data_automation/ocean_data/build_temperature_storymap_data.py']' returned non-zero exit status 1.\n",
        "captured_at": "2026-06-17T03:23:03+00:00",
        "reason": "Ocean/SST weekly cron wrapper",
        "status": "WARNING",
        "subject": "[WARNING] Ocean/SST weekly update on vision-desktop"
      },
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
          "value": "0.0 days"
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
          "value": "7.0 days"
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
        "Latest ocean scheduled log block contains 6 warning/error lines.",
        "One or more provider monthly ingests failed; published data may lag provider availability.",
        "Latest ocean log block does not show GitHub Pages publish completion.",
        "The latest wrapper run reported WARNING."
      ]
    }
  ]
};
