<template>
    <div style="padding-bottom: 64px;">
        <navBar></navBar>
        <div class="contentBox">
            <p class="title"><span></span>被保人员{{ count }}</p>
            <van-form @submit="onSubmit">
                <van-field v-model="username" name="用户名" label="姓名" input-align="right" placeholder="请输入"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field is-link readonly clickable label="证件类型" input-align="right" :value="value" placeholder="选择城市"
                    @click="showPicker = true" />
                <van-popup v-model="showPicker" round position="bottom">
                    <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>
                <van-field v-model="username" name="用户名" label="证件号码" input-align="right" placeholder="请输入"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field is-link readonly clickable label="职业类别" input-align="right" :value="value" placeholder="选择城市"
                    @click="showPicker = true" />
                <van-popup v-model="showPicker" round position="bottom">
                    <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>
                <van-field is-link readonly clickable label="职业代码" input-align="right" :value="value" placeholder="选择城市"
                    @click="showPicker = true" />
                <van-popup v-model="showPicker" round position="bottom">
                    <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>
                <van-field title="选择单个日期" label="责任起期" is-link :value="date" @click="show = true" placeholder="选择城市"
                    input-align="right" />
                <van-calendar v-model="show" @confirm="onConfirm1" />
                <van-field is-link readonly clickable label="职业代码" input-align="right" :value="value" placeholder="选择城市"
                    @click="showPicker = true" />
                <van-popup v-model="showPicker" round position="bottom">
                    <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>
                <div class="type-information">
                    <p class="heading">险种信息</p>
                    <div class="info">
                        <p class="special">太安心百万医疗保险</p>
                        <p>太保无忧定期重大疾病保险</p>
                        <p>太安心医疗保险</p>
                    </div>
                    <div class="info">
                        <p class="special">太安心百万医疗保险</p>
                        <p>太保无忧定期重大疾病保险</p>
                        <p>太安心医疗保险</p>
                    </div>
                    <p class="price">试算保费：<span>{{ price }}元</span></p>
                </div>
            </van-form>
        </div>
        <div class="addInfo">
           +&ensp;添加被保人
        </div>
        <div class="submit-button">
            <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
    components: { navBar },
    data() {
        return {
            value: "",
            count: 1,
            username: "",
            showPicker: false,
            columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
            date: '',
            show: false,
            price: '--',
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
    },
};
</script>

<style lang="less" scoped>
.contentBox {
    background-color: #fff;
    margin-top: 10px;
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
    width:calc(100% - 32px);
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
</style>
