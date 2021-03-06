new Vue({
    name: 'game',
    el: '#app',
    data: state,

    created(){
        this.testHand = this.createTestHand()
    },

    template: `
        <div id="#app">
            <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"/>
            <transition name="hand">
                <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"></hand>
            </transition>
               
        </div>
    `,

    computed: {
        testCard(){
            return cards.archers
        }
    },

    methods: {
        handlePlay() {
            console.log('You played a card')
        },

        createTestHand() {
            const cards= []
            const ids = Object.keys(cards)

            for (let i=0; i<=5; i++){
                cards.push(this.testDrawCard())
            }
            return cards
        },

        testDrawCard() {
            const ids = Object.keys(cards)

            const randomId = ids[Math.floor(Math.random() * ids.length)]

            return {
                uid: cardUid++,
                id: randomId,
                def: cards[randomId]
            }
        },

        testPlayCard(card){
            const index = this.testHand.indexOf(card)
            this.testHand.splice(index, 1)
            console.log("ashdbasudbasudba")
        }

    }

})