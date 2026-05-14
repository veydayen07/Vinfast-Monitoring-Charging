const provinceMap: Record<string, string> = {
  // Aceh
  aceh: "Aceh",

  // Sumatera
  "sumatera utara": "Sumatera Utara",
  "north sumatra": "Sumatera Utara",

  "sumatera barat": "Sumatera Barat",
  "west sumatra": "Sumatera Barat",

  riau: "Riau",

  "kepulauan riau": "Kepulauan Riau",
  "riau islands": "Kepulauan Riau",

  jambi: "Jambi",

  "sumatera selatan": "Sumatera Selatan",
  "south sumatra": "Sumatera Selatan",

  "kepulauan bangka belitung": "Kepulauan Bangka Belitung",
  "bangka belitung": "Kepulauan Bangka Belitung",

  bengkulu: "Bengkulu",

  lampung: "Lampung",

  // Jakarta
  "dki jakarta": "DKI Jakarta",
  "daerah khusus ibukota jakarta": "DKI Jakarta",
  jakarta: "DKI Jakarta",

  // Jawa
  "jawa barat": "Jawa Barat",
  "west java": "Jawa Barat",

  "jawa tengah": "Jawa Tengah",
  "central java": "Jawa Tengah",

  "di yogyakarta": "DI Yogyakarta",
  "daerah istimewa yogyakarta": "DI Yogyakarta",
  "special region of yogyakarta": "DI Yogyakarta",

  "jawa timur": "Jawa Timur",
  "east java": "Jawa Timur",

  banten: "Banten",

  // Bali & Nusa Tenggara
  bali: "Bali",

  "nusa tenggara barat": "Nusa Tenggara Barat",
  "west nusa tenggara": "Nusa Tenggara Barat",
  ntb: "Nusa Tenggara Barat",

  "nusa tenggara timur": "Nusa Tenggara Timur",
  "east nusa tenggara": "Nusa Tenggara Timur",
  ntt: "Nusa Tenggara Timur",

  // Kalimantan
  "kalimantan barat": "Kalimantan Barat",
  "west kalimantan": "Kalimantan Barat",

  "kalimantan tengah": "Kalimantan Tengah",
  "central kalimantan": "Kalimantan Tengah",

  "kalimantan selatan": "Kalimantan Selatan",
  "south kalimantan": "Kalimantan Selatan",

  "kalimantan timur": "Kalimantan Timur",
  "east kalimantan": "Kalimantan Timur",

  "kalimantan utara": "Kalimantan Utara",
  "north kalimantan": "Kalimantan Utara",

  // Sulawesi
  "sulawesi utara": "Sulawesi Utara",
  "north sulawesi": "Sulawesi Utara",

  gorontalo: "Gorontalo",

  "sulawesi tengah": "Sulawesi Tengah",
  "central sulawesi": "Sulawesi Tengah",

  "sulawesi barat": "Sulawesi Barat",
  "west sulawesi": "Sulawesi Barat",

  "sulawesi selatan": "Sulawesi Selatan",
  "south sulawesi": "Sulawesi Selatan",

  "sulawesi tenggara": "Sulawesi Tenggara",
  "southeast sulawesi": "Sulawesi Tenggara",

  // Maluku
  maluku: "Maluku",

  "maluku utara": "Maluku Utara",
  "north maluku": "Maluku Utara",

  // Papua
  papua: "Papua",

  "papua barat": "Papua Barat",
  "west papua": "Papua Barat",

  "papua selatan": "Papua Selatan",
  "south papua": "Papua Selatan",

  "papua tengah": "Papua Tengah",
  "central papua": "Papua Tengah",

  "papua pegunungan": "Papua Pegunungan",
  "highland papua": "Papua Pegunungan",

  "papua barat daya": "Papua Barat Daya",
  "southwest papua": "Papua Barat Daya",
};

const getProvinces = (address: string): string => {
  const lowerAddress = address.toLowerCase();
  for (const key in provinceMap) {
    if (lowerAddress.includes(key)) {
      return provinceMap[key];
    }
  }

  return "Unknown Province";
};

export { getProvinces };
