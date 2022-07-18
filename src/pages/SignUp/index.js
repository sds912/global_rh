import React from 'react'
import { Container,Col, Row } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import SignUpForm from "../../components/forms/SignUpForm"
import Header from '../../components/header/Header'
import { WELCOME } from '../../constants/routes'


const SignUpPage = ( ) => {

    const history = useHistory()
	return (<React.Fragment>
		<Header />
		<div className=" container my-5">
			<h1>S'inscrire</h1>
			<Row >
				<Col md="5">
					<div 
					className="mt-5"
					style={{
						backgroundImage: "url('/auth.png')",
						width: "100%",
						height: "calc(100vh - 80px)",
						backgroundRepeat: "no-repeat",
						backgroundSize: "100%"
					}}>
						
					</div>
				</Col>
				<Col sm="12" md="6">
				  <SignUpForm />
				  <p>Vous avez déjà un compte ? <span
				  className="text-info"
				  style={{
					  cursor: "pointer"
				  }}
				  onClick={() => history.push(WELCOME)}
				  >Se sonnecter</span></p>
				</Col>
			</Row>
		</div>
		<Footer/>
   </React.Fragment>)
}


export default SignUpPage;