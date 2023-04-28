import axios from "axios";
import http from "../../core/services/http-common";
import { useAuthStore } from '../../stores/auth.store.js';

export class AuthService {
    async registerMechanic(mechanic){
        try {
            await http.post("mechanics/auth/sign-up", mechanic);
            return true;
        } catch (err) {
            return false;
        }
    }

    async registerCustomer(customer){
        try {
            await http.post("customers/auth/sign-up", customer);
            return true;
        } catch (err) {
            return false;
        }
    }

    async login(user){
        try {
            const response = await http.post(`users/auth/sign-in`, user);
            const authStore = useAuthStore()
            authStore.login(response.data)
            if(response.status !== 200) return false;
            return true;
        } catch (err) {
            return false;
        }
    }

    //add update and delete methods IF NECESSARY
}

