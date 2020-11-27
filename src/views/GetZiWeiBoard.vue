<template>
    <v-container class="star-board">
        <v-row dense no-gutters align="stretch">
            <BlockCard
                :blockLocation="blocks[5].Location"
                :stars="blocks[5].Stars"
                :gongWeiName="blocks[5].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 5"
                :tenYearsRound="blocks[5].TenYearsRound"
            ></BlockCard>
            <BlockCard
                :blockLocation="blocks[6].Location"
                :stars="blocks[6].Stars"
                :gongWeiName="blocks[6].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 6"
                :tenYearsRound="blocks[6].TenYearsRound"
            ></BlockCard>
            <BlockCard
                :blockLocation="blocks[7].Location"
                :stars="blocks[7].Stars"
                :gongWeiName="blocks[7].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 7"
                :tenYearsRound="blocks[7].TenYearsRound"
            ></BlockCard>
            <BlockCard
                :blockLocation="blocks[8].Location"
                :stars="blocks[8].Stars"
                :gongWeiName="blocks[8].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 8"
                :tenYearsRound="blocks[8].TenYearsRound"
            ></BlockCard>
        </v-row>
        <v-row dense no-gutters align="stretch">
            <BlockCard
                :blockLocation="blocks[4].Location"
                :stars="blocks[4].Stars"
                :gongWeiName="blocks[4].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 4"
                :tenYearsRound="blocks[4].TenYearsRound"
            ></BlockCard>
            <v-col cols="6" class="text-caption profile-start blue-grey--text text--darken-1 " align-self="end">
                <v-col><BoardMenu></BoardMenu></v-col>
                <v-col class="pannel-min-height"><YearBoardIndexPanel v-if="isYearBoard"></YearBoardIndexPanel></v-col>
                <div class="profile-info">
                    <div><label>陽曆</label>: {{board.BirthDay}}</div>
                    <div><label>陰曆</label>: {{lunaBirthdayYear}}{{lunaBirthdayDate}}</div>
                    <div><label>姓別</label>: {{board.Gender}}</div>
                </div>
            </v-col>
            <BlockCard
                :blockLocation="blocks[9].Location"
                :stars="blocks[9].Stars"
                :gongWeiName="blocks[9].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 9"
                :tenYearsRound="blocks[9].TenYearsRound"
            ></BlockCard>
        </v-row>
        <v-row dense no-gutters align="stretch">
            <BlockCard
                :blockLocation="blocks[3].Location"
                :stars="blocks[3].Stars"
                :gongWeiName="blocks[3].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 3"
                :tenYearsRound="blocks[3].TenYearsRound"
            ></BlockCard>
            <v-col cols="6" class="text-caption profile-end blue-grey--text text--darken-1">
                <div class="profile-info">
                    <div><label>局數</label>: {{board.MingJu}}{{board.MingJuValue}}局</div>
                    <div><label>身主</label>: {{board.ShenZhu}}</div>
                    <div><label>命主</label>: {{board.MingZhu}}</div>
                </div>
            </v-col>
            <BlockCard
                :blockLocation="blocks[10].Location"
                :stars="blocks[10].Stars"
                :gongWeiName="blocks[10].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 10"
                :tenYearsRound="blocks[10].TenYearsRound"
            ></BlockCard>
        </v-row>
        <v-row dense no-gutters align="stretch">
            <BlockCard
                :blockLocation="blocks[2].Location"
                :stars="blocks[2].Stars"
                :gongWeiName="blocks[2].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 2"
                :tenYearsRound="blocks[2].TenYearsRound"
            ></BlockCard>
            <BlockCard
                :blockLocation="blocks[1].Location"
                :stars="blocks[1].Stars"
                :gongWeiName="blocks[1].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 1"
                :tenYearsRound="blocks[1].TenYearsRound"
            ></BlockCard>
            <BlockCard
                :blockLocation="blocks[0].Location"
                :stars="blocks[0].Stars"
                :gongWeiName="blocks[0].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 0"
                :tenYearsRound="blocks[0].TenYearsRound"
            ></BlockCard>
            <BlockCard
                :blockLocation="blocks[11].Location"
                :stars="blocks[11].Stars"
                :gongWeiName="blocks[11].GongWeiName"
                :isShenGongLocation="board.ShenGongLocation === 11"
                :tenYearsRound="blocks[11].TenYearsRound"
            ></BlockCard>
        </v-row>
    </v-container>
</template>

<style>
.star-board{
    min-width: 98%;
}
.profile-info label {
    text-align-last:justify;
    display: inline-block;
    width: 15px;
}
.profile-info{
    text-indent: -1em;
    margin-left: 2em;
    padding: 0 0 0 10px;
    text-align: left;
}
.profile-start p{ 
    margin: 0px;
}
.profile-end p{ 
    margin: 0px;
}
.pannel-min-height{
    min-height: 60px;
}
</style>

<script>
import BlockCard from '@/components/BlockCard.vue'
import BoardMenu from '@/components/BoardMenu.vue'
import BoardType from '@/enum/boardType'
import YearBoardIndexPanel from '@/components/YearBoardIndexPanel.vue'
export default {
    beforeCreate(){
        if (this.$store.getters.board.Blocks === undefined || this.$store.getters.board.Blocks === {}){
                this.$router.push({name:"ZiWeiBoard"})
        }
    },
    components: {
        BlockCard,
        BoardMenu,
        YearBoardIndexPanel
    },
    data: () => {
        return {
            locationName: ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
        }
    },
    computed: {
        lunaBirthdayYear(){
            return this.board.LunaBirthDay.split("年")[0]
        },
        lunaBirthdayDate(){
            return this.board.LunaBirthDay.split("年")[1]
        },
        isYearBoard(){
            return this.$store.getters.boardType === BoardType.yearBoard
        },
        board(){
            return this.$store.getters.board
        },
        blocks() {
            return this.$store.getters.board.Blocks
        }
    },
}
</script>
