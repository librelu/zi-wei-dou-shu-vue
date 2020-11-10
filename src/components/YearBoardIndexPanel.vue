<template>
    <div class="d-flex justify-center align-center">
        <v-btn elevation="2" icon tile v-on:click="decreaseYearBoardIndex">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        <div class="year-min-width">第{{chineseNumber[yearBoardIndex]}}大運</div>
        <v-btn elevation="2" icon tile v-on:click="increaseYearBoardIndex">
            <v-icon>
                mdi-arrow-right
            </v-icon>
        </v-btn>
    </div>
</template>
<style>
.year-min-width {
    min-width: 80px;
}
</style>
<script>
export default {
    data: () =>{
        return {
            chineseNumber: ["零","一","二","三","四","五","六","七","八","九","十","十一","十二"],
            yearBoardIndex: 1,
        }
    },
    methods: {
        increaseYearBoardIndex(){
            this.yearBoardIndex = this.yearBoardIndex + 1
            if (this.yearBoardIndex > 12) {
                this.yearBoardIndex = 1 
            }
            this.$store.dispatch('setYearBoard',
                {
                    gender: this.$store.getters.gender,
                    birthday: this.$store.getters.birthday,
                    index: this.yearBoardIndex
                },
            )
        },
        decreaseYearBoardIndex(){
            this.yearBoardIndex = this.yearBoardIndex - 1
            if (this.yearBoardIndex < 1) {
                this.yearBoardIndex = 12
            }
            this.$store.dispatch('setYearBoard',
                {
                    gender: this.$store.getters.gender,
                    birthday: this.$store.getters.birthday,
                    index: this.yearBoardIndex
                },
            )
        }
    }
}
</script>
