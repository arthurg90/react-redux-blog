import React, { Component } from "react";

import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);

        this.state = {
            fields: props.fields.slice(),
        };
    }

    submit(e) {
        e.preventDefault();

        let data = this.state.fields.reduce((data, { name, value }) => {
            data[name] = value;
            return data;
        }, {});

        this.props.onSubmit(data);
    }

    change(e, i) {
        let fields = this.state.fields.slice(); 
        fields[i].value = e.target.value;
        this.setState({ fields: fields });
    }

    render() {
        let { className, button } = this.props;

        return (
            <form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
                { this.state.fields.map(({ name, label, value }, i) => (
                    <Input
                        key={ i }
                        value={ value }
                        name={ name }
                        label={ label }
                        onChange={ (e) => this.change(e, i) }
                    />
                ))}
                <button className="btn btn-success">{ button }</button>
            </form>
        );
    }
} 

export default Form;
