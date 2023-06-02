<template>
    <mechanic-header-component></mechanic-header-component>

    <div class="container m-2">
        <div>
            <div class="text-3xl font-semibold mb-1 text-center">You are currently offering the following services:</div>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">

            <q-card class="my-card bg-secondary text-white" v-for="service in services" v-bind:key="service.id">
                <q-card-section>
                    <div class="text-h6">{{ service.name }}</div>
                    <div class="text-subtitle2">$ {{ service.price }}</div>
                </q-card-section>

                <q-card-section>
                    {{ service.description }}
                </q-card-section>

                <q-separator dark />

                <q-card-actions>
                    <q-btn flat>Editar</q-btn>
                    <q-btn flat>Eliminar</q-btn>
                </q-card-actions>
            </q-card>

        </div>
        <div class="text-center">
            <q-btn label="Add new service" color="primary" @click="addForm = true" />

            <q-dialog v-model="addForm" persistent>
                <q-card style="min-width: 350px">
                    <q-card-section>
                        <div class="text-2xl font-semibold mb-1 text-center">Add a new service</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <q-input filled v-model="newService.name" label="Service's name"/>
                        <q-input filled v-model="newService.price" label="Price"/>
                        <q-input filled v-model="newService.description" label="Description"/>
                    </q-card-section>

                    <q-card-actions align="right" class="text-primary">
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn flat label="Add service" @click="addService"/>
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </div>
</template>

<script setup>
import MechanicHeaderComponent from "../../components/mechanic-header.component.vue";
import { ServicesApiService } from "../services/services.services";
import { useAuthStore } from "../../stores/auth.store";
import { computed } from "vue";
import { useQuasar } from "quasar";
import { reactive, ref, onMounted  } from "vue";

const userStore = useAuthStore();
const auth = computed(() => userStore.user);
const addForm = ref(false);
const servicesApiService = new ServicesApiService();

let newService = reactive({
    mechanicId: auth.value.user.id,
    name: "",
    price: "",
    photos: "",
    description: "",
});

let services = ref([]);

const fetchData = () => {
    servicesApiService.getByMechanicId(auth.value.user.id).then((response) => {
        console.log(response.data);
        services.value = response.data;
        console.log(services)
    });
};

const addService = () => {
    console.log(newService)
    servicesApiService.create(newService).then((response) => {
        console.log(response.data);
    });
}


onMounted(fetchData);

fetchData();

</script>

<style></style>