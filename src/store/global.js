import { ref } from 'vue';
import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', ()=>{
    // 是否暗黑模式
    let isDarkMode = ref(Boolean(localStorage.getItem('isDarkMode') * 1) || false);

    return {
        isDarkMode
    }
})