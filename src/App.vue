<template>
    <div id="app">
        <div id="nav">
            <div class="topLogo">
                <img class="Logo" src="../src/img/Home/logo.png">
            </div>
            <div class="topText">
                <span>中国濒危物种保护协会</span>
            </div>
            <div class="topLogin">
                <router-link to="/login">登录</router-link> |
                <router-link to="/regist">注册</router-link>
            </div>
            <!-- <div class="topbg"></div> -->
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/test">Test</router-link> -->
        </div>
        <div class="nav">
            <div class="navBox">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                    <MenuItem name="1">
                    <Icon type="ios-home" /> 首页
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon type="ios-people" /> 用户管理
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" /> 统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                    <Icon type="ios-construct" /> 综合设置
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="ios-construct" /> 联系我们
                    </MenuItem>
                    <MenuItem name="5">
                    <Icon type="ios-construct" /> 个人信息
                    </MenuItem>
                </Menu>
            </div>
            <div class="searchBox">
                <Input search enter-button placeholder="Enter something..." />
            </div>
        </div>
        <router-view/>
        <div class="footer">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme1: "dark"
        };
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}
#nav {
    background-image: url("./img/Home/topBg.jpg");
    height: 100px;
    position: relative;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.topLogo {
    /* background-image: url("./img/Home/logo.png");
    background-repeat: no-repeat;
    background-size: contain; */
    display: inline-block;
    vertical-align: middle;
    margin-left: 150px;
    height: 100px;
    width: 100px;
}
.Logo {
    width: 100%;
    height: 100%;
}
.topText {
    display: inline-block;
    vertical-align: middle;
    margin-top: 20px;
    margin-left: 40px;
    font-size: 40px;
}
.nav {
    background: #515a6e;
    width: 100%;
}
.navBox {
    display: inline-block;
    vertical-align: middle;
    margin-left: 50px;
}
.topLogin {
    position: absolute;
    font-size: 15px;
    right: 40px;
    top: 70px;
}
.searchBox {
    display: inline-block;
    margin-top: 13px;
    margin-right: 80px;
    float: right;
    width: 200px;
    height: 45px;
}
.footer {
    width: 100%;
    padding: 20px;
}
</style>
