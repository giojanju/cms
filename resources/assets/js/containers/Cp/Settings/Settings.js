import React, { Component } from 'react';
import axios from '../../../axios';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import MultiLangTabs from '../../../hoc/MultiLangTabs/MultiLangTabs';
import { renderlangTabs } from '../Utility';

class Settings extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MultiLangTabs>
				{ renderlangTabs(locale =>
                    <div>
              			<Input
							Type="textarea"
							// val={this.state.description}
							plc="Description"
							label="Post Description"
							name={`description.${locale}`}
							// change={this.handleFiledChange}
							// errors={this.state.errors}
						/>
                    </div>
                )}

			</MultiLangTabs>
		);
	}
}

export default Settings;