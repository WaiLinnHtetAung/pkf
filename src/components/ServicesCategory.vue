<template>
    <div class="col-lg-3 col-md-4 about-category">
        <div class="side-link" :class="{'active-link' : service == 'assurance'}" @click="goPage('assurance')">
            <router-link to="/services/assurance" :class="{'text-white' : service == 'assurance'}">AUDIT & ASSURANCE</router-link>
        </div>
        <div class="side-link" :class="{'active-link' : service == 'advisory'}" @click="goPage('advisory')">
            <router-link to="/services/advisory" :class="{'text-white' : service == 'advisory'}">ADVISORY</router-link>
        </div>
        <div class="side-link" :class="{'active-link' : service == 'tax'}" @click="goPage('tax')">
            <router-link to="/services/tax" :class="{'text-white' : service == 'tax'}">TAX </router-link>
        </div>
        <div class="side-link" :class="{'active-link' : service == 'business-solutions'}" @click="goPage('business-solutions')">
            <router-link to="/services/business-solutions" :class="{'text-white' : service == 'business-solutions'}">BUSINESS SOLUTIONS</router-link>
        </div>
        <div class="side-link" :class="{'active-link' : service == 'technological&risk-services'}" @click="goPage('technological&risk-services')">
            <router-link to="/services/technological&risk-services" :class="{'text-white' : service == 'technological&risk-services'}">TECHNOLOGICAL & RISK SERVICES</router-link>
        </div>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    export default {
        props:['service'],
        setup(props) {
            let router = useRouter();
            let goPage = (name) => router.push(`/services/${name}`);

            return {goPage}
        }
    }
</script>

<style scoped>
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
        font-size: 12px;
        font-weight: bold;
    }
    .side-link:hover a {
        padding: 0 10px;
        color: #e7e8ea;
    }
    .active-link {
        background: #003594;
        padding: 0 10px;
    }
</style>
