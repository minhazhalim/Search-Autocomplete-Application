const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const searchStates = async searchText => {
     const response = await fetch('states.json');
     const states = await response.json();
     let matches = states.filter(state => {
          const regularExpression = new RegExp(`^${searchText}`,'gi');
          return state.name.match(regularExpression) || state.abbr.match(regularExpression);
     });
     if(searchText.length === 0){
          matches = [];
          matchList.innerHTML = '';
     }
     outputHtml(matches);
};
const outputHtml = matches => {
     if(matches.length>0){
          const html = matches.map(match => `
               <div class="card card-body mb-1">
                    <h4>${match.name}(${match.abbr})<span class="text-primary">${match.capital}</span></h4>
                    <small>latitude: ${match.lat} / longitude: ${match.long}</small>
               </div>
          `).join('');
          matchList.innerHTML = html;
     }
}
search.addEventListener('input',() => searchStates(search.value));