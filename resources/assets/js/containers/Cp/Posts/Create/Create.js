import React, { Component } from 'react';
import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';
import axios from '../../../../axios';

class Create extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			errors: [],
		};

		this.handleFiledChange = this.handleFiledChange.bind(this);
	}

	handleFiledChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handlePostSubmit(e) {
		e.preventDefault();

		const data = {
			title: this.state.title,
			description: this.state.description,
		}

		const { history } = this.props;

		axios.post('posts/create', data).then(re => {
			console.log(re.data.errors);
			// history.push('/Posts')
			if (re.data.errors) {
				this.setState({
					errors: re.data.errors,
				})
			}
		})
		.catch(er => {
			this.setState({
				errors: er.data.errors,
			})
		})
	}

	render() {
		return (
			<form onSubmit={(e) => this.handlePostSubmit(e)}>
				<Input
					Type="text"
					val={this.state.title}
					plc="Title"
					label="Post Title"
					name="title"
					change={this.handleFiledChange}
					errors={this.state.errors}
				/>
				<Input
					Type="textarea"
					val={this.state.description}
					plc="Description"
					label="Post Description"
					name="description"
					change={this.handleFiledChange}
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

export default Create;