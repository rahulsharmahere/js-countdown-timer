const endDate = document.getElementById('end-date').innerText;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff =(end-now)/1000


    if (diff < 0){
        
        console.log("Happy New Year")
        clearInterval(clearInt);
        return;
        

    }

    // COnvert In days
    inputs[0].value = (Math.floor(diff/3600/24))
    inputs[1].value = (Math.floor((diff/3600) % 24))
    inputs[2].value = (Math.floor(diff/ 60 % 60))
    inputs[3].value = (Math.floor(diff% 60))
    
}


let clearInt = setInterval(() => {
    clock()
}, 1000);
 
clock()