// OPTIONAL. THIS CODE WILL ADD LINES AND CONNECT THE CONSTELLATIONS ADD THIS TO YOUR MAIN SCRIPT

function drawConstellationLine(x1, y1, x2, y2) {
  const ctx = sctx;
  ctx.save();
  ctx.globalAlpha = 0.45;
  ctx.strokeStyle = "#e8505a";   
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 5]);
  ctx.shadowColor = "rgba(255, 80, 90, 0.6)";
  ctx.shadowBlur = 4;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

// ── Constellation lines ──
  for (const seg of CONSTELLATION_LINES) {
    if (!Array.isArray(seg) || seg.length !== 2) continue;
    const [a, b] = seg;
    if (!Array.isArray(a) || !Array.isArray(b)) continue;

    const starA = STAR_CATALOG[a[1]];
    const starB = STAR_CATALOG[b[1]];
    if (!starA || !starB) continue;

    const eqA  = starToEquator(starA);
    const eqB  = starToEquator(starB);
    const horA = Astronomy.Horizon(now, state.observer, eqA.ra, eqA.dec, "normal");
    const horB = Astronomy.Horizon(now, state.observer, eqB.ra, eqB.dec, "normal");

    if (horA.altitude < -2 && horB.altitude < -2) continue;

    const posA = project(horizonToVector(horA.azimuth, horA.altitude), basis);
    const posB = project(horizonToVector(horB.azimuth, horB.altitude), basis);
    if (!posA || !posB) continue;

    drawConstellationLine(posA.x, posA.y, posB.x, posB.y);
    conLines++;
  }