import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [result, setResult] = useState([])

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  // const button = () => {
  //   axios.get('http://localhost:8000/user').then(res => setResult(res.data.result))
  // }  
  const onSubmit = () => {
    axios.post('http://localhost:8000/user', { name, email }).then(res => console.log(res))
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-10 p-24 ${inter.className}`}
    >
      <div>
        {result.map(user => <p>{user.name}</p>)}
      </div>
      <input placeholder="name" onChange={(event) => setName(event.target.value)} />
      <input placeholder="email" type="email" onChange={(event) => setEmail(event.target.value)} />

      <button onClick={onSubmit}>Submit</button>

    </main>
  );
}
