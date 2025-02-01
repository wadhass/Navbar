import PropTypes from "prop-types";

const Card = ({
  SkillName,
  SkillNameColor,
  SkillLevel,
  SkillLevelBgColor,
  SkillLevelTextColor,
  SkillLevelBorderColor,
  SkillIcon,
}) => {
  return (
    <div
      className={`p-4 border ${SkillLevelBorderColor} rounded-lg w-full sm:w-48 h-auto sm:shadow-md 
      flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4`}
    >
      <div className="text-3xl sm:text-2xl">{SkillIcon}</div>
      <div className="text-center sm:text-left">
        <h2 className={`text-base sm:text-lg font-bold ${SkillNameColor}`}>
          {SkillName}
        </h2>
        <p
          className={`mt-2 px-3 py-1 text-xs sm:text-sm ${SkillLevelTextColor} ${SkillLevelBgColor} rounded-full`}
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
