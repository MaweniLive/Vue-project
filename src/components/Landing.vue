<template>
    <section>
        <img src="../assets/Clouds.jpg" id="bg"> 
        <img src="../assets/Sun-removebg-preview.png" id="sun">
        <img src="../assets/Table mountain 3.jpg" id="mountain">
        <img src="../assets/Road.jfif" id="road">
        <h2 id="text">Scroll Through My Journey</h2>
    </section>
</template>
<script>
export default {
    
}
let bg = document.getElementById("bg");
let sun = document.getElementById("sun");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value *0,5+ 'px';
    sun.style.left = -value *0,5+ 'px';
    mountain.style.top = -value *0,15+ 'px';
    road.style.top = value *0,15+ 'px';
    text.style.top = value *1+ 'px';
});
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background: #0a2a43;
        min-height: 1500px;
    }
    section{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(to top, #0a2a43, transparent);
        z-index: 10000;
    }
    section:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: #0a2a43;
        z-index: 10000;
        mix-blend-mode: color;
    }
    section img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }
    #text{
        position: relative;
        color: #fff;
        font-size: 10em;
        z-index: 1;
}
</style>