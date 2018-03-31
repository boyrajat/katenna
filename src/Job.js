//Comment.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Job extends Component {
 rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 render() {
 return (
 <div style={ style.job }>
 <h3>{this.props.task}</h3>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 </div>
 )
 }
}
export default Job;