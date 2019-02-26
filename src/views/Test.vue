<template>
    <div>
        <TestComponents message="成功使用组件" />
        <LdButton @click="a" buttonText="按钮字段" />
        <button @click="a">213</button>
    </div>
</template>

<script>
// @ is an alias to /src
import TestComponents from "@/components/TestComponents.vue";
import LdButton from "@/components/ld-button.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
    name: "test",
    components: {
        TestComponents,
        LdButton
    },
    methods: {
        a: function() {
            //发送get请求
            axios
                .get("/api/login?ID=12345")
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
</script>
