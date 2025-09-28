import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import Container from './Container';

const resultData= [
    {
      "student_id": 1,
      "name": "Alice",
      "math": 88,
      "marks": {
        "physics": 85,
        "chemistry": 90,
        "math": 88
      }
    },
    {
      "student_id": 2,
      "name": "Bob",
      "math": 91,
      "marks": {
        "physics": 92,
        "chemistry": 85,
        "math": 91
      }
    },
    {
      "student_id": 3,
      "name": "Charlie",
      "math": 80,
      "marks": {
        "physics": 78,
        "chemistry": 82,
        "math": 80
      }
    },
    {
      "student_id": 4,
      "name": "David",
      "math": 92,
      "marks": {
        "physics": 88,
        "chemistry": 86,
        "math": 92
      }
    },
    {
      "student_id": 5,
      "name": "Eva",
      "math": 93,
      "marks": {
        "physics": 95,
        "chemistry": 91,
        "math": 93
      }
    },
    {
      "student_id": 6,
      "name": "Frank",
      "math": 85,
      "marks": {
        "physics": 80,
        "chemistry": 78,
        "math": 85
      }
    },
    {
      "student_id": 7,
      "name": "Grace",
      "math": 90,
      "marks": {
        "physics": 91,
        "chemistry": 94,
        "math": 90
      }
    },
    {
      "student_id": 8,
      "name": "Hank",
      "math": 75,
      "marks": {
        "physics": 70,
        "chemistry": 72,
        "math": 75
      }
    },
    {
      "student_id": 9,
      "name": "Ivy",
      "math": 78,
      "marks": {
        "physics": 77,
        "chemistry": 80,
        "math": 78
      }
    },
    {
      "student_id": 10,
      "name": "Jack",
      "math": 90,
      "marks": {
        "physics": 89,
        "chemistry": 87,
        "math": 90
      }
    }
  ]
  
const ResultChart = () => {
    return (
        <div>
            <h2 className='text-xl text-center'>Graph Chat</h2>
            <Container>
                <LineChart width={800} height={400} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <CartesianGrid></CartesianGrid>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey={'marks.chemistry'} stroke='red'></Line>
                <Legend></Legend>
                </LineChart>
            </Container>
            
        </div>
    );
};

export default ResultChart;