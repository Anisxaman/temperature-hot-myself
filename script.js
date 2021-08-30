


document.getElementById("btn").addEventListener('click',function(){
    const Input=document.getElementById("inputField");

    const InputText=Input.value;


    if (InputText.length > 0) {
        document.getElementById("spinner").classList.remove("d-none");
        document.getElementById("spinner").classList.add("d-block");
        gettinData(InputText);
        
      } else {
        document.getElementById("error-message").innerHTML =
          "<p class='text-center p-3 bg-danger'><b>Please enter a Country name...</b></p>";
      }










    // const key= '69f40fb32ca6855d0ef30fc5c9f26100';
   
    // // console.log(InputText);

    // const url=`https://api.openweathermap.org/data/2.5/weather?q=${InputText}&appid=${key}
    // `
   
    // console.log(url);


  
    // fetch(url)
    
    //     .then(res => res.json())
    //     .then(data =>weatherDisplay(data));

   

})


const gettinData=collecion=>{
  const key= '69f40fb32ca6855d0ef30fc5c9f26100';
   
    // console.log(InputText);
    document.getElementById("spinner").classList.remove("d-block");
    document.getElementById("spinner").classList.add("d-none");

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${collecion}&appid=${key}
    `  
    // console.log(url); 
    fetch(url)
    
        .then(res => res.json())
        .then(data =>weatherDisplay(data));

  //   const uRl=fetch(url);
  //   const res=(await uRl).json();
  //  weatherDisplay(res);


}



const weatherDisplay=data=>{

   
        console.log(data);
        
        const img= `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        const div = document.getElementById("main");
        div.innerHTML=`
        <img src="${img}" alt="">
        <h1 class="name">${data.name}</h1>
        <h3><span>${(data.main.temp-273).toFixed(2)}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
        <h1 class="lead">humidity:${data.main.humidity}</h1>
        
        `
    

   
        // const spin=document.getElementById("spinner");
        // spin.removeAttribute('d-none');
        // spin.setAttribute('d-block ',true);
    




}


// $(window).load(function(){
//     $('.loader').fadeOut();
// });