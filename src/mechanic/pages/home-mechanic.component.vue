<script setup>
import MechanicHeaderComponent from "../../components/mechanic-header.component.vue";
import appointmentsMechanicComponent from "../../appointments/pages/appointments-mechanic.component.vue";
import { MechanicsProfileApiService } from "../services/mechanics-api.service";
import { useAuthStore } from "../../stores/auth.store";
import { computed } from "vue";

const userStore = useAuthStore();
const auth = computed(() => userStore.user);
</script>

<template>
  <mechanic-header-component></mechanic-header-component>

  <div class="container">
    <div class="flex flex-column m-4">
      <div class="flex m-0 m-auto">
        <img
          src="https://images.pexels.com/photos/104836/speed-car-vehicle-drive-104836.jpeg?auto=compress&cs=tinysrgb&w=560&h=350&dpr=1"
          class="w-1/2"
        />
        <div class="flex-1 mx-4">
          <div class="text-center">  
            <div class="text-3xl mb-1">Your business's data:</div>
            <div class="text-3xl font-semibold mb-1">{{ auth.user.name }}</div>
            <div class="text-xl m-2">{{ auth.user.address }}</div>
            <div class="text-xl m-2">{{ auth.user.phone }}</div>
            <div class="text-xl mx-6 mb-4">
              {{ auth.user.description }}
            </div>
              <q-btn color="black" label="Edit my info" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <appointments-mechanic-component></appointments-mechanic-component>
    </div>
  </div>
</template>

<style>

</style>