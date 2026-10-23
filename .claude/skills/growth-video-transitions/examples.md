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
USER VERDICT: the walk and the environment were beautiful, but at 3–6 s his HAIR had a puffy mop of curls on the SIDES. Zoom check: the end-frame cut has short, faded/tapered sides and back, with tight short curls on top swept up at the front. The clip inflated it into a wide, bushy curly mop. Cause: the word "fuller". v2 = the v1 prompt verbatim, with the hair line replaced by the exact cut, a no-volume-change lock, and only the wet shine fading.
v2 (the v1 prompt verbatim plus a HAIR LOCK with the exact cut and "only the wet shine fades", 108 credits). Zoomed QA at 3, 4, 5 and 6 s: the hair stayed a short, neat cut with tapered sides; no puffy side curls. The hair lock works.
The walk, the led doorway and the end were as good as v1. The polo (with a collar) formed at about 3.25 s.
Minor issue: the light at the doorway made the face dark-backlit for about 0.5 s (2.75–3 s), which is physically natural.
v2 (the v1 prompt plus "the camera never jumps; it stays high while he stands, then cranes down over 2 full seconds", 94 credits): frame-by-frame QA of the first 1.2 s shows NO cut. The camera stays high and moves continuously. Fix confirmed.
Trade-off: while he stands and takes his first steps under the high camera (0.5–1.25 s) he bends forward with his head down, so the face is briefly hidden. In the walk the face is in profile or 3/4 more than in v1. The clothes changed in clear stages (sleeves 3.0 s → trousers and socks 3.25 s → sweatshirt 3.75 s).

## Pair: aiming a cue in a billiard hall → kneeling on a snow mound in the mountains (Kling 4.0, 8 s, 108 credits, v1)
Device: he lays the cue down and the camera leads him to an open exit door onto a snowy slope, where he kneels on the mound.
Frame QA:
- The door portal itself worked: the snow was seen through the doorway, the light changed at the threshold, there was no dissolve, and the end matches.
- MAJOR FAILURE: Kling did NOT lead. The camera FOLLOWED behind him, so his BACK was to the camera from about 2 s to 6 s; he walked away from the lens toward the door at the far end of the hall.
- The navy polo snapped into the grey hoodie at about 1.75 s while he turned away.
Cause: I placed the exit door "at the end of the hall", which is in the background of the first frame. Kling sends him toward a door it can see ahead in the frame, so he walks away from the camera, whatever the "camera leads him" line says.
Rule: when using the led-camera portal device, put the portal BEHIND THE CAMERA (out of the first frame, toward the viewer). Write: "the open exit door is behind the camera; he walks TOWARD the camera, and the camera backs out through the doorway ahead of him". Never place the destination opening in the visible background of the start frame unless he may walk away from the camera.
USER VERDICT: a back view is fine as an idea. The real problem was that the door was FAR away, so he walked fast, almost running. 100 credits is a lot, and shorter transitions are fine. The billiard pair (17→18) also had a needlessly long walk. Plan short distances, natural pace, and realistic motion. v2 plan: the exit door is right beside the table, a few steps away, and the snow mound is just outside the door; 6 s.
USER DECISION: keeps v1 of billiards → snow for now.

## Pair: kneeling on a snow mound → standing on a pier ladder over a turquoise sea (Kling 4.0, 6 s, 81 credits, v1)
User framing: "a classic natural walking transition, nothing held, nothing complex, just a walk".
Design from analysis:
- Both frames share a blue sky and a slope or hill on the LEFT, so the place stays one landscape and changes SEASON in place: snow melts into pier planks, the slope thaws into a green hill, the valley fills with sea, and the bare trees give way to cabanas on stilts.
- Five calm steps right (the distance budget).
- The flip-flops already lie on the planks.
- Each garment in its own window, colour then shape, with removed gloves and boots thinning in place.
- Hair lock.
v1 RESULT, FAILED (81 credits). Frame QA:
- 0–2.6 s was good: he rose and walked calmly in the snow.
- At 2.8–3.6 s Kling built the pier as a separate composite layer: the pier and sea spread in from the lower right like an irregular patch over the snow. A SECOND boy, already dressed in the white T-shirt and blue shorts, appeared on the pier, while the first boy in the hoodie walked OUT of frame on the right.
- The snow slope stayed visible above the sea until about 4 s.
- The end was correct.
Cause: "the season changes in place" with two very different places made Kling composite the end frame in as a separate region. And because the clothes on the walking boy had not changed yet, it introduced the end-frame boy as a second person.
Rule: a whole-landscape season change in place is NOT reliable on Kling 4.0 for very different places. Use a real connected threshold instead (a path that leads down onto the pier, a doorway or a gate), keep ONE boy whose clothes change on him while he walks in view, and write "only one boy exists in every frame; the boy in the end frame is the same walking boy, never a second person".
USER VERDICT on snow → pier v1: "really bad; where are the environment transitions and the walk we learned? You deviated from everything in the skill." v2 = rebuilt on the accepted beach → orchard v1 template: an eye-level 3/4 side follow walk to the right; a snowy path continues down onto a wooden boardwalk and the pier; the sea and cabanas are revealed ahead on the right; one boy, with the clothes changing on him in staged windows.
v2 (6 s, 81 credits, the proven walking recipe: a snowy path continues onto a boardwalk and the pier, eye-level side follow), frame QA:
- One boy only, and a real continuous walk with the face visible.
- The snow path became the boardwalk under his feet, and the sea and cabanas were revealed ahead on the right with no patch and no dissolve.
- The hoodie became the white T-shirt and shorts at about 2.6–2.8 s while he walked in view.
- He stepped onto the ladder and the end matched.
Minor issues:
- The snow boots stayed on until about 4 s, then he was barefoot on the ladder.
- The NASA print appeared only at about 4.6 s.
Confirms: a connected path plus a side follow walk beats any "landscape morph".
USER VERDICT on v2: "not good. Think logically: he comes from the water side and cuts across to the ladder." It is more logical that he turns the other way, the path connects to the pier, he walks along the pier deck, then steps down the ladder and stands.
Lesson: read the end frame's GEOGRAPHY. The ladder sits at the edge of the deck, and the deck extends to the right/lower-right, so the only physical approach is ALONG THE DECK, from its land side, toward the ladder. Design the route to arrive the way a person really would.
v3 (6 s, 81 credits; the user's logical route: he turns left, the snow path joins the land end of the pier, he walks ALONG the deck, then steps down the ladder), frame QA:
- One boy, and a continuous walk in 3/4 view.
- The snow path became the pier planks under his feet at about 2.0–2.4 s, with the sea opening beside the deck and the cabanas revealed. No patch and no duplicate.
- The hoodie became the white tee at about 2.8 s and the shorts at about 3.2 s while he walked.
- He walked along the deck to the ladder and stepped down; the end matched.
Minor issues:
- Snow and trees were still visible at the left edge until about 2.8 s.
- The boots lasted until about 3.4 s.
USER VERDICT on v3: "not good, a dissolve, no environment flow. It should be like walking into a room or another location in one shot where everything connects. You struggle with 6 s; learn from the previous transitions." Snow and trees ghosted beside the sea at 2.4–2.8 s. A ground path cannot join a snowy mountain to a summer sea without dissolving; it needs a real portal (as in stream → billiards). v4 plan: an open wooden gate in a wall at the end of the snow path, with the camera leading him through it onto the sunny pier deck; a few steps along the deck to the ladder; 8 s recommended.
v4 (8 s, 108 credits; a REAL GATE, with the camera leading him through it), frame QA:
- No dissolve and no ghosting. The camera backed through a wooden gate in a plank wall (2.25–3.5 s); the snow stayed only BEHIND the doorway and the pier and sea were solid on the other side. The light changed at the threshold.
- He walked toward the camera with his face visible, stepped through, walked along the deck to the ladder and stepped down. One boy only, and the end matched.
- The clothes changed in stages on him: the white tee at about 4.0 s, the shorts at about 5.0 s, bare feet at about 5.25 s.
Notes:
- The wooden wall and gate stay standing on the pier as a visible prop until about 5.5 s.
- The snow is visible through the open doorway behind him, which is physically logical.
This confirms the portal rule: very different places need a real opening plus a led camera, at 8 s.
USER QUESTION on v4: "why a door at all, why not simply walk from the snow to the pier? What wooden door is there on a pier?" Answer: a direct walk (v2/v3) dissolved snow into sea because the two places cannot physically touch. The gate fixed the dissolve but is an implausible prop on a pier. Rule added: the portal must belong to the destination.
USER DIRECTION after v4: "why not walk from the snow side, the environment connecting to the pier, as in the earlier environment transitions; a side view is preferable." Then the user sent back v2: "it was good; the only change is that he comes from the other side, joins the pier and reaches the ladder."
v5 (6 s, 81 credits) = the v2 prompt mirrored: he walks LEFT the whole time; the snowy path → wet earth → wooden boardwalk joins the LAND side of the deck; he walks along the deck to the ladder at its left edge, arriving from the deck side, never from the water; "no snow anywhere once he is on the pier, gone by second 3"; at the ladder he turns to face the camera and steps forward down, facing the camera.
Frame QA:
- Worked: one boy; a real continuous side walk; the boardwalk joins the deck with no dissolve, no patch and no cut; he reaches the ladder from the deck side and steps down facing the camera (4.6–5.0 s); the face and hair are stable; the end matches.
- Weak points: the hoodie → white tee and shorts change was fast (about 3.2–3.6 s); the gloves stayed until about 3.5 s (a white tee with black gloves for a moment); a snowy bank beside the boardwalk and sea at 2.8–3.5 s; a brief back view at about 3.6–4.0 s on the deck.
USER VERDICT: agreed with all the weak points; ADDED one: at 2–3 s a black piece of bag stuck flat on his back (the "bag strap" named in the prompt). ACCEPTED v5 as the final 19→20 clip.
Lessons: the connected side walk beats any portal when the ground can plausibly connect; mirror an accepted take rather than redesign; do not name small accessories that must vanish; gloves first and early.

## Pair: standing on a pier ladder → tennis stance on a striped stone path in a resort garden (Kling 4.0, 7 s, 94 credits, v1)
End frame: perpendicular eye-level view; the dark boardwalk and a rustic post-and-rail fence run straight across the frame behind him, white/teal striped stone tiles in the foreground; he stands full-body in profile facing LEFT, racket low in the right hand, ball in the left; cap (navy brim, cream front, navy mesh), green tee with white print, black shorts with white star trim, white socks, grey sneakers, red wristband.
Device: step up from the ladder, side-follow walk right along the deck, the pier continues into the resort boardwalk; clothes in windows (shoes first, then tee, shorts, cap); racket and ball taken from the top of the fence rail; step onto the tiles and turn into the stance.
Frame QA:
- Worked: the step up from the ladder; the pier → garden boardwalk was one connected place with no dissolve; the clothes changed in clear separate stages (shoes 1.25 s, green tee 2.75 s, black shorts 3.25 s, cap 3.5 s); the racket was taken from the rail; face and hair stable; the end matched.
- FAILED: a HARD CUT at 4.1 → 4.2 s from the close diagonal follow on the boardwalk to the end frame's perpendicular wide view with the boy small in the background, who then walked toward the camera.
USER VERDICT: "not good! A cut at second 4 to another scene from another angle! No cuts, ever; every scene must always be one shot. Don't make mistakes, it eats credits." Rule added: ZERO CUTS by design (match the end frame's camera orientation and shot size for the whole clip; pure sideways dolly).
v2 plan: a pure sideways dolly parallel to the deck/boardwalk at the end frame's orientation and shot size from the start; he walks right in profile; the foreground water becomes the shore and then the striped tile path; he takes the racket, steps one step toward the camera onto the tiles and turns around to the left into the stance while the dolly slows and stops.
v2 (7 s, 94 credits; prompt opened with "ONE SINGLE UNBROKEN TAKE … one camera on a straight dolly track" and the camera-never-cuts block FIRST, before every other rule), frame QA at 8–12 fps plus ffmpeg scene detection: ZERO cuts.
- The camera turned gradually and continuously to the end frame's perpendicular angle at 3–4 s (a visible but smooth turn, not a jump).
- The pier deck → striped tile path → garden boardwalk was one connected place; the sea stayed behind naturally.
- Clothes in separate stages during the walk: sneakers 1.5–2.0 s, green tee 3.4–3.75 s, black shorts 4.5 s, cap 5.1 s.
- He took the racket and ball from the rail (4.4–4.75 s), stepped back onto the tiles and set the stance; the end matched; face and hair stable.
- Minor: a short back view walking to the rail (4.0–4.75 s), smaller in frame; the cap came late.
USER VERDICT: "a good transition, approved." ACCEPTED.
Takeaway: put the one-shot / camera rule at the very TOP of the prompt and design the camera path toward the end frame's orientation; Kling then turns gradually instead of cutting.

## Pair: tennis stance on a striped stone path in a resort garden → standing at center court in an indoor basketball hall (Kling 4.0, 7 s, 94 credits, v1)
End frame: frontal symmetric view; gray wall with a beige stripe, the hoop, rows of blue courtside chairs, light parquet; he stands straight facing the camera, big smile, yellow pinstriped sleeveless jersey with navy trim and number 2, yellow shorts with navy trim, white socks, blue-and-yellow high-top shoes, the basketball against his right foot; short dark hair with tight curls on top.
Before sending: I proposed an invented sports-hall DOOR with a led camera and an arc. USER: "where is there a door? why add a door?" and then: "never add details that do not exist; build transitions from what exists unless there is no choice, as an extreme case, and propose it first; chat in Hebrew, prompt in English." Rule added to SKILL.md.
Device sent: both frames are frontal views of a scene running across the frame, so a pure sideways dolly with no rotation; boardwalk → parquet, fence → row of blue chairs, palms → gray wall; tennis ball fades from the hand; racket leaned on the fence rail; clothes in windows.
Frame QA:
- ZERO cuts (verified frame by frame and with scene detection).
- The end matched; face and curly hair stable; he walked to the ball and turned to the camera.
- He walked RIGHT although the prompt said left.
- The racket did not get a clear placing motion; it hung half-transparent by the fence (1.2–1.8 s).
- Palms stayed visible above the blue chairs (2.5–4.0 s) until the gray wall completed.
- The cap stayed late and vanished fast while he turned (4.6–4.75 s); the jersey came fast (3.5–3.75 s).
USER VERDICT: agreed with all the weak points and ADDED the main one: "at second 2 you really see the dissolve from the palms to the parquet; it should be a continuous environment transition." Frame QA confirms: at 2.0–2.6 s the striped tiles faded into parquet under his feet and the chairs faded in over the boardwalk while the palms stayed. Rule added: a connected walk must be a reveal from the leading frame edge with a hard boundary line, never an in-place change.
v2 (8 s, 108 credits; "two neighboring regions side by side, one straight hard vertical edge enters from the right and slides left"; wearables inventory incl. cap and wristband), frame QA:
- FAILED: Kling rendered the "hard vertical edge" LITERALLY as a graphic SPLIT-SCREEN WIPE: from 3.5 to 6.0 s a rectangular panel of the basketball hall with a thin white border slid in from the right over the garden, like a video-editing wipe, with the garden still on the left of the panel until about 6 s. Not a place, a composite.
- Zero cuts (scene detection empty). The end matched.
- Wearables: cap gone by about 3.0 s (earlier than v1, good), yellow shorts at 3.0 s, jersey at 4.5–4.75 s; the racket stayed in his hand until about 2.75 s.
Lesson: never describe the boundary between two very different places as an "edge", "border", "line", "region" or "side by side"; Kling 4.0 turns that vocabulary into a split-frame wipe. For an outdoor → indoor pair with no physical connection in the photos, neither an in-place change (v1 dissolve) nor an edge reveal (v2 wipe) works.
USER VERDICT on v2: "not good! A separation and a jump with the opening. I said the previous version was good, only the cap appeared fast, and the racket should be PLACED, not thrown. You went too far; the change was extreme and not in the skill's guidelines. Check prompts thoroughly before writing; give a v1-style prompt with the relevant fixes."
MY MISTAKE: I broke the existing rule "when fixing a liked take, copy its prompt word for word and only ADD the lines for the problem" by rewriting the whole environment device. v3 = the v1 prompt verbatim; only the cap/wristband windows (early, staged), the racket (placed, leaning upright against a fence post, clearly letting go) and the tennis ball (into the shorts pocket) change, plus the walking direction set to RIGHT as v1 actually walked.
v3 (7 s, 94 credits), frame QA + scene detection:
- FAILED: a HARD CUT at 0.25 → 0.29 s from the wide first-frame view to a close side view of him already on the boardwalk by the fence.
- Cause: the new line "steps onto the boardwalk beside the fence, PAUSES, stands the racket against a fence post" made the very first action happen at the fence, about 1.5 m behind his start position; Kling jumped closer to stage it instead of walking him there. (v1 had "without bending or stopping" and no cut.)
- Otherwise good: he stood the racket upright against a post and let go clearly (about 2.25 s), and it stayed solid; cap staged and gone by about 3.0 s; jersey at about 3.5–4.0 s; the garden → court reveal was cleaner than v1 (the court came in from the right); the end matched.
(see the next pair for the following day)
USER VERDICT: "leave it, this was a significant waste of credits; we continue tomorrow with the next photos. Learn well from all the mistakes here and strengthen the skill." 21→22 left open (no accepted take; v1 is the closest: only the 2 s dissolve, the late cap and the hanging racket). The CREDIT-SAFETY GATE was added at the top of SKILL.md.
Lesson: a new action placed at the very start and away from the person's start position triggers a cut. Keep the first 1–1.5 s as simple as the liked take (walk only), put object actions after the walk is under way and where his path naturally passes the object, and add "for the first 1.5 seconds the camera keeps the exact first-frame framing and distance".

## Pair: standing at center court in a basketball hall → seated on a mountain bike in a forest meadow (Kling 4.0, 7 s, 94 credits, v1)
End frame: overcast forest meadow, dirt track from the lower left into the woods; he sits on a navy-and-white full-suspension mountain bike (front wheel to the left), hands on the bars, head turned to the camera; lime-green helmet with black chin strap, navy hoodie with a light-blue chest/hood panel and a white stripe, navy track pants, dark sneakers.
Device (gate passed: v1-style sideways dolly, frontal in both frames; nothing invented; ball left on the floor; bike already on the track; wearables inventory with early windows; first 1.5 s plain walk).
Frame QA (4 fps + 6 fps around the change + scene detection):
- Zero cuts. One boy. Face stable. The end matched.
- The meadow came in from the RIGHT with a soft diagonal edge while the hall stayed on the left (2.5–3.0 s): a partial side-by-side wipe for about 0.5 s, then fully meadow.
- Wearables ignored the windows: the helmet popped on within about 0.15 s (1.8 → 1.97 s); shorts → navy pants, shoes, and the jersey → hoodie all changed in about 0.5 s (2.3–2.8 s), crowded at the moment the place changed.
- The mount: he walked behind the bike and mounted from the far side with his BACK to the camera (4.25–5.0 s), and the camera drifted wider (he became small) before settling.
USER VERDICT on v1: "fix all the weak points; this was not a smooth environment transition like walking into a room, it made a WIPE of the background although there is a mandatory rule; and the same clothing mistake every time although the skill defines exactly how to act." Root-cause section added to SKILL.md: indoor ↔ outdoor with no shared ground always wipes/dissolves (needs a real opening, user's decision); clothes must finish in the START place before the place change; state the mount side relative to the camera.

## Pair: seated on a mountain bike in a forest meadow (day) → seated in a red go-kart on a wet night track (Kling 4.0, 7 s, 94 credits, v1)
User simplification before sending: no laying the bike down and no helmet removal by hand; he only gets off, the helmet changes on him like the clothes. User correction: the bike has a black KICKSTAND under the bottom bracket (I missed it in analysis; zoom props too, not only clothes), so it stays standing.
Device: dismount on the camera side, sideways dolly right, dirt track continues into the kart-track asphalt, wearables all finished in the meadow by 3.4 s, evening falls while he walks, camera rises mid-walk.
Frame QA (4 fps + 8 fps around the change + scene detection):
- Zero cuts. One boy. The dismount on the camera side worked, the bike stayed standing on its kickstand.
- Wearables DECOUPLED from the place change worked: helmet gone about 2.5 s, hoodie → puffer jacket about 3.25–3.5 s, all while still in the meadow (the new rule held).
- The dirt track → asphalt road continuation at 2.75–3.5 s was smooth (daylight).
- FAILED part: the NIGHT arrived as an irregular round PATCH that bubbled in around him (3.95–4.3 s): pink rocks and night lights spread in a blotch over the daylight scene. Day → night in one walk produced a local patch instead of a gradual dimming.
- Back to the camera while walking to the kart (4.3–4.9 s) and he entered the kart from the far side, despite "camera side" wording.
USER VERDICT on v1: the back view was fine in this case. Fix: the helmet disappeared like a CUT (verified: gone in one frame, 2.25 → 2.33 s); from 4 s the walk is fast and unnatural like fast-forward (pace must stay constant); the round "circle" dissolve is ugly and conspicuous, even a wipe would be better, NEVER use opening circles; the rule remains no wipe either, only a connected one-shot. Rules added to SKILL.md (constant pace, no iris, rigid headwear, day → night).
v2 (8 s, 108 credits; v1 verbatim + constant-pace line, even sunset over the whole frame 1.5–5.5 s with lamps one by one and explicit "no circle/iris/spreading spot", staged helmet-into-hair process, kart a few steps past the asphalt start), frame QA (4 fps, 8 fps around 3–4.8 s, scene detection):
- Zero cuts. One boy. The bike stayed on its kickstand.
- NO circle/patch: the dusk came evenly over the whole frame from about 3.75 s, lamps switching on (4.0–4.5 s). Even-sunset wording + explicit iris ban worked.
- Helmet: staged but late and short: green (3.25) → darkened gray cap-like (3.375) → hair (3.5). Visible as a change, not a one-frame pop, yet only about 0.25 s instead of the 1.5 s window.
- Hoodie → puffer jacket at about 2.6–2.75 s in the meadow (decoupled from the place change, held).
- The pace looked steady through the asphalt section (no fast-forward visible in the 4 fps sheet).
USER VERDICT on v2: "a perfect transition, a beautiful execution!" ACCEPTED. This is the reference recipe for outdoor → outdoor pairs with a day → night change:
- the v1 prompt verbatim + only the listed fixes (re-take discipline);
- dismount only, the object stays (bike on its kickstand), the helmet changes on him like the clothes (user's simplification);
- all wearables finished in the START place before the place change;
- sideways dolly along one continuous ground (dirt track → asphalt), the destination object a few steps past the change;
- the constant-pace line;
- an even sunset over the WHOLE frame spread over about 4 s, lamps one by one, explicit ban on circle/iris/spreading spot/local patch;
- 8 s.

## Pair: seated in a red go-kart on a wet night track → standing on a four-wheel standing scooter on a river bridge by day (Kling 4.0, 8 s, 108 credits, v1)
Built on the accepted bike → kart v2 recipe in reverse (sunrise, camera lowering, kart asphalt → bridge sidewalk, yellow railing → white bridge railing).
Frame QA (4 fps, 8 fps at 2.6–4.2 s, scene detection):
- Zero cuts. One boy. He unclipped and got out of the kart on the camera side (0.5–2.0 s).
- Wearables: trousers turned light gray early (about 2.25 s), helmet in visible stages 2.85–3.1 s (tint → shell), puffer → navy/light-blue hoodie 3.35–3.75 s. Mostly before the place change, but the helmet was only about 0.3 s.
- Place: the kart track continued into the bridge sidewalk with the railing continuing (3.0–4.0 s). The sky brightened unevenly: a light rectangle of daytime sky/buildings appeared at the upper right while the left stayed night (3.4–3.9 s), a soft partial wipe of about 0.5 s.
- He walked past the scooter's front and stepped onto the platform from the far side with his back to the camera (4.75–5.5 s); the end matched.
USER VERDICT on v1: "a good transition" overall, ACCEPTED. The partial sky wipe (3.4–3.9 s) is a real flaw: keep avoiding wipes as much as possible (the user understands it happened despite the restrictions on this hard pair). The back view while stepping onto the scooter was RIGHT here: the physically realistic way to mount comes first; the user prefers correct, realistic body motion over keeping the face to the camera.

## Pair: standing on a scooter on a river bridge (cloudy autumn day) → on a hanging beam in a treetop rope park (sunny summer) (Kling 4.0, 8 s, 108 credits, v1)
Device: the accepted dolly recipe; elevated walkway → elevated walkway (bridge sidewalk → tree platform, railing → ropes/cables, river below → forest floor below); six wearables staged before the place change (incl. a climbing harness and gloves); real clip-in on the cable; SFX-only audio line; _preview and _sfx versions delivered.
Frame QA (4 fps, 8 fps at 2.8–4.2 s, scene detection):
- Zero cuts. One boy. Natural dismount; the scooter stayed.
- Wearables in the bridge walk: yellow helmet about 1.75–2.0 s, white hoodie 2.25 s, maroon shorts 2.5 s, red gloves 2.75 s; the harness formed about 3.8–4.0 s (on the platform, at the end of its window).
- Place change: the wooden deck appeared under him at about 2.75 s; then a TREE TRUNK entered from the right and the forest came in behind it while the river and the hill stayed on the left (3.0–3.75 s): a vertical reveal with a real tree as the boundary, about 0.75 s with two places side by side. Fully forest by about 3.9 s.
- Clip-in and step onto the hanging beam (4.25–5.0 s); the end matched.
USER on v1: "I did not want a wipe; why did it still happen? What can be fixed so it is exactly the same transition as a continuous scene, photo connected to photo?" Diagnosis added to SKILL.md: a sideways dolly brings a different far background in from the frame edge, which is a wipe by construction; the fix is a destination ahead in depth (the bridge leads to the wooded hill) with a slow mid-walk camera turn to a 3/4-behind follow.
v2 (8 s, 108 credits; v1 + mid-walk camera turn to a 3/4-behind follow, destination = the wooded hill already in photo 25, forest ahead in depth, even season change), frame QA (4 fps, 8 fps at 2.0–3.4 s, scene detection):
- Zero cuts. The camera turned smoothly (2.0–3.0 s) to look along the bridge; the bridge railing ran into depth and the forest grew AHEAD on the right side of the path while the bridge and hill receded on the left (2.25–3.25 s). Geographically coherent, a depth reveal rather than a frame-edge wipe, but the two places still share the frame for about 1 s along the walkway line.
- Wearables all on the bridge: helmet yellow about 1.75 s; hoodie white 2.35–2.5 s (fast); harness and gloves 2.5–2.6 s.
- Back view during the clip-in on the platform (4.0–5.25 s), then he stepped onto the beam and turned to the camera; the end matched.
USER VERDICT on v2: "not good! He passes THROUGH the railing, walks in the air, passes through the rope." REJECTED; the user keeps v1. My frame QA missed it: I checked place/wipe and clothes, not body-vs-object collisions. Cause: the turned camera looked along a bridge walkway that had to "become" a treetop walkway, so the walkable surface under him became undefined (railing, open air, ropes in his path); Kling moved him through the railing and over empty space.
Lessons:
- PHYSICAL INTEGRITY beats a cleaner place change: never trade a small visible seam (v1) for a design where the ground under his feet is not continuous and solid.
- When the ELEVATED walkway changes type (bridge sidewalk → treetop platform), the person must stay on one clear, solid floor surface the whole time, and the railing/ropes must stay BESIDE his path, never across it.
- QA must include a COLLISION pass: at 8 fps, check every frame where his body is near a railing, rope, cable, net or wall: does any limb or the body pass through it, are both feet on a real surface?

## Pair: on a hanging beam in a treetop rope park → standing on a gravel mound in a mountain clearing (Kling 4.0, 8 s, 108 credits, v1)
Prompt reviewed twice before sending (user asked to re-check it is "tight"). Review found a critical DIRECTION bug: "turns to his LEFT" while he faces the camera = frame RIGHT (into the cable). Rule: always write directions relative to the FRAME ("toward the LEFT SIDE OF THE FRAME (his right)"). Other review fixes: camera stays at his chest height (no fake lowering), explicit "the forest floor rises up the slope until the walkway ends level with the ground", the known near trunk allowed in the foreground, compact wording with the key blocks first.
Frame QA (4 fps, 8 fps at 0.4–2.2 and 2.9–4.5 s, collision pass, scene detection):
- Zero cuts. No body-through-object collisions found; feet on beams/planks/ground throughout.
- He did not step back to the platform: he moved along the hanging beams toward the left side of the frame (0.5–1.75 s), then along a low plank walkway of separate steps that descended to the ground beside the rope net (2.0–3.75 s), and stepped onto a dirt road (3.75–4.25 s). The forest opened to spruce and the mountain view at 4.25–5.0 s along the walk (forest → mountain came in from the leading edge but through thinning trees).
- Wearables late: gloves and harness stayed until about 3.5–3.75 s; the helmet turned brown at 3.75 s and stayed as a brown helmet until about 4.25 s before becoming hair (the hair-colour stage was read as a brown helmet).
- The end matched (standing on the gravel mound, smiling).
USER VERDICT on v1: "quite OK given the limits", ACCEPTED, although at the start he passes THROUGH the rope (barely noticeable). My collision pass missed it: at 0.6–0.9 s his body overlaps the vertical ropes and the cable around the hanging beam. Lesson: a start pose INSIDE a web of ropes (rope course, swing chains, nets) is a collision hotspot. In the prompt, name each rope near his body and the exact way his body moves AROUND it ("he ducks under the cable", "he steps between the two vertical ropes, holding one"), and in QA zoom at 12 fps into the first 2 s of any rope/net start pose.

## Pair: standing on a gravel mound in a mountain clearing → ankle-deep in the Red Sea in scuba gear holding fins (Kling 4.0, 8 s, 108 credits, v1)
Prompt reviewed twice at the user's request; review added a PRIORITIES line at the top (one take → same face → physical integrity → connected place → staged wearables), moved the camera lowering out of the last 2 s, made the camera descend with him on the slope, fixed "sea revealed ahead" (with a frontal camera the sea ends BEHIND him), protected the fins from popping in, and limited "constant pace" to the walking part.
Frame QA (4 fps, collision pass, scene detection):
- Zero cuts. One boy in the foreground. No body-through-gear collisions; the tank formed on his back.
- Place: the gravel path became a sandy beach with the sea on the right while green mountains and pines stayed on the left (2.25–3.75 s), reading as a mountain-lake shore that then opens into the sea with the desert mountains (4.0 s on). A continuous shoreline walk, no hard seam.
- Wearables: barefoot about 2.25 s; wetsuit 2.75–3.25 s (fast); BCD and tank about 3.5 s; mostly before the water.
- Fins: they lay in the shallow water; he bent forward with his head down to pick them up (5.25–6.5 s), face hidden for about 1 s, with a splash.
- The end matched.
USER VERDICT on v1: "an excellent transition." ACCEPTED. Reference recipe for a mountain → sea/coast pair: the double-reviewed prompt with the PRIORITIES line, a sideways dolly that descends with him along one continuous path (gravel → beach → waterline), the new shore entering along the walking line so it reads as a lakeside walk that opens to the sea, all wearables (including heavy gear) finished before the water, the prop already lying at the waterline. The short bend to pick up the fins (face hidden about 1 s) was acceptable to the user.

## Pair: ankle-deep in the Red Sea in scuba gear → on a grassy ridge at a spruce-forest edge (Kling 4.0, 8 s, 108 credits, v1)
Prompt reviewed three times (third pass: only a cap logo detail and "swimmers never come closer"; told the user further rewording would not change the result). Review 2 fixes: staggered wearable windows with small overlaps (earlier draft overlapped 4 items at once), cap moved early, frame-relative directions, "exact end-frame pose" instead of guessing the body direction.
Frame QA (4 fps, scene detection, collision pass):
- Zero cuts. One boy in the foreground; swimmers stayed far.
- Fins: he waded to the shore and laid the fins on a flat rock with a real let-go (1.0–2.0 s), leaning but with his face visible; the fins stayed on the rock.
- Place: the pebble shore became a dirt path along the water with grass and spruce on the right, the sea and desert mountains staying on the left until about 4.25 s, then a grassy slope into the forest. A shoreline walk, no hard seam.
- Wearables LATER than the windows: cap about 2.75 s; tank and BCD lingered until about 3.75 s; T-shirt about 4.25 s and gray shorts about 4.75 s, i.e. during the climb. Kling again stretched/shifted the windows later; staggered windows did prevent the all-at-once bunching.
- The camera drifted wider near the end (5.75–6.25 s) to reach the smaller end-frame size; the end matched.
USER VERDICT on v1: "overall a good transition; learn from the weak points." ACCEPTED.

## Pair: on a grassy ridge at a spruce-forest edge → sitting on a fallen log over a forest stream (Kling 4.0, 8 s, 108 credits, v1)
USER IDEA before sending: instead of climbing onto the log from the bank, the path leads ONTO the log itself; he walks along the log and sits at his spot (a more continuous, natural device). Review fixes: the log's end rests on the bank at ground level (no climb), the forest edge reaches the ridge on frame-right so the path enters the trees sideways, the legs hang on the camera side of the log, the cap removed brim-first.
Frame QA (4 fps, 8 fps 3.9–6.5 s collision pass, scene detection):
- Zero cuts. One boy. Same-type place (forest → forest): the ridge path became a dirt track into the trees and down to the stream with no seam.
- Wearables early and gradual: cap gone about 1.25 s (brim-first worked), the T-shirt print and shoes during the ridge walk.
- He reached the log, stepped up onto it with a small lift of the leg (4.25–4.5 s; the log end was not at ground level but a short step), walked along it with balanced steps (4.75–5.5 s), crouched and sat down (5.75–6.4 s) with his hands on the log; no body-through-log collisions found.
- The end matched.
FINAL PHOTO HOLD (user, last transition of the series): "an amazing, flowing transition"; ACCEPTED. The user asked for a longer hold on photo 30 and agreed to extend the accepted clip instead of regenerating it. Hold clip: Kling 4.0, 4 s, 54 credits, first_image = the accepted clip's last frame, static camera, the stream flowing at full speed from frame 1. Result: stable face, water kept flowing. A hard join jumped (seam score 0.17); a 0.25 s blend fixed it (0.03, no cut). Delivered hold silent + sfx and the joined 11.8 s version.

## Pair (early series): little boy (about 4) climbing a playground ladder, framed through it → standing on a wet aviation-museum plaza (Kling 4.0, 8 s, 108 credits, v1)
Reviews (3 passes) added: camera holds still until he is fully out from behind the foreground ladder (a foreground ladder sweeping across him in a dolly = an occluding wipe), camera lowers with him as he climbs down, the rail named frame-relative ("rail on the right side of the frame (his left)"), wearables finished 0.8 s before the place change, ground wetting written as even over the whole frame.
Frame QA (4 fps, 10 fps 0.9–2.3 s collision pass, 8 fps 4.3–5.5 s, scene detection):
- Zero cuts. One boy. He climbed down facing the camera and stepped out to the right BEHIND the ladder rail (the rail passes in front of him for about 0.3 s at 1.0–1.2 s, as foreground; no body-through-ladder).
- Wearables staged: socks 1.0 s, sneakers 2.5 s, beanie 3.0 s, jacket 3.5 s, jogger pants 3.75 s, all before the plaza.
- Place change 4.5–5.25 s: the rubber surface turned wet from the left first, then the plaza and aircraft came in while the city towers were still visible behind (about 0.75 s of two backgrounds, ghosted aircraft at 4.75–5.0 s), then fully the museum. A soft partial blend, not a hard wipe.
- The end matched.
v2 HOLD TEST (user asked for the transition + long hold in ONE video, after a visible jump when joining the separate hold clip in their own editor): the accepted v1 prompt verbatim at 12 s with the hold written as 6.8–12 s; 162 credits. Result: zero cuts, but Kling stretched the whole action (slower walk, he climbed onto the log from the stream side at about 9.0–9.5 s instead of walking along it) and sat only at about 10.2 s; hold about 1.8 s. A longer duration does not create a longer hold. The joined v1 + hold file with a 0.25 s blend (seam score 0.03) remains the right deliverable.
(ladder → aviation museum) USER VERDICT on v1: a few small remarks, but kept as is for now.

## Special: "zoom from space to Earth" ending on a photo (baby on a play mat, top-down), Kling 4.0, 8 s, 108 credits, v1
Inputs: tail_image only (no first frame). The user's own earlier Kling zoom (5 s) was the reference: globe → Mediterranean → clouds → coast → a ROOFLESS CUTAWAY house (dollhouse) seen from above → dive into the room → hold. The cutaway is the device that makes the roof entry work; motion blur hides the scale jumps.
The user asked for no hold at the end: the clip connects to their next transition, whose first frame is the same photo, so the zoom must land on the photo in the last frame. The user also asked for a longer space view (8 s instead of 5) and "the Land of Israel" (not "the coast of Israel").
Prompt reviews added: no text/labels/borders on the map, realistic cutaway at real scale (not a miniature), the walls leave the frame, the exact end composition, the camera fully still on the last frame, no "turning" wording (dive straight to the centre of the globe instead).
Frame QA (4 fps, 12 fps 2.3–3.3 s and 4.9–6.25 s, scene detection, SSIM):
- Zero cuts (the one scene flag at 5.42 s is the camera passing through the cutaway walls, continuous).
- Space 0–1.75 s, a slow approach. But the globe was centred on NORTH-WEST AFRICA (Gibraltar), not Israel, and the dive went into the Sahara: Kling does not reliably place a named country at the centre.
- 2.6–3.0 s: a cloud "burst" grows from the centre of the desert (reads as a puff/explosion), then the cloud layer and a dense white city.
- 4.25–5.0 s: one apartment building, then the roofless cutaway with the play mat visible inside a room, and a dive into the living room (sofa, beige tiles, a light-colored floor). Worked well.
- Arrived above the mat at about 5.9 s, then a slow settling zoom until about 7 s; the baby first looks down at the toys and lifts his head and smiles at 6.5 s (not "already in pose", but natural). Face stable.
- Last frame vs the photo: SSIM 0.946; vs the first frame of the user's next clip: 0.963. Joined with a 0.2 s fade (the next clip has no audio track; the zoom SFX is padded with silence).

## Pair: Earth from space (last frame of the user's own zoom-out) → boy spinning a small glowing globe on his fingertip in a basketball arena (Kling 4.0, 5 s, 67 credits, v1)
Device: "the Earth IS the globe on his finger": one fast continuous pull-back; the stars turn out to be the arena's ceiling spotlights; the globe keeps rotating so the Americas of the end frame come to the front. Wearables: none to change (the boy is not in the start frame; "exact end-frame outfit from his first appearance").
User: "it can be a fast continuous transition", so 5 s instead of 6 (4 s would squeeze the face reveal).
Review fixes: the camera is already pulling back FAST from frame 1 (the previous clip ended mid-zoom-out, a static start would read as a stop at the seam); ONE GLOBE (no big Earth left as a backdrop behind the arena); the background changes evenly over the whole frame (no composite, no half space/half arena); camera tilt explains why the globe moves up-left; "looks smaller because the camera pulls back, never morphs"; the crowd stays as background (ONE BOY can empty the stands).
Frame QA (6 fps, 8 fps 2.4–3.6 s, scene detection, SSIM):
- Zero cuts. One globe throughout; the arena ring of ceiling lights grew around the globe at 1.5–2.0 s, no circle reveal.
- The globe kept spinning (Africa → Americas → Asia/Australia → back), continents clear.
- 2.0–3.0 s: the fingertip entered under the globe, then a close-up of his smiling face on the right, then the whole boy; the finger always touched the bottom of the globe. Face stable (only motion blur at about 3.0 s).
- First frame vs Earth.jpg SSIM 0.98; last frame vs photo 32 0.96.
- Joined to the user's zoom-out with a 0.2 s fade + 0.2 s audio crossfade (no scene flag at the seam).

## Pair: boy spinning the Earth globe on his fingertip (photo 32) → same boy spinning a basketball (photo 33, final shot) (Kling 4.0, 6 s, 81 credits, v1)
User idea: a crane-and-orbit camera swing (rise and arc, then come back down to photo 33), the globe → basketball switch, then an ending hold (user-requested, final shot) with a slow zoom-out that continues the transition's last movement.
Device: a cross-body slap with the free hand speeds the spin; the globe becomes the basketball ONLY inside the spin's motion blur. Review fixes: arc toward the ball's side of the frame; the slap hand crosses in front of the chest ("only two arms"); no pause at the top of the swing; 45° arc (a quarter circle = full profile, contradicts "three-quarter view"); the transition ends with a slow pull-back so the hold continues it.
Frame QA (5 fps, 10 fps 2.0–3.6 s and 0.4–1.6 s, scene detection, SSIM):
- Zero cuts. The slap worked (0.9–1.4 s): the left hand crossed in front, touched the globe, went back down.
- The switch worked: blur 2.2–3.2 s, orange inside the blue rim at 3.3–3.5 s, a plain basketball from about 3.6 s.
- PROBLEM: 2.2–2.8 s the boy's HEAD turned away and around (back of the head and the number on his back visible) and came back to the front: the user saw it as the head spinning 360° on its own axis. Cause: "he glances up at the ball" + "face always turned toward the camera" + a moving camera = Kling rotates the head to "track" instead of keeping the body still.
- Last frame vs photo 33: SSIM 0.96.
USER VERDICT: liked the transition, the camera move and the slap/spin; disliked only the head turning 360°.
ENDING HOLD with a slow zoom-out (user-requested, final shot): Kling 4.0, 5 s, 67 credits, first_image = the transition's last frame, "slow pull-back, by the end the whole boy is visible from head to sneakers". Result: zero cuts, the ball kept spinning, stable face; but the pull-back was NOT slow: head-to-toe already at about 1.75 s, then it kept going to a very wide shot (the boy tiny at 5 s), and invented gibberish text appeared on the LED boards from about 2.5 s ("OMRTOIKCS"). A "by the end" framing target does not stop Kling's zoom; write the distance as a small, explicit amount ("pulls back only a little, about one step, the boy stays large in the frame") and ban new text. Joined to v1 with a 0.25 s blend + audio crossfade (no seam flag).
v2 (v1 verbatim + HEAD LOCK, no glance, 30° arc, "only the camera moves"; 81 credits): the slap and the blur switch worked again (switch at about 3.3–3.7 s), last frame vs photo 33 SSIM 0.96. BUT the back view got LONGER: his body turned to profile at about 1.8 s and the camera went behind him and over his head (back of the head 2.2–2.9 s, the face came back from below at about 3.4 s). The head-lock words did not stop it: a "crane-and-orbit swing … high enough to look down … the ball big in the foreground" pulls the camera over/behind the subject. Lesson: for a frontal start AND end frame, do not ask for an orbit/crane over the subject; use a frontal move (push-in / slight rise straight in front) and keep the "wow" in the object action.
ENDING HOLD v2 (small explicit distance "mid-thigh → just below the knees", "very slow, barely noticeable", no new text; 67 credits): worked: the boy stayed large, a very slow even pull-back for 5 s, the ball kept spinning, no gibberish text. Joined (0.25 s blend + audio crossfade) to both v1 and v2 so the user can pick.

## Pair: toddler (about 2.5) sitting on the stone entrance steps of a house with a woven fruit basket and a flower crown → boy (about 4) climbing a wooden playground ladder, framed through the ladder from above (Kling 4.0, 8 s, 108 credits, v1)
Device: a straight pull-back while he walks toward the camera; the crown placed INTO the basket (real action), the basket left behind and hidden by his body; all wearables early (by 3 s); place change 4–5.2 s; the camera rises over the top of the ladder at 5.2–5.9 s while he is still a few steps away; COLOR LOCK block (first use).
Reviews (3 passes) fixed: the ladder arriving while he climbs (rungs would sweep across his face), the basket staying visible on the new turf, wearables ending inside the place-change window (Kling lateness), "same size in the frame".
Frame QA (4 fps, 10 fps 2.6–4.4 s, scene detection, SSIM, signalstats):
- Zero cuts (no scene flags). One boy. Crown into the basket 0.25–0.75 s (worked); he stood and stepped past the basket (1.0–1.5 s); the basket stayed behind and was hidden.
- Wearables EARLY this time and gradual: T-shirt about 2.0 s, black shorts 2.5 s, barefoot 2.75 s, hair/age by about 3 s. Finishing the windows by 3 s with a 1 s gap worked.
- Place change came EARLIER than written: 2.9–3.2 s the turf grew as a ROUNDED PATCH from the bottom of the frame (a semicircle), then 3.5–3.9 s the house behind him blended softly into the park (about 0.4 s of two backgrounds).
- The ladder came EARLIER than written (4.1–4.3 s instead of 5.2): the top beam and a rung swept across the frame in front of his face for about 0.2 s (an occluding sweep), then he climbed slowly from 4.5 to 8 s.
- End matched (SSIM 0.91, visually exact). COLOR CHECK: first frame vs photo 7 ΔY −0.1, ΔU +1.0, ΔV −0.9; last frame vs photo 8 ΔY +1.9, ΔU +0.1, ΔV −0.3: within limits, no correction needed.
Lesson: when the end frame is framed THROUGH a foreground object (ladder, fence, window), Kling brings the foreground in as soon as the subject is near, regardless of the written time, and it sweeps across the subject. Consider ending the move with the foreground already in place from the place change on, or accept a short sweep.
USER VERDICT on v1: "bad transition! it must pass as a connected scene, like walking into the next room." REJECTED. The user sent their earlier liked take as the reference: sideways tracking to the right along the steps, the paving running on into turf, the steps continuing as the park's stone wall, the park and towers revealed ahead, the ladder coming in from the right, he walks behind it, turns and climbs (rule added to SKILL.md: PLACE CHANGE = WALKING ON INTO THE NEXT SPACE).
v2 (rebuilt on the user's reference: sideways tracking to the right, connected path, ladder from the side, crown into the basket, COLOR LOCK; gate words "becomes/turns into/gives way to" removed; 108 credits):
- Zero cuts. Crown into the basket 0.5–1.25 s; he stood and walked off to the frame-right at 1.5–2.0 s; the basket and steps stayed behind on the left and left the frame.
- CONNECTED PLACE worked: the paving ran on, the turf began ahead at the right (about 3.0 s), the stone wall at the foot of the steps continued as the park's curved bench, the park and towers came into view ahead. No patch, no blend.
- Wearables: polo until about 2.75 s, T-shirt about 3.0 s, shorts and barefoot by about 3.25 s (≈0.5–1 s later than written, still early enough).
- 3.5–4.9 s: the wooden playground frame (posts, top beam, the ladder) came in from the right with the tracking; a post passed in front of him for about 0.2 s at 4.2 s; he went behind the ladder at about 4.9 s, turned and climbed (5.0–8.0 s). Seen mostly in profile/from behind while walking into the park (3.5–4.5 s).
- End: SSIM 0.89, visually exact. COLOR: first frame ΔY 0.0 / ΔU +0.8 / ΔV −0.9; last frame ΔY +1.9 / ΔU −0.2 / ΔV −0.1 (within limits).
USER VERDICT on 7 → 8 v2: "the previous transition was good". ACCEPTED. General note: "I prefer the character not to run" (in v2 he hurried/ran across the turf at 3.0–4.5 s).

## Pair: boy on the playground ladder (tight framing through the rungs, the end of 7 → 8) → standing on the wet aviation-museum plaza (Kling 4.0, 8 s, 108 credits, v2 of 8 → 9 with the new photo 8)
Built on the user's reference (climb down, step out on the frame-left side, walk left, museum ahead) plus the new rules: connected path, no running, short distance, the museum tree line hiding the far city (parallax lesson), camera rising to the end framing, COLOR LOCK; first prompt written with the MANDATORY SELF-REVIEW PASS.
Frame QA (4 fps, 10 fps 4.4–6.0 s, scene detection, SSIM, signalstats):
- Zero cuts. Calm walk, no running. He climbed down facing the camera (0.3–1.6 s), stepped out to the left (1.75–2.0 s), the camera tracked left; the play structure stayed and slid out on the right.
- Wearables gradual: sneakers about 2.3 s, jacket about 3.3 s, joggers about 3.6 s, beanie about 4.1 s (all done by 4.25 s).
- WEAK: from about 4.3 s he walked AWAY from the camera into depth (back view 4.4–6.0 s) instead of across the frame; and at 5.1–5.5 s the turf turned into the wet plaza partly IN PLACE (the green showing through a translucent wet surface for about 0.4 s), with the far towers still visible above the tree line until about 5.3 s. The paved plaza did start at the leading (left) edge first (4.5–5.0 s).
- The jet appeared at about 6.0 s as the camera rose; he turned to the camera at 6.3–6.5 s; end matched (SSIM 0.94).
- COLOR: first frame ΔY +1.4 / ΔU +0.1 / ΔV −0.4; last frame ΔY +0.9 / ΔU +0.1 / ΔV +0.1 (within limits, no correction).
USER VERDICT on 8 → 9 v2: "really bad". REJECTED. (1) He came straight THROUGH the ladder (1.5–1.7 s: he was behind it and appeared in front of it); "the skill says explicitly not to work through objects". (2) 8 s was not needed; the default is 6 s with judgment. (3) The clothes appeared like cuts: the windows were 0.7–0.8 s each, against the written rule of at least 2 s spread across the movement. (4) At about 5 s the place changed by a dissolve, not by walking on into the next space. (5) "You must include in every prompt all the prohibitions and settings we set" → MASTER RULES BLOCK added to SKILL.md, to be pasted verbatim into every prompt, plus self-review item 8.
v3 (6 s, 81 credits; MASTER RULES BLOCK verbatim; "leaves the ladder the way he came, stays on the far side, never through it, never in front of it"; camera pulls back while he climbs down):
- FAILED AGAIN ON THE LADDER: he climbed down on the far side (1.25–1.5 s) and then at 1.58–1.67 s his body came THROUGH the rungs to the near side, in front of the ladder, and walked off to the left in front of it. The explicit wording did not stop it.
- He RAN (long strides, 2.0–2.8 s) despite "never runs".
- Jogger pants and sneakers appeared while still on the ladder (about 1.2–1.33 s); jacket and beanie gradual 2.6–3.3 s.
- The plaza came in at the leading (left) edge with the turf still on the right (3.2–4.6 s) and the wooden posts of the play structure passed in the foreground (3.0–4.8 s).
- End matched (SSIM 0.92). COLOR: first ΔY +0.8 / ΔU +0.2 / ΔV −0.4; last ΔY +1.6 / ΔU +0.3 / ΔV +0.1 (within limits).
LESSON: when the start photo is framed THROUGH an object with the person on its far side, close to the lens, Kling pulls the person toward the camera through the object regardless of the prompt. Wording cannot fix it; the design must remove the object from between camera and person BEFORE he moves (the camera moves first: it dollies sideways and back until the ladder is out of the frame, then he climbs down and walks), or the user must choose another device.
v4 (7 s, 94 credits; first_image = the exact last frame of the user's previous shot; "only the camera moves first: it glides left and back so the ladder slides to the right … after about one second he is seen past its left side"):
- HARD CUT at 0.29 s (frame 6 → 7): Kling did the "camera clears the ladder in about one second" as a cut to a new angle (camera already to the left, a post of the play structure in the foreground), not as a move. A large reframe asked for in about 1 s = a cut (same family as pier → tennis v1).
- The ladder exit itself was physical this time: he climbed down and stepped out AROUND the left rail (1.25–1.5 s), not through it.
- He still walked fast with long strides / a skip (1.5–2.5 s).
- Wearables gradual: socks then sneakers 2.6–3.2 s, joggers and jacket 3.8–4.6 s, beanie about 5.2–5.4 s (late).
- The plaza came in from the leading (left) edge with the turf continuing on the right (2.8–3.6 s): the connected-path reveal worked.
- Join: first frame vs the previous shot's last frame SSIM 0.98, ΔY +0.5; last frame vs photo 9 SSIM 0.95, ΔY +1.0 (colors within limits).
LESSON: never ask Kling for a big camera reposition in a short time; a clearing move must be slow (2 s or more), small, and written as one continuous glide with every frame connected, or it becomes a cut.
v5 (7 s, 94 credits; the proven 17/10 recipe: camera lowers with him, holds while he exits around the RIGHT rail, then tracks right; connected path; MASTER RULES): HARD CUT at 1.92 s, from the through-the-ladder view to a new side angle of the ladder on a wet plaza edge. Before the cut he was climbing down on the far side correctly (0–1.9 s).
DIAGNOSIS (who_am_i): kling-video-v4_0 has NO "prefer_multi_shots" switch; kling-video-v3_0 has it (default true) and kling-video-v3_0_omni (default false). Kling 4.0 seems to decide on its own to split into shots when the start and end frames are very different and the exit is hard (here 2 of 3 takes: v4 at 0.29 s, v5 at 1.92 s). FALLBACK when Kling 4.0 keeps cutting on a pair: kling-video-v3_0 with prefer_multi_shots=false (8 credits/s), with the user's approval since 4.0 is their default for face stability.
v6 (the accepted 17/10 Kling 4.0 prompt VERBATIM, adapted only to the new photos; 8 s, 108 credits):
- ZERO CUTS (no scene flags). He climbed down on the far side (0.3–2.2 s) and stepped out around the RIGHT rail (2.2–2.6 s), not through it.
- Pace: quick but walking. Wearables: socks/sneakers about 2.0 s, beanie 3.75 s, jacket 4.5–5.0 s, joggers 5.2–5.5 s (later than written).
- WEAK: 5.1–6.0 s the wet plaza appeared as a soft-edged PATCH spreading around him (the "whole ground becomes wet evenly" line), with the old path/turf at the sides until about 6.0 s; the jet appeared at about 5.8 s.
- End SSIM 0.94; COLOR first ΔY +0.7, last ΔY +0.9 (within limits).
USER VERDICT on v6: "the transition is good, but why the dissolve between the scenes? it must be perfect continuity of two connected scenes". Cause: I kept the old line "the whole ground becomes wet evenly" when reusing the accepted prompt. Rule corrected in SKILL.md.
v7 (v6 verbatim, only the PLACE line changed to "the path leads straight onto an ALREADY wet plaza ahead"; 108 credits):
- Zero scene flags, but at 2.25–2.6 s he came THROUGH the ladder to its near side (randomness: the same ladder lines as v6, which exited cleanly).
- The wet plaza came in as a vertical BAND from the left at 5.4–6.6 s, with the dry path still on the right (a wipe/split), i.e. the connected-path wording did not prevent a blend here either.
- End SSIM 0.94; colors within limits.
CONCLUSION for this pair: dry sunny park → wet overcast museum with completely different far backgrounds always produces a 0.5–1 s blend in Kling 4.0 (v6 soft patch, v7 band). The best take is v6. A further option is a Kling 4.0 keyframe_1 (an in-between image of the boy at the turf/plaza border) to anchor the middle, at extra image cost.

## Pair (new photo 9): boy on the wet aviation-museum plaza → lying on studio planks next to toddler twins (Kling 4.0, 6 s, 81 credits, v1)
Built on the accepted v6 (14/10, Kling 3.0) prompt verbatim, retimed to 6 s, plus COLOR LOCK, staged clothes windows (each ≥2 s), "turns to face the camera as he kneels", twins "sit still".
Frame QA (5 fps, 12 fps 1.2–2.2 s, scene detection, SSIM, signalstats):
- Zero cuts. Twins solid, already there (entered from the right edge at 2.8 s), never faded.
- Clothes still FAST despite ≥2 s windows: beanie gone and jacket → white T-shirt within about 1.4–2.0 s (each ≈0.4–0.5 s), joggers → jeans about 1.8–2.0 s. Sequential, not simultaneous, but quicker than written.
- Place: the white shutter wall and the planks came in from the right (2.0 s) like a doorway, but the wet plaza/water stayed on the left behind him until about 3.0 s (two backgrounds side by side for about 1 s).
- Pace quick; a small crouch-hop at 3.0–3.2 s before kneeling; lay down 3.4–4.8 s with the head up, face toward the camera (worked).
- End SSIM 0.94; COLOR first ΔY +0.8, last ΔY +0.6 (within limits).
USER VERDICT on 9 → 10 (new photo 9) v1: "excellent". ACCEPTED. Confirms the method: reuse the accepted prompt of the same pair verbatim, retime, add only COLOR LOCK, staged clothes windows, the turn-to-camera line and "twins sit still"; Kling 4.0, 6 s. The short side-by-side background (2–3 s) and the quick clothes swaps were acceptable at normal speed.
User note on 9 → 10 v1: "there was some running, I assume because I limited it to 6 s". Lesson: when a walk + a pose change (kneel/lie down) + clothes all must fit, 6 s makes Kling hurry; the accepted take of this pair was 7 s. When the user fixes 6 s, say up front that the walk may look hurried, and offer 7 s with that reason.
