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
            <v-col class="pannel-min-height"><RotateIndexPanel v-if="isRoate" :boardName='boardName' :birthday='$store.getters.birthday.date' @trigger='setBoard'></RotateIndexPanel></v-col>
            </template>
            <v-list>
                <v-list-item-group
                    v-model="boardTypeIndex"
                    @change="setBoardType"
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
import RotateIndexPanel from '@/components/RotateIndexPanel.vue'
import BoardType from '@/enum/boardType'
export default {
    components: {
        RotateIndexPanel,
    },
    data(){
        return {
            boardTypeIndex: 0,
            targetYear: (new Date).getFullYear(),
            targetMonth: (new Date).getMonth() + 1,
            targetDate: (new Date).getDate(),
            boardTypes : [
                { title: '天盤' },
                { title: '流年' },
                { title: '流月' },
                { title: '流日' },
                { title: '十年' },
            ],
        }
    },
    computed: {
        isRoate(){
            return BoardType[this.$store.getters.boardType] !== "TianBoard" && BoardType[this.$store.getters.boardType] || false
        },
        boardName(){
            return this.boardTypes[this.boardTypeIndex].title
        },
    },
    methods:{
        setBoardType(boardType){
            switch(boardType){
                case 0:
                    this.$store.dispatch({
                        type: 'setBoardType',
                        boardType: BoardType.TianBoard,
                    })
                    break
                case 1:
                    this.$store.dispatch({
                        type: 'setBoardType',
                        boardType: BoardType.YearBoard,
                    })
                    break
                case 2:
                    this.$store.dispatch({
                        type: 'setBoardType',
                        boardType: BoardType.MonthBoard,
                    })
                    break
                case 3:
                    this.$store.dispatch({
                        type: 'setBoardType',
                        boardType: BoardType.DateBoard,
                    })
                    break
                case 4:
                    this.$store.dispatch({
                        type: 'setBoardType',
                        boardType: BoardType.TenYearsBoard,
                    })
                    break
            }
            this.$emit('trigger')
        },
        async setBoard(event){
            await this.$store.dispatch('setYearBoard', {
                gender: this.$store.getters.gender,
                birthYear: this.$store.getters.birthday.birthYear,
                birthMonth: this.$store.getters.birthday.birthMonth,
                birthDate: this.$store.getters.birthday.birthDate,
                birthHour: this.$store.getters.birthday.birthHour,
                targetYear: event.targetDate.getFullYear(),
            })
            await this.$store.dispatch('setMonthBoard', {
                gender: this.$store.getters.gender,
                birthYear: this.$store.getters.birthday.birthYear,
                birthMonth: this.$store.getters.birthday.birthMonth,
                birthDate: this.$store.getters.birthday.birthDate,
                birthHour: this.$store.getters.birthday.birthHour,
                targetYear: event.targetDate.getFullYear(),
                targetMonth: event.targetDate.getMonth() + 1,
            })
            await this.$store.dispatch('setDateBoard', {
                gender: this.$store.getters.gender,
                birthYear: this.$store.getters.birthday.birthYear,
                birthMonth: this.$store.getters.birthday.birthMonth,
                birthDate: this.$store.getters.birthday.birthDate,
                birthHour: this.$store.getters.birthday.birthHour,
                targetYear: event.targetDate.getFullYear(),
                targetMonth: event.targetDate.getMonth() + 1,
                targetDate: event.targetDate.getDate(),
            })
            await this.$store.dispatch('setTenYearsBoard', {
                gender: this.$store.getters.gender,
                birthYear: this.$store.getters.birthday.birthYear,
                birthMonth: this.$store.getters.birthday.birthMonth,
                birthDate: this.$store.getters.birthday.birthDate,
                birthHour: this.$store.getters.birthday.birthHour,
                index: event.index,
            })
            this.$emit('trigger')
        },
    },
}
</script>