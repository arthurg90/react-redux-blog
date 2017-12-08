// //this is the child component of edit.js
// //this gets wrapped in edit.js 
// //this contains the ui parts of the page e.g. buttons and title


// import React, from "react";
// import Form from "../Forms/Form";

// // the add article component

// class Edit extends Component= ({ fields, onSubmit }) => (
// 	!fields ? <FourOhFour /> : ( 
// 	return    
// 	    <div>
// 	        <h2>Edit Article</h2>

// 	        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />
// 	    </div>
//     );
// );

// export default Edit;




import React, { Component } from "react";
import Form from "../Forms/Form";
import FourOhFour from "../FourOhFour";

// the add article component
class Edit extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

	render () {

        const { fields, onSubmit } = this.props;
		console.log(fields)
   		
        return fields.length === 0 ? <FourOhFour /> : (

                <div>
                    <h2>Edit Article</h2>

                    <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />
                </div>
    			
    	)		

        };   
};


export default Edit;
