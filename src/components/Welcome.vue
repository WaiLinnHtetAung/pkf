<template>
    <div class="welcome container my-4">
        <h3 class="mb-4">WELCOME TO PKF MYANMAR</h3>
        <p class="fw-bold">
            PKF Hadiwinata is a top 10 accounting & professional services firm in Indonesia, headquartered in the heart of the financial district of Jakarta, and is a member of PKF International’s global family of legally independent firms.
        </p>
        <p>
            The Certified Public Accounting firm Paul Hadiwinata, Hidajat, Arsono, Retno, Palilingan & Rekan was founded in 1987 by Drs. Paul Hadiwinata, CA, CPA; and has been a member of PKF International since 1989.
        </p>
        <p>
            We are committed to promoting and embracing constructive reform and to helping clients follow good business practices, while increasing value for their stakeholders.
        </p>
        <p>
            From startups to multinationals and everything in between, we offer world-class support with the passion, teamwork, clarity, quality and integrity you need to succeed.
        </p>
        <div class="about-us">
            <a href="#">About us </a><i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="category-link">
            <router-link to="/services/assurance">
                <img src="../assets/images/assurance1.png" alt="">
                <p>Audit & Assurance</p>
            </router-link>
            <router-link to="/services/advisory">
                <img src="../assets/images/advisory1.png" alt="">
                <p>Advisory</p>
            </router-link>
            <router-link to="/services/tax">
                <img src="../assets/images/tax-legal1.png" alt="">
                <p class="ms-4">Tax</p>
            </router-link>
            <router-link to="/services/business-solutions">
                <img src="../assets/images/business-solutions1.png" alt="">
                <p>Business Solutions</p>
            </router-link>
            <router-link to="/services/technological&risk-services">
                <img src="../assets/images/risk-advisory1.png" alt="">
                <p>Technology & Risk Services</p>
            </router-link> 
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .welcome h3 {
        color: #0045b6;
    }
    .welcome p {
        text-align: justify;
        font-size: 13px;
    }
    .about-us {
        display: inline-flex;
        align-items: center;
        gap: .8rem;
        background: #6ebf08;
        padding: 3px 16px;
        border-radius: 10px;
    }
    .about-us a {
        text-decoration: none;
        color: #fff;
    }
    .about-us i {
        font-size: 12px;
        color: #fff;
    }
    .category-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        margin-top: 40px;
    }
    .category-link a {
        text-decoration: none;
        text-align: center;
    }
    .category-link p {
        margin-top: 15px;
        color: #978173;
        font-size: 13px;
    }
</style>
