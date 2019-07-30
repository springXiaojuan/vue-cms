<template>
    <div class="desc-container">
        <h3> {{desc.title}}</h3>
        <hr>
        <div class="content" v-html="desc.content">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            desc:{}
        }
    },
    created() {
        this.getGoodsDesc()
    },
    methods: {
        getGoodsDesc(){
            this.$http.get('api/goods/getdesc/' + this.id).then(rep => {
                this.desc = rep.data.message[0]
            })
        }
    },
    
}
</script>

<style lang="scss">

    .desc-container{
        padding: 10px;
        h3{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }

</style>
