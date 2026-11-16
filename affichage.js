
 const btndemo = document.getElementById("btndemo")
 
 function affichageDachBoerd(data){
   //  const projectslist = document.getElementById("projectslist")
   
   console.log(data);
}

async function loedddachboard(url) {
   const response = await fetch(url);
   const data = await response.json();

   if(!data){console.log("il ya reain projet")
      return} ;
   
   affichageDachBoerd(data)     
  } 


btndemo.addEventListener("click" , ()=>{
   loedddachboard("data/sample-plan.json")
})
