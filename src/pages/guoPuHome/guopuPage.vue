<template>
    <div class="guopuBox">
        <div class="guopuBoxHead">
            <div class="guopuHeadBox">
                <div class="guopuHeadBox_left">
                    <img style="width: 80%;height: 63%;" src="../../assets/guopuPage/logo.png" alt="">
                </div>
                <div class="guopuHeadBox_right">
                    <div class="xialaBox">
                        <a style="font-weight: bold;color: #000000" href="javascript:void(0)">
                            网站首页
                            <!--<Icon type="ios-arrow-down"></Icon>-->
                        </a>
                    </div>
                    <div class="xialaBoxtwo" @click="wenmeiCy">
                        <a style="font-weight: bold;color: #000000" href="javascript:void(0)">
                            文媒产业
                            <!--<Icon type="ios-arrow-down"></Icon>-->
                        </a>
                        <div class="xialaBoxtwoNav" v-show="wmeicy">
                            <div>《为健康寻源》</div>
                            <div>普惠学院</div>
                        </div>
                    </div>
                    <div class="xialaBoxtwo"  @click="jitJs">
                        <a style="font-weight: bold;color: #000000" href="javascript:void(0)">
                            集团介绍
                            <!--<Icon type="ios-arrow-down"></Icon>-->
                        </a>
                        <div class="xialaBoxthrNav" v-show="jituanjies">
                            <div>公司简介</div>
                            <div>集团架构</div>
                            <div>企业文化</div>
                            <div>员工天地</div>
                            <div>联系我们</div>
                        </div>
                    </div>
                    <div class="xialaBox">
                        <a style="font-weight: bold;color: #000000" href="javascript:void(0)">
                            集团产业
                            <!--<Icon type="ios-arrow-down"></Icon>-->
                        </a>
                    </div>
                    <div class="xialaBoxtwo"  @click="guoPuGongyi">
                        <a style="font-weight: bold;color: #000000" href="javascript:void(0)">
                            国普公益
                            <!--<Icon type="ios-arrow-down"></Icon>-->
                        </a>
                        <div class="xialaBoxtwoNav" v-show="guopuGyi">
                            <div>国普惠民</div>
                            <div>国普惠农</div>
                        </div>
                    </div>
                    <div class="xialaBox" trigger="click">
                        <a style="font-weight: bold;color: #000000" href="javascript:void(0)">
                            创业就业
                            <!--<Icon type="ios-arrow-down"></Icon>-->
                        </a>
                    </div>
                    <div class="xialaBox" trigger="click">
                        <a style="font-weight: bold;color: #000000" href="javascript:void(0)">
                            合作商机
                            <!--<Icon type="ios-arrow-down"></Icon>-->
                        </a>
                    </div>
                </div>
            </div>
            <div class="swiperBox">
                <Carousel autoplay v-model="value2" loop
                          :autoplay="setting.autoplay"
                          :autoplay-speed="setting.autoplaySpeed"
                          :dots="setting.dots"
                          :radius-dot="setting.radiusDot"
                          :trigger="setting.trigger"
                          :arrow="setting.arrow">
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img style="width: 84%;" src="../../assets/guopuPage/guopuSwiper.png" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img style="width: 84%;" src="../../assets/guopuPage/guopuSwiper.png" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img style="width: 84%;" src="../../assets/guopuPage/guopuSwiper.png" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img style="width: 84%;" src="../../assets/guopuPage/guopuSwiper.png" alt="">
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
        <div class="guopuBoxNav">
            <div class="guopuBoxNavBox">
                <div class="guopuBoxNavBox_head">
                    <div>子分公司</div>
                    <div>资讯动态</div>
                    <div>荣誉资质</div>
                </div>
                <div class="guopuBoxNavBox_nav">
                    <div class="navBox_one">
                        <div class="navBox_onehead">
                            <div style="font-size: 0.14rem;color: #ffffff">子分公司</div>
                            <div style="font-size: 0.11rem;color: #ffffff">&#160;&#160;&#160;Subsidiary</div>
                        </div>
                        <div class="navBox_onenav">
                            <div style="font-size: 0.11rem;color: #ffffff;padding-top: 0.2rem;width: 80%;display: flex;align-items: flex-start">国二研医疗健康投资股份公司</div>
                            <div style="font-size: 0.11rem;color: #ffffff;width: 80%;display: flex;align-items: flex-start">国普房产托管（海南）有限公司</div>
                            <div style="font-size: 0.11rem;color: #ffffff;padding-bottom: 0.2rem;width: 80%;display: flex;align-items: flex-start">国普医养结合海南有限公司</div>
                        </div>
                    </div>
                    <div class="navBox_two">
                        <div class="navBox_onehead">
                            <div style="font-size: 0.14rem;color: #ffffff">资讯动态 </div>
                            <div style="font-size: 0.11rem;color: #ffffff">&#160;&#160;&#160;Dynamic information</div>
                        </div>
                        <div class="navBox_onenav">
                            <div style="width:100%;font-size: 0.11rem;color: #ffffff;padding-top: 0.2rem;display: flex;align-items: center;justify-content: center;flex-direction: row">
                                <span style="width: 77%;display: flex;align-items: flex-end;"> 国普惠民政策研究课题组召开研讨会</span><span style="width: 16%;">01-22</span>
                            </div>
                            <div style="width:100%;font-size: 0.11rem;color: #ffffff;display: flex;align-items: center;justify-content: center;flex-direction: row">
                                <span style="width: 77%;display: flex;align-items: flex-end;">中铁妙天集团携手国普惠民工程</span><span style="width: 16%;">01-16</span>
                            </div>
                            <div style="width:100%;font-size: 0.11rem;color: #ffffff;padding-bottom: 0.2rem;display: flex;align-items: center;justify-content: center;flex-direction: row">
                                <span style="width: 77%;display: flex;align-items: flex-end;">《为健康寻源》栏目新闻发布会在京举行</span><span style="width: 16%;">08-08</span>
                            </div>
                        </div>
                    </div>
                    <div class="navBox_thr">
                        <div class="navBox_onehead">
                            <div style="font-size: 0.14rem;color: #ffffff">荣誉资质</div>
                            <div style="font-size: 0.11rem;color: #ffffff">&#160;&#160;&#160;Honor</div>
                        </div>
                        <div class="navBox_thrBox">
                            <div class="imgbOx">
                                <div class="imgbOxImg">
                                    <img style="width: 100%;height: 85%" src="../../assets/guopuPage/2.jpg" alt="">
                                </div>
                                <div class="imgbOxImg">
                                    <img style="width: 100%;height: 85%" src="../../assets/guopuPage/3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guopuBoxFoot">
            <div>意见反馈  |  网站收录  |  关于我们  |  联系我们</div>
            <div>版权所有：Copyright :emoji: 2015-2020 guopu.co, All Rights Reserved 国普健康产业集团有限公司</div>
            <div style="display: flex;align-items: center;justify-content: center;flex-direction: row">
                <img style="width: 8%;height: 100%" src="../../assets/footer/footer-1.jpg" alt="">
                <img style="width: 8%;height: 100%;margin-left: 0.1rem" src="../../assets/footer/footer-2.png" alt="">
                <span @click="beianhao">&#12288;&#12288;ICP许可证号：琼ICP备19005177号-1</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "guopuPage",
        data() {
            return {
                value2: 0,
                wmeicy:false,
                jituanjies:false,
                guopuGyi:false,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'none',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },
        created() {},
        mounted(){},
        methods:{
            wenmeiCy(){
                this.wmeicy = !this.wmeicy
                if(this.wmeicy === true){
                    this.jituanjies= false
                    this.guopuGyi = false
                }

            },
            jitJs(){
                this.jituanjies = !this.jituanjies
                if(this.jituanjies === true){
                    this.wmeicy= false
                    this.guopuGyi = false
                }
            },
            guoPuGongyi(){
                this.guopuGyi = !this.guopuGyi
                if(this.guopuGyi === true){
                    this.wmeicy= false
                    this.jituanjies = false
                }
            },
            beianhao(){
                location.href = 'http://www.beian.miit.gov.cn/'
            }
        }
    }
</script>
<style src="../../style/guoPuHome/guopuPage.css" scoped></style>
<style>
    .ivu-select-dropdown{
        width: 80px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background-color: #3b83d9 !important;
    }
    .ivu-dropdown-menu{
        min-width:80px !important;
    }
    .ivu-dropdown-item{
        font-size: 0.13rem !important;
        color: #ffffff !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        /*background-color: aqua !important;*/
    }
    .ivu-dropdown-item:hover{
        background:#0e57cb !important;
    }
    .ivu-carousel{
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .ivu-carousel-arrow{
        width: 10% !important;
        height: 30% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .ivu-carousel-arrow.right{
        right:-10px !important;
        top: 50px !important;
    }
    .ivu-carousel-arrow.left{
        left:-10px !important;
        top: 50px !important;
    }
</style>
