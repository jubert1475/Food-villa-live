import { useCallback, useState } from "react";

const Section = ({ title, desc, visible,setVisible, currentSection }) => {
  
  return (
    <div className="about_section">
      <h3>{title}</h3>
      {visible ? (
        <>
        <button onClick={() => setVisible("")}>Hide</button>
        <p>{desc}</p>
        </>
        
      ) : (
        <button onClick={() => setVisible(currentSection)}>show</button>
      )}

      
    </div>
  );
};

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");

  

  return (
    <>
      <h1>Details</h1>
      <Section
        title={"About Food Villa"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        currentSection="about"
        visible={visibleSection==="about"}
        // setVisibleShow={()=>{
        //   setVisibleSection("about")
        // }}
        setVisible={(abc)=>{
          setVisibleSection(abc)
        }}
      />
      <Section
        title={"Food-Villa Core Team"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        
        currentSection="Team"
        visible={visibleSection==="Team"}
        setVisibleShow={()=>{
          setVisibleSection("Team")
        }}
        setVisible={(abc)=>{
          setVisibleSection(abc)
        }}
      />

      <Section
        title={"Customer Services"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        currentSection="Services"
        visible={visibleSection==="Services"}
        setVisibleShow={()=>{
          setVisibleSection("Services")
        }}
        setVisible={(abc)=>{
          setVisibleSection(abc)
        }}
      />

      <Section
        title={"FAQ"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        currentSection="FAQ"
        visible={visibleSection==="FAQ"}
        setVisibleShow={()=>{
          setVisibleSection("FAQ")
        }}
        setVisible={(abc)=>{
          setVisibleSection(abc)
        }}
      />
    </>
  );
};

export default About;
