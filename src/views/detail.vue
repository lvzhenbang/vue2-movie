<template>
    <div>
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <router-link to="/"><i class="el-icon-arrow-left"></i>电影详情</router-link>
            </el-menu-item>
        </el-menu>
        <el-card>
            <div>
                <div class="p-inline">
                    <div class="p-block p-block--left">
                        <img :src="movie.poster_lg" class="image">
                    </div>
                    <div class="p-block p-block--right">
                        <div class="p-block-item">
                            <strong>{{movie.title}}</strong> ——
                            <small>{{movie.original_title}}</small>
                        </div>
                        <div class="p-block-item">
                            类型：
                            <el-tag
                                    class="tag"
                                    v-for="(item,index) in movie.genres"
                                    key="index">
                                {{item}}
                            </el-tag>
                        </div>
                        <div class="p-block-item">
                            评分：{{movie.rating}}
                        </div>
                        <div v-if="movie.directors && movie.casts">
                            <p class="p-title">导演: </p>
                            <ul class="p-body">
                                <li class="p-item" v-for="(item,index) in movie.directors" key="index">
                                    <img class="p-pic" :src="item.avatars.small" alt="">
                                    <div class="p-name">{{item.name}}</div>
                                </li>
                            </ul>

                            <p class="p-title">主演: </p>
                            <ul class="p-body">
                                <li class="P-item" v-for="(item,index) in movie.casts" key="index">
                                    <img class="p-pic" :src="item.avatars.small" alt="">
                                    <div class="p-name">{{item.name}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                movie: {}
            }
        },
        created() {
            let movieId = this.$route.params.movieId;
            this.$http.get(`/api/movie/${movieId}`)
                .then(res => {
                    this.movie = res.data
                })
                .catch(err => {
                    this.$message.error(`${err.message}`, 'ERROR!')
                    console.log(err)
                })

        }
    }
</script>
<style>
    .p-inline{
        display: inline-block;
    }
    .p-block{
        float: left;
        text-align: left;
    }
    .p-block--left{
        padding: 0 30px;
    }
    .p-block-item{
        margin: 5px 0;
    }
    .p-title,
    .p-body{
        margin-top: 5px;
    }
    .p-item{
        text-align:center;
    }
    .p-pic{
        width: 100%;
    }
    .p-name{
        display: block;
    }
</style>