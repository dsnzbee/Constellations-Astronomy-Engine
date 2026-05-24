// ADD THIS TO YOUR CONSTELLATIONS.JS IF YOU DO WANT THE LINES



// ─────────────────────────────────────────────────────────────
// CONSTELLATION LINES
// Format: [ [starName, index], [starName, index] ]
// ─────────────────────────────────────────────────────────────
window.CONSTELLATION_LINES = [

  // ── Orion ─────────────────────────────────────────────────
  // Belt
  [["Alnitak",    4], ["Alnilam",   3]],
  [["Alnilam",    3], ["Mintaka",   5]],
  // Shoulders
  [["Betelgeuse", 1], ["Bellatrix", 2]],
  // Belt → Shoulders
  [["Alnitak",    4], ["Betelgeuse",1]],
  [["Mintaka",    5], ["Bellatrix", 2]],
  // Belt → Feet
  [["Alnitak",    4], ["Saiph",     6]],
  [["Mintaka",    5], ["Rigel",     0]],

  // ── Ursa Major (Big Dipper) ───────────────────────────────
  [["Dubhe",   8],  ["Merak",   11]],
  [["Merak",  11],  ["Phecda",  12]],
  [["Phecda", 12],  ["Megrez",  13]],
  [["Megrez", 13],  ["Alioth",   7]],
  [["Alioth",  7],  ["Mizar",   10]],
  [["Mizar",  10],  ["Alkaid",   9]],
  [["Megrez", 13],  ["Dubhe",    8]],

  // ── Cassiopeia (W shape) ──────────────────────────────────
  [["Caph",      15], ["Schedar",   14]],
  [["Schedar",   14], ["Gamma Cas", 16]],
  [["Gamma Cas", 16], ["Ruchbah",   17]],
  [["Ruchbah",   17], ["Segin",     18]],

  // ── Leo ───────────────────────────────────────────────────
  // Sickle (head)
  [["Regulus",   19], ["Eta Leonis",24]],
  [["Eta Leonis",24], ["Algieba",   20]],
  [["Algieba",   20], ["Zosma",     22]],
  // Body
  [["Zosma",     22], ["Denebola",  21]],
  [["Denebola",  21], ["Chertan",   23]],
  [["Chertan",   23], ["Regulus",   19]],

  // ── Scorpius ──────────────────────────────────────────────
  // Head
  [["Graffias",  31], ["Dschubba",  28]],
  [["Dschubba",  28], ["Antares",   25]],
  // Body
  [["Antares",   25], ["Epsilon Sco",29]],
  [["Epsilon Sco",29],["Shaula",    26]],
  [["Shaula",    26], ["Lesath",    30]],
  [["Lesath",    30], ["Sargas",    27]],

  // ── Taurus ────────────────────────────────────────────────
  [["Aldebaran", 32], ["Ain",       35]],
  [["Aldebaran", 32], ["Elnath",    33]],
  [["Ain",       35], ["Alcyone",   34]],

  // ── Gemini ────────────────────────────────────────────────
  [["Castor",    37], ["Pollux",    36]],
  [["Castor",    37], ["Mebsuda",   40]],
  [["Pollux",    36], ["Alhena",    38]],
  [["Mebsuda",   40], ["Tejat",     39]],
  [["Mebsuda",   40], ["Alhena",    38]],

  // ── Virgo ─────────────────────────────────────────────────
  [["Spica",       41], ["Heze",       45]],
  [["Heze",        45], ["Porrima",    42]],
  [["Porrima",     42], ["Minelauva",  43]],
  [["Minelauva",   43], ["Vindemiatrix",44]],
  [["Porrima",     42], ["Spica",      41]],

  // ── Aquila ────────────────────────────────────────────────
  [["Tarazed",   47], ["Altair",    46]],
  [["Altair",    46], ["Alshain",   48]],

  // ── Cygnus (Northern Cross) ───────────────────────────────
  // Vertical beam
  [["Deneb",     49], ["Sadr",      50]],
  [["Sadr",      50], ["Albireo",   53]],
  // Horizontal beam
  [["Delta Cyg", 52], ["Sadr",      50]],
  [["Sadr",      50], ["Gienah Cyg",51]],

  // ── Lyra ──────────────────────────────────────────────────
  [["Vega",      54], ["Sheliak",   55]],
  [["Sheliak",   55], ["Sulafat",   56]],
  [["Sulafat",   56], ["Vega",      54]],

  // ── Perseus ───────────────────────────────────────────────
  [["Mirfak",    57], ["Delta Per", 61]],
  [["Delta Per", 61], ["Epsilon Per",60]],
  [["Epsilon Per",60],["Algol",     58]],
  [["Mirfak",    57], ["Zeta Per",  59]],

  // ── Auriga ────────────────────────────────────────────────
  [["Capella",   62], ["Menkalinan",63]],
  [["Menkalinan",63], ["Theta Aur", 64]],
  [["Theta Aur", 64], ["Iota Aur",  65]],
  [["Iota Aur",  65], ["Capella",   62]],
  [["Elnath",    33], ["Theta Aur", 64]], // shared star with Taurus

  // ── Boötes ────────────────────────────────────────────────
  [["Arcturus",  66], ["Muphrid",   68]],
  [["Arcturus",  66], ["Izar",      67]],
  [["Izar",      67], ["Seginus",   69]],

  // ── Crux (Southern Cross) ─────────────────────────────────
  [["Gacrux",    75], ["Acrux",     74]], // vertical
  [["Mimosa",    76], ["Delta Cru", 77]], // horizontal

  // ── Canis Major ───────────────────────────────────────────
  [["Sirius",    78], ["Mirzam",    81]],
  [["Sirius",    78], ["Wezen",     80]],
  [["Wezen",     80], ["Adhara",    79]],

  // ── Sagittarius (Teapot asterism) ─────────────────────────
  [["Kaus Australis",86], ["Kaus Media",   89]],
  [["Kaus Media",    89], ["Kaus Borealis",90]],
  [["Kaus Australis",86], ["Ascella",      88]],
  [["Ascella",       88], ["Nunki",        87]],
  [["Kaus Media",    89], ["Ascella",      88]],

  // ── Summer Triangle ───────────────────────────────────────
  // (Vega–Altair–Deneb, already connected through their constellations above,
  //  but you can add explicit cross-lines here if desired)
];
