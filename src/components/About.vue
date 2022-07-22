<template >
   <section id="about">
<div class="about-container">
    <div class="about-title">
        <h2>About</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
    </div>
    <div class="about-content">
        <div id="about-row">
              <div class="img"><img src="https://i.postimg.cc/DyrTLr7D/Live-1.jpg" alt="me"></div>
        </div>
        <div id="about-row">
                  <h3>Illustrator & UI/UX Designer</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="lists">
                    <ul>
                     <li>
                     <strong>Name & Surname </strong><span> Live Maweni</span>
                     </li> 
                     <li>
                    <strong>Birthday</strong><span> 13 November</span>
                     </li>
                     <li>
                     <strong>Phone</strong><span> 0672300069</span>
                     </li>
                     <li>
                     <strong>City</strong><span> Cape Town</span>
                     </li>
                     </ul>
                        <ul>
                           <li>
                           <strong>Age</strong><span> 20</span>
                           </li>
                           <li>
                           <strong>Degree</strong><span> Masters</span>
                           </li>
                           <li>
                           <strong>Email</strong><span> saliwalive@gmail</span>
                           </li>
                           <li>
                           <strong>Freelance</strong><span> Available</span>
                           </li>  
                        </ul>
                </div>
            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
        </div>
    </div>
</div>
      </section>
</template>

<script>
export default {
    name : 'About'
}
</script>

<style scoped>
    /*About section*/
#about{
    padding: 5%;
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
.about-title p {
    margin-bottom: 0;
}
.about-content {
    --bs-gutter-x: 1.5rem;
    display: flex;
}
#about-row h3{
    font-weight: 700;
    font-size: 26px;
    color: #555555;
    display: flex;
    justify-content: center;
}
#about-row p {
    font-style: italic;
    margin-top: 0;
    padding-bottom: 10px;
    margin-left: 5px;
}
.lists {
    display: flex;
    margin-top: 10px;
    margin-left: 20px;
    padding: 40px;
    gap: 200px;
}
.lists ul {
    list-style-type: none;
}

#about-row img {
    width: 288px;
    height: 288px;
}
#about-row {
    padding: 2%;
}
</style>