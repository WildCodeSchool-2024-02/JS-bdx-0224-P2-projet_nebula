import "../styles/Arrow.scss";

function Arrow() {
  return (
    <button
      type="button"
      className="buttonTop"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img
        className="arrow"
        src="/src/assets/images/icons8-fusée-100 (1).png"
        alt="Arrow"
      />
      <p className="returnText">return top</p>
    </button>
  );
}
export default Arrow;
