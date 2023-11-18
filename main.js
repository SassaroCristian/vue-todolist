const { createApp } = Vue;
const toDoList = {
    data: function () {
        return {
            newTask: "",

            toDoTasks: [
                'Buy bread',
                'Buy eggs',
                'Buy cookies',
                'Go jogging',
                'Take a shower',
                'Make lunch',
                'Clean the house',
                'Wash car'
            ],
        };
    },
    methods: {
        addTask() {
            if (this.newTask == "") {
                alert("Please enter task");
            } else {
                this.toDoTasks.push( this.newTask );
                this.newTask = "";
            }
        }

        
    }
};
createApp(toDoList).mount('#app');