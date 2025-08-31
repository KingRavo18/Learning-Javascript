// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
            if(dogWalked){
                resolve("You walked the dog 🐶");
            }else{
                reject("You DIDN'T WALK THE DOG");
            }

            
        }, 1500);
    });
}

function cleanKitchen(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanedKitchen = true;
            if(cleanKitchen){
                resolve("You cleaned the kitchen 🧹");
            }else{
                reject("You DIDN'T CLEAN THE KITCHEN");
            }

        }, 2500);
    });
}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTaken = false;
            if(trashTaken){
                resolve("You took out the trash 🗑️");
            }else{
                reject("You did not take oUT THE TRASH");
            }
        }, 500);
    });
}

async function doChores() {

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
        
    }catch(error){
        console.error(error);
    }
}

doChores();