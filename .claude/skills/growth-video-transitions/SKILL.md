---
name: "growth-video-transitions"
description: "Use when turning a sequence of photos into one continuous video with Kling start/end-frame AI transitions (family/growth videos, trips, events, any photo series), writing photo-to-photo transition prompts, or adding VFX to such clips."
---

# Continuous photo-to-photo video with Kling start/end-frame transitions

Learned from one reference project (a growth video of one girl, 27 photos, plus the full Gemini prompt-iteration transcript). ALWAYS talk to the user in Hebrew; Kling prompts are in English. Work through the Kling MCP unless the user says otherwise.

## What the user wants (applies to every photo series, not only growth videos)
A sequence of photos that plays as ONE smooth continuous film: each photo flows into the next through realistic motion, then settles for a short live hold, then flows on. The heart of the style is motion-driven transitions: people physically walking, moving, handing over, entering and leaving, with the camera following, so the change of place, outfit or age happens inside the movement. Growth (age change) is only one possible case; the photos may be a trip, an event, a family album, or any sequence. Every pair needs: realistic logical motion, zero face distortion, no cuts/dissolves/pops in the environment OR on the person (clothes, hair and accessories change gradually too), and a calm live hold on the next photo.

## The most important rule: judgment, not templates
Every project has different photos, people, places and poses. The reference project is a source of principles and examples, never a script to copy. For each pair, design the transition from what THESE two photos show, choose the most realistic, logical and natural bridge between them, and explain the choice to the user in one Hebrew line.

Priorities: (1) zero face distortion/identity drift, (2) visible, logical, natural character motion that carries the story into the next photo, (3) true one-shot continuity with a seamless, elegant environment transformation during the motion, (4) a calm, live end hold on photo N+1.

## The environment flows, it is never covered (top style rule)
The change from the place of photo N to the place of photo N+1 must be a smooth, natural, elegant transformation that happens WHILE the person moves and the camera follows, so the world appears to flow into the next scene. No foreground objects added just to hide the change (no cabinet, pillar, wall, door or prop sliding across the lens), no wipes, no cuts, no crossfades. The user rejected a take where a kindergarten cubby cabinet slid in front of the camera to mask a beach-to-classroom change: "a smooth, continuous change of the scene with no needless additions, the sea environment turns into the learning environment".
How to write it:
- Map each element of place A to its counterpart in place B, and let it reshape in place: ground into ground (sand into floor tiles, grass into deck), horizon/sky into wall or ceiling, big shapes into big shapes (waves into a shelf, a railing into a fence, trees into pillars), light into light (sunlight softening into indoor daylight).
- The transformation runs gradually across 2 to 3 seconds in the middle of the walk (about seconds 2.5 to 5), flowing in the walking direction, never all at once.
- The camera keeps one smooth continuous move through the whole change; the person stays sharp, solid and in motion as the anchor of the shot.
- Write it as "the world around her seamlessly reshapes in place as one fluid continuous transformation" and list the element pairs, plus "NO FOREGROUND OBJECTS, NO WIPES, NOTHING PASSES IN FRONT OF THE CAMERA; THE ENVIRONMENT ITSELF SMOOTHLY TRANSFORMS AROUND <person>".
- When the two places share an element (a door, water, a window, a table), let it be the pivot that persists while everything else reshapes around it.

## Outfit, hair and accessories change gradually too (same rank as the environment rule)
The user wants every change on the person to be as smooth as the environment: clothes, hairstyle, and ANY accessory that appears or disappears (flower crown, hat, glasses, bow, backpack, toy in hand). No sudden pop, no cut, no change hidden inside motion blur or a turned back. The user flagged a take where the walk and the climb were good but a flower crown appeared on the head in one frame during a fast camera move.
How to write it:
- List every difference between N and N+1 on the person (each garment, hair, each accessory) and give each its own gradual change in the prompt, not one vague "his look changes".
- Each change runs over at least 2 seconds, while the person is clearly visible and in frame (side or 3/4 view, sharp, not blurred), never during a fast pan, a whip, a turned back or the first step.
- Describe HOW it grows in, element by element: "a few small yellow flowers first sprout in his curls, then more blossoms and green leaves gradually join and close into a full crown over 2 seconds"; "the color and fabric of his shirt slowly shift from the sleeves toward the collar"; a removed item fades/slides off naturally or is taken off by hand.
- Time the person changes to overlap the environment change, so place, outfit and accessories all flow together as one transformation, and finish them before the final hold.
- Keep the camera slow during these changes; fast tracking produces motion blur, and Kling uses the blur to swap things abruptly.
- Respect the moderation rule below: for children, describe hair, accessories and props growing in, and write "his look naturally matches the end frame" rather than describing clothes changing on the body.

## How to decide (for every pair)
1. Inventory both photos: every person (by visible features), the main subject, ages, poses, outfits, hair, accessories, objects, location, light (time of day, indoor/outdoor), camera angle and framing, and where each person stands in N+1.
2. Find continuity anchors: who appears in both photos, who must leave, who must arrive, which objects could link the scenes, which elements could act as a natural portal (arch, door, window, water, tunnel, corridor, passing object, pillar for a wipe).
3. Think like a camera operator in one continuous take: who physically moves, in which direction, how the camera follows, and when the environment can change while faces are small, turned or in motion.
4. Pick the device that fits the content (and the age, if a child: carried, crawling, toddling, walking, running, riding). Default to a walk or movement with a tracking camera. Resolve every entrance and exit (people waiting already in place, or entering from frame edges after the main action; people leaving step out of frame). Plan outfit/hair/age/prop changes mid-motion.
5. Check plausibility: is the motion possible from the start pose? Does it end exactly in the N+1 pose? No walking straight into the lens, no faces during big changes, no duplicates, no objects from nowhere. If weak, choose another device.
6. Prefer the simplest believable motion; add creativity only when it stays logical (e.g. a prop handed to someone who holds it in N+1).

## Toolbox of devices (examples, combine and adapt)
- Walk with a tracking camera while the environment reshapes in place (the core device): place A flows element by element into place B around the moving person, outfit/hair change mid-walk, the person turns to camera into the N+1 pose.
- Walk out of frame with a tracking pan: the new place flows in from the walking side as part of one continuous camera move (no hard edge, no masking object).
- Handover between people: carrier walks to the receivers' side and places the child/object into EMPTY OPEN HANDS; giver retracts out of frame.
- Subject moves by itself (crawl, walk, run, ride) to the next place, where the next people already wait.
- Exit an object (stroller, chair, cart, horse, car) with correct physics, then walk.
- Others exit / others join from frame edges in a clear order.
- Portal: arch, doorway, window, water dive, tunnel; back view through the portal hides changes.
- Camera wipes (hand over the lens, whip-pan, sweep past a wall or pillar): LAST RESORT, only if the user asks for them; they read as artificial added objects. Prefer the in-motion environment transformation.
- Prop handover that links two scenes.
- Group gathering into the exact N+1 lineup.

## Timing
Pick the length per transition by the amount of motion: 5–7 s is the norm (the user wants to save credits; Kling 3.0 costs 8 credits per second at 1080p); go longer (8–10 s) only when the motion is genuinely complex (several actions in a row, e.g. stand up, climb down, walk, sit) and say why. Motion starts ~1 s (or immediately when the start pose is dynamic). Morphs mid-walk, not on the first step. The environment transformation sits in the middle of the motion (about seconds 2.5 to 5), never at the very start or inside the final hold. Final 1.5–2 s: camera locks into the exact framing of N+1 with subtle live micro-movement (rock-solid for groups) and a living background. In the edit clips go back-to-back with no added freezes, so the hold of clip N is the start of clip N+1 and the whole film reads as one continuous flow.

## Prompt template
```
A single continuous 7-second uninterrupted ONE-SHOT video linking the first frame to the end frame with strict physical continuity. CRITICAL RULES: EXACT DURATION 7 SECONDS; ONLY ONE <each person>; STRICT ABSOLUTE FACIAL AND BODY IDENTITY PRESERVATION (ZERO WARPING, ZERO EYE DISTORTION, ZERO FEATURE MELTING); STRICTLY NO HARD CUTS, NO JUMP CUTS, NO OPACITY DISSOLVES, NO DOUBLE EXPOSURE; <pair-specific rules>; FINAL 2-SECOND SETTLED HOLD.
Timeline & Physical Action:
Seconds 0 to 1 (Opening): <who/where/outfit>, subtle live micro-movements.
Seconds 1 to 3: <first motion and direction>; camera <tracks/pans>; FACIAL LOCK at the turn.
Seconds 3 to 5: <walk/handover/portal>; while she keeps moving, the world around her seamlessly reshapes in place as one fluid continuous transformation: <element of A> flows into <element of B>, ... ; the person stays sharp and solid; arriving people ALREADY present or entering from <edge>; gradual outfit/hair change (no popping).
Seconds 5 to 5.5: <sit/kneel/turn> into the end-frame pose.
Seconds 5.5 to 7 (Final Settled Hold): exact framing of the end frame; smiles; LIVING BACKGROUND: <concrete elements>.
Quality: photorealistic, natural biomechanics, continuous camera, absolute identity lock, zero glitches.
```
Describe people by visible features, never by brand/character names (Kling blocks them). Put all negatives inside the prompt text.

Worked examples from the second project (a boy, 2026), with what worked and what to improve: see `examples.md` in this folder. Read it before writing a new transition prompt; reuse the structure, never the content.

## Failure → fix dictionary (from real failed takes)
- Duplicate person / receiver already holding it → ONLY ONE + receiver starts with EMPTY, OPEN ARMS.
- The N+1 version of the person already waiting at the destination → destination EMPTY; the person changes while moving.
- Angle snaps at an outfit change → one continuous arc; change during the motion.
- Face warps in a turn → identity lock at that moment; move sideways, never into the lens.
- Rocking/swaying at the end → arms lock in a fixed posture.
- Awkward exit from an object → describe the exact body path; straps stay on the object.
- Accessory/outfit pops → gradual over 2 s, only after second 3.
- A new accessory (flower crown, hat) or outfit appears in one frame during motion blur → slow the camera at that moment, keep the person sharp and in profile, and describe the accessory growing in piece by piece over 2+ seconds.
- Hard cut / dissolve between places → the environment reshapes in place element by element during the walk, one continuous camera move, no crossfade.
- A foreground object (cabinet, pillar, wall) slides across the lens to hide the change → rejected by the user as an artificial addition; remove it and write the in-place environment transformation with explicit element pairs, plus "NO FOREGROUND OBJECTS, NO WIPES".
- Content moderation block (SENSITIVE_RESULT) on a child in a swimsuit or similar with outfit-change wording → never describe clothes changing on the body; describe the child by hair, expression and props and write "her look naturally matches the end frame".
- Leftover objects floating → forbid leftovers from the previous scene.
- Jump to rear view → 3/4 side-profile tracking.
- Hairstyle changes wrongly → name the exact hairstyle and length.
- Fidgeting before an action → one smooth motion from frame 0.
- Extreme expression warps in motion → relax to a closed-lip smile on frame 0.
- Long frozen start → immediate action.
- Group face jitter → longer clip with a rock-solid 2 s hold, living background only.
- Static background → name concrete living elements.
- An adult in a same-color tunic over matching trousers turns into a long robe/gown as soon as he stands and walks, even with an explicit outfit lock → keep that person seated, or avoid showing his legs standing.
- A toddler sitting in a bucket swing with leg holes cannot be made to "climb out" while seated (the body passes through the seat, the swing morphs around him) → he grabs both chains, pulls his legs out one at a time, stands on the seat, then steps down over the side rim.
- The user prefers a real one-shot over a "morph transition": do not turn one object into another (swing into chair, table into swing); objects stay what they are and leave the frame as the camera follows the person, and the destination is revealed during the walk.
- Fast camera tracking reveals the new place from one side and creates a half-and-half seam → slow constant-speed tracking at a medium-wide distance, and nothing (swing frames, poles) passing near the lens.
- Wide shot through the whole hold, then a jump to the close framing of N+1 in the last 2–3 frames (a mini-cut) → when N+1 is closer than the walk framing, write a slow continuous push-in that reaches the exact N+1 framing by the start of the hold, plus "CONSTANT DISTANCE / NO SUDDEN ZOOM AT THE END". QA: check the last 5 frames one by one against N+1.
- Child gets up from lying/sitting with the camera overhead and his head swings into the lens (blur) → he rolls to the side away from the camera and stands up beside it; the camera rises at a distance.
- Lying down or sitting down happens below the frame edge or inside blur, so the pose "arrives" → keep the person centered and sharp while kneeling, sitting and lying down; slow the camera there.
- A floor item of place A (fur blanket, rug) stays as a patch in place B while the camera passes → say what happens to it: it stays where it was and leaves the frame BEFORE the ground changes.
- Sitting down next to a prop leads to stepping over it awkwardly → say on which side of the prop he approaches and sits ("approaches from the left, sits on the step behind the basket without stepping over it").
- Walking toward the destination makes Kling walk the child straight into the lens → always name the walking direction (left/right, 3/4 profile) and the side from which he turns to camera.

## Iteration method
Watch the take, name the failure and its second, keep what worked, add one hard rule for that failure, repeat critical rules in CAPS at the top and at the moment they apply, rewrite the full prompt.

## VFX layer (video-to-video on finished clips)
Lock foreground people; give the element an exact place and what it must not cross or block; it is already present and revealed by the camera, or enters/exits off-frame; real physics; subtle life rather than aggression; matched light, shadows and reflections; readable text; photorealistic, not cartoon.

## Kling MCP practice
- who_am_i and query_membership_and_credits first. Only top-up and membership credits are usable via MCP.
- Transitions: image_to_video with `kling-video-v3_0`, inputs first_image = N and tail_image = N+1; duration "7", resolution "1080p", prefer_multi_shots "false", enable_audio "false". Alternative: `kling-video-v3_0_omni` with image_1/image_2.
- Upload: file_upload ticket, then POST multipart (ticket + file) to https://kling.ai/api/mcp/files. The cloud environment must allow `kling.ai` and `*.kling.ai` (Network access: Custom); a running session may need a restart. Test with curl first.
- Every job costs credits: show prompt and settings, get approval, submit once, poll query_tasks, never auto-retry.

## QA before showing the user
Extract frames (3 fps sheet + full frames at morphs and handovers): identical faces, correct head count, no pops/cuts/dissolves, natural limbs, right outfit/hair, every outfit/hair/accessory change visibly gradual (check frame by frame that nothing appears in a single frame), end frame matches N+1, live end hold. Report issues with the exact second.