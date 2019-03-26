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
                    <Icon type="ios-flame" /> 推荐
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-cube" /> 物种分类
                        </template>
                        <MenuGroup title="动物">
                            <MenuItem name="3-1">陆生动物</MenuItem>
                            <MenuItem name="3-2">水生动物</MenuItem>
                            <MenuItem name="3-3">两栖动物</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="植物">
                            <MenuItem name="3-4">种子植物</MenuItem>
                            <MenuItem name="3-5">狍子植物</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-planet" />地区分类
                        </template>
                        <MenuGroup title="陆地">
                            <MenuItem name="4-1">亚细亚洲</MenuItem>
                            <MenuItem name="4-2">欧罗巴洲</MenuItem>
                            <MenuItem name="4-3">北亚美利加洲</MenuItem>
                            <MenuItem name="4-4">南亚美利加州</MenuItem>
                            <MenuItem name="4-5">阿非利加洲</MenuItem>
                            <MenuItem name="4-6">大洋洲</MenuItem>
                            <MenuItem name="4-7">南极洲</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="海洋">
                            <MenuItem name="4-4">太平洋</MenuItem>
                            <MenuItem name="4-5">大西洋</MenuItem>
                            <MenuItem name="4-5">印度洋</MenuItem>
                            <MenuItem name="4-5">北冰洋</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                    <Icon type="ios-pie" /> 统计分析
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="ios-navigate" /> 时事新闻
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="ios-cart" /> 在线商城
                    </MenuItem>
                    <MenuItem name="5">
                    <Icon type="ios-person" /> 个人信息
                    </MenuItem>
                </Menu>
            </div>
            <div class="searchBox">
                <Input search enter-button placeholder="Enter something..." />
            </div>
        </div>
        <router-view />
        <div class="footer">
            <div class="footBox">
                <div class="footLeft">
                    <ul>
                        <li>网站首页</li>
                        <li>企业合作</li>
                        <li>人才招聘</li>
                        <li>联系我们</li>
                        <li>帮助中心</li>
                        <li>意见反馈</li>
                        <li>友情链接</li>
                    </ul>
                    <p>Copyright @ 2019 anmial.com All Right Reserved | 京ICP备 1003893号-12</p>
                </div>
                <div class="footRight">
                    <Icon type="ios-cube" size="40" />
                    <Icon type="ios-cube" size="40" />
                    <Icon type="ios-cube" size="40" />
                </div>
            </div>
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
        background-color: #1c1f21;
        height: 100px;
    }

    .footBox {
        vertical-align: middle;
    }

    .footLeft {
        padding: 0px 0px 0px 60px;
        display: inline-block;
    }

    .footRight {
        float: right;
        margin-right: 50px;
        margin-top: 20px;
    }

    .footLeft ul {
        list-style: none;
        color: #c8cdd2;
    }

    .footLeft p {
        padding-left: 20px;
    }

    .footLeft ul li {
        display: inline-block;
        padding: 20px 20px 10px 20px;
    }
</style>