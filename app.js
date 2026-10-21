let producten = [];
const ARTIKELEN_CACHE_KEY = "op-aantal-artikelen-v1";

function valideerArtikelen(data) {
  return Array.isArray(data) && data.length > 0 && data.every(p =>
    p && typeof p.naam === "string" && typeof p.artikel === "string" &&
    Number.isFinite(p.kph) && p.kph > 0
  );
}

async function laadArtikelen() {
  try {
    // Altijd eerst de actuele productlijst ophalen, onafhankelijk van de app-installatie.
    const response = await fetch("./artikelen.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Artikelen ophalen mislukt: " + response.status);
    const data = await response.json();
    if (!valideerArtikelen(data)) throw new Error("Ongeldige productlijst");
    producten = data;
    try { localStorage.setItem(ARTIKELEN_CACHE_KEY, JSON.stringify(data)); } catch (_) {}
  } catch (error) {
    // Zonder verbinding de laatst succesvol opgehaalde artikellijst gebruiken.
    try {
      const data = JSON.parse(localStorage.getItem(ARTIKELEN_CACHE_KEY) || "null");
      if (valideerArtikelen(data)) producten = data;
    } catch (_) {}
    if (!producten.length) console.warn("Geen artikellijst beschikbaar", error);
  }
  renderTabel();
  bereken();
}


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
laadArtikelen();

// Opnieuw ophalen wanneer de app na een tijdje terug in beeld komt.
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) laadArtikelen();
});
