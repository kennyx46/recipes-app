import React from 'react';
import ReactMarkdown from 'react-markdown';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const RecipeCard = ({ image, title, tags, chef, description }) => {
	return (
		<Card>
		    <Card.Img variant="top" src={image} />
		    <Card.Body>
		        <Card.Title>{title}</Card.Title>
		        <div>
		            {tags.map((tag) => <Badge key={tag} className="mr-2 mb-3" variant="secondary">{tag}</Badge>)}
		        </div>
		      	<ReactMarkdown source={description} />
		    </Card.Body>
		    {chef && <Card.Footer className="font-weight-bold">Chef: {chef}</Card.Footer>}
		</Card>
	);
}

export default RecipeCard;
