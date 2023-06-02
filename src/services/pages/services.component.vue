<template>
    <mechanic-header-component></mechanic-header-component>

    <div class="container">
        <div>
            <div class="text-3xl font-semibold mb-1">You are currently offering the following services:</div>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card bg-secondary text-white">
                <q-card-section>
                    <div class="text-h6">Limpiado de frenos</div>
                    <div class="text-subtitle2">$29.99</div>
                </q-card-section>

                <q-card-section>
                    El servicio se encarga basicamente del limpiado de frenos de su vehiculo
                </q-card-section>

                <q-separator dark />

                <q-card-actions>
                    <q-btn flat>Editar</q-btn>
                    <q-btn flat>Eliminar</q-btn>
                </q-card-actions>
            </q-card>

        </div>
        <div>
            <appointments-mechanic-component></appointments-mechanic-component>
        </div>
    </div>
</template>

<script setup>
import MechanicHeaderComponent from "../../components/mechanic-header.component.vue";
import appointmentsMechanicComponent from "../../appointments/pages/appointments-mechanic.component.vue";
import { useAuthStore } from "../../stores/auth.store";
import { computed } from "vue";

const userStore = useAuthStore();
const auth = computed(() => userStore.user);
</script>

<style></style>