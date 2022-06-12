import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

const ReserveDetail = (): JSX.Element => {
  const { oneReserve } = useAppSelector((state) => state.reserve);
  const navigate = useNavigate();

  const editReserve = () => {
    navigate(`/edit/${oneReserve._id}`);
  };
  const urlImage =
    "https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png";

  return (
    <>
      <img src={oneReserve.image ? urlImage : ""} alt="person to reserve" />
      <span>{oneReserve.date}</span>
      <section className="info">
        <h2>{oneReserve.name}</h2>
        <span>Times checked:</span>
        <section className="times">
          <span>{oneReserve.hour}</span>
        </section>
        <span>Description:</span>
        <p> {oneReserve.DNI} </p>
      </section>
      <button onClick={editReserve}>Edit</button>
    </>
  );
};

export default ReserveDetail;