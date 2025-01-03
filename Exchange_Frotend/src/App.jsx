import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Layout from "./Layout";
import Login from "./Page/Login/Login";
import Signup from "./Page/Signup/Signup";
import SecondPage from "./Page/SecondPage/SecondPage";

function App() {
  // const [messages, setMessages] = useState([]); // To store received messages
  // const [idString, setIdString] = useState(""); // To store IDs as a string
  // const [messages2, setMessages2] = useState([]); // To store second API data
  // const [mergedData, setMergedData] = useState([]); // Merged data
 
  // // First useEffect to fetch data every 10 minutes
  // useEffect(() => {
  //   async function fetchAllData() {
  //     const token = "73a2d66fb0d78c9d490d9a7f3699d79d";
  //     const baseUrl = "https://rest.entitysport.com/exchange/matches";
  //     let allData = [];
  //     let currentPage = 1;
  //     let hasMoreData = true;
  //     const currDate = new Date().toLocaleDateString();
  //     const [day, month, year] = currDate.split("/"); // Split the date by "/"
  //     const formattedDate = `${year}-${day}-${month}`
  //     const finalDate = `${year}-${day}-${(parseInt(month,10)+2).toString()}`
  //     console.log(formattedDate,"date");
    
  //     try {
  //       while (hasMoreData) {
  //         const response = await axios.get(
  //           `${baseUrl}?token=${token}&per_page=1000&&paged=${currentPage}&date=${formattedDate}_${finalDate}`
  //         );
         
          
  //         const items = response.data.response.items;
  //         allData = [...allData, ...items];
  //         console.log(allData,"aldata")
  //         const totalPages = response.data.response.total_pages;
  //         hasMoreData = currentPage < totalPages;

  //         currentPage++;
  //       }
  //       console.log(allData,"final data");
  //       setMessages(allData);

  //       // Extract all IDs and create a comma-separated string
  //       const idString = allData.map((item) => item.match_id).join(",");
  //       setIdString(idString); // Store the string
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   // Initial fetch
  //   fetchAllData();

  //   // Set interval for 10 minutes
  //   const interval = setInterval(() => {
  //     fetchAllData();
  //   }, 600000); // 10 minutes in milliseconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

  // // Second useEffect to fetch data every 1 second
  // useEffect(() => {
  //   async function fetchMessages2() {
  //     const token = "73a2d66fb0d78c9d490d9a7f3699d79d";
  //     const baseUrl = `https://rest.entitysport.com/exchange/matchesmultiodds`;

  //     try {
  //       if (idString) {
  //         const response = await axios.get(`${baseUrl}?token=${token}&match_id=${idString}`);
  //         setMessages2(response.data.response);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching messages2:", error);
  //     }
  //   }

  //   // Initial fetch
  //   fetchMessages2();

  //   // Set interval for 1 second
  //   const interval = setInterval(() => {
  //     fetchMessages2();
  //   }, 1000); // 1 second in milliseconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [idString]);

  // // Merge messages and messages2 based on match_id
  // useEffect(() => {
  //   if (messages.length > 0 && Object.keys(messages2).length > 0) {
  //     const merged = messages.map((message) => {
  //       const additionalData = messages2[message.match_id] || {}; // Find matching data in messages2
  //       return { ...message, ...additionalData }; // Merge objects
  //     });
  //     setMergedData(merged);
  //   }
  // }, [messages, messages2]);

  // return (
  //   <div className="parent">
  //   <Header/>
  //     {/*<div className="box">Highlights</div>
  //     <div className="greyoe">
  //       <div>1</div>
  //       <div>X</div>
  //       <div>2</div>
  //     </div>
  //     {mergedData.map((val) => (
  //       <CardOne key={val.match_id} val={val} />
  //     ))}*/}

  // const [matches, setMatches] = useState([]);
  
  // useEffect(() => {
  //   const fetchMatches = async () => {
  //     try {
  //       const token = "73a2d66fb0d78c9d490d9a7f3699d79d";
  //       const response = await axios.get(
  //         `https://rest.entitysport.com/exchange/matches?token=${token}`
  //       );
  //       setMatches(response.data.response.items);
  //     } catch (error) {
  //       console.error("Error fetching matches:", error);
  //     }
  //   };

  //   fetchMatches();
  //   const interval = setInterval(fetchMatches, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Layout>
  </Router>
  
  );

  

  //   </div>
  // );
}

export default App;
