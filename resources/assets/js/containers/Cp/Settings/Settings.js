import React, { Component } from 'react';
import axios from '../../../axios';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import MultiLangTabs from '../../../hoc/MultiLangTabs/MultiLangTabs';
import { renderlangTabs } from '../Utility';

class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ka: {title: '', meta_title: '', description: ''},
			en: {title: '', meta_title: '', description: ''},
			errors: [],
		};

		this.handleFiledChange = this.handleFiledChange.bind(this);
	}

	handleFiledChange(event) {
		this.setState({
			en: { ...this.state.en, title: event.target.value }
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		const { input } = this.state;

		axios.post('settings/create', input).then(re => {
			console.log(re.data);
		})
		.catch(er => {
			console.log(er)
		})
	}

	render() {
		const { input } = this.state;

		return (
			<MultiLangTabs>
				{ renderlangTabs(locale =>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
              			<Input
							Type="text"
							val={this.state[locale].title}
							plc="Site title"
							label="Your site title"
							name={`title.${locale}`}
							change={this.handleFiledChange}
							errors={this.state.errors}
						/>
						<Input
							Type="text"
							val={this.state[locale].meta_title}
							plc="Site meta title"
							label="Your site meta title"
							name={`meta_title.${locale}`}
							change={this.handleFiledChange}
							errors={this.state.errors}
						/>
						<Input
							Type="textarea"
							val={this.state[locale].description}
							plc="Site description"
							label="Your site description"
							name={`description.${locale}`}
							change={this.handleFiledChange}
							errors={this.state.errors}
						/>
						<Button
							Type="primary"
							val="SAVE"
							submit={true}
						/>
                    </form>
                )}
			</MultiLangTabs>
		);
	}
}

export default Settings;