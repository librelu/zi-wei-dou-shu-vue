<template>
    <v-col cols="3" class="display-border star-main-block">
        <div class="stars-row">
            <div class="text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).leftAttachedStars">
                    <div :class="getFontStyle(star.StarType) + ' flex-column align-center'" :key="idx">
                        <div class="write-vertical">{{star.Name}}</div>
                        <div class="miao-xian text-sm-body-2 font-weight-light green--text text--lighten-1" v-show="star.MiaoXian.length > 0">{{star.MiaoXian}}</div>
                        <div class="four-start text-sm-body-2 font-weight-light deep-purple--text text--accent-2" v-show="star.MiaoXian.length > 0">{{star.FourStar}}</div>
                    </div>
                </template>
            </div>
            <div class="text-md-body-1 text-sm-caption text-caption font-weight-bold">
                <template v-for="(star, idx) in sortStars(stars).mainStars">
                    <div :class="getFontStyle(star.StarType) + ' flex-column align-center' " :key="idx">
                        <div class="write-main-start-vertical">{{star.Name}}</div>
                        <div class="miao-xian text-sm-body-2 font-weight-light green--text text--lighten-1" v-show="star.MiaoXian.length > 0">{{star.MiaoXian}}</div>
                        <div class="four-start text-sm-body-2 font-weight-light deep-purple--text text--accent-2" v-show="star.MiaoXian.length > 0">{{star.FourStar}}</div>
                    </div>
                </template>
            </div>
            <div class="text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).rightAttachedStars">
                    <div :class="getFontStyle(star.StarType) + ' flex-column align-center'" :key="idx">
                        <div class="write-vertical">{{star.Name}}</div>
                        <div class="miao-xian text-sm-body-2 font-weight-light green--text text--lighten-1" v-show="star.MiaoXian.length > 0">{{star.MiaoXian}}</div>
                        <div class="four-start text-sm-body-2 font-weight-light deep-purple--text text--accent-2" v-show="star.MiaoXian.length > 0">{{star.FourStar}}</div>
                    </div>
                </template>
            </div>
        </div>
        <div class="stars-row align-end">
            <div class="text-sm-caption smallest-text-size flex-column align-center">
                <template v-for="(star, idx) in sortStars(stars).otherStars">
                    <div :class="getFontStyle(star.StarType)" :key="idx">
                        <div>{{star.Name}}</div>
                    </div>
                </template>
            </div>
            <div class="text-sm-caption smallest-text-size flex-column align-center">
                <div class="text-sm-caption smallest-text-size" v-if="isShenGongLocation">(身)</div>
                <div class="text-sm-caption smallest-text-size">{{tenYearsRound}}</div>
            </div>
            <div>
                <div class="write-vertical text-sm-caption smallest-text-size">
                    {{gongWeiName}}
                </div>
                <div class="write-vertical text-sm-caption smallest-text-size">
                    {{blockLocation.TianGan}}
                    {{blockLocation.DiZhi}}
                </div>
            </div>
        </div>
    </v-col>
</template>

<style>
.miao-xian , .four-start{
    display: block !important;
    margin: 0px;
    width: 14px;
}
.write-main-start-vertical{
    padding: 1px 0 0 0;
    width: 14px;
}
.write-vertical{
    padding: 4px 0 0 0;
    width: 13px;
}
.smallest-text-size{
    font-size: 0.65em
}

.star-main-block {
    display:block;
    min-height: 175px;
}
.stars-row{
    height: 50%;
    display:flex;
}
.stars-row div{
    display: flex;
    flex-wrap: wrap;
    flex: 1;
}
.display-border{
    border: solid 1px gray;
}
</style>

<script>
export default {
    props: {
        gongWeiName: {
            type: String,
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
        sortStars: (stars) => {
            let mainStars = []
            let rightAttachedStars = []
            let leftAttachedStars = []
            let otherStars = []
            let fourStars = []
            stars.forEach((star)=>{
                switch(star.StarType) {
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
                case "四化":
                    fourStars.push(star)
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
                fourStars,
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