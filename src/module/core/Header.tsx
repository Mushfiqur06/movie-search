import React from 'react';
import Logo from '../../assets/images/logo.png';

export default function Header() {
	return (
		<>
			<div className="header">
				<div className="container">
					<div className="header_row">
						<div className="header_row__left">
							<div className="logo">
								<img src={Logo} />
							</div>
							<ul className="menu">
								<li>Home</li>
								<li>Movie</li>
								<li>Tv Shows</li>
								<li>New Released</li>
							</ul>
						</div>
						<div className="header_row__right"></div>
					</div>
				</div>
			</div>
		</>
	);
}
