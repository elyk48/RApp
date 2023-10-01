

// function Btn() {
//     const clickHandler= ()=>{
//  console.log("Clicked...clicked...!!");

//     }

//     return (
//         <button onClick={clickHandler}>Click Me</button>


//     );


// }

// export default Btn;


function Btn() {
    const clickHandler= ()=>{
 console.log("hOVERED...Hovered...!!");

    }

    return (
        <button onMouseOver={clickHandler}>Click Me</button>


    );


}

export default Btn;