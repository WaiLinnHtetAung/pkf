<template>
  <div class="col-lg-3 col-md-4 about-category">
    <div
      class="side-link"
      :class="{ 'active-link': service == 'assurance' }"
      @click="goPage('assurance')"
    >
      <router-link
        to="/services/assurance"
        :class="{ 'text-white': service == 'assurance' }"
        >AUDIT & ASSURANCE</router-link
      >
    </div>
    <div
      class="side-link"
      :class="{ 'active-link': service == 'advisory' }"
      @click="goPage('advisory')"
    >
      <router-link
        to="/services/advisory"
        :class="{ 'text-white': service == 'advisory' }"
        >ADVISORY</router-link
      >
    </div>
    <div
      class="side-link"
      :class="{ 'active-link': service == 'tax' }"
      @click="goPage('tax')"
    >
      <router-link
        to="/services/tax"
        :class="{ 'text-white': service == 'tax' }"
        >TAX
      </router-link>
    </div>
    <div
      class="side-link"
      :class="{ 'active-link': service == 'corporate' }"
      @click="goPage('corporate')"
    >
      <router-link
        to="/services/corporate"
        :class="{ 'text-white': service == 'corporate' }"
        >CORPORATE SECRETARIAL SERVICE
      </router-link>
    </div>
    <div
      class="side-link"
      :class="{ 'active-link': service == 'account-financial' }"
      @click="goPage('account-financial')"
    >
      <router-link
        to="/services/account-financial"
        :class="{ 'text-white': service == 'account-financial' }"
        >ACCOUNTING & FINANCIAL REPORTING
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["service"],
  setup(props) {
    let router = useRouter();
    let goPage = (name) => router.push(`/services/${name}`);

    return { goPage };
  },
};
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
  transition: 0.5s ease;
  cursor: pointer;
}
.side-link:hover {
  background: #0045b6;
}
.side-link a {
  padding: 2px 5px;
  transition: 0.5s ease;
  color: #003594;
  font-size: 15px;
  font-weight: bold;
}
.side-link:hover a {
  padding: 0 10px;
  color: #e7e8ea;
}
.active-link {
  background: #003594;
  padding: 5px 10px;
}
</style>
