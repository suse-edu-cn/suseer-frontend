import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const isAuthed = ref(false)
    const token = ref<string>('')
    const userInfo = ref<any>(null)

    return {
        isAuthed,
        token,
        userInfo,
    }
})
