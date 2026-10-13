import { useLayoutEffect, useMemo, useRef } from "react";
import { random, useCurrentFrame } from "remotion";

// Procedural night stadium, drawn on canvas each frame.
// The canvas is larger than the video frame so the camera can move over it.
export const STADIUM_W = 2400;
export const STADIUM_H = 1350;

const GREEN = "#00a651";
const DARK_GREEN = "#006b33";
const CX = STADIUM_W / 2;

type Fan = {
  x: number;
  y: number;
  s: number;
  shirt: string;
  skin: string;
  phase: number;
  jump: number;
  scarf: boolean;
};

const SHIRTS = [GREEN, GREEN, GREEN, "#ffffff", "#ffffff", DARK_GREEN, "#0d3d22"];
const SKINS = ["#e0b08a", "#c68a63", "#8d5a3b", "#f1c9a5", "#a8714f"];

// Curved stand rows: y grows toward the edges to suggest a bowl.
const rowY = (row: number, x: number) => {
  const base = 330 + row * 13.5;
  const d = (x - CX) / CX;
  return base + d * d * 70;
};

const STAND_ROWS = 34;

const buildFans = (): Fan[] => {
  const fans: Fan[] = [];
  for (let r = 0; r < STAND_ROWS; r++) {
    const s = 3 + r * 0.17;
    const spacing = s * 2.5;
    for (let x = -20; x < STADIUM_W + 20; x += spacing) {
      const key = `${r}-${x}`;
      const jx = (random(`jx${key}`) - 0.5) * spacing * 0.6;
      // Some blocks of the stand jump together, like an ultras section.
      const section = Math.floor((x + r * 4) / 260);
      const jumpingSection = random(`sec${section}`) > 0.45;
      fans.push({
        x: x + jx,
        y: rowY(r, x),
        s,
        shirt: SHIRTS[Math.floor(random(`sh${key}`) * SHIRTS.length)],
        skin: SKINS[Math.floor(random(`sk${key}`) * SKINS.length)],
        phase: jumpingSection ? section * 0.7 : random(`ph${key}`) * Math.PI * 2,
        jump: jumpingSection ? 1 : 0.25,
        scarf: random(`sc${key}`) > 0.86,
      });
    }
  }
  return fans;
};

const drawFlag = (
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  w: number,
  h: number,
  t: number,
  phase: number,
) => {
  // pole
  ctx.strokeStyle = "#cfd6d2";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(px, py + h * 1.6);
  ctx.lineTo(px, py - 6);
  ctx.stroke();
  const steps = 24;
  const wave = (u: number) => Math.sin(u * 5 - t * 0.18 + phase) * h * 0.12 * u;
  const stripe = (from: number, to: number, color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const u = i / steps;
      ctx.lineTo(px + u * w, py + from * h + wave(u));
    }
    for (let i = steps; i >= 0; i--) {
      const u = i / steps;
      ctx.lineTo(px + u * w, py + to * h + wave(u));
    }
    ctx.closePath();
    ctx.fill();
  };
  stripe(0, 1 / 3, GREEN);
  stripe(1 / 3, 2 / 3, "#ffffff");
  stripe(2 / 3, 1, GREEN);
};

export const Stadium: React.FC = () => {
  const frame = useCurrentFrame();
  const ref = useRef<HTMLCanvasElement>(null);
  const fans = useMemo(buildFans, []);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;
    const t = frame;
    ctx.clearRect(0, 0, STADIUM_W, STADIUM_H);

    // Night sky
    const sky = ctx.createLinearGradient(0, 0, 0, 400);
    sky.addColorStop(0, "#030a10");
    sky.addColorStop(1, "#0c2a22");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, STADIUM_W, 420);

    // Roof edge
    ctx.fillStyle = "#11171a";
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.quadraticCurveTo(CX, 200, STADIUM_W, 250);
    ctx.lineTo(STADIUM_W, 300);
    ctx.quadraticCurveTo(CX, 255, 0, 300);
    ctx.fill();

    // Stands background (seats)
    const standGrad = ctx.createLinearGradient(0, 290, 0, 840);
    standGrad.addColorStop(0, "#0a2416");
    standGrad.addColorStop(1, "#0f3a22");
    ctx.fillStyle = standGrad;
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.quadraticCurveTo(CX, 255, STADIUM_W, 300);
    ctx.lineTo(STADIUM_W, 900);
    ctx.lineTo(0, 900);
    ctx.fill();

    // Crowd
    for (const f of fans) {
      const bob = Math.max(0, Math.sin(t * 0.32 + f.phase)) * f.s * 1.6 * f.jump;
      const y = f.y - bob;
      ctx.fillStyle = f.shirt;
      ctx.fillRect(f.x - f.s * 0.9, y, f.s * 1.8, f.s * 2.2);
      ctx.fillStyle = f.skin;
      ctx.beginPath();
      ctx.arc(f.x, y - f.s * 0.5, f.s * 0.7, 0, Math.PI * 2);
      ctx.fill();
      if (f.scarf) {
        // scarf held up above the head, swinging
        const sw = Math.sin(t * 0.2 + f.phase) * f.s;
        ctx.fillStyle = (Math.floor(f.x) % 2 === 0) ? "#ffffff" : GREEN;
        ctx.fillRect(f.x - f.s * 1.8 + sw, y - f.s * 2.6, f.s * 3.6, f.s * 0.9);
      }
    }

    // Phone lights / camera flashes twinkling in the crowd
    for (let i = 0; i < 140; i++) {
      const life = (t + random(`fl${i}`) * 90) % 90;
      if (life > 6) continue;
      const fx = random(`fx${i}`) * STADIUM_W;
      const fy = rowY(random(`fy${i}`) * STAND_ROWS, fx) - 6;
      const a = 1 - life / 6;
      const g = ctx.createRadialGradient(fx, fy, 0, fx, fy, 18);
      g.addColorStop(0, `rgba(255,255,255,${a})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(fx - 18, fy - 18, 36, 36);
    }

    // Flags waving in the stands
    const flags: [number, number, number][] = [
      [180, 420, 0],
      [560, 470, 1.3],
      [930, 395, 2.1],
      [1380, 400, 0.6],
      [1760, 460, 2.7],
      [2140, 430, 1.8],
    ];
    for (const [fx, fy, ph] of flags) {
      drawFlag(ctx, fx, fy, 130, 80, t, ph);
    }

    // Green flares with drifting smoke
    const flares = [320, 760, 1640, 2060];
    flares.forEach((fx, i) => {
      const fy = rowY(26, fx);
      const flick = 0.75 + 0.25 * Math.sin(t * 0.9 + i * 2);
      const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, 140 * flick);
      glow.addColorStop(0, "rgba(180,255,200,0.95)");
      glow.addColorStop(0.15, "rgba(40,230,110,0.75)");
      glow.addColorStop(1, "rgba(0,166,81,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(fx - 160, fy - 160, 320, 320);
      for (let p = 0; p < 10; p++) {
        const life = ((t * 0.6 + p * 22 + i * 13) % 220) / 220;
        const sx = fx + Math.sin(p * 1.7 + t * 0.01) * 40 + life * 120;
        const sy = fy - life * 300;
        const r = 50 + life * 160;
        const sm = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
        sm.addColorStop(0, `rgba(60,200,110,${0.22 * (1 - life)})`);
        sm.addColorStop(1, "rgba(60,200,110,0)");
        ctx.fillStyle = sm;
        ctx.fillRect(sx - r, sy - r, r * 2, r * 2);
      }
    });

    // LED advertising boards
    const ledY = 860;
    ctx.fillStyle = "#041a0d";
    ctx.fillRect(0, ledY, STADIUM_W, 56);
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, ledY, STADIUM_W, 56);
    ctx.clip();
    ctx.font = "900 40px Rubik";
    ctx.textBaseline = "middle";
    const msg = "★ מזל טוב עמית ★ מכבי חיפה ";
    const msgW = ctx.measureText(msg).width;
    const offset = (t * 4) % msgW;
    for (let x = -msgW + offset; x < STADIUM_W; x += msgW) {
      ctx.fillStyle = Math.floor(x / msgW) % 2 === 0 ? "#ffffff" : "#3dff8f";
      ctx.fillText(msg, x, ledY + 30);
    }
    ctx.restore();
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    for (let y = ledY; y < ledY + 56; y += 4) ctx.fillRect(0, y, STADIUM_W, 1);

    // Pitch with mowing stripes in perspective
    const pitchTop = 916;
    const stripes = 14;
    for (let i = 0; i < stripes; i++) {
      const x0 = (i / stripes) * STADIUM_W;
      const x1 = ((i + 1) / stripes) * STADIUM_W;
      const spread = 1.9;
      ctx.fillStyle = i % 2 === 0 ? "#1f8f3a" : "#187a30";
      ctx.beginPath();
      ctx.moveTo(x0, pitchTop);
      ctx.lineTo(x1, pitchTop);
      ctx.lineTo(CX + (x1 - CX) * spread, STADIUM_H);
      ctx.lineTo(CX + (x0 - CX) * spread, STADIUM_H);
      ctx.fill();
    }
    ctx.strokeStyle = "rgba(255,255,255,0.85)";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, pitchTop + 40);
    ctx.lineTo(STADIUM_W, pitchTop + 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(CX, STADIUM_H + 60, 520, 200, 0, Math.PI, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(CX, pitchTop + 40);
    ctx.lineTo(CX, STADIUM_H);
    ctx.stroke();

    // Floodlights
    const lights = [260, 860, 1540, 2140];
    lights.forEach((lx, i) => {
      const ly = 120 + (i % 2) * 30;
      const pulse = 0.92 + 0.08 * Math.sin(t * 0.05 + i);
      // light cone down onto the pitch
      const cone = ctx.createLinearGradient(lx, ly, CX, STADIUM_H);
      cone.addColorStop(0, `rgba(230,255,240,${0.16 * pulse})`);
      cone.addColorStop(1, "rgba(230,255,240,0)");
      ctx.fillStyle = cone;
      ctx.beginPath();
      ctx.moveTo(lx - 40, ly);
      ctx.lineTo(lx + 40, ly);
      ctx.lineTo(CX + (lx - CX) * 0.4 + 500, STADIUM_H);
      ctx.lineTo(CX + (lx - CX) * 0.4 - 500, STADIUM_H);
      ctx.fill();
      const halo = ctx.createRadialGradient(lx, ly, 0, lx, ly, 240);
      halo.addColorStop(0, `rgba(255,255,255,${pulse})`);
      halo.addColorStop(0.12, "rgba(220,255,235,0.7)");
      halo.addColorStop(1, "rgba(200,255,220,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(lx - 240, ly - 240, 480, 480);
      ctx.fillStyle = "#ffffff";
      for (let c = 0; c < 4; c++) {
        for (let rr = 0; rr < 2; rr++) {
          ctx.fillRect(lx - 34 + c * 18, ly - 12 + rr * 14, 14, 10);
        }
      }
    });
  }, [frame, fans]);

  return (
    <canvas
      ref={ref}
      width={STADIUM_W}
      height={STADIUM_H}
      style={{ width: STADIUM_W, height: STADIUM_H, display: "block" }}
    />
  );
};
