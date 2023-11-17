import { useEffect, useState } from "react";
import ChatArea from "../components/ChatArea";
import Navbar from "../components/Navbar";
import Input from "../components/TextInput";

function Chat() {
    const[from, setFrom ] = useState("");
    const[message, setMessage] = useState("");
    const[name, setName] = useState("");
    const[status,setStatus] = useState("");
    const[to, setTo] = useState("");

    const fetchApi = async () => {
        let result = await fetch("https://qa.corider.in/assignment/chat?page=0");
        result = await result.json();
        setFrom(result.from);
        setTo(result.to);
        setName(result.name);
        setStatus(result.status)
        setMessage(result.message)


    }

    useEffect(() => {
        fetchApi();
    },[])

    return ( <>
    <div className="chat ">
        <Navbar from={from} to={to} name={name} status={status} message={message}/>
        <ChatArea />
        <Input/>
    </div>
    </> );
}

export default Chat;