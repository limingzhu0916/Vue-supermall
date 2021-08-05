<template>
  <div id="profile">
    <nav-bar class="profile-nav-bar">
      <div slot="center" class="my-profile">我的档案</div>
    </nav-bar>
    <profile-top-bar />
    <profile-info />
    <profile-category />
    <profile-cart />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import ProfileTopBar from './childComps/ProfileTopBar.vue'
import ProfileInfo from './childComps/ProfileInfo.vue'
import ProfileCategory from './childComps/ProfileCategory.vue'
import ProfileCart from './childComps/ProfileCart.vue'

export default {
  components: {
    NavBar,
    ProfileTopBar,
    ProfileInfo,
    ProfileCategory,
    ProfileCart
  },
}
</script>

<style scoped>
.profile-nav-bar{
  background-color: var(--color-tint);
}
.my-profile{
  color: #fff;
}
</style>