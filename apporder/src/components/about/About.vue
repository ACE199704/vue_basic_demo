<template>
  <div class="row mt-5">
    <div class="col-4">
      <div class="list-group">
        <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
          <a class="list-group-item list-group-item-action">联系我们</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
          <a class="list-group-item list-group-item-action">点餐管理</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
          <a class="list-group-item list-group-item-action">派送信息</a>
        </router-link>
        <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
          <a class="list-group-item list-group-item-action">历史订单</a>
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template> 

<script>
export default {};
</script>

<style >
</style>