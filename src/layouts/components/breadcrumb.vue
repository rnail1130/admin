<template>
  <el-row>
    <el-col :span="1">
      <div class="isCollapse"  @click="handleToggle">
        <div class="menu-button-wrapper">
          <svg-icon :icon-class="collapse ? 'menu-unfold' : 'menu-fold'" class="menu-button" />
        </div>
      </div>
    </el-col>
    <el-col :span="23">
      <el-breadcrumb class="breadcrumb" separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(item, index) in list" :key="item.path">
            <!-- last item not required click -->
            <span v-if="index === list.length - 1">{{item.name}}</span>
            <router-link v-else :to="item.path">{{item.name}}</router-link>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>

<script>
  import { mapGetters } from 'vuex'
// 每次添加路由都需要配置对应的面包屑
const breadcumbs = {
  '/dashboard': '首页',
  '/system': '系统管理',
  '/system/sysuser': '角色管理',
  '/system/douser': '操作员管理',
  '/system/log': '日志管理',
  '/personcard': '市民卡管理',
  '/personcard/management': '用户管理',
  '/personcard/certification': '手动认证管理',
  '/personcard/userinfo': '市民信息管理',
  '/personcard/vircard': '实体卡管理',
  '/merchants': '商户信息管理',
  '/merchants/shopper': '商户管理',
  '/merchants/terminal': '终端管理',
  '/merchants/history': '商户流水查询',
  '/ticket': '零售票券',
  '/ticket/product': '产品管理',
  '/ticket/order': '订单管理',
  '/ticket/settlement': '结算单管理',
  '/app': 'APP数据管理',
  '/app/new': '新闻文章管理',
  '/app/ad': '广告管理',
  '/app/lmessage': '留言管理'
}
function getBreadcrumbs(breads, path) {
  const matches = []
  path
      // Remove trailing slash "/" from path
      .replace(/\/$/, '')
      // Split pathname into sections
      .split('/')
      // Reduce over the sections and breads map for each section.
      .reduce((previousSection, currentSection) => {
        // Combine the last route section with the currentSection.
        // For example, `pathname = /1/2/3` results in match checks for
        // `/1`, `/1/2`, `/1/2/3`.
        const pathSection = !currentSection ? '/' : `${previousSection}/${currentSection}`
        const breadcrumbName = breads[pathSection]
        // filter '首页'('/')
        if (currentSection && breadcrumbName) {
          matches.push({
            path: pathSection,
            name: breadcrumbName
          })
        }
        return pathSection === '/' ? '' : pathSection
      })
  return matches
}
export default {
  name: 'breadcrumb',
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters(['collapse', 'userInfo']),
    roleNames() {
      return this.userInfo.roleNames && this.userInfo.roleNames.join(',')
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(newRoute) {
        this.list = getBreadcrumbs(breadcumbs, newRoute.path)
      }
    }
  },
  methods: {
    handleToggle() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    }
    // handleAvatarError() {
    //   return true
    // },
    // async handleDropdown(command) {
    //   if (command === 'logout') {
    //     await this.$store.dispatch('user/clearInfo')
    //     this.$router.push('/login')
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
  .el-row{
    position: fixed;
    top: $title-bar-height;
    width: 100%;
    z-index: 2000;
    border-bottom: 1px solid #f4f4f5;
  }
  .isCollapse{
    height:$bread-height;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .menu-button-wrapper {
      color: #404040;
      &:hover {
        color: $--color-primary;
        background-color: #f9f9fc;
      }
      .menu-button {
        font-size: 20px;
      }
    }
  }
  .breadcrumb {
    padding: 12px;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background-color: #d8dce5;
    }
  }
  /* breadcrumb transition */
	.breadcrumb-enter-active,
	.breadcrumb-leave-active {
		transition: all 0.5s;
	}

	.breadcrumb-enter,
	.breadcrumb-leave-active {
		opacity: 0;
		transform: translateX(20px);
	}

	.breadcrumb-move {
		transition: all 0.5s;
	}

	.breadcrumb-leave-active {
		position: absolute;
	}
</style>
