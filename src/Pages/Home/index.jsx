import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { StyledDiv } from "./style";

export const Home = ({ user }) => {
  const history = useHistory();
  const params = useParams();

  const userName = user.find((userId) => userId.id === params.id);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="App"
    >
      <StyledDiv>
        <h1>Bem-vind@, {userName.name}</h1>
        <img
          src="https://pa1.narvii.com/6311/32dc07110d8d6ac30c52853ec8cc5eb253e02357_hq.gif"
          alt="Inside lion's hair"
        />
        <button onClick={handleClick}>Voltar</button>
      </StyledDiv>
    </motion.div>
  );
};
