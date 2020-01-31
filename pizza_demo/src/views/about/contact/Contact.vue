<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">联系我们</h3>
      <div class="card-text">
        <p>联系我们</p>

        <router-link tag="a" :to="{name:'people'}" class="mr-5">联系人</router-link>
        <router-link tag="a" :to="{name:'phoneNum'}">联系电话</router-link>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>