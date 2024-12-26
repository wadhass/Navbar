import PropTypes from "prop-types";

const Card = ({ SkillName,
  SkillNameColor,
  SkillLevel,
  SkillLevelBgColor,
  SkillLevelTextColor,
  SkillLevelBorderColor,
  SkillIcon,
}) => {
  return (
    <div
      className={`p-4 border ${SkillLevelBorderColor} rounded-lg shadow-md flex items-center space-x-4`}
    >
     
      <div className="text-2xl">{SkillIcon}</div>
    
      <div>
        <h2 className={`text-lg font-bold ${SkillNameColor}`}>{SkillName}</h2>
        <p
          className={`mt-2 px-2 py-1 text-sm ${SkillLevelTextColor} ${SkillLevelBgColor} rounded-full`}
        >
          {SkillLevel}
        </p>
      </div>
    </div>
  );
};
export default Card;

Card.propTypes = {
  SkillName: PropTypes.string,
  SkillNameColor: PropTypes.string,
  SkillLevel: PropTypes.string,
  SkillLevelBgColor: PropTypes.string,
  SkillLevelTextColor: PropTypes.string,
  SkillLevelBorderColor: PropTypes.string,
  SkillIcon: PropTypes.element, 
};
