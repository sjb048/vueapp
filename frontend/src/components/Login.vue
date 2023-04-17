<template>
  <div>
    <div class="split1 left">

      <div class="centered container">
        <div class="left-section">
          <div class="image-gallery">

            <img src="../assets/img1.png" alt="Image 1">
            <img src="../assets/project-a.jpg" alt="Image 2">
          </div>
        </div>
        <div class="middle-section">
          <div class="image-gallery">
            <img src="../assets/img3.png" alt="Image 3">
            <img src="../assets/project-b.jpg" alt="Image 4">
          </div>
        </div>
        <div class="right-section">
          <div class="image-gallery">
            <img src="../assets/img6.png" alt="Image 5">
            <img src="../assets/img6.png" alt="Image 6">
          </div>
        </div>
      </div>
      <div class="left_text">
        <h4>View all your project in one engaging wall</h4>
      </div>
    </div>

    <div class="split2 right">
      <div class = "row login_part">

        <div class="">
          <h4 class="login_preview_text">Login to your account</h4>
          <form class="form-group" @submit.prevent="login">
            <input v-model="email" type="email" class="form-control" placeholder="Email" required>
            <div v-if="emailError" class="error">{{ emailError }}</div>
            <input v-model="password" type="password" class="form-control" placeholder="Password" required>
            <div v-if="passwordError" class="error">{{ passwordError }}</div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
            <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
            </p>
            <p><a href="#">Forgot your password?</a></p>
          </form>


          <!--          <button type="submit" class="btn btn-primary btn-lg btn-block">Signup</button>-->

          <!--        </form>-->
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
      }
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.emailError = '';
      this.passwordError = '';

      if (!this.email) {
        this.emailError = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = 'Please enter a valid email';
        isValid = false;
      }

      if (!this.password) {
        this.passwordError = 'Password is required';
        isValid = false;
      }

      return isValid;
    },
    isValidEmail(email) {
      // Email validation logic, you can customize it as per your requirement
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    login() {
      if (this.validateForm()) {
        // Perform login logic here
        alert('Login successful');
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* Split the screen in half */
.split1 {
  height: 100%;
  width: 55%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  /*padding-top: 20px;*/
}
.split2 {
  height: 100%;
  width: 45%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  /*padding-top: 20px;*/
}
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  /*background: #eee;*/
}
/* Control the left side */
.left {
  left: 0;
  background-color: rgb(16, 28, 100);
  opacity: 1;

}
.container{display: flex;}
.left-section, .right-section {
  flex: 0.1;
  background: #101C64 0% 0% no-repeat padding-box;
  opacity: 1;
  /*float: initial;*/
  padding: 0px;
}
.middle-section{

  flex: 0.1;
  background: #101C64 0% 0% no-repeat padding-box;
  opacity: 1;
  /*float: initial;*/
  padding-top: 7%;
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  /*justify-content: center;*/
}

.image-gallery img {
  width: 15%;
  max-width: 300px;
  height: auto;
  margin: 5%;
  /*top: 392px;*/
  /*left: 206px;*/
  /*width: 166px;*/
  /*height: 108px;*/
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 13px 13px;
  opacity: 1;
}

/* Control the right side */
.right {
  right: 0;
  background-color: white;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-40%, -40%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
.centered img {
  width: 150px;
  /*border-radius: 50%;*/
}
.left_text
{
  margin-top: 65%;
  color: whitesmoke;
  font-family: Roboto,Regular;
}
p {
  line-height: 1rem;
}
.error {
  color: red;
}
.login_preview_text
{
  margin: 3%;
}
.login_part
{
  align-items: center;
  display: flex;
  height: 100vh;
  margin: 5%;

}
.form-control
{
  margin: 2%;
}
.button
{
  margin: 2%;
}
.form-group {
  input {
    /*margin-bottom: 20px;*/
    margin: 4%;
  }
}
</style>
