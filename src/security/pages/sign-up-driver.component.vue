<template>
    <div class="grid min-h-screen mr-0">
        <div class="col-12 md:col-6 p-0">
            <img class="w-full h-full"
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980"
                alt="man diriving a car">
        </div>
        <div class="col-12 md:col-6 p-0 flex justify-content-center">
            <div class="flex flex-column align-items-center justify-content-center" style="max-width: 26rem;">
                <h1 class="text-center text-3xl mt-5 font-bold">Hey customer! Register yourself as a driver here:</h1>
                <div class="text-center text-1xl my-2">We are happy you are joining us. Go ahead, we are committed to
                    helping you find the best workshops!</div>

                <form @submit.prevent="submit">
                    <div class="m-3 text-center">
                        <div class="px-3">
                            <span class="p-float-label">
                                <pv-input-text v-model="workshopName"></pv-input-text>
                                <label for="workshopName">Full name</label>
                            </span>
                        </div>
                    </div>

                    <div class="m-3 text-center">
                        <div class="px-3">
                            <span class="p-float-label">
                                <pv-input-text v-model="email"></pv-input-text>
                                <label for="email">Email</label>
                            </span>
                        </div>
                    </div>

                    <div class="m-3 text-center">
                        <div class="px-3">
                            <span class="p-float-label">
                                <pv-input-text v-model="carMake"></pv-input-text>
                                <label for="carMake">Car make</label>
                            </span>
                        </div>
                    </div>

                    <div class="m-3 text-center">
                        <div class="px-3">
                            <span class="p-float-label">
                                <pv-input-text v-model="city"></pv-input-text>
                                <label for="city">City</label>
                            </span>
                        </div>
                    </div>

                    <div class="m-3 text-center">
                        <div class="px-3">
                            <span class="p-float-label">
                                <pv-input-text type="password" v-model="password"></pv-input-text>
                                <label for="password">Password</label>
                            </span>
                        </div>
                    </div>

                    <div class="button w-full text-center my-2">
                        <pv-button type="submit" class="w-full" label="Sign Up"></pv-button>
                    </div>
                </form>
                <div>
                    <span>Already have an account? </span>
                    <a href="/sign-in" class="font-semibold">Sign in!</a>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import AuthenticationApiService from '../services/auth.service.js'

export default {
    name: 'sign-up-driver',
    data: () => {
        return {
            workshopName: null,
            email: null,
            ownerName: null,
            password: null,
            description: null,
            errors: []
        };
    },

    methods: {
        async signUpUser(newUser) {
            await AuthenticationApiService.signUp(newUser)
                .then((response) => {
                    console.log(response.data.user)
                })
                .catch((error) => {
                    this.errors.push(error);
                });
        },

        createUser() {
            return {
                //name: this.name,
                email: this.email,
                password: this.password,
                role: this.role.value,
            };
        },

        async submit() {
            const newUser = this.createUser();
            await this.signUpUser(JSON.stringify(newUser));
            this.$router.push("/sign-in");
            this.resetForm();
        },

        resetForm() {
            this.workshopName = null;
            this.email = null;
            this.ownerName = null;
            this.description = null;
            this.password = null;
        },
    },
};
</script>
    
<style>
.grid {
    grid-gap: 0 !important;
}
</style>