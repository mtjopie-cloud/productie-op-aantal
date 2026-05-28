const producten = [
  ["Colli Solidaris 2024 (x19)", "19782", 23],
  ["Colli Solidaris 2024 (x8)", "21782", 55],
  ["Assortiment Gebak 1st x 10 (x6)", "8726", 180],
  ["Gebak Mix Arioso 10st (x12)", "49728", 95],
  ["28 Moments 1st x 28 (x6)", "8730", 65],
  ["Assortiment Wafels 10st (x9)", "7727", 125],
  ["New Box Mix 1st x 360 (x1) gratis WFL + Gadget 2025", "11724", 170],
  ["New Luxe Assorti 1st x 210 (x1)", "10724", 455],
  ["Biscoff & Mehr 3-Mix 1st x 160 (x1) DACH", "71725", 600],
  ["New Assorti 1st x 210 (x1) 2022", "12725", 580],
  ["Mini Amandélice 1st x 6 (x12) STA 2022 FR", "10056", 130],
  ["Dinosaurus Mini Granen 25g x 6 (x12)", "5460", 140],
  ["Dinosaurus Mini Granen 25g (x60)", "60460", 270],
  ["Dinosaurus Mini Chocolade 25g x 6 (x12)", "5480", 140],
  ["Dinosaurus Mini Melkchocolade 25g x 6 (x12)", "5410", 220],
  ["Mini Luikse Wafel 1st x 6 (x12)", "80242", 130],
  ["Mini Luikse Wafel Melk 1st x 6 (x12)", "80243", 130],
  ["Biscoff Spec. Sinterklaas 25g x 6 (x16)", "6622", 100],
  ["Biscoff Spec. Sinterklaas Choco 25g x 6 (x16)", "7622", 100],
  ["Mini KLM Choco ALDI", "56622", 100],
  ["Amico 1st (x48)", "2006", 240],
  ["Amico 1st x 6 (x8)", "1006", 240],
  ["Cake Donut Choco Mania 1st (x48)", "3021", 270],
  ["Cake Donut Choco Mania 1st x 6 (x8)", "3026", 270],
  ["Cake Donut Choco Mania 1st x 6 (x8) FR", "83026", 270],
  ["Cake Donut Pinkylicious 1st x 6 (x8)", "2026", 270],
  ["Cake Donut Pinkylicious 1st x 6 (x8) FR", "82026", 270],
  ["Cake Donut Zebra Kiss 1st x 6 (x8)", "1026", 270],
  ["Cake Donut Zebra Kiss 1st x 6 (x8) FR", "81026", 270],
  ["Zebra Chocolate 1st (x48)", "1075", 270],
  ["Zebra Chocolate 1st x 6 (x8)", "8077", 265],
  ["Zebra Milky Cream 1st x 6 (x8)", "20077", 270],
  ["Zebra 1st (x48)", "1044", 270],
  ["SDA Zebra 1st (x144)", "4998", 90],
  ["Zebra 1st x 6 (x8)", "8043", 265],
  ["Mini Frangipane 1st (x36)", "52", 440],
  ["SDA Mini Amandélice Lotus Logo 1st (x176)", "29999", 85],
  ["SDA Mini Frangipane 1st (x176)", "85998", 85],
  ["Mini Frangipane 1st x 6 (x12)", "1056", 210],
  ["Mini Frangipane  1st x 12 (x12)", "18056", 105],
  ["Frangipane 1st (x24)", "92", 630],
  ["SDA Frangipane 1st (x120)", "40999", 125],
  ["Frangipane 1st x 8 (x16)", "36092", 120],
  ["Frangipane 1st x 8 (x9)", "37092", 210],
  ["Frangipane 1st x 4 (x12)", "35091", 315],
  ["Amandélice 1st x 6 (x12) FR", "10091", 210],
  ["Carré Confituur 1st (x32)", "117", 130],
  ["Carré Confituur 1st x 6 (x9)", "116", 80],
  ["Mini Madeleine 1st (x60)", "2005", 360],
  ["Mini Madeleine 1st x 7 (x10)", "12005", 310],
  ["Madeleine 1st (x60)", "4", 390],
  ["SDA Madeleine 1st (x300)", "1999", 78],
  ["SDA Madeleine 1st (x300) Arioso", "84998", 78],
  ["Madeleine 12st (x18) Delhaize SG 2024", "50002", 110],
  ["Madeleine 12st (x22) CRF", "57002", 90],
  ["Madeleine 12st (x22) Everyday", "73002", 90],
  ["Madeleine 1st x 16 (x11)", "3003", 133],
  ["Madeleine 1st x 16 (x16)", "18003", 92],
  ["Madeleine 1st x 12 (x26) Arioso", "66002", 75],
  ["Madeleine 1st x 14 (x14) Belgix", "93002", 120],
  ["Mini Madeleine Aap 1st x 7 (x10) NL", "11005", 310],
  ["Madeleine Chocolade 1st (x60)", "1001", 390],
  ["Madeleine Chocolade 1st x 12 (x7)", "2001", 280],
  ["Madeleine Amandel 1st x 12 (x7)", "2007", 280],
  ["Mini KLM Aldi", "46622", 100],
  ["Marsepino meerstuks", "5097", 135],
  ["Marsepino 1st (x32)", "98", 250],
  ["Dinosaurus Mini Melkchocolade 25g x 6 (x12) Ottos CH", "63410", 140],
  ["Dinosaurus Mini Granen 25g x 6 (x12) Ottos CH", "63460", 140],
  ["SDA Cake Donut Pinkylicious 1st (x144)", "40996", 98],
  ["Dinosaurus Mini Melkchocolade 25g x 6 (x4) NL", "82410", 500],
  ["Dinosaurus Mini Melkchocolade 25g x 6 (x4) EU NL", "81410", 500],
  ["Cake Donut Pinkylicious 1st (x18)", "5021", 400],
  ["Biscoff Spec. Sinterklaas 25g x 6 (x16) T NL", "85622", 73],
  ["Cake Donut Halloween 1st x 6 (x8) FR", "84026", 270],
  ["Cake Donut Halloween 1st x 6 (x8)", "4026", 270],
  ["Favourite Moments 1st x 21 (x6)", "50730", 65],
  ["Favourite Moments 1st x 21 (x6) 25J CRF BE", "51730", 65],
  ["Favourite Moments 1st x 21 (x216) 25J CRF BE", "52730", 1.8],
  ["Dinosaurus Mini Granen 25g x 6 (x4) EU NL", "81460", 500],
  ["Dinosaurus Mini Granen 25g x 6 (x4) NL", "82460", 500],
  ["SDA Mini Madeleine 1st (x300)", "37996", 78],
  ["Frangipane 1st x 8 (x9) WINTER", "11092", 210],
  ["Madeleine 1st x 16 (x11) WINTER", "11003", 133],
  ["Frangipane 1st x 8 (x9) 2026 BE", "13092", 210],
  ["Madeleine 1st x 16 (x11) 2026", "13003", 133],
  ["Cake Donut Pinkylicious 1st (x48)", "6021", 280]
].map(([naam, artikel, kph]) => ({ naam, artikel, kph }));

const elements = {
  artikel: document.getElementById("artikel"),
  startTijd: document.getElementById("startTijd"),
  huidigeKartons: document.getElementById("huidigeKartons"),
  doelKartons: document.getElementById("doelKartons"),
  doorlooptijd: document.getElementById("doorlooptijd"),
  zoekterm: document.getElementById("zoekterm"),
  resetBtn: document.getElementById("resetBtn"),
  warning: document.getElementById("warning"),
  stopDoseren: document.getElementById("stopDoseren"),
  productNaam: document.getElementById("productNaam"),
  kph: document.getElementById("kph"),
  resterendeKartons: document.getElementById("resterendeKartons"),
  productietijd: document.getElementById("productietijd"),
  klaarVerpakking: document.getElementById("klaarVerpakking"),
  doorlooptijdResultaat: document.getElementById("doorlooptijdResultaat"),
  productTabel: document.getElementById("productTabel")
};

function toNumber(value) {
  if (value === "" || value === null || value === undefined) return 0;
  return Number(String(value).replace(",", "."));
}

function formatDuur(minuten) {
  if (!Number.isFinite(minuten)) return "-";
  const totaal = Math.max(0, Math.ceil(minuten));
  const uren = Math.floor(totaal / 60);
  const min = totaal % 60;
  if (uren === 0) return `${min} min`;
  if (min === 0) return `${uren} u`;
  return `${uren} u ${min} min`;
}

function formatUur(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "-";
  return date.toLocaleTimeString("nl-BE", { hour: "2-digit", minute: "2-digit" });
}

function getCurrentTimeInput() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function dateFromTimeInput(time) {
  const [h, m] = String(time || "00:00").split(":").map(Number);
  const d = new Date();
  d.setHours(h || 0, m || 0, 0, 0);
  return d;
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60_000);
}

function subtractMinutes(date, minutes) {
  return new Date(date.getTime() - minutes * 60_000);
}

function findProduct() {
  return producten.find((p) => p.artikel === elements.artikel.value.trim());
}

function bereken() {
  const product = findProduct();
  const gemaakt = toNumber(elements.huidigeKartons.value);
  const doel = toNumber(elements.doelKartons.value);
  const doorlooptijdMinuten = toNumber(elements.doorlooptijd.value);
  const kph = product?.kph || 0;
  const resterendeKartons = Math.max(0, doel - gemaakt);
  const resterendeProductieMinuten = kph > 0 ? (resterendeKartons / kph) * 60 : 0;
  const startMoment = dateFromTimeInput(elements.startTijd.value);
  const klaarVerpakking = addMinutes(startMoment, resterendeProductieMinuten);
  const stopDoseren = subtractMinutes(klaarVerpakking, doorlooptijdMinuten);
  const isKlaar = doel > 0 && gemaakt >= doel;
  const heeftInput = elements.artikel.value || elements.huidigeKartons.value || elements.doelKartons.value;

  elements.warning.classList.toggle("hidden", !(heeftInput && !product && elements.artikel.value.trim()));
  elements.stopDoseren.textContent = product && doel > 0 ? (isKlaar ? "Nu" : formatUur(stopDoseren)) : "--:--";
  elements.productNaam.textContent = product?.naam || "Nog geen geldig artikel";
  elements.kph.textContent = product ? String(product.kph).replace(".", ",") : "-";
  elements.resterendeKartons.textContent = product && doel > 0 ? resterendeKartons.toLocaleString("nl-BE") : "-";
  elements.productietijd.textContent = product && doel > 0 ? formatDuur(resterendeProductieMinuten) : "-";
  elements.klaarVerpakking.textContent = product && doel > 0 ? formatUur(klaarVerpakking) : "-";
  elements.doorlooptijdResultaat.textContent = formatDuur(doorlooptijdMinuten);
}

function renderTabel() {
  const q = elements.zoekterm.value.trim().toLowerCase();
  const filtered = (q
    ? producten.filter((p) => p.artikel.includes(q) || p.naam.toLowerCase().includes(q))
    : producten.slice(0, 8)
  ).slice(0, 12);

  elements.productTabel.innerHTML = "";
  filtered.forEach((p) => {
    const tr = document.createElement("tr");
    tr.className = "product-row";
    tr.innerHTML = `<td>${p.artikel}</td><td>${p.naam}</td><td class="right">${String(p.kph).replace(".", ",")}</td>`;
    tr.addEventListener("click", () => {
      elements.artikel.value = p.artikel;
      elements.zoekterm.value = "";
      renderTabel();
      bereken();
    });
    elements.productTabel.appendChild(tr);
  });
}

function reset() {
  elements.artikel.value = "";
  elements.huidigeKartons.value = "";
  elements.doelKartons.value = "";
  elements.doorlooptijd.value = "0";
  elements.zoekterm.value = "";
  elements.startTijd.value = getCurrentTimeInput();
  renderTabel();
  bereken();
}

Object.values(elements).forEach((el) => {
  if (el && el.tagName === "INPUT") {
    el.addEventListener("input", () => {
      if (el === elements.zoekterm) renderTabel();
      bereken();
    });
  }
});

elements.resetBtn.addEventListener("click", reset);

setInterval(() => {
  elements.startTijd.value = getCurrentTimeInput();
  bereken();
}, 1000);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

elements.startTijd.value = getCurrentTimeInput();
renderTabel();
bereken();
