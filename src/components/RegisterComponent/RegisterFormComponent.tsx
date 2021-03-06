import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { registerThunk } from "../../redux/thunks/userThunks";
import StiledComponentFormRegister from "./RegisterFormComponentStyle";
import { NavLink, useNavigate } from "react-router-dom";

interface FormData {
  restaurantName: string;
  username: string;
  CIF: string;
  password: string;
}

const RegisterFormComponent = (): JSX.Element => {
  const clearFiles = {
    restaurantName: "",
    username: "",
    CIF: "",
    password: "",
  };
  const navigate = useNavigate();

  const [formData, setformData] = useState<FormData>(clearFiles);
  const dispatch = useAppDispatch();

  const handleImputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setformData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setformData(clearFiles);
    await navigate("/login");
  };

  return (
    <>
      <StiledComponentFormRegister>
        <form
          className="login-form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="login-form__wrapper">
            <label className="login-form__label" htmlFor="RestaurantName">
              Restaurant Name
              <input
                className="login-form__input"
                type="text"
                id="restaurantName"
                placeholder="Name"
                value={formData.restaurantName}
                onChange={handleImputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="username">
              Username
              <input
                className="login-form__input"
                type="text"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleImputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="password">
              Password
              <input
                className="login-form__input"
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleImputChange}
              />
            </label>
            <button className="login-form__button" type="submit">
              Register
            </button>
            <p>Do you have an account?</p>
            <NavLink to="/login" className="">
              Click here to log in
            </NavLink>
          </div>
        </form>
      </StiledComponentFormRegister>
    </>
  );
};

export default RegisterFormComponent;
