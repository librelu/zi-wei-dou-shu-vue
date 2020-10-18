<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[5]"
                    :stars="board[5].Stars"
                    :gongWeiName="board[5].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[6]"
                    :stars="board[6].Stars"
                    :gongWeiName="board[6].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[7]"
                    :stars="board[7].Stars"
                    :gongWeiName="board[7].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[8]"
                    :stars="board[8].Stars"
                    :gongWeiName="board[8].GongWeiName"
                ></BlockCard>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[4]"
                    :stars="board[4].Stars"
                    :gongWeiName="board[4].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="6">
                <v-card>
                </v-card>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[9]"
                    :stars="board[9].Stars"
                    :gongWeiName="board[9].GongWeiName"
                ></BlockCard>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[3]"
                    :stars="board[3].Stars"
                    :gongWeiName="board[3].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="6">
                <v-card>
                </v-card>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[10]"
                    :stars="board[10].Stars"
                    :gongWeiName="board[10].GongWeiName"
                ></BlockCard>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[2]"
                    :stars="board[2].Stars"
                    :gongWeiName="board[2].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[1]"
                    :stars="board[1].Stars"
                    :gongWeiName="board[1].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[0]"
                    :stars="board[0].Stars"
                    :gongWeiName="board[0].GongWeiName"
                ></BlockCard>
            </v-col>
            <v-col cols="3">
                <BlockCard
                    :blockLocation="locationName[11]"
                    :stars="board[11].Stars"
                    :gongWeiName="board[11].GongWeiName"
                ></BlockCard>
            </v-col>
        </v-row>
    </v-container>
</template>

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
        board() {
            // return this.$router.currentRoute.params.board.Blocks
            return [{"GongWeiName":"事業","Stars":[{"Name":"七殺","StarType":"十四主星","MiaoXian":"旺"},{"Name":"陰煞","StarType":"月系星","MiaoXian":""},{"Name":"地劫","StarType":"時系諸星","MiaoXian":"陷"},{"Name":"恩光","StarType":"時系諸星","MiaoXian":""},{"Name":"將軍","StarType":"博士十二星","MiaoXian":""},{"Name":"歲建","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":2,"DiZhi":0}},{"GongWeiName":"交友","Stars":[{"Name":"天空","StarType":"年支系諸星","MiaoXian":""},{"Name":"奏書","StarType":"博士十二星","MiaoXian":""},{"Name":"晦氣","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":3,"DiZhi":1}},{"GongWeiName":"遷移","Stars":[{"Name":"廉貞","StarType":"十四主星","MiaoXian":"廟"},{"Name":"天魁","StarType":"年干系諸星","MiaoXian":""},{"Name":"孤辰","StarType":"年支系諸星","MiaoXian":""},{"Name":"天馬","StarType":"年支系諸星","MiaoXian":"旺"},{"Name":"飛廉","StarType":"博士十二星","MiaoXian":""},{"Name":"喪門","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":4,"DiZhi":2}},{"GongWeiName":"疾病","Stars":[{"Name":"紅鸞","StarType":"年支系諸星","MiaoXian":"廟"},{"Name":"右弼","StarType":"月系星","MiaoXian":"陷"},{"Name":"封誥","StarType":"時系諸星","MiaoXian":""},{"Name":"火星","StarType":"時系諸星","MiaoXian":"平"},{"Name":"三台","StarType":"時系諸星","MiaoXian":""},{"Name":"喜神","StarType":"博士十二星","MiaoXian":""},{"Name":"貫索","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":5,"DiZhi":3}},{"GongWeiName":"財帛","Stars":[{"Name":"破軍","StarType":"十四主星","MiaoXian":"旺"},{"Name":"龍池","StarType":"年支系諸星","MiaoXian":""},{"Name":"華蓋","StarType":"年支系諸星","MiaoXian":""},{"Name":"天刑","StarType":"月系星","MiaoXian":"平"},{"Name":"病符","StarType":"博士十二星","MiaoXian":""},{"Name":"官府","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":6,"DiZhi":4}},{"GongWeiName":"子女","Stars":[{"Name":"天同","StarType":"十四主星","MiaoXian":"廟"},{"Name":"破碎","StarType":"年支系諸星","MiaoXian":""},{"Name":"劫殺","StarType":"年支系諸星","MiaoXian":""},{"Name":"文曲","StarType":"時系諸星","MiaoXian":"廟"},{"Name":"博士大耗","StarType":"博士十二星","MiaoXian":""},{"Name":"流年小耗","StarType":"流年歲前諸星","MiaoXian":""},{"Name":"化忌","StarType":"四化","MiaoXian":""}],"Location":{"TianGan":7,"DiZhi":5}},{"GongWeiName":"夫妻","Stars":[{"Name":"天府","StarType":"十四主星","MiaoXian":"旺"},{"Name":"武曲","StarType":"十四主星","MiaoXian":"旺"},{"Name":"天鉞","StarType":"年干系諸星","MiaoXian":""},{"Name":"天福","StarType":"年干系諸星","MiaoXian":""},{"Name":"截空","StarType":"年干系諸星","MiaoXian":""},{"Name":"天哭","StarType":"年支系諸星","MiaoXian":"陷"},{"Name":"天虛","StarType":"年支系諸星","MiaoXian":"平"},{"Name":"伏兵","StarType":"博士十二星","MiaoXian":""},{"Name":"流年大耗","StarType":"流年歲前諸星","MiaoXian":""},{"Name":"化權","StarType":"四化","MiaoXian":""},{"Name":"化科","StarType":"四化","MiaoXian":""}],"Location":{"TianGan":8,"DiZhi":6}},{"GongWeiName":"兄弟","Stars":[{"Name":"太陽","StarType":"十四主星","MiaoXian":"平"},{"Name":"太陰","StarType":"十四主星","MiaoXian":"平"},{"Name":"陀羅","StarType":"年干系諸星","MiaoXian":"廟"},{"Name":"截空","StarType":"年干系諸星","MiaoXian":""},{"Name":"大耗","StarType":"年支系諸星","MiaoXian":""},{"Name":"天月","StarType":"月系星","MiaoXian":""},{"Name":"台輔","StarType":"時系諸星","MiaoXian":""},{"Name":"官府","StarType":"博士十二星","MiaoXian":""},{"Name":"龍德","StarType":"流年歲前諸星","MiaoXian":""},{"Name":"化祿","StarType":"四化","MiaoXian":""}],"Location":{"TianGan":9,"DiZhi":7}},{"GongWeiName":"命宮","Stars":[{"Name":"貪狼","StarType":"十四主星","MiaoXian":"廟"},{"Name":"祿存","StarType":"年干系諸星","MiaoXian":"廟"},{"Name":"旬空","StarType":"年干系諸星","MiaoXian":""},{"Name":"天才","StarType":"年支系諸星","MiaoXian":""},{"Name":"天姚","StarType":"月系星","MiaoXian":"陷"},{"Name":"天貴","StarType":"時系諸星","MiaoXian":""},{"Name":"命主","StarType":"身命","MiaoXian":""},{"Name":"博士","StarType":"博士十二星","MiaoXian":""},{"Name":"白虎","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":0,"DiZhi":8}},{"GongWeiName":"父母","Stars":[{"Name":"天機","StarType":"十四主星","MiaoXian":"旺"},{"Name":"巨門","StarType":"十四主星","MiaoXian":"廟"},{"Name":"擎羊","StarType":"年干系諸星","MiaoXian":"陷"},{"Name":"天喜","StarType":"年支系諸星","MiaoXian":"廟"},{"Name":"天德","StarType":"年支系諸星","MiaoXian":""},{"Name":"咸池","StarType":"年支系諸星","MiaoXian":""},{"Name":"文昌","StarType":"時系諸星","MiaoXian":"廟"},{"Name":"力士","StarType":"博士十二星","MiaoXian":""},{"Name":"天德","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":1,"DiZhi":9}},{"GongWeiName":"福德","Stars":[{"Name":"紫微","StarType":"十四主星","MiaoXian":"閑"},{"Name":"天相","StarType":"十四主星","MiaoXian":"閑"},{"Name":"鳳閣","StarType":"年支系諸星","MiaoXian":""},{"Name":"寡宿","StarType":"年支系諸星","MiaoXian":""},{"Name":"解神","StarType":"年支系諸星","MiaoXian":""},{"Name":"天壽","StarType":"年支系諸星","MiaoXian":""},{"Name":"地空","StarType":"時系諸星","MiaoXian":"陷"},{"Name":"八座","StarType":"時系諸星","MiaoXian":""},{"Name":"青龍","StarType":"博士十二星","MiaoXian":""},{"Name":"弔客","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":2,"DiZhi":10}},{"GongWeiName":"田宅","Stars":[{"Name":"天梁","StarType":"十四主星","MiaoXian":"陷"},{"Name":"天官","StarType":"年干系諸星","MiaoXian":""},{"Name":"左輔","StarType":"月系星","MiaoXian":"閑"},{"Name":"天巫","StarType":"月系星","MiaoXian":""},{"Name":"鈴星","StarType":"時系諸星","MiaoXian":"廟"},{"Name":"身主","StarType":"身命","MiaoXian":""},{"Name":"小耗","StarType":"博士十二星","MiaoXian":""},{"Name":"流年病符","StarType":"流年歲前諸星","MiaoXian":""}],"Location":{"TianGan":3,"DiZhi":11}}]
        }
    }
}
</script>
