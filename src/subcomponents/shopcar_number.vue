<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="count" ref="numberbox" @change="getCount"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>

</div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'

export default {
    data() {
        return {
            value: 1
        }
    },
    props:[
        'count',
        'id'
    ],
    mounted() {
        mui('.mui-numbox').numbox()
        console.log(this.id)
    },
    methods: {
        getCount(){
            // this.$emit('getCount',)
            
            let goodsInfo = {id:this.id,count:this.$refs.numberbox.value}
            this.$store.commit('updateGoodsInfo',goodsInfo)

        }
    }
}
</script>