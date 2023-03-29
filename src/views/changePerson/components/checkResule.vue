<template>
    <div class="check-resule">
        <navBar></navBar>
        <div class="check-resule-content">
            <div class="check-resule-ul">
                <div class="ul-title">
                    <p class="ul-title-info">换入人员-张立伟</p>
                    <p class="ul-title-icon">通过</p>
                </div>
                <div class="ul-content">
                    <p class="info-title">身份证</p>
                    <p class="info1">310167199002091865</p>
                </div>
                <div class="ul-content">
                    <p class="info-title">职业类别</p>
                    <p class="info1">I 类 </p>
                </div>
                <div class="ul-content">
                    <p class="info-title">职业代码</p>
                    <p class="info1">KJLJ9888</p>
                </div>
                <div class="swap-out">
                    <p class="swap-out-title">换出人员-安琪</p>
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
                <div class="info-button">
                    <button>删除</button>
                    <button class="edit-button">修改</button>
                </div>
            </div>
            <div class="check-resule-ul">
                <div class="ul-title">
                    <p class="ul-title-info">换入人员-张立伟</p>
                    <p :class="showBtn ? 'ul-title-icon' : 'ul-title-icon1'">{{ showBtn ? '通过' : '失败' }}</p>
                </div>
                <div v-if="!showBtn" class="defeate">
                    <p>失败原因：</p>
                    <p>职业代码选择错误</p>
                </div>
                <div class="ul-content">
                    <p class="info-title">身份证</p>
                    <p class="info1">310167199002091865</p>
                </div>
                <div class="ul-content">
                    <p class="info-title">职业类别</p>
                    <p class="info1">I 类 </p>
                </div>
                <div class="ul-content">
                    <p class="info-title">职业代码</p>
                    <p :class="showBtn ? 'info1' : 'info-p'">KJLJ9888</p>
                </div>
                <div class="swap-out">
                    <p class="swap-out-title">换出人员-安琪</p>
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
                <div class="info-button">
                    <button>删除</button>
                    <button class="edit-button" @click="editShow = true">修改</button>
                </div>
                <van-popup v-model="editShow" round closeable close-icon="close" position="bottom"
                    :style="{ height: '70%' }" class="popup-edit">
                    <div class="popup-title">换入人员信息修改</div>
                    <van-form @submit="onSubmit">
                        <van-field v-model="username" name="用户名" label="姓名" input-align="right" placeholder="请输入"
                            :rules="[{ required: true, message: '请填写用户名' }]" />
                        <van-field is-link readonly clickable label="证件类型" input-align="right" :value="value"
                            placeholder="选择城市" @click="showPicker = true" />
                        <van-popup v-model="showPicker" round position="bottom">
                            <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                        </van-popup>
                        <van-field v-model="username" name="用户名" label="证件号码" input-align="right" placeholder="请输入"
                            :rules="[{ required: true, message: '请填写用户名' }]" />
                        <van-field is-link readonly clickable label="职业类别" input-align="right" :value="value"
                            placeholder="选择城市" @click="showPicker = true" />
                        <van-popup v-model="showPicker" round position="bottom">
                            <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                        </van-popup>
                        <van-field is-link readonly clickable label="职业代码" input-align="right" :value="value"
                            placeholder="选择城市" @click="showPicker = true" />
                        <van-popup v-model="showPicker" round position="bottom">
                            <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                        </van-popup>
                        <div class="type-information">
                            <p class="heading">换出人员</p>
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
                    <div class="submit-button">
                        <van-button round block type="info" native-type="submit" @click="onSubmit">提交</van-button>
                    </div>
                </van-popup>
            </div>
        </div>
        <div class="submit-button">
            <van-button round block type="info" native-type="submit" @click="save">{{ showBtn ? '提交' : '重新校验'
            }}</van-button>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue';
export default {
    components: { navBar, },
    data() {
        return {
            showBtn: false,
            editShow: false,
            value: "",
            count: 1,
            username: "",
            showPicker: false,
            columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
            date: '',
            show: false,
            price: '--',
        }
    },
    methods: {
        save() {

        },
        onSubmit(values) {
            this.editShow = false
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
    }
}
</script>
<style lang="less" scoped>
.check-resule {
    padding-bottom: 60px;

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

    .check-resule-content {
        padding: 12px 16px;

        .check-resule-ul {
            background: #FFFFFF;
            border-radius: 8px;
            margin-bottom: 12px;

            .defeate {
                border-radius: 4px;
                background: #FFF2F4;
                display: flex;
                padding: 8px 12px;
                margin: 0px 16px 8px;

                p {
                    font-family: PingFangSC-Regular;
                    font-size: 13px;
                    font-weight: normal;
                    letter-spacing: 0px;
                    color: #FA5151;
                }
            }

            .ul-title {
                background: linear-gradient(98deg, rgba(70, 152, 252, 0.08) 5%, rgb(255, 255, 255, 0.03) 96%, rgba(24, 103, 243, 0.00) 100%);
                box-sizing: border-box;
                // border: 0.5px solid #FFFFFF;
                padding: 12px 16px;
                display: flex;
                justify-content: space-between;

                .ul-title-info {
                    font-family: PingFangSC-Semibold;
                    font-size: 16px;
                    font-weight: 600;
                    letter-spacing: 0px;
                    color: #17204D;
                }

                .ul-title-icon {
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    line-height: 18px;
                    color: #025CEA;
                }

                .ul-title-icon1 {
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    line-height: 18px;
                    color: #FA5151;
                }
            }

            .ul-content {
                display: flex;
                padding-left: 16px;
                margin-bottom: 8px;

                .info-title {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    font-weight: 400;
                    width: 60px;
                    color: #7E849F;
                    margin-right: 16px;
                }

                .info1 {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #17204D;
                }

                .info-p {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    font-weight: normal;
                    letter-spacing: 0px;
                    color: #FA5151;
                }
            }

            .swap-out {
                padding: 12px 16px;
                margin: 4px 16px 14px 16px;
                border-radius: 8px;
                background: #F7F8FA;

                p {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #555C80;
                    height: 20px;
                    line-height: 20px;
                    margin: 4px 0;
                }

                .swap-out-title {
                    font-family: PingFang SC;
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 0px;
                    color: #17204D;
                }

                .info-title {
                    display: flex;

                    p {
                        width: 50%;
                    }

                }

                .info-content {
                    display: flex;

                    .info-content1 {
                        display: flex;
                        width: 50%;


                    }
                }
            }

            .info-button {
                display: flex;
                justify-content: flex-end;
                padding-right: 16px;
                padding-bottom: 12px;

                button {
                    box-sizing: border-box;
                    border: 0.5px solid #B5BACE;
                    width: 80px;
                    height: 28px;
                    border-radius: 393px;
                    background-color: #fff;
                }

                .edit-button {
                    margin-left: 12px;
                    border: 0.5px solid #025CEA;
                    color: #025CEA;
                }
            }
        }
    }

    .popup-edit {
        .popup-title {
            height: 48px;
            text-align: center;
            font-family: PingFangSC-Medium;
            border-bottom: 0.5px solid #E9E9ED;
            font-size: 18px;
            font-weight: 600;
            line-height: 48px;
            text-align: center;
            letter-spacing: 0px;
            color: #17204D;
        }

        .type-information {
            margin: 12px 16px 80px;

            .heading {
                font-family: PingFang SC;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 0px;
                margin-bottom: 12px;
                color: #17204D;
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

                .info-title {
                    display: flex;

                    .info1 {
                        width: 50%;
                    }

                }

                .info-content {
                    display: flex;

                    .info-content1 {
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

}
</style>