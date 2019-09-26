
Vue.component('todo-item', {
  // template: '<div><li> {{ todo.text }} </li><button v-on:click="addToNewTodo"> Mark Complete </button></div>',
  template: '<li>{{ todo.text }} with ID => {{ todo.id }}</li>',
  props: ['todo', 'removeNewTodo'],
})

const SAMPLE_TODOS = [
  { text: 'Learn JavaScript' },
  { text: 'Learn Vue' },
  { text: 'Build something awesome' }
];

let app = new Vue({
  el: '#app',
  // directive definition
  inserted: function (el) {
    el.focus();
    console.log('Inserted Called! ');
  },
  bind: function (el) {
    console.log('Bind Called! ');
  },
  beforeCreate: function () {
    console.log('BeforeCreate Called! ');
  },
  created: function () {
    console.log('Created Called! ');
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  beforeMount: function () {
    console.log('BeforeMount Called! ');
  },
  mounted: function () {
    console.log('Mounted Called! ');
  },
  beforeUpdate: function () {
    console.log('BeforeUpdate Called! ');
  },
  updated: function () {
    console.log('Updated Called! ');
  },
  beforeDestroy: function () {
    console.log('BeforeDestroy Called! ');
  },
  destroyed: function () {
    console.log('Destroyed Called! ');
  },
  data: {
    message: 'Hello from Youdizzle!',
    message2: `The date right now is ${Date.now().toLocaleString()}`,
    reversableMessage: 'This is a reversable message string! <=> HANNAH',
    htmlString: '<p>sample html string with</p>',
    seen: true,
    unseen: false,
    todos: SAMPLE_TODOS,
    newTodos: [],
    newTodoInput: '',
    firstName: 'DizDizzle',
    lastName: 'SumMore',
    questionAsked: '',
    answeredQuestion: '',
    isActive: true,
    hasErrorOne: false,
    hasErrorTwo: true,
    loginType: 'username',
    usernameInput: '',
    passwordInput: '',
    yesNoAnswerUrl: 'https://yesno.wtf/api',
  },
  watch: {
    questionAsked: function (oldQ, newQ) {
      this.answeredQuestion = "Waiting for you to enter the question";
      this.debouncedGetAnswer();
    },
  },
  computed: {
    // Example of a computed property
    fullName: function() {
      // `firstName` & `lastName` coming from `data`
      return `${this.firstName} ${this.lastName} `;
    },
    fullNameWithGetAndSet: {
      get: function() {
        return `${this.firstName} ${this.lastName} `;
      },
      set: function(first, last) {
        this.firstName = first;
        this.lastName = last;
      }
    },
  },
  methods: {
    toggleLoginTypeForConditionalRendering: function() {
      debugger;
      if(this.usernameInput) {
        this.loginType = 'pass';
        this.usernameInput = '';
      }
    },
    fullNameMethod: function() {
      // `firstName` & `lastName` coming from `data`
      return  `${this.firstName} ${this.lastName} `;
    },
    getAnswer: function() {
      if(this.questionAsked.indexOf('?') === -1){
        this.answeredQuestion = "A question usually ends with a question mark ->????<- Would'nt you agree ?";
        return;
      }
      this.answeredQuestion = 'Thinking...';
      var app = this;
      debugger
      axios.get(this.yesNoAnswerUrl).then(function(response){
        app.answeredQuestion = response.data.answer; 
      }).catch(function(error){
        app.answeredQuestion = "Oops! Sorry could not fetch the answer"; 
      });
    },
    reverseMessage: function() {
      this.reversableMessage = this.reversableMessage.split('').reverse().join('');
    },
    removeNewTodo: function(todoToRemove) {
      debugger
      this.newTodos = this.newTodos.filter((eachTodo) => eachTodo.id === todoToRemove.id);
    },
    addToNewTodo: function() {
      if(this.newTodoInput == '' ||
        this.newTodoInput == null || 
        this.newTodoInput == undefined ||
        this.newTodoInput.indexOf(' ') > -1  ) {
        return;
      }
      const index = this.newTodos.length;
      const todoObject = {
        id: index,
        text: this.newTodoInput,
      };
      this.newTodos.push(todoObject);
      this.newTodoInput = '';
    },
  },
});
