import React, { Component } from 'react'
import { connect } from 'react-redux';

function RComments(body) {
    if (!body.testStore.comments[0]) {
        return  []
    }
  else if(body.testStore.comments[0].error) {
      return (
          <div className="notcomments">Комментарии закрыты!</div>
      )
  }
    else if (body.testStore.comments[0].items)  {
        return (
            <div>
                {body.testStore.comments[0].items.map((items) =>
                    <div key={items.snippet.topLevelComment.etag}   
                    className="comments-item-list text-comments card bg-light mb-3">
                        <div>Автор {items.snippet.topLevelComment.snippet.authorDisplayName}{` `}
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

    render() {
        return (
            <div className="commentsAll">
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
