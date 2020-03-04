import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge
  } from 'reactstrap';

export function RecipieDetails() {
  return (
    <div>
      <div className="flex-container wrapper">
        <aside className="sidebar">
        <Card>
        <CardImg top width="100%" src="https://www.themealdb.com/images/media/meals/gpz67p1560458984.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Chicken Tomatoes</CardTitle>
          <CardSubtitle>Region: French</CardSubtitle>
          
          <Badge href="#" color="warning">Chicken</Badge><Badge href="#" color="warning">Tomatoes</Badge>
        </CardBody>
      </Card>
        </aside>

        <section className="content" style={{flexDirection:'column',alignSelf: 'flex-start', margin:'15px'}}>
        <h2>Chakchouka Recipie</h2>
        <p>In a large cast iron skillet or sauté pan with a lid, heat oil over medium high heat. Add the onion and sauté for 2-3 minutes, until softened. Add the peppers and garlic, and sauté for an additional 3-5 minutes. Add the tomatoes, cumin, paprika, salt, and chili powder. Mix well and bring the mixture to a simmer. Reduce the heat to medium low and continue to simmer, uncovered, 10-15 minutes until the mixture has thickened to your desired consistency. (Taste the sauce at this point and adjust for salt and spice, as desired.) Using the back of a spoon, make four craters in the mixture, large enough to hold an egg. Crack one egg into each of the craters. Cover the skillet and simmer for 5-7 minutes, until the eggs have set. Serve immediately with crusty bread or pita.</p>
        </section>
        <section className="content" style={{flexDirection:'column',alignSelf: 'flex-start', margin:'15px'}}>
        <h2>Chakchouka Recipie</h2>
        <p>In a large cast iron skillet or sauté pan with a lid, heat oil over medium high heat. Add the onion and sauté for 2-3 minutes, until softened. Add the peppers and garlic, and sauté for an additional 3-5 minutes. Add the tomatoes, cumin, paprika, salt, and chili powder. Mix well and bring the mixture to a simmer. Reduce the heat to medium low and continue to simmer, uncovered, 10-15 minutes until the mixture has thickened to your desired consistency. (Taste the sauce at this point and adjust for salt and spice, as desired.) Using the back of a spoon, make four craters in the mixture, large enough to hold an egg. Crack one egg into each of the craters. Cover the skillet and simmer for 5-7 minutes, until the eggs have set. Serve immediately with crusty bread or pita.</p>
        </section>
      </div>
      <div className="flex-container wrapper">
        <section className="videoSection"  style={{margin:'25px'}}>
        <iframe src="http://www.youtube.com/embed/tiG-xlmeyjg"
   width="900" height="450" frameborder="0" allowfullscreen></iframe>
        </section>
      </div>
    </div>
  );
}
