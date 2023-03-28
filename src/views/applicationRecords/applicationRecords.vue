<template>
    <div class="change-person">
        <navBar></navBar>
        <div class="change-person-content">
            <div class="content-ul">
                <div class="ul-li">
                    <div class="li1">
                        <span class="li11">加人</span>
                        <span class="li12">上海移动有限公司</span>
                    </div>
                    <div class="li2">转核中</div>
                </div>
                <div class="li-content">
                    <span class="li-span">批单号</span>
                    <span class="li3">KJLJ98884359998776</span>
                </div>
                <div class="li-content">
                    <span class="li-span">险种名称</span>
                    <span class="li3">太安心百万医疗保险</span>
                </div>
                <div class="li-content">
                    <span class="li-span">团单号</span>
                    <span class="li3">RT123456789090</span>
                </div>
                <div class="li-content">
                    <span class="li-span">申请人数</span>
                    <span class="li3">10人</span>
                </div>
                <div class="li-content">
                    <span class="li-span">申请日期</span>
                    <span class="li3">2022.07.02</span>
                </div>
            </div>
            <div class="content-ul">
                <div class="ul-li">
                    <div class="li1">
                        <span class="li13">减人</span>
                        <span class="li12">上海移动有限公司</span>
                    </div>
                    <div class="li2">转核中</div>
                </div>
                <div class="li-content">
                    <span class="li-span">批单号</span>
                    <span class="li3">KJLJ98884359998776</span>
                </div>
                <div class="li-content">
                    <span class="li-span">险种名称</span>
                    <span class="li3">太安心百万医疗保险</span>
                </div>
                <div class="li-content">
                    <span class="li-span">团单号</span>
                    <span class="li3">RT123456789090</span>
                </div>
                <div class="li-content">
                    <span class="li-span">申请人数</span>
                    <span class="li3">10人</span>
                </div>
                <div class="li-content">
                    <span class="li-span">申请日期</span>
                    <span class="li3">2022.07.02</span>
                </div>
            </div>
            <div class="content-ul">
                <div class="ul-li">
                    <div class="li1">
                        <span class="li14">换人</span>
                        <span class="li12">上海移动有限公司</span>
                    </div>
                    <div class="li2">转核中</div>
                </div>
                <div class="li-content">
                    <span class="li-span">批单号</span>
                    <span class="li3">KJLJ98884359998776</span>
                </div>
                <div class="li-content">
                    <span class="li-span">险种名称</span>
                    <span class="li3">太安心百万医疗保险</span>
                </div>
                <div class="li-content">
                    <span class="li-span">团单号</span>
                    <span class="li3">RT123456789090</span>
                </div>
                <div class="li-content">
                    <span class="li-span">申请人数</span>
                    <span class="li3">10人</span>
                </div>
                <div class="li-content">
                    <span class="li-span">申请日期</span>
                    <span class="li3">2022.07.02</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue';

export default {
    components: { navBar, },
}
</script>
<style lang="less" scoped>
.change-person {
    .change-person-content {
        padding: 12px 16px;

        .content-ul {
            padding: 12px 16px;
            margin-bottom: 12px;
            background: #FFFFFF;
            border-radius: 8px;

            .ul-li {
                display: flex;
                justify-content: space-between;
                margin-bottom: 12px;

                .li1 {
                    .li11 {
                        font-family: PingFangSC-Medium;
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 16px;
                        letter-spacing: 0px;
                        color: #00C791;
                        margin-right: 6px;
                        box-sizing: border-box;
                        border: 0.5px solid #00C791;
                        border-radius: 4px;
                    }

                    .li12 {
                        font-family: PingFangSC-Semibold;
                        font-size: 16px;
                        font-weight: normal;
                        letter-spacing: 0px;
                        color: #17204D;
                    }

                    .li13 {
                        font-family: PingFangSC-Medium;
                        font-size: 12px;
                        font-weight: normal;
                        line-height: 16px;
                        letter-spacing: 0px;
                        box-sizing: border-box;
                        margin-right: 6px;
                        border: 0.5px solid #025CEA;
                        border-radius: 4px;
                        color: #025CEA;
                    }

                    .li14 {
                        font-family: PingFangSC-Medium;
                        font-size: 12px;
                        font-weight: normal;
                        line-height: 16px;
                        letter-spacing: 0px;
                        margin-right: 6px;
                        box-sizing: border-box;
                        border: 0.5px solid #7B34F3;
                        color: #7B34F3;
                        border-radius: 4px;
                    }
                }

                .li2 {
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    font-weight: normal;
                    line-height: 18px;
                    text-align: right;
                    letter-spacing: 0px;
                    color: #025CEA;
                }
            }

            .li-content {
                margin-top: 8px;

                .li-span {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    font-weight: normal;
                    letter-spacing: 0px;
                    width: 56px;
                    display: inline-block;
                    color: #7E849F;
                    margin-right: 16px;
                }

                .li3 {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    font-weight: normal;
                    letter-spacing: 0px;
                    color: #7E849F;
                }
            }
        }
    }
}
</style>