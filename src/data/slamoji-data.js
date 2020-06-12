// @flow

export type Slamoji = {|
  filename: string,
  alt: string,
|}

const rawSlamoji: Array<Array<string>> = [
  // Initial batch
  ["ace-dance.gif", "ace ventura dancing"],
  ["air-quotes-closed.gif", "hand making air-quotes sign, use with air-quotes"],
  ["air-quotes.gif", "hand making the air-quotes sign"],
  ["all-the-things.png", "hyperbole-and-a-half comic's all the things"],
  ["alrighty-then.gif", "alrighty then from ace ventura"],
  ["banana-dance.gif", "banana dancing"],
  ["bb8.gif", "bb8 from star wars"],
  ["beard.png", "a round emoji face with a beard"],
  ["bowie.png", "a round emoji face with David Bowie's lightning face"],
  ["brb.gif", "an animated sign saying BRB be right back"],
  ["celebration-hands.gif", "dancing celebration hands with confetti"],
  ["charmander.gif", "a charmander dancing"],
  ["cool-doge.gif", "a cool-ass dog with sunglasses"],
  ["dancing-penguin.gif", "a cute lil dancing penguin"],
  ["dead-dove-do-not-eat.png", "a brown bag that says dead dove do not eat"],
  ["drumroll.gif", "drumroll"],
  ["excited.gif", "conan o brien making an excited face"],
  ["fidget-spinner.gif", "a yellow emoji hand spinning a fidget spinner"],
  ["fine-rev.png", "the fine-with-fire dog, facing left"],
  ["fine.png", "the fine-with-fire dog, facing right"],
  ["finn-dance.gif", "finn from adventure time, dancing"],
  ["goomba.gif", "a goomba from mario, walking"],
  ["kirby.gif", "kirby, waiting"],
  ["la-grapefruit.png", "a grapefruit la croix can"],
  ["la-lemon.png", "a lemon la croix can"],
  ["la-lime.png", "a lime la croix can"],
  ["mario-luigi-dance.gif", "mario and luigi dancing happily"],
  ["megaman-dance.gif", "megaman dancing excitedly"],
  ["party-bernie.gif", "bernie sanders, party animation style"],
  ["party-dino.gif", "a dinosaur, party animation style"],
  ["party-ghost.gif", "a ghost, party animation style"],
  ["party-otter.gif", "a cute otter, party animation style"],
  ["pebcak.gif", "person banging their head on the keyboard"],
  ["pikachu-dance.gif", "pikachu dancing joyfully"],
  ["pizza-spin.gif", "a spinning piece of pizza"],
  ["pokeball.gif", "a spinning pokeball"],
  ["rubberduck.png", "a rubber duck"],
  ["saaaame.png", "the word same with many a's"],
  ["sadpanda.png", "a very sad-looking panda"],
  ["sketch.png", "the yellow diamond for the Sketch app"],
  ["sonic-conga.gif", "an endless conga line of sonic the hedgehog"],
  ["thank-you.png", "the words thank you"],
  ["this-this.gif", "a little panda pointing upwards as if to say this, this"],
  ["tumbleweed.gif", "a lonely tumbleweed"],
  ["ty.gif", "the letters ty, short for thank you"],

  // Added June 12, 2020
  ["tom-nook.png", "animal crossing's tom nook"],
  ["mild-panic.png", "an emoji face with a panicked look"],
  ["hide-the-pain.png", "a grimacing man"],
  ["party-gritty.gif", "gritty, party-style"],
  ["gritty.png", "gritty, the philly flyer's mascot"],
  ["black-lives-matter.png", "a raised black fist"],
  ["blm.png", "the letters BLM, for black lives matter"],
  ["cmd-z.png", "command z, the undo symbol"],
  ["bob-ross.png", "bob ross, the painter"],
  ["super-cool.gif", "the words super cool"],
  ["chefs-kiss.png", "an emoji of a chef kissing his fingers"],
  ["party-snap.gif", "snapping fingers, party-style"],
  ["snap.gif", "snapping fingers"],
]

const allSlamoji: Array<Slamoji> = rawSlamoji
  .map(raw => ({
    filename: raw[0],
    alt: raw[1],
  }))
  .sort((a, b) => a.filename.localeCompare(b.filename))

export default allSlamoji
