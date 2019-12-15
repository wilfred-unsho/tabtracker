
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-4">
        <h1>Register</h1>

        <div class="form-group">
          <input type="email" name="email" v-model="email" placeholder="Email" class="form-control" />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
            class="form-control"
          />
          <div class="error" v-html="error">
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-lg btn-block btn-outline-success" @click="register">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      } catch (error) {
        this.error = error.response.data.error
      }
    
    }
  }
}
</script>
<style scoped>
  .error {
    color: red;
  }
</style>
