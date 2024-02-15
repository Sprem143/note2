// import { useState } from "react";
// // import 'App.css'
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from "@chatscope/chat-ui-kit-react";
// const api_key = "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";
// export default function Chatbot() {
//   const [messages, setMessage] = useState([
//     {
//       message: "Hello I am chatbot",
//       sender: "ChatGPT",
//     },
//   ]);
//   const [typing, setTyping] = useState(false);
//   const handleSend = async (message) => {
//     const newMessage = {
//       message: message,
//       sender: "user",
//       direction: "outgoing",
//     };
//     //    all the old messages and new messages
//     const newMessages = [...messages, newMessage];
//     setMessage(newMessages);
//     setTyping(true);
//     await processMessage(newMessages);
//   };

//   async function processMessage(chatMessages) {
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message };
//     });
//     // roleuser- a message from user, assistant- a respose from chat cpt
//     // system- generally one initial message defining how we want chatgpt to talk
//     const systemMessage = {
//       role: "system",
//       content: "explain all concept like i am 20 years old",
//     };
//     const apiRequestBody = {
//         model: "gpt-3.5-turbo",
//         messages: [systemMessage, ...apiMessages],
//       };
//     await fetch("https://api.openai.com/v1/completions", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${api_key}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(apiRequestBody),
//       })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         console.log(data);
//         console.log(data.choices[0].message.content);
//         setMessage([
//           ...chatMessages,
//           {
//             message: data.choices[0].message.content,
//             sender: "ChatGPT",
//           },
//         ]);
//         setTyping(false);
//       });
//   }
//   return (
//     <div className="app" style={{ marginTop: "142px" }}>
//       <div style={{ position: "relative", height: "450px", width: "700px" }}>
//         <MainContainer>
//           <ChatContainer>
//             {/* <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={
//                 typing ? (
//                   <TypingIndicator content="finding your answer" />
//                 ) : null
//               }
//             >
//               {messages.map((message, i) => {
//                 return <Message key={i} model={message} />;
//               })}
             
//             </MessageList> */}
//             <MessageList scrollBehavior="smooth" typingIndicator={typing ? <TypingIndicator content="finding your answer" /> : null}>
//     {messages.map((message, i) => {
//         return <Message key={i} model={message} />;
//     })}
// </MessageList>
//             <MessageInput placeholder="Ask your question" onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
 MainContainer,
 ChatContainer,
 MessageList,
 Message,
 MessageInput,
 TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const OPENAI_API_KEY = "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";

function Chatbot() {
 // State to manage the typing indicator of the chatbot
 const [isChatbotTyping, setIsChatbotTyping] = useState(false);

 // State to store chat messages
 const [chatMessages, setChatMessages] = useState([
   {
     message: "Hello, I am ChatGPT!",
     sender: "ChatGPT",
   },
 ]);

 // Function to handle user messages
 const handleUserMessage = async (userMessage) => {
   // Create a new user message object
   const newUserMessage = {
     message: userMessage,
     sender: "user",
     direction: "outgoing",
   };

   // Update chat messages state with the new user message
   const updatedChatMessages = [...chatMessages, newUserMessage];
   setChatMessages(updatedChatMessages);

   // Set the typing indicator for the chatbot
   setIsChatbotTyping(true);

   // Process user message with ChatGPT
   await processUserMessageToChatGPT(updatedChatMessages);
 };

 // Function to send the user message to ChatGPT API
 async function processUserMessageToChatGPT(messages) {
   // Prepare the messages in the required format for the API
   let apiMessages = messages.map((messageObject) => {
     let role = "";
     if (messageObject.sender === "ChatGPT") {
       role = "assistant";
     } else {
       role = "user";
     }
     return { role: role, content: messageObject.message };
   });

   // System message for ChatGPT
   const systemMessage = {
     role: "system",
     content: "Explain all concept like a Professor in Biochemistry",
   };

   // Prepare the API request body
   const apiRequestBody = {
     model: "gpt-3.5-turbo",
     messages: [
       systemMessage, // System message should be in front of user messages
       ...apiMessages,
     ],
   };

   // Send the user message to ChatGPT API
   await fetch("https://api.openai.com/v1/chat/completions", {
     method: "POST",
     headers: {
       Authorization: "Bearer " + OPENAI_API_KEY,
       "Content-Type": "application/json",
     },
     body: JSON.stringify(apiRequestBody),
   })
     .then((data) => {
       return data.json();
     })
     .then((data) => {
       // Update chat messages with ChatGPT's response
       setChatMessages([
         ...messages,
         {
           message: data.choices[0].message.content,
           sender: "ChatGPT",
         },
       ]);
       // Set the typing indicator to false after getting the response
       setIsChatbotTyping(false);
     });
 }

 return (
   <>
     {/* A container for the chat window */}
     <div style={{ position: "relative", height: "100vh", width: "700px" }}>
       <MainContainer>
         <ChatContainer>
           {/* Display chat messages and typing indicator */}
           <MessageList
             typingIndicator={
               isChatbotTyping ? (
                 <TypingIndicator content="ChatGPT is thinking" />
               ) : null
             }
           >
             {/* Map through chat messages and render each message */}
             {chatMessages.map((message, i) => {
               return (
                 <Message
                   key={i}
                   model={message}
                   style={
                     message.sender === "ChatGPT" ? { textAlign: "left" } : {}
                   }
                 />
               );
             })}
           </MessageList>
           {/* Input field for the user to type messages */}
           <MessageInput
             placeholder="Type Message here"
             onSend={handleUserMessage}
           />
         </ChatContainer>
       </MainContainer>
     </div>
   </>
 );
}

export default Chatbot;
