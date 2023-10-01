const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;

    console.log(log);

    return (
     <div>
        <h1> Show Page </h1>
        Title: {log.title }.{" "} <br/>
        Entry: {log.entry}.{" "}
        <br/>
        {log.shipIsBroken
          ? "Ship is Broken"
          : "Ship is not broken"}
      <br/>
      <a href='/logs'><h1>Back</h1></a>
      </div>
      
    );
  }
}
module.exports = Show;