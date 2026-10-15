import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(2)

    useEffect(() => {
        console.log("useEffect called");
        const timer = setInterval(() => {
            console.log("Interval running");
        }, 1000);

        fetchData();

        return () => {
            console.log("Component unmounted, clearing interval");
            clearInterval(timer);
        }

    },[])

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.github.com/users/sujit-khilar");
            const data =  await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function increasefunction() {
        setCount(count + 1)
        // setCount2(count2 + 1);
    }

    console.log("render");
    
    return (
    <div className="user-profile" style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        <h1>Name: {name}</h1>
        <h2>Location: Mumbai</h2>
        <h3>Contact: 1234567890</h3>
        <h4>Order Count: {count}</h4>
        {/* <h4>Order Count 2: {count2}</h4> */}
        <button onClick={increasefunction}>increase</button>
    </div>
    );
}

export default User;