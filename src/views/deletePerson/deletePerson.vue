<template>
    <div class="delete-person">
        <navBar></navBar>
        <div class="delete-person-content">
            <div>
                <van-search v-model="value" shape="round" background="rgba(237,237,239,0.5)" placeholder="搜索证件号码或姓名"
                    clearable />
            </div>
            <div style="margin-bottom: 12px;">
                <span>当前团单最多选择{{ num }}位人员</span>
            </div>
            <div class="delete-person-list">
                <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
                <van-checkbox-group v-model="result" :max="num">
                    <van-cell-group>
                        <van-cell v-for="(item, index) in list" clickable :key="item.id" :title="item.name"
                            @click="toggle(index)">
                            <template>
                                <van-row gutter="20">
                                    <van-col span="16">{{ item.tel }}</van-col>

                                </van-row>
                            </template>
                            <template #right-icon>
                                <van-checkbox :name="item.id" ref="checkboxes" shape="square" :disabled="item.disabled" />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
                <!-- </van-list> -->
            </div>

        </div>
        <div class="delete-person-bottom">
            <van-button round type="info" block :disabled="disabledBtn" @click="toDelPer">确认</van-button>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue';


export default {
    components: { navBar, },
    data() {
        return {
            value: '',
            num: 2,
            lisy: '',
            result: [],
            list: [
                { name: 'zhangsan1', tel: '1331234567', id: '1', disabled: false },
                { name: 'zhangsan2', tel: '1331234567', id: '2', disabled: false },
                { name: 'zhangsan3', tel: '1331234567', id: '11', disabled: false },
                { name: 'zhangsan4', tel: '1331234567', id: '13', disabled: false },
                { name: 'zhangsan5', tel: '1331234567', id: '14', disabled: false },
                { name: 'zhangsan6', tel: '1331234567', id: '15', disabled: false },
                { name: 'zhangsan7', tel: '1331234567', id: '16', disabled: false },
                { name: 'zhangsan8', tel: '1331234567', id: '17', disabled: false },
                { name: 'zhangsan9', tel: '1331234567', id: '18', disabled: false },
                // { name: 'zhangsan1', tel: '1331234567', id: '1' },
                // { name: 'zhangsan2', tel: '1331234567', id: '2' },
                // { name: 'zhangsan3', tel: '1331234567', id: '11' },
                // { name: 'zhangsan4', tel: '1331234567', id: '13' },
                // { name: 'zhangsan5', tel: '1331234567', id: '14' },
                // { name: 'zhangsan6', tel: '1331234567', id: '15' },
                // { name: 'zhangsan7', tel: '1331234567', id: '16' },
                // { name: 'zhangsan8', tel: '1331234567', id: '17' },
                // { name: 'zhangsan9', tel: '1331234567', id: '18' },
                // { name: 'zhangsan1', tel: '1331234567', id: '1' },
                // { name: 'zhangsan2', tel: '1331234567', id: '2' },
                // { name: 'zhangsan3', tel: '1331234567', id: '11' },
                // { name: 'zhangsan4', tel: '1331234567', id: '13' },
                // { name: 'zhangsan5', tel: '1331234567', id: '14' },
                // { name: 'zhangsan6', tel: '1331234567', id: '15' },
                // { name: 'zhangsan7', tel: '1331234567', id: '16' },
                // { name: 'zhangsan8', tel: '1331234567', id: '17' },
                // { name: 'zhangsan9', tel: '1331234567', id: '18' },
            ],
            loading: false,
            finished: false,
            disabledBtn: true,
        }
    },
    watch: {
        result(newV) {
            if (newV.length > 0) {
                this.disabledBtn = false
            } else {
                this.disabledBtn = true
            }
            if (newV.length == this.num) {
                this.list.forEach(item => {
                    item.disabled = true
                })
                newV.forEach(item => {
                    this.list.forEach(item1 => {
                        if (item == item1.id) {
                            item1.disabled = false
                        }
                    })
                })
            } else {
                this.list.forEach(item => {

                    item.disabled = false
                })
            }
        }

    },
    methods: {
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
            console.log(this.result, 'result');
        },
        toDelPer(){
            this.$router.push('/delPerMes')
        }
    }
}
</script>
<style lang="less" scoped>
.delete-person {
    position: relative;
    // height: 100vh;

    .delete-person-bottom {
        position: fixed;
        bottom: 0px;
        width: calc(100% - 32px);
        padding: 8px 16px;
        background-color: #fff;

    }

    .delete-person-content {
        padding: 0 16px;

        .van-search {
            padding: 12px 0;
        }

        .van-search .van-cell,
        .van-search__content--round {
            background-color: #fff !important;
            border-radius: 999px
        }

        .delete-person-list {
            border-radius: 8px;
        }

    }

}
</style>