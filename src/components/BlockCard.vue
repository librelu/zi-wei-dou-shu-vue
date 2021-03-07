<template>
    <div class="display-border star-main-block">
        <div class="stars-row">
            <div class="star-block text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).leftAttachedStars">
                    <div :class="getFontStyle(star.star_type)" :key="idx">
                        <template v-if="star.board_type === 'tian_board'">
                            <div class="write-vertical">{{star.name}}</div>
                        </template>
                        <template v-if="star.board_type === 'year_board' && star.star_type !== '流年干星'">
                            <div class="write-vertical">年{{star.name}}</div>
                        </template>
                        <template v-if="star.board_type === 'ten_years_board' && star.star_type !== '流年干星'">
                            <div class="write-vertical">大{{star.name}}</div>
                        </template>
                        <div class="miao-xian write-vertical text-sm-body-2 font-weight-light green--text text--lighten-1" v-show="star.miao_xian.length > 0">{{star.miao_xian}}</div>
                        <div class="four-start write-vertical text-sm-body-2 font-weight-light deep-purple--text text--accent-2" v-show="star.miao_xian.length > 0">{{star.four_star}}</div>
                    </div>
                </template>
            </div>
            <div class="main-stars text-md-body-1 text-sm-caption text-caption font-weight-bold">
                <template v-for="(star, idx) in sortStars(stars).mainStars">
                    <div :class="getFontStyle(star.star_type)" :key="idx">
                        <div class="write-vertical">{{star.name}}</div>
                        <div class="miao-xian text-sm-body-2 font-weight-light green--text text--lighten-1" v-show="star.miao_xian.length > 0">{{star.miao_xian}}</div>
                    </div>
                </template>
            </div>
            <div class="right-side-stars text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).rightAttachedStars">
                    <div :class="getFontStyle(star.star_type)" :key="idx">
                        <template v-if="star.board_type === 'tian_board'">
                            <div class="write-vertical">{{star.name}}</div>
                        </template>
                        <template v-if="star.board_type === 'year_board' && star.star_type !== '流年干星'">
                            <div class="write-vertical">年{{star.name}}</div>
                        </template>
                        <template v-if="star.board_type === 'ten_years_board' && star.star_type !== '流年干星'">
                            <div class="write-vertical">大{{star.name}}</div>
                        </template>
                        <div class="miao-xian write-vertical text-sm-body-2 font-weight-light green--text text--lighten-1" v-show="star.miao_xian.length > 0">{{star.miao_xian}}</div>
                        <div class="four-start write-vertical text-sm-body-2 font-weight-light deep-purple--text text--accent-2" v-show="star.miao_xian.length > 0">{{star.four_star}}</div>
                    </div>
                </template>
            </div>
        </div>
        <div class="stars-row">
            <div class="other-stars text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).otherStars">
                    <template v-if="star.board_type === 'tian_board'">
                        <span :class="getFontStyle(star.star_type)" :key="idx">
                            {{star.name}}
                        </span>
                    </template>
                    <template v-if="star.board_type === 'year_board' && star.star_type !== '流年干星'">
                        <span :class="getFontStyle(star.star_type)" :key="idx">
                            年{{star.name}}
                        </span>
                    </template>
                    <template v-if="star.board_type === 'ten_years_board' && star.star_type !== '流年干星'">
                        <span :class="getFontStyle(star.star_type)" :key="idx">
                            大{{star.name}}
                        </span>
                    </template>
                </template>
            </div>
            <div class="gong-wei-block text-sm-caption smallest-text-size justify-center">
                <template v-for="(gong, idx) in gongWei">
                    <template v-if="gong.type === 'tian_board'">
                        <div class="text-sm-caption tian_gong-wei-name white--text" :key="idx">
                            {{tainBoardGongWeiName(gong.name, isShenGongLocation)}}
                        </div>
                    </template>
                    <template v-if="gong.type === 'year_board'">
                        <span class="text-sm-caption year_gong-wei-name white--text" :key="idx">
                            年{{gong.name}}
                        </span>
                    </template>
                    <template v-if="gong.type === 'ten_years_board'">
                        <span class="text-sm-caption year_gong-wei-name white--text" :key="idx">
                            大{{gong.name}}
                        </span>
                    </template>
                </template>
            </div>
            <div class="status-block text-sm-caption smallest-text-size">
                <div class="four-stars-block">
                    <template v-for="(fourStarsObj , boardType) in fourStars(stars)">
                        <template v-if="boardType === 'tian_board'">
                            <template v-for="(_, fourStar) in fourStarsObj">
                                <span class="deep-purple--text" :key="Math.random()+fourStar">{{fourStar}}</span>
                            </template>
                        </template>
                        <template v-if="boardType === 'year_board'">
                            <template v-for="(_, fourStar) in fourStarsObj">
                                <span class="blue--text" :key="Math.random()+fourStar">年{{fourStar}}</span>
                            </template>
                        </template>
                        <template v-if="boardType === 'ten_years_board'">
                            <template v-for="(_, fourStar) in fourStarsObj">
                                <span class="blue--text" :key="Math.random()+fourStar">大{{fourStar}}</span>
                            </template>
                        </template>
                    </template>
                </div>
                <div class="years-and-star-location">
                    <span class="write-vertical blue-grey--text text--lighten-1">
                        {{blockLocation.tian_gan}}
                        {{blockLocation.dizhi}}
                    </span>
                    <span class="middle-year-text-size">{{tenYearsRound}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.years-and-star-location{
    display: flex;
    flex-direction: column;
    align-self: flex-end;
}
.four-stars-block{
    display:flex;
    flex-direction: column;
    align-content: flex-end;
}
.status-block{
    flex-direction: row;
    align-content: flex-end;
    justify-content: space-between;
}
.gong-wei-block{
    flex-direction: column;
    align-content: center;
    align-self: flex-end;
}
.other-stars{
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-end;
}
.other-stars span{
    margin-right: 7px;
}
.main-stars{
    justify-content: center;
}
.right-side-stars{
    justify-content: flex-end;
}
.write-vertical{
    display: block;
    width: 10px;
    margin: 3px;
}
.gong-wei-block{
    display: flex;
}
.tian_gong-wei-name{
    background: #9300fc;
    border-radius: 3px;
    padding: 2px 3px;
    margin: 3px 0px;
}
.year_gong-wei-name{
    background: #4a95f4;
    border-radius: 3px;
    padding: 2px 3px;
    margin: 3px 0px;
}
.middle-year-text-size{
    font-size: 0.75em;
}
.miao-xian , .four-start{
    display: block;
}
.smallest-text-size{
    font-size: 0.65em
}
.star-main-block {
    flex:1 1 25%;
}
.stars-row>div{
    display: flex;
    flex-wrap: wrap;
    flex: 1;
}
.display-border{
    border: solid 1px gray;
}
.stars-row{
    min-width: 120px;
    height: 105px;
    display:flex;
}
@media screen and (min-width: 800px) {
    .stars-row{
        height: 105px;
        display:flex;
        padding: 5px;
    }
    .gong-wei-name{
        padding: 2px 6px;
    }
    .write-main-start-vertical{
        width: 17px;
    }
}
</style>

<script>
export default {
    props: {
        gongWei: {
            type: Array,
        },
        stars: {
            type: Array,
        },
        blockLocation: {
            type: Object,
        },
        isShenGongLocation: {
            type: Boolean,
        },
        tenYearsRound:{
            type: String,
        }
    },
    methods: {
        tainBoardGongWeiName: (gongWeiName,isShenGongLocation) => {
            if (!isShenGongLocation) {
                return gongWeiName
            }
            switch(gongWeiName) {
            case "遷移":
                return "身遷"
            case "福德":
                return "身福"
            case "命宮":
                return "身命"
            case "財帛":
                return "身帛"
            case "夫妻":
                return "身夫"
            }
            return gongWeiName
        },
        fourStars: (stars) => {
            let result = {}
            stars.forEach(star=>{
                if (star.star_type === "流年干星") {
                    if (result[star.board_type] === undefined) {
                        result[star.board_type] = {}
                    }
                    result[star.board_type][star.name] = true
                }
                if (star.four_star !== "" && star.four_star !== undefined) {
                    if (result[star.board_type] === undefined) {
                        result[star.board_type] = {}
                    }
                    result[star.board_type][star.four_star] = true
                }
            })
            return result
        }, 
        sortStars: (stars) => {
            let mainStars = []
            let rightAttachedStars = []
            let leftAttachedStars = []
            let otherStars = []
            stars.forEach((star)=>{
                switch(star.star_type) {
                case "十四主星":
                    mainStars.push(star)
                    break
                case "流年干星":
                    rightAttachedStars.push(star)
                    break
                case "右輔星":
                    rightAttachedStars.push(star)
                    break
                case "左輔星":
                    leftAttachedStars.push(star)
                    break
                default:
                    otherStars.push(star)
                    break
                }
            })
            return {
                mainStars,
                rightAttachedStars,
                leftAttachedStars,
                otherStars
            }
        },
        getFontStyle: (typeName) => {
            switch(typeName) {
            case "十四主星":
                return "red--text text--darken-1"
            case "右輔星":
                return "indigo--text text--darken-1"
            case "左輔星":
                return "indigo--text text--darken-1"
            case "流年干星":
                return "red--text text--darken-1"
            default:
                return "blue-grey--text text--lighten-1"
            }
        }
    }
}
</script>