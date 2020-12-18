import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../CONST";

const TabProject = ({ category }) => {
  return (
    <div className="themesflat-project style-2 isotope-project has-margin mg15 data-effect clearfix row">
      {category.projects.map((data) => (
        <div className="col-md-4 my-3 building construction" key={data.id}>
          <div className="inner">
            <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
              <img
                src={`${API}/projects/${category.id}/${data.id}/1.jpg`}
                alt="altimage"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="elm-link">
                <Link
                  className="icon-1 icon-search"
                  to={`/project/${category.id}/${data.id}`}
                  onClick={() => {
                    window.location.href = `/project/${category.id}/${data.id}`;
                  }}
                />
                {/* <Link to="#" className="icon-1" /> */}
              </div>
              <div className="overlay-effect bg-color-3" />
            </div>
            <div className="text-wrap">
              <h5 className="heading text-truncate" title={data.name}>
                <Link
                  to={`/project/${category.id}/${data.id}`}
                  onClick={() => {
                    window.location.href = `/project/${category.id}/${data.id}`;
                  }}
                >
                  <a>{data.name}</a>
                </Link>
              </h5>
              <div className="elm-meta">
                <span>{data.location}</span>
                {/* <span>
                  <Link to="#">{data.name01}</Link>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// class TabProject extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       projects: [
//         {
//           id: 1,
//           classnames: "project-item green villa",
//           srcimg: "/assets/img/project/project-1-370x245.jpg",
//           heading: "LAKE MEADOWS APARTMENTS",
//           name01: "Green House",
//           name02: "Villa",
//         },
//         {
//           id: 2,
//           classnames: "project-item architecture building construction",
//           srcimg: "/assets/img/project/project-2-370x245.jpg",
//           heading: "CAVAL RIDGE MINE PROJECT",
//           name01: "Architecture",
//           name02: "",
//         },
//         {
//           id: 3,
//           classnames: "project-item villa architecture building construction",
//           srcimg: "/assets/img/project/project-3-370x245.jpg",
//           heading: "GRAM HOTEL MAMZANA, MEWYORK",
//           name01: "Green House",
//           name02: "Villa",
//         },
//         {
//           id: 4,
//           classnames: "project-item green villa",
//           srcimg: "/assets/img/project/project-4-370x245.jpg",
//           heading: "LAKE MEADOWS APARTMENTS",
//           name01: "Green House",
//           name02: "Villa",
//         },
//         {
//           id: 5,
//           classnames: "project-item architecture building construction",
//           srcimg: "/assets/img/project/project-5-370x245.jpg",
//           heading: "CAVAL RIDGE MINE PROJECT",
//           name01: "Architecture",
//           name02: "",
//         },
//         {
//           id: 6,
//           classnames: "project-item green",
//           srcimg: "/assets/img/project/project-6-370x245.jpg",
//           heading: "GRAM HOTEL MAMZANA, MEWYORK",
//           name01: "Green House",
//           name02: "Villa",
//         },
//       ],
//     };
//   }

//   render() {

//   }
// }

export default TabProject;
