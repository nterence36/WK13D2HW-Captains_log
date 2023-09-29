const React = require("react");
const DefaultLayout = require('../layouts/default');

class Show extends React.Component {
  render() {
    const log = this.props.log;

    console.log(log);

    return (
      <DefaultLayout title={"Show Page"}>
        <h1> Show Page </h1>
        The {log.title }.{" "} is {log.entry}.{" "}
        
        {log.shipIsBroken
          ? "Ship is Broken"
          : "Ship is not broken"}
      <br/>
      <a href='/logs'>Home</a>
      </DefaultLayout>
    );
  }
}
module.exports = Show;