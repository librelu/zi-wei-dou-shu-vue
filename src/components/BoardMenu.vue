<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
                {{boardName}}
            </v-btn>
            </template>
            <v-list>
                 <v-list-item-group
                    v-model="selectedItem"
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
export default {
    data: ()=>{
        return {
            selectedItem: 0,
            boardTypes : [
                { title: '天盤' },
                { title: '流年' },
                { title: '流月' },
                { title: '流日' },
            ],
        }
    },
    computed: {
        boardName(){
            return this.boardTypes[this.selectedItem].title
        },
    }
}
</script>