<template>
    <div class="d-flex justify-center align-center">
        <v-btn elevation="2" icon tile v-on:click="decreaseIndex">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        <div class="year-min-width">第{{chineseNumber[rotatedIndex]}}大運</div>
        <v-btn elevation="2" icon tile v-on:click="increaseIndex">
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
    props: {
        boardName : {
            type: String,
        }
    },
    data: () =>{
        return {
            chineseNumber: ["零","一","二","三","四","五","六","七","八","九","十","十一","十二"],
            rotatedIndex: 1,
        }
    },
    methods: {
        increaseIndex(){
            this.rotatedIndex = this.rotatedIndex + 1
            if (this.rotatedIndex > 12) {
                this.rotatedIndex = 1 
            }
            let dispatchName = "set" + this.$store.getters.boardType
            this.$store.dispatch(dispatchName,
                {
                    gender: this.$store.getters.gender,
                    birthYear: this.$store.getters.birthday.birthYear,
                    birthMonth: this.$store.getters.birthday.birthMonth,
                    birthDate: this.$store.getters.birthday.birthDate,
                    birthHour: this.$store.getters.birthday.birthHour,
                    index: this.rotatedIndex
                },
            )
        },
        decreaseIndex(){
            this.rotatedIndex = this.rotatedIndex - 1
            if (this.rotatedIndex < 1) {
                this.rotatedIndex = 12
            }
            let dispatchName = "set" + this.$store.getters.boardType
            this.$store.dispatch(dispatchName,
                {
                    gender: this.$store.getters.gender,
                    birthYear: this.$store.getters.birthday.birthYear,
                    birthMonth: this.$store.getters.birthday.birthMonth,
                    birthDate: this.$store.getters.birthday.birthDate,
                    birthHour: this.$store.getters.birthday.birthHour,
                    index: this.rotatedIndex
                },
            )
        }
    }
}
</script>
