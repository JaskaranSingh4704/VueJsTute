new Vue({
  el: "#chapter2",
  data: {
    newName: "",
    names: ["jas", "simran", "manu"],
  },

  methods: {
    addName() {
        if(this.newName !== ""){
            this.names.push(this.newName)
        }
    },
  },
});
