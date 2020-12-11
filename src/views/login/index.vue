<template>
  <div class="login-container">
    <van-nav-bar class="app-nav-bar" title="注册 / 登陆" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <!-- 登陆 -->
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button class="send-btn" size="small" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap">
      <van-button class="login-btn" type="primary" block @click="onLogin">登陆</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  methods: {
    async onLogin () {
      try {
        const res = await login(this.user)
        console.log(res)
      } catch (e) {
        // TODO handle the exception
      }
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    font-size: 10px;
    color: #666666;
    // .van-button--default {
    //   font-size: 0.3rem;
    // }
  }
  .login-btn-wrap{
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fd;
      border: none;
    }
    .van-button--normal{
      font-size: 0.5rem !important;
    }
  }
}
</style>
