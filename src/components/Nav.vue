<template>
    <nav class="navbar navbar-expand-sm bg-info" id="navbar-head">
        <div class="nav-section">
            <a class="navbar-brand" href="#"><i class="fa-solid fa-house-chimney"></i></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>


                    <li class="nav-item service-menu">
                        <a class="nav-link nav2-info-container" href=""><span>Products & Services</span></a>
                        <div class="dropdown">
                            <div class="fusion-megamenu-widgets-container second-level-widget">
                                <div id="media_image-3" class="widget widget_media_image">
                                    <img src="../assets/images/logo.jpg"
                                        class="image wp-image-22968  attachment-full size-full" alt="">
                                </div>
                            </div>
                            <ul>
                                <li class="dropdown-link"><a href="#">Distribution Transformer<i
                                            class="uil uil-angle-right"></i></a></li>
                                <li class="dropdown-link"><a href="#">Power Transformer<i
                                            class="uil uil-angle-right"></i></a></li>
                                <li class="dropdown-link"><a href="#">Panel<i
                                            class="uil uil-angle-right"></i></a></li>
                                <li class="dropdown-link"><a href="#">Package Type Transformer<i
                                            class="uil uil-angle-right"></i></a></li>
                            </ul>
                            <ul>
                                <li class="dropdown-link"><a href="#">Installation Services<i
                                            class="uil uil-angle-right"></i></a></li>
                                <li class="dropdown-link"><a href="#">After Sale Services<i
                                            class="uil uil-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    











                    
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #navbar-head {
        padding: .5rem 9%;
    }
    .nav-section {
        display: flex;
        flex-wrap: inherit;
        align-items: center;
        justify-content: space-between;
    }
    img {
        width: 50px;
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
        background-color: rgba(0, 0, 0, 0.85);
        display: flex;
    }
    .dropdown ul {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 10px 50px;
    }

    .dropdown ul li {
        margin: 10px 30px;
        list-style: none;
    }
    .dropdown-link>a {
        display: flex;
        text-decoration: none;
        color: #fff;
        padding: .5rem 0;
        font-size: 1rem;
        align-items: center;
        vertical-align: middle;
        transition: .3s;
        cursor: pointer !;
    }
    .dropdown-link:hover>a {
        text-decoration: underline;
    }
    .dropdown-link:first-child:hover~.arrow {
        background-color: #3498db;
    }
    .dropdown-link {
        position: relative;
    }
    .dropdown-item {
        margin: 0 auto !important;
    }
    .fusion-megamenu-widgets-container {
        width: 25%;
        display: block;
        padding: 0 34px;
        margin: auto 10px auto 50px;
        line-height: 1.8;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        letter-spacing: 0;
        font-style: normal;
    }
    .widget_media_image {
        border-style: solid;
        border-color: transparent;
        border-width: 0px;
    }
    .wp-image-22968 {
        max-width: 100%;
        height: auto;
        border-style: none;
        vertical-align: top;
        overflow-clip-margin: content-box;
        overflow: clip;
        width: 249px;
        aspect-ratio: auto 249 / 83;
        height: 120px;
    }
    .service-menu:hover>.dropdown {
        transform: translate(0, 0);
        pointer-events: auto;
        opacity: 1;
        visibility: visible;
    }
    .dropdown-link .uil {
        font-size: 1.5rem;
        font-weight: 600;
        padding-top: auto;
        padding-bottom: auto;
        margin: auto 0 auto 10px;
        color: #c02;
        justify-content: inherit;
        vertical-align: middle !important;
    }
   
</style>
