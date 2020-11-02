var app = new Vue({
	el: '#app',
	data: {
		message: "Task manager",
		task: '',
		isEditable: 'false',
		tasks: [
			{name: "ToDO", state: false},
			{name: "TaDA", state: false},
			{name: "TeDE", state: true},
			{name: "TuDU", state: false}
		]
	},
	methods: {
		addTask(){
			if (this.task.trim()!==''){
				this.tasks.push({name: this.task, state: false});
				this.task = '';
			}
			else{
				this.task = '';
			}
		},
		taskEdit(key){
			console.log('Editing task ' + key);
			// this.isEditable = true; 
		},
		removeTask(key){
			this.tasks.splice(key, 1);
		},
		toggleTask(key){
			this.tasks[key].state = !this.tasks[key].state ;
		}
	}
})