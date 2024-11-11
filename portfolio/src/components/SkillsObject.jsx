const SkillsObject = ({ image }) => {
    return ( 
      <div className="skills__individual">
        <img className="skills__individual_picture" src={`./img/skills/${image}`} alt="" />
      </div>
     );
}
 
export default SkillsObject;