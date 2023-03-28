<template>
    <div class="receipt-detail">
        <keep-alive>
            <navBar></navBar>
        </keep-alive>
        <div class="detail-content">
            <div class="content-title">
                <div class="title-top">上海移动公司</div>
                <div class="title-con">
                    <span>保险期间：</span>
                    <span>2022年10月10日-2023年10月10日</span>
                </div>
                <div class="title-num">
                    <div class="num1">
                        <div class="num11">235</div>
                        <div class="num12">在保人数</div>
                    </div>
                    <div>
                        <div class="num21">235,046</div>
                        <div class="num22">团单总保费(元)</div>
                    </div>
                    <div class="num3">
                        <img src="@/assets/navBar.png" alt="">
                    </div>
                </div>
            </div>
            <div class="content-operation">
                <div class="operation1">
                    <img src="@/assets/jiaren.png" alt="">
                    <div>加人</div>
                </div>
                <div class="operation1" @click="deletePer">
                    <img src="@/assets/jianren.png" alt="">
                    <div>减人</div>
                </div>
                <div class="operation1" @click="changePer">
                    <img src="@/assets/huanren.png" alt="">
                    <div>换人</div>
                </div>
                <div class="operation1">
                    <img src="@/assets/jingbanren.png" alt="">
                    <div>经办人</div>
                </div>
                <div class="operation1">
                    <img src="@/assets/jingbanren.png" alt="">
                    <div>经办人</div>
                </div>
            </div>
            <div class="content-type">
                <div class="type-title">
                    <span class="title-icon">主险</span>
                    <span class="title-div">太安心百万医疗保险</span>
                </div>
                <div class="type-content">
                    <span class="type1">主团单号</span>
                    <span class="type1">KJLJ98884359998776</span>
                </div>
                <div class="addition">
                    <div class="type-title1">
                        <span class="title-icon1">附加</span>
                        <span class="title-div1">太保无忧定期重大疾病保险</span>
                    </div>
                    <div class="type-content1">
                        <span class="type11">子团单号</span>
                        <span class="type11">KJLJ98884359998776</span>
                    </div>
                    <div class="type-bottom">
                        <span class="bottom1">总保费</span>
                        <span class="bottom2">175,505元</span>
                    </div>
                </div>
                <div class="addition">
                    <div class="type-title1">
                        <span class="title-icon1">附加</span>
                        <span class="title-div1">太保无忧定期重大疾病保险</span>
                    </div>
                    <div class="type-content1">
                        <span class="type11">子团单号</span>
                        <span class="type11">KJLJ98884359998776</span>
                    </div>
                    <div class="type-bottom">
                        <span class="bottom1">总保费</span>
                        <span class="bottom2">175,505元</span>
                    </div>
                </div>
                <div class="addition">
                    <div class="type-title1">
                        <span class="title-icon1">附加</span>
                        <span class="title-div1">太保无忧定期重大疾病保险</span>
                    </div>
                    <div class="type-content1">
                        <span class="type11">子团单号</span>
                        <span class="type11">KJLJ98884359998776</span>
                    </div>
                    <div class="type-bottom">
                        <span class="bottom1">总保费</span>
                        <span class="bottom2">175,505元</span>
                    </div>
                </div>
            </div>
            <div class="prompt-notice">
                <div class="prompt-notice-title">提示须知</div>
                <div class="prompt-notice-content">
                    中国太保成立于1991年5月13日，至2021年已走过30年的光辉历程，在过去的一年中，中国太保联系第十年荣誉《财富》世界500强，成功发行GDR去去全球三地上市，在不断奋进突破创新的发展道路上，我们不断前进！
                    中国太保成立于1991年5月13日，至2021年已走过30年的光辉历程，在过去的一年中，中国太保联系第十年荣誉《财富》世界500强，成功发行GDR去去全球三地上市，在不断奋进突破创新的发展道路上，我们不断前进！中国太保成立于1991年5月13日，至2021年已走过30年的光辉历程，在过去的一年中，中国太保联系第十年荣誉《财富》世界500强，成功发行GDR去去全球三地上市，在不断奋进突破创新的发展道路上，我们不断前进！中国太保成立于1991年5月13日，至2021年已走过30年的光辉历程，在过去的一年中，中国太保联系第十年荣誉《财富》世界500强，成功发行GDR去去全球三地上市，在不断奋进突破创新的发展道路上，我们不断前进！
                </div>
            </div>
            <div class="detail-bottom">
                <van-button round type="info" color="#fff" class="button-color">发送被保人清单</van-button>
                <van-button round type="info">发送电子保单</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue';

export default {
    components: { navBar, },
    methods:{
        deletePer(){
            this.$router.push('/deletePerson')
        },
        changePer(){
            this.$router.push('/changePerson')
        }
    }
}
</script>
<style lang="less" scoped>
.detail-content {
    .content-title {
        // width: 100%;
        // height: 160px;
        background: linear-gradient(4deg, #F6F8FA 20%, #E9F1FB 54%, #C9DEFF 97%);
        padding: 16px 16px 0px 16px;

        .title-top {
            padding-bottom: 6px;
            font-family: PingFangSC-Semibold;
            font-size: 20px;
            font-weight: normal;
            text-align: justify;
            /* 浏览器可能不支持 */
            letter-spacing: 0px;
            color: #17204D;

        }

        .title-con {
            padding-bottom: 16px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            font-weight: normal;
            letter-spacing: 0px;
            color: #7E849F;
        }

        .title-num {
            display: flex;
            justify-content: space-between;

            .num11,
            .num21 {
                font-family: DINAlternate-Bold;
                font-size: 28px;
                font-weight: normal;
                line-height: 34px;
                text-align: center;
                letter-spacing: 0px;
                color: #025CEA;
            }

            .num12,
            .num22 {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                font-weight: normal;
                line-height: 17px;
                text-align: center;
                letter-spacing: 0px;
                color: #555C80;
            }

            .num1 {
                padding-right: 55px;

            }

            .num3 {
                img {
                    display: inline-block;
                    width: 100px;
                    height: 100px;
                    margin-bottom: -26px;
                }
            }
        }
    }

    .content-operation {
        display: flex;
        text-align: center;
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 12px;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 8px;
        backdrop-filter: blur(2.72px);
        box-shadow: 0px 2px 6px 0px #C8D9F7;

        .operation1 {
            margin-right: 16px;

            img {
                width: 53px;
                height: 53px;
                display: inline-block;
            }
        }

    }

    .content-type {
        background-color: #fff;
        padding: 12px 16px;
        // width: calc(100% - 64px);
        margin: 0 16px 16px;
        border-radius: 8px;

        .type-title {
            margin-bottom: 12px;

            .title-icon {
                font-family: PingFangSC-Medium;
                font-size: 12px;
                font-weight: normal;
                line-height: 16px;
                letter-spacing: 0px;
                color: #FFFFFF;
                border-radius: 4px;
                margin-right: 6px;
                background: linear-gradient(270deg, #4492FC 0%, #025CEA 100%);
            }

            .title-div {
                font-family: PingFangSC-Semibold;
                font-size: 19px;
                font-weight: 600;
                letter-spacing: 0px;
                color: #17204D;
            }
        }

        .type-content {
            margin-bottom: 12px;

            .type1 {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                font-weight: normal;
                letter-spacing: 0px;

                color: #7E849F;
            }

        }

        .addition {
            border-radius: 8px;
            background: #F7F8FA;
            padding: 12px 16px;
            margin-bottom: 12px;

            .type-title1 {
                margin-bottom: 12px;

                .title-icon1 {
                    font-family: PingFangSC-Medium;
                    font-size: 12px;
                    font-weight: normal;
                    line-height: 16px;
                    letter-spacing: 0px;
                    color: #FF8600;
                    margin-right: 6px;
                    background: rgba(255, 158, 51, 0.2);
                }

                .title-div1 {
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 0px;
                    color: #17204D;
                }
            }

            .type-content1 {
                margin-bottom: 12px;

                span {
                    margin-right: 16px;
                }

                .type11 {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    font-weight: normal;
                    letter-spacing: 0px;
                    color: #7E849F;
                }
            }

            .type-bottom {
                .bottom1 {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    font-weight: normal;
                    letter-spacing: 0px;
                    color: #7E849F;
                    margin-right: 16px;
                }

                .bottom2 {
                    font-family: PingFang SC;
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 0px;
                    color: #17204D;
                }
            }
        }


    }

    .prompt-notice {
        margin: 0 16px 24px;
        background-color: #fff;
        border-radius: 8px;
        padding: 12px 16px 0 15px;

        .prompt-notice-title {
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0px;
            color: #17204D;
            margin-bottom: 12px;
        }

        .prompt-notice-conten {
            font-family: PingFangSC-Regular;
            font-size: 13px;
            font-weight: 400;
            line-height: 20px;
            text-align: justify;
            /* 浏览器可能不支持 */
            letter-spacing: 0px;

            color: #7E849F;
        }
    }
    .detail-bottom{
        width: calc(100% - 32px);
        background-color: #fff;
        padding: 8px 16px;
        text-align: center;
        button{
            margin-right: 16px;
        }
        .button-color{
            color: #025CEA !important;
            border-color: #025CEA !important;
        }
    }
}
</style>