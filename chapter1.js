new Vue({
  el: "#chapter2",
  data: {
    buttonTitle: "this is javascript button title",
    newName: "",
    names: ["jas", "simran", "manu"],
    myClass: "",
    toggle :true,
  },

  methods: {
    addName() {
      if (this.newName !== "") {
        this.names.push(this.newName);
      }
    },
    changeClass() {
      this.myClass = "myClassName";
    },
    togglePeragraph(){
        this.toggle = !this.toggle
    }
  },
});
