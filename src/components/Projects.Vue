<template>
<section id="projects" class="py-5 text-center text-white bg-dark">
  <div class="projects-container" data-aos="fade-up">
    <div class="projects-title">
    <h2>Projects</h2>
    <h4>A beautiful collection of some of the work I done in the past 2 months at Life Choices Bootcamp ,from my frst project to my recent project . <br><strong>Enjoy</strong></br></h4>
    </div>
    <div class="projects-items ">
     <div class="row g-3 d-flex justify-content-end align-items-end ml-3">
       <div class="col-lg-4 " type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModal">
         <img src="./images/Screenshot 2022-05-13 113732.png" alt="" id="img-project">
       </div>
          <!--Modal-->
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">First HTML BUILT WEB SITE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="./images/Screenshot 2022-05-13 113732.png" alt="" class="img-fluid">
      </div>
      <div class="pt-3 pb-4">
        <p>This was my first project when I got to life choices academy bootcamp and you can view the code on Github .</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Github</button>
        <button type="button" class="btn btn-primary">Netlify</button>
      </div>
    </div>
  </div>
</div>
       <div class="col-lg-4 type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModal">
             <img src="./images/Screenshot 2022-05-13 114813.png" alt="" id="img-project">
       </div>
                <!--Modal-->
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Second HTML & CSS Web site</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="./images/Screenshot 2022-05-13 114813.png" alt="" class="img-fluid">
      </div>
      <div class="pt-3 pb-4">
        <p>This was my first project when I got to life choices academy bootcamp and you can view the code on Github .</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Github</button>
        <button type="button" class="btn btn-primary">Netlify</button>
      </div>
    </div>
  </div>
</div>
       <div class="col-lg-4 type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModal">
             <img src="./images/Screenshot 2022-05-13 114726.png" alt="" id="img-project">
       </div>
                <!--Modal-->
       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="./images/Screenshot 2022-05-13 114726.png" alt="" class="img-fluid">
      </div>
      <div class="pt-3 pb-4">
        <p>This was my first project when I got to life choices academy bootcamp and you can view the code on Github .</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Github</button>
        <button type="button" class="btn btn-primary">Netlify</button>
      </div>
    </div>
  </div>
 </div>
 </div>
  </section>
    
</template>
<script>
export default {
  name: 'Projects',
};
</script>
<style scoped>
#projects {
  position: relative;
  background-image: url(./images/pexels-rafael-guajardo-604684-min.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: fit-content;
  padding-top: 110px;
}
.projects-container {
  padding: 5%;
}
.projects-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}
.projects-items {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
}
.projects-items img {
  min-width: 200px;
  flex-grow: 1;
  object-fit: cover;
  max-height: 400px;
}
#img-project {
  width: 350px;
  height: 350px;
}
/*END OF PROJECTS SECTION*/
</style>
