<template>
    <div class="change-per">
        <navBar></navBar>
        <div class="change-per-content">
            <div class="contentBox">
                <p class="title"><span></span>换入人员{{ count }}</p>
                <van-form @submit="onSubmit">
                    <van-field v-model="username" name="用户名" label="姓名" input-align="right" placeholder="请输入"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field is-link readonly clickable label="证件类型" input-align="right" :value="value"
                        placeholder="请选择证件类型" @click="showPicker = true" />
                    <van-popup v-model="showPicker" round position="bottom">
                        <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                    </van-popup>
                    <van-field v-model="username" name="用户名" label="证件号码" input-align="right" placeholder="请输入"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field is-link readonly clickable label="职业类别" input-align="right" :value="value" placeholder="请选择"
                        @click="showPicker = true" />
                    <van-popup v-model="showPicker" round position="bottom">
                        <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                    </van-popup>
                    <van-field is-link readonly clickable label="职业代码" input-align="right" :value="value" placeholder="请选择"
                        @click="showPicker = true" />
                    <van-popup v-model="showPicker" round position="bottom">
                        <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                    </van-popup>
                    <div class="type-information">
                        <p class="heading">换出人员{{ count }}</p>
                        <div class="info">
                            <p class="special">安琪</p>
                            <div class="info-title">
                                <p class="info1">身份证</p>
                                <p>310167199002091865</p>
                            </div>
                            <div class="info-content">
                                <div class="info-content1">
                                    <p>职业类别：</p>
                                    <p>I 类</p>
                                </div>
                                <div class="info-content1">
                                    <p>职业代码：</p>
                                    <p>KJLJ9888</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-form>
            </div>
            <div class="submit-button">
                <van-button round block type="info" native-type="submit" @click="save">校验</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue';
export default {
    components: { navBar, },
    data() {
        return {
            value: "身份证",
            count: 1,
            username: "",
            showPicker: false,
            columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
            date: '',
            show: false,
        };
    },
    methods: {
        onSubmit(values) {
            console.log("submit", values);
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm1(date) {
            this.show = false;
            this.date = this.formatDate(date);
        },
        save(){
            this.$router.push('/checkResule')
        }
    },
}
</script>
<style lang="less" scoped>
.change-per {
    .change-per-content {
        // padding: 12px 16px;
        padding-top: 12px;
        .contentBox {
            background-color: #fff;
            padding: 10px;

            .title {
                font-weight: bold;
                color: #333;
                font-size: 18px;
                height: 24px;
                line-height: 24px;
                padding-left: 12px;
                font-family: PingFangSC-Medium;
                position: relative;
                margin: 10px 0;

                span {
                    width: 6px;
                    height: 16px;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    background-color: #025CEA;
                    display: inline-block;
                    border-radius: 5px;
                }
            }

            .type-information {
                margin-top: 12px;

                .heading {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #555C80;
                    height: 20px;
                    line-height: 20px;
                    margin-bottom: 12px;
                }

                .info {
                    padding: 12px 16px;
                    background: #F7F8FA;
                    border-radius: 8px;
                    margin-bottom: 12px;

                    p {
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #555C80;
                        height: 20px;
                        line-height: 20px;
                        margin: 4px 0;
                    }

                    .special {
                        font-family: PingFangSC-Semibold;
                        color: #17204D;
                        font-weight: 600;
                    }
                    .info-title{
                        display: flex;
                        .info1{
                            width: 50%;
                        }
                        
                    }
                    .info-content{
                        display: flex;
                        .info-content1{
                            display: flex;
                            width: 50%;
                        }
                    }
                }

                .price {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    height: 20px;
                    line-height: 20px;
                    color: #555C80;

                    span {
                        color: #FA5151;
                        font-family: PingFang SC;
                    }
                }
            }
        }

        .addInfo {
            width: 120px;
            height: 32px;
            line-height: 32px;
            color: #025CEA;
            text-align: center;
            margin: 16px auto 24px auto;
            border: 1px solid #025CEA;
            border-radius: 704px;
        }

        .van-cell {
            padding: 12px 0;
        }

        .submit-button {
            position: fixed;
            bottom: 0;
            width: calc(100% - 32px);
            left: 0;
            padding: 8px 16px;
            height: 48px;
            background: #FFFFFF;
            box-shadow: 0px -6px 15px 0px rgba(0, 0, 0, 0.05);

            .van-button {
                height: 48px;
            }
        }

        .van-cell::after {
            left: 0;
            right: 0;
        }
    }
}
</style>