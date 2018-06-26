import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

class Cinemas extends PureComponent {

    render() {

        return (
            <Fragment>
                <h2>Cinemas in town:</h2>
                {this.props.cinemas.map(cinema => {
                    return (
                        <div key={cinema.name} style={{
                            margin: '20px',
                            padding: '5px 10px',
                            backgroundColor: 'lightblue'
                        }}
                             onClick={() => {
                                 this.props.history.push(`/program/${cinema.name}`)
                             }}
                        >
                            <p>Name: {cinema.name}</p>
                            <p>Working hours: {cinema.workingHours}</p>
                            <p>Address: {cinema.address}</p>
                        </div>
                    )
                })}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        cinemas: state.cinemas
    };
};

export default connect(mapStateToProps, null)(Cinemas);
