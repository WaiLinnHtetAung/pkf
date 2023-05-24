<template>
    <div class="event-section p-3">
        <div class="container p-3">
            <div class="events float-end">
                <a href="">ALL EVENT </a><i class="fa-solid fa-arrow-up"></i>
            </div>
            <h2>EVENTS</h2>
            <div class="row clear mt-2">
                <div class="col-lg-4 col-md-4 p-3">
                    <div class="event-item p-3">
                        <h4>
                            <a href="">PKF International Worldwide Tax Guide 2022-2023</a>
                        </h4>
                        <a href="" class="event-view">View Here <i class="fa-solid fa-chevron-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 p-3">
                    <div class="event-item p-3 event-2">
                        <h4>
                            <a href="">PKF International Worldwide Tax Guide 2022-2023</a>
                        </h4>
                        <a href="" class="event-view">View Here <i class="fa-solid fa-chevron-right ms-1"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 p-3">
                    <div class="event-item p-3 event-3">
                        <h4>
                            <a href="">PKF International Worldwide Tax Guide 2022-2023</a>
                        </h4>
                        <a href="" class="event-view">View Here <i class="fa-solid fa-chevron-right ms-1"></i></a>
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
    .event-section {
        background: #eee;
    }
    h2 {
        color: #00b5e2;
        font-size: 16px;
        font-weight: bold;
    }
    .clear {
        clear: both;
    }
    .events a {
        color: #00b5e2;
        font-size: 13px;
    }
    .events i {
        transform: rotate(45deg);
        margin-left: 5px;
        color: #00b5e2;
    }
    .event-item {
        background-image: url('../assets/images/event1.jpg');
        min-height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        background-size: cover;
    }
    .event-2 {
        background-image: url('../assets/images/event2.jpg');
    }
    .event-3 {
        background-image: url('../assets/images/event3.jpg');
    }
    .event-item h4 {
        font-size: 1.5rem;
    }
    .event-item h4 a {
        color: #fff;
        font-size: 20px;
    }
    .event-item .event-view {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        color: #fff;
        background: #6ebf08;
        font-size: 13px;
        padding: 2px 20px;
        border-radius: 5px;
    }
    .event-item i {
        color: #fff;
        font-size: 13px;
    }

    @media (max-width:990px) {
        .event-item h4 {
            font-size: 1rem;
        }
        .event-item h4 a {
            color: #fff;
            font-size: 16px;
        }
        .event-item .event-view {
            position: absolute;
            bottom: .2rem;
            left: .2rem;
            color: #fff;
            background: #6ebf08;
            font-size: 12px;
            padding: 3px 15px 0;
            border-radius: 5px;
        }
    }

    @media (max-width:450px) {
        .event-item h4 {
            font-size: 1.3rem;
        }
        .event-item h4 a {
            color: #fff;
            font-size: 19px;
        }
        .event-item .event-view {
            position: absolute;
            bottom: .5rem;
            left: .5rem;
            color: #fff;
            background: #6ebf08;
            font-size: 16px;
            padding: 3px 15px 0;
            border-radius: 5px;
        }
    }
</style>
