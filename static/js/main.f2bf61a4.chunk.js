(this["webpackJsonp18-api"]=this["webpackJsonp18-api"]||[]).push([[0],{27:function(e,t,a){e.exports=a(59)},32:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(22),r=a.n(s),c=(a(32),a(26)),i=a(8),l=a.n(i),u=a(23),m=a(3),p=a(4),d=a(5),h=a(6),v=a(24),k=a.n(v),f=(a(50),a(9)),b=a(11),E=(a(55),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={someKey:"someValue"},e}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Joke"},o.a.createElement("div",{className:"Joke-buttons"},o.a.createElement(f.a,{className:"fa-arrow",icon:b.b,onClick:this.props.upvote}),o.a.createElement("span",{className:"Joke-votes"},this.props.votes),o.a.createElement(f.a,{className:"fa-arrow",icon:b.a,onClick:this.props.downvote})),o.a.createElement("div",{className:"Joke-text"},this.props.text),o.a.createElement("div",{className:"Joke-smiley"},o.a.createElement("i",{class:"em em-rolling_on_the_floor_laughing","aria-role":"presentation","aria-label":"ROLLING ON THE FLOOR LAUGHING"})))}},{key:"componentDidMount",value:function(){this.setState({someKey:"otherValue"})}}]),a}(o.a.Component)),j=a(25),N=a.n(j),J=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={jokes:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="https://icanhazdadjoke.com/",a={Accept:"application/json"},n=[];case 3:if(!(n.length<this.props.numJokesToGet)){e.next=10;break}return e.next=6,k.a.get(t,{headers:a});case 6:o=e.sent,n.push({id:N()(),text:o.data.joke,votes:0}),e.next=3;break;case 10:this.setState({jokes:n});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){this.setState((function(a){return{jokes:a.jokes.map((function(a){return a.id===e?Object(c.a)({},a,{votes:a.votes+t}):a}))}}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"JokeList"},o.a.createElement("div",{className:"JokeList-sidebar"},o.a.createElement("h1",{className:"JokeList-title"},o.a.createElement("span",null,"Dad")," Jokes"),o.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"emoji-laugh"}),o.a.createElement("button",{className:"JokeList-get-more"},"New Jokes")),o.a.createElement("div",{className:"JokeList-jokes"},this.state.jokes.map((function(t){return o.a.createElement(E,{votes:t.votes,text:t.text,key:t.id,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}})}))))}}]),a}(o.a.Component);J.defaultProps={numJokesToGet:10};var g=J;a(58);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f2bf61a4.chunk.js.map