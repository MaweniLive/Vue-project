<template>
 <section id="landing">
 <div class="home dark-layout">
          <div class="container-fluid">
        </div>
 </div>
 </section>
</template>
<script>
export default {
    name: 'Landing'
}

</script>
<style scoped>
/*START OF LANDING PAGE*/
#landing {
  background-image: url(https://i.postimg.cc/g0RW8Qqj/Black-and-White-Minimalist-Cover-Album.png);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#landing h1,
#landing h4 {
  font-size: 3rem;
  text-shadow: 3px 3px 3px #000;
}
</style>