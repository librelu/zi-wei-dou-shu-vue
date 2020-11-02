<template>
    <div class="display-border star-main-block" no-gutters dense>
        <div class="stars-row align-start">
            <div class="display-column text-sm-caption smallest-text-size">
                <div class="set-div-gutters">
                    <template v-for="(star, idx) in sortStars(stars).leftAttachedStars">
                        <div class="align-sm-center write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                            {{star.Name}}
                            <div class="align-sm-center miao-xian text-sm-caption font-weight-light green--text text--lighten-1">{{star.MiaoXian}}</div>
                            <div class="align-sm-center four-start text-sm-caption font-weight-light deep-purple--text text--accent-2">{{star.FourStar}}</div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="display-column text-md-body-1 text-sm-caption text-caption font-weight-bold">
                <div class="set-div-gutters">
                    <template v-for="(star, idx) in sortStars(stars).mainStars">
                        <div class="align-sm-center write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                            {{star.Name}}
                            <div class="align-sm-center miao-xian text-sm-body-2 font-weight-light green--text text--lighten-1">{{star.MiaoXian}}</div>
                            <div class="align-sm-center four-start text-sm-body-2 font-weight-light deep-purple--text text--accent-2">{{star.FourStar}}</div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="display-column text-sm-caption smallest-text-size">
                <div class="set-div-gutters">
                    <template v-for="(star, idx) in sortStars(stars).rightAttachedStars">
                        <div class="align-sm-center write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                            {{star.Name}}
                            <div class="align-sm-center miao-xian text-sm-body-2 font-weight-light green--text text--lighten-1">{{star.MiaoXian}}</div>
                            <div class="align-sm-center four-start text-sm-caption font-weight-light deep-purple--text text--accent-2">{{star.FourStar}}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="stars-row align-end">
            <div class="text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).otherStars">
                    <div class="write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                        {{star.Name}}
                    </div>
                </template>
            </div>
            <div class="text-sm-caption smallest-text-size display-column">
                <div class="text-sm-caption smallest-text-size display-center" v-if="isShenGongLocation">
                     <span>(身)</span>
                </div>
                <div class="text-sm-caption smallest-text-size display-center">
                     <span>{{tenYearsRound}}</span>
                </div>
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
    </div>
</template>

<style>
.set-div-gutters{
    width: 100%;
    margin: 1px;
}
.display-center{
    display: block !important;
    text-align: center;
}
.display-column{
    flex-direction: column !important;
}
.display-column div {
    width: 100% !important;
}
.smallest-text-size{
    font-size: 0.65em
}

.star-main-block {
    display:block;
    height:100%;
    padding: 5px;
    min-height: 150px;
}
.stars-row{
    height: 50%;
    display:flex;
}
.stars-row div{
    display: flex;
    flex-flow: row wrap;
    width:30%;
    flex: 1;
}
.write-vertical{
    min-width: 10px;
    display: flex;
    writing-mode: vertical-rl;
    padding: 0 0 5px 0;
}
.display-border{
    border: solid 1px gray;
}
.miao-xian ,.four-start{
    height: 10px;
    margin: 3px 0px;
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
            default:
                return "blue-grey--text text--lighten-1"
            } 
        }
    }
}
</script>