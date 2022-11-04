let show = document.getElementById("show")
let selection = document.getElementById("selection")
let userselect = document.getElementById("userselect")
let selecting = document.getElementById("selecting")
let loadContainer = document.querySelector(".loader-container")



let win = document.getElementById("zero") 
let draw = document.getElementById("one")
let lose = document.getElementById("two")

function gettingDataOne() {
    let dataRandom =   data.sort(()=> Math.random() - 0.5)
    return dataRandom[0]
    
   }
   
   function gettingDataTwo() {
       let dataRandom =   data.sort(()=> Math.random() - 0.5)
       return dataRandom[0]
      }
   



function getLiveScore(){
    let random = Math.floor(Math.random()*3) 
    return random
}


getLiveScore()

let livescore = getLiveScore()
console.log(livescore)






let firstSelection = gettingDataOne()
let secondSelection = gettingDataTwo()


let houseData = []


let random1 = Math.floor(Math.random()*3)


let random2 = Math.floor(Math.random()*3)

/*if(random1 === random2){
    console.log ("You and the computer bet on the same things")
    }

else{
   
}*/

houseData.push({
    ...firstSelection,
    score: random1
    })

    houseData.push({
...secondSelection,
score: random2
})



console.log(houseData)

function display(){
    
   houseData.map((item)=> {
    let {teamName, id} = item 

   show.innerHTML += `
    <div class="team" onclick="bet(${id})">
   ${teamName}
    </div>
   
   `
    


   })

    
}

display()
let myBet =[]

function bet(id){
    let choice = houseData.find((item)=> item.id === id)
    
    userselect.innerHTML += `
    <div class="yourselection"> You bet with   ${choice.teamName}</div>
    `
    delete choice.score;
    console.log(choice)

    myBet.push(choice)

}


let artificial = [] 

function aiBet(){
    let aI= houseData.sort(()=> Math.random() - 0.5)
    console.log(aI[0])
    let computer = aI[0]
    
    selection.innerHTML += `
    <div class="yourselection"> AI has choosen to play this bet with   ${computer.teamName}. <span> <b> Now, choose the other team. </b></div>
    `
    
    artificial.push(computer)

    return computer

    
    
}

aiBet()


console.log(myBet, artificial)

function toWin(){
    loadContainer.classList.add('loader-container-show')
    
    setTimeout(()=>{
    loadContainer.classList.remove('loader-container-show')   
        let win = 0

  myBet.map((item)=> {
        item.score = win
    } )


    userPrediction = myBet[0].score
    aIPrediction = artificial[0].score
    
    if(userPrediction === livescore && aIPrediction !== livescore){
        loadContainer.classList.add('resultwin')
        console.log("You Have Won The Bet!")
    } else if (aIPrediction === livescore && userPrediction !== livescore){
        loadContainer.classList.add('resultlose')
        console.log("Ai  Win It!")
    }
    
    else if (userPrediction !== livescore && aIPrediction !== livescore){
        loadContainer.classList.add('tie')
        console.log("You placed similar Bet and Still Got it wrong !")
    }
    else {
        loadContainer.classList.add('tie')
        console.log("It is a tie!")
    }

    },3000)
}

function toDraw(){

    loadContainer.classList.add('loader-container-show')
   
    setTimeout(()=>{
        loadContainer.classList.remove('loader-container-show')
    let win = 1

    myBet.map((item)=> {
          item.score = win
      } )
     
      userPrediction = myBet[0].score;
  aIPrediction = artificial[0].score
      
      if(userPrediction === livescore && aIPrediction !== livescore){
        loadContainer.classList.add('resultwin')
          console.log("You Have Won The Bet!")
      } else if (aIPrediction === livescore && userPrediction !== livescore){
        loadContainer.classList.add('resultlose')
        console.log("Ai  Win It!")
      }
      
      else if (userPrediction !== livescore && aIPrediction !== livescore){
        loadContainer.classList.add('tie')
        console.log("You and Ai got it wrong !")
      }
      else {
        loadContainer.classList.add('tie')
        console.log("It is a tie!")
    }
    
   }, 3000)
   
   

}

function toLose(){

    loadContainer.classList.add('loader-container-show')

    setTimeout(() => {
        loadContainer.classList.remove('loader-container-show')
    let win = 2

    myBet.map((item)=> {
          item.score = win
      } )
      
      userPrediction = myBet[0].score
      aIPrediction = artificial[0].score
      
      if(userPrediction === livescore && aIPrediction !== livescore){
        loadContainer.classList.add('resultwin')
          console.log("You Have Won The Bet!")
      } else if (aIPrediction === livescore && userPrediction !== livescore){
        loadContainer.classList.add('resultlose')  
        console.log("Ai  Win It!")
      }
      
      else if (userPrediction !== livescore && aIPrediction !== livescore){
        loadContainer.classList.add('tie')    
        console.log("You and Ai got it wrong !")
      }
      else {
        loadContainer.classList.add('tie')  
        console.log("It is a tie!")
    }
  

    }, 3000);

    

}






let fixtureShow = document.getElementById("fixture-container")

function randomFixtureDisplay (){
    let dataRandom =   fixtureData.sort(()=> Math.random() - 0.5)
    return dataRandom
}
const sideShowFixture = randomFixtureDisplay()

function sideShowDisplay(){

 sideShowFixture.map( (item)=> {
    let {fixture, id} = item

   fixtureShow.innerHTML += `
     <div> 
     
        <div class="fffixture">${fixture}</div>
     
     </div>
    `
    
 }) 

    
}
sideShowDisplay()







    
    


