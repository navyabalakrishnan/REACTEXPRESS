
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 7000;
app.listen(port, () => console.log("Server is running on port 7000"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersData = [
  {
          username: 'user1',
          password: 'pass1',
          fullName: 'Alice Johnson',
          email: 'alice.johnson@example.com',
          image:'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-1252107-2381069.jpg&fm=jpg',
          phone: '555-1234',
          address: '123 MG Road, Kochi, Kerala, India',
          role: 'Software Developer',
          about: 'Alice Johnson is a highly experienced administrator with over 10 years in the IT industry. She has a knack for problem-solving and excels in team management. Alice is known for her attention to detail and her ability to streamline operations to increase efficiency. Outside of work, she enjoys hiking, reading, and volunteering at local animal shelters.'
        },
        {
          username: 'user2',
          password: 'pass2',
          fullName: 'Bob Smith',
          image:'https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg',
          email: 'bob.smith@example.com',
          phone: '555-5678',
          address: '456 Banerji Road, Ernakulam, Kerala, India',
          role: 'Java Developer',
          about: 'Bob Smith is a passionate software developer who specializes in frontend technologies. With a background in graphic design, Bob brings a unique perspective to web development, ensuring that functionality and aesthetics go hand in hand. In his spare time, Bob loves to travel and photograph landscapes, blending his technical skills with his artistic vision.'
        },
        {
          username: 'user3',
          password: 'pass3',
          fullName: 'Carol White',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRe9lNRpytDXjytXiX-GLVXb4QTq_zVfwse73tdSal4zk-ZuJW3If8nqqR1G6HItSRaCk&usqp=CAU',
          email: 'carol.white@example.com',
          phone: '555-8765',
          address: '789 Marine Drive, Kochi, Kerala, India',
          role: 'Systems Analyst',
          about: 'Carol White is a detail-oriented QA engineer with a strong background in automated testing. She is dedicated to ensuring that all software products meet the highest standards of quality before release. Carol enjoys keeping up with the latest industry trends and continuously improving her skills. In her free time, she is an avid gardener and enjoys experimenting with new plant species.'
        },
        {
          username: 'user4',
          password: 'pass4',
          fullName: 'David Brown',
          image:'https://www.netapp.com/media/web-side-x-side-professional-services_tcm19-8095.jpg?v=102953',
          email: 'david.brown@example.com',
          phone: '555-4321',
          address: '101 Kaloor, Kochi, Kerala, India',
          role: 'Database Administrator',
          about: 'David Brown is a talented content editor with a flair for creating compelling narratives. His background in journalism and communications allows him to craft engaging content that resonates with readers. David is also a skilled researcher, ensuring that all information is accurate and well-presented. He enjoys writing short stories and is an active member of a local writers\' club.'
        },
        {
          username: 'user5',
          password: 'pass5',
          fullName: 'Eva Green',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzp4XneeCXYD8Ar8xSBd5hWUCZV_frjZ6sHg&usqp=CAU',
          email: 'eva.green@example.com',
          phone: '555-6543',
          address: '202 Fort Road, Thiruvananthapuram, Kerala, India',
          role: 'Network Administrator',
          about: 'Eva Green is a customer support specialist who excels in providing excellent service and resolving issues efficiently. With her calm demeanor and effective communication skills, Eva is a trusted point of contact for clients. She is passionate about helping others and continuously seeks ways to improve the customer experience. Outside of work, Eva enjoys painting and participating in community theater.'
        },
        {
          username: 'user6',
          password: 'pass6',
          fullName: 'Frank Harris',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvul8-0_D7F9SciGJVthysfhDzoSozhDmYvsj7k8-gYTSi9b1wpnHU53L5wQDib3rKf5k&usqp=CAU',
          email: 'frank.harris@example.com',
          phone: '555-7890',
          address: '303 Vytilla, Kochi, Kerala, India',
          role: 'Technical Support Specialist',
          about: 'Frank Harris is a seasoned IT manager with a strong background in network administration and cybersecurity. His extensive experience in managing complex IT infrastructures makes him an invaluable asset to the team. Frank is committed to staying updated on the latest security protocols and technologies. In his leisure time, he enjoys cycling and coaching a local youth soccer team.'
        },
        {
          username: 'user7',
          password: 'pass7',
          fullName: 'Grace Lee',
          image:'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=',
          email: 'grace.lee@example.com',
          phone: '555-0987',
          address: '404 East Fort, Thrissur, Kerala, India',
          role: 'Backend Engineer',
          about: 'Grace Lee is a creative graphic designer with a passion for visual storytelling. She has worked on numerous projects ranging from branding to web design. Graces innovative approach and attention to detail have earned her several accolades. She loves exploring new design trends and tools to enhance her skills. Grace is also an avid traveler and enjoys capturing her journeys through photography.'
        },
        {
          username: 'user8',
          password: 'pass8',
          fullName: 'Hank Miller',
          image:'https://pickardproperties.co.uk/wp-content/uploads/2023/07/young-professional-man-laptop-1024x683.jpg',
          email: 'hank.miller@example.com',
          phone: '555-3456',
          address: '505 MG Road, Kozhikode, Kerala, India',
          role: 'Full Stack Developer',
          about: 'Hank Miller is a dedicated backend developer known for his expertise in server-side technologies and database management. He has a keen eye for optimizing system performance and ensuring robust application functionality. Hank is passionate about learning new programming languages and frameworks. In his downtime, he enjoys building DIY electronics and playing strategy-based video games.'
        },
        {
          username: 'user9',
          password: 'pass9',
          fullName: 'Ivy Wilson',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZLbj3spUqSOZ3-V1hy3y5bXfM7m9EkV-gw&usqp=CAU',
          email: 'ivy.wilson@example.com',
          phone: '555-9876',
          address: '606 West Hill, Kozhikode, Kerala, India',
          role: 'Editor',
          about: 'Ivy Wilson is an experienced technical writer and editor who specializes in creating clear, concise, and user-friendly documentation. She has a strong background in software development, which enables her to communicate complex technical concepts effectively. Ivy is committed to continuous learning and enjoys attending tech conferences. In her spare time, she writes a blog about tech trends and innovations.'
        },
        {
          username: 'user10',
          password: 'pass10',
          fullName: 'Jack Turner',
          image:'https://image4.photobiz.com/8053/6_20200320132509_17431638_xlarge.jpg',
          email: 'jack.turner@example.com',
          phone: '555-5432',
          address: '707 Kovalam, Thiruvananthapuram, Kerala, India',
          role: 'Developer',
          about: 'Jack Turner is a versatile full-stack developer with experience in both frontend and backend technologies. He is known for his problem-solving skills and ability to work effectively under pressure. Jack enjoys collaborating with cross-functional teams to deliver high-quality software solutions. He is a tech enthusiast and spends his free time experimenting with new programming techniques and contributing to open-source projects.'
        }
];


app.get('/getusersdata', (req, res) => {
    res.status(200).json(usersData);
});

app.get('/user', (req, res) => {
  const username = req.query.username;
  const user = usersData.find(u => u.username === username);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});