const React = require("react");

class Index extends React.Component {
  render() {
    // what is define in {} should match with what is specified in the index route.
    const { logs } = this.props;
    return (
     
     <div>
      <nav>
        <a href="/logs/new">Create a New Log</a>
      </nav>
      <ul>
      {logs.map((log,i) => {
                  return <li key={i}>
                      <a href={`/logs/${log.id}`}>{log.title}</a>
                      {' '}is {log.entry} <br/>
                      { log.shipIsBroken? <span>Ship is not broken</span>: <span>Ship is broken</span>}
                      
                      <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                      {/* Edit link */}
                      <a href={`/logs/${log._id}/edit`}>Edit This Log</a>
                  </li>
              })}
        </ul>
        </div>
     
    );
  }
}
module.exports = Index;
