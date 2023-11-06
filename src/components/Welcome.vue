<template>
  <div class="welcome container my-4">
    <h3 class="mb-4">WELCOME TO PKF MYANMAR</h3>
    <p>
      We are partnered with a global network of PKF international. Our director
      and members have operated under the PKF brand since 2018 and have stood as
      a private accounting firm since 2013. Our company represents our
      commitment to providing our clients with a consistent experience and for
      each member to be an Independent ethical professional accountant, improve
      client satisfaction and confidence, and for us to grow together. PKF
      Myanmar
    </p>
    <div class="about-us">
      <a href="#">About us </a><i class="fa-solid fa-chevron-right"></i>
    </div>
    <div class="category-link">
      <router-link to="/services/assurance">
        <img src="../assets/images/assurance1.png" alt="" />
        <p>Audit & Assurance</p>
      </router-link>
      <router-link to="/services/advisory">
        <img src="../assets/images/advisory1.png" alt="" />
        <p>Advisory</p>
      </router-link>
      <router-link to="/services/tax">
        <img src="../assets/images/tax-legal1.png" alt="" />
        <p class="ms-4">Tax</p>
      </router-link>
      <router-link to="/services/business-solutions">
        <img src="../assets/images/business-solutions1.png" alt="" />
        <p>Business Solutions</p>
      </router-link>
      <router-link to="/services/technological&risk-services">
        <img src="../assets/images/risk-advisory1.png" alt="" />
        <p>Technology & Risk Services</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome p {
  text-align: justify;
  font-size: 16px;
  line-height: 40px;
}
.about-us {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
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

@media (max-width: 990px) {
  .welcome h3 {
    color: #0045b6;
    font-size: 18px;
  }
  .welcome p {
    text-align: justify;
    font-size: 15px;
  }
  .about-us a {
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    padding-top: 5px;
  }
}

@media (max-width: 450px) {
  .welcome {
    padding: 0 9%;
  }
  .welcome h3 {
    color: #0045b6;
    font-size: 16px;
  }
  .category-link {
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-top: 40px;
    gap: 1rem;
    flex-wrap: wrap;
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
}
</style>
