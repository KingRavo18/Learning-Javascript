// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHED
// 3. TAKE OUT THE TRASH

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

walkDog().then(value => {
    console.log(value); return cleanKitchen()
}).then(value => {
    console.log(value); return takeOutTrash()
}).then(value => {
    console.log(value); return console.log("All tasks complete");
}).catch(error => console.error(error));