
const btndemo = document.getElementById("btndemo")

const projets = JSON.parse(localStorage.getItem("projets")) || [];
affichageDachBoerd(projets)

function affichageDachBoerd(data) {
   const projectslist = document.getElementById("projectslist")
   data.forEach(projet => {

      const cart = document.createElement("div")
      cart.className = "project p-4 border rounded"
      cart.innerHTML = `
         <h2 class="text-xl font-bold">${projet.projectName}</h2>
         <p>Nombre de tâches : ${projet.tasks.length}</p>
         <p>Heures estimées : ${projet.totalEstimatedHours}h</p>
         <button type="button"class="btn-review mt-3 px-4 py-2 rounded bg-[#5545E6] text-white font-bold">Voir le projet</button>`
      projectslist.appendChild(cart)


      const btnvoir = cart.querySelector(".btn-review")

      btnvoir.addEventListener("click", (e) =>{
         const cartelement = e.target.closest(".project")  
         console.log(cartelement)
      }

      )
   })
}




async function loedddachboard(url) {
   const response = await fetch(url);
   const data = await response.json();

   if (!data) {
      console.log("il ya reain projet")
      return
   };

   let exists = false
   for (const projet of projets) {
      if (projet.projectName === data[0].projectName) {
         exists = true
         break;
      }
   }

   if (exists) { alert("cet projet deja exist"); }
   else {
      projets.push(data[0])
      console.log(projets[0]);
      affichageDachBoerd(projets)
      localStorage.setItem("projets", JSON.stringify(projets));
   }


}


btndemo.addEventListener("click", () => {
   loedddachboard("data/sample-plan.json")
})
