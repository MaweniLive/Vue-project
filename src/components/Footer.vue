<template>
     <section id="footer" class="footer-section">
         <footer class="footer-area dark-bg text-white">
          <div class="container">
            <div class="row">
              <div class="footer-social social-bookmark text-center">
                <ul class="footer-list d-flex justify-content-center ">
                  <li><i class="fa-brands fa-instagram mx-2"></i></li>
                  <li><i class="fa-brands fa-github mx-2"></i></li>
                  <li><i class="fa-brands fa-linkedin mx-2"></i></li>
                  <li><i class="fa-brands fa-twitter mx-2"></i></li>
                </ul>
              </div>
              <div class="copyright text-center">
                <p>
                  Copyright@2022
                  <a href="#"></a>all rights reserved,designed by 
                  <a href="#">L.J Maweni</a>
                </p>
              </div>
            </div>
          </div>
         </footer>
         </section>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
    #footer {
  height: fit-content;
  position: relative;
  background-image: url(./images/pexels-rafael-guajardo-604684-min.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  object-fit: cover;
}
ul {
  list-style-type: none;
}
</style>