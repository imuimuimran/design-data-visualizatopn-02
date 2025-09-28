import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import Container from './Container';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);

    const marksData = marksDataRes.data;
    
    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math) /3;
        student.avg = avg;
        return student;
    })
    
    return (
        <div className='mt-20'>
            <Container>
                <h1 className='text-xl text-center'>Bar Chart using Axios</h1>
                <BarChart width={1000} height={400} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>
            </BarChart>
            </Container>
        </div>
    );
};

export default MarksChart;