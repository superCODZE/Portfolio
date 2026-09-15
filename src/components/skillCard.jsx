




function SkillCard({Title , urls}) {
    return (
    <>
    <div className="skills-part">
       
        <h2>{Title}</h2>
        <div className="skills-icons">
         {urls.map((url, index) => (
           
              <img key={index} src={url} alt="" />
            )
          )}
            
        </div>
        

    </div>
    </>
    );
}

export default SkillCard;