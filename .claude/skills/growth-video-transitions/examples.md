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
