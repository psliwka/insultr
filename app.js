var app = new Vue({
  el: "#app",
  data: {
    availableWords: {
      adjective: [],
      curse: [],
      noun: []
    },
    chosenWords: {
      adjective: "",
      curse: "",
      noun: ""
    }
  },
  created: function() {
    for (let wordType in this.availableWords) {
      let wordFile = wordType + "s.txt";
      fetch(wordFile)
        .then(response => response.text())
        .then(function(text) {
          app.availableWords[wordType] = text.split("\n");
        });
    }
  },
  computed: {
    wordsLoaded: function() {
      for (let wordType in this.availableWords) {
        if (this.availableWords[wordType].length == 0) {
          return false;
        }
      }
      return true;
    },
    insult: function() {
      return [
        this.chosenWords.adjective,
        this.chosenWords.curse,
        this.chosenWords.noun
      ].join(" ");
    }
  },
  methods: {
    newInsult: function() {
      for (let wordType in this.availableWords) {
        this.chosenWords[wordType] = _.sample(this.availableWords[wordType]);
      }
    }
  },
  watch: {
    wordsLoaded: function(val) {
      if (val) {
        this.newInsult();
      }
    }
  }
});
