 



import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar,Pie } from 'react-chartjs-2';

 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const DashboardContent = () => {
  return (
    <ContentContainer>
      <ChartContainer>
        <ChartTitle>Upcoming Shifts</ChartTitle>
        <ChartContent>
          <Bar data={sampleShiftData} options={chartOptions} /> 
        </ChartContent> 
      </ChartContainer>
      <ChartContainer>
        <ChartTitle>Upcoming Projects</ChartTitle> 
        <ChartContent>
          <Pie data={sampleEventsData}  options={chartOptions} />
        </ChartContent> 
      </ChartContainer> 
    </ContentContainer>  
  );
}; 

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChartContainer = styled.div`
  flex: 1 1 45%;
  margin: 20px;
`;

const ChartTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ChartContent = styled.div`
  height: 300px;
  background-color: #f4f6f8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const sampleShiftData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Shifts',
      data: [3, 2, 5, 4, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const sampleProjectsData = {
  labels: ['Project A', 'Project B', 'Project C'],
  datasets: [
    {
      label: 'Projects',
      data: [30, 20, 50],
      borderColor: 'rgba(153, 102, 255, 0.6)',
      fill: false,
    },
  ],
};

const sampleEventsData = {
  labels: ['Event 1', 'Event 2', 'Event 3'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const sampleWorkPowerData = {
  labels: ['Employee A', 'Employee B', 'Employee C'],
  datasets: [
    {
      label: 'Work Power',
      data: [75, 50, 90],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

export default DashboardContent;














// import React from 'react';
// import styled from 'styled-components';
// import { Bar, Line, Pie } from 'react-chartjs-2';

// const DashboardContent = () => {
//   return (
//     <ContentContainer>
//       <ChartContainer>
//         <ChartTitle>Upcoming Shifts</ChartTitle>
//         <ChartContent>
//           <Bar data={sampleShiftData} options={chartOptions} />
//         </ChartContent>
//       </ChartContainer>
//       <ChartContainer>
//         <ChartTitle>Upcoming Projects</ChartTitle>
//         <ChartContent>
//           <Line data={sampleProjectsData} options={chartOptions} />
//         </ChartContent>
//       </ChartContainer>
//       <ChartContainer>
//         <ChartTitle>Office Events</ChartTitle>
//         <ChartContent>
//           <Pie data={sampleEventsData} options={chartOptions} />
//         </ChartContent>
//       </ChartContainer>
//       <ChartContainer>
//         <ChartTitle>Employee Work Power</ChartTitle>
//         <ChartContent>
//           <Bar data={sampleWorkPowerData} options={chartOptions} />
//         </ChartContent>
//       </ChartContainer>
//     </ContentContainer>
//   );
// };

// const ContentContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   padding: 20px;
//   background-color: #fff;
//   margin: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const ChartContainer = styled.div`
//   flex: 1 1 45%;
//   margin: 20px;
// `;

// const ChartTitle = styled.div`
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const ChartContent = styled.div`
//   height: 300px;
//   background-color: #f4f6f8;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const sampleShiftData = {
//   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   datasets: [
//     {
//       label: 'Shifts',
//       data: [3, 2, 5, 4, 3],
//       backgroundColor: 'rgba(75, 192, 192, 0.6)',
//     },
//   ],
// };

// const sampleProjectsData = {
//   labels: ['Project A', 'Project B', 'Project C'],
//   datasets: [
//     {
//       label: 'Projects',
//       data: [30, 20, 50],
//       borderColor: 'rgba(153, 102, 255, 0.6)',
//       fill: false,
//     },
//   ],
// };

// const sampleEventsData = {
//   labels: ['Event 1', 'Event 2', 'Event 3'],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     },
//   ],
// };

// const sampleWorkPowerData = {
//   labels: ['Employee A', 'Employee B', 'Employee C'],
//   datasets: [
//     {
//       label: 'Work Power',
//       data: [75, 50, 90],
//       backgroundColor: 'rgba(255, 206, 86, 0.6)',
//     },
//   ],
// };

// const chartOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// export default DashboardContent;
