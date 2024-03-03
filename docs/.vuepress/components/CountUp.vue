<template>
    <div>
        <ClientOnly> <!--这里是一个引用其他组件时需要的标签，具体参考:vuepress在Markdown使用vue https://vuepress.vuejs.org/zh/guide/using-vue.html-->
            <slot name="before">
                <span ref="countUp"></span>
            </slot>
        </ClientOnly>
    </div>
</template>
<script>
export default {
    name:"CountUp",
    props:{
        startVal:{          //初始值
            type:Number,
            default:0
        },
        endVal:{            //结束值
            type:Number,
            required:true
        },
        decimalPlaces:{     //小数位数
            type:Number,
            default:0
        },
        duration:{          //持续时间
            type:Number,
            default:2
        },
        delay:{             //延迟
            type:Number,
            default:0
        }

    },
    mounted(){
        this.init();
    },
    data(){
        return{
            counter:null
        }
    },
    methods:{
        init(){
            import('countup.js').then(module => { //动态调用插件
                this.$nextTick(() => {
                    this.counter = new module.CountUp(this.$refs.countUp,this.endVal,{
                        startVal:this.startVal,
                        decimalPlaces:this.decimalPlaces,
                        duration:this.duration
                    })
                });

                setTimeout(() => {
                    this.counter.start();   //插件countup自带的方法
                },this.delay);
            });
        }
    },
    beforeDestroy(){            //销毁
        this.counter.reset();
        this.counter = null;
    }
}
</script>