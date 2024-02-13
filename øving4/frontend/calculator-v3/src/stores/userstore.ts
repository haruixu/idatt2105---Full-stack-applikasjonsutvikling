import { ref } from 'vue'
import { defineStore } from 'pinia'

interface User {
    name: string
    email: string
}
export const useUserStore = defineStore('users', () => {
    const user= ref<User>();
    function submitUser(name: string, email: string) {
        const newUser = { name, email }
        user.value = newUser;
    }
    return { user, submitUser};
});