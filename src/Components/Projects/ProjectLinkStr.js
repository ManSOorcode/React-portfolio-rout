import React from "react";

const ProjectLinkStr = (props) => {
  return (
    <ul>
      {props.links.map((link) => (
        <li>{link}</li>
      ))}
    </ul>
  ); // <ul>
  //   <li>
  //     <a>{props.link}</a>
  //   </li>
  //   <li>
  //     <a></a>
  //   </li>
  //   {/* <li>
  //         <a></a>
  //     </li>
  //     <li>
  //         <a></a>
  //     </li> */}
  // </ul>
};

export default ProjectLinkStr;
