<script setup>
import { RouterView } from 'vue-router'
import 'normalize.css'

import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import '@/styles/reset.less'
</script>

<template>
    <Header />
    <RouterView />
    <Footer />
</template>
