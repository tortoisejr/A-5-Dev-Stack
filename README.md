Project Name: Dev-Stack

Description: This project all about make software according to users favorite Technologies, to build a project user can select their Stack from the Stack list and can build their project later.

Technologies: The technologies that are used to build the project are vite,TypeScritp,React,tsx along with that a npm package is also used that is toastyfi. 

Features:
- user can select their stack to build project.
- If select unnecessary stack they can remove it later.
- If in the middle user change his mind he can remove all the stack by one click on button and again begin a fresh start.

  Quesitons:
  1. what is jxs and why is it used in react
     JSX stands for JavaScript XML. It is use for to write how component will look like. In react there is require a scripting language to           write how component will look like and since read ability of  JSX  it become that scripting language for react.
  2. what is the difference between props and state?
     props are like argument that we can send to the component at the of calling it but state is the variable that work inside the component         function and store the value.

  3.What dose the use useState hook do and where did you use it in this project?
    useState hook get use to store a data and also it provide a function to set the data. After update the value each time the component that       is use the state value component render again. I use useState to save the selected Technologies and show it is selected Tech area.
  
  4.What does the useEffect hook do, and why did you need it to load the JSON data?
    useEffect is the hook that take a callback function and a dependency array. when the component first time rendered then this callback           function execute. After the first execution the callback only execute again when value of index of dependency array will change. Since          there is no need to fetch data again and again rather it decrease the performance so to fetch data according to our necessary we use             useEffect.

   5.Why does every item in a .map() list need a unique key prop?
      In virtual dom react create a tree and calculate rendering change according to change in virtual dom.The process of identify the change          in virtual dom make quick key props when map is used.That's why unique key props is importent for map().

   6.What is conditional rendering? Show one place you used it (example: the empty stack message).
      Conditional rendering provide the ability to render different things in the same space for different condition. Here in this project if         there at least one selected technologies at "Your Stack" section I render a "Remove All" button other wise it is not exist.
  
    7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
     From a parent data pass to the child as props but there is no way to send back data to parent from child but if it is necessary then it is      possible to solve the problem by using "lifting state up" technique with help of useState. 
    
