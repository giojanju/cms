import * as env from '../config/env';
import axios from '../axios';

export const asset = (img) => {
	return `${env.base_PATH}/img/${img}`;
}

export const currentLocale = () => {
	axios.post('locale').then(re => {
		return re.data.locale
	})
}