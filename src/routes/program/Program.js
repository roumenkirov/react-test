import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

class Program extends PureComponent {


    render() {
        const cinemaName = this.props.match.params.name;

        const cinema = this.props.cinemas.filter(c => {
            return c.name === cinemaName;
        })[0];

        let template = null;
        if (cinema) {
            template = (
                <div>
                    <p>{cinema.name}</p>
                    {
                        cinema.program.map(movie => {
                            return (
                                <div key={movie.title}
                                style={{
                                    margin: '10px',
                                    padding: '10px'
                                }}>
                                    <p>{movie.title}</p>
                                    <p>Starts: {movie.starts}</p>
                                    <p>Available places: {movie.freePlaces}</p>
                                </div>
                            );
                        })
                    }

                </div>
            )
        }

        return (
            <Fragment>
                <div>Program</div>
                {template}
            </Fragment>

        )


    }
}

const mapStateToProps = state => {
    return {
        cinemas: state.cinemas
    };
};

export default connect(mapStateToProps, null)(Program);