<template>
  <div class="container flex horizontal">
<!--    <div>{{card.name}} </div>-->
<!--    <div>({{card.cost}}) </div>-->
    <img v-bind:src="card.assets[0].gameAbsolutePath"/>
<!--    <div>: {{card.descriptionRaw}}</div>-->
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    card: Object
  },
  data() {
    return {

    }
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
   width: 200px;
 }
</style>
