(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),s=a.n(c),o=(a(16),a(2)),r=a(3),i=a(6),m=a(4),u=a(5);a(7);function d(e){return l.a.createElement("a",{href:"#about-me",className:"button button--circle button--right button--right-four"},l.a.createElement("i",{className:"fas fa-hiking"}))}function h(e){return l.a.createElement("a",{href:"#my-portfolio",className:"button button--circle button--right button--right-three"},l.a.createElement("i",{className:"fas fa-book-open"}))}function g(e){return l.a.createElement("a",{href:"#contact-me",className:"button button--circle button--right button--right-two"},l.a.createElement("i",{className:"far fa-envelope"}))}function E(e){return l.a.createElement("a",{href:"https://www.linkedin.com/in/foxchrisrealthe/",target:"_blank",rel:"noopener noreferrer",className:"button button--circle button--right"},l.a.createElement("i",{className:"fab fa-linkedin-in"}))}var p=function(){function e(t,a,n,l,c,s){Object(o.a)(this,e),this.siteHeader=document.getElementById("".concat(t)),this.menuIcon=document.getElementById("".concat(n)),this.menuContent=document.getElementById("".concat(c)),this.siteHeaderExpanded=a,this.menuIconClosed=l,this.menuContentVisible=s,this.events()}return Object(r.a)(e,[{key:"events",value:function(){this.menuIcon.onclick=this.showTheMenu.bind(this)}},{key:"showTheMenu",value:function(){this.siteHeader.classList.toggle("".concat(this.siteHeaderExpanded)),this.menuIcon.classList.toggle("".concat(this.menuIconClosed)),this.menuContent.classList.toggle("".concat(this.menuContentVisible))}}]),e}(),f=(a(17),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){new p("header__main","header--is-expanded","header__menu-icon","header__menu-icon--close-x","header__menu-content","header__menu-content--is-visible")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"header__main",className:"section section--header header__main"},l.a.createElement("div",{id:"header__menu-icon",className:"header__menu-icon"},l.a.createElement("div",{className:"header__menu-icon__middle"})),l.a.createElement("ul",{id:"header__menu-content",className:"header__menu-content"},l.a.createElement("li",null,l.a.createElement("a",{className:"header__menu-content--link",href:"/#about-me"},"About Me")),l.a.createElement("li",null,l.a.createElement("a",{className:"header__menu-content--link",href:"/#my-portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"header__menu-content--link",href:"/#contact-me"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{className:"header__menu-content--link",href:"https://www.linkedin.com/in/foxchrisrealthe/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))),l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(E,null),l.a.createElement(g,null))}}]),t}(l.a.Component)),v=a(1),b=function e(t){Object(o.a)(this,e),this.slides=t,this.visibleSlide=0};b.prototype.slideRight=function(){var e=this.slides.length;return this.visibleSlide+1>e-1?this.visibleSlide=0:this.visibleSlide+=1,this},b.prototype.slideLeft=function(){var e=this.slides.length;return this.visibleSlide-1<0?this.visibleSlide=e-1:this.visibleSlide-=1,this},b.prototype.goToSlide=function(e){return this.visibleSlide=e,this};a(18);var N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={autoSlide:e.autoSlide,arrows:e.arrows,loaded:!1,carousel:{}},a.onSlideLeft=a.onSlideLeft.bind(Object(v.a)(Object(v.a)(a))),a.onSlideRight=a.onSlideRight.bind(Object(v.a)(Object(v.a)(a))),a.onGoTo=a.onGoTo.bind(Object(v.a)(Object(v.a)(a))),a.onMouseOver=a.onMouseOver.bind(Object(v.a)(Object(v.a)(a))),a.onMouseLeave=a.onMouseLeave.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=new b(this.props.carousel);(this.state.autoSlide||this.props.autoSlide)&&(e=setInterval(function(){t.onSlideRight()},3e3)),this.setState({timer:e,carousel:a,loaded:!0})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"onMouseOver",value:function(){clearInterval(this.state.timer)}},{key:"onMouseLeave",value:function(){var e,t=this;(this.state.autoSlide||this.props.autoSlide)&&(e=setInterval(function(){t.onSlideRight()},3e3)),this.setState({timer:e})}},{key:"onSlideLeft",value:function(){var e=this.state.carousel.slideLeft();this.setState({carousel:e})}},{key:"onSlideRight",value:function(){var e=this.state.carousel.slideRight();this.setState({carousel:e})}},{key:"onGoTo",value:function(e){var t=this.state.carousel.goToSlide(e);this.setState({carousel:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"section section--column section--w-full",onMouseEnter:this.onMouseOver,onMouseLeave:this.onMouseLeave},l.a.createElement("div",{className:"carousel"},this.state.arrows&&l.a.createElement("div",{className:"arrow arrow--left",onClick:this.onSlideLeft},l.a.createElement("i",{className:"fas fa-caret-left"})),this.state.arrows&&l.a.createElement("div",{className:"arrow arrow--right",onClick:this.onSlideRight},l.a.createElement("i",{className:"fas fa-caret-right"})),this.state.loaded&&l.a.createElement(l.a.Fragment,null,this.state.carousel.slides[this.state.carousel.visibleSlide])),l.a.createElement("div",{className:"section section--center"},this.state.loaded&&this.state.carousel.slides.map(function(t,a){return l.a.createElement("div",{className:"carousel--circle ".concat(e.state.carousel.visibleSlide===a&&"carousel--circle--active"),onClick:function(){return e.onGoTo(a)},key:t.type.name+a})})))}}]),t}(l.a.Component);function y(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"image  image__carousel",src:e.image,alt:e.alt}),l.a.createElement("div",{className:"carousel__heading"},l.a.createElement("h2",{className:""},e.heading)),l.a.createElement("div",{className:"carousel__description"},l.a.createElement("p",null,e.description)))}function w(e){return l.a.createElement(y,{image:"./images/jpg/hawaii.jpg",alt:"Christopher Fox in Aspen Colorado",heading:"Welcome to my Web Page",description:"Below you will find stuff about me and a few things that I have done, Have Fun!"})}function k(e){return l.a.createElement(y,{image:"./images/jpg/leaf.jpg",alt:"Picture of a leaf taken by Christopher Fox",heading:"New News!",description:"I will be going to Breckenridge Colorado for the summer to experience working at a resort and focus on finishing my Master's of Cyber Security. I am still open to freelance requests, please contact me on LinkedIn."})}function S(e){return l.a.createElement(y,{image:"./images/portfolio/graphic/Workshop_1.2.jpg",alt:"Glow Growth and Development workshop",heading:"Latest Finished Project",description:"Flier created for a client's business development workshop in Colorado Springs."})}function I(e){return l.a.createElement(y,{image:"./images/portfolio/web/drHollyFritch.jpg",alt:"Screenshot of webpage for Dr. Holly Fritch Kirby",heading:"Recently Finished Project",description:"Website created for Dermatology business owner in Kansas City area."})}a(19);function j(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{autoSlide:!0,arrows:!0,carousel:[l.a.createElement(w,null),l.a.createElement(k,null),l.a.createElement(S,null),l.a.createElement(I,null)]}))}a(20);function C(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("blockquote",null,l.a.createElement("div",{className:"section section--column section--quote "},l.a.createElement("p",null,"I'm believing ",l.a.createElement("strong",null,"past impossible"),", no matter how statistically ",l.a.createElement("strong",null,"improbable"),","),l.a.createElement("p",null,"because when it all comes down to it... as long as I believe in myself, ",l.a.createElement("strong",null,"I'm unstoppable."))),l.a.createElement("span",null,"Christopher Fox")))}function F(e){return l.a.createElement("div",{className:"section section--".concat(e.color),id:e.secid},e.children)}function O(e){return l.a.createElement("div",{className:"section section--center section--w-full section--responsive"},l.a.createElement("div",{className:"section section--column section--w-".concat(e.col1," section--m-").concat(e.margins,"  ").concat("start"===e.firstAlign?"section--align-start":""," ").concat("end"===e.firstAlign?"section--align-end":"","\n        ").concat(e.isFull?"section--w-50":"")},e.children[0]),l.a.createElement("div",{className:"section section--column section--w-".concat(e.col2," section--m-").concat(e.margins,"  ").concat("start"===e.secondAlign?"section--align-start":""," ").concat("end"===e.secondAlign?"section--align-end":"","\n        ").concat(e.isFull?"section--w-50":"")},e.children[1]))}function _(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,e.children))}function M(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"section section--p-20 section--m-t-b-20 section--white ".concat(e.col?"section--column section--column-center":"","\n      \n        ").concat(e.widthFull?"section--w-full":"","  ")},e.children))}function A(e){return l.a.createElement("div",{className:"section section--column"},l.a.createElement(M,{widthFull:!0,col:!0},l.a.createElement("img",{className:"image ",src:"./images/jpg/ataraxydualitypose.jpg",alt:"christopher fox duiality pose"})),l.a.createElement(M,{widthFull:!0,col:!0},l.a.createElement(_,null,"Certifications"),l.a.createElement("div",null,"Adobe Certified Expert Illustrator")),l.a.createElement(M,{widthFull:!0,col:!0},l.a.createElement(_,null,"Basic Stuff"),l.a.createElement("div",null,l.a.createElement("p",{className:"body"},"I am an extremely motivated and focused individual with a passion for solving problems. I can do a myriad of tasks but have yet to focus on one piece of the tech stack pie. As I learn things in a rapid manner, which ever area I do focus on will give me a unique advantage to my peers as I can talk design, full stack development, security, and cloud systems design. When I have the time, I really enjoy competing in slam poetry competitions. I always try to make room in my schedule for long hikes and am currently working on getting myself back into competitive paintball."))))}function W(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"title--center"},e.children))}var x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={word:"Christopher Fox",arrOfWords:["Christopher Fox","Writer","Designer","Poet","Student of Life","Developer"],timer:""},a.cycleWords=a.cycleWords.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.cycleWords()},3e3);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"cycleWords",value:function(){var e=Math.floor(6*Math.random());this.setState({word:this.state.arrOfWords[e]})}},{key:"render",value:function(){return l.a.createElement(M,null,l.a.createElement(W,null,this.state.word))}}]),t}(l.a.Component);function D(e){return l.a.createElement(M,{col:!0},l.a.createElement(_,null,"Experience"),l.a.createElement("div",null,"Web Design ~ 4 years"),l.a.createElement("div",null,"Web Development 1 1/2 years"),l.a.createElement("div",null,"Graphic Design ~ 4 years"),l.a.createElement("div",null,l.a.createElement("p",null,"Information Technology Security less than 1 year")),l.a.createElement("div",null,"Poetry ~ 15 years"),l.a.createElement("div",null,"Playwriting ~ 5 years"),l.a.createElement("div",null,"Prose ~ 3 years"),l.a.createElement("div",null,"Slam Poetry ~ 5 years"),l.a.createElement("div",null,"Storytelling ~ 4 years"))}function L(e){return l.a.createElement("div",{className:"section--column section ".concat("start"===e.align?"section--align-start":""," ").concat("end"===e.align?"section--align-end":"","\n    ").concat("center"===e.align?"section--align-center":"")},l.a.createElement("div",{className:"section ".concat("start"===e.align?"section--align-start":""," ").concat("end"===e.align?"section--align-end":"")},e.children[0]),l.a.createElement("div",{className:"section ".concat("start"===e.align?"section--align-start":""," ").concat("end"===e.align?"section--align-end":"","\n        ").concat("center"===e.align?"section--align-center":"")},e.children[1]))}function H(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{firstAlign:"start",secondAlign:"end",isFull:!0},l.a.createElement(L,null,l.a.createElement("h4",null,e.programName),l.a.createElement("h5",null,e.schoolName)),l.a.createElement(L,{align:"end"},l.a.createElement("h4",null,e.yearsAttended),l.a.createElement("h5",null,e.location))))}function T(e){return l.a.createElement(M,{col:!0},l.a.createElement(_,null,"Education"),l.a.createElement(H,{programName:"Master's of Cyber Security",schoolName:"Southern New Hampshire University",yearsAttended:"December 2018 - June 2020",location:"Online"}),l.a.createElement(H,{programName:"Bachelor of Graphic Design and Media Arts",schoolName:"Southern New Hampshire University",yearsAttended:"June 2017 - October 2018",location:"Online"}),l.a.createElement(H,{programName:"Self Study ~1000 hours of videos",schoolName:"Lynda.com, AWS Training, Khan Academy, Cybery.com, Youtube.com",yearsAttended:"March 2017 - Present",location:"Online"}),l.a.createElement(H,{programName:"Web Development Bootcamp",schoolName:"Devmountain",yearsAttended:"November 2017 - March 2018",location:"Provo, UT"}))}a(21),a(22);function P(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{col1:"30",margins:"10",col2:"50"},l.a.createElement(A,null),l.a.createElement("div",{className:"section section--column"},l.a.createElement(x,null),l.a.createElement(D,null),l.a.createElement(T,null))))}function B(e){return l.a.createElement(F,{secid:"about-me",color:"about"},l.a.createElement(P,null))}a(23);function G(){return l.a.createElement("div",{className:"section section--icons"},l.a.createElement("img",{className:"icon",src:"./images/svg/icons/idIcon.svg",alt:"adobe InDesign Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/psIcon.svg",alt:"adobe Photoshop Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/aiIcon.svg",alt:"adobe Illustrator Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/postCssIcon.svg",alt:"Post CSS Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/cssIcon.svg",alt:"css Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/htmlIcon.svg",alt:"HTML Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/jsIcon.svg",alt:"Javascript Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/GoIcon.svg",alt:"Golang Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/ReactIcon.svg",alt:"ReactJS Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/mongoIcon.svg",alt:"MongoDB Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/sqlIcon.svg",alt:"SQL Icon"}),l.a.createElement("img",{className:"icon",src:"./images/svg/icons/awsIcon.svg",alt:"aws Icon"}))}function J(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Foxxy Hats"),l.a.createElement("h5",null,"Worked on: August 2015 - August 2016"),l.a.createElement("p",{className:"body"},"First word press site")))}function R(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/web/2Liesand1Truth.png",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Two Lies and One Truth"),l.a.createElement("h5",null,"Worked on: February 2017 - June 2017"),l.a.createElement("p",{className:"body"},"Website created to support a podcast project. I learned quite a bit about RSS feeds.")))}function q(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/web/Ataraxy.png",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Ataraxy Life"),l.a.createElement("h5",null,"Worked on: August 2016 - June 2017"),l.a.createElement("p",{className:"body"},"First shopify site")))}function U(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/web/PeaxLogin_LG.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Peax Games"),l.a.createElement("h5",null,"Worked on: February 2018 - March 2018"),l.a.createElement("p",{className:"body"},"Final Group Project at DevMountain")))}function Y(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/web/AtaraxyClothingHomepage.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Ataraxy Clothing"),l.a.createElement("h5",null,"Worked on: January 2018 - August 2018"),l.a.createElement("p",{className:"body"},"First React Ecommerce website. This was rebuilt two times and then continuously updated using the Aristos CMS (my custom-built CMS)..")))}function K(e){return l.a.createElement("div",{className:"section section--h-full section--responsive"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/web/MoarStatsProfile.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"MoarStats.io"),l.a.createElement("h5",null,"Worked on: November 2018 - Present"),l.a.createElement("p",{className:"body"},l.a.createElement("em",null,"ReactJs/Golang")),l.a.createElement("p",{className:"body"},"Currently broken while rebuilding the server to support SQL. Does have working multiplayer chess and go boards.")))}function V(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/web/AdorableHomepage.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Adorable Norman Home"),l.a.createElement("h5",null,"Worked on: February 2019"),l.a.createElement("p",{className:"body"},l.a.createElement("em",null,"HTML/Golang")),l.a.createElement("p",{className:"body"},"Built for a client to allow renters to view property and inquire for more information. The client also requested that the webpage have an administration section to allow them to send rental agreements and other forms to clients, as well as upload new documents and images.")))}function Q(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/web/drHollyFritch.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Dr Holly Fritch Kirby"),l.a.createElement("h5",null,"Worked on: March 2019"),l.a.createElement("p",{className:"body"},l.a.createElement("em",null,"HTML/Golang")),l.a.createElement("p",{className:"body"},"Built for a Dermatology Business to give the client a web presence.")))}function z(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{carousel:[l.a.createElement(Q,null),l.a.createElement(V,null),l.a.createElement(K,null),l.a.createElement(Y,null),l.a.createElement(U,null),l.a.createElement(q,null),l.a.createElement(R,null),l.a.createElement(J,null)]}))}function X(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/foxxyHatsMarketing.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Foxxy Hats Marketing"),l.a.createElement("h5",null,"Worked on: October 2015 - December 2015"),l.a.createElement("p",{className:"body"},"Initial stabs at creating marketing material")))}function Z(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/AtaraxyLogoLongAttemptOne.svg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Ataraxy Logo"),l.a.createElement("h5",null,"Worked on: August 2016 - August 2016"),l.a.createElement("p",{className:"body"},"Initial Ataraxy logo design")))}function $(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/AtaraxyVariationOneFront.png",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Ataraxy Business Card"),l.a.createElement("h5",null,"Worked on: August 2016 - August 2016"),l.a.createElement("p",{className:"body"},"The initial Ataraxy business Card")))}function ee(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/FinalBrochure-1.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"First Brochure"),l.a.createElement("h5",null,"Worked on: August 2016 - September 2016"),l.a.createElement("p",{className:"body"},"class assignment")))}function te(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/BrochureMostFinalish.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Brent's Bodyworks"),l.a.createElement("h5",null,"Worked on: November 2016 - November 2016"),l.a.createElement("p",{className:"body"},"class assignment")))}function ae(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/NewFinalYouthSymphonyShirt.png",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Youth Symphony Shirts"),l.a.createElement("h5",null,"Worked on: February 2017 - February 2017"),l.a.createElement("p",{className:"body"},"This was a shirt designed for the Colorado Springs Youth Symphony")))}function ne(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/grooperDesign_no_bubbles.png",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Grooper Logo"),l.a.createElement("h5",null,"Worked on: June 2017 - June 2017"),l.a.createElement("p",{className:"body"},"Logo designed for a DJ friend")))}function le(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/Bob_Dylan_Portrait.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Bob Dylan portrait"),l.a.createElement("h5",null,"Worked on: December 2017 - December 2017"),l.a.createElement("p",{className:"body"},"class assignment")))}function ce(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/nightmaresPoster.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Nightmare Poster"),l.a.createElement("h5",null,"Worked on: February 2018 - March 2018"),l.a.createElement("p",{className:"body"},"Poster for a friend's play")))}function se(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/HomeInTheSprings.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Home in The Springs Logo"),l.a.createElement("h5",null,"Worked on: November 2018 - December 2018"),l.a.createElement("p",{className:"body"},"logo design for a realtor that incorporates pikes peak")))}function oe(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/graphic/Workshop_1.2.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"GlowGrowth and Development Workshop"),l.a.createElement("h5",null,"Worked on: March 2019"),l.a.createElement("p",{className:"body"},"Flier created for a professional development workshop")))}function re(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{carousel:[l.a.createElement(oe,null),l.a.createElement(se,null),l.a.createElement(ce,null),l.a.createElement(le,null),l.a.createElement(ne,null),l.a.createElement(ae,null),l.a.createElement(te,null),l.a.createElement(ee,null),l.a.createElement($,null),l.a.createElement(Z,null),l.a.createElement(X,null)]}))}function ie(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/openSource/reactStyluxTOC.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"React Stylux"),l.a.createElement("h5",null,"Worked on: December 2017 - May 2018"),l.a.createElement("p",{className:"body"},"I found the bootcamp to be very boring, I tried to ask for more work, but they would not give it to me. To make the experience more of a challenge, I began to design a component library. After about a week on ReactJS, I rationalized that it would be possible to pass styles through props. I then systematically learned HTML through doing this.")))}function me(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/openSource/AristosCMS.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Aristos CMS"),l.a.createElement("h5",null,"Worked on: June 2018 - September 2018"),l.a.createElement("p",{className:"body"},"I ran into an issue while working on the component library, I did not understand how forms worked with a server. Because of this, I built my own Content Management System (CMS) to learn more about this, and to help manage the websites that I was working on.")))}function ue(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/openSource/cards.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Playing Cards"),l.a.createElement("h5",null,"Worked on: January 2019 - January 2019"),l.a.createElement("p",{className:"body"},"I created this project to explore more class-based architecture and allow other individuals to access the cards that I am using for projects related to MoarStats.io.")))}function de(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{carousel:[l.a.createElement(ue,null),l.a.createElement(me,null),l.a.createElement(ie,null)]}))}function he(e){return l.a.createElement("div",{className:"section section--h-full"},l.a.createElement("div",{className:"carousel--item-one"},l.a.createElement("img",{className:"image",src:"./images/portfolio/publications/BookCoverTwo.jpg",alt:""})),l.a.createElement("div",{className:"section carousel--item-two"},l.a.createElement("h3",{className:"title"},"Gendered"),l.a.createElement("h5",null,"Worked on: July 2017 - August 2017"),l.a.createElement("p",{className:"body"},"I wrote this novel from thought to finished item in a little over a month. I don't believe that it is very good, but I wanted to test myself to see if I could write a novel. I believe it currently reads as more of an allegory and is something that I wish to re work after completing other written works.")))}function ge(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{carousel:[l.a.createElement(he,null)]}))}a(24);var Ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={web:!0,graphic:!1,open:!1,publication:!1},a.onHandleChange=a.onHandleChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onHandleChange",value:function(e){switch(e){case 0:return this.setState({web:!0,graphic:!1,open:!1,publication:!1});case 1:return this.setState({web:!1,graphic:!0,open:!1,publication:!1});case 2:return this.setState({web:!1,graphic:!1,open:!0,publication:!1});case 3:return this.setState({web:!1,graphic:!1,open:!1,publication:!0});default:return this.setState({web:!0,graphic:!1,open:!1,publication:!1})}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"my-portfolio",className:"section section--portfolio"},l.a.createElement("div",{className:"section section--w-80 section--h-100"},l.a.createElement("h5",{className:"link ".concat(this.state.web&&"link-active"),onClick:function(){return e.onHandleChange(0)}},"Web Development"),l.a.createElement("h5",{className:"link ".concat(this.state.graphic&&"link-active"),onClick:function(){return e.onHandleChange(1)}},"Graphic Design"),l.a.createElement("h5",{className:"link ".concat(this.state.open&&"link-active"),onClick:function(){return e.onHandleChange(2)}},"Open Source Projects"),l.a.createElement("h5",{className:"link ".concat(this.state.publication&&"link-active"),onClick:function(){return e.onHandleChange(3)}},"Publications")),this.state.web&&l.a.createElement(z,null),this.state.graphic&&l.a.createElement(re,null),this.state.open&&l.a.createElement(de,null),this.state.publication&&l.a.createElement(ge,null))}}]),t}(l.a.Component);a(25);function pe(e){return l.a.createElement("div",{className:"section section--contact section--column",id:"contact-me"},l.a.createElement("h3",{className:"title"},"Contact Me!"),l.a.createElement("a",{href:"https://www.linkedin.com/in/foxchrisrealthe/",target:"_blank",rel:"noopener noreferrer",className:"button button--circle button--rev"},l.a.createElement("i",{className:"fab fa-linkedin-in"})))}var fe=new Date;function ve(e){return l.a.createElement("footer",{className:"section section--footer"},"\xa9 ",fe.getFullYear()," FoxChrisRealThe - Website Design by Fox Design Agency")}a(26);s.a.render(l.a.createElement(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(j,null),l.a.createElement(C,null),l.a.createElement(B,null),l.a.createElement(G,null),l.a.createElement(Ee,null),l.a.createElement(pe,null),l.a.createElement(ve,null))},null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.f404698f.chunk.js.map