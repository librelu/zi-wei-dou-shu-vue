<template>
    <div class="display-border star-main-block" no-gutters dense>
        <div class="stars-row align-start">
            <v-spacer></v-spacer>
            <div class="display-column text-md-body-1 text-sm-caption text-caption font-weight-bold">
                <div>
                    <template v-for="(star, idx) in sortStars(stars).mainStars">
                        <div class="write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                            {{star.Name}}
                            <div class="miao-xian green--text text--lighten-1">{{star.MiaoXian}}</div>
                        </div>
                    </template>
                </div>
                <div>
                    <template v-for="(star, idx) in sortStars(stars).fourStars">
                        <div class="write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                            {{star.Name}}
                            <div class="miao-xian green--text text--lighten-1">{{star.MiaoXian}}</div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="text-md-body-2 text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).attachedStars">
                    <div class="write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                        {{star.Name}}
                        <div class="miao-xian green--text text--lighten-1">{{star.MiaoXian}}</div>
                    </div>
                </template>
            </div>
        </div>
        <div class="stars-row align-end">
            <div class="text-sm-caption smallest-text-size">
                <template v-for="(star, idx) in sortStars(stars).otherStars">
                    <div class="write-vertical" :class="getFontStyle(star.StarType)" :key="idx">
                        {{star.Name}}
                    </div>
                </template>
                <div class="smallest-text-size" v-if="isShenGongLocation">
                     (身)
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
.miao-xian{
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
        }
    },
    methods: {
        sortStars: (stars) => {
            let mainStars = []
            let attachedStars = []
            let otherStars = []
            let fourStars = []
            stars.forEach((star)=>{
                switch(star.StarType) {
                case "十四主星":
                    mainStars.push(star)
                    break
                case "十四輔星":
                    attachedStars.push(star)
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
                attachedStars,
                fourStars,
                otherStars
            }
        },
        getFontStyle: (typeName) => {
            switch(typeName) {
            case "十四主星":
                return "red--text text--darken-1"
            case "十四輔星":
                return "indigo--text text--darken-1"
            case "四化":
                return "four-start deep-purple--text text--accent-2"
            default:
                return "blue-grey--text text--lighten-1"
            } 
        }
    }
}
</script>