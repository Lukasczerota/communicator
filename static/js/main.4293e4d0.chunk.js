(this.webpackJsonpcommunicator=this.webpackJsonpcommunicator||[]).push([[0],[,,,,function(e,n,t){e.exports={container:"LoginPage_container__3VXUe",content:"LoginPage_content__1h0vc",imgContainer:"LoginPage_imgContainer__3BfKB",tilt:"LoginPage_tilt__3Hc2X",img:"LoginPage_img__2qCNN",memberLogin:"LoginPage_memberLogin__3U4ab",inputContainer:"LoginPage_inputContainer__ZZ82P",input:"LoginPage_input__SfVic",lightEffect:"LoginPage_lightEffect__zgfzc",floatingIcon:"LoginPage_floatingIcon__3OOds",button:"LoginPage_button__3K9B_",errorContainer:"LoginPage_errorContainer__2kWi7",spinnerContainer:"LoginPage_spinnerContainer__1Pe1Q",ldsSpinner:"LoginPage_ldsSpinner__2p8_G"}},function(e,n,t){e.exports={channelsListContainer:"ChannelsList_channelsListContainer__SHC4k",channelsListH2:"ChannelsList_channelsListH2__wtCzY",channelsHeaderContainer:"ChannelsList_channelsHeaderContainer__2MOoS",dropArrowIcon:"ChannelsList_dropArrowIcon__ArV_x",channelsListH3:"ChannelsList_channelsListH3__3pNPE",channelsVisible:"ChannelsList_channelsVisible__7HoA5",plusIcon:"ChannelsList_plusIcon__JzjqP",channelsNotVissible:"ChannelsList_channelsNotVissible__2UtBu",channelContainer:"ChannelsList_channelContainer__1-gMx",channelsListTitle:"ChannelsList_channelsListTitle__1frVH",deleteIconContainer:"ChannelsList_deleteIconContainer__3NVkB",deleteIcon:"ChannelsList_deleteIcon__eTEuf",currentChannel:"ChannelsList_currentChannel___AsMW"}},function(e,n,t){e.exports={outerPopup:"Popup_outerPopup__3bXTg",innerPopup:"Popup_innerPopup__116eR",popupContent:"Popup_popupContent__XL6Mb",popupH3:"Popup_popupH3__27pG6",popupH5:"Popup_popupH5__3xFI9",label:"Popup_label__1iMU2",inputDescription:"Popup_inputDescription__1GAtx",createChannelButton:"Popup_createChannelButton__3OqPv",closeButton:"Popup_closeButton__2_AXP"}},function(e,n,t){e.exports={messagesContainer:"Messages_messagesContainer__2M1as",channelName:"Messages_channelName__2VNKv",displayedMessages:"Messages_displayedMessages__2UGpK",messageContainer:"Messages_messageContainer__-1cTe",avatarContainer:"Messages_avatarContainer__13A3E",userAvatar:"Messages_userAvatar__3qq8e",message:"Messages_message__2EWd4",userName:"Messages_userName__1fWYX",messageInput:"Messages_messageInput__Y3YlG"}},function(e,n,t){e.exports={mainContainer:"MessageInput_mainContainer__2DAJ0",inputContainer:"MessageInput_inputContainer__1jXWz",inputMessage:"MessageInput_inputMessage__3t6hd",sendMessageButton:"MessageInput_sendMessageButton__2ThFT"}},,function(e,n,t){e.exports={container:"MainPage_container__EO7_h",channelsList:"MainPage_channelsList__28co9",messages:"MainPage_messages__3cFq2"}},,,,,,,,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(2),s=t.n(a),c=t(12),i=t.n(c),o=(t(21),t(3)),r="https://open.rocket.chat/api/v1/",l=t(4),u=t.n(l),d=t(13),b=t.n(d),h=t(1);var j=function(e){var n=e.onSuccess,t=Object(a.useState)(""),s=Object(o.a)(t,2),c=s[0],i=s[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),j=d[0],p=d[1],m=Object(a.useState)(""),g=Object(o.a)(m,2),O=g[0],A=g[1],N=Object(a.useState)(""),v=Object(o.a)(N,2),C=v[0],x=v[1],L=function(){A(!0),fetch(r+"login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:c,password:j})}).then((function(e){return e.json()})).then((function(e){A(!1),"success"!==e.status?x("Login failed, try again!"):n(e.data)}))};return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:u.a.container,children:Object(h.jsxs)("div",{className:u.a.content,children:[Object(h.jsx)("div",{className:u.a.imgContainer,children:Object(h.jsx)(b.a,{className:u.a.tilt,options:{max:65,perspective:2e3,scale:1.2},children:Object(h.jsx)("img",{className:u.a.img,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAEhCAYAAADiTRxDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ1NDlGNDlFMjZEMTFFNzhFRUVCREQ3RUYyNzE1RTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ1NDlGNEFFMjZEMTFFNzhFRUVCREQ3RUYyNzE1RTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RDU0OUY0N0UyNkQxMUU3OEVFRUJERDdFRjI3MTVFOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RDU0OUY0OEUyNkQxMUU3OEVFRUJERDdFRjI3MTVFOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtrRntcAAB4LSURBVHja7J0HlJXV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",alt:""})})}),Object(h.jsxs)("div",{className:u.a.memberLogin,children:[Object(h.jsx)("h3",{children:"Member login"}),Object(h.jsxs)("div",{className:u.a.inputContainer,children:[Object(h.jsx)("input",{className:u.a.input,type:"text",placeholder:"email",name:"name",value:c,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("span",{className:u.a.floatingIcon,children:Object(h.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})})]}),Object(h.jsxs)("div",{className:u.a.inputContainer,children:[Object(h.jsx)("input",{className:u.a.input,type:"password",placeholder:"password",name:"password",value:j,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&L()}}),Object(h.jsx)("span",{className:u.a.floatingIcon,children:Object(h.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"})})]}),Object(h.jsx)("button",{className:u.a.button,onClick:function(){L(),x("")},children:"Login"}),Object(h.jsx)("div",{className:u.a.errorContainer,children:C&&Object(h.jsx)("h5",{className:u.a.error,children:C})}),O&&Object(h.jsx)("div",{className:u.a.spinnerContainer,children:Object(h.jsxs)("div",{className:u.a.ldsSpinner,children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})]})]})})})},p=t(10),m=t.n(p),g=t(5),O=t.n(g),A=t(6),N=t.n(A),v=t(14);var C=function(e){e.children;var n=e.visible,t=e.setIsAddChannelPopupVisible,a=e.setNewChannelName,s=e.newChannelName,c=e.createChannel;return n?Object(h.jsx)("div",{className:N.a.outerPopup,children:Object(h.jsxs)("div",{className:N.a.innerPopup,children:[Object(h.jsxs)("div",{className:N.a.popupContent,children:[Object(h.jsx)("h3",{className:N.a.popupH3,children:"Create a channel"}),Object(h.jsx)("h5",{className:N.a.popupH5,children:"Channels are where your team communicates. They\u2019re best when organized around a topic \u2014 #marketing, for example."}),Object(h.jsx)("label",{className:N.a.label,htmlFor:"channelName",children:"Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"channelName",value:s,onChange:function(e){a(e.target.value)}}),Object(h.jsxs)("label",{className:N.a.label,htmlFor:"description",children:[Object(h.jsx)("span",{className:N.a.inputDescription,children:"Description"})," ","(optional)"]}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"description"}),Object(h.jsx)("p",{children:"What's is this channel about?"}),Object(h.jsx)("button",{className:N.a.createChannelButton,onClick:function(){c(),t(),a("")},children:"Create"})]}),Object(h.jsx)("button",{className:N.a.closeButton,onClick:function(){t(!1),a("")},children:Object(h.jsx)(v.a,{})})]})}):""},x=t(15),L=t(16),V=t(9);var P=function(e){var n=e.token,t=e.userId,s=e.setCurrentChannelId,c=e.currentChannelId,i=e.name,l=e.setCurrentChannelName,u=Object(a.useState)(""),d=Object(o.a)(u,2),b=d[0],j=d[1],p=Object(a.useState)(!1),m=Object(o.a)(p,2),g=m[0],A=m[1],N=Object(a.useState)([]),v=Object(o.a)(N,2),P=v[0],w=v[1],f=Object(a.useState)(!1),M=Object(o.a)(f,2),Y=M[0],W=M[1],B=function(){fetch(r+"channels.list.joined",{method:"GET",headers:{"X-Auth-Token":n,"X-User-Id":t}}).then((function(e){return e.json()})).then((function(e){return w(e.channels)}))};return Object(a.useEffect)((function(){B()}),[]),Object(h.jsxs)("div",{className:O.a.channelsListContainer,children:[Object(h.jsx)("h2",{className:O.a.channelsListH2,children:i}),Object(h.jsxs)("div",{className:O.a.channelsHeaderContainer,onClick:function(){W(!Y)},children:[Object(h.jsx)(x.a,{className:"".concat(O.a.dropArrowIcon," ").concat(Y?O.a.channelsVisible:O.a.channelsNotVissible)}),Object(h.jsx)("h3",{className:O.a.channelsListH3,children:"Channels "}),Object(h.jsx)(L.a,{className:O.a.plusIcon,onClick:function(e){A(!0),e.stopPropagation()}})]}),Y?P.map((function(e){return Object(h.jsxs)("div",{className:"".concat(O.a.channelContainer," ").concat(e._id===c?O.a.currentChannel:""),children:[Object(h.jsxs)("h4",{className:"".concat(O.a.channelsListTitle," \n                  }"),onClick:function(){s(e._id),l(e.name)},children:["# ",e.name]},e._id),Object(h.jsx)("span",{className:"".concat(O.a.deleteIconContainer," ").concat(e._id===c?O.a.currentChannel:""),onClick:function(a){var s;console.log(e),a.stopPropagation(),s=e._id,fetch(r+"channels.delete",{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":n,"X-User-Id":t},body:JSON.stringify({roomId:s})}).then((function(e){return B()}))},children:Object(h.jsx)(V.a,{className:O.a.deleteIcon})})]},e._id)})):"",Object(h.jsx)(C,{visible:g,setIsAddChannelPopupVisible:A,setNewChannelName:j,newChannelName:b,createChannel:function(){fetch("https://open.rocket.chat/api/v1/channels.create",{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":n,"X-User-Id":t},body:JSON.stringify({name:b})}).then((function(e){return B()}))}})]})},w=t(8),f=t.n(w);var M=function(e){var n=e.token,t=e.currentChannelId,s=e.userId,c=e.updateMessages,i=(e.setMessages,e.currentChannelName),l=Object(a.useState)(""),u=Object(o.a)(l,2),d=u[0],b=u[1];return Object(h.jsx)("div",{className:f.a.mainContainer,children:Object(h.jsxs)("div",{className:f.a.inputContainer,children:[Object(h.jsx)("input",{type:"text",value:d,placeholder:"Send a message to ".concat(i),onChange:function(e){b(e.target.value)},className:f.a.inputMessage}),Object(h.jsx)("button",{className:f.a.sendMessageButton,onClick:function(){fetch(r+"chat.sendMessage",{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":n,"X-User-Id":s},body:JSON.stringify({message:{msg:d,rid:t}})}).then((function(e){return c()})),b("")},children:Object(h.jsx)(V.b,{})})]})})},Y=t(7),W=t.n(Y);var B=function(e){var n=e.token,t=e.currentChannelId,s=e.userId,c=e.currentChannelName,i=Object(a.useState)([]),l=Object(o.a)(i,2),u=l[0],d=l[1],b=function(){fetch(r+"channels.messages?roomId="+t,{method:"GET",headers:{"Content-Type":"application/json","X-Auth-Token":n,"X-User-Id":s}}).then((function(e){return e.json()})).then((function(e){d(e.messages.reverse())}))};return Object(a.useEffect)((function(){console.log(t,n,s),b()}),[t,n,s]),Object(h.jsxs)("div",{className:W.a.messagesContainer,children:[Object(h.jsx)("div",{className:W.a.channelName,children:c}),Object(h.jsx)("div",{className:W.a.displayedMessages,children:u.map((function(e){return Object(h.jsxs)("div",{className:W.a.messageContainer,children:[console.log(e),Object(h.jsx)("div",{className:W.a.avatarContainer,children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAYFBMVEUdHB34+PjBwcHd3d05Nznr6+tUU1Rvbm+mpqaKiorc3NxGRkaYmJgqKiorKStvb284ODgrKitiYWKzs7Pq6uphYWHPz88qKSpHRUd9fH2lpaV9fX1GRUaLiot8fHyYl5h1CC6SAAAA3ElEQVR4Xu3VuXLEIBAE0GludO69vv3/f+lEgbSDWxB5A794upqipEGe1r/p9dwBnYlOqmSPhc2yzxms3HZLnMWGvQuX8MAIFaEEYSzQVPECtFW8o+CLBN5QkP40kFGQSSC03tLRQ7HCZCifwhytKhiF6j02fC87Tl7Pc4fVqcxBakSzjAepNYZT7Ed5DlMczl23XNHNDFfHN5iB8vs+c8mjLJUiU1bj9BP/sKDsQ8nsweEyb+ZRYZW4okrQC5i7OL2AOUP+fHYoAzRVODS46yeBiyIyoMG33qdckh/ibAh/sITIgAAAAABJRU5ErkJggg==",alt:"",className:W.a.userAvatar})}),Object(h.jsxs)("div",{className:W.a.message,children:[Object(h.jsx)("p",{className:W.a.userName,children:e.u.username})," ",Object(h.jsx)("br",{})," ",e.msg]})]},e._id)}))}),Object(h.jsx)("div",{className:W.a.messageInput,children:Object(h.jsx)(M,{token:n,currentChannelId:t,userId:s,updateMessages:b,setMessages:d,currentChannelName:c})})]})};var Z=function(e){var n=e.token,t=e.userId,s=e.name,c=Object(a.useState)(""),i=Object(o.a)(c,2),r=i[0],l=i[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),b=d[0],j=d[1];return Object(h.jsxs)("div",{className:m.a.container,children:[Object(h.jsx)("div",{className:m.a.channelsList,children:Object(h.jsx)(P,{token:n,userId:t,name:s,setCurrentChannelId:l,currentChannelId:r,setCurrentChannelName:j})}),Object(h.jsx)("div",{className:m.a.messages,children:r&&Object(h.jsx)(B,{token:n,currentChannelId:r,userId:t,currentChannelName:b})})]})};t(23);var U=function(){var e=Object(a.useState)(""),n=Object(o.a)(e,2),t=n[0],s=n[1];return t?Object(h.jsx)("div",{children:Object(h.jsx)(Z,{token:t.authToken,userId:t.userId,name:t.me.name})}):Object(h.jsx)(j,{onSuccess:s})};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.4293e4d0.chunk.js.map