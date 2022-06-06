import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ReservesCardComponent from "./ReservesCardComponent";

describe("Given the Check component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one heading element", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ReservesCardComponent />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getByRole("heading");

      expect(result).toBeInTheDocument();
    });
  });
});