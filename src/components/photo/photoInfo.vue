<template>
    <div class="photoinfo-container">
    
        <h3>{{photoInfo.title}}</h3>
        <div class="subtitle">
            <span>发表时间：{{photoInfo.add_time | dateFormat}}</span>
            <span>点击：{{photoInfo.click}}次</span>
        </div>
    <hr>
   <div class="thums">
        <vue-preview :slides="thumbs" @close="handleClose"></vue-preview>
   </div>
    <div class="content" v-html="photoInfo.content"></div> 
     <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from '../../subcomponents/comment.vue'
export default {
    data(){
        return{
            id: this.$route.params.id,
            photoInfo:{},
            thumbs:[]
        }
    },
    created() {
        this.getphotoInfo()
        this.getThumbs()
    },
    methods: {
        getphotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(rep => {
               this.photoInfo = rep.data.message[0]
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/' + this.id).then(rep => {
                rep.data.message.forEach(item => {
                    item.w = 600
                    item.h = 400
                    item.msrc = item.src

                });
                this.thumbs = rep.data.message
            })
        },
         handleClose () {
        console.log('close event')
      }
    },
    components:{
        "comment":comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
    width: 100%;
    
    padding: 0 15px;
    h3{
        font-size: 16px;
        text-align: center;
        margin: 10px 0;
    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        color: #999;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
}
</style>
