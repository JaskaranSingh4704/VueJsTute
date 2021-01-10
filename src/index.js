new Vue({
  el: "#app-4",
  prop: {
    me() {
      alert("hi");
    }
  },
  data: {
    todos: [
      {
        name: "Jaskaran",
        age: 16,
        text: "HTML Tutorial"
      },
      {
        name: "Jaskirat",
        age: 15,
        text: "CSS Tutorial"
      },
      {
        name: "Bikram",
        age: 16,
        text: "JavaScript Tutorial"
      },
      {
        name: "Sonu",
        age: 16,
        text: "AngularJS Tutorial"
      },
      {
        name: "Manu",
        age: 16,
        text: "Vue.js Tutorial"
      }
    ]
  }
});
