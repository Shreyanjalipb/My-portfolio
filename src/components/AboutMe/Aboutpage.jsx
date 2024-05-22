import React from 'react';
import glassesimoji from "../../img/glassesimoji.png";

function App() {
  return (
    <div>
      {/* Header Section */}
      <header style={{ fontWeight: "500", backgroundColor: 'Black', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1>Welcome to My Profile</h1>
      </header>
      
      {/* Myself Section */}
      <section style={{ margin: '20px' }}>
        <h2 style={{fontWeight: "bold", color: "black"}}>About Myself</h2>
        <p>
          Hello! I'm a passionate individual who loves to create and innovate. With a keen interest in
          technology and design, I've embarked on numerous projects that have allowed me to refine my
          skills and expand my knowledge. Whether it's developing software, designing user interfaces, or
          exploring new tech trends, I'm always eager to take on new challenges and push the boundaries of
          what's possible. Outside of my professional interests, I enjoy hiking, photography, and reading
          – activities that inspire me and provide a fresh perspective.
        </p>
      </section>
    </div>
  );
}

export default App;
