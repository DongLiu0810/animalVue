<template>
    <div>
        <div class="text">testcomponents:使用组件</div>
        <span>{{message}}</span>
        <div class="userBox">
            <input type="text" placeholder="请输入用户名" v-model="message" class="userName">
            <input type="password" placeholder="请输入密码" class="passWord">
        </div>
    </div>
</template>

<script>
export default {
    name: "TestComponents",
    props: {
        message: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#text {
    color: red;
}
.userName {
    margin-top: 10px;
    display: block;
    width: 340px;
    height: 40px;
    border-radius: 8px;
    line-height: 35px;
}
.passWord {
    margin-top: 10px;
    display: block;
    width: 340px;
    height: 40px;
    border-radius: 8px;
    line-height: 35px;
}
.userBox {
    text-align: center;
    margin: 0 auto;
}
</style>
