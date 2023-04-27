import axios from "axios";
import http from "../../core/services/http-common";


const API_URL = "https://mecanillama-api.azurewebsites.net/api/v1/users/sign-up";
const API_URL_SIGNIN = "https://mecanillama-api.azurewebsites.net/api/v1/users/sign-in";

class AuthService {
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

    signIn(user){
        return http.post(API_URL_SIGNIN, user);
    }
    // Get Current User
    getCurrentUser() {
        return localStorage.getItem("user");
      }
}
export default new AuthService();
