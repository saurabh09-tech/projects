const group=[]

function addTask(event){
    event.preventDefault()
    let data=event.target.task.value
    group.push(data)
   let values=""
    group.forEach((el)=>{
        values=values +"<br>"+ el+ "   <button>Delete</delete>" 
        document.getElementById("content").innerHTML=values

    })
}
