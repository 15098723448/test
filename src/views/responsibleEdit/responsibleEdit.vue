<template>
    <div class="change-responsible">
        <navBar></navBar>
        <div class="responsible-edit">
            <div class="contentBox">
                <van-form @submit="onSubmit">
                    <van-field v-model="username" required name="用户名" label="姓名" input-align="right" placeholder="请输入"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field required is-link readonly clickable label="证件类型" input-align="right" :value="value"
                        placeholder="选择城市" @click="showPicker = true" />
                    <van-popup v-model="showPicker" round position="bottom">
                        <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                    </van-popup>
                    <van-field required v-model="username" name="用户名" label="证件号码" input-align="right" placeholder="请输入"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-cell title="证件有效期" is-link class="input-required">
                        <template>
                            <div style="display: flex;">
                                <span @click="termOfValidity = true" :class="date == '请选择' ? 'date4' : 'date3'">{{ date
                                }}</span>
                                <span class="date1">至</span>
                                <span @click="termOfValidity1 = true" :class="date1 == '请选择' ? 'date5' : 'date2'">{{ date1
                                }}</span>
                            </div>

                        </template>
                    </van-cell>
                    <van-popup v-model="termOfValidity" position="bottom" :overlay="true" show-toolbar>
                        <van-datetime-picker type="date" @confirm="onConfirm1" cancel-button-text="清空" @cancel="
                            termOfValidity = false"></van-datetime-picker>
                    </van-popup>
                    <van-popup v-model="termOfValidity1" position="bottom" :overlay="true" show-toolbar>
                        <van-datetime-picker type="date" @confirm="onConfirm2" cancel-button-text="清空" @cancel="
                            termOfValidity1 = false"></van-datetime-picker>
                    </van-popup>
                    <van-cell title="联系电话" class="input-required">
                        <template>
                            <div class="tel">
                                <van-field v-model="value1" placeholder="区号" input-align="right"/>
                                <span class="line">-</span>
                                <van-field v-model="value2" placeholder="电话号码" />
                                <span class="line">|</span>
                                <van-field v-model="value3" placeholder="分机号" />
                            </div>

                        </template>
                    </van-cell>
                    <van-field v-model="username"  label="手机号码" input-align="right" placeholder="请输入"/>
                    <van-field v-model="username"  label="电子邮箱" input-align="right" placeholder="请输入"/>
                    <van-field v-model="username"  label="地址" input-align="right" placeholder="请选择"/>
                    <van-field v-model="username"  label="邮编" input-align="right" placeholder="请输入"/>
                       
                </van-form>
            </div>
            <div class="submit-button">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue';
import { msToDate } from '@/utils/utils';
export default {
    components: { navBar, },
    data() {
        return {
            termOfValidity: false,
            termOfValidity1: false,
            showBtn: false,
            editShow: false,
            value: "",
            value1: "",
            value2: "",
            value3: "",
            count: 1,
            username: "",
            showPicker: false,
            columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
            date: '请选择',
            date1: '请选择',
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

        onConfirm1(date) {
            this.termOfValidity = false;
            this.date = msToDate(date).withoutTime;
            console.log(this.date, 'date');
        },
        onConfirm2(date) {
            this.termOfValidity1 = false;
            this.date1 = msToDate(date).withoutTime;
            console.log(this.date, 'date');
        }
    }
}
</script>
<style lang="less" scoped>
.van-cell__value {
    min-width: 60% !important;
}

.van-cell {
    padding: 10px 16px;
}

.tel {
    display: flex;

    .van-cell {
        padding: 0;
    }
    .van-field__control{
        text-align: right !important;
    }
    .line {
        font-size: 14px;
        font-weight: 600;
        margin-right: 8px;
        margin-left: 8px;
        color: #17204D;
    }
}

.date1 {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    font-weight: 600;
    text-align: right;
    letter-spacing: 0px;
    color: #17204D;
    margin-left: 12px;
    margin-right: 12px;
}

.date2,
.date3 {
    display: inline-block;
    width: 100px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #17204D;
}

.date4 {
    display: inline-block;
    width: 100px;
}

.date2 {
    text-align: left;
}

.date5 {
    display: inline-block;
    width: 100px;
    text-align: left;
}

.change-responsible {

    .responsible-edit {
        margin-top: 12px;
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
}</style>