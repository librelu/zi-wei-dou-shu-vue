<template>
    <v-card class="zi-wei-block" height="100%">
        <v-row dense no-gutters>
            <v-col class="text-caption write_vertical" v-for="star in stars" :key="star" no-gutters>
                <span :class="getFontStyle(star.StarType)">{{star.Name}}
                    <span class="text-caption green--text text--lighten-1">{{star.MiaoXian}}</span>
                </span>
            </v-col>
        </v-row>
        <v-row class="background" dense no-gutters>
            <v-spacer></v-spacer>
            <v-col><span class="text-caption">{{gongWeiName}}</span></v-col>
            <v-col><span class="text-caption">{{blockLocation}}</span></v-col>
        </v-row>
    </v-card>
</template>

<style>
.write_vertical {
  writing-mode: vertical-rl;
}
.zi-wei-block{
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
            default:
                return "text-caption blue-grey--text text--darken-1"
            } 
        }
    }
}
</script>