(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{424:function(_,v,n){"use strict";n.r(v);var t=n(2),o=Object(t.a)({},(function(){var _=this,v=_.$createElement,n=_._self._c||v;return n("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[n("blockquote",[n("p",[_._v("只有学习底层原理才能变得更强")])]),_._v(" "),n("h2",{attrs:{id:"_1-innodb页结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-innodb页结构"}},[_._v("#")]),_._v(" 1. InnoDB页结构")]),_._v(" "),n("p",[_._v("InnoDB是用于将表中的数据存储到磁盘上的一款存储引擎。")]),_._v(" "),n("blockquote",[n("p",[_._v("更大维度了解MySQL内部组成结构")])]),_._v(" "),n("p",[_._v("MySQL其实就是一款软件，可以分为客户端、服务器端以及引擎层。服务器端分为了一下几部分:")]),_._v(" "),n("blockquote",[n("p",[_._v("服务端组成结构")])]),_._v(" "),n("ol",[n("li",[n("p",[_._v("连接器")]),_._v(" "),n("p",[_._v("连接器用于客户端和服务端进行连接、用户权限校验以及拦截。")])]),_._v(" "),n("li",[n("p",[_._v("缓存")]),_._v(" "),n("p",[_._v("客户端连接服务端成功后，即可去查询数据。但是MySQL中首先会去查询缓存，如果缓存中查询出了结果，则直接返回缓存的查询结果。否则往下执行。但是缓存在MySQL中比较的鸡肋，因为其缓存命中率非常低，\n对于一些静态表以及读多不怎么写的表才适合缓存。在MYSQL8.0移除了缓存功能。")])]),_._v(" "),n("li",[n("p",[_._v("词法分析器")]),_._v(" "),n("p",[_._v("词法分析器用于去分析SQL语句是否合法以及去识别SQL语句的关键字等。")])]),_._v(" "),n("li",[n("p",[_._v("优化器")]),_._v(" "),n("p",[_._v("优化器决定了在表里面有多个索引的时候决定使用哪一个；还有在范围查找的时候是否要使用索引还是不去回表直接全表扫描更快都是优化器所做的。")])]),_._v(" "),n("li",[n("p",[_._v("执行器")]),_._v(" "),n("p",[_._v("调用引擎结构，获取查询结果集。")])])]),_._v(" "),n("blockquote",[n("p",[_._v("引擎层")])]),_._v(" "),n("p",[_._v("对于MySQL引擎包含了InnoDB，MyISAM，Memory等引擎，而MySQL默认使用的是InnoDB引擎。")]),_._v(" "),n("p",[_._v("具体更深入的就不去了解了。下面用一张图来展示MySQL内部组成结构。")]),_._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901215443317.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NvZGVyQnJ1aXM=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),n("p",[_._v("回到InnoDB页的简介，来看下InnoDB页结构以及原理。")]),_._v(" "),n("p",[_._v("在MySQL底层，需要通过InnoDB引擎将数据从磁盘中读取到内存中，或者是将内存中的数据持久化到磁盘中，那么在InnoDB中，规定是："),n("strong",[_._v("将数据分为若干个页，然后以页为单位作为磁盘和内存交互的单位。在InnoDB中一个页单位大小一般为16KB。")])]),_._v(" "),n("p",[_._v("需要额外提出的地方：")]),_._v(" "),n("blockquote",[n("p",[_._v("一个页一般是16KB，当记录中的数据太多，当前页放不下的时候，会把多余的数据存储到其他页中，这种现象称为行溢出。")])]),_._v(" "),n("h2",{attrs:{id:"_2-innodb行格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-innodb行格式"}},[_._v("#")]),_._v(" 2. InnoDB行格式")]),_._v(" "),n("p",[_._v("InnoDB将以16KB大小的页来作为内存和磁盘的交互基本单位，那么MySQL中的数据存储到磁盘中，又是以什么格式存储呢？在InnoDB中，设计者设计出了MySQL数据存储在磁盘的格式，也被称为："),n("strong",[_._v("行格式")])]),_._v(" "),n("p",[_._v("在InnoDB中有4中行格式：")]),_._v(" "),n("ol",[n("li",[_._v("Compact行格式")]),_._v(" "),n("li",[_._v("Redundant行格式")]),_._v(" "),n("li",[_._v("Dynamic行格式")]),_._v(" "),n("li",[_._v("Compressed行格式")])]),_._v(" "),n("p",[_._v("每个行格式都分为两部分：记录的额外信息、记录的真实信息。")]),_._v(" "),n("blockquote",[n("p",[_._v("记录的额外信息")])]),_._v(" "),n("p",[_._v("在Compact行格式中，记录的额外信息包括了：变长字段长度列表、NULL值列表、记录头信息等信息，然后其他行格式也是差不多的，有些许区别，可通过查资料来确认。")]),_._v(" "),n("blockquote",[n("p",[_._v("记录的真实信息")])]),_._v(" "),n("p",[_._v("这个部分就是存储MySQL数据的真实的地方了。")]),_._v(" "),n("h2",{attrs:{id:"_3-innodb数据页结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-innodb数据页结构"}},[_._v("#")]),_._v(" 3. InnoDB数据页结构")]),_._v(" "),n("p",[_._v("都知道了InnoDB中是以页作为内存和磁盘交互的基本单位，一个页的大小一般为16KB。在InnoDB中为了不同的目的而设计了许多不同类型的页，下面简单列出了几项：")]),_._v(" "),n("ul",[n("li",[_._v("存放表头空间头部信息的页")]),_._v(" "),n("li",[_._v("存放Insert Buffer信息的页")]),_._v(" "),n("li",[_._v("存放INODE信息的页")]),_._v(" "),n("li",[_._v("存放undo日志信息的页")])]),_._v(" "),n("p",[_._v("我们详细介绍下存放数据的页，官方称作为：索引（INDEX）页。")]),_._v(" "),n("p",[_._v("下面看下索引页，也成为数据页（下文统一称呼为数据页）。")]),_._v(" "),n("blockquote",[n("p",[_._v("在InnoDB数据页结构中，被划分为了7个部分")])]),_._v(" "),n("p",[_._v("详细看"),n("a",{attrs:{href:"https://juejin.im/book/6844733769996304392/section/6844733770046636046",target:"_blank",rel:"noopener noreferrer"}},[_._v("MySQL 是怎样运行的：从根儿上理解 MySQL"),n("OutboundLink")],1)]),_._v(" "),n("p",[_._v("最重要的就是：")]),_._v(" "),n("ul",[n("li",[_._v("用户记录（User Records）")]),_._v(" "),n("li",[_._v("页面目录（Page Directory）")]),_._v(" "),n("li",[_._v("页面头部（File Header）")]),_._v(" "),n("li",[_._v("空闲空间（Free Space）")])]),_._v(" "),n("p",[_._v("通常，MySQL真实数据是存储在用户记录部分的。但是在一开始生成页的时候，是不存在用户记录部分的，每当插入一条记录时，都会从Free Space分配部分空间给User Records，待Free Space空间分配完了，也就意味着\n当前页使用完了，数据以及填充满了，如果还有新的记录插入的话，就需要去申请新的页了，这就是页分裂过程。")]),_._v(" "),n("blockquote",[n("p",[_._v("在InnoDB页中的用户记录部分")])]),_._v(" "),n("p",[_._v("在用户记录部分中，当存有用户数据记录时，都会规定两个伪记录：最小记录（Infimum）和最大记录（supremum），而其他记录都存在最大记录和最小记录中间，通过一个next_record来连接起来的一个：单链表。")]),_._v(" "),n("p",[_._v("不管怎么对页中的记录做CRUD，InnoDB都会维护一条记录的单链表，链表中的各个节点是按照主键值小到大的顺序连接起来。注意是从主键开始从大到小！！！")]),_._v(" "),n("p",[_._v("总结一下：InnoDB用户记录中，每个记录的头信息都会有一个next_record属性来使得页中所有记录串联成一个单链表。")]),_._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901220709556.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NvZGVyQnJ1aXM=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),n("blockquote",[n("p",[_._v("InnoDB的页目录（Page Directory）")])]),_._v(" "),n("p",[_._v("在InnoDB中，会把页中的记录划分为若干个组，每个组中最后一条记录的偏移量作为一个槽，然后把这个槽存放在页目录中。因此InnoDB在页中通过查询页目录来查询数据是非常快的，具体可以分为两步：")]),_._v(" "),n("ol",[n("li",[_._v("通过二分法确定该记录所在的槽")]),_._v(" "),n("li",[_._v("通过记录的next_record属性遍历该槽所在的组中的各个记录")])]),_._v(" "),n("p",[_._v("需要额外注意的！！ 页目录是为主键列创建的！！非主键列是不存在页目录的！！")]),_._v(" "),n("blockquote",[n("p",[_._v("InnoDB的页面头部（File Header）")])]),_._v(" "),n("p",[_._v("在InnoDB中，每个页面头部都会存放上一页和下一页的编号用于连接上一个数据页（索引页）和下一个数据页（索引页）。")]),_._v(" "),n("p",[_._v("对于InnoDB数据页，总结一下：")]),_._v(" "),n("p",[_._v('在InnoDB中，各个数据页可以组成一个双向链表，每个数据页中的记录头部有一个next_record来根据主键值从小到大的顺序组成一个单向链表。每个数据页都会为存储到它边上的记录生成一个"页目录"，然后通过主键查找某条记录的时候，\n可以在页目录中使用二分法快速定位到对应的槽，然后再遍历槽对应分组中的记录即可快速找到指定的记录。')]),_._v(" "),n("h2",{attrs:{id:"_4-b-树索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-b-树索引"}},[_._v("#")]),_._v(" 4. B+树索引")]),_._v(" "),n("p",[_._v("学过MySQL的开发者都知道，根据索引来查找数据查询效率会非常高，查询速度也会非常快。下面来看看没有走索引的条件，底层是个什么原理。")]),_._v(" "),n("p",[_._v("首先对于查询可以分为两种类型：以主键为搜索条件、以其他列作为搜索条件")]),_._v(" "),n("blockquote",[n("p",[_._v("以主键作为搜索条件")])]),_._v(" "),n("p",[_._v("对于以主键来搜索条件，在单数据也中，首先是可以在页目录中通过二分查找快速定位到对应的槽，然后遍历槽中分组中的用户记录即可快速查找到记录。")]),_._v(" "),n("blockquote",[n("p",[_._v("以其他列作为搜索条件")])]),_._v(" "),n("p",[_._v("对于其他列就没那么幸运了，由于非主键列是没有页目录这一项的，所以就无法通过二分法来快速定位到具体的槽。只能从页中的最小记录开始遍历页中的单链表来查询每条记录。")]),_._v(" "),n("p",[_._v("然而！！MySQL中用户记录是非常多的，真实线上的数据页也不可能为一个，而是非常多的数据页，所以对于按主键查找或者是非主键查找数据，都无法绕开要先确定数据在哪个页记录上。在多数据页查找的过程可以分为如下几步：")]),_._v(" "),n("ol",[n("li",[_._v("在多个数据页中确定记录所在的页")]),_._v(" "),n("li",[_._v("根据是主键还是非主键的条件来查找对应的记录")])]),_._v(" "),n("p",[_._v("在没有索引的情况下，无论条件是根据主键列还是非主键列来查找数据，都需要从头开始遍历由双向链表连接的数据页，然后在进入数据页中去具体的记录（如果是主键列，则可以对通过二分法来确定记录在哪个槽范围，然后再到槽中去遍历记录组的记录），然而非主键列就更惨了，上层遍历了双向链表的数据页，下层还有继续去遍历单链表连接的记录！！！实在是苦逼！！")]),_._v(" "),n("p",[_._v("可想而知，没有索引时，在数据量巨大的情况下，查找效率是多么的低下。")]),_._v(" "),n("h3",{attrs:{id:"_4-1-innodb中b-树索引原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-innodb中b-树索引原理"}},[_._v("#")]),_._v(" 4.1 InnoDB中B+树索引原理")]),_._v(" "),n("blockquote",[n("p",[_._v("因此在InnoDB中，提供了索引用于快速查询数据。那么在InnoDB底层中索引是如何运行的呢？什么是索引呢？")])]),_._v(" "),n("p",[_._v("在InnoDB中，会将B+树叶子节点中一个页记录链表头对应的最小主键值记录在一个目录项中，一条"),n("strong",[_._v("目录项")]),_._v("包含了最小主键值以及该主键值对应的页数，而在B+树叶子节点中会存有多个数据页，并且是作为双向链表连接起来的数据页。")]),_._v(" "),n("p",[_._v("当目录项一多，则InnoDB会为其分配一个用于存储目录项的"),n("strong",[_._v("页")]),_._v("，在前面已经说到，在InnoDB中页是MySQL内存和磁盘交互的基本单位，且页分为了很多类型，而在InnoDB中通过record_type来区分页类型。")]),_._v(" "),n("ul",[n("li",[_._v("0：普通的用户记录")]),_._v(" "),n("li",[_._v("1：目录项记录")]),_._v(" "),n("li",[_._v("2：最小记录")]),_._v(" "),n("li",[_._v("3：最大记录")])]),_._v(" "),n("p",[_._v("所以用于存储数据页的页record_type类型为0，而用于存储目录项的页类型为1。这点需要大家记住！")]),_._v(" "),n("p",[_._v("先看下图目录项和叶子节点的数据页的关系：")]),_._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901215530519.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NvZGVyQnJ1aXM=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),n("p",[_._v("而将多个目录项存放在一个页中时，B+树结构如下图所示：")]),_._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901215550856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NvZGVyQnJ1aXM=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),n("p",[_._v("并且，如果存放由目录项记录的页也变得过多时，可以再为存有目录项的页们建一个"),n("strong",[_._v("目录")]),_._v(", 这个目录其实和目录项一样存放由两个关键数据：")]),_._v(" "),n("ul",[n("li",[_._v("存放着目录项页中最小的主键值")]),_._v(" "),n("li",[_._v("对应的目录项页的页数")])]),_._v(" "),n("p",[_._v("说起来有点抽象，看下下图就能理解了：")]),_._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901215605902.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NvZGVyQnJ1aXM=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),n("blockquote",[n("p",[_._v("小结：就是这样，在B+树叶子节点中存放着众多的数据页，而叶子节点中数据页与数据页之间是通过双向链表来连通的。数据页中的用户真实记录之间是通过单链表来关联起来的。\nInnoDB为了加快数据查询而建立了一个存储目录项的页，而又继续为存储目录项的页建立了又一个目录项页，依次建立起了InnoDB的索引机制！而B+树就是这样一个层数低，但又节点以及叶子节点\n众多的一棵树。")])]),_._v(" "),n("h3",{attrs:{id:"_4-2-聚镞索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-聚镞索引"}},[_._v("#")]),_._v(" 4.2 聚镞索引")]),_._v(" "),n("p",[_._v("对于聚镞索引有下列两个特点：")]),_._v(" "),n("ol",[n("li",[_._v("在页和记录中，是通过记录的主键值来进行排序的，这包括三个方面的含义：\n"),n("ul",[n("li",[_._v("页内的记录是按照主键的大小顺序排成了一个单向链表")]),_._v(" "),n("li",[_._v("各个存放用户记录的页是根据用户记录中的主键值大小排序成一个双向链表")]),_._v(" "),n("li",[_._v("存放目录项记录的页分为了不同层此，在同一层次中不同目录项页之间也是根据目录项中的主键值大小顺序排列成的一个双向链表")])])]),_._v(" "),n("li",[_._v("B+树的叶子节点存储的是完整的用户记录\n所谓完整的用户记录，就是指这个记录中存储了所有列的值（包括隐藏列）。")])]),_._v(" "),n("p",[_._v("我们把具有这两种特性的B+树称为聚簇索引，所有完整的用户记录都存放在这个聚簇索引的叶子节点处。这种聚簇索引并不需要我们在MySQL语句中显式的使用INDEX语句去创建（后边会介绍索引相关的语句），InnoDB存储引擎会自动的为我们创建聚簇索引。另外有趣的一点是，在InnoDB存储引擎中，聚簇索引就是数据的存储方式（所有的用户记录都存储在了叶子节点），也就是所谓的索引即数据，数据即索引。")]),_._v(" "),n("h3",{attrs:{id:"_4-3-如何正确使用索引呢？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-如何正确使用索引呢？"}},[_._v("#")]),_._v(" 4.3 如何正确使用索引呢？")]),_._v(" "),n("p",[_._v("深入InnoDB索引底层原理后，也要浅出总结下B+树索引适用于哪些情况：")]),_._v(" "),n("ol",[n("li",[_._v("全值匹配：与索引中的所有列进行匹配，也就是条件字段与联合索引的字段个数与顺序相同；")]),_._v(" "),n("li",[_._v("匹配最左前缀：只使用联合索引的前几个字段；")]),_._v(" "),n("li",[_._v("匹配列前缀：比如like 'xx%'可以走索引；")]),_._v(" "),n("li",[_._v("匹配范围值：范围查询，比如>,like等；")]),_._v(" "),n("li",[_._v("匹配某一列并范围匹配另外一列：精确查找+范围查找；")]),_._v(" "),n("li",[_._v("只访问索引查询：索引覆盖，select的字段为主键；")])]),_._v(" "),n("blockquote",[n("p",[_._v("那哪些情况是不走索引的呢？")])]),_._v(" "),n("p",[_._v("那么SQL语句什么情况下是不走索引的呢？")]),_._v(" "),n("ol",[n("li",[_._v("SQL语句中包含了or的不走索引；")]),_._v(" "),n("li",[_._v("SQL语句中模糊查询like使用了前缀'%xx'不走索引；")]),_._v(" "),n("li",[_._v("SQL语句中包含了运算或者函数；")]),_._v(" "),n("li",[_._v("SQL语句中列类型是字符串，那一定要在条件中将数据使用引号引用起来,否则不使用索引；")])]),_._v(" "),n("h3",{attrs:{id:"_4-4-浅谈innodb的二级索引（辅助索引）以及联合索引等概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-浅谈innodb的二级索引（辅助索引）以及联合索引等概念"}},[_._v("#")]),_._v(" 4.4 浅谈InnoDB的二级索引（辅助索引）以及联合索引等概念")]),_._v(" "),n("p",[_._v("在聚镞索引中，叶子节点是存储这用户记录的数据页，用户记录包含了主键，还有其他列值，但是数据页内是按照主键大小顺序排列成一个单链表。在InnoDB中，如果需要将其他非主键列定义为索引，则会定义成辅助索引。")]),_._v(" "),n("p",[_._v("辅助索引定义如下：")]),_._v(" "),n("ol",[n("li",[_._v("辅助索引结构和聚镞索引类似，都是包含着目录项页以及数据页，其中叶子节点就是数据页；")]),_._v(" "),n("li",[_._v("相比于聚镞索引，辅助索引数据页中的用户记录只存储两个值，一个是指定作为索引的列值，另外一个是主键值，数据页中数据是按照这个指定的列值来排列而成的单向链表，同样的数据页之间也是按照数据列值的顺序排列成一个双向链表；")]),_._v(" "),n("li",[_._v("对于查询走辅助索引的情况，是需要回表，这个回表指的是虽然查询走的是辅助索引，但是查询到指定辅助索引数据页记录中的主键值，然后再按照这个主键值去走一遍聚镞索引；")])]),_._v(" "),n("p",[_._v("对于辅助索引的回表操作，是需要消耗性能的，所以查询走辅助索引最终还是要走聚镞索引的。")]),_._v(" "),n("blockquote",[n("p",[_._v("联合索引")])]),_._v(" "),n("p",[_._v("对于联合索引，比如主键是：a，其他列：b、c")]),_._v(" "),n("p",[_._v("此时需要建立联合索引：b、c")]),_._v(" "),n("p",[_._v("其实对于联合索引，和辅助索引底层是相似的，即联合索引数据页中存储的是a、b、c散列数据。")]),_._v(" "),n("h3",{attrs:{id:"_4-5-innodb中的页分裂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-innodb中的页分裂"}},[_._v("#")]),_._v(" 4.5 InnoDB中的页分裂")]),_._v(" "),n("p",[_._v("对于InnoDB底层中，一个页大小为16KB，一个页总有用完的时候，当一个页中内存使用完时，即会发生页分裂操作，即将一个页中装不完的用户数据分到另外一个新开的数据页中，并且下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值。这个过程我们也可以称为页分裂。（注意和文章开头指出的行溢出的区别）")]),_._v(" "),n("p",[_._v("而对于页分裂操作，也是需要消耗性能的，所以在InnoDB的聚镞索引中，建议让主键拥有AUTO_INCREMENT属性，这样可以避免频繁的页分裂操作。")]),_._v(" "),n("p",[n("strong",[_._v("本文中有何描述不准确或者有错误的地方，欢迎指出，互相学习！！！")])]),_._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[_._v("#")]),_._v(" 参考")]),_._v(" "),n("p",[_._v("强烈推荐下面的掘金小册，MySQL底层讲解的非常透彻！！！")]),_._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/book/6844733769996304392/section/6844733770046636046",target:"_blank",rel:"noopener noreferrer"}},[_._v("MySQL是怎样运行的：从根儿上理解 MySQL"),n("OutboundLink")],1)]),_._v(" "),n("li",[_._v("《MySQL技术内幕-InnoDB存储引擎》")])]),_._v(" "),n("blockquote",[n("p",[_._v("本文收录至下列github仓库中："),n("a",{attrs:{href:"https://github.com/coderbruis/Java-T-Shaped",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://github.com/coderbruis/Java-T-Shaped"),n("OutboundLink")],1),_._v("\nJava-T-Shaped旨在记录广而又有深度的Java以及Java相关知识，来提升Java开发人员自身的实力，觉得有帮助的读者star支持下")])]),_._v(" "),n("Boxx",{attrs:{type:"tip",content:"本站使用「CC BY 4.0」创作共享协议，转载请在文章明显位置注明作者及出处。"}})],1)}),[],!1,null,null,null);v.default=o.exports}}]);