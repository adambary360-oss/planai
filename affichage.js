import {aiparametermodal} from "/ui.js";
import {loedddachboard} from "/api.js";

const btndemo = document.getElementById("btndemo")

btndemo.addEventListener("click", () => {
   loedddachboard("/data/sample-plan.json")
   console.log("demo");
})

aiparametermodal()






export function setselectedprojet(projet){
   localStorage.setItem("setselectedprojet", JSON.stringify(projet))
}


export function setstocageprojet(projet){localStorage.setItem("projets", JSON.stringify(projet));}

export const projets = JSON.parse(localStorage.getItem("projets")) || [] ;

affichageDachBoerd(projets)





export function affichageDachBoerd(data) {   
   const projectslist = document.getElementById("projectslist")
   if (!projectslist) {return}
   data.forEach(projet => {

      const cart = document.createElement("div")
      cart.className = "project p-4 border rounded"
      cart.innerHTML = `
         <h2 class="text-xl font-bold">${projet.projectName}</h2>
         <p>Nombre de tâches : ${projet.tasks.length}</p>
         <p>Heures estimées : ${projet.totalEstimatedHours}h</p>
         <button type="button"class="btn-review mt-3 px-4 py-2 rounded bg-[#5545E6] text-white font-bold">Voir le projet</button>
         `
      projectslist.appendChild(cart)


      const btnvoir = cart.querySelector(".btn-review")

      btnvoir.addEventListener("click", (e) =>{
         const cartelement = e.target.closest(".project")  
         console.log(cartelement)
         setselectedprojet(projet)
         window.location.href = "projetveiw.html"
         tasksafficherge()
      }
      )
   })
}

const selectedprojet = JSON.parse(localStorage.getItem("setselectedprojet")) || null

const todoblock = document.getElementById("todoblock")
const inprogressblock = document.getElementById("inprogressblock")
const doneblock = document.getElementById("doneblock")
if(todoblock){
const projetname = document.getElementById("projetname")
const DURÉE = document.getElementById("DURÉE")
projetname.textContent = selectedprojet.projectName
DURÉE.textContent = (24/selectedprojet.totalEstimatedHours).toFixed(2)}
const tasks = selectedprojet.tasks



tasks.forEach(task => {
   if(task.status === "To Do"){
      const carttask = document.createElement("div")
      carttask.className = "project-task bg-white p-4 mb-4 border rounded-xl shadow-sm hover:shadow-md transition-shadow"
     carttask.innerHTML = `
     <div class="flex justify-between items-center  mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">${task.id}</span>
            <span class="text-xs font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-800">${task.priority}</span>
         </div>
         <h3 class="text-lg font-bold text-gray-900 mb-1">${task.title}</h3>
         <p class="text-sm text-gray-600 mb-3">${task.description}</p>
         
         <div class="flex justify-between items-center text-xs text-gray-500 border-t pt-2">
            <span>${task.estimatedTime}h</span>
            <span> ${task.deadline}</span>
            <span>Size: ${task.size}</span>
         </div>
     `
      todoblock.appendChild(carttask)
   }
   else if(task.status === "In Progress"){
            const carttask = document.createElement("div")
      carttask.className = "project-task bg-white p-4 mb-4 border rounded-xl shadow-sm hover:shadow-md transition-shadow"
     carttask.innerHTML = `
     <div class="flex justify-between items-center  mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">${task.id}</span>
            <span class="text-xs font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-800">${task.priority}</span>
         </div>
         <h3 class="text-lg font-bold text-gray-900 mb-1">${task.title}</h3>
         <p class="text-sm text-gray-600 mb-3">${task.description}</p>
         
         <div class="flex justify-between items-center text-xs text-gray-500 border-t pt-2">
            <span>${task.estimatedTime}h</span>
            <span> ${task.deadline}</span>
            <span>Size: ${task.size}</span>
         </div>
     `
      inprogressblock.appendChild(carttask)

   }
   else{
            const carttask = document.createElement("div")
      carttask.className = "project-task bg-white p-4 mb-4 border rounded-xl shadow-sm "
     carttask.innerHTML = `
     <div class="flex justify-between items-center  mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">${task.id}</span>
            <span class="text-xs font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-800">${task.priority}</span>
         </div>
         <h3 class="text-lg font-bold text-gray-900 mb-1">${task.title}</h3>
         <p class="text-sm text-gray-600 mb-3">${task.description}</p>
         
         <div class="flex justify-between items-center text-xs text-gray-500 border-t pt-2">
            <span>${task.estimatedTime}h</span>
            <span> ${task.deadline}</span>
            <span>Size: ${task.size}</span>
         </div>
     `
      doneblock.appendChild(carttask)

   }
});


// function tasksafficherge (){

// }





