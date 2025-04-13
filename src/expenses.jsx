import React from "react";

const  expense=[
    {id:1,
       name:"",
        desription:"",
        category:"",
        amount:"",
        date:""
    }
]
function Expenses(){
    const mappedData=expense.map((expenses)=>{
        console.log(expenses)
    })
return(
    <Expenses key={expense.id} name={expense.name} desription={expense.description}
    category={expense.category} amount={expense.amount} date={expense.date}/>
)
return(

    {mappedData}
)
}
export default Expenses


