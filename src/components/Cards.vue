<template>

    <div v-for="region in cardsByRegion" :key="region">
        <div class="container flex horizontal center" v-bind:class="region[0].regionRef.toLowerCase()">
          <div class="flex vertical card-container" v-for="card in region" :key="card.cardCode">
            <img v-bind:src="card.assets[0].gameAbsolutePath" alt="card.name"/>
    <!--        <input :value="getExcludedCode(card)"/>-->
          </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Cards',
  props: {
    cards: Array
  },
  data() {
    return {
      groupedCards: []
    }
  },
  computed: {

    getRegions() {
      return this.cards.map(card => card.region).filter((value, index, self) => self.indexOf(value) === index);
    },
    cardsByRegion() {
      return this.cards.reduce((acc, item) => {
        if (!acc[item.region]) {
          acc[item.region] = [];
        }

        acc[item.region].push(item);
        return acc;
      }, {})
    }
  },
  methods: {
    getCardsByRegion: function (region) {
      return function (card) {
        return card.region == region;
      }
    },
    getExcludedCode(card) {
      return `"${card.cardCode}":"${card.name}",`;
    },

  }
}
</script>

<!--"associatedCards": [],-->
<!--"associatedCardRefs": [],-->
<!--"assets": [-->
<!--{-->
<!--"gameAbsolutePath": "http://dd.b.pvp.net/2_7_0/set1/en_us/img/cards/01IO012.png",-->
<!--"fullAbsolutePath": "http://dd.b.pvp.net/2_7_0/set1/en_us/img/cards/01IO012-full.png"-->
<!--}-->
<!--],-->
<!--"region": "Ionia",-->
<!--"regionRef": "Ionia",-->
<!--"attack": 0,-->
<!--"cost": 3,-->
<!--"health": 0,-->
<!--"description": "Give an ally +3|+0 or +0|+3 this round.",-->
<!--"descriptionRaw": "Give an ally +3|+0 or +0|+3 this round.",-->
<!--"levelupDescription": "",-->
<!--"levelupDescriptionRaw": "",-->
<!--"flavorText": "\"Never fear change. It will question you, test your limits. It is our greatest teacher.\" - Karma",-->
<!--"artistName": "SIXMOREVODKA",-->
<!--"name": "Twin Disciplines",-->
<!--"cardCode": "01IO012",-->
<!--"keywords": [-->
<!--"Burst"-->
<!--],-->
<!--"keywordRefs": [-->
<!--"Burst"-->
<!--],-->
<!--"spellSpeed": "Burst",-->
<!--"spellSpeedRef": "Burst",-->
<!--"rarity": "COMMON",-->
<!--"rarityRef": "Common",-->
<!--"subtype": "",-->
<!--"subtypes": [],-->
<!--"supertype": "",-->
<!--"type": "Spell",-->
<!--"collectible": true,-->
<!--"set": "Set1",-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img {
   width: 150px;
   transition: 0.5s;
   transition-timing-function: ease-in-out;
   z-index: 1;
   filter: drop-shadow(-4px 0px 1px rgba(0,0,0,0.7));
 }

 .container {
   border-color: grey;
   border-width: 1px;
   border-style: solid;
   box-shadow: 3px 3px lightgray;
   border-radius: 10px;
   margin-bottom: 10px;
   /*top right bot left*/
   padding: 5px 5px 15px 10px;
   color: black;
 }

 .card-container {
   margin-left: -30px;
   margin-bottom: -15px;
   transition-timing-function: ease-in-out;
 }
 .card-container:first-child {
   margin-left: 5px;
 }

 .card-container:hover > img {
   transform: scale(1.8);
   transition: 0.3s;
   z-index: 10;
   filter: drop-shadow(-5px 5px 3px rgba(0,0,0,0.5));
 }

</style>
