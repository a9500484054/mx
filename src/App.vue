<template>
  <div class="body">

    <Menu />

    <router-view></router-view>

  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'


export default {
  components: {  
    Menu,
  },  
  data() {
    return {
      currentCocktail: '',
    };
  },
  created() {

  },
  methods: {
  
  }
};
</script>

<style lang="scss" >
@import url(https://fonts.googleapis.com/css?family=Quicksand:400,300); 
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);

body {
  height: 100%;
  width: 100%;
  color: white;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Quicksand', 'Open Sans', 'Helvetica Neue', 'Helvetica', sans-serif;
  background-color: #090909a1 !important;
  background-size:cover;
  
}

</style>