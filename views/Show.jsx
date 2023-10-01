const React = require("react");
// const DefaultLayout = require('../layout/default');

class Show extends React.Component {
  render() {
    const { log } = this.props;

    console.log(log);

    return (
     // <DefaultLayout title={"Show Page"}>
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
      // </DefaultLayout>
      
    );
  }
}
module.exports = Show;