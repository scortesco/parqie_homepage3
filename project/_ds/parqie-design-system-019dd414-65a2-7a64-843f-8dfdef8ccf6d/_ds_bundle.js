/* @ds-bundle: {"format":3,"namespace":"ParqieDesignSystem_019dd4","components":[],"sourceHashes":{"ui_kits/driver-app/BookingScreen.jsx":"bb9eb7401cfd","ui_kits/driver-app/MapScreen.jsx":"81a362140396","ui_kits/driver-app/ios-frame.jsx":"d67eb3ffe562","ui_kits/partner/Dashboard.jsx":"1bff2abc0532","ui_kits/partner/Sidebar.jsx":"81b673e3447a","ui_kits/web/Footer.jsx":"3f500b770786","ui_kits/web/Hero.jsx":"fc74c6630b40","ui_kits/web/HowItWorks.jsx":"f38ca38fbd0b","ui_kits/web/NavBar.jsx":"7fc73f19a817","ui_kits/web/PartnerCTA.jsx":"14d60f939903"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ParqieDesignSystem_019dd4 = window.ParqieDesignSystem_019dd4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/driver-app/BookingScreen.jsx
try { (() => {
// Driver app — booking detail + confirmation
function BookingScreen({
  onBook,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Driver \xB7 Booking",
    style: {
      width: 390,
      height: 844,
      background: "#F9F9F9",
      fontFamily: "var(--font-sans)",
      color: "#000",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: "#053333",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 56,
      left: 16,
      width: 40,
      height: 40,
      borderRadius: 999,
      background: "rgba(255,255,255,.95)",
      border: 0,
      font: "700 18px/40px var(--font-sans)",
      cursor: "pointer"
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 16,
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#ACFF78",
      color: "#000",
      borderRadius: 999,
      padding: "4px 10px",
      font: "600 12px/16px var(--font-sans)"
    }
  }, "Available now"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(255,255,255,.18)",
      color: "#F9F9F9",
      borderRadius: 999,
      padding: "4px 10px",
      font: "500 12px/16px var(--font-sans)"
    }
  }, "Acoperit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pq-h1",
    style: {
      margin: 0,
      fontSize: 24
    }
  }, "Strada Lipscani 14"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14px/20px var(--font-sans)",
      color: "#BBBBBC",
      margin: "4px 0 16px"
    }
  }, "Sector 3 \xB7 120 m de la tine \xB7 Inaltime max 2.0 m"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 8,
      background: "#fff",
      border: "1px solid #D3D4D8",
      borderRadius: 12,
      padding: 12,
      marginBottom: 16
    }
  }, [["Tarif", "12 RON/h"], ["Min.", "30 min"], ["Liber", "8 / 24"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px/16px var(--font-sans)",
      color: "#BBBBBC",
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 16px/20px var(--font-sans)",
      color: "#000",
      marginTop: 2
    }
  }, v)))), /*#__PURE__*/React.createElement("h3", {
    className: "pq-h3",
    style: {
      margin: "0 0 8px"
    }
  }, "Durata"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 20
    }
  }, ["30 min", "1 h", "2 h", "4 h"].map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    style: {
      flex: 1,
      height: 40,
      borderRadius: 15,
      background: i === 1 ? "#053333" : "transparent",
      color: i === 1 ? "#F9F9F9" : "#000",
      border: i === 1 ? "0" : "2px solid #D3D4D8",
      font: "500 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, d))), /*#__PURE__*/React.createElement("h3", {
    className: "pq-h3",
    style: {
      margin: "0 0 8px"
    }
  }, "Numar inmatriculare"), /*#__PURE__*/React.createElement("input", {
    defaultValue: "B 142 PQE",
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 48,
      borderRadius: 15,
      border: "2px solid #053333",
      padding: "0 16px",
      font: "500 16px/48px var(--font-sans)",
      color: "#000",
      background: "#fff"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 28px",
      background: "#fff",
      borderTop: "1px solid #F1F1F1",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/16px var(--font-sans)",
      color: "#BBBBBC"
    }
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 22px/24px var(--font-sans)",
      color: "#000"
    }
  }, "12 RON")), /*#__PURE__*/React.createElement("button", {
    onClick: onBook,
    style: {
      flex: "0 0 auto",
      height: 48,
      padding: "0 24px",
      borderRadius: 999,
      background: "#ACFF78",
      color: "#000",
      border: 0,
      font: "700 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Rezerva acum")));
}
function ConfirmScreen({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Driver \xB7 Confirmed",
    style: {
      width: 390,
      height: 844,
      background: "#053333",
      fontFamily: "var(--font-sans)",
      color: "#F9F9F9",
      padding: "120px 24px 24px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 24,
      background: "#ACFF78",
      display: "grid",
      placeItems: "center",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    style: {
      height: 50
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "700 32px/1.1 var(--font-sans)",
      color: "#F9F9F9",
      margin: 0
    }
  }, "Rezervat."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 16px/1.55 var(--font-sans)",
      color: "rgba(249,249,249,.8)",
      margin: "8px 0 0",
      maxWidth: 300
    }
  }, "Strada Lipscani 14, locul 12. Ai 15 min sa ajungi \u2014 apoi tariful porneste automat."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: "rgba(255,255,255,.08)",
      borderRadius: 16,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["Loc", "12 / Lipscani"], ["Inceput", "14:32"], ["Sfarsit estimat", "15:32"], ["Numar", "B 142 PQE"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "rgba(249,249,249,.7)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px/20px var(--font-sans)",
      color: "#F9F9F9"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      height: 48,
      borderRadius: 999,
      background: "#ACFF78",
      color: "#000",
      border: 0,
      font: "700 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Navigheaza"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      height: 48,
      borderRadius: 999,
      background: "transparent",
      border: "2px solid #F9F9F9",
      color: "#F9F9F9",
      font: "500 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Vezi pe harta")));
}
window.BookingScreen = BookingScreen;
window.ConfirmScreen = ConfirmScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/driver-app/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/driver-app/MapScreen.jsx
try { (() => {
// Driver app — Map + bottom sheet (primary screen)
function MapScreen({
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Driver \xB7 Map",
    style: {
      width: 390,
      height: 844,
      position: "relative",
      background: "#053333",
      overflow: "hidden",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 390 844",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "390",
    height: "844",
    fill: "#053333"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(249,249,249,.06)",
    strokeWidth: "28",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 200 L420 160"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 380 L420 360"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 560 L420 540"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 -20 L150 880"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M280 -20 L320 880"
  }))), [{
    x: 80,
    y: 240,
    lime: true,
    p: "12"
  }, {
    x: 220,
    y: 180,
    lime: true,
    p: "8"
  }, {
    x: 280,
    y: 320,
    lime: false,
    p: "—"
  }, {
    x: 60,
    y: 420,
    lime: true,
    p: "5"
  }].map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onSelect && onSelect(i),
    style: {
      position: "absolute",
      left: p.x,
      top: p.y,
      padding: 0,
      border: 0,
      background: "transparent",
      display: "flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: p.lime ? "#ACFF78" : "#FF2B3A",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 6px 14px rgba(0,0,0,.35)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    style: {
      height: 26,
      filter: p.lime ? "none" : "invert(1)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#fff",
      borderRadius: 999,
      padding: "4px 10px",
      font: "600 12px/16px var(--font-sans)",
      color: "#053333"
    }
  }, p.p === "—" ? "Full" : `${p.p} RON/h`))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 16,
      right: 16,
      background: "rgba(255,255,255,.95)",
      backdropFilter: "blur(20px)",
      borderRadius: 15,
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      boxShadow: "0 8px 24px rgba(0,0,0,.18)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#ACFF78"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "#053333"
    }
  }, "Cauta o adresa"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "500 12px/20px var(--font-sans)",
      color: "#BBBBBC"
    }
  }, "Filtre")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "#fff",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: "16px 20px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 4,
      background: "#D3D4D8",
      borderRadius: 999,
      margin: "0 auto 16px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "700 22px/1.2 var(--font-sans)",
      color: "#000",
      margin: 0
    }
  }, "Langa tine"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 13px/20px var(--font-sans)",
      color: "#BBBBBC"
    }
  }, "14 locuri")), [{
    name: "Strada Lipscani 14",
    dist: "120 m",
    price: "12",
    state: "ok"
  }, {
    name: "Piata Universitatii",
    dist: "320 m",
    price: "8",
    state: "ok"
  }, {
    name: "Bulevardul Magheru",
    dist: "480 m",
    price: "—",
    state: "full"
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onSelect && onSelect(i),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 0",
      borderTop: i ? "1px solid #F1F1F1" : "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      display: "grid",
      placeItems: "center",
      background: row.state === "ok" ? "#ACFF78" : "#FF2B3A"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    style: {
      height: 22,
      filter: row.state === "ok" ? "none" : "invert(1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px/20px var(--font-sans)",
      color: "#000"
    }
  }, row.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/18px var(--font-sans)",
      color: "#BBBBBC"
    }
  }, row.dist)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, row.state === "ok" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 15px/20px var(--font-sans)",
      color: "#053333"
    }
  }, row.price, " RON/h"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/16px var(--font-sans)",
      color: "#053333"
    }
  }, "Available")) : /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#FF2B3A",
      color: "#F9F9F9",
      borderRadius: 999,
      padding: "4px 10px",
      font: "600 12px/16px var(--font-sans)"
    }
  }, "Full"))))));
}
window.MapScreen = MapScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/driver-app/MapScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/driver-app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/driver-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/partner/Dashboard.jsx
try { (() => {
function PartnerDashboard() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: 32,
      overflow: "auto",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "pq-h1",
    style: {
      margin: 0,
      fontSize: 28
    }
  }, "Buna, Andrei"), /*#__PURE__*/React.createElement("p", {
    className: "pq-body",
    style: {
      margin: "4px 0 0",
      color: "var(--fg-3)"
    }
  }, "3 locatii active in Bucuresti")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      height: 40,
      padding: "0 16px",
      borderRadius: 999,
      background: "transparent",
      border: "2px solid var(--pq-dark-green)",
      color: "#000",
      font: "500 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Exporta raport"), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 40,
      padding: "0 16px",
      borderRadius: 999,
      background: "var(--pq-lime)",
      color: "#000",
      border: 0,
      font: "700 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Adauga locatie"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 24
    }
  }, [{
    k: "Castig azi",
    v: "428 RON",
    d: "+12% vs. ieri",
    lime: true
  }, {
    k: "Rezervari active",
    v: "18",
    d: "din 24 locuri"
  }, {
    k: "Ocupare medie",
    v: "76%",
    d: "Saptamana asta"
  }, {
    k: "Recenzii",
    v: "4.8",
    d: "127 evaluari"
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: c.lime ? "var(--pq-dark-green)" : "#fff",
      color: c.lime ? "#F9F9F9" : "#000",
      border: c.lime ? "0" : "1px solid var(--border)",
      borderRadius: 12,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pq-caption",
    style: {
      color: c.lime ? "#ACFF78" : "var(--fg-3)"
    }
  }, c.k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 28px/1.1 var(--font-sans)",
      margin: "6px 0"
    }
  }, c.v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/16px var(--font-sans)",
      color: c.lime ? "rgba(249,249,249,.7)" : "var(--fg-3)"
    }
  }, c.d)))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pq-h3",
    style: {
      margin: 0
    }
  }, "Castiguri \xB7 ultimele 14 zile"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 4
    }
  }, ["7z", "14z", "30z"].map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    style: {
      height: 28,
      padding: "0 12px",
      borderRadius: 999,
      background: i === 1 ? "var(--pq-dark-green)" : "transparent",
      color: i === 1 ? "#F9F9F9" : "#000",
      border: i === 1 ? "0" : "1px solid var(--border)",
      font: "500 12px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 6,
      height: 160
    }
  }, [40, 62, 48, 70, 55, 84, 68, 92, 60, 78, 85, 96, 88, 72].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: i >= 11 ? "var(--pq-lime)" : "var(--pq-dark-green)",
      borderRadius: "4px 4px 0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pq-h3",
    style: {
      margin: "0 0 16px"
    }
  }, "Ocupare azi"), [{
    name: "Lipscani 14",
    pct: 92,
    n: "11/12"
  }, {
    name: "Universitatii",
    pct: 64,
    n: "5/8"
  }, {
    name: "Magheru",
    pct: 50,
    n: "2/4"
  }].map(loc => /*#__PURE__*/React.createElement("div", {
    key: loc.name,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "#000"
    }
  }, loc.name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "600 13px/20px var(--font-sans)",
      color: "var(--fg-3)"
    }
  }, loc.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--bg)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${loc.pct}%`,
      height: "100%",
      background: loc.pct > 80 ? "var(--pq-red)" : "var(--pq-lime)"
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pq-h3",
    style: {
      margin: 0
    }
  }, "Rezervari recente"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      marginLeft: "auto",
      font: "600 14px/20px var(--font-sans)",
      color: "var(--pq-dark-green)"
    }
  }, "Vezi toate")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 100px",
      gap: 12,
      font: "500 11px/16px var(--font-sans)",
      color: "var(--fg-3)",
      paddingBottom: 8,
      borderBottom: "1px solid var(--border)",
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Sofer"), /*#__PURE__*/React.createElement("span", null, "Locatie"), /*#__PURE__*/React.createElement("span", null, "Durata"), /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "Status")), [{
    d: "B 142 PQE",
    l: "Lipscani 14 / 12",
    t: "14:32 → 15:32",
    v: "12 RON",
    s: "Activ"
  }, {
    d: "B 781 BUC",
    l: "Universitatii / 4",
    t: "13:00 → 17:00",
    v: "32 RON",
    s: "Activ"
  }, {
    d: "CJ 09 ABC",
    l: "Lipscani 14 / 7",
    t: "11:15 → 12:00",
    v: "9 RON",
    s: "Finalizat"
  }, {
    d: "B 555 PQR",
    l: "Magheru / 1",
    t: "09:00 → 09:30",
    v: "6 RON",
    s: "Anulat"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 100px",
      gap: 12,
      padding: "14px 0",
      borderBottom: i < 3 ? "1px solid #F1F1F1" : "none",
      font: "500 14px/20px var(--font-sans)",
      color: "#000",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "ui-monospace, Menlo, monospace",
      fontSize: 13
    }
  }, r.d), /*#__PURE__*/React.createElement("span", null, r.l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, r.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, r.v), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "4px 10px",
      borderRadius: 999,
      font: "600 12px/16px var(--font-sans)",
      justifySelf: "start",
      background: r.s === "Activ" ? "#ACFF78" : r.s === "Anulat" ? "#FF2B3A" : "#D3D4D8",
      color: r.s === "Anulat" ? "#F9F9F9" : "#000"
    }
  }, r.s)))));
}
window.PartnerDashboard = PartnerDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/partner/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/partner/Sidebar.jsx
try { (() => {
function PartnerSidebar({
  active = "Dashboard"
}) {
  const items = ["Dashboard", "Locuri de parcare", "Rezervari", "Tarife", "Castiguri", "Recenzii", "Setari"];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      height: "100%",
      background: "#053333",
      padding: "24px 16px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 8px 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    style: {
      height: 32,
      filter: "brightness(0) saturate(100%) invert(89%) sepia(28%) saturate(620%) hue-rotate(43deg) brightness(106%) contrast(101%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    style: {
      height: 18,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4,
      padding: "2px 8px",
      borderRadius: 999,
      background: "rgba(172,255,120,.16)",
      color: "#ACFF78",
      font: "600 10px/14px var(--font-sans)"
    }
  }, "Partner")), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      padding: "10px 12px",
      borderRadius: 12,
      background: it === active ? "rgba(172,255,120,.12)" : "transparent",
      color: it === active ? "#ACFF78" : "#F9F9F9",
      font: it === active ? "600 14px/20px var(--font-sans)" : "500 14px/20px var(--font-sans)",
      textDecoration: "none"
    }
  }, it)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: 12,
      background: "rgba(255,255,255,.06)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 13px/18px var(--font-sans)",
      color: "#F9F9F9"
    }
  }, "Garaj Lipscani"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/18px var(--font-sans)",
      color: "rgba(249,249,249,.6)"
    }
  }, "3 locatii \xB7 24 locuri")));
}
window.PartnerSidebar = PartnerSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/partner/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Footer.jsx
try { (() => {
// node-ref: 1:99 footer block
function Footer() {
  const cols = [{
    title: "Despre noi",
    links: ["Job-uri", "Devino partener", "Locatii"]
  }, {
    title: "Ai nevoie de ajutor?",
    links: ["Cum lucreaza?", "Ajutor", "Contacteaza-ne"]
  }, {
    title: "Legal",
    links: ["Termeni", "Privacy", "Cookies", "Sitemap"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--pq-dark-green)",
      color: "#F9F9F9",
      padding: "48px 116px",
      display: "flex",
      gap: 64,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 200px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    style: {
      height: 32,
      marginRight: 8,
      filter: "brightness(0) saturate(100%) invert(89%) sepia(28%) saturate(620%) hue-rotate(43deg) brightness(106%) contrast(101%)",
      verticalAlign: "middle"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "parqie",
    style: {
      height: 20,
      filter: "invert(1)",
      verticalAlign: "middle"
    }
  })), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "700 14px/20px var(--font-sans)",
      color: "#F9F9F9",
      margin: 0
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "400 14px/20px var(--font-sans)",
      color: "#F9F9F9",
      textDecoration: "none",
      opacity: 0.92
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "700 14px/20px var(--font-sans)",
      color: "#F9F9F9",
      margin: 0
    }
  }, "Descarca aplicatia"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/google-play.png",
    alt: "Google Play",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/app-store.png",
    alt: "App Store",
    style: {
      height: 40
    }
  })));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Hero.jsx
try { (() => {
function LocationDropdown() {
  const {
    useState
  } = React;
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState("Bucuresti");
  const cities = [{
    name: "Bucuresti",
    spots: "1.2k locuri"
  }, {
    name: "Cluj-Napoca",
    spots: "480 locuri"
  }, {
    name: "Timisoara",
    spots: "320 locuri"
  }, {
    name: "Iasi",
    spots: "260 locuri"
  }, {
    name: "Brasov",
    spots: "190 locuri"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 380,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: "100%",
      height: 56,
      padding: "0 20px",
      borderRadius: 20,
      background: "#fff",
      border: "2px solid var(--pq-dark-green)",
      font: "600 16px/20px var(--font-sans)",
      color: "#000",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--pq-lime)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 12px/16px var(--font-sans)",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, "Oras"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4
    }
  }, sel), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    style: {
      marginLeft: "auto",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 200ms"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      left: 0,
      right: 0,
      background: "#fff",
      borderRadius: 16,
      padding: 8,
      boxShadow: "0 12px 32px rgba(5,51,51,.12)",
      zIndex: 10,
      border: "1px solid var(--border)"
    }
  }, cities.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.name,
    onClick: () => {
      setSel(c.name);
      setOpen(false);
    },
    style: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 12,
      border: 0,
      background: c.name === sel ? "var(--bg)" : "transparent",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px/20px var(--font-sans)",
      color: "#000"
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "500 12px/20px var(--font-sans)",
      color: "var(--fg-3)"
    }
  }, c.spots)))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 116px 80px",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pq-display",
    style: {
      margin: 0,
      maxWidth: 540
    }
  }, "Parcheaza in cateva secunde."), /*#__PURE__*/React.createElement("p", {
    className: "pq-body",
    style: {
      margin: 0,
      maxWidth: 480,
      fontSize: 18,
      lineHeight: 1.55
    }
  }, "Locuri de parcare verificate, in timp real, langa tine. Rezervi din aplicatie si platesti dupa minut \u2014 fara sa te invarti dupa loc."), /*#__PURE__*/React.createElement(LocationDropdown, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginTop: 24
    }
  }, [["3.4k+", "locuri active"], ["12 sec", "rezervare medie"], ["48 orase", "in Romania"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "pq-h2",
    style: {
      fontWeight: 700,
      color: "var(--pq-dark-green)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "pq-caption",
    style: {
      marginTop: 2
    }
  }, l))))), /*#__PURE__*/React.createElement(MapPreview, null));
}
function MapPreview() {
  // Stylized map: dark green ground + lime "available" pins + grey roads
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 460,
      borderRadius: 24,
      background: "#053333",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 12px 32px rgba(5,51,51,.12)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 460",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(249,249,249,.08)",
    strokeWidth: "22",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 120 L480 80"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 260 L480 240"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 380 L480 360"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 -20 L150 480"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M340 -20 L380 480"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(172,255,120,.18)",
    strokeWidth: "2",
    fill: "none",
    strokeDasharray: "6 8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 120 L480 80"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 260 L480 240"
  }))), [{
    x: 120,
    y: 200,
    lime: true,
    label: "12 RON/h"
  }, {
    x: 260,
    y: 130,
    lime: true,
    label: "8 RON/h"
  }, {
    x: 360,
    y: 290,
    lime: false,
    label: "Full"
  }, {
    x: 80,
    y: 360,
    lime: true,
    label: "5 RON/h"
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: p.x,
      top: p.y,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 12,
      background: p.lime ? "var(--pq-lime)" : "#FF2B3A",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 6px 14px rgba(0,0,0,.25)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    style: {
      height: 22,
      filter: p.lime ? "none" : "invert(1)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#fff",
      borderRadius: 999,
      padding: "4px 10px",
      font: "600 12px/16px var(--font-sans)",
      color: "#053333",
      boxShadow: "0 2px 8px rgba(0,0,0,.2)"
    }
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      top: 16,
      background: "#fff",
      borderRadius: 15,
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      boxShadow: "0 8px 24px rgba(0,0,0,.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#ACFF78"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "#053333"
    }
  }, "Strada Lipscani"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "500 12px/20px var(--font-sans)",
      color: "#BBBBBC"
    }
  }, "14 locuri")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/HowItWorks.jsx
try { (() => {
function HowItWorks() {
  const steps = [{
    n: "01",
    t: "Cauta",
    d: "Vezi locurile disponibile in jurul tau, in timp real."
  }, {
    n: "02",
    t: "Rezerva",
    d: "Blochezi locul cu un tap. Tariful e clar de la inceput."
  }, {
    n: "03",
    t: "Parcheaza",
    d: "Navigezi direct la loc. Platesti dupa minut, prin aplicatie."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 116px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pq-h1",
    style: {
      margin: "0 0 8px",
      maxWidth: 540
    }
  }, "Cum lucreaza?"), /*#__PURE__*/React.createElement("p", {
    className: "pq-body",
    style: {
      margin: 0,
      maxWidth: 540,
      color: "var(--fg-2)"
    }
  }, "Trei pasi pentru a parca fara stres, in centrul orasului sau langa birou."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "var(--pq-white)",
      borderRadius: 12,
      padding: 24,
      border: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pq-caption",
    style: {
      color: "var(--pq-dark-green)",
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    className: "pq-h2",
    style: {
      margin: 0
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "pq-body",
    style: {
      margin: 0
    }
  }, s.d)))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/NavBar.jsx
try { (() => {
// node-ref: 1:99
// Parqie web nav — dark green band, white text, lime primary CTA
function NavBar({
  active = "Parcheaza"
}) {
  const links = ["Parcheaza", "Devino partener", "Contul meu", "Despre noi"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "relative",
      width: "100%",
      height: 64,
      background: "var(--pq-dark-green)",
      display: "flex",
      alignItems: "center",
      padding: "0 116px",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      height: 42
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "Parqie",
    style: {
      height: 36,
      filter: "brightness(0) saturate(100%) invert(89%) sepia(28%) saturate(620%) hue-rotate(43deg) brightness(106%) contrast(101%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "parqie",
    style: {
      height: 36,
      filter: "brightness(0) saturate(100%) invert(89%) sepia(28%) saturate(620%) hue-rotate(43deg) brightness(106%) contrast(101%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      gap: 40
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: l === active ? "var(--pq-lime)" : "#F9F9F9",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 40,
      padding: "10px 16px",
      borderRadius: 20,
      border: 0,
      background: "var(--pq-lime)",
      color: "#000",
      font: "600 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Descarca aplicatia"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "#F9F9F9"
    }
  }, "RO"));
}
window.NavBar = NavBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/PartnerCTA.jsx
try { (() => {
function PartnerCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: "0 116px 80px",
      padding: "56px",
      background: "var(--pq-dark-green)",
      borderRadius: 24,
      color: "#F9F9F9",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: 999,
      background: "var(--pq-lime)",
      color: "#000",
      font: "500 12px/20px var(--font-sans)",
      marginBottom: 16
    }
  }, "Pentru parteneri"), /*#__PURE__*/React.createElement("h2", {
    className: "pq-h1",
    style: {
      color: "#F9F9F9",
      margin: "0 0 12px",
      maxWidth: 480
    }
  }, "Ai un loc de parcare? Devino partener."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 16px/1.55 var(--font-sans)",
      color: "#F9F9F9",
      opacity: 0.85,
      margin: 0,
      maxWidth: 480
    }
  }, "Listezi gratuit, gestionezi tariful pe ore si urmaresti castigurile in timp real, dintr-un singur dashboard."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      height: 44,
      padding: "0 22px",
      borderRadius: 999,
      border: 0,
      background: "var(--pq-lime)",
      color: "#000",
      font: "700 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Devino partener"), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 44,
      padding: "0 22px",
      borderRadius: 999,
      background: "transparent",
      border: "2px solid #F9F9F9",
      color: "#F9F9F9",
      font: "500 14px/20px var(--font-sans)",
      cursor: "pointer"
    }
  }, "Vezi un demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      color: "#053333",
      borderRadius: 16,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pq-caption"
  }, "Castiguri \xB7 Octombrie"), /*#__PURE__*/React.createElement("div", {
    className: "pq-h1",
    style: {
      margin: "4px 0 16px"
    }
  }, "4.280 RON"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 6,
      height: 80
    }
  }, [40, 62, 48, 70, 55, 84, 68, 92, 60, 78, 85, 96].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: i > 8 ? "var(--pq-lime)" : "var(--pq-dark-green)",
      borderRadius: 4
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pq-caption"
  }, "1 oct"), /*#__PURE__*/React.createElement("span", {
    className: "pq-caption"
  }, "31 oct"))));
}
window.PartnerCTA = PartnerCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/PartnerCTA.jsx", error: String((e && e.message) || e) }); }

})();
