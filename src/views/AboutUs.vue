<template>
    <div class="about">
        <img src="../assets/images/indo-carousel01.jpg" alt="">
        <h2>ABOUT PKF MYANMAR</h2>

        <div class="row mt-5">
            <div class="col-lg-2 col-md-4 about-category">
                <div class="side-link" :class="{'active-link' : category == 'one'}" @click="category = 'one'">
                    <a :class="{'text-white' : category == 'one'}">One</a>
                </div>
                <div class="side-link" :class="{'active-link': category == 'two'}" @click="category = 'two'">
                    <a :class="{'text-white' : category == 'two'}">Two</a>
                </div>
            </div>
            <div class="col-lg-10 col-md-8 ps-3">
                <div v-if="category == 'about-us'"> 
                    <AboutMM></AboutMM>
                </div>
                <div v-if="category == 'one'">
                    <One @about="category = 'about-us'"></One>
                </div>
                <div v-if="category == 'two'">
                    <Two @about="category = 'about-us'"></Two>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Two from '../components/Two'
import One from '../components/One'
import AboutMM from '../components/AboutMM'
import { ref } from 'vue'
export default {
        components: {
    Two,
    One, AboutMM },
        setup() {
          
            let category = ref('about-us');

            return {category}
        }
        
    }
</script>

<style scoped>

    .about {
        position: relative;
        padding: 30px 9%;
    }
    .about img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
        filter: brightness(.4);
    }
    .about h2 {
        position: absolute;
        color: #fff;
        font-weight: bolder;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .about-category {
        background: #e7e8ea;
        padding: 10px 15px;
        font-size: 13px;
        height: 200px;
    }
    .about-category a {
        color: #fff;
    }
    .side-link {
        border-bottom: 1px solid rgb(157, 151, 151);
        margin-bottom: 10px;
        transition: .5s ease;
        cursor: pointer;
    }
    .side-link:hover {
        background: #0045b6;
    }
    .side-link a {
        padding: 2px 5px;
        transition: .5s ease;
        color: #003594;
    }
    .side-link:hover a {
        padding: 0 10px;
        color: #e7e8ea;
    }
    .active-link {
        background: #003594;
    }
   

</style>
