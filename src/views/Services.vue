<template>
  <section class="about">
    <img src="../assets/images/indo-carousel02.jpg" alt="" />
    <h2 v-if="service == 'assurance'">AUDIT & ASSURANCE</h2>
    <h2 v-if="service == 'our-services'">OUR SERVICES</h2>
    <h2 v-if="service == 'advisory'">ADVISORY</h2>
    <h2 v-if="service == 'tax'">TAX</h2>
    <h2 v-if="service == 'business-solutions'">BUSINESS SOLUTIONS</h2>
    <h2 v-if="service == 'technological&risk-services'">
      TECHNOLOGICAL & RISK SERVICES
    </h2>

    <div class="row mt-5 service-content">
      <ServicesCategory :service="service"></ServicesCategory>
      <div class="col-lg-9 col-md-8">
        <div v-if="service == 'our-services'">
          <OurServices></OurServices>
        </div>
        <div v-else-if="service == 'assurance'">
          <Assurance></Assurance>
        </div>
        <div v-else-if="service == 'advisory'">
          <Advisory></Advisory>
        </div>
        <div v-else-if="service == 'tax'">
          <Tax></Tax>
        </div>
        <div v-else-if="service == 'corporate'">
          <Corporate></Corporate>
        </div>
        <div v-else>
          <AccountFinicial></AccountFinicial>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AccountFinicial from "../components/AccountFinicial";
import Corporate from "../components/Corporate";
import Tax from "../components/Tax";
import Advisory from "../components/Advisory";
import OurServices from "../components/OurServices";
import Assurance from "../components/Assurance";
import ServicesCategory from "../components/ServicesCategory";
import { onMounted, onUpdated, ref } from "vue";
export default {
  components: {
    AccountFinicial,
    Corporate,
    Tax,
    Advisory,
    OurServices,
    Assurance,
    ServicesCategory,
  },
  props: ["service"],
  setup() {
    let category = ref("about-us");

    onUpdated(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { category };
  },
};
</script>

<style scoped>
.about {
  position: relative;
}
.about img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.4);
}
.service-content {
  padding: 30px 9%;
}
.about h2 {
  position: absolute;
  color: #fff;
  font-weight: bolder;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #104982;
  padding: 10px 50px;
}

@media (max-width: 990px) {
  .about h2 {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #104982;
    padding: 10px 30px;
    font-size: 20px;
    text-align: center;
  }
}

@media (max-width: 450px) {
  .about img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.4);
  }
  .about h2 {
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #104982;
    padding: 10px 30px;
    font-size: 16px;
    text-align: center;
  }
  .service-content {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 0px;
  }
}
</style>
