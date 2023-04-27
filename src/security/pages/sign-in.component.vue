<script setup>
import { reactive } from "vue";


const user = reactive({
  email: "",
  password: ""
});

</script>

<template>
  <div class="grid min-h-screen mr-0">
    <div class="col-12 md:col-6 p-0">
      <img
        class="w-full"
        src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1"
        alt="man diriving a car"
      />
    </div>
    <div class="col-12 md:col-6 p-0 flex justify-content-center">
      <div
        class="flex flex-column align-items-center justify-content-center"
        style="max-width: 26rem"
      >
        <h1 class="text-center text-6xl my-7 font-bold">Welcome again!</h1>

        <form @submit.prevent="login">
          <div class="m-3 text-center">
            <div class="px-3">
              <span class="p-float-label">
                <pv-input-text v-model="email"></pv-input-text>
                <label for="email">Email</label>
              </span>
            </div>
          </div>

          <div class="m-3 text-center">
            <div class="px-3">
              <span class="p-float-label">
                <pv-input-text
                  type="password"
                  v-model="password"
                ></pv-input-text>
                <label for="password">Password</label>
              </span>
            </div>
            <q-input standout v-model="text" label="Standout" />
          </div>
          <div class="m-3 text-center">
            <span class="font-semibold">Forgot password?</span>
          </div>

          <div class="button w-full text-center my-5">
            <pv-button type="submit" class="w-full" label="Sign In"></pv-button>
          </div>
        </form>
        <div>
          <div>Don't have an account? </div>
          <div>
          <a href="/auth/signup/mechanic" class="font-semibold">Sign up as a mechanic</a>
        </div>
        <div><a href="/auth/signup/driver" class="font-semibold">Sign up as a driver</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.grid {
  grid-gap: 0 !important;
}
</style>