(function () {
    var $=document.querySelectorAll.bind(document);
    function set(y){localStorage.setItem("docsShowJSOnly",y||"")}
    function tgl(l,c,v){l.forEach(function(it){it[(v?"set":"remove")+"Attribute"]("aria-selected","aria-selected")}),$(c).forEach(function(it){it.style.display=v?"":"none"})}
    function tsOnly(){return set(0),tgl(a,".ts-only",1),tgl(b,".js-only",0),false}
    function jsOnly(){return set(1),tgl(b,".js-only",1),tgl(a,".ts-only",0),false}
    var a=$(".TSJSSwitch>:first-child"),b=$(".TSJSSwitch>:last-child");
    a.forEach(function(it){it.onclick=tsOnly});
    b.forEach(function(it){it.onclick=jsOnly});
    localStorage.getItem("docsShowJSOnly")?jsOnly():tsOnly();
    $(".sidebar_nav h4").forEach(function(it){it.onclick=function(){this.className=this.className?"":"closed"}})
    window.backToTop=function(){window.scrollTo(0,0);$(".fixed_cell_inner").forEach(function(it){it.scrollTo(0,0)});return false}
})();