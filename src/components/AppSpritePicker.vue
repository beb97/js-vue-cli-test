<template>
  <div class="flex horizontal center">
    <img alt="Runeterra logo" src="../assets/logo.png"/>
    <div>
      <h1 class="">Sprite picker</h1>
      <div><span class="pretty">Prettify</span> your deck's name  ! </div>
    </div>
  </div>
  <div id="currentSpriteBlock" class="flex center">
    <div id="currentSpriteMask" class="card">
      <div class="sprite-container card" >

        <div class="sprite-mask" v-bind:style="{
        'backgroundColor': currentColor,
         'maskImage': 'url('+require('../assets/img/sprites/'+currentSprite+'.png')+')',
         // '-webkitMaskImage': 'url('+require('../assets/img/sprites/'+currentSprite+'.png')+')'
          }">
          <div class="sprite" v-bind:style="{
             'backgroundImage': 'url('+require('../assets/img/sprites/'+currentSprite+'.png')+')',
              }"></div>
        </div>
      </div>
    </div>

    <div id="sprite-to-text-block" class="card flex center">
      <h3>{{ getSpriteCode }}</h3>
      <button @click="copyToClipBoard">copy to clipboard</button>
      <div class="text-small">And paste in your deck's name</div>
    </div>

    <div id="color-picker-container" class="card flex center"
         v-if="isColorable()"
         title="Only the first 24 sprites can be colored.">
      <!--                <div>💬</div>-->
      <input type="color" v-model="currentColor"/>
      <div>{{currentColor}}</div>
      <button @click="resetColor">reset color</button>
    </div>

  </div>

  <div id="grid">
    <sprite v-for="sprite in sprites" v-bind:sprite="sprite" @click="selectSprite(sprite.index)" :key="sprite.index"></sprite>
  </div>
</template>

<script>

import sprites from '../json/sprites.json';
let endOfFirstPart = 24;
import Sprite from './Sprite'

// https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling

export default {
  name: 'AppSpritePicker',
  components: {
    Sprite
  },
  data() {
    return {
      sprites: sprites,
      defaultColor : "#ffffff",
      currentColor : "#ffffff",
      currentSprite : 0,
      visible: false
    }
  },
  computed: {
    getSpriteCode() {
      let codeSmall = `sprite=${this.currentSprite}`;
      let codeBig = `sprite name=${this.sprites[this.currentSprite].code}`;
      let code =(this.currentSprite>=endOfFirstPart)?codeBig:codeSmall;
      let colorHidden ="";
      let colorShown = " color="+this.currentColor;
      let color = this.isColorValide()?colorHidden:colorShown;
      return `<${code}${color}>`;
    }
  },
  methods:{
    isColorValide() {
      return (this.currentColor===undefined
          || this.currentColor===this.defaultColor
          || this.currentSprite.index>=endOfFirstPart);
    },
    isColorable() {
      return this.currentSprite < endOfFirstPart;
    },
    selectSprite(sprite) {
      console.log("received : "+sprite)
      this.resetColor();
      this.currentSprite = sprite;
    },
    resetColor() {
      this.currentColor = this.defaultColor;
    },
    copyToClipBoard() {
      document.execCommand("copy");
      navigator.clipboard.writeText(this.getSpriteCode).then(function() {
        console.log('Copying to clipboard : '+this.getSpriteCode);
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    }
  }
}
</script>

<style scoped>

main {
  margin: auto;
  max-width: 1000px;
}

button, input {
  background: var(--main-bg-color);
  color: var(--main-text-color);
  margin: 10px;
  padding: 5px;
  border: 1px solid rgba(0,0,0,0.21);
  border-radius: 6px;
  border-bottom: 3px solid rgba(0,0,0,0.50);
  border-right: 3px solid rgba(0,0,0,0.50);
  text-shadow: 0 1px 0 rgb(0 0 0);
}


button:hover, button:active {
  background: var(--active-bg-color);
}

main {
  margin: auto;
  max-width: 1000px;
}

.text-small {
  font-size: 0.7em;
}

#grid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

#currentSpriteBlock {
  background-color: var(--main-bg-color);
  flex-direction: row;
}
#currentSpriteBlock > div {
  background-color: var(--active-bg-color);
  flex-direction: column;
}

#sprite-to-text-block {
  flex-direction: column;
  width: 300px;
  justify-content: space-evenly;
}

#color-picker-container {
  justify-content: space-evenly;
}

.pretty {
  color : var(--active-bg-color);
  font-weight: bold;
}

/* ==========================================================================
   EXAMPLE Media Queries for Responsive Design.
   These examples override the primary ('mobile first') styles.
   Modify as content requires.
   ========================================================================== */

@media only screen and (max-width: 35em) {
  /* Style adjustments for viewports that meet the condition */
  #currentSpriteBlock > div {
    /*height: 180px;*/
    min-width: 150px;
    flex-direction: column;
  }

  #currentSpriteBlock > #currentSpriteBlock {
    order: 1;
  }

  #currentSpriteBlock > #color-picker-container {
    order: 2;
  }

  #currentSpriteBlock > #sprite-to-text-block {
    order: 3;
  }
}

</style>
