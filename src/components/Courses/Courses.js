import workInProgress from "./work_in_progress.png";

export default function Courses() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center" data-aos="fade-down">
        <img
          src={workInProgress}
          alt="course in progress"
          className="work_in_progress"
          loading="lazy"
          style={{ scale: "0.3" }}
        />
      </div>
    </div>
  );
}
