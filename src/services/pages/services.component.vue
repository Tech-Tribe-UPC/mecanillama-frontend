<template>
    <mechanic-header-component></mechanic-header-component>

    <div class="container m-2">
        <div>
            <div class="text-3xl font-semibold mb-1 text-center">You are currently offering the following services:</div>
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
            <q-btn label="Add new service" color="primary" @click="addForm = true" />

            <q-dialog v-model="addForm" persistent>
                <q-card style="min-width: 350px">
                    <q-card-section>
                        <div class="text-h6">Your address</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
                    </q-card-section>

                    <q-card-actions align="right" class="text-primary">
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn flat label="Add address" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </div>
</template>

<script setup>
import MechanicHeaderComponent from "../../components/mechanic-header.component.vue";
import appointmentsMechanicComponent from "../../appointments/pages/appointments-mechanic.component.vue";
import { useAuthStore } from "../../stores/auth.store";
import { computed } from "vue";
import { useQuasar } from "quasar";
import { reactive, ref } from "vue";

const userStore = useAuthStore();
const auth = computed(() => userStore.user);
const addForm = ref(false);
</script>

<style></style>