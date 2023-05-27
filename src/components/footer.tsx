import { name, parentCompany } from '@typescript/constants';
import Icon from './icon';

const year = new Date().getFullYear();
export default () => (
	<footer className="bg-theme-orange dark:bg-gray-900 portrait:hidden text-center">
		<div className="">
			<div className="">
				<div className="">
					<div className="text-white p-4 font-semibold text-4xl text-center">
						<Icon name="rocket-takeoff-fill" /> {name.toLowerCase()}
					</div>
				</div>
				<hr />
				<p className="text-white p-4">Copyright &copy; 2023-{year}, {parentCompany}, and contributors. All Rights Reserved</p>
			</div>
		</div>
	</footer>
);
