(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),o=t.n(r),i=t(1),s=t(2),c=t(4),m=t(3),u=t(5),d={introMessage:"Hello, I'm Dimitrios Douras",shortDescription:"I'm a full-stack software engineer, focused on creating API-driven apps with cutting-edge front-ends.",aboutMeDescription:"I am a full stack software engineer with a Masters degree in Computer Science and more than 5 years of professional experience in software development. I have served as both backend and frontend developer in large-scale, commercial projects. I have extensively used Angular for client side and Java frameworks for server side development, whereas I am always keeping myself up-to-date with new technologies and trends.",name:"Dimitrios Douras",tel:"(+30)6936607373",email:"dimitrios.n.douras@gmail.com",socialLinks:[{name:"facebook",url:"https://www.facebook.com/dimitris.douras",className:"fa fa-facebook"},{name:"twitter",url:"https://twitter.com/DimitriosDrs",className:"fa fa-twitter"},{name:"linkedin",url:"https://www.linkedin.com/in/dimitrios-douras-66b98530/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/dimitriosd",className:"fa fa-github"},{name:"stackoverflow",url:"https://stackoverflow.com/users/824002/dimitrios-douras",className:"fa fa-stack-overflow"},{name:"skype",url:"skype:dimitriosd1983?chat",className:"fa fa-skype"}],education:[{university:"The University of Edinburgh",link:"https://www.ed.ac.uk/home",degree:"MSc in Computer Science",year:"2010-2011",description:"Developed excellent knowledge of key concepts of computer systems and software engineering by completing projects in the form of\nprogramming assignments and up-to-date case studies and attending lab courses and tutorials for each module."},{university:"University of Thessaly",link:"http://www.uth.gr/en/",degree:"MEng in Computer & Communications",year:"2001-2007",description:"Established a comprehensive educational framework on every aspect of Computer and Communications Engineering including (a)\nFundamentals and Applications of Computer Science, (b) Software Engineering and Information Systems, (c) Hardware and Computer\nArchitecture and (d) Signals, Telecommunication and Networks."}],work:[{company:"Crossover for Work - Remote",role:"Front End Software Architect",date:"October 2014-Present",description:"Developing, improving and maintaining several commercial projects using latest technology-stack: (1) Crossover: Platform that provides a seamless end-to-end solution for remote team management (2) CX Monitor: Monitoring platform (3) Lyris: Email/Marketing web application"},{company:"Synasource PC - Athens, Greece",role:"Co-founder / Developer",date:"February 2012-June 2014",description:"Developed the server side of a mobile application (Get The Bet), a sports app for providing statistics and making predictions on football games\nbased on machine learning algorithms. Available on iOS and Android smartphones"},{company:"BGC Partners - London, UK",role:"Developer Analyst \u2013 Back Office Integration Team",date:"February 2012-June 2014",description:"Analyzing, designing and developing software solutions and implementing changes to the existing core financial applications. (Technology-\nstack: JAVA, Unix/Linux Platform, Spring MVC, Struts2, Sybase ASE/IQ, Hibernate, XML, Web Services, Mule ESB, JMS/TibcoEMS,\nFIX Protocol, Performance Tuning, Groovy)."}],skills:[{skillname:"Javascript",knowledge:"90%"},{skillname:"Angular",knowledge:"90%"},{skillname:"React",knowledge:"50%"},{skillname:"Java",knowledge:"90%"},{skillname:"Node.js",knowledge:"50%"},{skillname:"Databases (RDBMS / NoSQL)",knowledge:"80%"}],portfolio:[{name:"Crossover",description:"Web application",imgurl:"images/portfolio/Crossover.jpg",modalimgurl:"images/portfolio/modals/Crossover.jpg",fulldescription:"Crossover connects companies to the best talent from around the world and provides a seamless end-to-end solution for remote team management.",tech:"Java 8, Spring MVC, Hibernate, MySQL, AWS, DynamoDB, ElasticSearch, Redis, AngularJS, Angular6",link:"https://www.crossover.com"},{name:"Lyris HQ",description:"Web application",imgurl:"images/portfolio/AureaLyris.jpg",modalimgurl:"images/portfolio/modals/lhq-aurea.png",fulldescription:"Lyris is a cloud-based email marketing solution that enables you to deeply engage your customer base in relevant and specific conversations.",tech:"Angular5/6",link:"https://www.aurea.com/library/campaign-manager/"},{name:"CX-Monitor",description:"Web application",imgurl:"images/portfolio/CX-Monitor.jpg",modalimgurl:"images/portfolio/modals/cx-monitor.png",fulldescription:"Aurea CX Monitor is a comprehensive IT monitoring and management solution delivering the system monitoring, root-cause analysis, and issue identification tools you need to run your business in real-time.",tech:"Java, JSP Servlets, ExtJS",link:"https://www.aurea.com/library/cx-monitor/"},{name:"Get The Bet",description:"Mobile application",imgurl:"images/portfolio/getthebet.jpg",modalimgurl:"images/portfolio/modals/getthebet-modal.png",fulldescription:"A sports app for providing statistics and making predictions on football games\nbased on machine learning algorithms.",tech:"Java, Weka, Spring MVC, Hibernate, MySQL, Google App Engine, Google cloud",link:"https://appadvice.com/app/get-bet-football-betting-predictive-analysis-quantitative/849611447"}]},p=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"renderNav",value:function(){return l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects"))))}},{key:"renderSocial",value:function(){var e=d.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))});return l.a.createElement("ul",{className:"social"},e,l.a.createElement("li",null,l.a.createElement("a",{href:d.email},l.a.createElement("i",{className:"fa fa-envelope"}))))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},this.renderNav(),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},d.introMessage),l.a.createElement("h3",null,d.shortDescription," Let's"," ",l.a.createElement("a",{className:"smoothscroll",href:"#about"}," ","start scrolling")," ","and learn more"," ",l.a.createElement("a",{className:"smoothscroll",href:"#about"},"about me"),"."),l.a.createElement("hr",null),this.renderSocial())),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(l.a.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/me.jpg",alt:"images/profilepic.jpg"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,d.aboutMeDescription),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,d.name),l.a.createElement("br",null),l.a.createElement("span",null,d.tel),l.a.createElement("br",null),l.a.createElement("span",null,d.email))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:"/files/DimitriosDouras.pdf",className:"button",download:!0},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume"))))," ")," "))," ")}}]),a}(l.a.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"renderEducation",value:function(){var e={color:"#313131"},a=d.education.map(function(a){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,l.a.createElement("a",{style:e,href:a.link,target:"_blank",rel:"noopener noreferrer"},a.university)),l.a.createElement("p",{className:"info"},a.degree," ",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},a.year)),l.a.createElement("p",null,a.description)))});return l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},a)," ")}},{key:"renderWork",value:function(){var e=d.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.role," ",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.date)),l.a.createElement("p",null,e.description)))});return l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e))}},{key:"renderSkills",value:function(){var e=d.skills.map(function(e){var a={width:e.knowledge};return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand",style:a}),l.a.createElement("em",null,e.skillname))});return l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,"My main skill set includes but is not limited to:"),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e))))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"resume"},this.renderWork(),this.renderEducation(),this.renderSkills()))}}]),a}(l.a.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"renderProjects",value:function(){return d.portfolio.map(function(e,a){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-".concat(a+1),title:!0},l.a.createElement("img",{src:e.imgurl,alt:""}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"icon-plus"})))))})}},{key:"renderModals",value:function(){return d.portfolio.map(function(e,a){return l.a.createElement("div",{id:"modal-".concat(a+1),className:"popup-modal mfp-hide"},l.a.createElement("img",{className:"scale-with-grid",src:e.modalimgurl,alt:""}),l.a.createElement("div",{className:"description-box"},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.fulldescription),l.a.createElement("span",{className:"categories"},l.a.createElement("i",{className:"fa fa-tag"}),e.tech)),l.a.createElement("div",{className:"link-box"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Details"),l.a.createElement("a",{className:"popup-modal-dismiss"},"Close")))})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},this.renderProjects())),this.renderModals())))}}]),a}(l.a.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"renderSocial",value:function(){var e=d.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))});return l.a.createElement("ul",{className:"social-links"},e,l.a.createElement("li",null,l.a.createElement("a",{href:d.email},l.a.createElement("i",{className:"fa fa-envelope"}))))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},this.renderSocial(),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa92009 Dimitrios Douras"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"}))))))}}]),a}(l.a.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement(E,null),l.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(14)}},[[8,2,1]]]);
//# sourceMappingURL=main.e0b09b01.chunk.js.map