import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { userInLoggedIn } from '../../utils/authentication';
import {
	Searchbar,
	SearchButtonClear,
	SearchButtonSearch,
	SearchInput,
} from '../common/Searchbar';
import { isStringAndLengthGtZero } from '../common/validation';

export default function Header() {
	const history = useHistory();
	const [query, setQuery] = React.useState('');

	const handleSearch = (searchQuery: string) => {
		history.push({
			search: `?search=${searchQuery}`,
		});
	};
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
						<div className="header_row__right">
							<div>
								<Searchbar
									renderInput={() => {
										return (
											<SearchInput
												onKeyPress={(e: any) => {
													if (e.key === 'Enter') {
														handleSearch(e.target.value);
													}
												}}
												type="text"
												placeholder="Search ..."
												value={query}
												onChange={(e: any) => {
													setQuery(e.target.value);
												}}
											/>
										);
									}}
									renderButton={() => {
										return isStringAndLengthGtZero(query) ? (
											<SearchButtonClear
												onClick={() => {
													setQuery('');
												}}
											/>
										) : (
											<SearchButtonSearch />
										);
									}}
								/>
							</div>
							<div className="login_area">
								{userInLoggedIn() ? (
									<div>
										<div>Niloy</div>
									</div>
								) : (
									<div
										className="popup_login"
										onClick={() => history.push('/auth/login')}
									>
										Login
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
