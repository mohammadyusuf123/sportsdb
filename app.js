const allPlayer=()=>{
    document.getElementById('player-container').innerHTML='';
    document.getElementById('sppiner').style.display="block"
    document.getElementById('details').innerHTML='';
    const playerInput=document.getElementById('search-btn').value
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerInput}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>playerDetails(data.player));
    document.getElementById('search-btn').value=''
    document.getElementById('sppiner').style.display="none"
   
}

const playerDetails=(players)=>{
       const playerContainer=document.getElementById('player-container')
     for(const player of players){
        const div=document.createElement('div')
        div.classList.add('col-md-6')
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${player.strPlayer}</h5>
          <p class="card-text">Nationality:${player.strNationality}
        Team Name:${player.strTeam}
        Sport Name:${player.strSport}br

        Date of Birth:${player.dateBorn}
        </p>
        <button onclick="details(${player.idPlayer})" class="btn btn-outline-primary" type="button" ">Details</button>
        </div>
      </div>`
      playerContainer.appendChild(div)
     }
}

const details=(id)=>{
    document.getElementById('details').innerHTML=''
    const newY = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}
    `
 fetch(newY)
 .then((response)=>response.json())
  .then((data)=>info(data.players[0]))
 }

const info=(field)=>{
   const id=document.getElementById('details')
   const div=document.createElement('div')
        div.classList.add('col-md-6')
   div.innerHTML=`<div class="card" style="width: 18rem;">
   <img src="${field.strThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${field.strPlayer}</h5>
     <p class="card-text">Nationality:${field.strNationality}
        Team Name:${field.strTeam}
        Sport Name:${field.strSport}br

        Date of Birth:${field.dateBorn}
        </p>
     
   </div>
 </div>`
 id.appendChild(div);
  
}