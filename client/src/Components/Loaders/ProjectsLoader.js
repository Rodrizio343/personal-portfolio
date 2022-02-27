import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Col from "react-bootstrap/Col";
const items = Array(6).fill(null);

function ProjectLoader() {
  return (
    <div
      className="bg-white shadow-sm mb-3"
      style={{
        borderRadius: "10px",
      }}
    >
      <SkeletonTheme color="#D2D2D2">
        <div className="w-100 skeleton-loader-project">
          <Skeleton height="140px" width="100%" />
          {/* <Skeleton
              height="100%"
              containerClassName="avatar-skeleton"
          /> */}
        </div>
        <div className="p-3">
          <Skeleton height="10px" width="140px" />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
          {/* <Skeleton count={3} /> */}
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default function ProjectsLoader() {
  return (
    <div className="row">
      {items.map((_, i) => (
        <Col md={6} lg={4} className="mb-3 px-2" key={i}>
          <ProjectLoader />
        </Col>
      ))}
    </div>
  );
}
