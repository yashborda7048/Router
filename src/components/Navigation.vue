<template>
    <div id="nav">
        <router-link to="/">Home</router-link> ||
        <router-link to="/about">About</router-link> ||
        <router-link to="/form/anil">Anil Form</router-link> ||
        <router-link to="/form/rakesh">Rakesh Form</router-link> ||
        <router-link to="/form/jadav">Jadav Form</router-link> ||
        <router-link to="/form/"> Form</router-link>
    </div>
</template>

<style scoped>

#nav .nav-active {
    color: red;
    border-bottom: 1px solid red;
}

</style>