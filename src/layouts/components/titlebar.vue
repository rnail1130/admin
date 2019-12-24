<template>
  <div class="title-bar">
    <div class="title-bar-left">
      <img src="" alt="">
      <span>酒城市民云后台管理系统</span>
      <el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
      >
      </el-input>
    </div>

    <div class="title-bar-right">
      <div class="ourse-point user">
        <i class="el-icon-user"></i>
        admin
        <i class="el-icon-arrow-down"></i>
      </div>

      <el-dropdown trigger="click" class="message">
        <div class="ourse-point ">
          <el-badge :value="3" class="item">
            <i class="el-icon-chat-square"></i>
          </el-badge>
        </div>
        <el-dropdown-menu slot="dropdown" style="padding: 0px">
          <el-container class="message-con">
            <el-header>
              <div>
                消息中心
              </div>
              <div class="set"  @click="handleEdit()">
                接收设置
              </div>
            </el-header>
            <el-main>
              <el-row>
                <el-col :span="24">
                  <div class="mesf">
                    全部消息
                  </div>
                  <div class="set">
                    (<span class="num">10</span>)
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="mesf">
                    产品消息
                  </div>
                  <div class="set">
                    (<span class="num">10</span>)
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="mesf">
                    安全消息
                  </div>
                  <div class="set">
                    (<span class="num">10</span>)
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="mesf">
                    服务消息
                  </div>
                  <div class="set">
                    (<span class="num">10</span>)
                  </div>
                </el-col>
              </el-row>
            </el-main>
          </el-container>

        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown @command="handleDropdown">
        <div class="ourse-point">
          <i class="el-icon-s-tools set"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'titlebar',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['collapse', 'userInfo']),
      roleNames() {
        return this.userInfo.roleNames && this.userInfo.roleNames.join(',')
      }

    },
    methods: {
      handleEdit(){
        this.$refs.dialog.open()
      },
      async handleDropdown(command) {
        if (command === 'logout') {
          await this.$store.dispatch('user/clearInfo')
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title-bar {
    background-color: white;
    width: 100%;
    height: $title-bar-height;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    font-weight: bolder;
    color: grey;
    z-index: 1999;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

    .title-bar-left {
      width: 600px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .el-input {
        width: 40%;
        margin-left: 10%;
      }
    }

    .title-bar-right {
      height: $title-bar-height;
      width: 300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .user, .set {
      font-size: 18px;
      font-weight: normal;

    }

    .el-dropdown-menu {
      padding: 0px !important;
    }

    .ourse-point {
      width: 100px;
      text-align: center;
      height: $title-bar-height;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }

    .ourse-point:hover {
      background-color: #e6f7ff;
    }

  }

  .message-con {
    font-size: 12px;
    .el-header {
      background-color: #e6f7ff;
      height: 40px !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 180px;

      .set {
        color: dodgerblue;
        cursor: pointer;
      }
    }

    .el-main  {
      padding: 0 20px !important;
      .el-col{
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 40px;
      }
      .mesf{
        cursor: pointer;
      }
      .mesf:hover{
        color: dodgerblue;
      }
      .num{
        color: red;
      }
    }
  }

</style>
