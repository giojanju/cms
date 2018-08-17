import * as env from '../config/env';

export const asset = (img) => {
	return `${env.base_PATH}/img/${img}`;
}