import React from "react";

export default function App(props) {
  console.log(props);
  const {mainComponent, sidebarComponent, content, notifications, header} = props;
  console.log(mainComponent);
  const contentClassName = sidebarComponent? "col-sm-9" : "col-sm-9 center";
  const main = (props) => {
    return (
      props.children
    );
  }
  let test = main(mainComponent);

  if (mainComponent) {
    return <div>{mainComponent}</div>;
  }

  return (
    <div>
      {/* {header}
      <div className="container">
        <div className="row">
          {sidebarComponent ? <div className="col-sm-3">{sidebarComponent}</div> : <div/>}
          <div className={contentClassName}>
            {notifications}
            {content || <p>Nothing to render</p>}
          </div>
        </div>
      </div> */}
      {mainComponent}
      
    </div>
  );
}
