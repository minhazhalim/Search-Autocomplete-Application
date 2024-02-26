const availableKeywords = [
     'html',
     'css',
     'js',
     'minhaz halim zim',
     'web development','where to learn coding online',
     'where to learn front-end web development',
     'how to create a website',
];
const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');
function selectInput(list){
     inputBox.value = list.innerHTML;
     resultBox.innerHTML = "";
}
function display(result){
     const content = result.map((list) => {
          return `<li onclick=selectInput(this)>${list}</li>`;
     });
     resultBox.innerHTML = `<ul>${content.join("")}</ul>`;
}
inputBox.addEventListener('keyup',() => {
     let result = [];
     let input = inputBox.value;
     if(input.length){
          result = availableKeywords.filter((keyword) => {
               return keyword.toLowerCase().includes(input.toLowerCase());
          });
     }
     display(result);
     if(!result.length) resultBox.innerHTML = "";
});