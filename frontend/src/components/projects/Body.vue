<template>
  <header>
    <div class="container">
      <!-- Content of the body goes here -->
      <h1>Projects</h1>
<!--      <div class="">-->

          <div class="image-gallery">

            <div class="image-gallery-text-container">
              <img class="image" src="../../assets/project-a.jpg" alt="Image">
              <div class="text-container">
                <p class="text">Project A</p>
              </div>
            </div>
            <div class="image-gallery-text-container">
              <img class="image" src="../../assets/project-b.jpg" alt="Image">
              <div class="text-container">
                <p class="text">Project B</p>
              </div>
            </div>
            <div class="image-gallery-text-container">
              <img class="image" src="../../assets/project-c.jpg" alt="Image">
              <div class="text-container">
                <p class="text">Project C</p>
              </div>
            </div>
            <div class="image-gallery-text-container">
              <img class="image" src="../../assets/project-d.jpg" alt="Image">
              <div class="text-container">
                <p class="text">Project D</p>
              </div>
            </div>
          </div>

    </div>
  </header>

</template>

<!--script>
export default {
  name: 'ProjectList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.image-gallery-text-container
{
  margin: 1%;
  width: 23%;
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;

  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;

}
.image-gallery img {
  width: 100%;
  /*max-width: 300px;*/
  height: auto;
  margin: 1%;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  /*border-radius: 0px 0px 13px 13px;*/
  opacity: 1;

}
.text-container
{
  margin: 1%;
  color:#101C64;
  font-family: Roboto, Regular;
  opacity: 100%;
}
.centered img {
  /*width: 150px;*/
}
.container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.project_text{
  top: 288px;
  left: 839px;
  width: 242px;
  height: 87px;
  /* UI Properties */
  text-align: left;
  font: normal normal normal 66px/87px Roboto;
  letter-spacing: 0px;
  color: #101C64;
  opacity: 1;
}
</style>
<script setup>
</script>
