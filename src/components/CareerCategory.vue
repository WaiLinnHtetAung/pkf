<template>
    <div class="col-lg-3 col-md-4 career-category">
        <div class="side-link" :class="{'active-link' : career == 'junior-auditor'}" @click="goPage('junior-auditor')">
            <router-link to="/careers/junior-auditor" :class="{'text-white' : career == 'junior-auditor'}">JUNIOR AUDITOR </router-link>
        </div>
        <div class="side-link" :class="{'active-link' : career == 'audit-supervisor'}" @click="goPage('audit-supervisor')">
            <router-link to="/services/audit-supervisor" :class="{'text-white' : career == 'audit-supervisor'}">AUDIT SUPERVISOR</router-link>
        </div>
        <div class="side-link" :class="{'active-link' : career == 'senior-auditor'}" @click="goPage('senior-auditor')">
            <router-link to="/services/senior-auditor" :class="{'text-white' : career == 'senior-auditor'}">SENIOR AUDITOR</router-link>
        </div>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    export default {
        props:['career'],
        setup() {
            let router = useRouter();
            let goPage = (name) => router.push(`/careers/${name}`);

            return {goPage}
        }
    }
</script>

<style scoped>
.career-category {
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
