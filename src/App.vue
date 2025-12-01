<script setup>
import { RouterView } from 'vue-router'
import { Toast } from 'primevue'
import { useToast } from 'primevue/usetoast'
import 'normalize.css'

import { initToast } from '@/utils/setToast.ts'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import '@/styles/reset.less'

initToast(useToast())
</script>

<template>
    <Toast position="top-center" />
    <Header />
    <RouterView />
    <Footer />
</template>
