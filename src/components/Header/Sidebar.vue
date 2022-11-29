<template>
    <div>
        <!--Sidebar with Dimmer -->
        <div class="flex absolute h-screen z-50">
            <!-- Sidebar -->
            <div class="flex">
                <!-- Sidebar Content -->
                <div class="transition-all duration-700 bg-gray-200 overflow-hidden">
                    <Search />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from './Search.vue'


export default {
    components: {
        Search
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
