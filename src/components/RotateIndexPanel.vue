<template>
    <div class="d-flex justify-center align-center">
        <v-btn elevation="2" icon tile v-on:click="decreaseIndex">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        <template>
            <div v-if="boardName == '十年'" class="year-min-width">第{{chineseNumber[rotatedIndex]}}大運</div>
            <div v-else class="year-min-width">{{currentDate}}</div>
        </template>
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
            default: "天盤",
        },
    },
    data: () =>{
        return {
            chineseNumber: ["零","一","二","三","四","五","六","七","八","九","十","十一","十二"],
            rotatedIndex: 1,
            targetDate : new Date,
        }
    },
    computed: {
        currentDate(){
            return `${this.targetDate.getFullYear()}-${this.targetDate.getMonth() + 1}-${this.targetDate.getDate()}`
        }
    },
    methods: {
        rotateYear(index){
            let modifiedDate = new Date(this.targetDate.setFullYear(this.targetDate.getFullYear() + index))
            if (modifiedDate.getTime() < this.$store.getters.birthday.date.getTime()) {
                modifiedDate = new Date(this.$store.getters.birthday.date)
            }
            this.targetDate = modifiedDate
            return
        },
        rotateMonth(index){
            let modifiedDate = new Date(this.targetDate.setMonth(this.targetDate.getMonth() + index))
            if (modifiedDate.getTime() < this.$store.getters.birthday.date.getTime()) {
                modifiedDate = new Date(this.$store.getters.birthday.date)
            }
            this.targetDate = modifiedDate
        },
        rotateDate(index){
            let modifiedDate = new Date(this.targetDate.setDate(this.targetDate.getDate() + index))
            if (modifiedDate.getTime() < this.$store.getters.birthday.date.getTime()) {
                modifiedDate = new Date(this.$store.getters.birthday.date)
            }
            this.targetDate = modifiedDate
        },
        rotateIndex(index){
            this.rotatedIndex = this.rotatedIndex + index
            if (this.rotatedIndex > 12) {
                this.rotatedIndex = 1
            }
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
            this.$emit('trigger', this.trigger())
        },
        increaseIndex(){
            let index = 1
            switch (this.boardName) {
                case '十年': {
                    this.rotateIndex(index)
                    break
                }
                case '流年': {
                    this.rotateYear(index)
                    break
                }
                case '流月': {
                    this.rotateMonth(index)
                    break
                }
                case '流日': {
                    this.rotateDate(index)
                    break
                }
            }
            this.$emit('trigger', this.trigger())
        },
        trigger(){
            return {
                targetDate: this.targetDate,
                index: this.rotatedIndex,
            }
        },
        decreaseIndex(){
            let index = -1
            switch (this.boardName) {
                case '十年': {
                    this.rotateIndex(index)
                    break
                }
                case '流年': {
                    this.rotateYear(index)
                    break
                }
                case '流月': {
                    this.rotateMonth(index)
                    break
                }
                case '流日': {
                    this.rotateDate(index)
                    break
                }
            }
            this.$emit('trigger', this.trigger())
        },
    }
}
</script>
