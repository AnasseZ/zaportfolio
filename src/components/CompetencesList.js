import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Competence from "./Competence";
import competences from "../constantes/competences";
import Title from "./Title";

class CompetencesList extends Component {

          /* <section>
        <div className="container text-center">
          <Title title="Compétences" />
          <div className="row">
            {competences.map(competence => {
              return (
                <Competence
                  competence={competence}
                />
              );
            })}
          </div>
        </div>
        </section> */
        
  render() {
    return (
      <ScrollableAnchor id={"competences"}>
        <div className="skill5">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<div className="skill5-counter">
								<p className="counter-count">100</p>
								<p className="counter-bottom">HTML5</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<div className="skill5-counter">
								<p className="counter-count">80</p>
								<p className="counter-bottom">CSS3</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<div className="skill5-counter">
								<p className="counter-count">70</p>
								<p className="counter-bottom">JS</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
							<div className="skill5-counter">
								<p className="counter-count">52</p>
								<p className="counter-bottom">PHP</p>
							</div>
						</div>
					</div>
				</div>
			</div>
      </ScrollableAnchor>
    );
  }
}

export default CompetencesList;
