(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FFLt:function(e,n,a){"use strict";a("91GP"),a("KKXr");var t=a("q1tI"),i=a.n(t);var r={container:{width:192,height:128,display:"flex",flexDirection:"column",flexGrow:0,justifyContent:"center",alignItems:"center",flexShrink:0,cursor:"point"},hover:{backgroundColor:"#F7F8FA",borderRadius:5},img:{width:32,height:32},label:{fontSize:16,color:"#21242C64",marginTop:16,cursor:"inherit"},containerLink:{textDecoration:"none"}};n.a=function(e){var n=Object(t.useState)(!1),a=n[0],o=n[1],l=e.slamoji,c=":"+l.filename.split(".")[0]+":",s="/slamoji-images/"+l.filename,g=r.container;return a&&(g=Object.assign({},g,r.hover)),i.a.createElement("a",{style:r.containerLink,href:s,download:!0},i.a.createElement("div",{style:g,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)}},i.a.createElement("img",{style:r.img,src:s,id:c,alt:l.alt}),i.a.createElement("div",{style:r.label},c)))}},"Il7/":function(e,n,a){"use strict";a("Vd3H");var t=[["ace-dance.gif","ace ventura dancing"],["air-quotes-closed.gif","hand making air-quotes sign, use with air-quotes"],["air-quotes.gif","hand making the air-quotes sign"],["all-the-things.png","hyperbole-and-a-half comic's all the things"],["alrighty-then.gif","alrighty then from ace ventura"],["banana-dance.gif","banana dancing"],["bb8.gif","bb8 from star wars"],["beard.png","a round emoji face with a beard"],["bowie.png","a round emoji face with David Bowie's lightning face"],["brb.gif","an animated sign saying BRB be right back"],["celebration-hands.gif","dancing celebration hands with confetti"],["charmander.gif","a charmander dancing"],["cool-doge.gif","a cool-ass dog with sunglasses"],["dancing-penguin.gif","a cute lil dancing penguin"],["dead-dove-do-not-eat.png","a brown bag that says dead dove do not eat"],["drumroll.gif","drumroll"],["excited.gif","conan o brien making an excited face"],["fidget-spinner.gif","a yellow emoji hand spinning a fidget spinner"],["fine-rev.png","the fine-with-fire dog, facing left"],["fine.png","the fine-with-fire dog, facing right"],["finn-dance.gif","finn from adventure time, dancing"],["goomba.gif","a goomba from mario, walking"],["kirby.gif","kirby, waiting"],["la-grapefruit.png","a grapefruit la croix can"],["la-lemon.png","a lemon la croix can"],["la-lime.png","a lime la croix can"],["mario-luigi-dance.gif","mario and luigi dancing happily"],["megaman-dance.gif","megaman dancing excitedly"],["party-bernie.gif","bernie sanders, party animation style"],["party-dino.gif","a dinosaur, party animation style"],["party-ghost.gif","a ghost, party animation style"],["party-otter.gif","a cute otter, party animation style"],["pebcak.gif","person banging their head on the keyboard"],["pikachu-dance.gif","pikachu dancing joyfully"],["pizza-spin.gif","a spinning piece of pizza"],["pokeball.gif","a spinning pokeball"],["rubberduck.png","a rubber duck"],["saaaame.png","the word same with many a's"],["sadpanda.png","a very sad-looking panda"],["sketch.png","the yellow diamond for the Sketch app"],["sonic-conga.gif","an endless conga line of sonic the hedgehog"],["thank-you.png","the words thank you"],["this-this.gif","a little panda pointing upwards as if to say this, this"],["tumbleweed.gif","a lonely tumbleweed"],["ty.gif","the letters ty, short for thank you"]].map((function(e){return{filename:e[0],alt:e[1]}})).sort((function(e,n){return e.filename.localeCompare(n.filename)}));n.a=t},RXBc:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var t=a("q1tI"),i=a.n(t),r=function(e){var n=e.text,a=e.url;return i.a.createElement("a",{style:l.navLink,href:a},n)};function o(){return i.a.createElement("div",{style:l.container},i.a.createElement("div",{style:l.topContainer},i.a.createElement("div",{style:l.title},i.a.createElement("a",{style:l.titleLink,href:"https://slamoji.com"},"Slamoji")),i.a.createElement("div",{style:l.navContainer},i.a.createElement(r,{text:"View on GitHub",url:"https://github.com/bryanjclark/slamoji"}))),i.a.createElement("div",{style:l.subtitle},"Your friendly neighborhood Slack emoji clearinghouse. (Click an emoji to download it.)"))}var l={container:{display:"flex",flexDirection:"column"},topContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between"},navContainer:{display:"flex",flexDirection:"row"},title:{fontSize:48,fontWeight:700},titleLink:{color:"#21242C",textDecoration:"none"},subtitle:{fontSize:14,fontWeight:400,marginTop:16},navLink:{color:"#1865F2",fontWeight:700,fontSize:14,marginLeft:58,marginTop:29}},c=(a("Z2Ku"),a("L9s1"),a("FFLt")),s=a("Il7/");function g(){var e=Object(t.useState)(""),n=e[0],a=e[1],r=n.toLowerCase(),o=n.length>0?s.a.filter((function(e){return e.filename.includes(r)})):s.a;return i.a.createElement("div",{style:f.container},i.a.createElement("input",{style:f.searchBar,type:"text",placeholder:"Search",value:n,onChange:function(e){return a(e.target.value)}}),i.a.createElement("div",{style:f.gridContainer},o.map((function(e){return i.a.createElement(c.a,{key:e.filename,slamoji:e})})),0===o.length&&i.a.createElement("div",{style:f.noResults},"No results")))}var f={container:{display:"flex",flexDirection:"column"},gridContainer:{marginTop:32,display:"flex",flexDirection:"row",flexWrap:"wrap",flexGrow:1},searchBar:{backgroundColor:"#00000011",border:"none",borderRadius:4,padding:16,marginTop:32,fontSize:16,fontFamily:"Inconsolata"},noResults:{color:"#21242C64",flex:1,flexGrow:1,flexDirection:"row",alignItems:"center"}};function d(){return i.a.createElement("div",{style:u.outerContainer},i.a.createElement("div",{style:u.innerContainer},i.a.createElement(o,null),i.a.createElement(g,null)))}var u={outerContainer:{display:"flex",flexDirection:"column",alignItems:"center"},innerContainer:{margin:64,maxWidth:960},slamojiContainer:{marginTop:64,display:"flex",flexDirection:"row",flexWrap:"wrap"}}}}]);
//# sourceMappingURL=component---src-pages-index-js-7e287a1a96cbaf3fc5ad.js.map