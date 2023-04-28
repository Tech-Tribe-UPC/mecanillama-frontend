<script setup>
import { ref, reactive } from "vue";
import { useQuasar } from 'quasar';
import { useRouter, RouterLink } from "vue-router";
import { AuthService } from '../services/auth.service'

const $q = useQuasar();
const authService = new AuthService();
const mechanic = reactive({
    name: "",
    email: "",
    password: "",
    address: "",
    description: "",
    phone: ""
});
const router = useRouter();
//validation settings
const email = ref(null);
const emailRef = ref(null);

const password = ref(null);
const nameRef = ref(null);
const passwordRef = ref(null);
const phoneRef = ref(null);
const descriptionRef = ref(null);
const cityRef = ref(null);
const isPwd = ref(true);
const emailRules = [val => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) || 'Por favor, ingrese un correo valido'];
const passwordRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];
const descriptionRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];
const nameRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];
const phoneRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];
const cityRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];

const validateData = () => {
    let valid = false;
    nameRef.value.validate();
    descriptionRef.value.validate();
    cityRef.value.validate();
    passwordRef.value.validate();
    phoneRef.value.validate();
    emailRef.value.validate();

    if (emailRef.value.hasError || passwordRef.value.hasError || phoneRef.value.hasError) {
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
    console.log(mechanic)
    if (authService.registerMechanic(mechanic) && validateData()) {
        router.push("/sign-in");
        console.log("Se registro al usuario!");
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
                src="https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="man diriving a car">
        </div>
        <div class="col-12 md:col-6 p-0 flex justify-content-center">
            <div class="flex flex-column" style="max-width: 26rem;">
                <div class="text-center text-2xl mt-5 font-bold">Hey mechanic! Register your business here:</div>
                <div class="text-center text-1xl my-2">We are happy you are joining us. Go ahead, we are committed to
                    helping you grow your business!</div>

                <form @submit.prevent="submit">
                    <div class="text-center">
                        <div class="">
                            <q-input ref="emailRef" filled v-model="mechanic.email" label="Email" :rules="emailRules" />
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="">
                            <q-input filled ref="nameRef" v-model="mechanic.name" label="Business Name" :rules="nameRules"/>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="">
                            <q-input filled ref="phoneRef" v-model="mechanic.phone" label="Phone" :rules="phoneRules"/>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="">
                            <q-input filled ref="descriptionRef" v-model="mechanic.description" label="Tell us about your business" :rules="descriptionRules" />
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="">
                            <q-input ref="cityRef" filled v-model="mechanic.address" label="City" :rules="cityRules"/>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="">
                            <q-input ref="passwordRef" class="p-4" filled v-model="mechanic.password"
                                :type="isPwd ? 'password' : 'text'" label="Password" :rules="passwordRules">
                                <template v-slot:append>
                                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>
                        </div>
                    </div>

                    <div class="button w-full text-center my-2">
                        <q-btn type="submit" class="w-full" label="Sign Up" @click="handleSignUp" />
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
}</style>