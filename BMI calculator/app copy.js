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
// if(height==='' || height<0 || isNaN(height)){
// result.innerHTML=`please give a valid height ${height}`;
// }else if(weight==='' || weight<0 || isNaN(weight)){
// result.innerHTML=`please give a valid weight ${weight}`;
// }else{
//     const bmi=(weight/(height/100)**2).toFixed(2);

//      if(bmi<=18.5){
//         result.innerHTML=` ${bmi} ,<span>Under weight</span> `;
//      //or/result.innerContent=` ${bmi} ,<span>Under weight</span> `;
//     }
//      else if(bmi<=24.9){
//          result.innerHTML=` ${bmi} ,<span> Normal Weight</span>`;
//     }
//      if(bmi>24.9){
//          result.innerHTML=` ${bmi} ,<span> Overweight </span>`;
//     }

// }

});





const bmi=(weight/(height/100)**2).toFixed(2);

const heightMeter = height / 100;

const minNormalWeight = (18.5 * heightMeter * heightMeter).toFixed(2);
const maxNormalWeight = (24.9 * heightMeter * heightMeter).toFixed(2);

if(bmi<=18.5){

let needWeight = (minNormalWeight - weight).toFixed(2);

result.innerHTML=`${bmi} , <span>Under Weight</span> 
<br>You need to gain ${needWeight} kg 
<br>Normal weight range: ${minNormalWeight}kg - ${maxNormalWeight}kg`;

}

else if(bmi<=24.9){

result.innerHTML=`${bmi} , <span>Normal Weight</span> 
<br>Normal weight range: ${minNormalWeight}kg - ${maxNormalWeight}kg`;

}

else{

let extraWeight = (weight - maxNormalWeight).toFixed(2);

result.innerHTML=`${bmi} , <span>Overweight</span> 
<br>You need to lose ${extraWeight} kg 
<br>Normal weight range: ${minNormalWeight}kg - ${maxNormalWeight}kg`;

}










