"use strict";

var $ = (id)=> {
    return document.getElementById(id);

}

var run_menu = ()=>{
    document.querySelector('html').classList.toggle('open');

}


window.onload =()=>{
    $("run").onclick = run_menu;
    
}