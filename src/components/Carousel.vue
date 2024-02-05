<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide pb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/images/carousel4.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption text-start">
          <h3>
            PKF Hadiwinata is a top 10 accounting <br />
            &eadquartered in the heart
          </h3>
          <button class="btn btn-primary">Click</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/indo-carousel01.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption text-start">
          <h3>
            PKF Hadiwinata is a top 10 accounting <br />
            &eadquartered in the heart
          </h3>
          <button class="btn btn-primary">Click</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/indo-carousel02.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption text-start">
          <h3>
            PKF Hadiwinata is a top 10 accounting <br />
            &eadquartered in the heart
          </h3>
          <button class="btn btn-primary">Click</button>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/indo-carousel03.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption text-start">
          <h3>
            PKF Hadiwinata is a top 10 accounting <br />
            &eadquartered in the heart
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetutemporibus tempore sunt
            repellendus, distinctio amet dolor?
          </p>
          <button class="btn btn-primary">Click</button>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-indicators button {
  background-color: rgb(78, 78, 195);
}
.carousel-indicators button.active {
  background-color: darkblue;
}
.carousel-caption {
  margin-bottom: 50px;
  margin-left: -20px;
}

.carousel-item img {
  width: 100%;
  height: 700px;
  object-fit: cover;
}
.carousel-caption h3 {
  color: #fff;
  font-weight: bold;
  font-size: 40px;
}
.carousel-caption p {
  color: #fff;
  font-size: 20px;
}
.carousel-caption button {
  background: #fff;
  color: blue;
  padding: 5px 30px;
  border: 0;
  border-radius: 12px;
}

@media (max-width: 990px) {
  .carousel-caption {
    margin-bottom: 25px;
    margin-left: -20px;
  }
  .carousel-item img {
    height: 320px;
  }
  .carousel-caption h3 {
    color: #fff;
    font-weight: bold;
    font-size: 22px;
  }
  .carousel-caption p {
    color: #fff;
    font-size: 14px;
  }
  .carousel-caption button {
    background: #fff;
    color: blue;
    padding: 3px 20px;
    border: 0;
    border-radius: 12px;
    font-size: 13px;
  }
}

@media (max-width: 450px) {
  .carousel-item img {
    height: 250px;
  }
  .carousel-caption {
    margin-bottom: 30px;
    margin-left: 0px;
  }
  .carousel-caption h3 {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }
  .carousel-caption p {
    color: #fff;
    font-size: 12px;
  }
  .carousel-caption button {
    background: #fff;
    color: blue;
    padding: -2px 12px;
    border: 0;
    border-radius: 12px;
    font-size: 9px;
  }
}
</style>
