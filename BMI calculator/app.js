const form =document.querySelector("form");
// this use case  will give you empty (it will store at time of f0rm load )
// const height =parseInt(document.querySelector("#height").value);


// const btn =document.querySelector("#btn")    no need by default submit button
form.addEventListener("submit",function(e){
    e.preventDefault();
    // preventDefault is used for not submit immediately( otherwise it blink the output
    
const height =parseInt(document.querySelector("#height").value);
const weight =parseInt(document.querySelector("#weight").value);
const result =document.querySelector(".results");


// isNaN() method to check --not a number 
if(height==='' || height<0 || isNaN(height)){
result.innerHTML=`please give a valid height ${height}`;
}else if(weight==='' || weight<0 || isNaN(weight)){
result.innerHTML=`please give a valid weight ${weight}`;
}else{
    const bmi=(weight/(height/100)**2).toFixed(2);

     if(bmi<=18.5){
        result.innerHTML=` ${bmi} ,<span>Under weight</span> `;
     //or/result.innerContent=` ${bmi} ,<span>Under weight</span> `;
    }
     else if(bmi<=24.9){
         result.innerHTML=` ${bmi} ,<span> Normal Weight</span>`;
    }
     if(bmi>24.9){
         result.innerHTML=` ${bmi} ,<span> Overweight </span>`;
    }

}

});




















//without using form


// const height =document.querySelector("#height");
// const weight =document.querySelector("#weight");
// const result =document.querySelector(".results");
// const btn =document.querySelector("#btn")

// const BmiCalculate= function (height,weight){
// return weight.value/(height.value/100)**2;
// //   here **2 means square(power) 

// }

// function bmicalculator(){
//     let bmi=BmiCalculate(height,weight)

//  if(bmi<=18.5){
//         result.innerHTML=` ${bmi} Under weight `;
//     }
//      else if(bmi<=24.9){
//          result.innerHTML=` ${bmi} Normal Weight`;
//     }
//      if(bmi>24.9){
//          result.innerHTML=` ${bmi} Overweight`;
//     }
//    
// }


// btn.addEventListener("click",bmicalculator);



