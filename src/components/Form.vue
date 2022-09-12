<template>
    <h1>{{Profile}} page</h1>
</template>
<script>
    import { useRoute } from 'vue-router';
export default {
    name: 'Form',
    data() {
        return{
            Profile: ''
        }
    },
    mounted(){
        const route = useRoute();
        this.Profile= route.params.name;
    }
}
</script>
<style scoped>
    h1 {
      margin: 20px 0 0;
      color: #42b983;
    }
    </style>