new Vue({
  el: "#chapter2",
  data: {
      tasks:[
        {
          taskName:'Go To school',
          isCompleted:true
        },
        {
          taskName:'Go To Office',
          isCompleted:false
        },
        {
          taskName:'Go To Town',
          isCompleted:true
        },
        {
          taskName:'Go To Work',
          isCompleted:false
        },
        {
          taskName:'Go To heaven',
          isCompleted:true
        },
      ]
  },

  methods: {

  },
  computed:{
    completedTasks(){
      return this.tasks.filter((task)=>{
        return task.isCompleted;
      })
    },
    unCompletedTasks(){
      return this.tasks.filter((task)=>{
        return !task.isCompleted;
      })
    }
  }
});
