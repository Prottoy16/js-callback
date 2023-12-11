const One=(callback)=>{
console.log("one");
callback();
}
const Two=(callback)=>{
setTimeout(()=>{
    console.log("two");
    callback();
},2000);


}
const Three=(callback)=>{
console.log("three");
callback();
}
const Four=()=>{
console.log("four");
}

One(()=>{
    Two(()=>{
        Three(()=>{
            Four();
        });
    });
});











// const square=(x)=>{
//     console.log(`square is ${x*x}`);
// }

// // const y=square;
// // y(7);


// const print=(y,callback)=>{
//   callback(y);
// }
// print(6,square);
