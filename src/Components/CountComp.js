import React from "react";
import CountUp from "react-countup";

function CountComp() {
  return (
    <>
      <div
        style={{
          margin: "0% 0% 0% 0%",
          backgroundColor: "#A9A9A9",
          width: "100vw",
          position: "fixed",
          // height: "40vh%",
        }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h1>
                  <CountUp start={0} end={2345} delay={0} duration={3}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <h5 style={{ fontSize: "1rem" }}>Total stabilates</h5>
                      </div>
                    )}
                  </CountUp>
                </h1>
              </div>
            </div>
            <div className="col">
              <div>
                <h1>
                  <CountUp start={0} end={1026} delay={0} duration={3}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <h5 style={{ fontSize: "1rem" }}>Primary isolates</h5>
                      </div>
                    )}
                  </CountUp>
                </h1>
              </div>
            </div>
            <div className="col">
              <div>
                <h1>
                  <CountUp start={0} end={702} delay={0} duration={3}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <h5 style={{ fontSize: "1rem" }}>
                          Characterized isolates
                        </h5>
                      </div>
                    )}
                  </CountUp>
                </h1>
              </div>
            </div>
            <div className="col">
              <div>
                <h1>
                  <CountUp start={0} end={617} delay={0} duration={3}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <h5 style={{ fontSize: "1rem" }}>Wild types</h5>
                      </div>
                    )}
                  </CountUp>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountComp;
