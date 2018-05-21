import React from "react";

export default ({skill}) => <span className={"badge  badge-pill badge-" + skill.color}>{skill.intitule}</span>;
