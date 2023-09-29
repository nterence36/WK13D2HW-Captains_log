const React = require('react')

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>New Form</h1>

                <form action='/logs' method='POST'>
                    Title: <input type='text'/>
                    <br/>
                    Entry: <input type='textarea'/>
                    <br/>
                    shipIsBroken: <input type='checkbox'/>
                    <br/>
                    <input type="submit" name="" />
                </form>
            </div>
        )
    }
}module.exports = New