import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../actions';

function Movies(props: any) {
	React.useEffect(() => {
		props.fetchMovies();
	}, []);
	return (
		<>
			<div className="movies">
				<div className="container">
					<div className="movies_row">
						{props.movies[0] &&
							props.movies[0].Search.map((item: any, index: number) => {
								return (
									<div key={index} className="movies_row">
										<img src={item.Poster} />
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state: any) => {
	return {
		movies: state.movies,
	};
};

export default connect(mapStateToProps, { fetchMovies })(Movies);
