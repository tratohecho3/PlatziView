import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import './media.css'
class Media extends PureComponent {

    constructor(props) {
        super(props)
    }
    state = {
        author: 'Juan'
    }
    handleClick = (event) => {
        this.setState({
            author: 'Cesar'
        })
    }
    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img src={this.props.cover} alt="" width={260} height={160}></img>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}
export default Media;