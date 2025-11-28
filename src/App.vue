<script setup>
import { RouterView } from 'vue-router'
import { Toast } from 'primevue'
import 'normalize.css'

import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import '@/styles/reset.less'
</script>

<template>
    <Toast position="top-center" />
    <Header />
    <RouterView />
    <Footer />
</template>
