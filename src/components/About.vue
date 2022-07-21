<template >
  <section id="about">
      <div class="container-about text-white" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-5 col-md-5 ml-2">
            <div
              class="portfolio-image d-flex justify-content-end"
              data-aos="fade-right"
              style=""
            >
              <img
                class="ms-4 rounded mt-2"
                src="./images/Live (1) (2)-min.JPG"
                alt=""
                style="width: 267px"
                id="port-img"
              />
            </div>
          </div>
          <div
            class="col-md-6 col-md-offset-1 col-lg-6 col-lg-offset-1"
            data-aos="fade-left"
          >
            <div class="about-details pt-115">
              <div class="section-title">
                <h2>About Me</h2>
              </div>
              <div class="body">
                <div class="section-fluid-main">
                  <div class="section-row">
                    <div class="section-col">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not
                        <a href="#" class="hover-target img-1"
                          >simply random text</a
                        >. It has roots in a piece of classical
                        <a href="#" class="hover-target img-2"
                          >Latin literature</a
                        >
                        from 45 BC, making it over 2000 years old. Richard
                        McClintock, a Latin professor at Hampden-Sydney College
                        in <a href="#" class="hover-target img-3">Virginia</a>,
                        looked up one of the more obscure
                        <a href="#" class="hover-target img-4">Latin words</a>,
                        consectetur, from a Lorem Ipsum passage.
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://front.codes/"
                    class="hover-target logo"
                    target="_blank"
                  >
                    <img src="" alt="" />
                  </a>
                  <div class="cursor" id="cursor"></div>
                  <div class="cursor2" id="cursor2"></div>
                  <div class="cursor3" id="cursor3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--END ABOUT SECTION-->
</template>
<script>
export default {
    
}
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
:root {
  --blue: #102770;
  --white: #ffffff;
  --yellow: #ffeba7;
  --purple: #9b59b6;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
::selection {
  color: var(--yellow);
  background-color: var(--blue);
}
::-moz-selection {
  color: var(--yellow);
  background-color: var(--blue);
}
.body{
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
p{
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.7;
  color: var(--blue);
  margin: 0;
}
.section-fluid-main{
  position: relative;
  display: block;
  width: calc(100% - 40px);
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1050px;
  padding-top: 50px;
  padding-bottom: 90px;
  -ms-flex-item-align: center;
  align-self: center;
  z-index: 3;
}
.section-row{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  -ms-flex-pack: center;
  justify-content: center;
}
.section-col{
  position: relative;
  width: 100%;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 15px;
}


/* #Cursor
================================================== */
.cursor,
.cursor2,
.cursor3{
  position: fixed;
  border-radius: 50%; 
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  z-index: 4;
}
.cursor{
  background-color: var(--blue);
  height: 0;
  width: 0;
}
.cursor2,.cursor3{
  height: 50px;
  width: 50px;
  transition: all 200ms ease-out;
  background-position: center;
  background-size: 0 0;
}
.cursor2.hover,
.cursor3.hover{
  height: 220px;
  width: 320px;
  border:none;
  border-radius: 8px;
}
.cursor2{
  border: 2px solid var(--blue);
  box-shadow: 0 0 12px rgba(16, 39, 112, 0.2);
}
.cursor2.hover{
  background-size: cover;
  box-shadow: 0 0 0 rgba(16, 39, 112, 0.2);
}
.body.img-1-wrap .cursor2,.cursor3{
  background-image: url('https://assets.codepen.io/1462889/sl1.jpg');
}
.body.img-2-wrap .cursor2,.cursor3{
  background-image: url('https://assets.codepen.io/1462889/sl2.jpg');
}
.body.img-3-wrap .cursor2,.cursor3{
  background-image: url('https://assets.codepen.io/1462889/sl3.jpg');
}
.body.img-4-wrap .cursor2,.cursor3{
  background-image: url('https://assets.codepen.io/1462889/sl4.jpg');
}
.body.logo-wrap .cursor2,.cursor3{
  background-image: none;
  height: 36px;
  width: 36px;
}
.body.logo-wrap .cursor2.hover,
.body.logo-wrap .cursor3.hover{
  height: 36px;
  width: 36px;
  transform: scale(2) translateX(-25%) translateY(-25%);
  border-radius: 50%;
  background-color: var(--yellow);
}


.hover-target{
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: var(--purple);
  transition: color 250ms ease;
}
.hover-target:before{
  position: absolute;
  content: '';
  height: 0;
  border-radius: 1px;
  bottom: 0;
  left: -10px;
  width: calc(100% + 20px);
  border-radius: 2px;
  display: block;
  background-color: var(--yellow);
  transition: height 250ms ease;
  mix-blend-mode: difference;
  opacity: 0.6;
}
.hover-target:hover:before{
  height: 100%;
}
.hover-target:hover{
  z-index: 5;
  color: var(--yellow);
}

.logo {
	position: fixed;
	top: 25px;
	left: 25px;
	display: block;
	z-index: 1000;
}
.logo img {
	height: 26px;
	width: auto;
	display: block;
}
.logo:before {
  display: none;
}
#about {
  position: relative;
  background-image: url(./images/pexels-rafael-guajardo-604684-min.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: fit;
  padding-top: 110px;
  padding: ;
}
.container-about {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  background: rgb(2, 0, 36);
}
.about-title {
  text-align: center;
  padding-bottom: 30px;
}
.about-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}
</style>