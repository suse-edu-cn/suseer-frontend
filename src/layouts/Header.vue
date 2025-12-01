<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="left">
            <RouterLink to="/">OAAHub Frontend</RouterLink>
        </div>
        <div class="grow"></div>
        <div class="right">
            <RouterLink to="/match">比赛中心</RouterLink>
            <RouterLink to="/auth">登录</RouterLink>
        </div>
    </header>
</template>

<style lang="less" scoped>
header {
    display: flex;
    border-bottom: 1px solid #ddd;
    line-height: 1;
    font-size: 1rem;
    padding: 1.25rem var(--e-content-h-padding);

    .left {
        font-weight: 600;
    }

    .grow {
        flex-grow: 1;
    }

    .right {
        font-size: .9rem;

        a {
            margin-left: 2em;
        }
    }
}
</style>
