"use client"
import React from 'react';


const generateRandomUsername = () => {
const adjectives = ['Happy', 'Lucky', 'Smart', 'Brave', 'Clever', 'Kind', 'Funny', 'Wise'];
const nouns = ['User', 'Player', 'Gamer', 'Student', 'Saver', 'Trader', 'Investor', 'Learner'];
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
return `${randomAdjective}${randomNoun}`;
};


const generateRandomScore = () => {
return Math.floor(Math.random() * 51) + 50;
};


const generateLeaderboardData = () => {
const leaderboardData = [];
for (let i = 0; i < 100; i++) {
const username = generateRandomUsername();
const score = generateRandomScore();
leaderboardData.push({ username, score });
}


leaderboardData.sort((a, b) => b.score - a.score);


return leaderboardData;
};


const Leaderboard: React.FC = () => {
const leaderboardData = generateLeaderboardData();


return (
<div className="leaderboard-container">
<div className="leaderboard-header">
<img src="/assets/images/crown.png" alt="Crown" className="crown-image left" />
<h1 className="leaderboard-title">Leaderboard</h1>
<img src="/assets/images/crown.png" alt="Crown" className="crown-image right" />
</div>
<table className="leaderboard-table">
<thead>
<tr>
<th>Rank</th>
<th>Username</th>
<th>Score</th>
</tr>
</thead>
<tbody>
{leaderboardData.map((user, index) => (
<tr key={user.username}>
<td className="rank-column">{index + 1}</td>
<td className="username-column">{user.username}</td>
<td className="score-column">{user.score}</td>
</tr>
))}
</tbody>
</table>


<style jsx>{`
.leaderboard-container {
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: #E5E5E5;
}


.leaderboard-header {
display: flex;
align-items: center;
margin-bottom: 20px;
}


.crown-image {
width: 80px;
height: auto;
}


.left {
margin-right: 10px;
}


.right {
margin-left: 10px;
}


.leaderboard-title {
font-size: 36px;
font-weight: bold;
margin: 0;
}


.leaderboard-table {
width: 100%;
border-collapse: collapse;
border-radius: 5px;
overflow: hidden;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
background-color: #fff;
}


.leaderboard-table th,
.leaderboard-table td {
padding: 12px;
text-align: left;
}


.leaderboard-table th {
background-color: #24305E;
color: white;
}


.leaderboard-table td {
background-color: #F2F2F2;
}


.rank-column {
width: 10%;
}


.username-column {
width: 60%;
}


.score-column {
width: 30%;
}
`}</style>
</div>
);
};


export default Leaderboard;