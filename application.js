const searchYouTubers = () => {
     let input = document.getElementById('myInput').value.toUpperCase();
     let unOrderedList = document.getElementById('myUnOrderedList');
     let list = unOrderedList.getElementsByTagName('li');
     for(var i = 0;i < list.length;i++){
          let anchor = list[i].getElementsByTagName('a')[0];
          let textValue = anchor.textContent || anchor.innerHTML;
          if(textValue.toUpperCase().indexOf(input) > -1){
               list[i].style.display = '';
          }else{
               list[i].style.display = 'none';
          }
     }
}
document.addEventListener('keyup',searchYouTubers);