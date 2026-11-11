const opbtnaiparameter = document.getElementById("opbtnaiparameter")
const model = document.getElementById("model")
const clbtnaiparameter = document.getElementById("clbtnaiparameter")
console.log(clbtnaiparameter);

console.log(model);
console.log(opbtnaiparameter);



opbtnaiparameter.addEventListener("click" , () =>model.showModal())
clbtnaiparameter.addEventListener("click" , () => model.close())
