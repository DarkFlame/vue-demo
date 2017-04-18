<template>
    <el-row type="flex" justify="start">
        <el-col :span="4">
            <el-menu :router="true" :default-active="subNavDefaultActive" class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一{{subNavDefaultActive}}</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="table">表格</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="chart"><i class="el-icon-menu"></i>图表</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="20">
            <router-view style="padding: 10px;"></router-view>
        </el-col>
    </el-row>
</template>

<script>
    import {routerView} from 'vue-router'

    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default  {
        created(){
            this.setNavDefaultActive()
        },
        watch: {
            '$route' (to,from) {
                this.setNavDefaultActive()
            }
        },
        computed: {
            ...mapGetters('nav/',{
                subNavDefaultActive: 'subNavDefaultActive'
            })
        },

        methods: {
            setNavDefaultActive(){
                this.$store.dispatch('nav/setNavDefaultActive',this.$store.state.route.path.match(/\/([^\/]+)$/)[1])
            }
        }
    }
</script>