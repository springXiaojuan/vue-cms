<template>
    <div class="newInfo-container">
       <div class="title"> {{newInfo.title}} </div>
        <div class="subtitle">
            <span>发表时间：{{newInfo.add_time | dateFormat}}</span>
            <span>点击：{{newInfo.click}}次</span>
        </div>
        <hr>
        <div class="content" v-html="newInfo.content"></div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from '../../subcomponents/comment.vue'
export default {
    data(){
        return {
            id: this.$route.params.id,
            newInfo:{}
        }
    },
    components:{
        "comment":comment
    },
    created(){
        this.getnewInfo();
    },
    methods:{
        getnewInfo:function(){
            this.$http.get('api/getnew/'+this.id).then(rep => {
                this.newInfo  = rep.data.message[0]
            })
        }
    }
}
</script>

<style lang="scss">
.newInfo-container{
    padding-left: 10px;
    padding-right: 10px;
    .title{
        font-size: 16px;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        color: #c0c0c0;
        font-size: 12px;
    }
    .content{
        img{
            width: 100%
        }
    }
}

</style>
