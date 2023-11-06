<template>
  <div>
    <a href="" class="float-end contact-btn me-4">Contact Us</a>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp;
      <router-link to="/services/our-services">Services</router-link
      >&nbsp;/&nbsp; Tax
    </p>
    <div class="about-content">
      <h3>Taxation Services</h3>
      <p>
        Corporate taxation in Myanmar can be a complex and dynamic situation, as
        both legal theory and the practice of the authorities must be taken into
        account. We advise and assist you in implementing taxation through our
        strong local relationships, experienced local tax professionals, and
        international expertise.
      </p>
      <p>We provide tax compliance services, including:</p>
      <ul>
        <li>Corporate tax compliance</li>
        <li>Corporate tax advisory</li>
        <li>Incentive and tax exemption</li>
        <li>Tax transaction support</li>
        <li>Tax Due diligence</li>
        <li>Personal income tax compliance</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 450px) {
  .about-content h3 {
    font-size: 20px;
  }
  .about-content p {
    font-size: 12px;
    color: rgb(79, 80, 81);
  }
}
</style>
