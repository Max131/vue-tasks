var app = new Vue({
	el: '#app',
	data: {
		message: "Task manager",
		task: '',
		tasks: [
			{name: "ToDO", editable: "false", state: false},
			{name: "TaDA", editable: "false", state: false},
			{name: "TeDE", editable: "false", state: true},
			{name: "TuDU", editable: "false", state: false}
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
			// console.log('Editing task ' + key);
			// this.isEditable = true;
			this.tasks[key].editable=true;
		},
		endEditTask(key){
			this.tasks[key].name.trim();
			this.tasks[key].editable = "false";
		},
		removeTask(key){
			this.tasks.splice(key, 1);
		},
		toggleTask(key){
			this.tasks[key].state = !this.tasks[key].state ;
		}
	}
})