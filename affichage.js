import {aiparametermodal} from "/ui.js";
import {loedddachboard} from "/api.js";

const selectedprojet = JSON.parse(localStorage.getItem("setselectedprojet")) || null
console.log(selectedprojet);

aiparametermodal()

export function setselectedprojet(projet){
   localStorage.setItem("setselectedprojet", projet)
}


export function setstocageprojet(){localStorage.setItem("projets", JSON.stringify(projets));}

export const projets = JSON.parse(localStorage.getItem("projets")) || [];

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
         <a href="projetveiw.html">
         <button type="button"class="btn-review mt-3 px-4 py-2 rounded bg-[#5545E6] text-white font-bold">Voir le projet</button>
         </a>

         `
      projectslist.appendChild(cart)


      const btnvoir = cart.querySelector(".btn-review")

      btnvoir.addEventListener("click", (e) =>{
         const cartelement = e.target.closest(".project")  
         console.log(cartelement)
         setselectedprojet(projet)
      }
      )
   })
}


 






const btndemo = document.getElementById("btndemo")

btndemo.addEventListener("click", () => {

   loedddachboard("/data/sample-plan.json")
   console.log("demo");
   

})




