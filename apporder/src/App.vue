<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <router-view name="orderingGuide"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="history"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">  
        <router-view name="delivery"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
</style>
