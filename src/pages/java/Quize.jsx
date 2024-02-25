import React, { useState,useEffect } from 'react';

const Quiz = () => {
  // Define quiz questions and answers
  const quizData = [
    {
      id: 1,
      question: 'What are the major components of the JDBC?',
      options: ['DriverManager, Driver, Connection, Statement, and ResultSet', 'DriverManager, Driver, Connection, and Statement', 'DriverManager, Statement, and ResultSet', 'DriverManager, Connection, Statement, and ResultSet'],
      correctAnswer: 'DriverManager, Driver, Connection, Statement, and ResultSet',
    },
    {
        id: 2,
        question: 'Select the packages in which JDBC classes are defined?',
        options: ['jdbc and javax.jdbc', 'rdb and javax.rdb', 'jdbc and java.jdbc.sql', 'sql and javax.sql'],
        correctAnswer: 'sql and javax.sql',
      },
      {
        id: 3,
        question: 'Thin driver is also known as?',
        options: ['Type 3 Driver', 'Type 4 Driver', 'Type 1 Driver', 'Type 2 Driver'],
        correctAnswer: 'Type 4 Driver',
      },
      {
        id: 4,
        question: 'Which of the following method is used to perform DML statements in JDBC ?',
        options: ['xecuteResult()', 'executeQuery()', 'executeUpdate()', 'execute()'],
        correctAnswer: 'executeUpdate()',
      },
      {
        id: 5,
        question: 'How many transaction isolation levels provide the JDBC through the Connection interface?',
        options: ['3', '4', '7', '2'],
        correctAnswer: '4'
      },
      {
        id: 6,
        question: 'Which of the following method is static and synchronized in JDBC API? ',
        options: ['getConnection()', 'prepareCall()', 'executeUpdate()', 'executeQuery()'],
        correctAnswer: 'getConnection()'
      },
      {
        id: 7,
        question: 'Which methods are required to load a database driver in JDBC? ',
        options: ['getConnection()', 'registerDriver()', 'forName()', 'Both b and c'],
        correctAnswer: 'Both b and c'
      },
      {
        id: 8,
        question: 'Parameterized queries can be executed by? ',
        options: ['ParameterizedStatement', 'PreparedStatement', 'CallableStatement and Parameterized Statement', 'All kinds of Statements'],
        correctAnswer: 'PreparedStatement'
      },
      {
        id: 9,
        question: 'Which of the following is not a valid statement in JDBC? ',
        options: ['Statement', 'PreparedStatement', 'QueryStatement', 'CallableStatement'],
        correctAnswer: 'QueryStatement'
      },
      {
        id: 10,
        question: 'Identify the isolation level that prevents the dirty in the JDBC Connection class? ',
        options: ['TRANSACTION_READABLE_READ', 'TRANSACTION_READ_COMMITTED', 'TRANSACTION_READ_UNCOMMITTED', 'TRANSACTION_NONE'],
        correctAnswer: 'TRANSACTION_READ_COMMITTED'
      },
  ];
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
  const [timer, setTimer] = useState(600);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleOptionSelect = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionId - 1] = selectedOption;
      return newAnswers;
    });
  };

  const calculateTotalCorrect = () => {
    let correctCount = 0;
    quizData.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        correctCount += 1;
      }
    });
    return correctCount;
  };
const [totalCorrect,setTotalCorrect]=useState(0)
  const handleSubmit = () => {
    setIsSubmitted(true)
    const totalCorrect = calculateTotalCorrect();
    setTotalCorrect(totalCorrect)
    // alert(`You got ${totalCorrect} out of ${quizData.length} questions correct!`);
    // You can add more logic here, like sending the results to a server, etc.
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clear the interval when the timer reaches 0
    if (timer === 0) {
      clearInterval(interval);
      handleSubmit(); // Automatically submit the quiz when the timer reaches 0
    }

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [timer]);
  const formattedTime = `${Math.floor(timer / 60)}:${timer % 60}`;
  const [name,setName]=useState('User') 
  useEffect(()=>{
    let auth = localStorage.getItem('student');
    
  if(auth){
    auth= JSON.parse(auth).name;
        setName(auth)
  }
  },[])
  return (
    <div className="container-fluid" id='fsm'>
        <h2 className="text-white text-center bg-success p-1">Java Quiz</h2>
        <div className='dfdr'>
            <div>
            <div className="timer">
            <p> Time remaining:</p>
            <p className='time'>{formattedTime}</p> 
            </div>
            <div className="result d-flex justify-content-center">
     <p className='fs-5'>{name}</p>
     <p>Your score</p>
     <p>{totalCorrect}/{quizData.length}</p>
      </div>
            </div>
            <div className="q-section">
      {quizData.map((question) => (
        <div key={question.id} className="question-container">
          <p className='question'>{question.id}. {question.question}</p>
          <div className="options-container">
            {question.options.map((option, index) => (
              <label key={index}>
                <input className='option'
                  type="radio"
                  value={option}
                  onChange={() => handleOptionSelect(question.id, option)}
                  disabled={isSubmitted}
                  name='group1'
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className='btn btn-primary'  disabled={isSubmitted} onClick={handleSubmit}>Submit</button>
      
      </div>
      </div>
    </div>
  );
};

export default Quiz;
