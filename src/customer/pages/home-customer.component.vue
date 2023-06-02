<template>
  <customer-header-component></customer-header-component>
  <div class="card m-4">
    <pv-carousel
      :value="mechanics"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #header>
        <div class="font-bold text-2xl">Recommended</div>
      </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="mb-3">
              <img
                src="https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                :alt="slotProps.data.image"
                 class="product-image"
              />
            </div>
            <div>
              <div class="mb-1">{{ slotProps.data.name }}</div>
              <div class="mt-0 mb-3">{{ slotProps.data.address }}</div>
              <div class="car-buttons mt-5">
                <router-link :to="`/mechanic-profile/${slotProps.data.id}`">
                  <pv-button icon="pi pi-plus" label="See More" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>
  </div>

  <div class="card m-4">
    <pv-carousel
      :value="mechanics"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #header>
        <div class="font-bold text-2xl">Near you</div>
      </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="mb-3">
              <img
                src="https://images.pexels.com/photos/3807167/pexels-photo-3807167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                :alt="slotProps.data.image"
                class="product-image"
              />
            </div>
            <div>
              <div class="mb-1">{{ slotProps.data.name }}</div>
              <div class="mt-0 mb-3">{{ slotProps.data.address }}</div>
              <div class="car-buttons mt-5">
                <router-link to="/mechanic-profile">
                  <pv-button icon="pi pi-plus" label="See More" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>
  </div>

  <div class="card m-4">
    <pv-carousel
      :value="mechanics"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #header>
        <div class="font-bold text-2xl">Most Rated</div>
      </template>
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="mb-3">
              <img
                src="https://images.pexels.com/photos/104836/speed-car-vehicle-drive-104836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                :alt="slotProps.data.image"
                 class="product-image"
              />
            </div>
            <div>
              <div class="mb-1">{{ slotProps.data.name }}</div>
              <div class="mt-0 mb-3">{{ slotProps.data.address }}</div>
              <div class="car-buttons mt-5">
                <router-link to="/mechanic-profile">
                  <pv-button icon="pi pi-plus" label="See More" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-carousel>
  </div>
</template>

<script>
import customerHeaderComponent from "../../components/customer-header.component.vue";
import { MechanicsProfileApiService } from "../../mechanic/services/mechanics-api.service";

export default {
  name: "home-customer",
  components: {
    customerHeaderComponent,
  },
  data() {
    return {
      mechanics: null,
      mechanicService: null,
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  created() {
    this.mechanicService = new MechanicsProfileApiService();
    this.mechanicService.getAll().then((response) => {
      this.mechanics = response.data;
    });
  },
};
</script>

<style>
.product-item-content {
  border: 1px solid var(--surface-border);
  border-radius: 3px;
  margin: 0.2rem;
  text-align: center;
  padding: 2rem 0;
}

.product-image {
  width: 70%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>