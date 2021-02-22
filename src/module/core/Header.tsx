import React from 'react';
import Logo from '../../assets/images/logo.png';
import {
	Searchbar,
	SearchButtonClear,
	SearchButtonSearch,
	SearchInput,
} from '../common/Searchbar';
import { isStringAndLengthGtZero } from '../common/validation';

export default function Header() {
	const [query, setQuery] = React.useState('');
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
							<Searchbar
								renderInput={() => {
									return (
										<SearchInput
											onKeyPress={(e: any) => {
												if (e.key === 'Enter') {
													console.log('some');
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
												console.log('Hello');
												setQuery('');
											}}
										/>
									) : (
										<SearchButtonSearch />
									);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
