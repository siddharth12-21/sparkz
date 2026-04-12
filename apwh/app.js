// ============================================================
//  AP World History: Modern — Main Application
//  Living History: unified global timeline, SPICE-T layers,
//  opacity decay, snap points, context card, comparison mode
// ============================================================

(function () {
  "use strict";

  // ─── State ────────────────────────────────────────────────
  let map;
  let currentUnit = null;
  let currentView = "map";
  let cardIndex = 0;
  let layerGroups = {};

  // World GeoJSON
  let worldGeoJSON = null;
  let geoJSONReady = false;
  let pendingUnitId = null;

  // Global timeline state
  let MASTER_FRAMES = [];       // all frames from all units, sorted by year
  let globalYear = 1200;
  let globalPlaying = false;
  let globalTimer = null;
  let globalSpeed = 1;
  let currentGlobalFrame = null;

  // Simulation layers
  let simLayers = [];

  // Trade route animation state
  let tradeAnimDots = [];
  let tradeAnimId = null;

  // Comparison mode state
  let compareMode = false;
  let lockedFrame = null;
  let mapCompare = null;
  let compareLayers = [];

  // ─── Snap points (College Board periodization dates) ──────
  const SNAP_DATES = [1200, 1450, 1750, 1900, 1914, 1945, 1991, 2020];
  const SNAP_RADIUS = 10; // years

  // ─── DOM refs ─────────────────────────────────────────────
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const sidebar        = $("#sidebar");
  const unitListEl     = $("#unitList");
  const btnMenu        = $("#btnMenu");
  const btnTheme       = $("#btnToggleTheme");
  const btnGetStarted  = $("#btnGetStarted");
  const welcomeOverlay = $("#welcomeOverlay");
  const unitTitleEl    = $("#currentUnitTitle");
  const periodBadge    = $("#currentPeriod");
  const legendItems    = $("#legendItems");
  const mapInfoPanel   = $("#mapInfo");
  const mapInfoTitle   = $("#mapInfoTitle");
  const mapInfoDesc    = $("#mapInfoDesc");
  const mapInfoDetails = $("#mapInfoDetails");
  const closeMapInfo   = $("#closeMapInfo");
  const timelineTrack  = $("#timelineTrack");
  const eraBar         = $("#eraBar");
  const studyTitle     = $("#studyTitle");
  const studyProgress  = $("#studyProgress");
  const progressFill   = $("#progressFill");
  const flashcard      = $("#flashcard");
  const flashcardFront = $("#flashcardFront");
  const flashcardBack  = $("#flashcardBack");
  const prevCardBtn    = $("#prevCard");
  const nextCardBtn    = $("#nextCard");
  const viewBtns       = $$(".view-btn");

  // Global bar DOM refs (set after DOMContentLoaded)
  let globalBar, globalPlayBtn, globalSlider, globalYearDisplay;
  let globalEventLabel, globalSpeedBtn, compareBtn;
  let ctxYear, ctxDominant, ctxTrade, ctxConflict;

  // ─── Color palette ────────────────────────────────────────
  const EMPIRE_COLORS = [
    "#6c63ff","#e74c6f","#f0b429","#34d399","#3b82f6",
    "#f59e0b","#22d3ee","#a855f7","#ec4899","#8b5cf6"
  ];

  // ─── ISO numeric -> alpha-3 lookup ────────────────────────
  const NUM_TO_A3 = {
    4:"AFG",8:"ALB",12:"DZA",24:"AGO",31:"AZE",32:"ARG",36:"AUS",40:"AUT",
    50:"BGD",51:"ARM",56:"BEL",64:"BTN",68:"BOL",70:"BIH",72:"BWA",76:"BRA",
    96:"BRN",100:"BGR",104:"MMR",108:"BDI",116:"KHM",120:"CMR",124:"CAN",
    132:"CPV",140:"CAF",144:"LKA",148:"TCD",152:"CHL",156:"CHN",170:"COL",
    174:"COM",178:"COG",180:"COD",188:"CRI",191:"HRV",192:"CUB",196:"CYP",
    203:"CZE",208:"DNK",214:"DOM",218:"ECU",231:"ETH",232:"ERI",233:"EST",
    246:"FIN",250:"FRA",262:"DJI",266:"GAB",268:"GEO",270:"GMB",276:"DEU",
    288:"GHA",300:"GRC",320:"GTM",324:"GIN",328:"GUY",332:"HTI",340:"HND",
    348:"HUN",352:"ISL",356:"IND",360:"IDN",364:"IRN",368:"IRQ",372:"IRL",
    376:"ISR",380:"ITA",384:"CIV",388:"JAM",392:"JPN",398:"KAZ",400:"JOR",
    404:"KEN",408:"PRK",410:"KOR",414:"KWT",417:"KGZ",418:"LAO",422:"LBN",
    426:"LSO",428:"LVA",430:"LBR",434:"LBY",440:"LTU",442:"LUX",450:"MDG",
    454:"MWI",458:"MYS",466:"MLI",470:"MLT",478:"MRT",484:"MEX",496:"MNG",
    498:"MDA",499:"MNE",504:"MAR",508:"MOZ",516:"NAM",524:"NPL",528:"NLD",
    562:"NER",566:"NGA",578:"NOR",586:"PAK",598:"PNG",604:"PER",608:"PHL",
    616:"POL",620:"PRT",624:"GNB",626:"TLS",634:"QAT",642:"ROU",643:"RUS",
    646:"RWA",682:"SAU",686:"SEN",688:"SRB",694:"SLE",702:"SGP",703:"SVK",
    704:"VNM",705:"SVN",706:"SOM",710:"ZAF",716:"ZWE",724:"ESP",728:"SSD",
    729:"SDN",740:"SUR",748:"SWZ",752:"SWE",756:"CHE",760:"SYR",762:"TJK",
    764:"THA",768:"TGO",780:"TTO",784:"ARE",788:"TUN",792:"TUR",795:"TKM",
    800:"UGA",804:"UKR",826:"GBR",840:"USA",854:"BFA",858:"URY",860:"UZB",
    862:"VEN",887:"YEM",894:"ZMB",275:"PSE",158:"TWN",807:"MKD",
    226:"GNQ",678:"STP",882:"WSM",776:"TON",554:"NZL",548:"VUT",
    242:"FJI",90:"SLB"
  };

  // ─── English labels ───────────────────────────────────────
  function attachEnglishNames(fc, nameMap) {
    fc.features.forEach(f => {
      const p = f.properties;
      const a3 = (p.iso_a3 || p.ISO_A3 || "").toUpperCase();
      if (a3 && nameMap[a3]) p.name_en = nameMap[a3];
      else if (p.ADMIN) p.name_en = p.ADMIN;
      else if (p.name) p.name_en = String(p.name);
      else p.name_en = a3 || "Region";
    });
  }

  function finishWorldGeoJSON(fc) {
    fc.features = fc.features.filter(f => {
      const p = f.properties;
      const iso = (p.iso_a3 || p.ISO_A3 || p.ADM0_A3 || "").toUpperCase();
      return iso !== "ATA" && +f.id !== 10;
    });
    fixAntimeridian(fc);
    worldGeoJSON = fc;
    geoJSONReady = true;
    if (pendingUnitId !== null) {
      const uid = pendingUnitId;
      pendingUnitId = null;
      const unit = UNITS.find(u => u.id === uid);
      renderMapLayers(unit);
      if (unit && unit.simulation && unit.simulation.frames.length > 0) {
        seekGlobalYear(unit.simulation.frames[0].year);
      }
    }
  }

  // ─── Load world GeoJSON ───────────────────────────────────
  function loadWorldGeoJSON() {
    const namesPromise = fetch("https://restcountries.com/v3.1/all?fields=name,cca3")
      .then(r => r.json())
      .then(arr => { const m = {}; arr.forEach(c => { m[c.cca3] = c.name.common; }); return m; })
      .catch(() => ({}));

    namesPromise.then(nameMap => {
      fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(topo => {
          if (typeof topojson === "undefined") throw new Error("no topojson");
          const fc = topojson.feature(topo, topo.objects.countries);
          fc.features.forEach(f => {
            const a3 = NUM_TO_A3[+f.id] || null;
            f.properties = { iso_a3: a3, iso_n3: String(f.id) };
          });
          attachEnglishNames(fc, nameMap);
          finishWorldGeoJSON(fc);
        })
        .catch(err => {
          console.error("world-atlas failed, trying geo-countries:", err);
          fetch("https://cdn.jsdelivr.net/gh/datasets/geo-countries/data/countries.geojson")
            .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
            .then(data => {
              data.features.forEach(f => {
                const p = f.properties;
                if (!p.iso_a3) p.iso_a3 = p.ISO_A3 || p.ADM0_A3 || null;
              });
              attachEnglishNames(data, nameMap);
              finishWorldGeoJSON(data);
            })
            .catch(e => {
              console.error("All world map sources failed:", e);
              geoJSONReady = true;
              if (pendingUnitId !== null) {
                const uid = pendingUnitId; pendingUnitId = null;
                renderMapLayers(UNITS.find(u => u.id === uid));
              }
            });
        });
    });
  }

  // ─── Fix antimeridian ─────────────────────────────────────
  function fixAntimeridian(geojson) {
    function fixLon(lon) {
      while (lon > 180)  lon -= 360;
      while (lon < -180) lon += 360;
      return lon;
    }
    function fixRing(ring) {
      const fixed = ring.map(([lon, lat]) => [fixLon(lon), lat]);
      for (let i = 1; i < fixed.length; i++) {
        const diff = fixed[i][0] - fixed[i - 1][0];
        if (diff >  180) fixed[i][0] -= 360;
        if (diff < -180) fixed[i][0] += 360;
      }
      return fixed.map(([lon, lat]) => [Math.max(-180, Math.min(180, lon)), lat]);
    }
    geojson.features.forEach(f => {
      const g = f.geometry;
      if (!g) return;
      if (g.type === "Polygon") {
        g.coordinates = g.coordinates.map(fixRing);
      } else if (g.type === "MultiPolygon") {
        g.coordinates = g.coordinates
          .filter(poly => {
            const lons = poly[0].map(p => p[0]);
            const avg = lons.reduce((a, b) => a + b, 0) / lons.length;
            return avg > -165 && avg < 165;
          })
          .map(poly => poly.map(fixRing));
        if (g.coordinates.length === 0) g.type = "GeometryCollection";
      }
    });
    geojson.features = geojson.features.filter(f => f.geometry && f.geometry.type !== "GeometryCollection");
  }

  // ─── Filter GeoJSON features ──────────────────────────────
  function filterFeatures(codes) {
    if (!worldGeoJSON) return { type: "FeatureCollection", features: [] };
    const set = new Set(codes.map(c => c.toUpperCase()));
    return {
      type: "FeatureCollection",
      features: worldGeoJSON.features.filter(f => {
        const p = f.properties;
        const checks = [
          p.iso_a3, p.ISO_A3, p.adm0_a3, p.ADM0_A3,
          p.iso3, p.ISO3, p.gu_a3, p.GU_A3,
          p.ADMIN, p.admin, p.NAME, p.name,
          p.name_long, p.NAME_LONG, p.SOVEREIGNT,
        ];
        return checks.some(v => v && set.has(String(v).toUpperCase()));
      })
    };
  }

  // ─── Build MASTER_FRAMES from all unit simulations ────────
  // Merges every frame from every unit into one sorted timeline
  function buildMasterFrames() {
    MASTER_FRAMES = UNITS.flatMap(u =>
      (u.simulation ? u.simulation.frames : []).map(f => ({
        ...f,
        unitId: u.id,
        unitName: u.name,
      }))
    ).sort((a, b) => (a.year || 0) - (b.year || 0));
  }

  // ─── Snap logic ───────────────────────────────────────────
  function snapYear(raw) {
    const near = SNAP_DATES.find(d => Math.abs(raw - d) < SNAP_RADIUS);
    return near !== undefined ? near : raw;
  }

  // ─── Year engine (scoped to the currently selected unit) ──
  function seekGlobalYear(rawYear) {
    globalYear = Math.round(rawYear);

    // Update SPICE-T layer visibility based on year
    updateLayerVisibility(globalYear);

    // Search only the current unit's frames — never change sidebar highlight here
    const frames = currentUnit && currentUnit.simulation
      ? currentUnit.simulation.frames
      : MASTER_FRAMES;

    const candidates = frames.filter(f => (f.year || 0) <= globalYear);
    currentGlobalFrame = candidates.length > 0 ? candidates[candidates.length - 1] : null;

    renderSimFrame(currentGlobalFrame);
    updateGlobalUI();
    updateContextCard(currentGlobalFrame);
  }

  // ─── Layer visibility gating (SPICE-T yearRange) ──────────
  function updateLayerVisibility(year) {
    Object.values(layerGroups).forEach(lg => {
      if (!lg._yearRange) return; // no range → always visible
      const [start, end] = lg._yearRange;
      const inRange = year >= start && year <= end;
      if (inRange && !map.hasLayer(lg)) lg.addTo(map);
      if (!inRange && map.hasLayer(lg)) map.removeLayer(lg);
    });
  }

  // ─── Render a single frame onto the map ───────────────────
  function renderSimFrame(frame) {
    clearSimLayers();
    if (!frame || !Array.isArray(frame.regions)) return;

    frame.regions.forEach(region => {
      if (!region) return;
      const opacity = region.opacity !== undefined ? region.opacity : 0.42;

      if (region.countries && region.countries.length > 0 && worldGeoJSON) {
        const geojson = filterFeatures(region.countries);
        if (geojson.features.length > 0) {
          const geoLayer = L.geoJSON(geojson, {
            style: {
              color: region.color,
              weight: 2,
              fillColor: region.color,
              fillOpacity: opacity,
              smoothFactor: 1,
              className: "sim-polygon",
            }
          }).addTo(map);

          geoLayer.bindTooltip(region.name, {
            permanent: false, sticky: true,
            className: "territory-label sim-label"
          });
          simLayers.push(geoLayer);
        }
      } else if (region.coords && region.coords.length > 0) {
        const latlngs = region.coords.map(c => [c[0], c[1]]);
        const poly = L.polygon(latlngs, {
          color: region.color,
          weight: 2,
          fillColor: region.color,
          fillOpacity: opacity,
          smoothFactor: 1,
          className: "sim-polygon",
        }).addTo(map);
        poly.bindTooltip(region.name, {
          permanent: false, sticky: true,
          className: "territory-label sim-label"
        });
        simLayers.push(poly);
      }
    });
  }

  function clearSimLayers() {
    simLayers.forEach(l => map.removeLayer(l));
    simLayers = [];
  }

  // ─── Per-unit playback ────────────────────────────────────
  function playGlobal() {
    const frames = currentUnit && currentUnit.simulation
      ? currentUnit.simulation.frames : [];
    if (frames.length === 0) return;
    globalPlaying = true;
    if (globalPlayBtn) globalPlayBtn.innerHTML = "&#10074;&#10074;";

    function advance() {
      if (!globalPlaying) return;
      const nextFrame = frames.find(f => (f.year || 0) > globalYear);
      if (!nextFrame) {
        pauseGlobal();
        return;
      }
      seekGlobalYear(nextFrame.year);
      globalTimer = setTimeout(advance, Math.max(350, 1800 / globalSpeed));
    }
    globalTimer = setTimeout(advance, Math.max(350, 1800 / globalSpeed));
  }

  function pauseGlobal() {
    globalPlaying = false;
    if (globalTimer) { clearTimeout(globalTimer); globalTimer = null; }
    if (globalPlayBtn) globalPlayBtn.innerHTML = "&#9654;";
  }

  function cycleGlobalSpeed() {
    const speeds = [1, 2, 4];
    globalSpeed = speeds[(speeds.indexOf(globalSpeed) + 1) % speeds.length];
    if (globalSpeedBtn) globalSpeedBtn.textContent = globalSpeed + "x";
  }

  // ─── Update global bar UI ─────────────────────────────────
  function updateGlobalUI() {
    if (globalSlider) globalSlider.value = globalYear;
    if (globalYearDisplay) globalYearDisplay.textContent = globalYear;
    if (globalEventLabel && currentGlobalFrame) {
      const evts = currentGlobalFrame.events || [];
      globalEventLabel.textContent = evts.length > 0 ? evts[0] : (currentGlobalFrame.label || "");
    } else if (globalEventLabel) {
      globalEventLabel.textContent = "";
    }
    // Update live-pane label in compare mode
    const liveLbl = document.getElementById("livePaneLabel");
    if (liveLbl && compareMode) liveLbl.textContent = "Live — " + globalYear + " CE";

    // Update progress fill on the slider track
    if (globalSlider) {
      const min = +globalSlider.min, max = +globalSlider.max, val = globalYear;
      const pct = max > min ? ((val - min) / (max - min)) * 100 : 0;
      globalSlider.style.background =
        `linear-gradient(to right, var(--accent) ${pct}%, var(--bg-elevated) ${pct}%)`;
    }
  }

  // ─── Build tick marks for the current unit's frames ───────
  function buildTickMarks(unit) {
    const tickEl = document.getElementById("gbTicks");
    if (!tickEl) return;
    tickEl.innerHTML = "";
    if (!unit || !unit.simulation) return;
    const frames = unit.simulation.frames;
    if (frames.length < 2) return;
    const minY = frames[0].year;
    const maxY = frames[frames.length - 1].year;
    const range = maxY - minY || 1;
    frames.forEach(f => {
      const pct = ((f.year - minY) / range) * 100;
      const span = document.createElement("span");
      span.style.left = pct + "%";
      span.textContent = f.year;
      tickEl.appendChild(span);
    });
  }

  // ─── Context row (inside global bar — no floating card) ──
  function updateContextCard(frame) {
    const row = document.getElementById("gbContextRow");
    if (!row) return;
    if (!frame || !frame.context) {
      row.classList.add("hidden");
      return;
    }
    const ctx = frame.context;
    row.classList.remove("hidden");
    if (ctxYear)     ctxYear.textContent     = frame.year + " CE";
    if (ctxDominant) ctxDominant.textContent = ctx.dominant || "—";
    if (ctxTrade)    ctxTrade.textContent    = ctx.trade    || "—";
    if (ctxConflict) ctxConflict.textContent = ctx.conflict || "—";
  }

  // ─── Comparison mode (true side-by-side split) ────────────
  function initCompareMap() {
    if (mapCompare) return;
    mapCompare = L.map("map-compare", {
      center: map.getCenter(),
      zoom: map.getZoom(),
      minZoom: 3, maxZoom: 10,
      maxBounds: [[-85, -180], [85, 180]],
      maxBoundsViscosity: 1.0,
      worldCopyJump: false,
      zoomControl: false,
      attributionControl: false,
    });
    L.control.zoom({ position: "topright" }).addTo(mapCompare);
    const url = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
    L.tileLayer(url, { maxZoom: 19, subdomains: "abcd", noWrap: true }).addTo(mapCompare);
    const theme = document.documentElement.getAttribute("data-theme") || "dark";
    document.getElementById("map-compare").setAttribute("data-map-theme", theme === "dark" ? "dark" : "light");
  }

  function renderCompareFrame(frame) {
    if (!mapCompare) return;
    compareLayers.forEach(l => mapCompare.removeLayer(l));
    compareLayers = [];
    if (!frame || !Array.isArray(frame.regions)) return;

    frame.regions.forEach(region => {
      if (!region) return;
      const opacity = region.opacity !== undefined ? region.opacity : 0.42;
      if (region.countries && region.countries.length > 0 && worldGeoJSON) {
        const geojson = filterFeatures(region.countries);
        if (geojson.features.length > 0) {
          const gl = L.geoJSON(geojson, {
            style: { color: region.color, weight: 2, fillColor: region.color, fillOpacity: opacity, smoothFactor: 1 }
          }).addTo(mapCompare);
          gl.bindTooltip(region.name, { sticky: true, className: "territory-label" });
          compareLayers.push(gl);
        }
      }
    });
  }

  function lockComparison() {
    if (compareMode) { clearComparison(); return; }
    if (!currentGlobalFrame) return;
    compareMode = true;
    lockedFrame = currentGlobalFrame;
    if (compareBtn) compareBtn.classList.add("active");

    // Show split layout
    const comparePane  = document.getElementById("comparePane");
    const divider      = document.getElementById("mapDivider");
    const liveLbl      = document.getElementById("livePaneLabel");
    const compareLbl   = document.getElementById("comparePaneLabel");

    if (comparePane)  comparePane.classList.remove("hidden");
    if (divider)      divider.classList.remove("hidden");
    if (liveLbl)      liveLbl.classList.remove("hidden");
    if (compareLbl)   compareLbl.textContent = (lockedFrame.year || "—") + " CE — " + (lockedFrame.label || "");

    // Init second map, sync view, render locked frame
    initCompareMap();
    setTimeout(() => {
      mapCompare.invalidateSize();
      mapCompare.setView(map.getCenter(), map.getZoom());
      renderCompareFrame(lockedFrame);
      map.invalidateSize();
    }, 400); // wait for CSS transition to finish
  }

  function clearComparison() {
    compareMode = false;
    lockedFrame = null;
    compareLayers.forEach(l => mapCompare && mapCompare.removeLayer(l));
    compareLayers = [];
    if (compareBtn) compareBtn.classList.remove("active");

    const comparePane = document.getElementById("comparePane");
    const divider     = document.getElementById("mapDivider");
    const liveLbl     = document.getElementById("livePaneLabel");
    if (comparePane) comparePane.classList.add("hidden");
    if (divider)     divider.classList.add("hidden");
    if (liveLbl)     liveLbl.classList.add("hidden");

    setTimeout(() => map.invalidateSize(), 400);
  }

  // ─── Initialize ───────────────────────────────────────────
  function init() {
    // Grab new DOM refs now that DOM is ready
    globalBar          = $("#globalBar");
    globalPlayBtn      = $("#globalPlayBtn");
    globalSlider       = $("#globalSlider");
    globalYearDisplay  = $("#globalYearDisplay");
    globalEventLabel   = $("#globalEventLabel");
    globalSpeedBtn     = $("#globalSpeedBtn");
    compareBtn         = $("#compareBtn");
    // Context row lives inside the global bar now — no floating card
    ctxYear            = $("#ctxYear");
    ctxDominant        = $("#ctxDominant");
    ctxTrade           = $("#ctxTrade");
    ctxConflict        = $("#ctxConflict");

    buildMasterFrames();
    buildSidebar();
    initMap();
    bindEvents();
    applyTheme();
    loadWorldGeoJSON();
  }

  // ─── Build sidebar ────────────────────────────────────────
  function buildSidebar() {
    UNITS.forEach(u => {
      const div = document.createElement("div");
      div.className = "unit-item";
      div.dataset.unit = u.id;
      div.innerHTML = `
        <div class="unit-num" style="border: 2px solid ${u.color}">${u.id}</div>
        <div>
          <div class="unit-name">${u.name}</div>
          <div class="unit-period">${u.period}</div>
        </div>`;
      div.addEventListener("click", () => selectUnit(u.id));
      unitListEl.appendChild(div);
    });
  }

  // ─── Init Leaflet map ─────────────────────────────────────
  function initMap() {
    map = L.map("map", {
      center: [25, 20],
      zoom: 3,
      minZoom: 3,
      maxZoom: 10,
      maxBounds: [[-85, -180], [85, 180]],
      maxBoundsViscosity: 1.0,
      worldCopyJump: false,
      zoomControl: false,
      attributionControl: false,
    });

    L.control.zoom({ position: "topright" }).addTo(map);
    setTimeout(() => map.invalidateSize(), 300);
  }

  // ─── Select a unit ────────────────────────────────────────
  function selectUnit(id) {
    const unit = UNITS.find(u => u.id === id);
    if (!unit) return;
    currentUnit = unit;
    cardIndex = 0;

    clearComparison();
    stopTradeAnimations();

    $$(".unit-item").forEach(el =>
      el.classList.toggle("active", +el.dataset.unit === id)
    );

    unitTitleEl.textContent = `Unit ${unit.id}: ${unit.name}`;
    periodBadge.textContent = unit.period;

    renderTimeline(unit);
    renderStudy(unit);
    hideMapInfo();

    // Configure the playbar for this unit's simulation year range
    if (unit.simulation && unit.simulation.frames.length > 0) {
      const frames = unit.simulation.frames;
      const minYear = frames[0].year;
      const maxYear = frames[frames.length - 1].year;
      if (globalSlider) {
        globalSlider.min = minYear;
        globalSlider.max = maxYear;
        globalSlider.value = minYear;
      }
      globalYear = minYear;
      if (globalBar) globalBar.classList.remove("hidden");
      buildTickMarks(unit);
    } else {
      if (globalBar) globalBar.classList.add("hidden");
      if (contextCard) contextCard.classList.add("hidden");
    }

    if (!geoJSONReady) {
      pendingUnitId = id;
      legendItems.innerHTML = `<p style="color:var(--text-muted);font-size:.75rem;padding:6px 4px">Loading country borders…</p>`;
      Object.values(layerGroups).forEach(lg => map.removeLayer(lg));
      layerGroups = {};
    } else {
      renderMapLayers(unit);
      if (unit.simulation && unit.simulation.frames.length > 0) {
        seekGlobalYear(unit.simulation.frames[0].year);
      }
    }

    if (window.innerWidth < 900) sidebar.classList.add("collapsed");
  }

  // ─── Render static map layers for a unit ─────────────────
  function renderMapLayers(unit) {
    if (!unit) return;
    Object.values(layerGroups).forEach(lg => map.removeLayer(lg));
    layerGroups = {};
    legendItems.innerHTML = "";
    stopTradeAnimations();

    const allBounds = [];

    unit.mapLayers.forEach((layer, idx) => {
      const color = layer.color || EMPIRE_COLORS[idx % EMPIRE_COLORS.length];
      const lg = L.layerGroup();

      // Store yearRange on the layer group for SPICE-T gating
      if (layer.yearRange) lg._yearRange = layer.yearRange;

      // Determine if layer is in range right now
      const inRange = !layer.yearRange ||
        (globalYear >= layer.yearRange[0] && globalYear <= layer.yearRange[1]);
      if (inRange) lg.addTo(map);

      layerGroups[layer.name] = lg;

      // Determine SPICE-T badge: P=Political, I=Interaction, T=Technology
      const spiceType = layer.spiceType ||
        (layer.type === "polyline" ? "I" :
         layer.type === "marker"   ? "T" : "P");

      if (layer.type === "region") {
        const geojson = filterFeatures(layer.countries || []);
        if (geojson.features.length > 0) {
          const geoLayer = L.geoJSON(geojson, {
            style: {
              color, weight: 2, fillColor: color, fillOpacity: 0.42, smoothFactor: 1,
            },
            onEachFeature: (feature, flayer) => {
              const label = feature.properties.name_en || feature.properties.iso_a3 || layer.name;
              flayer.bindTooltip(label, { sticky: true, className: "territory-label", opacity: 0.9 });
              flayer.on("click", () => showMapInfo(layer.info));
              flayer.on("mouseover", function () {
                this.setStyle({ fillOpacity: 0.65, weight: 3 });
                this.bringToFront();
              });
              flayer.on("mouseout", function () {
                this.setStyle({ fillOpacity: 0.42, weight: 2 });
              });
            }
          }).addTo(lg);
          try {
            const b = geoLayer.getBounds();
            allBounds.push(b.getSouthWest(), b.getNorthEast());
          } catch {}
        }

      } else if (layer.type === "polygon") {
        const latlngs = layer.coords.map(c => [c[0], c[1]]);
        const poly = L.polygon(latlngs, {
          color, weight: 2, fillColor: color, fillOpacity: 0.28, smoothFactor: 1,
        }).addTo(lg);
        poly.bindTooltip(layer.name, { permanent: true, direction: "center", className: "territory-label" });
        poly.on("click", () => showMapInfo(layer.info));
        poly.on("mouseover", function () { this.setStyle({ fillOpacity: 0.52, weight: 3 }); });
        poly.on("mouseout", function () { this.setStyle({ fillOpacity: 0.28, weight: 2 }); });
        allBounds.push(...latlngs);

      } else if (layer.type === "polyline") {
        const latlngs = layer.coords.map(c => [c[0], c[1]]);
        L.polyline(latlngs, { color, weight: 3, opacity: 0.3 }).addTo(lg);
        const antLine = L.polyline(latlngs, {
          color, weight: 3, opacity: 0.85, dashArray: "12,16", dashOffset: "0",
          className: "animated-route",
        }).addTo(lg);
        const midIdx = Math.floor(latlngs.length / 2);
        L.marker(latlngs[midIdx], {
          icon: L.divIcon({ className: "trade-route-label", html: layer.name, iconSize: [120, 20], iconAnchor: [60, 10] }),
        }).addTo(lg);
        for (let d = 0; d < 3; d++) {
          const dot = L.circleMarker(latlngs[0], {
            radius: 4, color: "#fff", fillColor: color, fillOpacity: 1, weight: 2,
          }).addTo(lg);
          tradeAnimDots.push({ marker: dot, path: latlngs, progress: d / 3, speed: 0.002 });
        }
        antLine.on("click", () => showMapInfo(layer.info));
        antLine.on("mouseover", function () { this.setStyle({ weight: 5, opacity: 1 }); });
        antLine.on("mouseout", function () { this.setStyle({ weight: 3, opacity: 0.85 }); });
        allBounds.push(...latlngs);

      } else if (layer.type === "marker") {
        const marker = L.marker([layer.lat, layer.lng], {
          icon: L.divIcon({
            className: "",
            html: `<div class="custom-marker" style="background:${color}">${layer.name.charAt(0)}</div>`,
            iconSize: [28, 28], iconAnchor: [14, 14],
          }),
        }).addTo(lg);
        marker.on("click", () => showMapInfo(layer.info));
        marker.bindTooltip(layer.name, { direction: "top", offset: [0, -16] });
        allBounds.push([layer.lat, layer.lng]);
      }

      // Legend row with SPICE-T badge
      const legendDiv = document.createElement("div");
      legendDiv.className = "legend-item";
      const badgeClass = `spice-badge spice-${spiceType.toLowerCase()}`;
      legendDiv.innerHTML = `
        <div class="legend-swatch" style="background:${color}"></div>
        <span class="${badgeClass}" title="${spiceType === 'P' ? 'Political' : spiceType === 'I' ? 'Interaction' : 'Technology'}">${spiceType}</span>
        <span>${layer.name}</span>
        ${layer.yearRange ? `<span class="legend-year-range">${layer.yearRange[0]}-${layer.yearRange[1]}</span>` : ""}
      `;
      if (!inRange) legendDiv.style.opacity = "0.35";
      legendDiv.addEventListener("click", () => {
        if (map.hasLayer(lg)) {
          map.removeLayer(lg);
          legendDiv.style.opacity = "0.4";
        } else {
          if (!layer.yearRange || (globalYear >= layer.yearRange[0] && globalYear <= layer.yearRange[1])) {
            lg.addTo(map);
            legendDiv.style.opacity = "1";
          }
        }
      });
      legendItems.appendChild(legendDiv);
    });

    if (allBounds.length > 0) {
      try { map.fitBounds(allBounds, { padding: [50, 50], maxZoom: 5 }); } catch {}
    }

    startTradeAnimations();
  }

  // ─── Trade Route Animations ───────────────────────────────
  function interpolateAlongPath(path, t) {
    if (path.length < 2) return path[0];
    t = ((t % 1) + 1) % 1;
    let totalDist = 0;
    const segments = [];
    for (let i = 0; i < path.length - 1; i++) {
      const d = map.distance(path[i], path[i + 1]);
      segments.push(d);
      totalDist += d;
    }
    let target = t * totalDist, accumulated = 0;
    for (let i = 0; i < segments.length; i++) {
      if (accumulated + segments[i] >= target) {
        const ratio = (target - accumulated) / segments[i];
        return [
          path[i][0] + (path[i+1][0] - path[i][0]) * ratio,
          path[i][1] + (path[i+1][1] - path[i][1]) * ratio,
        ];
      }
      accumulated += segments[i];
    }
    return path[path.length - 1];
  }

  function animateTradeRoutes() {
    tradeAnimDots.forEach(dot => {
      dot.progress += dot.speed;
      if (dot.progress > 1) dot.progress -= 1;
      const pos = interpolateAlongPath(dot.path, dot.progress);
      if (pos) dot.marker.setLatLng(pos);
    });
    tradeAnimId = requestAnimationFrame(animateTradeRoutes);
  }

  function startTradeAnimations() {
    if (tradeAnimDots.length > 0 && !tradeAnimId)
      tradeAnimId = requestAnimationFrame(animateTradeRoutes);
  }

  function stopTradeAnimations() {
    if (tradeAnimId) { cancelAnimationFrame(tradeAnimId); tradeAnimId = null; }
    tradeAnimDots = [];
  }

  // ─── Map info panel ───────────────────────────────────────
  function showMapInfo(info) {
    if (!info) return;
    mapInfoTitle.textContent = info.title;
    mapInfoDesc.textContent = info.desc;
    mapInfoDetails.innerHTML = info.details;
    mapInfoPanel.classList.remove("hidden");
  }
  function hideMapInfo() { mapInfoPanel.classList.add("hidden"); }

  // ─── Timeline ─────────────────────────────────────────────
  function renderTimeline(unit) {
    timelineTrack.innerHTML = "";
    eraBar.innerHTML = "";
    const eras = ["All", "War", "Trade", "Empire", "Expansion", "Revolution", "Culture"];
    let activeEra = "All";
    eras.forEach(era => {
      const chip = document.createElement("button");
      chip.className = "era-chip" + (era === "All" ? " active" : "");
      chip.textContent = era;
      chip.addEventListener("click", () => {
        $$(".era-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        activeEra = era;
        renderTimelineEvents(unit, activeEra);
      });
      eraBar.appendChild(chip);
    });
    renderTimelineEvents(unit, activeEra);
  }

  function renderTimelineEvents(unit, filter) {
    timelineTrack.innerHTML = "";
    const events = filter === "All"
      ? unit.timeline
      : unit.timeline.filter(e => e.tags.some(t => t.toLowerCase() === filter.toLowerCase()));
    events.forEach((evt, i) => {
      const div = document.createElement("div");
      div.className = "tl-event";
      div.style.animationDelay = `${i * 0.06}s`;
      div.innerHTML = `
        <div class="tl-year">${evt.year}</div>
        <div class="tl-title">${evt.title}</div>
        <div class="tl-desc">${evt.desc}</div>
        <div class="tl-tags">${evt.tags.map(t => `<span class="tl-tag ${t}">${t}</span>`).join("")}</div>`;
      div.addEventListener("click", () => {
        const layer = unit.mapLayers.find(
          l => l.info && (
            l.info.title.toLowerCase().includes(evt.title.toLowerCase().split(" ")[0]) ||
            evt.title.toLowerCase().includes(l.name.toLowerCase().split(" ")[0])
          )
        );
        if (layer) { switchView("map"); showMapInfo(layer.info); }
      });
      timelineTrack.appendChild(div);
    });
    if (events.length === 0)
      timelineTrack.innerHTML = `<p style="color:var(--text-muted);padding:20px;">No events match this filter.</p>`;
  }

  // ─── Study / Flashcards ───────────────────────────────────
  function renderStudy(unit) {
    studyTitle.textContent = `Unit ${unit.id}: ${unit.name} — Flashcards`;
    cardIndex = 0;
    updateCard();
  }

  function updateCard() {
    if (!currentUnit || !currentUnit.flashcards.length) return;
    const card = currentUnit.flashcards[cardIndex];
    flashcardFront.textContent = card.q;
    flashcardBack.textContent = card.a;
    flashcard.classList.remove("flipped");
    studyProgress.textContent = `${cardIndex + 1} / ${currentUnit.flashcards.length}`;
    progressFill.style.width = `${((cardIndex + 1) / currentUnit.flashcards.length) * 100}%`;
  }

  function flipCard() { flashcard.classList.toggle("flipped"); }

  // ─── View switching ───────────────────────────────────────
  function switchView(view) {
    currentView = view;
    viewBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
    $$(".view-panel").forEach(p => p.classList.remove("active"));
    if (view === "map") {
      $("#mapView").classList.add("active");
      setTimeout(() => map.invalidateSize(), 100);
    } else if (view === "timeline") {
      $("#timelineView").classList.add("active");
    } else if (view === "study") {
      $("#studyView").classList.add("active");
    }
  }

  // ─── Theme ────────────────────────────────────────────────
  function applyTheme() {
    const saved = localStorage.getItem("apwh-theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    updateTileLayer(saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("apwh-theme", next);
    updateTileLayer(next);
  }

  function updateTileLayer(theme) {
    const url = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
    const attr = theme === "dark" ? "dark" : "light";

    if (map) {
      map.eachLayer(l => { if (l instanceof L.TileLayer) map.removeLayer(l); });
      L.tileLayer(url, { maxZoom: 19, subdomains: "abcd", noWrap: true }).addTo(map);
      const mapEl = document.getElementById("map");
      if (mapEl) mapEl.setAttribute("data-map-theme", attr);
    }
    if (mapCompare) {
      mapCompare.eachLayer(l => { if (l instanceof L.TileLayer) mapCompare.removeLayer(l); });
      L.tileLayer(url, { maxZoom: 19, subdomains: "abcd", noWrap: true }).addTo(mapCompare);
      const cmpEl = document.getElementById("map-compare");
      if (cmpEl) cmpEl.setAttribute("data-map-theme", attr);
    }
  }

  // ─── Event bindings ───────────────────────────────────────
  function bindEvents() {
    btnMenu.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      setTimeout(() => map.invalidateSize(), 300);
    });

    btnTheme.addEventListener("click", toggleTheme);

    btnGetStarted.addEventListener("click", () => {
      welcomeOverlay.classList.add("hidden");
      selectUnit(1);
    });

    closeMapInfo.addEventListener("click", hideMapInfo);

    viewBtns.forEach(btn =>
      btn.addEventListener("click", () => switchView(btn.dataset.view))
    );

    flashcard.addEventListener("click", flipCard);
    prevCardBtn.addEventListener("click", () => {
      if (!currentUnit) return;
      cardIndex = (cardIndex - 1 + currentUnit.flashcards.length) % currentUnit.flashcards.length;
      updateCard();
    });
    nextCardBtn.addEventListener("click", () => {
      if (!currentUnit) return;
      cardIndex = (cardIndex + 1) % currentUnit.flashcards.length;
      updateCard();
    });

    // Global timeline bar events (bound after init sets DOM refs)
    document.addEventListener("DOMContentLoaded-late", () => {});
    // Use timeout to ensure DOM refs are set
    setTimeout(() => {
      if (globalPlayBtn) globalPlayBtn.addEventListener("click", () => {
        if (globalPlaying) pauseGlobal(); else playGlobal();
      });

      if (globalSlider) {
        globalSlider.addEventListener("input", e => {
          pauseGlobal();
          seekGlobalYear(parseInt(e.target.value));
        });
        globalSlider.addEventListener("change", e => {
          seekGlobalYear(parseInt(e.target.value));
        });
      }

      if (globalSpeedBtn) globalSpeedBtn.addEventListener("click", cycleGlobalSpeed);
      if (compareBtn) compareBtn.addEventListener("click", lockComparison);
    }, 0);

    document.addEventListener("keydown", e => {
      if (welcomeOverlay && !welcomeOverlay.classList.contains("hidden")) {
        if (e.key === "Enter") { welcomeOverlay.classList.add("hidden"); selectUnit(1); }
        return;
      }
      if (e.key === " " && currentView === "study") { e.preventDefault(); flipCard(); }
      if (e.key === "ArrowRight" && currentView === "study") {
        if (!currentUnit) return;
        cardIndex = (cardIndex + 1) % currentUnit.flashcards.length; updateCard();
      }
      if (e.key === "ArrowLeft" && currentView === "study") {
        if (!currentUnit) return;
        cardIndex = (cardIndex - 1 + currentUnit.flashcards.length) % currentUnit.flashcards.length; updateCard();
      }
      // Number keys 1-9 select unit
      const num = parseInt(e.key);
      if (num >= 1 && num <= 9 && !e.ctrlKey && !e.metaKey) selectUnit(num);
    });

    window.addEventListener("resize", () => map.invalidateSize());
  }

  // ─── Cross-iframe theme sync ──────────────────────────────
  window.addEventListener("message", function (e) {
    if (e.data && e.data.type === "set-theme") {
      const t = e.data.theme === "light" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
      localStorage.setItem("apwh-theme", t);
      updateTileLayer(t);
    } else if (e.data && e.data.type === "invalidate-map" && map) {
      setTimeout(() => map.invalidateSize(), 50);
    }
  });

  // ─── Boot ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", init);
})();
