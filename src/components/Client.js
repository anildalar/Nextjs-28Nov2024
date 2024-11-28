"use client"
import React, { useState } from 'react'

export default function Client() {
    //1. Hook Variable
    //const [varName, setFunction] = useState(initialValue)
    const [name, setName] = useState("");//I can defina a varialbe in ReactJs
    const [sname, setSname] = useState("");//I can defina a varialbe in ReactJs
    //2. Function defination area
    function showName(){
        console.log(name);
        console.log(sname);
    }

    //3. Return statement
    return (
        <form>
            <label htmlFor="student_name">Student Name</label>
            <input type="text" id="student_name" value={name} onChange={(fa) => setName(fa.target.value)} /><br />
            <label htmlFor="student_sname">Student Surname</label>
            <input type="text" id="student_sname" value={sname} onChange={(fa) => setSname(fa.target.value)} /><br />
            <button type="button" onClick={()=>{ showName() }}>Save student</button>
        </form>
    )
}
