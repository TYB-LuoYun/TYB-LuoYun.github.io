import{_ as a,o as e,c as h,a as r}from"./app-c59649c1.js";const d={},i=r('<h1 id="八股文" tabindex="-1"><a class="header-anchor" href="#八股文" aria-hidden="true">#</a> 八股文</h1><h2 id="二叉查找树-二叉搜索树-bst" tabindex="-1"><a class="header-anchor" href="#二叉查找树-二叉搜索树-bst" aria-hidden="true">#</a> 二叉查找树(二叉搜索树，BST)</h2><p>对于二叉查找树中的任意一个节点，其左子树中每个节点的值都要小于这个节点的值，而右子树中每个节点的值都要大于这个节点的值 查询性能: 不管操作是插入、删除还是查找，时间复杂度其实都跟树的高度成正比</p><h2 id="平衡二叉查找树" tabindex="-1"><a class="header-anchor" href="#平衡二叉查找树" aria-hidden="true">#</a> 平衡二叉查找树</h2><p>在频繁的动态更新过程中，可能会出现树的高度远大于log n的情况，从而导致各个操作的效率下降。为了避免时间复杂度的退化，针对二叉查找树，引出了一种更加复杂的树，平衡二叉查找树，时间复杂度可以做到稳定的O(logn)</p><h3 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h3><p>红黑树是平衡二叉树的一种，红黑树中的节点，一类被标记为黑色，一类被标记为红色 红黑树降低了对旋转的要求，在插入时避免了大量的旋转，提高了插入,删除的操作性能 能避免极端情况下时间复杂度的退化，查询性能稳定</p><h2 id="b树-平衡多路查找树" tabindex="-1"><a class="header-anchor" href="#b树-平衡多路查找树" aria-hidden="true">#</a> B树 - 平衡多路查找树</h2><p>B树多用于做文件系统的索引。 B树和二叉树、红黑树相比较，子树更多也就是路数越多，子树越多表示树的高度越低，搜索效率越高 文件系统和数据库一般都是存在电脑硬盘上的，如果数据量太大的话不一定能一次性加载到内存中，但是B树可以多路存储。也正因为B树的这一个优点，可以在文件查找的时候每次只加载一个节点的内容存入内存来查找 而红黑树在内存中查找非常块，但是如果在数据库和文件系统中，显然B树更优</p><h2 id="b-树" tabindex="-1"><a class="header-anchor" href="#b-树" aria-hidden="true">#</a> B+树</h2><p>B+树是B树的变种，有着比B树更高的查询效率。 B+树是在B树的基础上进行改造的，他的数据都在叶子节点，同时叶子节点之间还加了指针形成链表。 B+树多用于数据库中的索引。</p>',11),t=[i];function n(s,c){return e(),h("div",null,t)}const l=a(d,[["render",n],["__file","shujujiegou.html.vue"]]);export{l as default};
