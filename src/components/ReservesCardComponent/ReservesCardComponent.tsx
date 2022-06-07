import { IreservesSimple } from "../../redux/types/reservesTypes";
import styled from "styled-components";

interface Props {
  reserves: IreservesSimple;
}

const ReserverStyled = styled.div`
  color: #a93528;

  .info {
    border: 5px;
    margin: 20px;
    background-color: white;
    font-size: 20px;
    main {
      font-size: 40px;
      margin-bottom: 2px;
      margin-left: 10px;
    }

    p {
      margin-left: 10px;
      margin-bottom: 0px;
      margin-top: 0px;
    }

    button {
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;

      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
    }

    .delete {
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }
`;

const ReservesCardComponent = ({
  reserves: { name, time, numberPersons },
}: Props): JSX.Element => {
  return (
    <>
      <ReserverStyled>
        <section className="info">
          <main>25th</main>
          <p> {name}</p>
          <p>time: {time} hrs</p>
          <p>NUMBERS PERSONS: {numberPersons}PAX</p>
          <section className="delete">
            <button>
              <img src="image/delete.png" alt="delete icon" />
            </button>
          </section>
        </section>
      </ReserverStyled>
    </>
  );
};

export default ReservesCardComponent;
