<template>
    <div class="news-section container">
        <div class="row">
            <div class="col-lg-5 col-md-12 h-100 p-3 mb-3 event-main">
                <div class="title p-3">
                    <span>23-05-2023</span>
                    <h2>Sosialisasi Program Pengungkapan Sukarela (PPS)</h2>
                </div>
                
                <img src="../assets/images/news.jpg" alt="">
                <router-link to="/news-events/event1" class="read-more">
                    Read More <i class="fa-solid fa-chevron-right"></i>
                </router-link>
            </div>
            <div class="col-lg-7 col-md-12 p-3 px-md-5 news-bar">
                <div class="news-head p-3">
                    <h2 class="">LATEST NEWS</h2>

                    <div class="news">
                        <a href="">ALL NEWS</a><i class="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
                <div class="row latest-news">
                    <div class="col-lg-6 col-md-6">
                        <div class="news-card">
                            <h5>23-05-2023</h5>
                            <h4>PKF CAP honoured as employer of choice</h4>
                            <p>We take great pleasure in reporting that PKF CAP has been recognised under renowned employer accreditation schemes.</p>
                            <router-link to="/news-events/event1" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="news-card">
                            <h5>23-05-2023</h5>
                            <h4>PKF-CAP LLP featured in Good Company Report 2021/22</h4>
                            <p>We are delighted to report that PKF-CAP LLP has been featured in Enterprise Singapore’s Good Company Report 2021/22</p>
                            <router-link to="/news-events/event1" class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .news-section {
        padding: 50px 10px 30px;
    }
    .title {
        background: #0045b6;
    }
    .title span, .title h2 {
        color: #fff;
    }
    .title h2 {
        font-size: 25px;
    }
    img {
        width: 100%;
        height: auto;
        vertical-align: middle;
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

    .news-head h2 {
        color: #0045b6;
        font-size: 18px;
        font-weight: bold;
        margin: 0 !important;
    }

    .news-head {
        box-shadow: 0 .2rem .5rem rgb(131, 123, 123);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .news a {
        color: #00b5e2;
        font-size: 12px;
        font-weight: bold;
    }
    .news i {
        transform: rotate(45deg);
        margin-left: 5px;
        color: #00b5e2;
        font-weight: bold;
    }

    .news-card {
        position: relative;
        min-height: 350px;
        padding: 5px 10px;
        border-radius: 12px;
        transition: .5s ease;
    }
    .news-card:hover {
        background: rgb(211, 207, 207);
    }
    .latest-news {
        padding: 5px 10px;
        margin-top: 20px;
    }
    .latest-news h5 {
        color: #6ebf08;
    }
    .latest-news h4 {
        color: #00b5e2;
        font-size: 23px;
    }
    .latest-news p {
        margin-top: 20px;
        overflow: hidden;
    }
    .news-card .read-more {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }

    @media (max-width:990px) {
        .title h2 {
            font-size: 25px;
        }
        img {
            width: 100%;
            height: auto;
            vertical-align: middle;
        }
        .event-main {
            padding: 0 9% !important;
            margin-bottom: 20px;
        }
        .news-head h2 {
            font-size: 16px;
            font-weight: bold;
            margin: 0 !important;
        }

        .news-head {
            padding: .7rem !important;
        }
        .news-card {
            position: relative;
            min-height: 250px;
            padding: 5px 10px;
            border-radius: 12px;
            transition: .5s ease;
            margin-top: 10px;
        }
        .latest-news h5 {
            color: #6ebf08;
            font-size: 16px;
        }
        .latest-news h4 {
            color: #00b5e2;
            font-size: 18px;
        }
        .latest-news p {
            overflow: hidden;
            font-weight: 400 !important;
            font-size: 13px;
        }
        .news-card .read-more {
            position: absolute;
            bottom: 20px;
            left: 20px;
        }
    }

    @media (max-width:450px) {
        .title h2 {
            font-size: 18px;
        }
        .event-main .read-more {
            background: #6ebf08;
            color: #fff;
            font-size: 12px;
            padding: 5px 25px ;
            display: inline-block;
            margin-left: 10px;
     
        }
        .news-bar {
            padding: 0 9% !important;
            margin-top: 15px;
        }
        .news-head h2 {
            font-size: 13px;
        }

        .news-head {
            padding: .7rem !important;
        }
        .news-card {
            position: relative;
            min-height: 250px;
            padding: 10px 20px;
            border-radius: 12px;
            transition: .5s ease;
            margin-bottom: 15px;
            background: rgb(250, 245, 245);
        }
        .latest-news h5 {
            color: #6ebf08;
            font-size: 16px;
        }
        .latest-news h4 {
            color: #00b5e2;
            font-size: 18px;
        }
        .latest-news p {
            overflow: hidden;
            font-weight: 400 !important;
            font-size: 13px;
        }
        .news-card .read-more {
            position: absolute;
            bottom: 20px;
            left: 20px;
        }
    }
</style>
