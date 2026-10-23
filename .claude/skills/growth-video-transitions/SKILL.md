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
- USER PREFERENCE: build the place change as a CONTINUATION of the space, as if the person walks on into the next room or the next spot, with the details physically connecting (the floor continues across a threshold, the next room's wall and set are solid and already there ahead of him, revealed by the camera tracking). Never a fade, haze or semi-transparent dissolve. The user liked the take where the rainy plaza ran straight into the studio room, and rejected the take where the studio faded in through mist.
- People the person joins in N+1 are ALWAYS already there, solid and fully opaque in every frame where they appear. The person walks over and joins them; they never fade in, ghost or appear semi-transparent.

## PLACE CHANGE = WALKING ON INTO THE NEXT SPACE, NEVER A MORPH AROUND A STANDING SHOT (USER RULE, 7 → 8 v1: "bad transition! it must pass like a connected scene, like walking into the next room, it is in your skill")
v1 used a frontal pull-back while he walked toward the camera and wrote the place change as "evenly over the whole frame": the ground turned into turf as a rounded patch from the bottom and the house blended into the park behind him. The user rejected it. The take the user wants (their own earlier take, steps → ladder):
- He gets up and walks SIDEWAYS (frame-right) along the front of the steps, seen in three-quarter view; the camera tracks sideways with him at his pace.
- The space CONTINUES in the walking direction: the paving runs on and becomes turf under his feet; the stone steps continue as the low stone wall/bench of the park; the garden plants give way to the park trees; the park and the towers are revealed AHEAD as the camera tracks. It reads as one connected place.
- The end-frame prop (the ladder) is already standing ahead; it comes into view from the side as the camera tracks; he walks behind it, turns to the camera and climbs; the camera stops and moves in to the end framing. Clothes finished changing while he walked and while partly hidden behind the ladder.
RULE: for every place change, first design the connected path (sideways tracking, new place ahead in the walking direction, shared elements continuing). "Evenly over the whole frame" is for LIGHT (day ↔ night), never for the place itself. A frontal walk toward the camera with the place changing behind him = rejected.

- NO RUNNING (USER PREFERENCE, after 7 → 8 v2): the character always WALKS at a calm, natural pace, never runs, never hurries or jogs, even across a long path. Write "he walks calmly at a natural pace, never runs, never hurries" in every prompt; if the path is long, shorten the path or the distance, not the pace.
## ABSOLUTE MUST: COLOR LOCK, FULL COLOR MATCH AT EVERY JOIN (USER RULE: "when I join two of your clips, the cut between the last frame and the first frame jumps in tones, lighting, highlights or contrast; a full color match between shots is mandatory")
Every clip is joined to its neighbours: its first frame must match photo N and its last frame must match photo N+1 in color, exactly as the source photos are. Kling tends to re-grade (warmer/cooler, brighter highlights, more contrast, more saturation), and at the join that reads as a small jump even when the image itself matches.
1. EVERY prompt (transitions, holds, extensions) gets this block right after the one-shot block, verbatim:
   COLOR LOCK: keep the exact original colors, white balance, exposure, contrast, highlights, shadows and saturation of the start frame and the end frame. No color grading, no color shift, no tint, no brightening or darkening, no added contrast, no glow or bloom, no filter, no flicker. The first frame matches the start image exactly and the last frame matches the end image exactly in color and light; any change of light during the shot happens gradually and arrives exactly at the end image's colors.
2. QA (mandatory, every clip, before showing the user): compare the color statistics of the clip's first frame with photo N and its last frame with photo N+1, and for every join compare clip A's last frame with clip B's first frame:
   ffmpeg -i frame.jpg -vf "scale=640:-1,signalstats,metadata=print" -f null - 2>&1 | grep -E "YAVG|UAVG|VAVG|YLOW|YHIGH"
   Report the differences. A difference of about 3+ in YAVG, 2+ in UAVG/VAVG, or a clear YLOW/YHIGH (contrast/highlight) gap is a visible jump.
3. FIX in post before delivery (no credits): grade the whole clip toward the photo/neighbour with ffmpeg (eq=brightness/contrast/saturation, colorbalance or colortemperature) until the join frames match, re-check the numbers, and tell the user what was corrected. A soft 0.2–0.25 s blend at the join does NOT replace color matching; it only hides small residuals.
4. When I join clips myself, I always run the join-frame comparison first and correct before joining.

## CREDIT-SAFETY GATE: run BEFORE EVERY SEND (USER RULE, after the tennis → basketball session: "a significant waste of credits; learn from every mistake")
In one session, 6 of 9 paid takes failed or were rejected because of MY design choices, not Kling randomness. Every failure below broke a rule that was already written in this skill. The gate exists so that never happens again. Before showing ANY prompt, answer each question in writing to yourself; any "no" means fix the design first.

The mistakes, and what prevents each:
| Mistake (pair, take) | What I did | Prevention |
|---|---|---|
| Season morph in place (snow → pier v1) | invented a new device instead of the accepted walk | copy the closest ACCEPTED example's structure |
| Route from the water (snow → pier v2) | did not read the end frame's geography | plan the physically real approach (route logic) |
| Implausible gate on a pier (snow → pier v4) | added an object that does not exist | build only from what is in the photos |
| Angle-change cut (pier → tennis v1) | camera path ended at a very different orientation | match the end frame's orientation and shot size from the start |
| Invented sports-hall door (tennis → basketball proposal) | added an object that does not exist | propose additions only as an extreme case, never as the default |
| In-place dissolve (tennis → basketball v1) | wrote "X continues and becomes Y" for whole surfaces | new place revealed from the leading edge by real ground |
| Split-screen wipe (tennis → basketball v2) | wrote "hard vertical edge / two regions side by side" and rewrote a liked take's whole device | never use edge or region vocabulary; re-take = liked prompt verbatim + fixes |
| Cut at 0.29 s (tennis → basketball v3) | added a new action at the very start, away from his start position | first 1.5 s identical to the liked take; new actions only mid-walk, where his path passes the object |
| Cap vanished at the last moment (tennis → basketball v1) | headwear window placed last, during the turn | wearables inventory; every item early and staged, all done 2 s before the hold |

The gate (all must be YES):
1. RE-TAKE? If the user liked a take apart from listed points: is the new prompt that take's prompt word for word, with ONLY those points changed, and have I listed each changed line to the user in Hebrew? Did I avoid touching the camera device, environment device and opening?
2. NO INVENTED ELEMENTS: is every object, opening and surface in the prompt visible in one of the two photos? If not, is this a genuine no-choice case, and did the user approve it before sending?
3. ONE-SHOT BY DESIGN: are the start and end camera orientation and shot size compared, and does the camera path need no sudden reframe (sideways dolly, or a slow turn mid-walk, never in the last 2 s)? Is the one-shot block the FIRST paragraph of the prompt?
4. FIRST 1.5 SECONDS: does the clip open with the simplest possible continuation of the first frame (rise / turn / first steps), with no object action, no jump to a new location, and the first-frame framing kept?
5. PLACE CHANGE: is the new place revealed from the leading edge of the frame, through real connected ground the person walks across? Is the wording free of "becomes", "turns into", "gives way to" for whole surfaces, and free of "edge", "border", "region", "side by side"?
6. WEARABLES: is every wearable that differs (including headwear, wristbands, bags, glasses) in the inventory, each with its own early, staged window, all finished 2 s before the hold?
7. PROPS: is every held prop that is gone in the end frame put down with a real, visible action at a point the walk naturally passes (or, if tiny, fading early), never thrown, never left hanging?
8. ROUTE: does the person arrive the physically real way, and is the walk short, with a calm pace?
9. COST: is the length justified (6 s first; 7–8 only with a one-line reason), and is the balance shown?
10. HEBREW: is the whole explanation to the user in Hebrew (only the prompt in English), with the photo analysis, the wearables inventory and the steps?
After the take, QA with frames at 4 fps plus 8–12 fps around every change, plus the scene-detection command (QA section), and report every defect with its exact second before the user asks.

## USE THE PROVEN RECIPE, DO NOT EXPERIMENT (USER RULE, after snow → pier v1)
The user reacted very strongly when I swapped the proven walking one-shot for an untested idea ("the whole landscape changes season in place"). It produced a composite patch, a duplicate boy and no real walk. For every new pair:
1. Start from the closest ACCEPTED example in examples.md and copy its prompt structure and wording: beach → orchard v1, orchard → raft v3, raft → stream v2/v3, mat → grandpa on Kling 4.0, stream → billiards v2.
2. The structure is fixed:
   - he gets up or out of the start pose with the face visible;
   - he WALKS in 3/4 view with an eye-level side follow (or the camera leads him);
   - the ground continues as one connected path, and the destination is revealed AHEAD in the walking direction;
   - the clothes change on HIM in staged windows;
   - the end pose comes only at the end.
3. Change only what the photos require (the places, garments and end pose). Never invent a new device (a season morph, the camera flying away, morphing the world around a static person) unless the user asks.
4. ALWAYS present the 6 s version as the main prompt (credits matter; every failed take costs the user real money). If 7 or 8 s would genuinely improve the result, ALSO offer it as an option, with its cost and one line on exactly why, and say which you recommend. The user decides.
5. A failed take caused by my design choice is a critical mistake: the user trusted me with an accurate prompt. Before showing any prompt, re-check it against the ACCEPTED examples and the failure dictionary.

## FIRST-TIME-RIGHT PRE-FLIGHT (run for EVERY pair before showing a prompt)
The user wants the perfect transition on the first submission. Before writing a prompt, work through this list and fix the design, not only the wording.
1. Direction: N → N+1 in the series order, confirmed.
2. Moderation: is either frame a child without a shirt, or in swimwear, while the other is dressed? If so, flag it, do not submit, and offer alternatives.
3. DEEP ANALYSIS (USER RULE, repeated three times; NO COMPROMISES): crop and zoom into every person in both frames (ffmpeg crop to the scratchpad, then view it) before describing them; never describe from the thumbnail. Identify each garment exactly, including where one piece ends and the next begins. Example: the grandpa wears a beige embroidered short-sleeved shirt over SEPARATE white trousers, NOT a one-piece tunic or jalabiya. Calling it a tunic is wrong and also makes Kling merge it into a robe. Also note the textures (ribbed, striped), the trims, any undershirt, the prints, what the hands hold or touch, and small props in the hands. study every element of BOTH photos before designing, and let the prompt contain everything the transition needs. Inventory at pixel level, both frames:
   - face: shape, eyes, hair length and cut, smile, apparent age;
   - every garment and its colour and print, socks, shoes, headwear, accessories, held props;
   - the exact pose: which hand is where, which foot, sitting style;
   - the camera height and angle (eye-level, low, or high/top-down), lens width, framing (how much of the body), and where the subject sits in the frame;
   - light: time of day, hard or soft, warm or cool;
   - ground and floor material;
   - objects that must stay or leave.
4. Motion chain: list each action in order (get off / stand up → walk → sit / kneel / climb). Budget a walk of at least 3 s, every pose change of at least 0.6–1 s, and a hold of 1.5 s. Choose 6 s if the chain fits; otherwise 7–8 s, with the reason in one line.
5. Exits: plan the start pose's exit so the face stays visible, never with his back to the camera. For example, swing the leg forward over the pony's neck so he sits sideways facing the camera, then slide down. No hidden or blurred moves.
6. Walking direction and camera:
   - a side or 3/4 follow at eye level, constant medium distance, slow constant speed;
   - he walks ACROSS the frame, never toward the lens;
   - the camera never circles him or goes overhead during the walk;
   - when N+1 is high-angle or top-down, rise only after the final pose is reached, slowly and keeping distance.
7. ROUTE LOGIC (USER RULE, snow → pier v2): read the end frame's geography and plan the physically real approach to the final spot, along the walkway or deck that leads there, from its land or entry side. Never arrive from the open-water side or by cutting across empty space. Pick the walking direction (left/right) from where that walkway lies in the end frame.
   Place: a connected continuation (ground into ground, a threshold, upstream water, a yard into a lawn). Destination objects and people are already there and revealed. Never "becomes" or dissolve wording.
8. Outfit: one time window per item, inside the walk, with staged colour-then-shape wording. Removed items (vest, helmet, hat) transform IN PLACE with timestamped states, never "fade" or "disappear". Similar items (shoes or shirts of the same colour family) only need a gentle tint or detail change. Held props not in N+1 fade from the hand early.
9. Face lock line naming the features. Head inside the frame with headroom. Face toward the camera or 3/4 in every action.
10. Gait line: calm, unhurried, even, one foot always on the ground, no hopping or limp; arms swing; the end gesture only in the last 0.5 s.
11. End: the exact N+1 framing reached by the start of the hold; no zoom jump; the light adjusts gradually to N+1's light during the walk.
12. Sit-down, kneel and lie-down moments: write "he lowers himself straight down with his back upright, head up, eyes on the camera the whole time, never bending forward or looking down". Kling 4.0 otherwise bends him forward with his head down and hides his face.
13. Removed headwear and garments: begin the in-place transformation only AFTER the exit action (dismount, getting off), while he walks in clear view, and say "still fully on during the dismount". Kling 4.0 removed the helmet early, during the dismount.
14. Re-read the finished prompt against the failure dictionary below, line by line, before showing it. In the Hebrew explanation, show the user the analysis of both photos (what was noticed and how each detail is handled), not only the steps.
Model: DEFAULT `kling-video-v4_0` (see Kling MCP practice). Other options: `kling-video-v3_0` (8 credits/s, cheaper fallback). Elements (a subject reference from photos of the same age) for a stronger identity lock. `kling-video-v4_0` (newer flagship, first + tail + up to 10 in-between keyframes; measured 13.5 credits/s at 1080p, so 8 s = 108, about 70% more than v3.0).

## ABSOLUTE MUST: a walking one-shot into the next location (never a dissolve)
Every transition is a real one-shot in which the person physically WALKS (or crawls or climbs) from location A into location B, like walking from one room into the next. B is a connected continuation of A, revealed by the camera following him. NEVER a dissolve, a cross-fade, a double exposure, or a place "melting" into another, not even for a fraction of a second.
When fixing a secondary problem (face distortion, clothes timing), NEVER trade away the walk. Copy the liked take's prompt word for word, keep its staging, walk and camera lines unchanged, and only ADD the lines for the problem. Do not rewrite the camera into "very slow / constant medium distance". That removed the walk in orchard → raft v2 and Kling dissolved the orchard into the river, which the user rejected harshly ("this should not have happened").
QA: if any frame shows two places overlaid, or the person not walking between places, the take FAILS regardless of everything else.
RE-TAKE DISCIPLINE (USER-FLAGGED again, tennis → basketball v2: "you went too far, the change was extreme"): when the user says a take was GOOD apart from specific points, the next prompt is that take's prompt VERBATIM with only those points fixed. Never swap the environment device, camera device or structure in a re-take unless the user asked for it. Before sending, diff the new prompt against the liked one and list every changed line to the user.
Held props must be PUT DOWN with a clear, real action (lean the racket upright against a post, a visible let-go; a ball into a pocket), not thrown and not left hanging half-transparent.

## ROOT CAUSE: WHY THE RULES STILL FAILED (USER: "why is there a mistake every time when the skill defines exactly how to act?")
Text rules alone cannot override how Kling 4.0 interpolates between two frames. Evidence from four takes (tennis → basketball v1/v2/v3, basketball → bike v1):
1. WIPE / DISSOLVE: when the two places share NO physical element (indoor hall ↔ garden or forest), Kling must switch the whole background at some moment. With a sideways dolly the new place slides in from the leading edge as a WIPE (basketball → bike v1, 2.5–3.0 s); with an in-place description it DISSOLVES (tennis → basketball v1, 2.0 s); with an "edge" description it makes a bordered split screen (v2). Words like "no wipe, no dissolve" do not prevent it. Only a physically real connection prevents it: shared ground that both photos contain (pier deck → stone path, 20→21 v2, ACCEPTED) or a real opening the camera passes through (stream → billiards, ACCEPTED).
   RULE: classify every pair first. OUTDOOR ↔ OUTDOOR or INDOOR ↔ INDOOR with continuable ground → connected walk. INDOOR ↔ OUTDOOR (or any pair with no shared ground) → a sideways or in-place change WILL wipe or dissolve; this IS the "no choice" case: present the real-opening design (a doorway that plausibly belongs to the start place, camera following him through it with a slow continuous turn in mid-walk) to the user BEFORE writing the prompt, with this evidence, and let the user choose.
2. CLOTHES BUNCHING: Kling ties the end-frame outfit to the end-frame PLACE, so whatever windows the prompt gives, it changes everything at the moment the place switches (basketball → bike v1: helmet, pants, shoes and hoodie in 0.5 s at 2.3–2.8 s; the helmet popped in 0.15 s). RULE: decouple them: finish ALL wearables while he is still fully in the START place, before the place change begins, one item at a time with at least 0.8 s each, and write "by the time he reaches the [threshold] he is already fully dressed as in the end frame". Never schedule a wearable window inside the place-change seconds.
3. MOUNTING / FINAL ACTION FROM THE FAR SIDE: when the destination object (bike, chair, swing) is approached from behind, Kling walks him around the FAR side and he turns his back (basketball → bike v1, 4.25–5.0 s), and the camera drifts wide. RULE: state which side he mounts from relative to the CAMERA ("on the camera side of the bike, his front toward the camera, never walking behind the bike") and "the camera keeps the same distance; it never pulls back".

## DIRECTIONS ARE ALWAYS FRAME-RELATIVE (rope park → mountain review)
"Turns to his left" while he faces the camera means FRAME RIGHT. Always write directions relative to the frame ("toward the LEFT SIDE OF THE FRAME (his right)") and check them against the photo before sending.

## WHY A SIDEWAYS DOLLY STILL WIPES, AND THE FIX: TURN INTO DEPTH (bridge → rope park v1, USER: "why did a wipe happen anyway?")
With a pure sideways dolly, everything new enters from the LEADING EDGE of the frame while the old place exits at the trailing edge. When the FAR BACKGROUND differs completely (river and hill vs forest), the two backgrounds stand side by side for about a second with a boundary between them (a tree trunk in v1, a diagonal line in basketball → bike v1, a sky rectangle in kart → bridge v1). That is a wipe by construction; no wording prevents it. The sideways dolly is safe only when the far background is shared or changes evenly (light, sunset).
FIX for a different far background: make the new place come from DEPTH, not from the frame edge:
1. Geography: the destination lies AHEAD along the walking line and is physically reachable there (the bridge leads to the wooded hillside; the walkway enters the trees). Use what the start photo already contains (the wooded hill in photo 25).
2. Camera: during the walk, the camera turns slowly and continuously (2+ s, mid-walk, never in the last 2 s) from the side view to a 3/4-behind follow that looks ALONG his path, so the destination is in front of him in depth. The new elements (trunks, canopy) then pass on BOTH sides and close in around him gradually, and the old background recedes BEHIND, never side by side with the new one in the same frame plane.
3. At the destination he turns to face the camera (or the camera eases back around) to reach the end framing; any end-frame orientation change happens mid-walk, not at the end.
4. Season/colour differences (autumn → summer) change EVENLY over the whole frame like the light, never region by region.
Evidence: pier → tennis v2 (ACCEPTED) used a mid-walk camera turn and showed no wipe.
LIMIT (bridge → rope park v2, REJECTED): the depth turn failed physically when the walkway itself had to change type in depth (bridge sidewalk → treetop walkway): he passed THROUGH the railing, walked in the air and through a rope. Use the depth turn only when the floor under him stays one clear, continuous, solid surface with all railings and ropes BESIDE his path. If that cannot be guaranteed (elevated or narrow walkways, rope courses, ladders, water edges), keep the sideways dolly and accept a small seam: physical integrity beats a cleaner place change. Tell the user this trade-off BEFORE sending.

## REALISTIC MOTION BEATS FACE-TO-CAMERA (USER RULE, kart → scooter v1)
When mounting, stepping onto or into an object, the physically realistic way to do it wins, even if it means a short back view (the user: "the priority is always realistic motion in terms of physics and the character's movements"). Do not force "camera side" or "face to the camera" when it makes the motion unnatural; write the natural approach and mount.

## SOUND VERSION OF EVERY CLIP (USER RULE)
Kling 4.0 outputs already contain an AAC audio track (sound effects such as footsteps and object contact). For EVERY clip, deliver two files: the silent preview (_preview.mp4) and a SOUND version (_sfx.mp4) that keeps Kling's own audio: `ffmpeg -i clip.mp4 -c:v libx264 -crf 20 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart clip_sfx.mp4`. No music: add to every prompt "AUDIO: natural sound effects only (footsteps, contact with objects, ambient sound of the place); no music, no voices". Kling 4.0 has no enable_audio / music_prompt arguments, so the prompt line is the only control.

## ENDING HOLD ON THE FINAL PHOTO (USER RULE, an EXCEPTION, only when the user asks)
This is NOT part of the normal process. Every transition is made exactly as in the rest of this skill, with its normal 1–1.5 s hold. A longer hold is added ONLY on the last transition of a series and ONLY when the user explicitly says so; the user announces it in advance. Never propose it, never ask about it, never apply it on your own, and never add longer holds to other transitions.
Never regenerate the accepted final transition just to lengthen it: Kling does not reproduce a take, so a longer re-take would differ in every detail. Instead:
1. Extract the accepted clip's LAST frame (`ffmpeg -sseof -0.05 -i clip.mp4 -frames:v 1 -q:v 2 last.jpg`), upload it.
2. Generate a short hold clip from it as `first_image` only (no tail), Kling 4.0, 3–4 s (13.5 credits/s): static camera, "the water/scene motion already at full speed from the first frame, same direction and rhythm, never restarting", only subtle living motion on the person (breathing, a blink), same light, SFX-only audio.
3. Deliver the hold clip (silent + sfx) and a joined version. Kling's first frame is NOT pixel-identical to the uploaded frame (measured seam scene score 0.17 with a hard join = a visible jump). Join with a 0.25 s video blend between the two near-identical frames plus a 0.25 s audio crossfade: `ffmpeg -i A.mp4 -i B.mp4 -filter_complex "[0:v]settb=AVTB,fps=24[a0];[1:v]settb=AVTB,fps=24[b0];[a0][b0]xfade=transition=fade:duration=0.25:offset=<A_dur-0.25>[v];[0:a][1:a]acrossfade=d=0.25[a]" ...`. Measured result: max seam scene score 0.03 (as smooth as normal frames), no cut detected. Then QA the seam frame by frame.
Do NOT try to get the long hold by regenerating the transition at a longer duration (tested, spruce ridge → stream log, 12 s, 162 credits): Kling stretched the WHOLE action over 12 s (slower walk, a longer route, he climbed onto the log from below instead of walking along it) and sat down only at about 10.2 s, leaving a hold of about 1.8 s; the timeline's "6.8 to 12 s hold" was ignored, and the take differed from the accepted one. The extension + blend-join method above is the reliable way.
A plain freeze frame is the free fallback, but moving water/leaves stop, so it reads as a stuck image.

## CONSTANT PACE, NO IRIS, RIGID HEADWEAR, DAY → NIGHT (USER RULES, bike → kart v1)
- CONSTANT PACE: the person's walking speed and step rhythm stay exactly the same from the first step to the last; the clip plays in real time. bike → kart v1 sped up into "fast forward" from 4 s, after the place change, to cover the remaining distance to the kart. Write "his walking speed and step rhythm stay exactly constant from first step to last; the whole video plays at normal real-time speed, never speeding up, no time-lapse, no fast-forward", and keep the remaining distance after the place change short (put the destination object close).
- NEVER AN IRIS / CIRCLE REVEAL: bike → kart v1 brought the night in as a round spreading blotch around him (3.95–4.3 s). The user: "never use circles that open; even a wipe is better, because it flows". The rule stays: no wipe either, only a connected one-shot; but a circle/iris is the worst outcome. Forbid it explicitly: "no circle, no iris, no spreading spot, no local patch of the new scene".
- DAY → NIGHT: never let darkness arrive with the new place. Spread the dimming over at least 3 s, starting early, applied EVENLY to the whole frame at the same rate like a real sunset ("the entire frame darkens evenly together"); lights switch on one by one as individual lamps; the new place is entered already at dusk.
- RIGID HEADWEAR (helmet): "softens and thins" was ignored; the helmet vanished in ONE frame (2.25 → 2.33 s). Give a rigid helmet a longer window (at least 1.2 s) and a concrete visible process that ends in his hair: the colour first shifts from the helmet colour toward the dark hair colour, then the shell flattens and loosens into curly hair texture, then only hair remains. Never let it be the last item, never during the place change.

## KLING SHIFTS WEARABLE WINDOWS LATER; PLAN FOR IT (Red Sea → spruce ridge v1, bike → kart v1, rope park → mountain v1)
Measured repeatedly: Kling starts each wearable change 0.5–1.5 s LATER than written and the last items slide into the place change (tank and vest until 3.75 s instead of 2.9; T-shirt and shorts at 4.25–4.75 s during the climb). Staggering prevents all-at-once bunching but not lateness. Compensate:
- Start the first wearable window as soon as the walk starts (about 0.8–1.0 s) and finish ALL windows about 1.5 s before the place change, not right at it.
- With 5+ items, combine items that change together naturally (e.g. "the vest and tank thin away together") so fewer windows compete.
- If many items must change and the walk is short, prefer 8 s, and put the place change late (after about 4.5 s).
- When the end framing is wider than the start (the person smaller in frame), say so and let the camera ease back slowly in mid-walk, not in the last 2 s; otherwise Kling pulls back at the end (5.75–6.25 s in Red Sea → spruce ridge v1).

## EVERY WEARABLE CHANGES GRADUALLY, NOT ONLY SHIRT / SHORTS / SHOES (USER RULE, tennis → basketball v1: the cap stayed until the last moment and vanished in one beat while he turned)
Before writing ANY prompt, make a WEARABLES INVENTORY of both frames, item by item: headwear (cap, hat, hood, helmet, crown), glasses, top, bottom, socks, shoes, gloves, wristbands, watches, bracelets, necklaces, bags and straps, belts, costume pieces. For each item note: present in A only, in B only, in both (same or changed).
- EVERY item that differs gets its OWN visible time window inside the walk, spread across it (staggered, overlapping a little), each changing gradually on him (colour first, then shape; removed items soften and thin in place: first one part, then the next).
- No wearable window may end in the last 2 seconds before the hold or during the final turn or pose; all changes finish while he walks in clear view. Headwear and small accessories go EARLY, not last.
- An item that must disappear is written once, with its window and "fully gone by second X, nothing left on him" (a bare mention without a window left a stray bag piece on his back in snow → pier v5).
- Show the inventory in the Hebrew explanation to the user, so a missed item is caught before sending.

## BUILD ONLY FROM WHAT EXISTS IN THE TWO PHOTOS (USER RULE, tennis → basketball: "where is there a door? why add a door?")
Never invent elements that are not in the photos (doors, gates, walls, arches, props, furniture) as the default device. Build every transition from what the two photos already contain: their floors, fences, walls, rows of chairs, paths, lines and light. Look for matching pairs between the frames (dark boardwalk ↔ parquet, fence rail ↔ row of courtside chairs, palms ↔ wall) and let one flow into the other in a connected walk.
An invented element is allowed only when there is truly no other way, as an extreme case, and it must be PROPOSED to the user first with the reason, never sent as the default. This replaces the earlier "portal for very different places" default: the user rejected the invented pier gate (snow → pier v4) and the invented sports-hall door (tennis → basketball proposal). Even outdoor → indoor is first tried as a connected side walk.
A connected walk must be a REVEAL FROM THE LEADING FRAME EDGE, never an in-place change (USER-FLAGGED, tennis → basketball v1: "at second 2 you really see the dissolve from the palms to the parquet"). In v1 the striped tiles faded into parquet UNDER his feet and the chairs faded in over the boardwalk while the palms stayed (2.0–2.6 s): a dissolve. Write the new place as a PHYSICAL REGION with a hard boundary line ("where the boardwalk ends, the parquet court begins at a straight edge") that ENTERS from the leading edge of the frame and slides across with the camera move, while the old place exits at the trailing edge; "nothing changes in place: every part of the garden stays garden until it leaves the frame". The boy walks across that boundary. Do not write "X continues and becomes Y" or "X gives way to Y" for whole surfaces; that wording invites an in-place morph.
BUT (tennis → basketball v2, FAILED): never describe the boundary as a "hard vertical edge", "border", "line", "region" or "side by side": Kling rendered it as a graphic split-screen WIPE (a bordered rectangle of the hall sliding over the garden). The edge-reveal only works when the boundary is a REAL physical thing that exists in the scene (deck planks meeting a tile path, the end of a boardwalk, a curb). Outdoor → indoor with nothing physical connecting them is the genuine "no choice" case: propose a real opening to the user first (see the rule above).
Also check the camera ORIENTATION of both frames first: if both are frontal views of a scene running across the frame (tennis ↔ basketball), a pure sideways dolly needs no rotation at all, the safest zero-cut device.
Communication rule: all chat with the user (analysis, explanations, steps, costs, questions) is in HEBREW; only the Kling prompt is in English.

## ABSOLUTE MUST: ZERO CUTS, EVERY TRANSITION IS ONE SHOT (USER RULE, pier → tennis v1: "a cut at second 4 to another scene from another angle! There must never be cuts; the whole scene must always be one shot")
A cut costs a full re-take. Kling cuts when the camera must reach an END-FRAME ANGLE that is very different from the angle it has been shooting at (pier → tennis v1: it tracked diagonally along the boardwalk, then jumped at 4.1 s to the end frame's perpendicular wide view with the boy small in the background). Writing "no hard cuts" is NOT enough. Prevent it by DESIGN, at the planning stage:
1. Before writing, compare the camera ORIENTATION and SHOT SIZE of the start and end frames (where it looks from, which way the ground lines run, how big the person is).
2. Choose a camera path that is ALREADY at the end frame's orientation for most of the clip. The safest is a PURE SIDEWAYS DOLLY ("like a camera on rails"): the camera never rotates; it slides parallel to the person's route, the route (boardwalk, path, corridor) runs across the frame exactly as in the end frame, and the person keeps the same size in frame as in the end frame. The end then needs only the dolly to slow down and stop, not a re-framing.
3. If an orientation change is unavoidable, it must be a slow continuous turn spread over 2+ seconds in the MIDDLE of the walk, never in the last 2 seconds, and never a change of shot size from close to wide.
4. Write explicitly: "THE CAMERA NEVER CUTS, NEVER JUMPS TO A NEW ANGLE, NEVER CHANGES TO A WIDE SHOT; THE PERSON STAYS THE SAME SIZE IN FRAME THROUGHOUT; ONE UNBROKEN TAKE FROM THE FIRST FRAME TO THE LAST".
5. QA: step through the clip at 10 fps around every big change; ALSO run a COLLISION pass (USER-FLAGGED, bridge → rope park v2): in every frame where his body is near a railing, rope, cable, net, wall or vehicle, check that no limb or body passes through it and that both feet are on a real surface (never walking in the air); when the START pose is inside ropes/chains/nets (rope course, swing, climbing frame), zoom to his body at 12 fps for the first 2 s (rope park → mountain v1: he passed through a rope at 0.6–0.9 s and the 8 fps pass missed it). In the PROMPT, name each nearby rope or cable and how his body goes AROUND it (ducks under, steps between, holds and moves past); any single-frame change of angle, shot size or place is a FAILED take. Also run `ffmpeg -hide_banner -i clip.mp4 -vf "select='gt(scene,0.12)',showinfo" -f null - 2>&1 | grep -o "pts_time:[0-9.]*"`; any pts_time it prints is a cut candidate to inspect. Do NOT add `-loglevel error`: it silences showinfo and the check prints nothing (verified: the correct command finds the known cut at 4.17 s in pier → tennis v1).
6. PROVEN (pier → tennis v2, accepted): OPEN the prompt with the one-shot block ("ONE SINGLE UNBROKEN N-SECOND TAKE from the first frame to the last frame, filmed with one camera on a straight dolly track … THE CAMERA NEVER CUTS, NEVER JUMPS TO A NEW ANGLE, NEVER CHANGES TO A WIDE SHOT OR A CLOSE-UP …"), before every other rule. With that, Kling turned gradually to the end angle over 1 s in mid-walk instead of cutting.

## CAMERA ORBIT AROUND A STANDING SUBJECT: LOCK THE HEAD (32 → 33 v1, user: "his head turned 360° on its own axis")
- In an orbit/crane swing, Kling may rotate the subject's HEAD (or body) instead of moving the camera around him; with "glances up" plus "face toward the camera" the head spun around and back.
- Write: "only the camera moves; his head and body stay still and keep facing the same direction as in the start frame; no head turning, no glancing away; the change of angle comes only from the camera". Drop glance actions during an orbit. Keep the arc small (about 30–45°).

## SPECIAL: "ZOOM FROM SPACE" INTO A PHOTO (tail_image only)
- Device that works (user's own reference): globe → country → clouds → city → one building seen from above as a ROOFLESS realistic CUTAWAY at real scale → dive into the room → land on the photo. Write "no text, no labels, no borders" (a named country invites drawn outlines).
- Kling does not reliably centre a named country (v1 "Land of Israel" came out as North-West Africa). If the location matters, describe it by visible geography (the shape of the eastern Mediterranean shore, the Sinai triangle, the Dead Sea) rather than by name.
- When the clip feeds the next transition, write no hold: the camera stops on the last frame, and join with a 0.2 s fade (check SSIM of the last frame vs the next clip's first frame).

## Face identity is the top quality bar (USER RULE)
The user's biggest complaint is face distortion and flicker. Keeping the original face as close as possible to the photos matters more than any clever staging. QA of the orchard → raft clip showed the face drifting into a "generic boy" exactly when:
- it was small in the frame (wide shot);
- it was in side profile or turned away;
- it was inside fast camera motion with blur;
- an outfit change and an environment change were happening on the body at the same moment.

Design rules:
- Keep the face as large as the walk allows. Face fixes come ON TOP of the walking one-shot, never instead of it (see the MUST above).
- Keep the face turned toward the camera or in 3/4 view. Avoid pure profile, back views and head-down moments (climbing, bending, stepping into things), or make them very short.
- USER CONFIRMED: the fast camera move IS where the face distorts. Fast tracking or panning (especially when the place changes) = face drift and flicker. Keep the camera slow and steady, or nearly static on the face, through every place change. If the place change needs a big move, move the world past him, not the camera past him.
- USER PRIORITY CLARIFICATION (raft → stream v3), an EXCEPTION ONLY, NOT A DEFAULT: showing the face is always the default priority and the normal design target. But when a garment must be removed, which Kling handles badly, a natural-looking garment change is worth more than keeping the whole head in frame for that brief moment. A short partial head crop during the walk was acceptable to the user in exchange for a smooth-looking vest change. Do not deliberately design crops. Just do not reject a take for a brief crop when it bought a good garment change. This applies only to rare, hard cases such as a garment that must be removed. Every prompt still asks for the full face in frame.
- Slow camera, no blur. Fewer simultaneous changes: let the environment change while the outfit is calm, or vice versa.
- Shorter clips drift less. This is another reason to design for 6 s.
- In the prompt, name concrete facial features to keep, from the photos, e.g. "same round face, same dark eyes, same short dark hair and hairline, same smile, identical to the first and end frames in every frame".
- Consider binding the child as a Kling "element" (subject reference built from the photos) on image_to_video when who_am_i lists elements. This is a stronger identity lock than text. Propose it to the user before using it.
- QA: always check large frames (640 px or more) of the face through the whole clip, not only thumbnails, and report the exact seconds where the face drifts.

## Outfit, hair and accessories change gradually too (same rank as the environment rule)
The user wants every change on the person to be as smooth as the environment: clothes, hairstyle, and ANY accessory that appears or disappears (flower crown, hat, glasses, bow, backpack, toy in hand). No sudden pop, no cut, no change hidden inside motion blur or a turned back. The user flagged a take where the walk and the climb were good but a flower crown appeared on the head in one frame during a fast camera move.
How to write it:
- List every difference between N and N+1 on the person (each garment, hair, each accessory) and give each its own gradual change in the prompt, not one vague "his look changes".
- Each change runs over at least 2 seconds, while the person is clearly visible and in frame (side or 3/4 view, sharp, not blurred), never during a fast pan, a whip, a turned back or the first step.
- Describe HOW it grows in, element by element: "a few small yellow flowers first sprout in his curls, then more blossoms and green leaves gradually join and close into a full crown over 2 seconds"; "the color and fabric of his shirt slowly shift from the sleeves toward the collar"; a removed item slowly recedes and softens away (a knit hat's texture flattening and melting back into the hair over several seconds), never taken off by hand unless the user asks.
- Spread each change across most of the clip, not 2 s: start right after the opening second and finish just before the final hold, so it is smooth, flowing and barely noticeable.
- Time the person changes to overlap the environment change, so place, outfit and accessories all flow together as one transformation, and finish them before the final hold.
- Keep the camera slow during these changes; fast tracking produces motion blur, and Kling uses the blur to swap things abruptly.
- USER RULE, repeated after orchard → raft v3: an outfit change that lands like a cut (a life vest snapping onto the shirt in about 0.3 s) is still a defect, even in an otherwise excellent take. Kling tends to treat each garment as a single swap event. To push it toward a visible, gradual change:
  - Describe the change in stages tied to the walk: first only the color or tint, then the shape. For example: "over three full steps a faint orange tint spreads over his chest, then slowly thickens into the padded straps and panels of a life vest; at no moment does a whole garment appear at once".
  - Give each garment its own time window inside the walk, and do not let the windows start on the same frame.
  - Keep the camera steady during those windows; fast moves hide cuts.
- HELD PROPS (toy axe, basket, toy in hand) that are not in N+1, USER RULE: they may simply fade out of the hand during the motion, as long as the prop is small and not a central, eye-catching item. This beats an unnatural put-down or throw (the user flagged a toy axe tossed with no real arm motion). If a throw or put-down is used, it must be a precise, physically real action: a real arm swing, the object travelling and landing, and staying where it lands. Never a limp "release" with no motion. A prop that IS in N+1 should already be lying in the destination, and he picks it up.
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
USER RULE (latest, overrides the looser guidance it replaced): **design for 6 seconds first.** Long transitions are nice, but saving credits matters. Before proposing more than 6 s, exhaust every way to fit the change into 6 s:
- simplify the action chain and drop secondary actions (e.g. no separate prop put-down beat);
- start the motion at once;
- merge the environment and outfit changes into the walk;
- shorten the hold to about 1.5 s.

Go to 7 s, or at most 8 s, only when 6 s would clearly cause distortion or rushed, unnatural motion (for example mounting a pony, or a climb plus a walk plus a sit). When you do, say why in one line. Longer clips also tend to bring face flicker or warping, so longer is NOT automatically safer. Pick the length that is the best balance for that specific pair of photos. All the MUST rules (one-shot, connected space, no morphs, gradual outfit changes, natural gait, face visible, no zoom jump, approval before sending) are unchanged.
Measured: 8 credits/s, so 6 s = 48, 7 s = 56, 8 s = 64, 9 s = 72. Motion starts ~1 s (or immediately when the start pose is dynamic). Morphs mid-walk, not on the first step. The environment transformation sits in the middle of the motion (about seconds 2.5 to 5), never at the very start or inside the final hold. Final 1.5–2 s: camera locks into the exact framing of N+1 with subtle live micro-movement (rock-solid for groups) and a living background. In the edit clips go back-to-back with no added freezes, so the hold of clip N is the start of clip N+1 and the whole film reads as one continuous flow.

## Prompt template
```
A single continuous 7-second uninterrupted ONE-SHOT video linking the first frame to the end frame with strict physical continuity. CRITICAL RULES: EXACT DURATION 7 SECONDS; ONLY ONE <each person>; STRICT ABSOLUTE FACIAL AND BODY IDENTITY PRESERVATION (ZERO WARPING, ZERO EYE DISTORTION, ZERO FEATURE MELTING); STRICTLY NO HARD CUTS, NO JUMP CUTS, NO OPACITY DISSOLVES, NO DOUBLE EXPOSURE; <pair-specific rules>; FINAL 2-SECOND SETTLED HOLD.
Timeline & Physical Action:
Seconds 0 to 1 (Opening): <who/where/outfit>, subtle live micro-movements.
Seconds 1 to 3: <first motion and direction>; camera <tracks/pans>; FACIAL LOCK at the turn.
Seconds 3 to 5: <walk/handover/portal>; while she keeps moving, the world around her seamlessly reshapes in place as one fluid continuous transformation: <element of A> flows into <element of B>, ... ; the person stays sharp and solid; arriving people ALREADY present or entering from <edge>; gradual outfit/hair change (no popping).
Seconds 5 to 5.5: <sit/kneel/turn> into the end-frame pose.
Seconds 5.5 to 7 (Final Settled Hold): exact framing of the end frame; smiles; LIVING BACKGROUND: <concrete elements>.
COLOR LOCK: <the verbatim block from the COLOR LOCK section>
Quality: photorealistic, natural biomechanics, continuous camera, absolute identity lock, zero glitches.
```
Describe people by visible features, never by brand/character names (Kling blocks them). Put all negatives inside the prompt text.

Worked examples from the second project (a boy, 2026), with what worked and what to improve: see `examples.md` in this folder. Read it before writing a new transition prompt; reuse the structure, never the content.
The user's own finished reference film (27 photos), the target style, is analysed in `references/reference-film-analysis.md`: the devices that worked, the environment-continuity tricks, and VFX for general knowledge. Read it too.

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
- A limb freezes early in its end-frame pose (e.g. the right hand held raised at the chest for 3 s while walking) → Kling locks onto the end pose too soon. Write "both arms swing naturally and loosely with each step" during the walk, and bring the hand to its end-frame pose only in the last ~0.5 s before the hold, as one natural gesture. QA: check every limb in the walk, not only faces.
- Clothes, hat or crown described as "gradually forming" still pop, or the swap is hidden behind a post the person passes → STRETCH the change over almost the whole clip (start right after the opening, finish just before the hold, about 4 s for a 7 s clip), describe it as a slow, imperceptible, continuous transformation, and keep any occluder and any fast motion (jumps, dives, quick kneeling) away from the person during it. Do not let it finish early.
- USER PREFERENCE (overrides earlier experiments): do NOT add animated character actions to handle clothes or accessories (no taking a hat off and tossing it, no putting on or zipping a jacket, no pulling items out of pockets). The user finds them forced. Clothes, hats and accessories must change smoothly, seamlessly and almost unnoticeably while the person simply moves through the planned motion. Hand actions with clothing (putting on a jacket) also failed technically: one sleeve only, imperfect zipping. Never throw or drop objects either; they become leftovers.
- SPATIAL DISTANCE BUDGET (USER RULE, billiards → snow v1): the real failure there was not the back view (walking away from the camera is fine as an idea) but that the door was placed FAR away, so in the time available Kling made him rush, almost running. Credits matter too (about 100 per clip), so keep both distance and time short:
  - Plan the walk in REAL STEPS. A calm child covers about 2 steps per second, roughly 1 m/s. Put the portal or destination only 3–5 steps away ("the door is right next to the table, three steps to his left"; "the mound is just outside the doorway").
  - Write the step count in the prompt ("he takes four calm steps").
  - Never stretch a scene change across a long room or a long path. A short walk that crosses one connected threshold is enough to read as walking into the next scene.
  - Prefer 6 s with a short walk over 8 s with a long one. Shorter clips also drift less.
- CONNECTED SIDE WALK FIRST, EVEN FOR VERY DIFFERENT PLACES (USER-ACCEPTED, snow → pier v5): the user PREFERS the plain side-follow walk where the environment connects (snow path → wet earth → wooden boardwalk → pier deck) over any portal. It worked in v2 and v5, at 6 s. What makes it work:
  - The ground under his feet is ONE continuous physical path (the boardwalk starts while snow is still beside it). A snowy bank beside the boardwalk next to the sea for about 1 s was acceptable to the user.
  - The ROUTE must end the way a person really arrives: read where the deck extends in the end frame and walk in the direction that reaches the target FROM the deck side (v5 walked LEFT; v2 walked right and reached the ladder from the water side, which was rejected).
  - The final step faces the camera ("turns to face the camera and steps forward down … facing the camera the whole time"); v2 without it stepped down with his back to the camera.
  - v3 failed only because the snow-path → pier join was squeezed into 1.2 s at the start of the walk; give the path → boardwalk join about 2.5 s of walking.
  - Use a portal (below) only when there is no plausible connecting ground.
- PORTAL FOR VERY DIFFERENT PLACES (USER-FLAGGED, snow → pier v2/v3; now the fallback, see above): when the two places cannot physically touch (winter snow and a summer sea, outdoor and indoor, two different climates), a side-follow walk along "a path that continues" STILL dissolves: the old place ghosts beside the new one. Use a REAL OPENING the camera passes through (an open door or gate in a wall at the end of the path, a doorway of a hut or building), with the camera LEADING him through it. This is the device that worked in stream → billiards. The world on each side of the opening is solid, and the light changes exactly at the threshold.
  The opening must be PLAUSIBLE in the destination (USER-FLAGGED, snow → pier v4: "what wooden door is there on a pier?"). A door fits a billiard hall; a bare plank wall standing on a pier does not. Use an opening that belongs to the place (a beach-club entrance arch, a cabana's white curtains, a house door, a tunnel, a garden gate), and explain the choice to the user BEFORE sending.
- 6 s is often too short for a portal plus a walk plus a final action. For portal transitions recommend 8 s (or 7 s), with the reason, and still offer the alternative.
- DO NOT NAME ACCESSORIES THAT MUST DISAPPEAR (USER-FLAGGED, snow → pier v5): the prompt said "the hood and the bag strap flatten away". Kling kept the strap as a stray black piece of bag stuck to his back at 2–3 s. A thin strap, a lanyard or a bag that is gone in the end frame is better left unmentioned (or written once as "no bag on him at any time after second 1"). Never describe a small removable item twice.
- GLOVES LINGER (snow → pier v2, v5): even with a "1.6–2.8 s" window the gloves stayed until about 3.5 s, after the T-shirt had already appeared. Put gloves FIRST and early (for example 1.0–1.8 s, "his hands are bare from second 2"), before the top changes.
- DUPLICATE-PERSON RISK (snow → pier v1): when the destination is composited in as a separate region (a big landscape "season change in place"), Kling may place the END-FRAME version of the boy in it as a SECOND person while the original walks out of frame. Always write "only one boy exists in every frame; the end-frame boy is the same walking boy". Prefer a physical threshold (a path, steps, a gate, a door) over a whole-landscape morph.
- PORTAL PLACEMENT: a doorway behind the camera (the camera leads, he walks toward it) keeps the face visible. A doorway ahead of him in the background makes him walk away from the camera, which is acceptable only if the walk is short and calm.
- USER-FLAGGED (beach → orchard v1): a 1-frame hard CUT at 0.15 s from the high-angle first frame to eye level, because the prompt asked the camera to go from high to eye level in 0.9 s while he also stood up. FIX (confirmed in v2): "the shot starts exactly on the first frame and the camera never jumps or cuts to a new angle; it stays at the same angle while he stands, then cranes down slowly and continuously over two full seconds while tracking him". Any big angle change needs at least 2 s of written, continuous camera travel.
- USER-FLAGGED (stream → billiards v1): the HAIR grew a puffy, wide mop of curls on the SIDES (3–6 s), because my prompt said "dries into soft, slightly fuller curls". Kling takes "fuller" or "curlier" as permission to inflate the hair. Rule: never write fuller, bigger, curlier, grows or longer for hair unless the end frame truly shows it. Always describe the EXACT haircut from a zoomed crop of the end frame (length on top, the sides and back, the shape), and write "his haircut never changes shape or volume: <exact cut>". When only the wetness changes, say "the same haircut, only the shine of the wet hair slowly fades".
- USER-FLAGGED (grandpa → swing on Kling 4.0): the toddler entered the bucket swing by passing THROUGH it, legs and body going through the rim and the posts, instead of climbing over them. QA must check entries into any enclosed object (bucket swing, crib, car seat, cart, box) frame by frame. Prompt rule for a bucket swing: "he stands in FRONT of the swing on the camera side, grips the top of the black rim, lifts one leg high OVER the rim and down into one leg hole, then lifts the other leg high OVER the rim into the other leg hole, then lowers himself into the seat; every limb goes OVER the rim, never through the rim, the red posts or the central post; the swing is solid and does not deform". Better still, avoid the climb: make the swing so low that he steps in, or start the destination with him already standing inside the swing area. For a toddler too small to climb, consider a handover by an adult who is already there (if the user allows a helper).
- The person starts on the far side of a ladder/fence/rungs and Kling walks him THROUGH the rungs → say which side he is on, that he stays on that side, and that he exits around the outside of a named side rail.
- Walking toward the destination makes Kling walk the child straight into the lens → always name the walking direction (left/right, 3/4 profile) and the side from which he turns to camera.

- Lying down onto the stomach makes the face dip toward the floor and jitter/deform → keep the head up and the face toward the camera through the whole move (kneel, hands down, slide the legs back), slowly, with a face lock "at this moment".
- The first steps from a standing pose come out limping or uneven → "even, symmetrical steps from the very first step, both legs carrying equal weight, no limp".
- Walking through water: "knee-deep" or "wades" makes Kling produce hopping, skipping steps with both feet off the ground (the user saw it as a stuck, out-of-sync walk). Use ankle-deep water, "walks calmly", and "unhurried even pace, one foot always on the ground, no hopping, skipping or high knee kicks". A walk squeezed into under 3 s also turns into a hurried hop. Give the walk at least 3 s even if the clip must be 7 s.
- QA: also check the gait (limp, uneven steps) and the face in every pose change (lying down, kneeling), not only in the walk.

- Two different places joined only by "the background becomes X" (white fur behind a top-down shot → black sofa in a frontal portrait) → Kling dissolves between them, ghosting the people. Make the destination a solid object already standing in the same room, revealed by the camera move.
- A camera directly overhead plus "he sits up" makes Kling pull the child up INTO the lens (top of the head fills the frame, face hidden and blurred). Lower the camera to an angled front view first, then let him sit up toward it.
- A real portal from the destination photo works best: a front door seen in N+1, with the camera LEADING the child (moving backward in front of him) from inside, through the doorway, onto the steps. Face always visible, one connected place, no dissolve. Accepted as the most natural transition so far.
- Sitting down on a step makes the legs shoot forward and drag → "he sits straight down on the step, knees bent, feet staying in front of the prop".
- The end frame has a foreground object between the camera and the person (a ladder seen through its rungs, a fence, bars), and Kling holds the clothes unchanged through the whole open walk, then swaps everything in about 0.15 s as he passes behind that object. "Finished before the ladder enters the frame" alone did not prevent it. Start the change right at the beginning of the walk, give explicit midpoints ("already half changed by second 3"), and keep the prop out of frame until the outfit is complete.
- MODERATION: an end (or start) frame with a child without a shirt, paired with a dressed child in the other frame, gets SENSITIVE_RESULT on every attempt (credits refunded), whatever the wording. Flag this BEFORE proposing a prompt and offer an edit cut or a different photo instead. Never try to evade the filter.
- Check the photo numbering before designing: transition N→N+1 runs from photo N (the user's order in the series, often the previous pair's end frame) to photo N+1, NOT from the first attached image to the second. Confirm the direction from the series order before writing the prompt.

## Iteration method
When the user likes most of a take, copy THAT prompt and change only the lines for the reported problem. A rewrite with many new rules (v2 of the museum → studio pair) broke what worked: the walking pace slowed, an arm froze, the hat floated upward, and the toddlers appeared by dissolve. Keep the user's preferred pace and staging word for word.
Watch the take, name the failure and its second, keep what worked, add one hard rule for that failure, repeat critical rules in CAPS at the top and at the moment they apply, rewrite the full prompt.

## VFX layer (video-to-video on finished clips)
Lock foreground people; give the element an exact place and what it must not cross or block; it is already present and revealed by the camera, or enters/exits off-frame; real physics; subtle life rather than aggression; matched light, shadows and reflections; readable text; photorealistic, not cartoon.

## Kling MCP practice
- who_am_i and query_membership_and_credits first. Only top-up and membership credits are usable via MCP.
- DEFAULT MODEL (USER DECISION after the pony → lawn comparison): image_to_video with `kling-video-v4_0`. Inputs: first_image = N and tail_image = N+1, plus optional keyframe_1..10. Arguments: duration (design for 6–7 s), resolution "1080p", imageCount "1". There is no audio or multi-shot argument. Measured cost: 13.5 credits/s at 1080p (6 s ≈ 81, 7 s ≈ 95, 8 s = 108). Faces stay far more stable and the prompt is followed more literally than on v3.0, which saves re-takes.
- Fallback / cheap option: `kling-video-v3_0` (8 credits/s) with prefer_multi_shots "false" and enable_audio "false".
- Upload: file_upload ticket, then POST multipart (ticket + file) to https://kling.ai/api/mcp/files. The cloud environment must allow `kling.ai` and `*.kling.ai` (Network access: Custom); a running session may need a restart. Test with curl first.
- Every job costs credits: show prompt and settings, get approval, submit once, poll query_tasks, never auto-retry.

## QA before showing the user
The user judges at normal playback speed. Report frame-level findings honestly, but say which ones are likely invisible in real time, and recommend a re-take only for defects a viewer would notice (face distortion, a visible pop or cut, an awkward body motion).

Extract frames (3 fps sheet + full frames at morphs and handovers): identical faces, correct head count, no pops/cuts/dissolves, natural limbs, right outfit/hair, every outfit/hair/accessory change visibly gradual (check frame by frame that nothing appears in a single frame), end frame matches N+1, live end hold, COLOR MATCH of the first/last frames to photos N/N+1 and of every join (see COLOR LOCK; correct in post if needed). Report issues with the exact second.