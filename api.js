
import { affichageDachBoerd ,setstocageprojet} from "/affichage.js";
import { projets } from "/affichage.js";

export async function loedddachboard(url) {
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

      setstocageprojet()
   }


}


