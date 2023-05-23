<template>
    <div>
        <p class="show-link">
            <router-link to="/">Home</router-link>&nbsp;/&nbsp;
            <router-link to="/about-us" @click="about">About-us</router-link>&nbsp;/&nbsp;Two
        </p>
        <p>Two</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eum. Harum exercitationem consequatur eaque aut quibusdam debitis ratione blanditiis at esse dolor, possimus fugit illum labore veniam mollitia ipsum repellendus tenetur officiis quod libero. Optio, accusantium iure! Ratione nisi molestias veniam vel nesciunt! Quaerat rerum quisquam numquam, temporibus hic odio.</p>
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
