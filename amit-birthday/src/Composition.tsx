import { loadFont } from "@remotion/fonts";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Sequence,
  interpolate,
  random,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Stadium, STADIUM_H, STADIUM_W } from "./Stadium";

const fontFamily = "Rubik";
loadFont({
  family: fontFamily,
  url: staticFile("Rubik-Black.ttf"),
  weight: "900",
});

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

const GREEN = "#00c060";

// Each line is a list of words; words marked with * are drawn in green.
type Slide = { lines: string[][]; duration: number; style: 0 | 1 | 2 | 3 };

const INTRO = 24;
const SLIDES: Slide[] = [
  { lines: [["*עמית"], ["האהוב", "*שלנו"]], duration: 105, style: 0 },
  { lines: [["שתהיה", "לך", "*שנה"], ["מלאה", "*ריגושים"]], duration: 110, style: 1 },
  { lines: [["שנה", "של", "*אהבה,"], ["שנה", "של", "*חיוכים"]], duration: 110, style: 2 },
  {
    lines: [
      ["מאיתנו", "*באהבה"],
      ["אבא,", "אמא,", "עידו,", "ענבר"],
      ["וכל", "שאר", "המשפחה", "*המורחבת"],
    ],
    duration: 330,
    style: 3,
  },
];

const starts = SLIDES.reduce<number[]>(
  (acc, s, i) => [...acc, i === 0 ? INTRO : acc[i - 1] + SLIDES[i - 1].duration],
  [],
);
const TOTAL = starts[starts.length - 1] + SLIDES[SLIDES.length - 1].duration;

export const MyComposition = () => {
  return (
    <Composition
      id="AmitBirthday"
      component={AmitBirthday}
      durationInFrames={TOTAL}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

// Slow dolly across the stadium, plus a punch-in on every text change.
const Camera: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fit = WIDTH / STADIUM_W;

  const t = frame / TOTAL;
  let zoom = interpolate(t, [0, 1], [1.32, 1.1], {
    easing: Easing.inOut(Easing.cubic),
  });
  const panX = interpolate(t, [0, 0.55, 1], [-170, 110, 0], {
    easing: Easing.inOut(Easing.sin),
  });
  const panY = interpolate(t, [0, 1], [70, -10]);
  for (const s of starts) {
    const p = spring({ frame: frame - s, fps, config: { damping: 9, stiffness: 120 } });
    const out = spring({
      frame: frame - s - 14,
      fps,
      config: { damping: 200 },
    });
    zoom += 0.05 * (p - out);
  }
  // Handheld shake
  const shakeX = Math.sin(frame * 0.13) * 4 + Math.sin(frame * 0.37) * 2;
  const shakeY = Math.cos(frame * 0.11) * 3 + Math.sin(frame * 0.29) * 2;
  const rot = Math.sin(frame * 0.021) * 0.6;

  const scale = fit * zoom;
  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#020806" }}>
      <div
        style={{
          position: "absolute",
          left: WIDTH / 2,
          top: HEIGHT / 2,
          width: STADIUM_W,
          height: STADIUM_H,
          transformOrigin: "0 0",
          transform: `rotate(${rot}deg) scale(${scale}) translate(${-STADIUM_W / 2 + panX + shakeX}px, ${-STADIUM_H / 2 + panY + shakeY}px)`,
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

const Word: React.FC<{
  text: string;
  index: number;
  count: number;
  style: Slide["style"];
  duration: number;
  seed: string;
}> = ({ text, index, count, style, duration, seed }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const green = text.startsWith("*");
  const word = green ? text.slice(1) : text;
  const isLast = style === 3;

  const delay = 6 + index * (isLast ? 5 : 4);
  const enter = spring({
    frame: frame - delay,
    fps,
    config: { damping: 11, stiffness: 140, mass: 0.8 },
  });
  const r = random(seed) * 2 - 1;

  let tx = 0;
  let ty = 0;
  let scale = 1;
  let rotZ = 0;
  let rotX = 0;
  let blur = 0;
  if (style === 0 || style === 3) {
    // Slam in from the camera
    scale = interpolate(enter, [0, 1], [3.2, 1]);
    rotZ = interpolate(enter, [0, 1], [r * 18, 0]);
    blur = interpolate(enter, [0, 1], [24, 0]);
  } else if (style === 1) {
    // Flip up from below
    ty = interpolate(enter, [0, 1], [140, 0]);
    rotX = interpolate(enter, [0, 1], [-95, 0]);
    blur = interpolate(enter, [0, 1], [10, 0]);
  } else {
    // Whip in from the side
    tx = interpolate(enter, [0, 1], [(index % 2 === 0 ? 1 : -1) * 700, 0]);
    rotZ = interpolate(enter, [0, 1], [r * 30, 0]);
    blur = interpolate(enter, [0, 1], [30, 0]);
  }
  const opacity = interpolate(enter, [0, 0.35], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Exit: words blast out toward the camera, last word first.
  let exitOpacity = 1;
  if (!isLast) {
    const exitStart = duration - 14 + (count - 1 - index) * 1.5;
    const ex = interpolate(frame, [exitStart, exitStart + 11], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.in(Easing.cubic),
    });
    scale *= 1 + ex * 1.4;
    ty += -ex * 60 * (1 + r);
    tx += ex * r * 120;
    blur += ex * 26;
    exitOpacity = 1 - ex;
  }

  // Thick outline + glow keeps text readable against the busy stadium.
  const outline = green ? "#ffffff" : "#004d24";
  const stroke = green ? 3 : 5;
  return (
    <span
      style={{
        display: "inline-block",
        margin: "0 0.16em",
        color: green ? GREEN : "#ffffff",
        WebkitTextStroke: `${stroke}px ${outline}`,
        paintOrder: "stroke fill",
        textShadow: green
          ? "0 0 26px rgba(0,255,120,0.55), 0 8px 0 #003d1c, 0 14px 30px rgba(0,0,0,0.85)"
          : "0 0 22px rgba(0,200,100,0.6), 0 8px 0 #00692f, 0 14px 30px rgba(0,0,0,0.85)",
        transform: `perspective(900px) translate(${tx}px, ${ty}px) scale(${scale}) rotateZ(${rotZ}deg) rotateX(${rotX}deg)`,
        filter: blur > 0.3 ? `blur(${blur}px)` : undefined,
        opacity: opacity * exitOpacity,
      }}
    >
      {word}
    </span>
  );
};

const LightSweep: React.FC = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [2, 22], [-40, 140], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const flash = interpolate(frame, [0, 3, 14], [0, 0.55, 0], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(160,255,200,1) 0%, rgba(0,192,96,0.4) 35%, rgba(0,0,0,0) 70%)",
          opacity: flash,
          mixBlendMode: "screen",
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(105deg, transparent ${x - 12}%, rgba(255,255,255,0.0) ${x - 6}%, rgba(200,255,220,0.5) ${x}%, rgba(255,255,255,0) ${x + 6}%, transparent ${x + 12}%)`,
          mixBlendMode: "screen",
        }}
      />
    </AbsoluteFill>
  );
};

const Confetti: React.FC = () => {
  const frame = useCurrentFrame();
  const pieces = Array.from({ length: 140 }, (_, i) => {
    const x0 = random(`cx${i}`) * WIDTH;
    const speed = 3 + random(`cs${i}`) * 5;
    const delay = random(`cd${i}`) * 60;
    const f = frame - delay;
    if (f < 0) return null;
    const y = -40 + f * speed;
    if (y > HEIGHT + 40) return null;
    const x = x0 + Math.sin(f * 0.08 + i) * 50;
    const rot = f * (4 + random(`cr${i}`) * 8);
    const color = random(`cc${i}`) > 0.5 ? "#ffffff" : GREEN;
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: 14,
          height: 22,
          backgroundColor: color,
          transform: `rotate(${rot}deg) rotateX(${rot * 1.3}deg)`,
          opacity: 0.9,
        }}
      />
    );
  });
  return <AbsoluteFill>{pieces}</AbsoluteFill>;
};

const SlideText: React.FC<{ slide: Slide; slideIndex: number }> = ({
  slide,
  slideIndex,
}) => {
  const frame = useCurrentFrame();
  const isLast = slide.style === 3;
  const words = slide.lines.flat();
  // Final message keeps breathing with a slow push-in.
  const hold = isLast
    ? interpolate(frame, [40, slide.duration], [1, 1.12], {
        extrapolateLeft: "clamp",
        easing: Easing.out(Easing.quad),
      })
    : interpolate(frame, [20, slide.duration - 14], [1, 1.04], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
  const fontSize = isLast ? 104 : 168;
  let wordIndex = 0;
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
        fontFamily,
        fontWeight: 900,
        fontSize,
        lineHeight: 1.18,
        textAlign: "center",
      }}
    >
      <div style={{ transform: `scale(${hold})` }}>
        {slide.lines.map((line, li) => (
          <div
            key={li}
            style={{
              whiteSpace: "nowrap",
              fontSize: isLast && li === 0 ? fontSize * 1.25 : undefined,
            }}
          >
            {line.map((w) => {
              const i = wordIndex++;
              return (
                <Word
                  key={i}
                  text={w}
                  index={i}
                  count={words.length}
                  style={slide.style}
                  duration={slide.duration}
                  seed={`${slideIndex}-${i}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const AmitBirthday: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 18], [1, 0], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [TOTAL - 20, TOTAL - 1], [0, 1], {
    extrapolateLeft: "clamp",
  });
  const lastStart = starts[starts.length - 1];
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Camera>
        <Stadium />
      </Camera>
      {/* Darken the middle so the text pops against the crowd */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 60% 48% at 50% 50%, rgba(0,12,6,0.62) 0%, rgba(0,12,6,0.3) 60%, rgba(0,0,0,0) 100%), radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <Sequence from={lastStart + 20} layout="none">
        <Confetti />
      </Sequence>
      {SLIDES.map((slide, i) => (
        <Sequence key={i} from={starts[i]} durationInFrames={slide.duration} layout="none">
          <SlideText slide={slide} slideIndex={i} />
          <LightSweep />
        </Sequence>
      ))}
      <AbsoluteFill style={{ backgroundColor: "#000", opacity: Math.max(fadeIn, fadeOut) }} />
    </AbsoluteFill>
  );
};
