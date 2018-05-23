import React from "react";
import ScrollableAnchor from "react-scrollable-anchor/lib/ScrollableAnchor";

export default () => (
  <ScrollableAnchor id={"footer"}>
    <footer>
      <hr className="hr-footer" />
      <div className="text-center center-block">
        <a href="https://www.linkedin.com/in/anasse-zougarh-67885110b/">
          <i id="social-lkd" className="fa fa-linkedin-square fa-3x social" />
        </a>
        <a href="https://github.com/AnasseZ">
          <i id="social-gp" className="fa fa-github-square fa-3x social" />
        </a>
        <a href="mailto:zougarh.anasse@gmail.com">
          <i id="social-em" className="fa fa-envelope-square fa-3x social" />
        </a>
        <br />
        <p className="txt-railway">
          © Copyright Anasse Zougarh {new Date().getFullYear()}, All Rights
          Reserved.
        </p>
      </div>
    </footer>
  </ScrollableAnchor>
);
