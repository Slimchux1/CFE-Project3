var spinner = document.querySelector('.spinner-loader')
var lecture = document.querySelector('.lecture_content-dispaly')
var past__question = document.querySelector('.question_content-dispaly')
var project_material = document.querySelector('.project_content-dispaly')


async function getProjectQuestion(){
    
        const data = await fetch 
     ('https://greenbrainbe.herokuapp.com/api/v1/projects');
     const project1___question = await data.json();
     //const title = question.data._id
     console.log(project1___question);

//clear



//element
const renderProject = project1___question.data.map(el =>{
    const markUp = `
  <!-------------------------------------past question------------------------------------------------->
  <div class="row pt-4 mt-4">
    <div class="col col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card card_note bg-light mb-3">
          <div class="card-body">
          <h6 class="card-title text-center text-uppercase"><a href="#" class="text-dark">${el.metadata.course}</a></h6>
          <h6 class="card-title text-center text-uppercase">${el.metadata.case_study}</h6>
          <p class="small text-left"><span class="font-weight-bold">Course:</span> ${el.metadata.course}
           <span class="font-weight-bold">Pages:</span> ${el.metadata.pages}
            <span class="font-weight-bold">Research Date:</span> ${el.metadata.month_of_research},
             ${el.metadata.year_of_research}</p>
          </div>
      </div>
       </div>
      <div class="col col-lg-4 col-md-12 col-sm-12 col-xs-12">
         <div class="card card_note bg-light mb-3">
          <div class="card-body">
          <h6 class="card-title text-center text-uppercase"><a href="#" class="text-dark">${el.metadata.topic}</a></h6>
          <h6 class="card-title text-center text-uppercase">${el.metadata.case_study}</h6>
          <p class="small text-left"><span class="font-weight-bold">Course:</span> ${el.metadata.course}
           <span class="font-weight-bold">Pages:</span> ${el.metadata.pages}
            <span class="font-weight-bold">Research Date:</span> ${el.metadata.month_of_research},
             ${el.metadata.year_of_research}</p>
      </div>
      </div>
      </div>
      <div class="col col-lg-4 col-md-12 col-sm-12 col-xs-12">
      <div class="card card_note bg-light mb-3">
      <div class="card-body">
      <h6 class="card-title text-center text-uppercase"><a href="#" class="text-dark">${el.metadata.topic}</a></h6>
      <h6 class="card-title text-center text-uppercase">${el.metadata.case_study}</h6>
      <p class="small text-left"><span class="font-weight-bold">Course:</span> ${el.metadata.course}
      <span class="font-weight-bold">Pages:</span> ${el.metadata.pages}
       <span class="font-weight-bold">Research Date:</span> ${el.metadata.month_of_research},
        ${el.metadata.year_of_research}</p>
      </div>
      </div>
  </div>
  </div>
    `;
    return markUp;
    
}); 
project_material.innerHTML = renderProject.join('\n');
    
     
}
getProjectQuestion()
 



//spiner

/*const renderLoaderProject = parent => {
   const loader = `
     <div class="loader">
     <img alt="" src="../asset/loader.svg">
     </div>
   `;
   parent.insertAdjacentHTML('afterbegin', loader);
}
renderLoaderProject(spinner)

//clear spinner
  const clearLoaderProject = () =>{
    const loader = document.querySelector('.loader');
    if (loader){
        loader.parentElement.removeChild(loader)
    }
  };*/
 




