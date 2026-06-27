import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { createUser, loginUser, logOutUser } from "redux/users/usersOperations";
export const AuthForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    console.log("registration", email, password);

    dispatch(loginUser({ email, password }));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter email here..." />
      <input
        type="password"
        name="password"
        placeholder="Enter password text..."
      />
      {/* {isAuth &&}  */}
      {/* якщо так то дорендуємо пачку полів яку потрібно */}
      <Button type="submit">Register</Button>
      <button onClick={() => dispatch(logOutUser())}>Log out</button>
    </form>
  );
};
