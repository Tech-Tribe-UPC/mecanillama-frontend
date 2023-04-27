<script setup>
import { ref, reactive } from "vue";
import { useQuasar } from 'quasar';
import { useRouter, RouterLink } from "vue-router";

const $q = useQuasar()
const driver = reactive({
  name: "",
  email: "",
  password: "",
  carMake:"",
  city: ""
});
const router = useRouter();
//validation settings
const email = ref(null);
const emailRef = ref(null);

const password = ref(null);
const passwordRef = ref(null);
const isPwd = ref(true);
const emailRules = [val => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) || 'Por favor, ingrese un correo valido'];

</script>


<template>
    <div class="grid min-h-screen mr-0">
        <div class="col-12 md:col-6 p-0">
            <img class="w-full h-full"
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980"
                alt="man diriving a car">
        </div>
        <div class="col-12 md:col-6 p-0 flex justify-content-center">
            <div class="flex flex-column" style="max-width: 26rem;">
                <div class="text-center text-2xl mt-5 font-bold">Hey customer! Register yourself as a driver here:</div>
                <div class="text-center text-1xl my-2">We are happy you are joining us. Go ahead, we are committed to
                    helping you find the best workshops!</div>

                <form @submit.prevent="submit">
                    <div class="text-center">
                        <div class="">
                            <q-input ref="emailRef" filled v-model="driver.email" label="Email" :rules="emailRules" />
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="">
                            <q-input filled v-model="driver.name" label="Full Name"/>
                        </div>
                    </div>

                    <div class=" text-center">
                        <div class="">
                            <q-input filled v-model="driver.carMake" label="Car make"/>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="">
                            <q-input filled v-model="driver.city" label="City"/>
                        </div>
                    </div>

                    <div class=" text-center">
                        <div class="">
                            <q-input filled v-model="driver.password" label="Password"/>
                        </div>
                    </div>

                    <div class="button w-full text-center my-2">
                        <q-btn type="submit" class="w-full" label="Sign UP" @click="goToMechanicSignUpPage"/>
                    </div>
                </form>
                <div class="text-center">
                    <span>Already have an account? </span>
                    <a href="/sign-in" class="font-semibold">Sign in!</a>
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