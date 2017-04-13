<template>
    <div>
        <router-link to="/">返回</router-link>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>

        <el-radio v-model="isDisable" label="禁用">禁用</el-radio>
        <el-radio v-model="isDisable" label="选中且禁用">选中且禁用</el-radio>


        <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :before-upload="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="false" type="circle" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        <el-button
                type="primary"
                @click="openFullScreen"
                v-loading.fullscreen.lock="fullscreenLoading">
            显示整页加载，3 秒后消失
        </el-button>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                tableData: 'tableDisplayData'
            }),
            isDisable: {
                get(){
                    return this.$store.state.table.isDisable
                },
                set(isDisable){
                    this.$store.dispatch('setDisable',isDisable)
                }
            }
        },
        methods: {
            handleRemove(file,fileList) {
                console.log(file,fileList)
            },
            handlePreview(file) {
                console.log(file)
            },
            openFullScreen() {
                this.fullscreenLoading = true
                setTimeout(() => {
                    this.fullscreenLoading = false
                }, 1000)
            }
        },
        data() {
            return {
                fullscreenLoading:false,
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },{
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }]
            }
        }
    }
</script>