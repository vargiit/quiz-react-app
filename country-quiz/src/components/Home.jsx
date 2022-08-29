import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <nav>
      <NavLink className="start" to="/quiz-1">
        Start-quiz
      </NavLink>
    </nav>
  );
};
