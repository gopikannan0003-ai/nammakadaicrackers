/* Top navbar (Home, Pricelist, About, Contact) for pages that don't load style.css.
   Add <script src="nav.js"></script> before </body>. */
(function () {
  /* ===== EDIT HERE ===== */
  var LOGO = "images/nammakadailogo.jpg";
  var LINKS = [
    { label: "Home",      href: "index.html" },
    { label: "Pricelist", href: "pricelist.html" },
    { label: "About",     href: "index.html#about" },
    { label: "Contact",   href: "index.html#contact" }
  ];
  /* ===================== */

  var here = location.pathname.split("/").pop() || "index.html";
  var css = document.createElement("style");
  css.textContent =
    "#sn{background:#000;position:relative;z-index:50;font-family:system-ui,Arial,sans-serif}" +
    "#sn .in{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;max-width:1100px;margin:auto}" +
    "#sn .br{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-weight:800;line-height:1.1}" +
    "#sn .br img{width:42px;height:42px;border-radius:50%;object-fit:cover;background:#222}" +
    "#sn .br small{display:block;color:#fdb913;font-size:.7rem;letter-spacing:.15em}" +
    "#sn .ls{display:none;gap:6px}" +
    "#sn a.l{color:#fff;text-decoration:none;font-weight:700;padding:9px 14px;border-radius:8px}" +
    "#sn a.l.on{background:#fdb913;color:#111}" +
    "#sn button{background:none;border:0;color:#fff;font-size:1.7rem;line-height:1}" +
    "#sn .mm{display:none;flex-direction:column;padding:4px 16px 12px}" +
    "#sn .mm.open{display:flex}" +
    "@media(min-width:768px){#sn .ls{display:flex}#sn button,#sn .mm.open{display:none}}";
  document.head.appendChild(css);

  var items = LINKS.map(function (l) {
    var on = l.href.split("/").pop() === here ? " on" : "";
    return '<a class="l' + on + '" href="' + l.href + '">' + l.label + "</a>";
  }).join("");

  var bar = document.createElement("header");
  bar.id = "sn";
  bar.innerHTML =
    '<div class="in"><a class="br" href="index.html"><img src="' + LOGO + '" alt="Logo">' +
    "<span>CRACKERS<small>STORE</small></span></a>" +
    '<nav class="ls">' + items + "</nav>" +
    '<button aria-label="Menu" id="snb">☰</button></div>' +
    '<nav class="mm" id="snm">' + items + "</nav>";
  document.body.insertBefore(bar, document.body.firstChild);

  document.getElementById("snb").onclick = function () {
    document.getElementById("snm").classList.toggle("open");
  };
})();