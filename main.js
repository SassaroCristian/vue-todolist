const { createApp } = Vue;
const toDoList = {
    data: function () {
        return {
            newTask: "",

            toDoTasks: [
                {
                    text: 'Buy bread',
                    done: false
                },
                {
                    text: 'Buy eggs',
                    done: false
                },
                {
                    text: 'Buy cookies',
                    done: false
                },
                {
                    text: 'Go jogging',
                    done: false
                },
                {
                    text: 'Take a shower',
                    done: false
                },
                {
                    text: 'Make lunch',
                    done: false
                },
                {
                    text: 'Clean the house',
                    done: false
                },
                {
                    text: 'Wash car',
                    done: false
                },
            ],
        };
    },
    methods: {
        addTask() {
            if (this.newTask === "") {
                alert("Please enter a task");
            } else {
                this.toDoTasks.push({
                    text: this.newTask,
                    done: false
                });
                this.newTask = "";
            }
        },

        markAsComplete() {
            this.toDoTasks.forEach(task => {
                if (!task.done) {
                    task.done = true;
                }
            });
        },

        deleteTask(task) {
            const index = this.toDoTasks.indexOf(task);
            this.toDoTasks.splice(index, 1);
        }

        
    }
};
createApp(toDoList).mount('#app');