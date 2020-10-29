var spinner = document.querySelector('.spinner-loader')
var lecture = document.querySelector('.lecture_content-dispaly')
var past__question = document.querySelector('.question_content-dispaly')
var project_material = document.querySelector('.project_content-dispaly')


async function getpastquestion(){
    
        const data = await fetch 
     ('https://greenbrainbe.herokuapp.com/api/v1/pastquestions');
     const question = await data.json();
     //const title = question.data._id
     console.log(question);

//clear
clearLoader();


//element
const renderPastQuestion = question.data.map(el =>{
    const markUp = `
  <!-------------------------------------past question------------------------------------------------->

  <div class="row pt-4 mt-4">
    <div class="col col-lg-3 col-md-6 col-sm-12 col-xs-12">
        <div class="card card_note bg-light mb-3">
          <div class="card-header text-center" style="background-color:${generateRandomColor()}">${el.course}</div>
          <div class="card-body">
            <h5 class="card-title text-center">${el.title}</h5>
            <p class="card-text text-center">${el.school}</p>
            <p class="card-text text-center">${el.level}level</p>
            <p class="card-text text-center">${el.session}</p>
          </div>
      </div>
      </div>
      <div class="col col-lg-3 col-md-6 col-sm-12 col-xs-12">
        <div class="card card_note bg-light mb-3">
        <div class="card-header text-center" style="background-color:${generateRandomColor()}">${el.course}</div>
        <div class="card-body">
          <h5 class="card-title text-center">${el.title}</h5>
          <p class="card-text text-center">${el.school}</p>
          <p class="card-text text-center">${el.level}level</p>
          <p class="card-text text-center">${el.session}</p>
          </div>
      </div>
      </div>
      <div class="col col-lg-3 col-md-6 col-sm-12 col-xs-12">
        <div class="card card_note bg-light mb-3">
        <div class="card-header text-center" style="background-color:${generateRandomColor()}">${el.course}</div>
        <div class="card-body">
          <h5 class="card-title text-center">${el.title}</h5>
          <p class="card-text text-center">${el.school}</p>
          <p class="card-text text-center">${el.level}level</p>
          <p class="card-text text-center">${el.session}</p>                
          </div>
      </div>
      </div>
      <div class="col col-lg-3 col-md-6 col-sm-12 col-xs-12">
        <div class="card card_note bg-light mb-3">
        <div class="card-header text-center"  style="background-color:${generateRandomColor()}">${el.course}</div>
        <div class="card-body">
          <h5 class="card-title text-center">${el.title}</h5>
          <p class="card-text text-center">${el.school}</p>
          <p class="card-text text-center">${el.level}level</p>
          <p class="card-text text-center">${el.session}</p>
          </div>
      </div>
      </div>
  </div>
    `;
    return markUp;
    
}); 
past__question.innerHTML = renderPastQuestion .join('\n');
    
     
}
getpastquestion()
 


function generateRandomColor(){
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

//spiner



//clear spinner
  const clearLoader = () =>{
    const loader = document.querySelector('.loader');
    if (loader){
        loader.parentElement.removeChild(loader)
    }
  };
 




