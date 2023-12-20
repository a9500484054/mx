<template>
    <div>
        <div class="card p-2 mb-3">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <h2>{{ cocktail.strDrink }} </h2>
                    </div>

                    <div class="mb-3 d-flex flex-wrap">
                        <div class="badge"> {{ cocktail.strCategory }}</div>
                        <div class="badge"> {{ cocktail.strAlcoholic }}</div>
                        <div class="badge"> {{ cocktail.strGlass }}</div>
                    </div>

                    <div class="mb-3">
                        <h4>Instructions:</h4>
                        <div className="text">{{ cocktail.strInstructions }}</div>
                    </div>
                    
                    <div class="mb-3">
                        <h4>Ingredient</h4>
                        <ul>
                            <li v-for="ingredient in this.checkIngredient(cocktail)" :key="ingredient.id">
                                {{ ingredient }}
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="img-container">
                        <img v-lazy="cocktail.strDrinkThumb" alt="Image" class="img-fluid" >
                        <!-- <img :src="cocktail.strDrinkThumb" alt="Image" class="img-fluid" > -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    
    export default {
        props: {
            cocktail: {
                type: Object,
                required: true
            }
        },
        methods: {
            checkIngredient(data) {
                let existingIngredient = [];
                for (let i = 1; i <= 15; i++) {
                    let key = `strIngredient${i}`;
                    if (data[key]) {
                        existingIngredient.push(data[key]);
                    }
                }
                return existingIngredient;
            }

        },
    }
</script>

<style lang="scss" scoped>
    .badge {
        background-color: #fff;
        color: #000;
        border-radius: 8px;
        margin-right: 4px;
        margin-bottom: 4px;
    }

    .card {
        color: #fff !important;
        background: #00000045 !important;
        padding: 30px !important;
        
    }

    .img-container {
        overflow: hidden;
        border-radius: 4px;
    }
    .img-container img {
        width: 100%;
        height: auto;
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.2);
        }
    }

    
</style>