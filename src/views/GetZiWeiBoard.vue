<template>
    <div class="star-board">
        <template v-if='blocks'>
            <div class="star-row">
                <BlockCard
                    :blockLocation="blocks[5].location"
                    :stars="blocks[5].stars"
                    :gongWei="blocks[5].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 5"
                    :tenYearsRound="blocks[5].ten_years_round"
                ></BlockCard>
                <BlockCard
                    :blockLocation="blocks[6].location"
                    :stars="blocks[6].stars"
                    :gongWei="blocks[6].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 6"
                    :tenYearsRound="blocks[6].ten_years_round"
                ></BlockCard>
                <BlockCard
                    :blockLocation="blocks[7].location"
                    :stars="blocks[7].stars"
                    :gongWei="blocks[7].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 7"
                    :tenYearsRound="blocks[7].ten_years_round"
                ></BlockCard>
                <BlockCard
                    :blockLocation="blocks[8].location"
                    :stars="blocks[8].stars"
                    :gongWei="blocks[8].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 8"
                    :tenYearsRound="blocks[8].ten_years_round"
                ></BlockCard>
            </div>
            <div class="star-row">
                <BlockCard
                    :blockLocation="blocks[4].location"
                    :stars="blocks[4].stars"
                    :gongWei="blocks[4].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 4"
                    :tenYearsRound="blocks[4].ten_years_round"
                ></BlockCard>
                <div class="profile-start text-caption blue-grey--text text--darken-1 " align-self="end">
                    <v-col><BoardMenu @trigger="modifyBlocks"></BoardMenu></v-col>
                    <div class="profile-info">
                        <div><label>陽曆</label>: {{board.birthday}}</div>
                        <div><label>陰曆</label>: {{lunaBirthdayYear}}{{lunaBirthdayDate}}</div>
                        <div><label>姓別</label>: {{board.gender}}</div>
                    </div>
                </div>
                <BlockCard
                    :blockLocation="blocks[9].location"
                    :stars="blocks[9].stars"
                    :gongWei="blocks[9].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 9"
                    :tenYearsRound="blocks[9].ten_years_round"
                ></BlockCard>
            </div>
            <div class="star-row">
                <BlockCard
                    :blockLocation="blocks[3].location"
                    :stars="blocks[3].stars"
                    :gongWei="blocks[3].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 3"
                    :tenYearsRound="blocks[3].ten_years_round"
                ></BlockCard>
                <div class="profile-end text-caption blue-grey--text text--darken-1" align-self="end">
                    <div class="profile-info">
                        <div><label>局數</label>: {{board.ming_ju}}{{board.ming_ju_value}}局</div>
                        <div><label>身主</label>: {{board.shen_zhu}}</div>
                        <div><label>命主</label>: {{board.ming_zhu}}</div>
                    </div>
                </div>
                <BlockCard
                    :blockLocation="blocks[10].location"
                    :stars="blocks[10].stars"
                    :gongWei="blocks[10].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 10"
                    :tenYearsRound="blocks[10].ten_years_round"
                ></BlockCard>
            </div>
            <div class="star-row">
                <BlockCard
                    :blockLocation="blocks[2].location"
                    :stars="blocks[2].stars"
                    :gongWei="blocks[2].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 2"
                    :tenYearsRound="blocks[2].ten_years_round"
                ></BlockCard>
                <BlockCard
                    :blockLocation="blocks[1].location"
                    :stars="blocks[1].stars"
                    :gongWei="blocks[1].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 1"
                    :tenYearsRound="blocks[1].ten_years_round"
                ></BlockCard>
                <BlockCard
                    :blockLocation="blocks[0].location"
                    :stars="blocks[0].stars"
                    :gongWei="blocks[0].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 0"
                    :tenYearsRound="blocks[0].ten_years_round"
                ></BlockCard>
                <BlockCard
                    :blockLocation="blocks[11].location"
                    :stars="blocks[11].stars"
                    :gongWei="blocks[11].gong_wei"
                    :isShenGongLocation="board.shen_gong_location === 11"
                    :tenYearsRound="blocks[11].ten_years_round"
                ></BlockCard>
            </div>
            <canvas id="star_connection_display"></canvas>
        </template>
    </div>
</template>

<style>
/* hardcoding the screen to fix the star-board out of range */
.v-main, .v-toolbar{
    min-width: 730px;
}
.star-board{
    min-width: 730px;
}
.star-row{
    display: flex;
    min-width: 730px;
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
.profile-start, .profile-end{
    flex: 1 1 50%;
}
.profile-start, .profile-end{
    z-index:9999;
}
.profile-start p, .profile-end p{ 
    margin: 0px;
}
.pannel-min-height{
    min-height: 60px;
}
#star_connection_display{
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
}
</style>

<script>
import BlockCard from '@/components/BlockCard.vue'
import BoardMenu from '@/components/BoardMenu.vue'
import BoardType from '@/enum/boardType'

export default {
    data() {
        return {
            blocks: this.$store.getters.tianBoard.blocks,
            board: this.$store.getters.tianBoard,
            locationMap: [10, 9, 8, 6, 4, 0, 1, 2, 3, 5, 7, 11],
        }
    },
    mounted(){
        if (this.board === undefined || this.board === {}){
            return this.$router.push({name:"ZiWeiBoard"})
        }
        let mainStarConnections = this.board.main_star_connection
        let mingGongLocation = this.board.ming_gong_location
        this.drawCanvas(mainStarConnections, mingGongLocation)
        window.addEventListener("gestureend", function(){
            this.drawCanvas(mainStarConnections, mingGongLocation)
        })
        window.addEventListener("resize", function(){
            this.drawCanvas(mainStarConnections, mingGongLocation)
        })
        window.addEventListener("scroll", function(){
            this.drawCanvas(mainStarConnections, mingGongLocation)
        })
    },
    components: {
        BlockCard,
        BoardMenu,
    },
    computed: {
        lunaBirthdayYear(){
            return this.board.luna_birthday.split("年")[0]
        },
        lunaBirthdayDate(){
            return this.board.luna_birthday.split("年")[1]
        },
    },
    methods: {
        drawCanvas(locations, mingGongLocation){
            let canvas = document.getElementById('star_connection_display')
            let firstStarBlock = document.getElementsByClassName('star-main-block')[0]
            if (document.getElementsByClassName('profile-end').length === 0){
                return this.$router.push({name:"ZiWeiBoard"})
            }
            canvas.width = (document.getElementsByClassName('profile-end')[0].clientWidth)
            canvas.height = (document.getElementsByClassName('profile-end')[0].clientHeight*2)
            let overlayX = parseInt(getComputedStyle(document.getElementsByClassName('star-board')[0]).paddingLeft, 10) + 
                parseInt(getComputedStyle(document.getElementsByClassName('star-board')[0]).marginLeft, 10)
            let overlayY = getComputedStyle(document.getElementsByClassName('star-board')[0]).paddingTop
            let positionX = firstStarBlock.getBoundingClientRect().width + parseInt(overlayX, 10)
            let positionY = firstStarBlock.getBoundingClientRect().height + parseInt(overlayY, 10)
            canvas.style.left = `${positionX}px`
            canvas.style.top = `${positionY}px`
            if (canvas.getContext){
                let ctx = canvas.getContext('2d');
                ctx.strokeStyle = "rgba(255,0,0,0.5)";
                // error handling when layout is not ready
                if (locations.length <= 0){
                    return
                }
                locations.forEach((v)=>{
                    let startPosition = this.getBlockLocation(mingGongLocation)
                    let endPosition = this.getBlockLocation(v)
                    ctx.beginPath()
                    ctx.moveTo(startPosition.x, startPosition.y)
                    ctx.lineTo(endPosition.x, endPosition.y)
                    ctx.stroke()
                })
            }
        },
        getBlockLocation(blockIndex){
            let block = document.getElementsByClassName('star-main-block')[blockIndex].getBoundingClientRect()
            let canvas = document.getElementById('star_connection_display')
            let result = {
                x: 0,
                y: 0,
            }
            switch (this.locationMap[blockIndex]) {
                case 0:
                    result.x = 0
                    result.y = 0
                    break
                case 1:
                    result.x = block.width / 2
                    result.y = 0
                    break
                case 2:
                    result.x = canvas.width - (block.width / 2)
                    result.y = 0
                    break
                case 3:
                    result.x = canvas.width
                    result.y = 0
                    break
                case 4:
                    result.x = 0
                    result.y = block.height / 2
                    break
                case 5:
                    result.x = canvas.width
                    result.y = block.height / 2
                    break
                case 6:
                    result.x = 0
                    result.y = canvas.height - (block.height / 2) 
                    break
                case 7:
                    result.x = canvas.width
                    result.y = canvas.height - (block.height / 2)
                    break
                case 8:
                    result.x = 0
                    result.y = canvas.height
                    break
                case 9:
                    result.x = block.width / 2
                    result.y = canvas.height
                    break
                case 10:
                    result.x = canvas.width - (block.width / 2)
                    result.y = canvas.height
                    break
                case 11:
                    result.x = canvas.width
                    result.y = canvas.height
                    break
            }
            return result
        },
        mergeBoard(currentBoard, targetBlocks){
            for (let i = 0; i < targetBlocks.length; i ++){
                if (targetBlocks[i].gong_wei){
                    currentBoard[i].gong_wei.push(...JSON.parse(JSON.stringify(targetBlocks[i].gong_wei)))
                }
                if (targetBlocks[i].stars) {
                    currentBoard[i].stars.push(...JSON.parse(JSON.stringify(targetBlocks[i].stars)))
                }
            }
            return currentBoard
        },
        modifyBlocks(){
            let result = JSON.parse(JSON.stringify(this.$store.getters.tianBoard.blocks))
            switch (this.$store.getters.boardType) {
                case BoardType.TenYearsBoard: {
                    this.mergeBoard(result, JSON.parse(JSON.stringify(this.$store.getters.tenYearsBoard.blocks)))
                    break
                }
                case BoardType.YearBoard: {
                    this.mergeBoard(result, JSON.parse(JSON.stringify(this.$store.getters.yearBoard.blocks)))
                    break
                }
                case BoardType.MonthBoard: {
                    this.mergeBoard(result, JSON.parse(JSON.stringify(this.$store.getters.yearBoard.blocks)))
                    this.mergeBoard(result, JSON.parse(JSON.stringify(this.$store.getters.monthBoard.blocks)))
                    break
                }
                case BoardType.DateBoard: {
                    this.mergeBoard(result, JSON.parse(JSON.stringify(this.$store.getters.yearBoard.blocks)))
                    this.mergeBoard(result, JSON.parse(JSON.stringify(this.$store.getters.monthBoard.blocks)))
                    this.mergeBoard(result, JSON.parse(JSON.stringify(this.$store.getters.dateBoard.blocks)))
                    break
                }
            }
            this.blocks = result
        }
    }
}
</script>
