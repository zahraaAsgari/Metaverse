import styles from "../styles";

const StartSteps = ({number,text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
  <div className={`${styles.flexCenter} flex w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] `}>
    <p className="text-white font-bold text-[16px]">0{number}</p>
  </div>
  <p className="text-secondary-white flex-1 leading-[32px] ml-[16px] max-w-[320px]">{text}</p>
  </div>
);

export default StartSteps;
