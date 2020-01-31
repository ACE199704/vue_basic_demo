<template>
  <div class="admin">Admin</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Henrry"
    };
  },
  beforeRouteEnter(to, from, next) {
    // alert("Hello " + this.name);
    // next();
    next(vm => {
      alert("Hello " + vm.name);
    });
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("确认离开吗？") == true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>