<script setup>
import { ref, reactive } from "vue";
import { useQuasar } from 'quasar';
import { useRouter, RouterLink } from "vue-router";
import { AuthService } from '../services/auth.service'

const $q = useQuasar();
const authService = new AuthService();
const driver = reactive({
  name: "",
  email: "",
  password: "",
  address:"",
  carMake: ""
});
const router = useRouter();
//validation settings
const email = ref(null);
const emailRef = ref(null);
const password = ref(null);
const nameRef = ref(null);
const passwordRef = ref(null);
const carMakeRef = ref(null);
const addressRef = ref(null);
const isPwd = ref(true);
const emailRules = [val => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) || 'Por favor, ingrese un correo valido'];
const passwordRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];
const nameRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];
const carMakeRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];
const addressRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];

const validateData = () => {
    let valid = false;
    nameRef.value.validate();
    addressRef.value.validate();
    passwordRef.value.validate();
    carMakeRef.value.validate();
    emailRef.value.validate();

    if (emailRef.value.hasError || passwordRef.value.hasError || carMakeRef.value.hasError) {
        $q.notify({
            color: 'negative',
            message: 'No se pudo registrar. Verifique sus datos.',
            actions: [
                { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
            ]
        })
    } else {
        $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Se ha registrado al usuario',
            actions: [{ label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }]
        })
        valid = true;
    }
    return valid
}
const handleSignUp = async () => {
    if (authService.registerCustomer(driver) && validateData()) {
        router.push("/sign-in");
    } else {
        $q.notify({
            color: 'negative',
            message: 'No se pudo registrar. Verifique sus datos.',
            actions: [
                { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
            ]
        })
    }
}

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
                            <q-input ref="nameRef" filled v-model="driver.name" label="Full Name" :rules="nameRules" />
                        </div>
                    </div>

                    <div class=" text-center">
                        <div class="">
                            <q-input ref="carMakeRef" filled v-model="driver.carMake" label="Car make" :rules="carMakeRules"/>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="">
                            <q-input ref="addressRef" filled v-model="driver.address" label="City" :rules="addressRules" />
                        </div>
                    </div>

                    <div class=" text-center">
                        <div class="">
                            <q-input ref="passwordRef" filled v-model="driver.password" label="Password" :rules="passwordRules" />
                        </div>
                    </div>

                    <div class="button w-full text-center my-2">
                        <q-btn type="submit" class="w-full" label="Sign UP" @click="handleSignUp"/>
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