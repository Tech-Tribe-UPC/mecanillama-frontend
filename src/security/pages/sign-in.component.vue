<script setup>
import { ref, reactive } from "vue";
import { useQuasar } from 'quasar';
import { useRouter, RouterLink } from "vue-router";
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

const $q = useQuasar();
const user = reactive({
  email: "",
  password: ""
});

const router = useRouter();
//validation settings
const email = ref(null);
const emailRef = ref(null);

const password = ref(null);
const passwordRef = ref(null);
const isPwd = ref(true);

//validation rules
const emailRules = [val => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) || 'Por favor, ingrese un correo valido'];
const passwordRules = [val => (val && val.length > 0) || 'Este campo es obligatorio'];

const validateData = () => {
  let valid = false;
  emailRef.value.validate();
  passwordRef.value.validate();
  if (emailRef.value.hasError || passwordRef.value.hasError) {
    $q.notify({
      color: 'negative',
      message: 'No se pudo ingresar. Verifique sus datos.',
      actions: [
        { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
      ]
    })
  } else {
    valid = true;
  }
  return valid;
}

const handleSubmit = async () => {
  const validData = validateData();
  const status = authService.login(user);
  if (status && validData) {
    $q.notify({
      icon: 'done',
      color: 'positive',
      message: 'Usuario autenticado.',
      actions: [{ label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }]
    })
    //router.push("/calculator");
  } else {
    $q.notify({
      color: 'negative',
      message: 'Los datos ingresados no coinciden. Verifique sus datos.',
      actions: [
        { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
      ]
    })
  }
}

const goToMechanicSignUpPage = () => {
  router.push("/auth/signup/mechanic");
}

const goToCustomerSignUpPage = () => {
  router.push("/auth/signup/driver");
}

</script>

<template>
  <div class="grid min-h-screen mr-0">
    <div class="col-12 md:col-6 p-0">
      <img class="w-full"
        src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1"
        alt="man diriving a car" />
    </div>
    <div class="col-12 md:col-6 p-0 flex justify-content-center">
      <div class="flex flex-column align-items-center justify-content-center" style="max-width: 26rem">
        <h1 class="text-center text-6xl my-2 font-bold">Welcome again!</h1>

        <form @submit.prevent="login" class="p-3">
          <div class="text-center">
            <q-input ref="emailRef" class="p-4" filled v-model="user.email" label="Email" :rules="emailRules" />
            <q-input ref="passwordRef" class="p-4" filled v-model="user.password" :type="isPwd ? 'password' : 'text'"
              label="Contraseña" :rules="passwordRules">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
              </template>
            </q-input>
          </div>

          <div class="m-2 text-center">
            <span class="font-semibold">Forgot password?</span>
          </div>

          <div class="button w-full text-center my-2">
            <q-btn type="submit" class="w-full" label="Sign In" @click="handleSubmit" />
          </div>
        </form>
        <div class="text-center">
          <div>Don't have an account? </div>
          <div class="p-2">
            <q-btn class="w-full" label="Register as a mechanic" @click="goToMechanicSignUpPage" />
          </div>
          <div class="p-2">
            <q-btn class="w-full" label="Register as a customer" @click="goToCustomerSignUpPage" />
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