import React, { Component } from 'react'
import { connect } from 'react-redux';

function RComments(body) {

    console.log(body.testStore)
    if (!body.testStore.comments[0] || body.testStore.comments[0].items === undefined) {
        return <div>...загрузка</div>;
    }
    else {
        return (
            <div>
                {body.testStore.comments[0].items.map((items) =>
                    <div className="comments-item-list text-comments card bg-light mb-3">
                    <div>Автор {items.snippet.topLevelComment.snippet.authorDisplayName} 
                    комментарий {items.snippet.topLevelComment.snippet.textOriginal}
                    </div></div>
                )}
            </div>
        );
    }
}



//<div className="loader"></div>32434
//<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
class RenderPlayer extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div>
                <RComments testStore={this.props.testStore} />
            </div>
        )
    }
}

 

export default connect(
    state => ({
        testStore: state
    })

)(RenderPlayer)
 