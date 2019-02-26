<template>
    <div class="home">

        <Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow">
            <CarouselItem>
                <div class="demo-carousel">
                    <img class="shufflingFigure" src="../img/Home/LB1.jpg">
                    <div class="shufflingText">123</div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img class="shufflingFigure" src="../img/Home/LB2.jpg">
                    <div class="shufflingText">456</div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img class="shufflingFigure" src="../img/Home/LB3.jpg">
                    <div class="shufflingText">789</div>
                </div>
            </CarouselItem>

        </Carousel>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "home",
    components: {},
    data() {
        return {
            value3: 0,
            setting: {
                autoplay: false,
                autoplaySpeed: 2000,
                dots: "inside",
                radiusDot: false,
                trigger: "click",
                arrow: "hover"
            }
        };
    },
    computed: {},
    methods: {},
    created() {}
};
</script>
<style>
.shufflingFigure {
    height: 100%;
    width: 100%;
}
.demo-carousel {
    position: relative;
    height: 500px;
}
.shufflingText {
    position: absolute;
    top: 20px;
    width: 100%;
    height: 100%;
}
</style>

