
import { affichageDachBoerd ,setstocageprojet ,projets} from "/affichage.js";

export async function loedddachboard(url) {
   const response = await fetch(url);
   const data = await response.json();

   if (!data) {
      console.log("il ya reain projet")
      return
   };

   let exists = false
   for (let projet of projets) {
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

      setstocageprojet(projets)
   }

}


export async function post_and_getAI (prompt ,apikey){
   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apikey}`
   const response = await fetch(url,{
      method : "POST",
      headers: {
         "contents":[{parts :[{text:prompt}],
      }],
      generationConfig: {
         responseMimeType: "application/json",
      }
      }
   })
if(!response.ok)throw new Error(`ai api error${response.status}`);
const result = await response.json()
const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) {
    throw new Error("Ma rjje3ch l'model chi texte.");
  }

  // N-t-cleaniw ay ```json ila zadoha
  const cleaned = rawText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  return JSON.parse(cleaned);


}