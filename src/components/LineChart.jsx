import { LineChart as LCharts, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentsData = [
        { id: 1, name: "Ayesha", math: 15, physics: 95, chemistry: 86 },
        { id: 2, name: "Rahul", math: 88, physics: 90, chemistry: 84 },
        { id: 3, name: "Simran", math: 92, physics: 59, chemistry: 91 },
        { id: 4, name: "Aditya", math: 37, physics: 70, chemistry: 65 },
        { id: 5, name: "Anu", math: 80, physics: 83, chemistry: 77 },
        { id: 6, name: "Ankit", math: 73, physics: 65, chemistry: 72 },
        { id: 7, name: "Sneha", math: 45, physics: 88, chemistry: 82 },
        { id: 8, name: "Rohan", math: 60, physics: 65, chemistry: 38 },
        { id: 9, name: "Kavya", math: 95, physics: 99, chemistry: 96 },
        { id: 10, name: "Arjun", math: 78, physics: 80, chemistry: 75 }
      ];
      
  return (
    <div>
        <LCharts width={1200} height={610} data={studentsData}>
        <XAxis dataKey="name" />
        <YAxis/>
            <Line type="" dataKey="math" stroke="red" />
            <Line type="" dataKey="physics" stroke="green" />
            <Line type="" dataKey="chemistry" stroke="blue" />
        </LCharts>
    </div>
  )
}

export default LineChart