

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
          userId: 'user1',
          // password: 'pass1',
          fullName: 'Alice Johnson',
          email: 'alice.johnson@example.com',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU',
          phone: '555-1234',
          address: '123 MG Road, Kochi, Kerala, India',
          role: 'Administrator',
          about: 'Alice Johnson is a highly experienced administrator with over 10 years in the IT industry. She has a knack for problem-solving and excels in team management. Alice is known for her attention to detail and her ability to streamline operations to increase efficiency. Outside of work, she enjoys hiking, reading, and volunteering at local animal shelters.'
        },
        {
          userId: 'user2',
          // password: 'pass2',
          fullName: 'Bob Smith',
          image:'data:image/jpeg;base64,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', email: 'bob.smith@example.com',
          phone: '555-5678',
          address: '456 Banerji Road, Ernakulam, Kerala, India',
          role: 'Software Developer',
          about: 'Bob Smith is a passionate software developer who specializes in frontend technologies. With a background in graphic design, Bob brings a unique perspective to web development, ensuring that functionality and aesthetics go hand in hand. In his spare time, Bob loves to travel and photograph landscapes, blending his technical skills with his artistic vision.'
        },
        {
          userId: 'user3',
          // password: 'pass3',
          fullName: 'Carol White',
          image:'https://www.seekpng.com/png/detail/219-2190977_circle-profile-no-background-png-120dpi-page001-gentleman.png', email: 'carol.white@example.com',
          phone: '555-8765',
          address: '789 Marine Drive, Kochi, Kerala, India',
          role: 'QA Engineer',
          about: 'Carol White is a detail-oriented QA engineer with a strong background in automated testing. She is dedicated to ensuring that all software products meet the highest standards of quality before release. Carol enjoys keeping up with the latest industry trends and continuously improving her skills. In her free time, she is an avid gardener and enjoys experimenting with new plant species.'
        },
        {
          userId: 'user4',
          // password: 'pass4',
          fullName: 'David Brown',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKqLoi07fEe85Y9txe1OKH5hkYDFu3HK2Cg&usqp=CAU', email: 'david.brown@example.com',
          phone: '555-4321',
          address: '101 Kaloor, Kochi, Kerala, India',
          role: ' Content Editor',
          about: 'David Brown is a talented content editor with a flair for creating compelling narratives. His background in journalism and communications allows him to craft engaging content that resonates with readers. David is also a skilled researcher, ensuring that all information is accurate and well-presented. He enjoys writing short stories and is an active member of a local writers\' club.'
        },
        {
          userId: 'user5',
          // password: 'pass5',
          fullName: 'Eva Green',
          image:'https://leadershipcircle.com/wp-content/uploads/2020/08/Katie-Everett-.png',email: 'eva.green@example.com',
          phone: '555-6543',
          address: '202 Fort Road, Thiruvananthapuram, Kerala, India',
          role: 'Customer Support ',
          about: 'Eva Green is a customer support specialist who excels in providing excellent service and resolving issues efficiently. With her calm demeanor and effective communication skills, Eva is a trusted point of contact for clients. She is passionate about helping others and continuously seeks ways to improve the customer experience. Outside of work, Eva enjoys painting and participating in community theater.'
        },
        {
          userId: 'user6',
          // password: 'pass6',
          fullName: 'Frank Harris',
          image:'https://buffer.com/library/content/images/2020/05/Ash-Read.png', email: 'frank.harris@example.com',
          phone: '555-7890',
          address: '303 Vytilla, Kochi, Kerala, India',
          role: 'IT manager',
          about: 'Frank Harris is a seasoned IT manager with a strong background in network administration and cybersecurity. His extensive experience in managing complex IT infrastructures makes him an invaluable asset to the team. Frank is committed to staying updated on the latest security protocols and technologies. In his leisure time, he enjoys cycling and coaching a local youth soccer team.'
        },
        {
          userId: 'user7',
          // password: 'pass7',
          fullName: 'Grace Lee',
          image:'https://sewausa.org/resources/Sewa%20USA%20Images/Projects/Sewa%20Aspire/Volunteer%20list/7.png',  email: 'grace.lee@example.com',
          phone: '555-0987',
          address: '404 East Fort, Thrissur, Kerala, India',
          role: ' Graphic Designer',
          about: 'Grace Lee is a creative graphic designer with a passion for visual storytelling. She has worked on numerous projects ranging from branding to web design. Graces innovative approach and attention to detail have earned her several accolades. She loves exploring new design trends and tools to enhance her skills. Grace is also an avid traveler and enjoys capturing her journeys through photography.'
        },
        {
          userId: 'user8',
          // password: 'pass8',
          fullName: 'Hank Miller',
          image:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png',   email: 'hank.miller@example.com',
          phone: '555-3456',
          address: '505 MG Road, Kozhikode, Kerala, India',
          role: 'Backend Developer',
          about: 'Hank Miller is a dedicated backend developer known for his expertise in server-side technologies and database management. He has a keen eye for optimizing system performance and ensuring robust application functionality. Hank is passionate about learning new programming languages and frameworks. In his downtime, he enjoys building DIY electronics and playing strategy-based video games.'
        },
        {
          userId: 'user9',
          // password: 'pass9',
          fullName: 'Ivy Wilson',
          image:'https://sewausa.org/resources/Sewa%20USA%20Images/Projects/Sewa%20Aspire/Volunteer%20list/6.jpg', email: 'ivy.wilson@example.com',
          phone: '555-9876',
          address: '606 West Hill, Kozhikode, Kerala, India',
          role: ' Technical Writer',
          about: 'Ivy Wilson is an experienced technical writer and editor who specializes in creating clear, concise, and user-friendly documentation. She has a strong background in software development, which enables her to communicate complex technical concepts effectively. Ivy is committed to continuous learning and enjoys attending tech conferences. In her spare time, she writes a blog about tech trends and innovations.'
        },
        {
          userId: 'user10',
          // password: 'pass10',
          fullName: 'Jack Turner',
          image:'https://isbscience.org/wp-content/uploads/Andrew-Magis.png',email: 'jack.turner@example.com',
          phone: '555-5432',
          address: '707 Kovalam, Thiruvananthapuram, Kerala, India',
          role: ' Full-Stack Developer',
          about: 'Jack Turner is a versatile full-stack developer with experience in both frontend and backend technologies. He is known for his problem-solving skills and ability to work effectively under pressure. Jack enjoys collaborating with cross-functional teams to deliver high-quality software solutions. He is a tech enthusiast and spends his free time experimenting with new programming techniques and contributing to open-source projects.'
        }
];


app.get('/getusersdata', (req, res) => {
    res.status(200).json(usersData);
});

app.get('/user:userId', (req, res) => {
  const userId = req.query.userId;
  const user = usersData.find(u => u.userId === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
 });

  
  const userDb = 'admin';
  const passDb = 'admin';
  
  app.use(express.json());
  
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).send('Missing username or password'); 
    }
  
    if (username === userDb && password===passDb) 
      {
      res.send('success'); 
    } else {
      res.status(401).send('Invalid username or password');
    }
  });
  