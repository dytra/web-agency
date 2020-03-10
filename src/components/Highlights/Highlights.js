import React from "react";
import "./highlights.scss";
const Highlights = ({ scrollRef }) => {
  const mHighlights = [
    {
      title: "Consult",
      icon: "far fa-comments",
      content:
        "Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress."
    },
    {
      title: "Design",
      icon: "fas fa-paint-brush",
      content:
        "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable."
    },
    {
      title: "Develop",
      icon: "fas fa-cubes",
      content:
        " Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
    },
    {
      title: "Marketing",
      icon: "fas fa-bullhorn",
      content:
        "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."
    },
    {
      title: "Manage",
      icon: "fas fa-table",
      content:
        "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."
    },
    {
      title: "Evolve",
      icon: "fas fa-chart-line",
      content:
        "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer."
    }
  ];
  return (
    <section id="highlights" ref={scrollRef}>
      <div class="container">
        <div id="highlights-intro">
          <h1>How Can I Help You?</h1>
          <p>
            Our work then targeted, best practices outcomes social innovation
            synergy. Venture philanthropy, revolutionary inclusive policymaker
            relief. User-centered program areas scale.
          </p>
        </div>
        <div id="highlights-list">
          {mHighlights.map((item, index) => (
            <div className="highlight-item" key={index}>
              <div className="highlight-head">
                <span>{item.title}</span>
                <span className="icon">
                  <i className={item.icon}></i>
                </span>
              </div>
              <div className="highlight-body">{item.content}</div>
            </div>
          ))}
        </div>
        {/* highlights-list */}
      </div>
    </section>
  );
};

export default Highlights;
