(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FFLt:function(e,n,a){"use strict";a("91GP"),a("KKXr");var i=a("q1tI"),t=a.n(i);var o={container:{width:192,height:128,display:"flex",flexDirection:"column",flexGrow:0,justifyContent:"center",alignItems:"center",flexShrink:0,cursor:"point"},hoverTile:{borderRadius:5},img:{width:32,height:32},label:{fontSize:16,opacity:.64,marginTop:16,cursor:"inherit"},containerLink:{textDecoration:"none"}};n.a=function(e){var n=Object(i.useState)(!1),a=n[0],r=n[1],l=e.slamoji,s=":"+l.filename.split(".")[0]+":",c="/slamoji-images/"+l.filename,g=o.container,d=a?{class:"hoverTile"}:null;return a&&(g=Object.assign({},g,o.hoverTile)),t.a.createElement("a",{style:o.containerLink,href:c,download:!0,class:"tileLink"},t.a.createElement("div",Object.assign({style:g},d,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}}),t.a.createElement("img",{style:o.img,src:c,id:s,alt:l.alt}),t.a.createElement("div",{style:o.label},s)))}},"Il7/":function(e,n,a){"use strict";a("Vd3H");var i=[["ace-dance.gif","ace ventura dancing"],["air-quotes-closed.gif","hand making air-quotes sign, use with air-quotes"],["air-quotes.gif","hand making the air-quotes sign"],["all-the-things.png","hyperbole-and-a-half comic's all the things"],["alrighty-then.gif","alrighty then from ace ventura"],["banana-dance.gif","banana dancing"],["bb8.gif","bb8 from star wars"],["beard.png","a round emoji face with a beard"],["bowie.png","a round emoji face with David Bowie's lightning face"],["brb.gif","an animated sign saying BRB be right back"],["celebration-hands.gif","dancing celebration hands with confetti"],["charmander.gif","a charmander dancing"],["cool-doge.gif","a cool-ass dog with sunglasses"],["dancing-penguin.gif","a cute lil dancing penguin"],["dead-dove-do-not-eat.png","a brown bag that says dead dove do not eat"],["drumroll.gif","drumroll"],["excited.gif","conan o brien making an excited face"],["fidget-spinner.gif","a yellow emoji hand spinning a fidget spinner"],["fine-rev.png","the fine-with-fire dog, facing left"],["fine.png","the fine-with-fire dog, facing right"],["finn-dance.gif","finn from adventure time, dancing"],["goomba.gif","a goomba from mario, walking"],["kirby.gif","kirby, waiting"],["la-grapefruit.png","a grapefruit la croix can"],["la-lemon.png","a lemon la croix can"],["la-lime.png","a lime la croix can"],["mario-luigi-dance.gif","mario and luigi dancing happily"],["megaman-dance.gif","megaman dancing excitedly"],["party-bernie.gif","bernie sanders, party animation style"],["party-dino.gif","a dinosaur, party animation style"],["party-ghost.gif","a ghost, party animation style"],["party-otter.gif","a cute otter, party animation style"],["pebcak.gif","person banging their head on the keyboard"],["pikachu-dance.gif","pikachu dancing joyfully"],["pizza-spin.gif","a spinning piece of pizza"],["pokeball.gif","a spinning pokeball"],["rubberduck.png","a rubber duck"],["saaaame.png","the word same with many a's"],["sadpanda.png","a very sad-looking panda"],["sketch.png","the yellow diamond for the Sketch app"],["sonic-conga.gif","an endless conga line of sonic the hedgehog"],["thank-you.png","the words thank you"],["this-this.gif","a little panda pointing upwards as if to say this, this"],["tumbleweed.gif","a lonely tumbleweed"],["ty.gif","the letters ty, short for thank you"],["tom-nook.png","animal crossing's tom nook"],["mild-panic.png","an emoji face with a panicked look"],["hide-the-pain.png","a grimacing man"],["party-gritty.gif","gritty, party-style"],["gritty.png","gritty, the philly flyer's mascot"],["black-lives-matter.png","a raised black fist"],["blm.png","the letters BLM, for black lives matter"],["cmd-z.png","command z, the undo symbol"],["bob-ross.png","bob ross, the painter"],["super-cool.gif","the words super cool"],["chefs-kiss.png","an emoji of a chef kissing his fingers"],["party-snap.gif","snapping fingers, party-style"],["snap.gif","snapping fingers"],["shocked-pikachu.png","a shocked-looking pikachu"],["crying-while-eating.gif","a woman crying and eating ice cream"],["shocked-sonic.png","sonic the hedgehog, looking shocked"],["this-is-fine.gif","animated this-is-fine dog"],["liar.jpg","a witch calling somebody a liar"],["bad-pun-dog.png","that meme of the dog telling a bad joke"],["high-five.gif","animated high-five hands"],["cage-cry.gif","nick cage crying"],["dumpster-fire.gif","a dumpster on fire"],["shocked-cat.png","a shocked cat"],["hold-on-to-your-butts.jpg","hold on to your butts"],["so-close.png","emoji hands making a so-close pinch gesture"]].map((function(e){return{filename:e[0],alt:e[1]}})).sort((function(e,n){return e.filename.localeCompare(n.filename)}));n.a=i},RXBc:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return f}));var i=a("q1tI"),t=a.n(i),o=(a("91GP"),function(e){var n=e.text,a=e.url,i=e.newTab?{target:"_blank",rel:"noopener noreferrer"}:null,o=e.isDownload?{download:!0}:null,r=Object.assign({},i,o);return t.a.createElement("a",Object.assign({style:l.navLink,href:a,class:"link"},r),n)});function r(){return t.a.createElement("div",{style:l.container},t.a.createElement("div",{style:l.topContainer},t.a.createElement("div",{style:l.title},t.a.createElement("a",{style:l.titleLink,href:"https://slamoji.com"},"Slamoji")),t.a.createElement("div",{style:l.navContainer},t.a.createElement(o,{text:"Download All",url:"/slamoji-images.zip",isDownload:!0}),t.a.createElement(o,{text:"View on GitHub",url:"https://github.com/bryanjclark/slamoji",newTab:!0,isDownload:!1}))),t.a.createElement("div",{style:l.subtitle},"Your friendly neighborhood Slack emoji clearinghouse. (Click an emoji to download it.)"))}var l={container:{display:"flex",flexDirection:"column"},topContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between"},navContainer:{display:"flex",flexDirection:"row"},title:{fontSize:48,fontWeight:700},titleLink:{textDecoration:"none"},subtitle:{fontSize:14,fontWeight:400,marginTop:16},navLink:{fontWeight:700,fontSize:14,marginLeft:58,marginTop:29}},s=(a("Z2Ku"),a("L9s1"),a("pIFo"),a("FFLt")),c=a("Il7/");function g(){var e=Object(i.useState)(""),n=e[0],a=e[1],o=n.toLowerCase().replace(/[^a-z,-]/gi,"").trim(),r=n.length>0?c.a.filter((function(e){return e.filename.includes(o)})):c.a;return t.a.createElement("div",{style:d.container},t.a.createElement("input",{style:d.searchBar,class:"searchBar",type:"text",placeholder:"Search",value:n,onChange:function(e){return a(e.target.value)}}),t.a.createElement("div",{style:d.gridContainer},r.map((function(e){return t.a.createElement(s.a,{key:e.filename,slamoji:e})})),0===r.length&&t.a.createElement("div",{style:d.noResults},"No results")))}var d={container:{display:"flex",flexDirection:"column"},gridContainer:{marginTop:32,display:"flex",flexDirection:"row",flexWrap:"wrap",flexGrow:1},searchBar:{border:"none",borderRadius:4,padding:16,marginTop:32,fontSize:16,fontFamily:"Inconsolata"},noResults:{flex:1,flexGrow:1,flexDirection:"row",alignItems:"center",opacity:.64}};function f(){return t.a.createElement("div",{style:m.outerContainer},t.a.createElement("div",{style:m.innerContainer},t.a.createElement(r,null),t.a.createElement(g,null)))}var m={outerContainer:{display:"flex",flexDirection:"column",alignItems:"center"},innerContainer:{margin:64,maxWidth:960},slamojiContainer:{marginTop:64,display:"flex",flexDirection:"row",flexWrap:"wrap"}}}}]);
//# sourceMappingURL=component---src-pages-index-js-a48c3a3b93309df3afa0.js.map