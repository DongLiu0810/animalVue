<template>
    <div class="login" style="width:450px;margin:25px auto">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名" prop="name">
                <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="密码" prop="password">
                <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
            </FormItem>
            <FormItem label="确认密码" prop="checkPassword">
                <Input type="password" v-model="formValidate.checkPassword" placeholder="confirm your password"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
                <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="城市" prop="city">
                <Select v-model="formValidate.city" placeholder="Select your city">
                    <Option value="纽约">纽约</Option>
                    <Option value="伦敦">伦敦</Option>
                    <Option value="悉尼">悉尼</Option>
                </Select>
            </FormItem>
            <FormItem label="时间">
                <Row>
                    <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="性别" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">男士</Radio>
                    <Radio label="female">女士</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="兴趣" prop="interest">
                <CheckboxGroup v-model="formValidate.interest">
                    <Checkbox label="篮球"></Checkbox>
                    <Checkbox label="足球"></Checkbox>
                    <Checkbox label="跑步"></Checkbox>
                    <Checkbox label="看电影"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem label="描述" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="regist('formValidate')">注册</Button>
                <Button @click="reset('formValidate')" style="margin-left: 8px">清空</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    name: "regist",
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.formValidate.checkPassword !== "") {
                    // 对第二个密码框单独验证
                    this.$refs.formValidate.validateField("checkPassword");
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.formValidate.password) {
                callback(new Error("两次密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            formValidate: {
                name: "",
                mail: "",
                password: "",
                checkPassword: "",
                city: "",
                gender: "",
                interest: [],
                date: "",
                time: "",
                desc: ""
            },
            ruleValidate: {
                name: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur"
                    }
                ],
                password: [
                    { validator: validatePass, trigger: "blur", required: true }
                ],
                checkPassword: [
                    {
                        validator: validatePassCheck,
                        trigger: "blur",
                        required: true
                    }
                ],
                mail: [
                    {
                        required: true,
                        message: "邮箱不能为空",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "不正确的邮箱格式",
                        trigger: "blur"
                    }
                ],
                city: [
                    {
                        required: true,
                        message: "请选择城市",
                        trigger: "change"
                    }
                ],
                gender: [
                    {
                        required: true,
                        message: "请选择性别",
                        trigger: "change"
                    }
                ],
                interest: [
                    {
                        required: true,
                        type: "array",
                        min: 1,
                        message: "",
                        trigger: "change"
                    },
                    {
                        type: "array",
                        max: 2,
                        message: "最好选择两项",
                        trigger: "change"
                    }
                ],
                date: [
                    {
                        required: true,
                        type: "date",
                        message: "请选择日期",
                        trigger: "change"
                    }
                ],
                time: [
                    {
                        required: true,
                        type: "string",
                        message: "请选择时间",
                        trigger: "change"
                    }
                ],
                desc: [
                    {
                        required: true,
                        message: "请简单描述一下自己",
                        trigger: "blur"
                    },
                    {
                        type: "string",
                        max: 20,
                        message: "描述不能多于20个字",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    components: {},
    computed: {},
    methods: {
        regist: function(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    //发送post请求
                    //注意this作用域，ES5函数的写法与ES6箭头函数this的作用域是不一样的
                    axios
                        .post("/api/regist", this.formValidate)
                        .then(response => {
                            if (response.data == "注册") {
                                this.$Message.success("注册成功!");
                            }
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                } else {
                    this.$Message.error("请完善信息!");
                }
            });
        },
        //信息清空重新填写
        reset: function(name) {
            this.$refs[name].resetFields();
            this.$Message.success("信息已清空，请重新填写!");
        }
    },
    created() {}
};
</script>
