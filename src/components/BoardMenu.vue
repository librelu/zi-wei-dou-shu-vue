<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
            >
                {{boardName}}
            </v-btn>
            </template>
            <v-list>
                <v-list-item-group
                    v-model="boardTypeIndex"
                    color="primary">
                        <v-list-item
                            v-for="(type, index) in boardTypes"
                            :key="index"
                        >
                            <v-list-item-title>{{ type.title }}</v-list-item-title>
                        </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    data: ()=>{
        return {
            boardTypeIndex: 0,
            boardTypes : [
                { title: '天盤' },
                { title: '流年' },
                { title: '流月' },
                { title: '流日' },
                { title: '十年' },
            ],
        }
    },
    watch: {
        boardTypeIndex(){
            switch(this.boardTypeIndex){
                case 0:
                    this.$store.dispatch('setOriginBoard')
                    break
                case 1:
                    this.$store.dispatch('setYearBoard', {
                        gender: this.$store.getters.gender,
                        birthYear: this.$store.getters.birthday.birthYear,
                        birthMonth: this.$store.getters.birthday.birthMonth,
                        birthDate: this.$store.getters.birthday.birthDate,
                        birthHour: this.$store.getters.birthday.birthHour,
                        index: 1,
                    })
                    break
                case 2:
                    this.$store.dispatch('setMonthBoard', {
                        gender: this.$store.getters.gender,
                        birthYear: this.$store.getters.birthday.birthYear,
                        birthMonth: this.$store.getters.birthday.birthMonth,
                        birthDate: this.$store.getters.birthday.birthDate,
                        birthHour: this.$store.getters.birthday.birthHour,
                        index: 1,
                    })
                    break
                case 3:
                    this.$store.dispatch('setDateBoard', {
                        gender: this.$store.getters.gender,
                        birthYear: this.$store.getters.birthday.birthYear,
                        birthMonth: this.$store.getters.birthday.birthMonth,
                        birthDate: this.$store.getters.birthday.birthDate,
                        birthHour: this.$store.getters.birthday.birthHour,
                        index: 1,
                    })
                    break
                case 4:
                    this.$store.dispatch('setTenYearsBoard', {
                        gender: this.$store.getters.gender,
                        birthYear: this.$store.getters.birthday.birthYear,
                        birthMonth: this.$store.getters.birthday.birthMonth,
                        birthDate: this.$store.getters.birthday.birthDate,
                        birthHour: this.$store.getters.birthday.birthHour,
                        index: 1,
                    })
                    break
            }
        }
    },
    computed: {
        boardName(){
            return this.boardTypes[this.boardTypeIndex].title
        },
    }
}
</script>