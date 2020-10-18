<template>
    <v-container class="zi-wei-block" fill-height>
        <v-row class="flex-column" dense no-gutters align-content="start">
            <v-col fill-height>
                <v-row class="zi-wei-content" dense no-gutters align-content="start">
                    <v-col cols="1" class="text-caption" v-for="(star, idx) in stars" :key="idx" no-gutters>
                        <span :class="getFontStyle(star.StarType)">{{star.Name}}
                            <span class="text-caption green--text text--lighten-1">{{star.MiaoXian}}</span>
                        </span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-row class="background" dense no-gutters align-content="end">
                    <v-spacer></v-spacer>
                    <v-col><span class="text-caption">{{gongWeiName}}</span></v-col>
                    <v-col><span class="text-caption">{{blockLocation}}</span></v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.write_vertical {
  writing-mode: vertical-rl;
}
.zi-wei-content{
    padding:5px;
    min-height: 150px;
}
.zi-wei-block{
    padding: 0px;
    border: 1px solid #bbbbbb;
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
            type: String,
        }
    },
    methods: {
        getFontStyle: (typeName) => {
            switch(typeName) {
            case "十四主星":
                return "text-subtitle-1 red--text text--darken-1"
            case "四化":
                return "text-caption deep-purple--text text--accent-2"
            default:
                return "text-caption blue-grey--text text--darken-1"
            } 
        }
    }
}
</script>