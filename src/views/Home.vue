<template>
    <div>
        <div class="wrapper">
            <p>Cookbook</p>
            <h1>Bar cocktails</h1>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
        margin-right: 15%;
        color: #fff;
        h1 {
            font-size: 8em;
            text-transform: uppercase;
        };
        p {
            font-size: 4em
        };
    }
</style>