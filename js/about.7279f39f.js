(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(e,t,i){var n=i("fc6a"),a=i("241c").f,r={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return a(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==r.call(e)?s(e):a(n(e))}},"07de":function(e,t,i){},"0839":function(e,t,i){"use strict";i("29f2")},"0b42":function(e,t,i){var n=i("e8b5"),a=i("68ee"),r=i("861d"),o=i("b622"),s=o("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,a(t)&&(t===Array||n(t.prototype))?t=void 0:r(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?Array:t}},"29f2":function(e,t,i){},"428f":function(e,t,i){var n=i("da84");e.exports=n},"65f0":function(e,t,i){var n=i("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"746f":function(e,t,i){var n=i("428f"),a=i("5135"),r=i("e538"),o=i("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});a(t,e)||o(t,e,{value:r.f(e)})}},"984d":function(e,t,i){e.exports=i.p+"img/profil.23fce2cb.jpg"},a124:function(e,t,i){"use strict";i("07de")},a4d3:function(e,t,i){"use strict";var n=i("23e7"),a=i("da84"),r=i("d066"),o=i("c430"),s=i("83ab"),c=i("4930"),u=i("d039"),l=i("5135"),m=i("e8b5"),p=i("1626"),d=i("861d"),g=i("d9b5"),f=i("825a"),b=i("7b0b"),h=i("fc6a"),v=i("a04b"),j=i("577e"),y=i("5c6c"),O=i("7c73"),w=i("df75"),S=i("241c"),C=i("057f"),I=i("7418"),P=i("06cf"),k=i("9bf2"),x=i("d1e7"),_=i("6eeb"),L=i("5692"),D=i("f772"),E=i("d012"),A=i("90e3"),H=i("b622"),q=i("e538"),B=i("746f"),N=i("d44e"),J=i("69f3"),M=i("b727").forEach,T=D("hidden"),G="Symbol",R="prototype",z=H("toPrimitive"),U=J.set,F=J.getterFor(G),V=Object[R],W=a.Symbol,Q=r("JSON","stringify"),$=P.f,K=k.f,X=C.f,Y=x.f,Z=L("symbols"),ee=L("op-symbols"),te=L("string-to-symbol-registry"),ie=L("symbol-to-string-registry"),ne=L("wks"),ae=a.QObject,re=!ae||!ae[R]||!ae[R].findChild,oe=s&&u((function(){return 7!=O(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,i){var n=$(V,t);n&&delete V[t],K(e,t,i),n&&e!==V&&K(V,t,n)}:K,se=function(e,t){var i=Z[e]=O(W[R]);return U(i,{type:G,tag:e,description:t}),s||(i.description=t),i},ce=function(e,t,i){e===V&&ce(ee,t,i),f(e);var n=v(t);return f(i),l(Z,n)?(i.enumerable?(l(e,T)&&e[T][n]&&(e[T][n]=!1),i=O(i,{enumerable:y(0,!1)})):(l(e,T)||K(e,T,y(1,{})),e[T][n]=!0),oe(e,n,i)):K(e,n,i)},ue=function(e,t){f(e);var i=h(t),n=w(i).concat(ge(i));return M(n,(function(t){s&&!me.call(i,t)||ce(e,t,i[t])})),e},le=function(e,t){return void 0===t?O(e):ue(O(e),t)},me=function(e){var t=v(e),i=Y.call(this,t);return!(this===V&&l(Z,t)&&!l(ee,t))&&(!(i||!l(this,t)||!l(Z,t)||l(this,T)&&this[T][t])||i)},pe=function(e,t){var i=h(e),n=v(t);if(i!==V||!l(Z,n)||l(ee,n)){var a=$(i,n);return!a||!l(Z,n)||l(i,T)&&i[T][n]||(a.enumerable=!0),a}},de=function(e){var t=X(h(e)),i=[];return M(t,(function(e){l(Z,e)||l(E,e)||i.push(e)})),i},ge=function(e){var t=e===V,i=X(t?ee:h(e)),n=[];return M(i,(function(e){!l(Z,e)||t&&!l(V,e)||n.push(Z[e])})),n};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,t=A(e),i=function(e){this===V&&i.call(ee,e),l(this,T)&&l(this[T],t)&&(this[T][t]=!1),oe(this,t,y(1,e))};return s&&re&&oe(V,t,{configurable:!0,set:i}),se(t,e)},_(W[R],"toString",(function(){return F(this).tag})),_(W,"withoutSetter",(function(e){return se(A(e),e)})),x.f=me,k.f=ce,P.f=pe,S.f=C.f=de,I.f=ge,q.f=function(e){return se(H(e),e)},s&&(K(W[R],"description",{configurable:!0,get:function(){return F(this).description}}),o||_(V,"propertyIsEnumerable",me,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),M(w(ne),(function(e){B(e)})),n({target:G,stat:!0,forced:!c},{for:function(e){var t=j(e);if(l(te,t))return te[t];var i=W(t);return te[t]=i,ie[i]=t,i},keyFor:function(e){if(!g(e))throw TypeError(e+" is not a symbol");if(l(ie,e))return ie[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:pe}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:de,getOwnPropertySymbols:ge}),n({target:"Object",stat:!0,forced:u((function(){I.f(1)}))},{getOwnPropertySymbols:function(e){return I.f(b(e))}}),Q){var fe=!c||u((function(){var e=W();return"[null]"!=Q([e])||"{}"!=Q({a:e})||"{}"!=Q(Object(e))}));n({target:"JSON",stat:!0,forced:fe},{stringify:function(e,t,i){var n,a=[e],r=1;while(arguments.length>r)a.push(arguments[r++]);if(n=t,(d(t)||void 0!==e)&&!g(e))return m(t)||(t=function(e,t){if(p(n)&&(t=n.call(this,e,t)),!g(t))return t}),a[1]=t,Q.apply(null,a)}})}if(!W[R][z]){var be=W[R].valueOf;_(W[R],z,(function(){return be.apply(this,arguments)}))}N(W,G),E[T]=!0},b727:function(e,t,i){var n=i("0366"),a=i("44ad"),r=i("7b0b"),o=i("50c4"),s=i("65f0"),c=[].push,u=function(e){var t=1==e,i=2==e,u=3==e,l=4==e,m=6==e,p=7==e,d=5==e||m;return function(g,f,b,h){for(var v,j,y=r(g),O=a(y),w=n(f,b,3),S=o(O.length),C=0,I=h||s,P=t?I(g,S):i||p?I(g,0):void 0;S>C;C++)if((d||C in O)&&(v=O[C],j=w(v,C,y),e))if(t)P[C]=j;else if(j)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:c.call(P,v)}else switch(e){case 4:return!1;case 7:c.call(P,v)}return m?-1:u||l?l:P}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb51:function(e,t,i){"use strict";i.r(t);i("a4d3"),i("e01a");var n=i("7a23"),a=i("984d"),r=i.n(a),o={id:"mainContent"},s={class:"photoProfil","data-aos":"fade-down","data-aos-duration":"1500","data-aos-easing":"ease-out","data-aos-once":"true"},c={class:"social"},u={href:"/CHINE_Dmitri-2021.pdf",title:"CV",target:"_blank"},l=Object(n["h"])('<a href="https://www.linkedin.com/in/dmitri-chine" title="Profil LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a><a href="https://github.com/ChineDmitri" title="GitHub" target="_blank"><i class="fab fa-github"></i></a><a href="https://wa.me/33637753064" title="WhatsApp" target="_blank"><i class="fab fa-whatsapp-square"></i></a>',3),m={"data-aos":"fade-up","data-aos-duration":"1500","data-aos-once":"true"},p={key:1,class:"starwars"},d=Object(n["g"])("div",{class:"animation"},[Object(n["g"])("section",{class:"intro"},[Object(n["i"])(" A long time ago, in a galaxy far, "),Object(n["g"])("br"),Object(n["i"])(" far away.... ")]),Object(n["g"])("section",{class:"titles"},[Object(n["g"])("div",{contenteditable:"true",spellcheck:"false"},[Object(n["g"])("p",null," Monsieur Chine Dmitri, web-developpeur, né en 11 décembre 1992 à Kazakhstan. En 2009, j'ai déménagé en Russie et commencé étude à l'Université d'Instrumentation Aérospatiale de Saint-Pétersbourg. Cette éducation n'était pas terminée et en 2011, j'avais obligation servir 1 an d'armée obligatoire en Russie pendant 2012-2013. En suite de l'armée russe, j'ai décidé partir en France et s'engager à la Légion Étrangère. "),Object(n["g"])("p",null," En service à la Légion Étrangère, j'ai travaillé aux différents posts comme chef d'équipe en montagne, aide moniteur auto école, secrétaire dans le domaine RH. Enfin 8 ans de service, j'ai décidé retourner dans le monde IT, et passe parcours Web Développeur chez OpenClassRooms (formation à la distance). "),Object(n["g"])("p",null," Actuellement en formation dans le Centre Militare De Formation Professionnelle à Fontenay-le-Comte pour la formation technicien d'assistance en informatique jusqu'à septembre 2022... ")])])],-1),g=[d];function f(e,t,i,a,d,f){var b=Object(n["x"])("Projet");return Object(n["s"])(),Object(n["f"])("div",o,[d.bio?(Object(n["s"])(),Object(n["f"])("button",{key:0,id:"stopBio",onClick:t[0]||(t[0]=function(){return f.stopBio&&f.stopBio.apply(f,arguments)}),"data-aos":"fade-down","data-aos-duration":"3000ms"}," Arreter les titres ")):Object(n["e"])("",!0),Object(n["g"])("header",{class:Object(n["o"])({removeHeaderPhoto:d.bio,headerOpac:d.bio})},[Object(n["g"])("div",s,[Object(n["g"])("img",{src:r.a,alt:"Dmitri Chine",onClick:t[1]||(t[1]=function(){return f.startBio&&f.startBio.apply(f,arguments)})})]),Object(n["g"])("div",c,[Object(n["g"])("a",u,[Object(n["g"])("i",{class:"fas fa-id-card",onClick:t[2]||(t[2]=function(){return f.startBio&&f.startBio.apply(f,arguments)})})]),l])],2),Object(n["g"])("main",m,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["w"])(d.projets,(function(e,t){return Object(n["s"])(),Object(n["d"])(b,{key:t,title:e.title,imagePreview:e.imagePreview,altImg:e.altImg,gitHub:e.gitHub,site:e.site,description:e.description,stacks:e.stacks,bio:d.bio},null,8,["title","imagePreview","altImg","gitHub","site","description","stacks","bio"])})),128))]),!0===d.bio?(Object(n["s"])(),Object(n["f"])("article",p,g)):Object(n["e"])("",!0)])}var b={class:"preview"},h={class:"photoProjet"},v=["src","alt"],j={class:"stack"},y=["src","alt"],O={class:"description"},w=["href"],S={key:1},C=["href"];function I(e,t,i,a,r,o){return Object(n["s"])(),Object(n["f"])("article",{class:Object(n["o"])({projet:!0,projetOpac:i.bio})},[Object(n["g"])("div",b,[Object(n["g"])("div",h,[Object(n["g"])("img",{src:i.imagePreview,alt:i.altImg},null,8,v)]),Object(n["g"])("div",j,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["w"])(i.stacks,(function(e,t){return Object(n["s"])(),Object(n["f"])("img",{key:t,src:e.img,alt:e.altImg},null,8,y)})),128))])]),Object(n["g"])("div",O,[Object(n["g"])("h2",null,Object(n["z"])(i.title),1),Object(n["g"])("p",null,Object(n["z"])(i.description),1),null!==i.gitHub?(Object(n["s"])(),Object(n["f"])("a",{key:0,href:i.gitHub,target:"_blank"},"Voir le repository GitHub",8,w)):Object(n["e"])("",!0),null!==i.site?(Object(n["s"])(),Object(n["f"])("br",S)):Object(n["e"])("",!0),null!==i.site?(Object(n["s"])(),Object(n["f"])("a",{key:2,href:i.site,target:"_blank"},"Voir le projet déployé",8,C)):Object(n["e"])("",!0)])],2)}var P={name:"Projet",props:{title:String,description:String,imagePreview:String,altImg:String,gitHub:[String,null],site:[String,null],stacks:Array,bio:Boolean}},k=(i("a124"),i("6b0d")),x=i.n(k);const _=x()(P,[["render",I]]);var L=_,D={name:"Home",components:{Projet:L},data:function(){return{bio:!1,audio:void 0,projets:[{title:"Saisie semi-automatique pour attestation d'employeur",description:"Le script permet de saisir les donné dans les inputs correspondants sur le site Pôle Emploi (espace déclarations et cotisations) qui viennent d'Excel pour l'édition attestation d'employer.\n\nEn Excel, appliqué plusieurs formule (calcule le solde de base, date de paye pour chaque mois, dernier jour travaillé payé, etc.)",imagePreview:"/img/ae.jpg",altImg:"Attestation d'employer - Pôle emploi",gitHub:"https://github.com/ChineDmitri/Selenium_LE-GADIPLE-SEC_AE",site:null,stacks:[{img:"/img/selenium.png",altImg:"Selenium"},{img:"/img/Noda.png",altImg:"Node.Js"},{img:"/img/Excel.png",altImg:"Excel"}]},{title:"Réseau social d’entreprise",description:"Le projet consistait à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.\n            \n            Compte pour test sur le projet déployé:\nUser \nLogin: user1@groupomania.fr \nPassword: Groupomania1\n\nModerator \nLogin: moderator@groupomania.fr \nPassword: Groupomania1\n\nAdmin \nLogin: admin1@groupomania.fr \nPassword: Groupomania1",imagePreview:"/img/groupomania.png",altImg:"Réseau social pour l’entreprise - Gropomania",gitHub:"https://github.com/ChineDmitri/DmitriChine_7_11072021",site:"https://dcdev-groupomania.herokuapp.com/",stacks:[{img:"/img/1200px-MySQL.svg.png",altImg:"MySQL"},{img:"/img/1200px-Vue.js_Logo_2.svg.png",altImg:"Vue.Js"},{img:"/img/expressjslogo.png",altImg:"Express.Js"},{img:"/img/Noda.png",alaltImgt:"Node.Js"}]},{title:"API sécurisée pour une application d'avis gastronomiques",description:"Développé API sécurisé pour une application web de critique des sauces piquantes appelée « Hot Takes » \n            \nPS. Le front-end de l'application a été développé par un autre développeur à l'aide d'Angular et a été précompilé après des tests internes.",imagePreview:"/img/p6.png",altImg:"API sécurisée pour une application d'avis gastronomiques - Piiquante",gitHub:"https://github.com/ChineDmitri/DmitriChine_6_30052021",site:null,stacks:[{img:"/img/MongoDB-Logo.png",altImg:"MongoDB"},{img:"/img/expressjslogo.png",altImg:"Express.Js"},{img:"/img/Noda.png",altImg:"Node.Js"}]},{title:"Site e-commerce en JavaScript",description:"Front-end developpé:\n\nUne page d’accueil montrant (de manière dynamique) tous les articles disponibles à la vente.\n\nUne page “produit” qui affiche (de manière dynamique) les détails du produit sur lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur peut sélectionner option pour le produit, et ajouter le à son panier.\n\nUne page “panier”. Celle-ci contient plusieurs parties : a) Un résumé des produits dans le panier, le prix total et la possibilité de supprimé produit sélectionné. b) Un formulaire permettant de passer une commande (les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end).\n\nUne page “confirmation” avec message de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant l'identifiant de commande envoyé par l’API.\n\nPour ce projet,j'ai utilisée que du code JavaScript pur.",imagePreview:"/img/orinoco.png",altImg:"Site e-commerce en JavaScript - Orinoco",gitHub:"https://github.com/ChineDmitri/DmitriChine_5_23042021",site:"http://orinoco.42web.io/",stacks:[{img:"/img/html-5.png",altImg:"HTML5"},{img:"/img/css-3.png",altImg:"CSS3"},{img:"/img/js.png",altImg:"JavaScript"}]},{title:"Optimisation un site existant",description:"Analyse de l’état actuel de SEO du site fourni.\n            \nAmélioration du SEO du site.\n            \nAccélérer la vitesse de chargemen et comparaison des résultats.",imagePreview:"/img/lachouetteagence.png",altImg:"Optimisation un site existant - La Choutte Agence",gitHub:"https://github.com/ChineDmitri/DmitriChine_4_13032021",site:"https://chinedmitri.github.io/DmitriChine_4_13032021/",stacks:[{img:"/img/html-5.png",altImg:"HTML5"},{img:"/img/css-3.png",altImg:"CSS3"}]},{title:"Dynamisez web site avec des animations CSS",description:"Ohmyfood! est une entreprise de commande de repas en ligne. Notre concept permet aux\nutilisateurs de composer leur propre menu et réduire leur temps d’attente dans les\nrestaurants car leur menu est préparé à l’avance. Plus de perte de temps à consulter la carte!\n            \nLes effets accessibles au clic ou au survol. Ils utilisent les animations ou transitions CSS, pas de JavaScript ni de librairie.",imagePreview:"/img/ohmyfood.png",altImg:"Dynamisez web site avec des animations CSS - OhMyFood",gitHub:"https://github.com/ChineDmitri/DmitriChine_3_15022021",site:"https://chinedmitri.github.io/DmitriChine_3_15022021/",stacks:[{img:"/img/html-5.png",altImg:"HTML5"},{img:"/img/css-3.png",altImg:"CSS3"}]},{title:"Transformez une maquette en site web",description:"Le site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les hébergements peuvent également être filtrés par thématique, par exemple leur budget ou leur ambiance.",imagePreview:"/img/reservia.png",altImg:"Transformez une maquette en site web - Reservia",gitHub:"https://github.com/ChineDmitri/DmitriChine_2_10012021",site:"https://chinedmitri.github.io/DmitriChine_2_10012021/",stacks:[{img:"/img/html-5.png",altImg:"HTML5"},{img:"/img/css-3.png",altImg:"CSS3"}]}]}},methods:{startBio:function(){var e=this;this.bio=!this.bio,console.log(this.bio);var t=document.getElementsByTagName("body")[0];t.classList.add("fixedBody");var i=document.getElementById("mainContent");i.classList.add("fixedMainContent"),this.audio=new Audio,this.audio.src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg",this.audio.play(),setTimeout((function(){e.bio=!1,e.audio.pause();var t=document.getElementsByTagName("body")[0];t.classList.remove("fixedBody");var i=document.getElementById("mainContent");i.classList.remove("fixedMainContent")}),96e3)},stopBio:function(){this.bio=this.false,this.audio.pause();var e=document.getElementsByTagName("body")[0];e.classList.remove("fixedBody");var t=document.getElementById("mainContent");t.classList.remove("fixedMainContent")}}};i("0839");const E=x()(D,[["render",f]]);t["default"]=E},e01a:function(e,t,i){"use strict";var n=i("23e7"),a=i("83ab"),r=i("da84"),o=i("5135"),s=i("1626"),c=i("861d"),u=i("9bf2").f,l=i("e893"),m=r.Symbol;if(a&&s(m)&&(!("description"in m.prototype)||void 0!==m().description)){var p={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new m(e):void 0===e?m():m(e);return""===e&&(p[t]=!0),t};l(d,m);var g=d.prototype=m.prototype;g.constructor=d;var f=g.toString,b="Symbol(test)"==String(m("test")),h=/^Symbol\((.*)\)[^)]+$/;u(g,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=f.call(e);if(o(p,e))return"";var i=b?t.slice(7,-1):t.replace(h,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(e,t,i){var n=i("b622");t.f=n},e8b5:function(e,t,i){var n=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=about.7279f39f.js.map