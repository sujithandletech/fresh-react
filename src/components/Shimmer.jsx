import './Shimmer.css';
const Shimmer = () => {
  return (
    <div className="shimmer_container">
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="shimmer_card" key={index}>
          <div className="shimmer_image"></div>

          <div className="shimmer_content">
            <div className="shimmer_line shimmer_title"></div>
            <div className="shimmer_line shimmer_cuisine"></div>
            <div className="shimmer_line shimmer_rating"></div>
            <div className="shimmer_line shimmer_delivery"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
