<template>
    <div>
      <ul className="menu">
        <li v-for="cocktail in this.cocktails" :key="cocktail.code" className="menu__item" >
          <router-link 
            :to="`/${cocktail.code}`"
            :class="{ active: code === $route.params.code }"
            > <i class="ri-goblet-line me-3"></i> {{ cocktail.name }}</router-link>
        </li>
      </ul>
    </div>
</template>
  

<script>
    export default {
      data() {
          return {
            cocktails: [
                { code: 'margarita', name: 'Margarita' },
                { code: 'mojito', name: 'Mojito' },
                { code: 'a1', name: 'A1' },
                { code: 'kir', name: 'Kir' },
              ],
          };
      }, 
  }


</script>
  
<style lang="scss" scoped>


  li,ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .menu {
    position: fixed;
    width: 58px;
    height: 100vh;
    background: #151515;
    color: #000;
    list-style-type: none;
    z-index: 100;
    overflow: hidden;
    transition-duration: .5s;
    &__item a {
      display: flex;
      width: 100%;
      padding: 10px 0;
      font-size: 22px;
      text-decoration: none;
      color: #fff !important;
      padding: 30px 20px;
      transition-duration: .5s;
      &:hover {
        color: #000;
        background-color: #f8f5f5bd;
      } 
    }

    &:hover {
      width: 300px;

    }

    
  }

  @media (min-width: 1440px) {
    .menu {
      width: 300px;
    }
  }
  .router-link-active {
    color: #000;
    background-color: #f8f5f5bd;
  }
</style>