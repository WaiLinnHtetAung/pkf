<template>
  <header>
    <div class="container">
      <div class="social-media">
        <div class="twitter"><i class="fa-brands fa-square-twitter"></i></div>
        <div class="linkedin"><i class="fa-brands fa-linkedin"></i></div>
        <div class="fb"><i class="fa-brands fa-square-facebook"></i></div>
        <div class="ig"><i class="fa-brands fa-square-instagram"></i></div>
      </div>
    </div>
  </header>

  <div
    id="LogoBox"
    class="container d-flex justify-content-between align-items-center px-3 logo-box"
  >
    <a href="/" id="Logo" title="PKF Hadiwinata"
      ><img src="../assets/images/logo.png" alt=""
    /></a>

    <p class="fs-3 text-secondary fw-bold pt-2">PKF MYANMAR</p>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light main-navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i
          class="fa-solid fa-house-chimney"
          :class="{ 'd-none': isSticky > 105, 'd-block': !isSticky > 105 }"
        ></i>
        <img
          src="../assets/images/logo.png"
          :class="{ 'd-none': isSticky < 115, 'd-bock': isSticky > 105 }"
          alt=""
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-3" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/about-us"
              class="nav-link"
              :class="{ 'active-menu': currentRoute == '/about-us' }"
              >ABOUT US</router-link
            >
          </li>

          <li class="nav-item service-menu">
            <router-link
              to="/services/our-services"
              @mouseenter="showSubMenu"
              @click="toggleSubMenu"
              class="nav-link services nav2-info-container"
              :class="{
                'active-menu': currentRoute.substring(0, 8) == '/service',
              }"
              >SERVICES
              <i
                class="ms-2 fa-solid fa-caret-down text-primary"
                :class="{
                  'text-white': currentRoute.substring(0, 8) == '/service',
                }"
              ></i
            ></router-link>
            <div class="dropdown" v-if="isShow">
              <div class="container pt-3">
                <div class="row w-100">
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/assurance.png"
                          alt=" Audit &amp; Assurance"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <router-link to="/services/assurance"
                          ><h5
                            :class="{
                              'active-sub-menu':
                                currentRoute == '/services/assurance',
                            }"
                          >
                            Audit &amp; Assurance
                          </h5></router-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/advisory.png"
                          alt=" Advisory"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <a href="/services/advisory"><h5>Advisory</h5></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img src="../assets/images/tax-legal.png" alt="Tax" />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <a href="/services/tax"><h5>Tax</h5></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/business-solutions.png"
                          alt="Business Solutions"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <a href="/services/corporate"
                          ><h5>Corporate Secretarial</h5></a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4 mt-3">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/finance.png"
                          alt="Technology &amp; Risk Services"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <a href="/services/account-financial"
                          ><h5>Accounting and Financial Reporting</h5></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <router-link
              to="/news-events"
              class="nav-link"
              :class="{
                'active-menu': currentRoute.substring(0, 12) == '/news-events',
              }"
              >NEWS & EVENTS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/careers/careers"
              class="nav-link"
              :class="{
                'active-menu': currentRoute.substring(0, 8) == '/careers',
              }"
              >CAREERS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/contact-us"
              class="nav-link"
              :class="{ 'active-menu': currentRoute == '/contact-us' }"
              >CONTACT US</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: ["currentRoute"],
  setup() {
    let isSticky = ref(false);
    let isShow = ref(false);

    let showSubMenu = () => {
      if (window.innerWidth > 990) {
        isShow.value = true;
      }
    };

    let toggleSubMenu = () => {
      if (window.innerWidth < 990) {
        isShow.value = !isShow.value;
      }
    };

    let handleScroll = () => {
      isSticky.value = window.pageYOffset;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return { isSticky, isShow, showSubMenu, toggleSubMenu };
  },
};
</script>

<style scoped>
.container {
  padding: 0 15px;
}
.main-navbar {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
}
img {
  width: 80px;
}

/* ---top header---  */
header {
  background: #555658;
}
.social-media {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.social-media i {
  font-size: 20px;
  color: #fff;
}

/* ---top header end---  */

/* ---logo box navbar--- */
#LogoBox {
  padding-top: 10px;
}

/* --- logo box navbar end---  */

/* ---main navbar---  */
.row img {
  width: 80%;
  height: auto;
}

.navbar-brand i {
  font-size: 22px;
}
.row .col-lg-8 a h5 {
  font-size: 16px;
  text-align: left !important;
}

.row .col-lg-8 a {
  text-decoration: none;
}

.nav-item > a {
  margin-left: 10px;
}

.nav-link {
  color: #0045b6 !important;
  font-size: 13px;
  font-weight: 600;
}
.navbar-brand i {
  color: #0045b6;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  transform: translateY(10px);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  background-color: #e7e8ea;
  display: flex;
}

.service-menu:hover > .dropdown {
  transform: translate(0, 0);
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
}
.service-menu .dropdown img {
  width: 50px !important;
}

.dropdown h5 {
  font-size: 14px !important;
}

.active-menu {
  background: #0045b6;
  color: #fff !important;
  font-size: 10px;
  font-weight: 400;
}
.active-sub-menu {
  color: #6ebf08;
}

/* --- main navbar end---  */

@media (max-width: 990px) {
  .logo-box {
    display: none !important;
  }
  .dropdown {
    position: static;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(10px);
    opacity: 1;
    visibility: visible;
    display: block;
    transition: 0.5s;
    background-color: #e7e8ea;
    margin-bottom: 10px;
    padding: 0 0 10px;
  }
  .col-md-12.col-lg-3.col-sm-12 {
    margin: 10px 0 0 !important;
  }
  .navbar-toggler-icon {
    width: 1rem;
    height: 1rem;
  }
  .navbar-toggler {
    padding: 5px 10px;
  }
}
</style>
