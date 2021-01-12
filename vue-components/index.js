Vue.component("task-list", {
  template: `
  <div>
    <task v-for="task in tasks" v-text="task.taskName" :key="task.id"></task>
  </div>   
  `,
  data() {
    return {
      tasks: [
        {
          taskName: "Go To school",
          isCompleted: true,
        },
        {
          taskName: "Go To Office",
          isCompleted: false,
        },
        {
          taskName: "Go To Town",
          isCompleted: true,
        },
        {
          taskName: "Go To Work",
          isCompleted: false,
        },
        {
          taskName: "Go To heaven",
          isCompleted: true,
        },
      ],
    };
  },
  computed:{
      completed(){
        return this.tasks.filter((task)=>{
            return task.isCompleted
        })
      }
  }
});

Vue.component("task", {
  template: `<li><slot></slot></li>`,
});

new Vue({
  el: "#myApp",
});
