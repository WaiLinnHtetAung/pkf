<template>
  <div>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp;
      <router-link to="/about-us" @click="about">About-us</router-link
      >&nbsp;/&nbsp;Two
    </p>
    <h4>Thida & Partners Ltd</h4>
    <p style="text-indent: 50px">
      Thida & Partners Ltd. provides audit, accounting, tax compliance and
      financial due diligence services. It was founded by Thida Cho Win and was
      established in Yangon in 2013. Thida is a qualified CPA with more than 25
      years of experience with a specialized audit and tax firm in Myanmar and
      has experience as an auditor and tax advisor serving Myanmar and
      international enterprises. The firm has been partnered with the global
      network of PKF International since 2018.
    </p>
  </div>
</template>

<script>
export default {
  setup(prop, { emit }) {
    let about = () => emit("about");

    return { about };
  },
};
</script>

<style scoped></style>
