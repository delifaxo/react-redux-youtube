import React, { Component } from 'react'
import { connect } from 'react-redux';


//<div className="loader"></div>32434
//<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
class RenderPlayer extends Component {

    render() {
        if (!this.props.testStore.comments[0]) {
            return []
        }
        else if (this.props.testStore.comments[0].error) {
            return (
                <div className="notcomments">Комментарии закрыты!</div>
            )
        }
        else if (this.props.testStore.comments[0].items.length === 0) {
            return (
                <div className="notcomments">Коментарии отсутствуют =(</div>
            )
        }
        else if (this.props.testStore.comments[0].items) {
            return (
                <div>
                    {this.props.testStore.comments.map((item, i) => {
                        return (
                            this.props.testStore.comments[i].items.map((items) =>

                                <div key={items.snippet.topLevelComment.etag}
                                    className="comments-item-list text-comments card bg-light mb-3">
                                    <div>Автор {items.snippet.topLevelComment.snippet.authorDisplayName}{` `}
                                        комментарий {items.snippet.topLevelComment.snippet.textOriginal}
                                    </div></div>
                            )
                        )
                    }
                    )}
                    <div className="comments-item-list text-comments card bg-light mb-3">
                        <button className="btn" onClick={this.props.loadingComments}>Load more comments</button>
                    </div>
                </div>
            );
        }
    }
}
export default connect(
    state => ({
        testStore: state
    })

)(RenderPlayer)