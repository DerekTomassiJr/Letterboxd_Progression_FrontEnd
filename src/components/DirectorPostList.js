import React, { Component } from 'react'
import axios from 'axios'

class DirectorPostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/directorPageAPI')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
    return (
        <div>
            DirectorPostList
        </div>
    )
  }
}

export default DirectorPostList