
import { useState } from "react";
export default function Chatbot(){
//   const [question, setQuestion]=useState('Default');
//   const askQuestion = async (question) => {
//     try {
//       const response = await fetch('http://localhost:5000/chatbot', {
//         method: "POST",
//         headers: {
//           "Content-Type": 'application/json'
//         },
//         body: JSON.stringify({ question }) // Assuming question is a variable available in the scope
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const answer = await response.json();
//       alert(JSON.stringify(answer));
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       alert("Response is not ok");
//     }
//   };

  const [language, setLanguage] = useState('');
  const [definition, setDefinition] = useState('Your answer will display here');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language }),
      });

      const data = await response.json();
      setDefinition(data.definition);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setDefinition('Error fetching definition');
    }
  };


  return(
    <div className="container-fluid body-home">
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="me-3">Query</label>
        <input id="email" type="text" className="form-control" value={language} onChange={(e)=>setLanguage(e.target.value)} placeholder="search any definition"  required />
        <button className="btn btn-primary mt-3" type="submit">search </button>
    </form>
    <p id="definition">{definition}</p>
    </div>
  )
}
