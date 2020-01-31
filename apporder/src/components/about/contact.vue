<template>
  <div>
    <div class="card">
      <div class="card-header h3">联系我们</div>
      <div class="card-body">
        <h5>联系我们</h5>
        <p class="card-text">欢迎光临</p>
        <button class="btn btn-info">
          <router-link :to="{name:'peopleLink'}" style="color:white">联系人</router-link>
        </button>
        <button class="btn btn-info ml-5">
          <router-link :to="{name:'numberLink'}" style="color:white">联系电话</router-link>
        </button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
</style>