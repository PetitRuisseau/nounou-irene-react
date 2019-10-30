import React, { Component } from 'react'
import base from '../../api/api'

class Blog extends Component {
    state = {
        articles: {}
    }

    componentDidMount() {
        base.syncState('/articles', {
            context: this,
            state: 'articles'
        })
    }

    render () {
        return (
            <div>
                blog
            </div>
        )
    }
}

export default Blog