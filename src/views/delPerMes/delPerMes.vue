<template>
    <div class="del-per-mes">
        <navBar></navBar>
        <div class="del-per-message">
            <div class="del-per-message-li">
                <div class="main-li-title">
                    <div class="title1">张立伟</div>
                    <div :class="showBtn ? 'title2' : 'title3'">{{ showBtn ? '通过' : '失败' }}</div>
                </div>
                <div v-if="!showBtn" class="main-show-btn">
                    <span>失败原因：</span>
                    <span>文案文案文案文案文案文案</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">身份证</span>
                    <span class="main-li-detail">310167199002091865</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">职业类别</span>
                    <span class="main-li-detail">I 类</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">职业代码</span>
                    <span class="main-li-detail">KJLJ9888</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">退保金额</span>
                    <span class="main-li-detail1">3,590元</span>
                </div>
                <div class="subjoin">
                    <div class="subjoin-title">
                        太保无忧定期重大疾病保险
                    </div>
                    <div class="main-li-content1">
                        <span class="main-li-span">子凭证号：</span>
                        <span class="main-li-detail">KJLJ98884359998776</span>
                    </div>
                    <div>
                        <span class="main-li-span">退保金额：</span>
                        <span class="main-li-detail1">3,245元</span>
                    </div>
                </div>
                <div class="subjoin">
                    <div class="subjoin-title">
                        太保无忧定期重大疾病保险
                    </div>
                    <div class="main-li-content1">
                        <span class="main-li-span">子凭证号：</span>
                        <span class="main-li-detail">KJLJ98884359998776</span>
                    </div>
                    <div>
                        <span class="main-li-span">退保金额：</span>
                        <span class="main-li-detail1">3,245元</span>
                    </div>
                </div>
                <div class="main-btn">
                    <button class="main-button">删除</button>
                </div>

            </div>
            <div class="del-per-message-li">
                <div class="main-li-title">
                    <div class="title1">张立伟</div>
                    <div class="title3">失败</div>
                </div>
                <div class="main-show-btn">
                    <span>失败原因：</span>
                    <span>文案文案文案文案文案文案</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">身份证</span>
                    <span class="main-li-detail">310167199002091865</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">职业类别</span>
                    <span class="main-li-detail">I 类</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">职业代码</span>
                    <span class="main-li-detail">KJLJ9888</span>
                </div>
                <div class="main-li-content1">
                    <span class="main-li-span">退保金额</span>
                    <span class="main-li-detail1">3,590元</span>
                </div>
                <div class="subjoin">
                    <div class="subjoin-title">
                        太保无忧定期重大疾病保险
                    </div>
                    <div class="main-li-content1">
                        <span class="main-li-span">子凭证号：</span>
                        <span class="main-li-detail">KJLJ98884359998776</span>
                    </div>
                    <div>
                        <span class="main-li-span">退保金额：</span>
                        <span class="main-li-detail1">3,245元</span>
                    </div>
                </div>
                <div class="subjoin">
                    <div class="subjoin-title">
                        太保无忧定期重大疾病保险
                    </div>
                    <div class="main-li-content1">
                        <span class="main-li-span">子凭证号：</span>
                        <span class="main-li-detail">KJLJ98884359998776</span>
                    </div>
                    <div>
                        <span class="main-li-span">退保金额：</span>
                        <span class="main-li-detail1">3,245元</span>
                    </div>
                </div>
                <div class="main-btn">
                    <button class="main-button">删除</button>
                </div>

            </div>
        </div>
        <div class="delete-person-bottom">
            <div>
                <div class="person-bottom">退保金合计:</div>
                <span class="person-bottom-num">6,309.34</span>
                <span> 元</span>
            </div>
            <button round type="info" block @click="toDelPer" >{{showBtn?'确认':'重新校验'}}</button>

        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue';
export default {
    components: { navBar, },
    data() {
        return {
            showBtn: true
        }
    },
    methods: {
        toDelPer() {

        }
    }
}
</script>
<style lang="less" scoped>
.del-per-mes {
    position: relative;
    margin-bottom: 46px;

    .delete-person-bottom {
        position: fixed;
        display: flex;
        justify-content: space-between;
        bottom: 0px;
        width: calc(100% - 32px);
        padding: 8px 16px;
        background-color: #fff;

        .person-bottom {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            text-align: justify;
            /* 浏览器可能不支持 */
            letter-spacing: 0px;
            color: #7E849F;
            margin-bottom: 6px;
        }
        span{
            color: #FA5151;
        }
        .person-bottom-num {
            font-family: DINAlternate-Bold;
            font-size: 22px;
            font-weight: normal;
            line-height: 18px;
            text-align: justify;
            /* 浏览器可能不支持 */
            letter-spacing: 0px;
            
        }
        button{
            background: linear-gradient(270deg, #4492FC 0%, #025CEA 100%);
            border-radius: 24px;
            width: 60%;
            color: #fff;
            border: none;
        }
    }

    .del-per-message {
        padding: 12px 16px;

        .del-per-message-li {
            background: #FFFFFF;
            border-radius: 8px;
            padding: 12px 16px;
            margin-bottom: 12px;

            .main-show-btn {
                background: #FFF2F4;
                border-radius: 4px;
                font-family: PingFangSC-Regular;
                font-size: 13px;
                font-weight: normal;
                letter-spacing: 0px;
                color: #FA5151;
                padding: 8px 0px 8px 12px;
                margin-bottom: 8px;
            }

            .main-li-span {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                font-weight: 400;
                letter-spacing: 0px;
                color: #7E849F;
                width: 56px;
                display: inline-block;
                margin-right: 16px;
            }

            .main-li-detail {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                font-weight: normal;
                letter-spacing: 0px;
                color: #17204D;
            }

            .main-li-detail1 {
                font-family: PingFang SC;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 0px;
                color: #17204D;
            }

            .main-li-title {
                display: flex;
                justify-content: space-between;
                margin-bottom: 12px;

                .title1 {
                    font-family: PingFangSC-Semibold;
                    font-size: 16px;
                    font-weight: 600;
                    letter-spacing: 0px;
                    color: #17204D;
                }

                .title2 {
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    font-weight: normal;
                    line-height: 18px;
                    text-align: right;
                    letter-spacing: 0px;
                    color: #025CEA;
                }

                .title3 {
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    font-weight: normal;
                    line-height: 18px;
                    text-align: right;
                    letter-spacing: 0px;
                    color: #FA5151;
                }
            }

            .main-li-content1 {
                margin-bottom: 8px;
            }

            .subjoin {
                background: #F7F8FA;
                border-radius: 8px;
                padding: 12px 16px;
                margin-bottom: 12px;

                .subjoin-title {
                    font-family: PingFangSC-Semibold;
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 0px;
                    color: #17204D;
                    margin-bottom: 8px;
                }

                .main-li-span {
                    width: 75px;
                    margin-right: 0px;
                }
            }

            .main-btn {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                .main-button {
                    width: 80px;
                    height: 28px;
                    border-radius: 393px;
                    background-color: #fff;
                    box-sizing: border-box;
                    border: 0.5px solid #B5BACE;
                    text-align: center;
                }
            }


        }
    }
}</style>