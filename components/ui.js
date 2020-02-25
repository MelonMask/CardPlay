Vue.component('top-bar', {
    template: `
        <div class="top-bar" :class="'player-' + currentPlayerIndex">
            <div class="player p0">{{players[0].name}}</div>
            <div class="turn-counter">
                <img class="arrow" src="svg/turn.svg" alt=""/>
                <div class="turn">Turn {{turn}}</div>
            </div>
            
            <div class="player p1">{{players[1].name}}</div>
        </div>
    `,

    created (){
        console.log(this.players)
    },

    props: ['players', 'currentPlayerIndex', 'turn']
})

Vue.component('card', {
    template: `
        <div class="card" :class="'type-' + def.type" @click="play">
            <div class="title">{{def.title}}</div>
            <img src="svg/card-separator.svg" alt="" class="separator"/>
            <div class="description"><div v-html="def.description"></div></div>
            <div class="note" v-if="def.note"><div v-html="def.note"></div></div>
        </div>  
    `,
    props : ['def'],

    methods: {
        play () {
            this.$emit('play')
        }
    },
})

Vue.component('hand', {
    template: `
        <div class="hand">
            <div class="wrapper">
                <card v-for="card in cards" :def="card.def" @play="handlePlay(card)" />
            </div>
        </div>
    `,
    methods : {
        handlePlay(card){
            this.$emit('card-play', card)
        }
    },

    props: ['cards']
})