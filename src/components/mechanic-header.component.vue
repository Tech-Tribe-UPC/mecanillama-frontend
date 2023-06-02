<template>
<div>
  <menu-bar :model="navigation" class="bg-blue-200 flex">
    <template #start>
        <div class = "flex">
            <div class="m-3">
                <RouterLink to="/home-mechanic">
                    <div class="font-bold text-2xl">Mecchanio</div>
                </RouterLink>
            </div>
        </div>
    </template>
    <template #end>
        <div class="flex">
        <div class="m-3 search-input w-full">
            <pv-input-text
                v-model="search"
                class="border-round p-3 px-3 w-full"
                placeholder="Search here..." />
        </div>    
            <div class="flex align-items-center justify-content-center cursor-pointer profile text-center">
                <menu-bar :model="accountMenu"></menu-bar>
                <pv-avatar image="https://images.pexels.com/photos/104836/speed-car-vehicle-drive-104836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  class="mr-2" size="large" shape="circle" />
                <span>The Mechanic Shop</span>
            </div>
        </div>
    </template>
  </menu-bar>
  </div>
</template>

<script>

export default{
    name: 'mechanic-header',
    data(){
        return{
            navigation:[
                { label: "Home",icon:'pi pi-fw pi-home', to: "/home-customer" },
                { label: "Appointments", icon:'pi pi-fw pi-calendar',to: "/appointments-customer" },
                { label: "Services", icon:'pi pi-fw pi-car', to: "/mechanic/services" },
                { label: "Notifications", icon:'pi pi-fw pi-bell', to: "/notifications" },
            ],
            accountMenu: [{
                items: [
                    { label: "Profile", to: "/customer-profile", icon: 'pi pi-fw pi-user'},
                    { label: "Sign out", to: "/", icon: 'pi pi-fw pi-sign-out' },
                ]
            }
            ]
        }
    },
    methods: {
        toggleMenu(){
            
        }
    }
}

</script>

<style>
.p-menubar-end{
    width:100%;
}

.profile > div{
    padding:0px;
    border:0;
}
@media only screen and (max-width: 992px) {
  .p-menubar-start{
      width: 100% !important;
  }
  .search-input{
      display:none;
  }
}
</style>
