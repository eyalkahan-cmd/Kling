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
USER VERDICT on v3: "the clothing change here is good". To the viewer, the late in-place change (the vest kept through the walk, then turning into the T-shirt) read as acceptable, despite the swap measured in frame QA. The user is choosing between v2 and v3. Takeaway: the material-and-colour transformation wording with timestamped states is the best wording so far for removing a garment, so reuse it. Still guard the headroom.

## Pair: on a pony in a stable yard → sitting cross-legged on a lawn, high angle (new photo 13 replacing the blocked beach photo; v1 7 s)
v1 problems:
- In the dismount (1.75–2 s) he turned his back to the camera, then jumped to the ground beside the horse.
- The camera then swung around and went overhead while he walked straight toward the lens (4.5–5.25 s), so his face came very close and was distorted. User: "a lot of flicker in the camera transition; the dismount is distorted too; it doesn't look like the boy; a longer prompt and slower motion would succeed".
Fix plan for v2:
- a face-visible dismount (the right leg forward over the pony's neck, sitting sideways facing the camera, then sliding down);
- a side follow camera at eye level while he walks ACROSS the frame;
- rise to the high angle only after he is seated, slowly and at a distance;
- slower actions; 8 s.
v2 on KLING 4.0 (kling-video-v4_0, the same v2 prompt, 8 s, 1080p, 108 credits = 13.5/s), frame QA:
- Clearly better than v3.0. The face stayed recognizable and smiling through the dismount and the walk (2.25–4.5 s), with no flicker visible in the sheet.
- The forward leg-swing dismount was followed (sitting sideways, then sliding down).
- He walked across the frame, and the yard continued into the lawn as one space.
- The end was stable and matched N+1.
Problems:
- The helmet vanished early, during the dismount (about 1.5–1.75 s).
- The polo and the navy shorts arrived fairly fast (about 3.25 s and 4.25 s) but in the open.
- At 4.75–5.75 s he bent far forward with his head down while sitting, hiding his face. The sit-down needs "sits straight down, head up, back upright, eyes on the camera the whole time".
USER VERDICT: "much better than 3.0". Kling 4.0 became the default model for all transitions.

## Pair: sitting on a lawn (steep high angle) → kneeling behind a dug hole on a beach (high angle) (Kling 4.0, 7 s, 94 credits, v1)
Device: he stands up, walks across the frame, and the lawn continues through beach grass onto the sand. The bucket and the hole are already there, and he kneels behind the hole. The camera stayed high throughout, because both frames are high-angle.
Worked:
- The grass → sand change was one connected space, with no dissolve.
- The sea, bucket and hole were revealed, not popped in.
- The sneakers became bare feet while he stepped onto the sand (about 4 s), which read naturally.
- The end was stable and matched; the face was good wherever it was visible.
Problems:
- His face was HIDDEN for most of the clip. A high camera over a walking child shows the top of his head, because a walking child looks down at the ground.
- He bent forward to stand up (0.75–1.5 s) and again to kneel (4.5–5.25 s), despite "back upright, head up".
- There was a fast camera move with blur at 1.5–2.25 s.
- The polo became a T-shirt at about 1.75 s, inside that blur.
Lesson: even when BOTH frames are high-angle, do not keep the camera high during the walk. Lower it to eye level (a side follow) for the walk, so the face is visible, and rise to the high angle only after the final pose. Kling 4.0 still bends children forward when they stand up or kneel. Add "he rises and lowers himself like a gymnast, spine vertical, chin up, smiling at the camera".

## Pair: kneeling at a beach hole (high angle) → on a stepladder in an orange orchard, holding out an orange (eye level) (Kling 4.0, 7 s, 94 credits, v1)
Device: the camera lowers to eye level, he stands up and walks right along the beach, and the beach sand continues into the orchard soil, with the orange trees lining the beach. The ladder is already there; he climbs and picks an orange.
Worked:
- During the walk (0.5–3 s) the face was large, frontal, smiling and stable. This is the best walk face so far, so the eye-level side follow works.
- The beach → orchard was one connected space.
- The outfit changed in visible stages: blue sleeves at 2.0 s, then the sweatshirt at 2.25 s, then long trousers, socks and sneakers at about 2.75 s.
- The orange was picked from the tree, and the end matched.
Problems:
- A HARD CUT at 0.125 → 0.167 s, from the high angle straight to eye level in one frame. "The camera lowers smoothly from the high angle to eye level" squeezed into 0.9 s made Kling 4.0 cut instead of move. Lesson: a big camera-angle change needs at least 1.5–2 s of visible, continuous crane motion, written as "the camera cranes down slowly and continuously over 2 seconds, never cutting". Or keep the camera high for the first steps and lower it gradually while he walks.
- During the climb and the pick (4.25–5.75 s) he was in profile, reaching into the tree, so the face was mostly hidden. Picking from the side of the tree turns the face away. Have him pick a fruit hanging in front of him on the camera side, or hold the orange already picked earlier along the path.
- The hold was short (about 0.75 s).
USER VERDICT: "it looked really good to me". ACCEPTED as is, despite the short angle jump at 0.15 s and the profile pick found in frame QA. At normal playback speed the user did not notice them. Takeaway: report QA findings, but let the user's viewing decide. Do not push for a re-take on defects that are invisible at normal speed.

## Re-do: play mat → grandpa on the sofa, on Kling 4.0 (photos 1 → 2)
User correction BEFORE sending: my analysis called the grandpa's clothes a "cream embroidered tunic". He actually wears a beige short-sleeved shirt with embroidered trim over SEPARATE white trousers. User: "analyze every photo to the smallest details, be thorough without compromises". The zoomed crops confirmed:
- a V-neck with embroidered trim and a white undershirt;
- wide short sleeves with embroidered hems;
- the shirt worn untucked over white ribbed trousers.
Key insight: frame 1 already shows the corner of the same beige sofa, so the mat and the sofa are in ONE room, and the baby crawls to the sofa.
Kling 4.0 result (7 s, 94 credits), frame QA:
Worked:
- One room: the mat → Persian rug → sofa, revealed by the camera, with no dissolve.
- The grandpa was already seated and solid, his shirt and trousers stayed separate (no robe), and he never stood.
- A natural lift onto the lap, and a stable end that matches N+1, with good faces in the hold.
- The baby's clothes changed during the crawl (grey top and navy shorts by about 2.25 s), in the open.
Problems:
- The baby's face was hidden for most of the crawl: back of the head and side view from 0.4 s to 4 s, despite "head up, face toward camera". A crawling baby moving away from the camera shows his back.
- A fast camera move with blur at 1.5–3.5 s.
- The baby stood up on the rug (4–4.5 s) before the lift. That is plausible, but he was not crawling.
Lesson: for a crawl, put the camera AHEAD of the baby (leading backward, the door-portal device), so he crawls TOWARD the camera at a diagonal and the face is visible. Or keep the crawl very short.
USER VERDICT: a significant improvement over the Kling 3.0 version, and accepted. Side-by-side QA of the old v3.0 take: the mat dissolved and smeared into the Persian rug around the crawling baby at 2.7–3.7 s, with toys melting. The baby's pants changed late, in the lift. On v4.0 the room stayed solid and the change was a true continuation. Kling 4.0 confirmed as the right default.

## Re-do: grandpa's lap → bucket swing in the park, on Kling 4.0 (photos 2 → 3; 8 s, 108 credits)
Device: the seated grandpa lowers him to the rug. The camera LEADS the toddler, moving backward at his eye level, so he walks toward the camera diagonally. He goes out through an open glass patio door straight onto the playground and climbs into the low bucket swing.
Worked:
- The toddler's FACE was frontal and recognizable during the whole walk. This is the camera-leading device again.
- The grandpa stayed seated, with his shirt and trousers separate.
- The patio door shows the park through the glass as a real opening; the old v3 half-and-half seam was mostly gone.
- The clothes changed while he walked in the open (3.25–3.75 s).
- Climbing into the swing was plausible, with no passing through, and the end matched with a big laugh.
Watch:
- At 3.5–4.25 s, the room interior stays at the left of the frame while he is already outside, with no wall or door frame between them. It is a partial side-by-side composite; ask for "the door frame and outer wall pass the side of the frame as the camera exits".
- He climbed in from behind the swing.
- The swing rim passed close to the lens at 4.5–4.75 s.
USER VERDICT: "not good. The baby goes in THROUGH the swing and does not climb. He must go over the bars and the rim around it." Not accepted. The rule was added to the failure dictionary. Plan: continue the next transitions on Kling 4.0, and maybe return to re-do earlier Kling 3.0 pairs at the end.

## Pair: crouching in a shaded stream → aiming a cue in a dim billiard hall (Kling 4.0, 8 s, 108 credits, v1)
Device: he stands up, and the camera LEADS him backward out of the stream along a boardwalk. The camera passes through the stone doorway of a building on the bank and backs into the billiard hall, where he picks up the cue from the table and leans into the shot.
Frame QA:
- The best outdoor → indoor change so far: the door frame passes the sides of the frame, the hall is revealed behind the camera, and the light changes at the threshold.
- The face was frontal, large and stable for 0.5–5.5 s.
- The shirt print faded and the navy shirt with a small chest logo formed while he walked (3.75–4.5 s); the hair dried.
- The cue was picked up from the rail, and the end matches.
Minor issues:
- The stream stayed visible through the open doorway behind him for a while (correct physically).
- The camera re-angled from inside the hall to the table corner at about 5.75–6 s, somewhat fast.
Takeaway: the camera-LEADS-through-a-real-doorway device is the most reliable for big place changes, including outdoor → indoor.
