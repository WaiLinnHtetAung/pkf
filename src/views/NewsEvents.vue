<template>
    <section class="events">
        <img class="event-img" src="../assets/images/newspaper.jpg" alt="">
        <h2>NEWS & EVENTS</h2>

        <div class="row mt-5 events-header">
            <div class="col-lg-3 col-md-4">
                <div class="side-link" :class="{'active-link' : category == 'one'}" @click="category = 'one'">
                    <a :class="{'text-white' : category == 'one'}">Events</a>
                </div>
                
            </div>
            <div class="col-lg-9 col-md-8">
                <a href="" class="float-end contact-btn me-4">Contact Us</a>
                <p class="show-link">
                    <router-link to="/">Home</router-link>&nbsp;/&nbsp;
                    Events
                </p>

                <div class="row mt-3 pt-3">
                    <div class="col-lg-6 mb-3">
                        <div class="event-card">
                            <img src="../assets/images/news.jpg" alt="">
                            <h5>23-05-2023</h5>
                            <h4>Sosialisasi Program Pengungkapan Sukarela (PPS)</h4>
                            <p>Lorem ipsum dolor, molestias adipisci quod enim eius non nostrum? Vero magni tempora odio. Voluptas exercitationem est numquam animi, praesentium officia?</p>
                            <router-link to="" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="event-card">
                            <img src="../assets/images/news1.jpg" alt="">
                            <h5>23-05-2023</h5>
                            <h4>Sosialisasi Program Pengungkapan Sukarela (PPS)</h4>
                            <p>Lorem ipsum dolor, molestias adipisci quod enim eius non nostrum? Vero magni tempora odio. Voluptas exercitationem est numquam animi, praesentium officia?</p>
                            <router-link to="" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="event-card">
                            <img src="../assets/images/event1.jpg" alt="">
                            <h5>23-05-2023</h5>
                            <h4>Sosialisasi Program Pengungkapan Sukarela (PPS)</h4>
                            <p>Lorem ipsum dolor, molestias adipisci quod enim eius non nostrum? Vero magni tempora odio. Voluptas exercitationem est numquam animi, praesentium officia?</p>
                            <router-link to="" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="event-card">
                            <img src="../assets/images/event2.jpg" alt="">
                            <h5>23-05-2023</h5>
                            <h4>Sosialisasi Program Pengungkapan Sukarela (PPS)</h4>
                            <p>Lorem ipsum dolor, molestias adipisci quod enim eius non nostrum? Vero magni tempora odio. Voluptas exercitationem est numquam animi, praesentium officia?</p>
                            <router-link to="" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-12 mb-3 event-card event-bar p-3 rounded-3">
                        <h5>23-05-2023</h5>
                        <h4>Sosialisasi Program Pengungkapan Sukarela (PPS)</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium natus culpa sed ducimus obcaecati, dolorem optio quam voluptas repellat est.</p>
                        <router-link to="" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                    </div>
                    <div class="col-12 mb-3 event-card event-bar p-3 rounded-3">
                        <h5>23-05-2023</h5>
                        <h4>Sosialisasi Program Pengungkapan Sukarela (PPS)</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium natus culpa sed ducimus obcaecati, dolorem optio quam voluptas repellat est.</p>
                        <router-link to="" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, onUpdated } from 'vue'
    export default {
        setup() {
            onUpdated(() => {
            window.scrollTo(0,0);
            })
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
    .events {
        position: relative;
    }
    .events .event-img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
        filter: brightness(.4);
    }
    .events h2 {
        position: absolute;
        color: #fff;
        font-weight: bolder;
        top: 8%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #104982;
        padding: 10px 60px;
    }
    .events-header {
        padding: 0px 9%;
    }
    .side-link {
        margin-left: 30px;
    }
    .event-card {
        padding: 5px 10px;
    }
    .event-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center;
    }
    .event-card h5 {
        font-size: 16px;
        color: #6fbf08;
        margin: 10px 0;
    }
    .event-card h4 {
        color: #a2d7ea;
        font-size: 23px;
    }
    .event-card p {
        font-size: 16px;
    }
    .event-bar {
        background: #f7f7f7;
    }
    .read-more {
        background: #6ebf08;
        color: #fff;
        font-size: 13px;
        padding: 5px 25px;
        border-radius: 5px;
        transition: .5s ease;
    }

    .read-more:hover {
        transform: scale(1.1);
    }
    .read-more i {
        color: #fff;
        margin-left: 5px;
        font-size: 14px;
    }

    @media (max-width:990px) {
        .events .event-img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            object-position: center;
            filter: brightness(.4);
        }
        .events h2 {
            position: absolute;
            color: #fff;
            font-weight: bolder;
            top: 8%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #104982;
            padding: 10px 40px;
            font-size: 20px;
        }
        .event-card h4 {
            color: #a2d7ea;
            font-size: 20px;
        }
        .event-card p {
            font-size: 13px;
        }
    }

    @media (max-width: 450px) {
        .events .event-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            object-position: center;
            filter: brightness(.4);
        }
        .events h2 {
            position: absolute;
            color: #fff;
            font-weight: bolder;
            top: 5%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #104982;
            padding: 10px 40px;
            font-size: 14px;
        }
        .event-card h4 {
            color: #a2d7ea;
            font-size: 18px;
        }
        .event-card h5 {
            font-size: 14px;
        }
        .event-card p {
            font-size: 13px;
        }
        .events-header {
            display: flex;
            flex-direction: column-reverse;
        }
    }
</style>
