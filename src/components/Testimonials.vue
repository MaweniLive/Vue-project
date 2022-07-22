<template>
         <!--testimonials-->
  <section id="testimonials" class="py-5">
    <div class="container text-center text-white">
      <h2 class="mb-5">Testimonials</h2>
  <div id="testimonialSlider" 
  class="carousel slide" 
  data-bs-ride="carousel"
  >
  <div class="carousel-inner">
    <div class="carousel-item pd-5 text-center active">
      <img src="" 
      class="rounded-circle mb-5"
      width="110px"
      height="130px" 
      alt="Person1">
        <h5></h5>
        <p></p>
    </div>
   <div class="carousel-item">
      <img src="" 
      class="rounded-circle mb-5"
      width="110px"
      height="130px"
      alt="Person2">
        <h5></h5>
        <p></p>
    </div>
    <div class="carousel-item">
      <img src="" 
      class="rounded-circle mb-5"
      width="110px"
      height="130px"
      alt="Person3">
        <h5>Xhanti Mpu</h5>
        <p></p>
    </div>
    <div class="carousel-item">
      <img src="" 
      class="rounded-circle mb-5"
      width="110px"
      height="130px"
      alt="Person3">
        <h5></h5>
        <p></p>
    </div>
    <div class="carousel-item">
      <img src="" 
      class="rounded-circle mb-5"
      width="110px"
      height="130px"
      alt="Person3">
        <h5></h5>
        <p></p>
    </div>
    <div class="carousel-item">
      <img src="" 
      class="rounded-circle mb-5"
      width="110px"
      height="130px"
      alt="Person3">
        <h5></h5>
        <p></p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#testimonialSlider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#testimonialSlider" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
</section>
<!--End of testimonials-->
</template>
<script>
export default {
    name: 'Testimonials'
}
</script>
<style scope>
    #testimonials{
    position: relative;
    background-image: url(../assets/pexels-andre-moura-10100997-min.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}
</style>