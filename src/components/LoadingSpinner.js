import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
	return (
		<Container className="text-center mt-4">
		    <Spinner size="lg" animation="border"/>
		</Container>
	);
};

export default LoadingSpinner;
