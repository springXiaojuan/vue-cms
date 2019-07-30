<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" ref="numberbox" @change="getCount"/>
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
        'max'
    ],
    mounted() {
        mui('.mui-numbox').numbox()
    },
    methods: {
        getCount(){
            this.$emit('getCount',this.$refs.numberbox.value)
        }
    },
    watch: {
        max(newval){
            mui('.mui-numbox').numbox().setOption('max',newval)
        }
    },
}
</script>