const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint =  'https://randomuser.me/api' ;

async function getQuote(){
  console.log('quote button was clicked');
  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusTest);
    }

    const json = await response.json();
    console.log(json);
    displayImage(json.results[0].picture.large);
    displayName(json.results[0].name.first + " " + json.results[0].name.last);
  } catch(err){
    console.log(err);
    alert('Failed');
  }

}

function displayName(namePara){
  const name =  document.querySelector('#js-name-text');
  name.textContent = namePara;
}

function displayImage(imagePara){
  document.getElementById('image').src = imagePara;
}
