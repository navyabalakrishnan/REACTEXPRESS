

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
          image:'https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg', email: 'bob.smith@example.com',
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



app.get('/getuserdata', (req, res) => {
  res.status(200).json(usersData);
});

app.get('/user', (req, res) => {
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
  