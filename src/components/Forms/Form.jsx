import React, { Component } from "react";
import Input from "./Input";

//in Form, `onSubmit`: we need to prevent default and also send back the data

class Form extends Component {

	constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);

        this.state = {   //take the `fields` prop and turn it into state (see render event below):
	    // map over each field and add a value property
		    fields: props.fields.slice(),
		};
    }

    change(e, i) {
	    let fields = this.state.fields.slice();
	    fields[i].value = e.target.value;
	    this.setState({ fields: fields });
	}

    submit(e) {  //pass the data out of our `<Form>` in `submit`:
        e.preventDefault(); //prevents teh form from submitting
    // for each field use the name as a key and the value as a value
    // don't need the label
        let data = this.state.fields.reduce((data,{ name, value }) => { //this is a variable which holds the state of the fields and reduces it down to a single value
        data[name] = value;
        return data;
    	}, {});

        this.props.onSubmit(data);
    }


    render() {
        const { className, button } = this.props; //deconstructing and returning jsx, took out fields
        return (  //form on submit event handler:
            <form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } > 
                { this.state.fields.map(({ name, label, value }, i) => (
					    <Input
					        onChange={ (e) => this.change(e, i) }
					        value={ value }
					        key={ i }
					        name={ name }
					        label={ label }
					    />
					))}                
				 <button className="btn btn-success">{ button }</button>
            </form>
        );
    }
}
export default Form;



