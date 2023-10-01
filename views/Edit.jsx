const { Long } = require('mongodb');
const React = require('react');

class Edit extends React.Component{
    render(){
        const { log } = this.props;
        return (
            <div>
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
            Title: <input type="text" name="title" defaultValue={log.title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={Long.entry}/><br/>
          shipIsBroken:
              { log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
            </form>
            </div>
        )
    }
}
module.exports= Edit;