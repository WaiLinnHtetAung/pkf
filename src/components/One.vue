<template>
    <div>
        <p class="show-link">
            <router-link to="/">Home</router-link>&nbsp;/&nbsp;
            <router-link to="/about-us" @click="about">About-us</router-link>&nbsp;/&nbsp;One
        </p>
        <p>One</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit corporis assumenda dolor consequatur tempora maiores laboriosam alias ratione itaque eum.</p>
    </div>
</template>

<script>
    export default {
        setup(prop, {emit}) {
            let about = () => emit('about');

            return {about}
        }
    }
</script>

<style lang="stylus" scoped>

</style>
