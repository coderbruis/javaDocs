(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{441:function(e,t,n){"use strict";n.r(t);var a=n(2),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("问题：")]),e._v(" "),n("ol",[n("li",[e._v("Netty是在哪里检车有新连接接入的？")]),e._v(" "),n("li",[e._v("新连接是怎样注册到NioEventLoop线程的？")])]),e._v(" "),n("h2",{attrs:{id:"_1-netty新连接接入处理逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-netty新连接接入处理逻辑"}},[e._v("#")]),e._v(" 1. Netty新连接接入处理逻辑")]),e._v(" "),n("p",[e._v("主要步骤")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("检测新连接")]),e._v(" "),n("p",[e._v("新连接通过服务端channel绑定的selector轮训出accept事件，从而检测出新连接")])]),e._v(" "),n("li",[n("p",[e._v("创建NioSocketChannel")]),e._v(" "),n("p",[e._v("基于JDK的NioChannel创建出NioSocketChannel，也就是客户端channel")])]),e._v(" "),n("li",[n("p",[e._v("分配线程及注册selector")]),e._v(" "),n("p",[e._v("接着Netty给客户端分配一个NioEventLoop，并且把这条客户端channel注册在NioEventLoop对应的selector上，后面这个客户端的channel的读写事件都由这个NioEventLoop来管理")])]),e._v(" "),n("li",[n("p",[e._v("向selector注册读事件")]),e._v(" "),n("p",[e._v("最后向这个channel对应的selector注册读事件（注册过程和服务端channel注册accept事件是同等逻辑）")])])]),e._v(" "),n("h2",{attrs:{id:"_2-检测新连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-检测新连接"}},[e._v("#")]),e._v(" 2. 检测新连接")]),e._v(" "),n("ol",[n("li",[e._v("processSelectedKey(key, channel) 入口")]),e._v(" "),n("li",[e._v("NioMessageUnsafe.read()")]),e._v(" "),n("li",[e._v("doReadMessages() (while循环)")]),e._v(" "),n("li",[e._v("javaChannel().accept()")])]),e._v(" "),n("p",[e._v("先启动服务端程序，然后断点打在NioEventLoop的processSelectedKey方法上。")]),e._v(" "),n("p",[e._v("通过命令：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("telnet 127.0.0.1 8888\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("模仿Netty客户端链接")])])}),[],!1,null,null,null);t.default=l.exports}}]);