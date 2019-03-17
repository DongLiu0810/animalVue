<template>
    <div class="login">
        <div class="loginBg">
            <div class="loginCenter">
                <div class="loginForm">
                    <div class="loginBox">
                        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                            <div>
                                <FormItem prop="user">
                                    <Input type="text" v-model="formInline.user" placeholder="Username">
                                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                                    </Input>
                                </FormItem>
                            </div>
                            <div>
                                <FormItem prop="password">
                                    <Input type="password" v-model="formInline.password" placeholder="Password">
                                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                                    </Input>
                                </FormItem>
                            </div>
                            <FormItem>
                                <Button type="primary" @click="click">登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    name: "login",
    data() {
        return {
            //账号密码的规则与校验
            formInline: {
                user: "",
                password: ""
            },
            ruleInline: {
                user: [
                    {
                        required: true,
                        message: "Please fill in the user name",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "Please fill in the password.",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        min: 6,
                        message:
                            "The password length cannot be less than 6 bits",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    components: {},
    computed: {},
    methods: {
        click: function() {
            //发送get请求
            // axios
            //     .get(
            //         `/api/login?username=${this.formInline.user}&password=${
            //             this.formInline.password
            //         }`
            //     )
            //     .then(response => {
            //         if (response.data == "登录页面") {
            //             this.$router.push("/home");
            //             //window.location.href = "http://localhost:8080/about";
            //         }
            //     })
            //     .catch(function(error) {
            //         console.log(error);
            //     });
             var data ={
                username:this.formInline.user,
                password:this.formInline.password
            };
            axios.post('/api/login',data)
                .then(response => {
                    if (response.data == "登录页面") {
                        this.$router.push("/home");
                        //window.location.href = "http://localhost:8080/about";
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    created() {}
};
</script>
<style>
.loginBg {
    background-image: url(".././img/Login/loginBg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.loginCenter {
    height: 600px;
    position: relative;
}
.loginForm {
    position: absolute;
    top: 80px;
    right: 180px;
    background: #ccc;
    height: 240px;
    width: 300px;
    border-radius: 10px;
}
.loginBox {
        text-align: center;
    padding-top: 50px;
}
</style>
