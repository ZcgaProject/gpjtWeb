<template>
    <div class="guopubigBox">
        <div class="topBox">
            <div class="logoBox">
                <img style="width: 70%;height: 65%" src="../../assets/guopuPage/logo.png" alt="">
            </div>
            <div class="yiDxuan">
                <div class="yiDxuanBox">
                    <van-tabs v-model="active"  @click="onClick">
                        <van-tab title-style="flex-basis: 24%" title="网站首页"></van-tab>
                        <van-tab title-style="flex-basis: 24%" title="文媒产业">
                            <van-action-sheet v-model="show" :actions="actions" :close-on-click-overlay="false" @select="onSelect"/>
                        </van-tab>
                        <van-tab title-style="flex-basis: 24%" title="集团介绍">
                            <van-action-sheet v-model="showtwo" :actions="actionstwo" :close-on-click-overlay="false" @select="onSelecttwo"/>
                        </van-tab>
                        <van-tab title-style="flex-basis: 24%" title="集团产业"></van-tab>
                        <van-tab title-style="flex-basis: 24%" title="国普公益">
                            <van-action-sheet v-model="showthr" :actions="actionsthr" :close-on-click-overlay="false" @select="onSelectthr"/>
                        </van-tab>
                        <van-tab title-style="flex-basis: 24%" title="创业就业"></van-tab>
                        <van-tab title-style="flex-basis: 24%" title="合作商机"></van-tab>
                    </van-tabs>
                </div>
            </div>
            <div class="yiDswiper">
                <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false" indicator-color="white">
                    <van-swipe-item style="display: flex;align-items: center;justify-content: center">
                        <img style="width: 80%;height: 70%" src="../../assets/guopuPage/guopuSwiper.png" alt="">
                    </van-swipe-item>
                    <van-swipe-item style="display: flex;align-items: center;justify-content: center">
                        <img style="width: 80%;height: 70%" src="../../assets/guopuPage/guopuSwiper.png" alt="">
                    </van-swipe-item>
                    <van-swipe-item style="display: flex;align-items: center;justify-content: center">
                        <img style="width: 80%;height: 70%" src="../../assets/guopuPage/guopuSwiper.png" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="navBox">
            <van-collapse style="width: 100%;height: 100%" v-model="activeName" accordion>
                <van-collapse-item title="子分公司  Subsidiary" name="1">
                    <div class="boxNavHezi">
                        <div class="boxNavHeziHead">
                            <div class="heziHeadBox">国二研医疗健康投资股份公司</div>
                            <div class="heziHeadBox">国普房产托管（海南）有限公司</div>
                            <div class="heziHeadBox">国普医养结合海南有限公司</div>
                        </div>
                    </div>
                </van-collapse-item>
                <van-collapse-item title="资讯动态 Dynamic information" name="2">
                    <div class="boxNavHezi">
                        <div class="boxNavHeziHead">
                            <div class="heziHeadBoxtwo">
                                <span style="width: 75%;display: flex;align-items: center;justify-content: flex-start"> 国普惠民政策研究课题组召开研讨会</span><span style="width:15% ">01-22</span>
                            </div>
                            <div class="heziHeadBoxtwo">
                                <span style="width: 75%;display: flex;align-items: center;justify-content: flex-start"> 中铁妙天集团携手国普惠民工程</span><span style="width:15% ">01-16</span>
                            </div>
                            <div class="heziHeadBoxtwo">
                                <span style="width: 75%;display: flex;align-items: center;justify-content: flex-start">《为健康寻源》栏目新闻发布会在京举行</span><span style="width:15% ">08-08</span>
                            </div>
                        </div>
                    </div>
                </van-collapse-item>
                <van-collapse-item title="荣誉资质 Honor" name="3">
                    <div class="boxNavHeziImg">
                        <div class="imgBoxFoo">
                            <img style="width: 90%;height: 90%;" src="../../assets/guopuPage/2.jpg" alt="">
                        </div>
                        <div class="imgBoxFoo">
                            <img style="width: 90%;height: 90%;" src="../../assets/guopuPage/3.jpg" alt="">
                        </div>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
        <div class="footerBox">
            <img style="width: 20%;height: 60%" src="../../assets/footer/footer-1.jpg" alt="">
            <img style="width: 20%;height: 60%;margin-left: 0.3rem" src="../../assets/footer/footer-2.png" alt="">
            <span style="margin-left: 0.3rem">琼ICP备19005177号-1</span>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "guopuYidong",
        data() {
            return {
                activeName: '1',
                active: 0,
                show: false,
                showtwo: false,
                showthr: false,
                actions: [
                    { name: '《为健康寻源》' },
                    { name: '普惠学院' },
                    { name: '取消' }
                ],
                actionstwo: [
                    { name: '公司简介' },
                    { name: '集团架构' },
                    { name: '企业文化' },
                    { name: '员工天地' },
                    { name: '联系我们' },
                    { name: '取消' }
                ],
                actionsthr: [
                    { name: '国普惠民' },
                    { name: '国普惠农' },
                    { name: '取消' }
                ],
            }
        },
        created() {},
        mounted(){},
        methods:{
            onSelect(item) {
                // 默认情况下点击选项时不会自动收起
                // 可以通过 close-on-click-action 属性开启自动收起

                if(item.name === "取消"){
                    this.show = false;
                }
                Toast(item.name);
            },
            onSelecttwo(item) {
                // 默认情况下点击选项时不会自动收起
                // 可以通过 close-on-click-action 属性开启自动收起

                if(item.name === "取消"){
                    this.showtwo = false;
                }
                Toast(item.name);
            },
            onSelectthr(item) {
                // 默认情况下点击选项时不会自动收起
                // 可以通过 close-on-click-action 属性开启自动收起

                if(item.name === "取消"){
                    this.showthr = false;
                }
                Toast(item.name);
            },
            onClick(name, title) {
                    if(title === '文媒产业'){
                        this.show = true
                    }else if(title === '集团介绍'){
                        this.showtwo = true
                    }else if(title === '国普公益'){
                        this.showthr = true
                    }
                // Toast(title);
            }
            // wenmei(index){
            //     if(index === 'wm'){
            //         this.show = true
            //     }else if(index === 'js'){
            //         this.showtwo = true
            //     }
            // }
        }
    }
</script>
<style src="../../style/guoPuHome/guopuYidong.css" scoped></style>
<style>
    .van-popup{
        background-color: #71a9ec !important;
    }
    .van-action-sheet__cancel, .van-action-sheet__item{
        background-color: #71a9ec !important;
    }
    .van-action-sheet{
        color: #ffffff;
    }
    .van-tabs{
        width: 100% !important;
    }
    .van-tabs__nav{
        background-color: rgba(255,255,255,0) !important;
    }
    .van-tabs--line .van-tabs__wrap{
        border-radius: 10px;
    }
    .van-tabs__line{
        background-color:#3b83d9 !important;
    }
    .van-tab{
        color: #4d4f50 !important;
    }
    .my-swipe .van-swipe-item {
        color: #fff !important;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #39a9ed;*/
    }
    .van-swipe{
        width: 100%;
        height: 100%;
    }
    .van-cell__title, .van-cell__value{
        display: flex;
    }
    .van-cell{
        font-weight: bold;
        background-color: #3581d2 !important;
        color: #ffffff;
    }
    .van-cell__right-icon{
        color: #ffffff;
    }
    .van-cell--clickable:active{
        background-color: #3581d2 !important;
    }
</style>
