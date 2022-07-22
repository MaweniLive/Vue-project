<template>
            <section id="contact" class="contact-section ">
          <div class="container  pb-110 text-white" data-aos="fade-up">
          <div class="about-title">
            <div class="row text-align-center">
              <h2>Wanna start work with me ?</h2>
               <p>CLICK ON THE LINK BELOW</p>
                <form class="d-flex justify-content-center">
        <button class="btn btn-outline-primary text-center"><a href="#form1"></a>Contact Me</button>
      </form>
            </div>
          </div>
          <div class="contact-location " data-aos="fade-up" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.979540205447!2d18.625010515213415!3d-33.993059280622056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4f785cd34b73%3A0x1fb188d74c5a18e6!2s22%20Saint%2C%20Delft%20South%2C%20Cape%20Town%2C%207100!5e0!3m2!1sen!2sza!4v1651733071556!5m2!1sen!2sza" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="row">
            <div class="about-title2 text-align-center">
              <h2>Contact Me</h2>
            </div>
            <form action="https://formspree.io/f/mnqwlzzo" method="post" id="form1">
  <!-- Name input -->
  <div class="form-outline mb-4" data-aos="fade-up">
    <input type="text" id="form4Example1" class="form-control" placeholder="Name" />
    <label class="form-label" >Name</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form4Example2" class="form-control" placeholder="Email address"/>
    <label class="form-label" >Email address</label>
  </div>

  <!--Subject input-->
  <div class="form-outline mb-4">
    <input type="text" id="form4Example3" class="form-control" placeholder="Subject">
    <label class="form-label" >Subject</label>
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example4" rows="4"></textarea>
    <label class="form-label">Message</label>
  </div>

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
    <label class="form-check-label" >
      Send me a copy of this message
    </label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
</form>
          </div>
          </div>
        </section>
</template>
<script>
export default {
    name: 'Contact'
}
</script>
<style>
 #contact {
  position: relative;
  background-image: url();
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: fit-content;
  padding-top: 110px;
}
</style>