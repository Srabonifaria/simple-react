import React from 'react';

const Select = (props) => {
    const select =props.select
    console.log(select)
    // let totalSalary = 0;
    // for (let i =0; i <select.length ;i++){
    //     const player =select[i];
    //     totalSalary =totalSalary + player.salary;
    // }
     const totalSalary=select.reduce((sum,player) => sum + player.salary,0)
    
    return (
        <div>
            <h2>Player selected: {select.length}</h2>
            <p>Total Salary:{totalSalary}</p>
        </div>
    );
};

export default Select;