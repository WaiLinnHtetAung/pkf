<template>
    <div class="about">
        <img src="../assets/images/indo-carousel01.jpg" alt="">
        <h2>ABOUT PKF MYANMAR</h2>

        <div class="row mt-5 about-body">
            <div class="col-lg-3 col-md-3 about-category">
                <div class="side-link" :class="{'active-link' : category == 'one'}" @click="category = 'one'">
                    <a :class="{'text-white' : category == 'one'}">One</a>
                </div>
                <div class="side-link" :class="{'active-link': category == 'two'}" @click="category = 'two'">
                    <a :class="{'text-white' : category == 'two'}">Two</a>
                </div>
            </div>
            <div class="col-lg-9 col-md-9 ps-3">
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
import { onMounted, onUpdated, ref } from 'vue'
export default {
        components: {
    Two,
    One, AboutMM },
        setup() {
            let category = ref('about-us');

            onUpdated(() => {
                window.scrollTo(0,0)
            })
            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {category}
        }
        
    }
</script>

<style scoped>

    .about {
        position: relative;
    }

    .about-body {
        padding: 30px 9%;
    }
    .about img {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
        filter: brightness(.4);
    }
    .about h2 {
        position: absolute;
        color: #fff;
        font-weight: bolder;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #3a76b1;
        padding: 15px 25px;
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
   
    @media (max-width:990px) {
        .about h2 {
            position: absolute;
            color: #fff;
            font-weight: bolder;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 22px;
            background: #3a76b1;
            padding: 15px 25px;
        }
    }

    @media (max-width:450px) {
        .about img {
            width: 100%;
            height: 250px;
        }
        .about h2 {
            top: 15%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 15px;
            background: #3a76b1;
            padding: 12px 15px;
            text-align: center;
        }
        .about-body {
            display: flex;
            flex-direction: column-reverse;
        }
        .about-category {
            margin-top: 15px;
        }
    }

</style>
