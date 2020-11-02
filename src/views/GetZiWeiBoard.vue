<template>
    <v-container class="star-board">
        <v-row dense no-gutters align="stretch">
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[5].Location"
                    :stars="blocks[5].Stars"
                    :gongWeiName="blocks[5].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 5"
                    :tenYearsRound="blocks[5].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[6].Location"
                    :stars="blocks[6].Stars"
                    :gongWeiName="blocks[6].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 6"
                    :tenYearsRound="blocks[6].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[7].Location"
                    :stars="blocks[7].Stars"
                    :gongWeiName="blocks[7].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 7"
                    :tenYearsRound="blocks[7].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[8].Location"
                    :stars="blocks[8].Stars"
                    :gongWeiName="blocks[8].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 8"
                    :tenYearsRound="blocks[8].TenYearsRound"
                ></BlockCard>
            </v-col>
        </v-row>
        <v-row dense no-gutters align="stretch">
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[4].Location"
                    :stars="blocks[4].Stars"
                    :gongWeiName="blocks[4].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 4"
                    :tenYearsRound="blocks[4].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="6" class="text-caption profile-start blue-grey--text text--darken-1 " align-self="end">
                <p><label>生日：</label>{{board.BirthDay}}</p>
                <p><label>農曆生日：</label>{{board.LunaBirthDay}}</p>
                <p><label>姓別：</label>{{board.Gender}}</p>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[9].Location"
                    :stars="blocks[9].Stars"
                    :gongWeiName="blocks[9].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 9"
                    :tenYearsRound="blocks[9].TenYearsRound"
                ></BlockCard>
            </v-col>
        </v-row>
        <v-row dense no-gutters align="stretch">
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[3].Location"
                    :stars="blocks[3].Stars"
                    :gongWeiName="blocks[3].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 3"
                    :tenYearsRound="blocks[3].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="6" class="text-caption profile-end blue-grey--text text--darken-1" align-self="start">
                <p><label>局數：</label>{{board.MingJu}}{{board.MingJuValue}}局</p>
                <p><label>身主：</label>{{board.ShenZhu}}</p>
                <p><label>命主：</label>{{board.MingZhu}}</p>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[10].Location"
                    :stars="blocks[10].Stars"
                    :gongWeiName="blocks[10].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 10"
                    :tenYearsRound="blocks[10].TenYearsRound"
                ></BlockCard>
            </v-col>
        </v-row>
        <v-row dense no-gutters align="stretch">
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[2].Location"
                    :stars="blocks[2].Stars"
                    :gongWeiName="blocks[2].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 2"
                    :tenYearsRound="blocks[2].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[1].Location"
                    :stars="blocks[1].Stars"
                    :gongWeiName="blocks[1].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 1"
                    :tenYearsRound="blocks[1].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[0].Location"
                    :stars="blocks[0].Stars"
                    :gongWeiName="blocks[0].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 0"
                    :tenYearsRound="blocks[0].TenYearsRound"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="blocks[11].Location"
                    :stars="blocks[11].Stars"
                    :gongWeiName="blocks[11].GongWeiName"
                    :isShenGongLocation="board.ShenGongLocation === 11"
                    :tenYearsRound="blocks[11].TenYearsRound"
                ></BlockCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.profile-start p{ 
    margin: 0px;
}
.profile-end p{ 
    margin: 0px;
}
</style>

<script>
import BlockCard from '@/components/BlockCard.vue'
export default {
    components: {
        BlockCard
    },
    data: () => {
        return {
            locationName: ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
        }
    },
    computed: {
        board(){
            return this.$router.currentRoute.params.board
        },
        blocks() {
            return this.$router.currentRoute.params.board.Blocks
        }
    }
}
</script>
