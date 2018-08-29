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
            analystic: '',
			errors: [],
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleFiledChange(event, key = false, locale = false) {
		if (locale) {
            this.setState({
                [locale]: Object.assign({}, this.state[locale], {[key]: event.target.value})
            });
        } else {
            this.state({
                [event.target.name]: event.target.value,
            });
        }
	}

	handleSubmit(e) {
		e.preventDefault();

        const data = {
            ka: this.state.ka,
            en: this.state.en,
            analystic: this.state.analystic,
        };

		axios.post('settings/create', data).then(re => {
			console.log(re.data);
		})
		.catch(er => {
			console.log(er)
		})
	}

	render() {
		return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <MultiLangTabs>
                    { renderlangTabs(locale =>
              			<div>
                            <Input
                                Type="text"
                                val={this.state[locale].title}
                                plc="Site title"
                                label="Your site title"
                                name={`title.${locale}`}
                                change={(e) => this.handleFiledChange(e, `title`, locale)}
                                errors={this.state.errors}
                            />
                            <Input
                                Type="text"
                                val={this.state[locale].meta_title}
                                plc="Site meta title"
                                label="Your site meta title"
                                name={`meta_title.${locale}`}
                                change={(e) => this.handleFiledChange(e, 'meta_title', locale)}
                                errors={this.state.errors}
                            />
                            <Input
                                Type="textarea"
                                val={this.state[locale].description}
                                plc="Site description"
                                label="Your site description"
                                name={`description.${locale}`}
                                change={(e) => this.handleFiledChange(e, 'description', locale)}
                                errors={this.state.errors}
                            />
                        </div>
                    )}
                </MultiLangTabs>
                <Input
                    Type="text"
                    val={this.stateanalystic}
                    plc="analystic id"
                    label="Your analystic id"
                    name="analystic"
                    change={() => this.handleFiledChange}
                    errors={this.state.errors}
                />
                <Button
                    Type="primary"
                    val="SAVE"
                    submit={true}
                />
            </form>
		);
	}
}

export default Settings;
