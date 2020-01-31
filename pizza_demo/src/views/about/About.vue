<template>
  <div class="row">
    <!-- <h1>This is an about page</h1> -->
    <div class="col-4">
      <ul class="list-group">
        <router-link :to="{name:'historyLink'}" tag="li" class="list-group-item">历史记录</router-link>
        <router-link :to="{name:'DeliveryLink'}" tag="li" class="list-group-item">配送记录</router-link>
        <router-link :to="{name:'OrderingGuideLink'}" tag="li" class="list-group-item">点餐</router-link>
        <router-link :to="{name:'contackLink'}" tag="li" class="list-group-item">联系我们</router-link>
      </ul>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
