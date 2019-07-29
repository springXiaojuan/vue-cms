<template>
    <div class="comment-container">
        <h3>评论区</h3>
        <hr>
        <textarea placeholder="请输入评论内容"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in commentList" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content === 'undefined' ? '这个人很懒，什么也没有留下' : item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageindex:1,
            commentList:[]
        }
    },
    props:["id"],
    created(){
        this.getComments();
    },
    methods: {
        getComments:function(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(rep => {
                this.commentList = this.commentList.concat(rep.data.message)
            })
        },
        getMore:function(){
            this.pageindex ++
            this.getComments();
        }
    },  
}
</script>

<style lang="scss" scoped>
.comment-container{
    h3{
        font-size: 18px
    }
    textarea{
        margin: 0;
        height: 100px;
    }
    .cmt-list{
        margin-top: 15px;
        margin-bottom: 15px;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                line-height: 35px;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}

</style>
