import { useEffect, useState } from "react";
import "./SecondMain.css";
import axios from "axios"
import CardOne from "../CardOne";
import Login from "../../Page/Login/Login";
import Signup from "../../Page/Signup/Signup";
import { useSelector } from "react-redux";
import Graph from "../Graph/Graph";
import BettingInterface from "../Betting/BettingInterface";
import OpenBets from "../OpenBets/OpenBets";
const SecondMain = () => {
    const [selected, setIsSelected] = useState(false);
    const [messages, setMessages] = useState([]); // To store received messages
    const [idString, setIdString] = useState(""); // To store IDs as a string
    const [messages2, setMessages2] = useState([]); // To store second API data
    // const [mergedData, setMergedData] = useState([]); // Merged data

    // First useEffect to fetch data every 10 minutes
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
    const [closed, setClosed] = useState(false)
    const [value, setValue] = useState("scorecard")
    const run = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]]
    const score = [{
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1
    },
    {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1
    }]

    const fscore = [{
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    },
    {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }, {
        bname: "paras",
        run: 20,
        ball: 10,
        four: 2,
        six: 1,
        sr: 20
    }]
    const login = useSelector((state) => state.LoginSlice.value);
    const signup = useSelector((state) => state.LoginSlice.signupValue);
    return (
        <div className="SecondmainBody">
            {login && <Login />}
            {signup && <Signup />}
            <div className="Secondleft">
                <div className="left_body">Cricket</div>
                <div
                    className="select_option"
                    style={{
                        backgroundColor: selected === "common" && "#DDDCD6",
                    }}
                    onClick={() => setIsSelected("common")}
                >
                    Common
                </div>

                <div
                    className="select_option"
                    style={{
                        backgroundColor: selected === "allCountries" && "#DDDCD6",
                    }}
                    onClick={() => setIsSelected("allCountries")}
                >
                    All Countries
                </div>

                <div
                    className="select_option"
                    style={{
                        backgroundColor:
                            selected === "allCompetition" && "#DDDCD6",
                    }}
                    onClick={() => setIsSelected("allCompetition")}
                >
                    All Competition
                </div>
            </div>
            <div className="Secondcenter">
                <div className="graphOne">
                    <p className="graphTextfirst">Simulated Match-INN {1}| {10}/{20}</p>
                    <div className="graphdivsecond">
                        <p>ansjdjasdjadsakdsad sakda</p>
                        <p>140/8 : 62/2</p>
                        <p>asdmasdasdnasndjnsajdknasj</p>
                    </div>
                    <div className="graphdivthird">
                        <p>7.00 RR</p>
                        <p>Guyana Amazon Warriors SRL require 10 runs from 15 balls</p>
                        <p>7.54 CRR|3.33 RRR</p>
                    </div>
                    <div className="line"></div>
                    <Graph />
                    {closed && (
                        <><div className="hiddenGraphbox">
                            <div className="imagpitch">
                                <div style={{ background: 'rgba(0,0,0,0.4)' }}>
                                    <div className="runs">
                                        {run.map((item, index) => (

                                            <div className="runbox">
                                                <div className="overdetails">Over {index + 1}</div>
                                                <div className="runsDetails">
                                                    {item.map((item, index) => (
                                                        <div className="valueofrun">{item}</div>
                                                    ))}
                                                </div>

                                            </div>
                                        ))}

                                    </div>

                                    <div className="batsmandetails">
                                        <div>
                                            Batter
                                        </div>
                                        <div className="rb46">
                                            <div>R</div>
                                            <div>B</div>
                                            <div>4s</div>
                                            <div>6s</div>
                                        </div>
                                    </div>
                                    {score.map((item, index) => (
                                        <>
                                            <div className="batsmandetails2">
                                                <div>
                                                    {item.bname}
                                                </div>
                                                <div className="rb46">
                                                    <div>{item.run}</div>
                                                    <div>{item.ball}</div>
                                                    <div>{item.four}</div>
                                                    <div>{item.six}</div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                    <div className="bowlerdetails">
                                        <div className="bowler">
                                            <div className="currbowler">Current Bowler</div>
                                            <div>Current Bowler</div>
                                        </div>
                                        <div className="iningsstat">
                                            <div className="iningsname">INNINGS STAT</div>
                                            <div className="inings">
                                                <p>Fours</p>
                                                <p>20</p>
                                            </div>
                                            <div className="inings">
                                                <p>Sixes</p>
                                                <p>20</p>
                                            </div>
                                            <div className="inings">
                                                <p>Extras</p>
                                                <p>20</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="scorecard">
                                <div className="heading">SCORECARD</div>
                                <div className="teams">
                                    <p className="teamname">Team 1</p>
                                    <p className="teamname">Team 2</p>
                                </div>
                                <div className="batsmandetails" style={{ marginTop: "5px" }}>
                                    <div>
                                        BATTER
                                    </div>
                                    <div className="rb46">
                                        <div>R</div>
                                        <div>B</div>
                                        <div>4S</div>
                                        <div>6S</div>
                                        <div>S/R</div>
                                    </div>
                                </div>
                                {fscore.map((item, index) => (
                                    <div className="batsmandetails2" style={{ fontSize: "12px", borderBottom: "1px solid rgba(255,255,255,.12)" }}>
                                        <div className="nameofbats">
                                            <p className="naming">{item.bname}</p>
                                            <p style={{ fontSize: "8px" }}>NOT OUT</p>
                                        </div>
                                        <div className="rb467">
                                            <div>{item.run}</div>
                                            <div>{item.ball}</div>
                                            <div>{item.four}</div>
                                            <div>{item.six}</div>
                                            <div>{item.sr}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                            <div className="scorecardtostatsbuttons">
                                <div className="scorecardbutton" style={{ borderBottom: value === "scorecard" ? "1px solid yellow" : "" }} onClick={() => setValue("scorecard")}>
                                    {value === "scorecard" ? <>
                                        <img src="/assets/menuyellow.svg" alt="scorecard" />
                                        <p style={{ color: "yellow" }}>Scorecard</p>
                                    </> : <>
                                        <img src="/assets/menuwhite.svg" alt="scorecard" />
                                        <p>Scorecard</p>
                                    </>}
                                </div>
                                <div className="scorecardbutton" style={{ borderBottom: value === "stats" ? "1px solid yellow" : "" }} onClick={() => setValue("stats")}>
                                    {value === "stats" ? <>
                                        <img src="/assets/pollyellow.svg" alt="scorecard" />
                                        <p style={{ color: "yellow" }}>Scorecard</p>
                                    </> : <>
                                        <img src="/assets/pollwhite.svg" alt="scorecard" />
                                        <p>Scorecard</p>
                                    </>}
                                </div>
                            </div>
                        </>)
                    }
                    <div className="downbutton">
                        <img src="/assets/downarrow.svg" alt="downarrow" className="downarrow" style={{
                            transform: !closed ? "rotate(0deg)" : "rotate(180deg)",
                            transition: "transform 0.3s ease", // Smooth rotation animation
                        }} onClick={() => {
                            setClosed(!closed)
                        }} />
                    </div>
                </div>
                <BettingInterface/>
            </div>

            <div className="right">
                <div className="rightbody">Bet Slip</div>
                <OpenBets/>
            </div>
        </div>
    );
};

export default SecondMain;
