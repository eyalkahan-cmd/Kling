# Worked examples (second project: a boy from baby to ~4 years)

Each entry: the pair, the device chosen, the result, and what to improve. These are examples of structure and judgment, not templates. Every new pair needs its own design.

## What the user approved overall
- Real one-shot: the person moves, the camera follows slowly, the destination is revealed. Objects never morph into other objects.
- Changes on the person (clothes, hair, accessories such as a flower crown or a knit hat) are gradual, visible, at least 2 s. Never inside blur.
- 5–7 s per clip. Go longer only for complex motion (several actions in a row), and say why.
- Show the prompt and the cost before sending. Send only after approval.

## Pair: baby on play mat → grandpa holding him on the sofa (8 s, v4 accepted)
Device: the baby crawls left toward a grandpa who is already seated, the grandpa leans forward and lifts him, the room reshapes in place during the crawl.
Learned: the lift caused face jitter, fixed with a "face stability lock during the lift" plus a slow, even lift and a smile that opens only after he is seated. The mat → rug change appeared as a shrinking patch; write "changes in place across the whole frame at once, no patch".

## Pair: grandpa's lap → toddler in a park swing (10 s, v4 accepted)
Device: the grandpa lowers the baby to the floor and STAYS SEATED, the toddler walks right, the camera follows, the room flows into the park, and he climbs into the swing by himself.
Learned: a same-color tunic over trousers became a robe as soon as the grandpa stood (twice), so keep him seated. "Adult hands from above" works but the user prefers no helper. A fast pan creates a half-room/half-park seam.

## Pair: swing → toddler on a blue chair with a flower crown and balloons (9 s, v2 accepted)
Device: he grabs both chains, pulls his legs out, stands up on the seat, steps down over the side rim, walks right with the camera following, and sits in the chair, which is part of the revealed room.
Learned: v1 tried "climb out while seated" plus "swing morphs into chair" and the body passed through the seat. The user rejected morphing explicitly. In v2 the crown appeared in one frame inside motion blur, which led to the gradual-accessory rule.

## Pair: chair with crown → lying on fur hugging newborn twins, top-down (7 s, v1 kept)
Device: he takes the crown off by hand and puts it on the chair (good, natural, no pop), gets off, the camera rises overhead, and the twins are revealed already asleep on the blanket.
To improve: he walked straight into the lens, and lying down happened off-frame, with the clothes changing in the blur. Name the walking direction, keep him centered while kneeling and lying down, and finish the clothes change before he lies down.

## Pair: hugging twins → sitting on sunny house steps with a fruit basket (7 s, v1)
Device: he lifts his arm off the twins, gets up, walks right, the fur becomes stone pavement, the steps and pots are revealed, the crown sprouts flower by flower, he sits behind a basket that was already there.
Worked: gradual crown, stable faces, twins stayed asleep, the basket never popped.
To improve:
1. In the last 2–3 frames the shot jumped from wide to the close N+1 framing. Add a slow push-in that reaches the exact end framing by the start of the hold, and "no sudden zoom at the end".
2. When he got up, his head swung toward the overhead camera. Have him roll away from the camera and stand up beside it.
3. The fur blanket stayed as a patch on the stone. Say the blanket and the twins leave the frame before the ground changes.
4. He stepped over the basket to sit. Say which side he comes from and where he sits relative to the prop.

## Pair: climbing down a playground ladder → standing on a rain-wet aviation-museum plaza (7 s, sent)
Device: he climbs down rung by rung, steps out around the side post (never through the rungs), walks left with slow tracking, the weather turns cloudy and the turf becomes a wet plaza, the parked jets are revealed, and the jacket, joggers, sneakers and beanie form gradually (beanie from the crown down, pom-pom last). He stops and turns 3/4 to camera.
Prompt pattern used (abridged):
```
CRITICAL RULES: ...; NO OBJECT MORPHS INTO ANOTHER OBJECT: THE <prop> STAYS UNCHANGED AND LEAVES THE FRAME AS THE CAMERA FOLLOWS; <destination objects> ARE CALMLY REVEALED BY THE CAMERA MOVE, NEVER POPPING IN; ...; THE CAMERA MOVES SLOWLY AND SMOOTHLY, NO WHIP, NO MOTION BLUR, AND KEEPS A CONSTANT MEDIUM-WIDE DISTANCE MATCHING THE END FRAME, NO SUDDEN ZOOM AT THE END; EVERY CHANGE ON THE <person> (<list each item>) IS GRADUAL OVER AT LEAST 2 SECONDS WHILE HE IS SHARP AND CLEARLY VISIBLE, NOTHING APPEARS IN A SINGLE FRAME; ...
Seconds 3 to 5.5: he walks to the left ... seen in 3/4 side profile, sharp and in focus; while he walks, his surroundings change smoothly and gradually ... ; at the same time, while he stays clearly visible, his look gradually matches the end frame over more than two seconds: <item 1 forms>, <item 2 lengthens>, <item 3 forms on his feet>, <hat forms from the crown down, pom-pom last>.
```
Result (v1): good wet-plaza reveal, no end zoom. To improve: the jacket, joggers and sneakers swapped while he passed behind a wooden post (a hidden cut). The beanie popped in about 3 frames despite "from the crown down". The right hand froze in its end-frame pose (raised at the chest) from second 4 while walking. The ladder descent was barely shown. Fixes: change clothes and hats through hand actions, keep occluders away, let the arms swing naturally and form the end gesture only in the last 0.5 s.
v2–v4: putting the jacket on by hand gave one sleeve only (v2). A mix of the gradual and hand-action approaches produced a sharp direction change at second 4 (v3). v4 (the v2 prompt plus "stays on the far side, exits around the outside of the left rail", "both arms fully in both sleeves", "one constant walking direction") fixed the rungs and the sleeves, but the user still found the zipping and dressing during the transition imperfect, and the pair was set aside. Lesson: a coat with a zipper is the hardest clothing change. Prefer a simpler bridge, for example he is already wearing the jacket open in the start frame's world, or the jacket change happens while he is mostly turned in profile with minimal hand work, and do not combine zipping with the environment change.

## Pair: rain-wet aviation museum → lying on a studio floor next to toddler twins (7 s, v6 accepted)
Path to the accepted take:
- v1: the walk, the lie-down and the room change were good, but the hat was taken off and thrown.
- v2: too many new rules. The pace slowed, an arm froze, the hat floated up, and the twins dissolved in. Rejected.
- v3: a short, simple prompt.
- v4: the right arm was released.
- v5: the room change written as walking on into the next room, with the set and the twins solid and already there.
- v6: "even symmetrical steps, no limp" plus "head up, face toward camera the whole time while lying down".
Lessons: simple prompts beat long ones, change one thing at a time, and Kling still swaps clothes in a few frames.

## Pair: hugging newborn twins (top-down) → close portrait on a black leather sofa (7 s, v1 and v2; v3 planned, then skipped by the user)
- v1: "the white fur backdrop becomes the sofa" produced a dissolve with ghosted twins.
- v2: the sofa was made a solid object behind the rug, which removed the dissolve, but the overhead camera pulled the boy up into the lens and his face was hidden for about 1.5 s.
- Next fix: pull the camera back and down to an angled front view before he sits up.

## Pair: sofa portrait → sitting on sunny front steps with a fruit basket (8 s, v1)
Device: the camera leads him backward. He slides off the sofa, walks toward the camera, goes out through the open front door that is visible in the end photo, walks down the steps and sits behind the basket.
Worked: the most natural transition so far. One connected space, the face always visible, and the basket revealed rather than popped in.
To improve:
- The shirt changed blue to white in about 0.5 s while he passed through the doorway.
- The flower crown appeared in about 0.25 s.
- His legs shot forward when he sat down.

## Pair: sitting on sunny front steps with a fruit basket → climbing a wooden playground ladder in a park (8 s, v1, no user verdict yet)
Device: he lets go of the basket and stands up to the right of it. The basket stays on the step. He walks right in 3/4 profile with a slow follow camera, and the front garden continues onto the park path. The ladder is revealed in the foreground, and he climbs on its far side. The camera ends looking through the rungs.
Worked: a natural stand-up, the basket stayed put and left the frame, one connected space with no dissolve, no passing through the rungs, and a stable end with no zoom jump.
To improve:
- The clothes did NOT change during the open walk. The polo, jeans and sandals swapped to the T-shirt, shorts and bare feet in about 0.15 s, exactly as he passed behind the ladder's side post (around 4.9 s). This happened even though the prompt said "fully finished before the ladder enters the frame".
- The flower crown faded out early (around 2–3 s) instead of flower by flower.
Lesson (also in SKILL.md): when the end frame has a foreground object between the camera and the person (a ladder, a fence, bars), Kling uses it as a hidden cut for the clothes swap. Next time, start the change early (from the first second of the walk) and say it is "already half changed by second 3".

## Pair: lying on studio planks next to toddler twins → firefighter costume in a street-side garden (8 s, v1, no user verdict yet)
First mistake: I designed it in the reverse direction (firefighter → twins) because the firefighter image was attached first. The user corrected me: 10 → 11 means from photo 10 in the series order. Always confirm the direction from the series order.
Device: he gets up from lying, with his face toward the camera, and the camera rises with him. The twins stay sitting and leave the frame on the right. He walks left off the plank platform onto the lawn. The toy axe is already lying in the stone planter, and he picks it up and turns to camera.
Worked: a natural rise with the face visible, solid twins, the set → garden change as one space, and the axe was already there (no pop). A stable end.
To improve:
- The shirt changed white → blue in about 0.4 s, inside a fast camera move with motion blur (2.9–3.3 s). Kling hides the swap inside fast camera motion as well as behind occluders.
- The helmet appeared in about 0.2 s while he bent down to the axe (4.6–4.8 s). Bending and fast motion act as cover too.
- The studio wall and the garden were visible together for a moment as he left the set.
Fix used in the next pair: "slow constant speed, no motion blur at any moment", plus explicit midpoints for the outfit ("half changed by second 3.5, finished by 5"), plus a similar-object change for headwear (a helmet darkens and rounds into another helmet) instead of a hat appearing from nothing.

## Pair: firefighter costume in a garden → riding a pony in a stable yard (9 s, v1; the first submission failed server-side and was resubmitted unchanged)
Device: he puts the toy axe on the planter and walks right with a slow, constant follow camera. The lawn continues into a sandy stable yard, and the saddled pony is already standing there. He steps up on a wooden mounting block, swings his leg over and sits.
Worked: one connected space with no dissolve, the pony was solid and revealed by the camera, the mounting was physically believable with no helper, and the end was stable.
To improve:
- Despite "half changed by second 3.5", each item still swapped fast and in the open: the yellow helmet → black riding helmet in about 0.25 s (around 4.4 s), and the jacket and trousers in 5–5.7 s.
- The face was turned away from the camera during the mount (6.2–7.3 s).
- User feedback: the toy-axe put-down looked like an unnatural throw with no real arm motion.
User rules from this feedback (now in SKILL.md):
1. Design for 6 s first and justify anything longer. Long clips also bring face flicker.
2. A small held prop may just fade out of the hand during the motion. A throw or put-down must be precise and physically real.

## Pair: riding a pony in a stable yard → kneeling shirtless in beach sand by a dug hole (7 s, blocked twice)
Both submissions ended with SENSITIVE_RESULT (moderation on the generated result; credits refunded). It made no difference whether the prompt named "swim shorts" or never mentioned clothes at all.
A third attempt used the water-portal device that had worked for the user's earlier girl → swimsuit transition (a shallow dive, the change underwater, surfacing upright). It was blocked too. That device worked for a one-piece swimsuit, but not for a young child with no shirt.
Lesson: when the end frame shows a child without a shirt and the start frame shows him dressed, any transition shows a child's clothes coming off, and Kling's moderation blocks the result. Do not try to word around this. Tell the user up front and offer:
- a plain edit cut for that pair;
- a different end photo in which the child is dressed;
- making the pair the start of a new sequence.

## Pair: orange orchard on a stepladder → sitting on a red raft on a river (7 s, v1; the user said the flow was good overall)
Device: he climbs down, the orange fades from his hand, and he walks along the orchard path to a reedy riverbank. He wades in, climbs onto the raft, which was already floating there, and sits on the front tube.
Worked: one connected space, the raft was solid, the climb in was physical, and the end was stable.
User feedback: the main problem was FACE distortion and flicker. Keeping the original face matters most.
QA: the face drifted to a generic boy at about 2.5–4.3 s, when it was small in a wide shot, in profile, with a fast camera and blur, and while the vest, shorts and environment were all changing. The vest and shorts appeared in about 0.2 s at 3.1 s, and the sleeves turned black at 4.4 s.
Next time: keep a medium shot with the face large and 3/4 to camera, slow the camera, change fewer things at once, and name the facial features in the prompt.
v2 (the v1 prompt plus a very slow camera at a constant medium distance, the face large and in 3/4 view, named facial features, and the outfit change separated from the place change): the face stayed much more stable and recognizable. But Kling did not walk him to the river at all. He stayed by the ladder, and at 2.3–3.0 s the orchard DISSOLVED into the river, with the raft superimposed over the orchard as a double exposure. Then he appeared already at the raft, followed by an odd leg kick while sitting (4.3 s).
USER VERDICT: rejected strongly. A dissolve is never acceptable, and the walk is a MUST. Lesson: "very slow camera + constant medium distance" removed the room Kling needs for a physical walk between two far places, so it fell back to a dissolve. There is a trade-off: a moving camera carries the place change but distorts the face, while a slow, close camera keeps the face but dissolves the place. Middle ground to try next: a moderate, steady follow speed (not "very slow"), a medium-wide distance during the walk only, a push-in to medium when the face matters (start, sit, hold), and a short walking distance (the river is right behind the orchard row).
v3 (ACCEPTED, "overall excellent"): the v1 prompt word for word plus three face lines (named facial features with "in every frame, no flicker"; "face turned toward the camera in 3/4 view, never pure profile" in the walk; "outfit complete before the riverbank appears"). The walk and the one-shot came back, and the face was large, sharp and recognizable through the walk. This confirms the iteration rule: copy the liked prompt and only ADD lines.
Remaining user note: the life vest still appeared over the shirt like a cut (about 2.0–2.3 s). The outfit must change smoothly DURING the walk.

## Pair: sitting on a red raft on a river → kneeling among boulders in a shaded clear stream (v1 6 s; v2 7 s)
Device: he gets off the raft into the shallow water and walks right. The same water continues upstream into a narrow rocky stream, revealed by the camera, and he kneels between the boulders.
v1 (user: "looks pretty good"): one connected space with a real walk, and a stable end. Problems:
- The life vest vanished in about 0.25 s while he got off the raft, even though staged fading was requested.
- His head was cut off at the top of the frame at 3.5–4 s, when the camera lowered early.
- USER FLAG: at 2.3–2.9 s the walk turned into hopping or skipping, with both feet in the air and a high back-knee kick, "out of sync, as if stuck in the motion".
Causes: "knee-deep water" plus the word "wades" invites high splashing steps, and 6 s squeezed the walk into 2.5 s.
v2 fixes (the v1 prompt plus additions):
- ankle-deep water and "walks calmly" instead of "wades";
- "unhurried, even pace, one foot always on the ground, no hopping, skipping, jogging or high knee kicks";
- "the vest stays fully on while getting off; fading starts only once walking";
- "the whole head stays inside the frame; the camera lowers only after he kneels";
- 7 s, to give the walk 3.5 s.
v2: the calm-walk fix worked (no hopping). The vest still vanished in about 0.25 s right as the walk began (1.75–2.0 s), and the head was cropped at the top for about 0.5 s.
v3 (the vest described as an in-place material and colour transformation, with timestamped intermediate states: straps melt by 3 s, rust-brown thin fabric by 3.8 s, black by 4.5 s; no word "fade"; "eye level with clear headroom"): the vest DID stay on through most of the walk, longer than before. But Kling still swapped it in about 0.25 s at about 4.5 s. Worse, the camera framed the boy chest-down from 3.25 to 5.5 s with his head out of the top of the frame, so the swap was hidden by the cropped framing. Conclusion: Kling 3.0 start/end-frame keeps a removed garment intact and then swaps it in one moment, and timestamped states only move the moment later. Taking a vest off smoothly may not be achievable with this model. Prefer the take with the best walk and face, and do not spend many credits chasing it.
