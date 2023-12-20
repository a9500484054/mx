<template>
    <div class="main-block">

        <div v-if="this.dataReceived">
        
            <div v-for="cocktail in this.drinks.drinks" :key="cocktail.id">
                <CocktailItem :cocktail="cocktail"/>
            </div>

        </div>
        <div v-else>
            <Loader />
        </div>
    </div>
</template>

<script>
import CocktailItem from '@/components/CocktailItem.vue'
import Loader from '@/components/Loader.vue'

export default {
    components: {  
        CocktailItem,
        Loader,
    },
    data() {
        return {
            drinks: [],
            dataReceived: false
        };
    },
    methods: {
        cocktailData() {
            this.dataReceived = false;
            setTimeout(() => {
                this.drinks = this.$store.state.cocktails;
                this.dataReceived = true;
            }, 2000);
        },
    },
    mounted() {
        this.cocktailData();
    },
    created() {
        this.$router.beforeEach((to, from, next) => {
            this.cocktailData();
            next();
        });
    }
}
</script>

<style lang="scss" scoped>
    .main-block {
        padding: 20px;
        padding-left: 4em;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
    @media (min-width: 1440px) {
        .main-block {
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
</style>