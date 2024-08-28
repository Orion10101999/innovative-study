import { useState } from 'react';
import data from '../data/RRB-JE-CBT-1-28-May-2019-Shift-1 (1).json'

const PYQ = () => {
    const [question , setQuestion] = useState(data.questions)
    console.log(question);
    console.log(data);
    console.log(data.exam_info);
    console.log(data.exam_info.exam_code);
    return (
    <div className='text-white'>
        <div className='flex justify-content items-center gap-5'>
            
                <p>Exam Date : {data.exam_info.exam_date}</p>
                <p>Exam Time : {data.exam_info.exam_time}</p>
        </div>
        <div className='mt-5 mx-3'>

        {
            question.map((item , i) => 
            <ul key={i}>
                <li className='mt-2'>{i+1}.{item.question_text}</li>
                <li className='mt-1'>{item.correct_answer}</li>
            </ul>
            )
        }
        </div>
    </div>
  )
}

export default PYQ;

