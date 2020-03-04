import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
  ListGroup, 
  ListGroupItem,
  Spinner 
} from "reactstrap";

export function RecipieDetails(props) {
  console.log(props.recipe);
  let tags = [];
  let vidId = "";
  if(props.isLoading){
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
      </div>
    );
  }
  else if(props.recipe){
    if(props.recipe.strTags){
      tags = props.recipe.strTags.split(",");
    }
    if(props.recipe.strYoutube){
      vidId = props.recipe.strYoutube.substr(props.recipe.strYoutube.indexOf("=")+1)
    }
      
  console.log(tags);
    return (
      <div>
      
        <h1 style={{textAlign: 'center'}}>{props.recipe.strMeal}</h1>
        <div className="flex-container wrapper">
          <aside className="sidebar">
            <Card style={{marginTop: '50px', marginBottom: '15px'}}>
              <CardImg
                top
                width="100%"
                src={props.recipe.strMealThumb}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle></CardTitle>
                <CardSubtitle><b>{props.recipe.strMeal}</b></CardSubtitle>
                <p>{props.recipe.strArea} {props.recipe.strCategory} Dish</p>
  
                {tags.map((tag) => <Badge href="#" color="warning">{tag}</Badge>)}
                
              </CardBody>
            </Card>
          </aside>
  
          <section
            className="content"
            style={{
              flexDirection: "column",
              alignSelf: "flex-start",
              margin: "15px"
            }}
          >
            <h4 className="text-muted">Ingredients</h4>
            <ListGroup style={{ width:'100%'}}>
            {props.recipe.strIngredient1 && props.recipe.strMeasure1 && <ListGroupItem style={{ flex:'0 0 100%'}}>{props.recipe.strMeasure1} <b>{props.recipe.strIngredient1}</b></ListGroupItem>}
            {props.recipe.strIngredient2 && props.recipe.strMeasure2 && <ListGroupItem>{props.recipe.strMeasure2} <b>{props.recipe.strIngredient2}</b></ListGroupItem>}
            {props.recipe.strIngredient3 && props.recipe.strMeasure3 && <ListGroupItem>{props.recipe.strMeasure3} <b>{props.recipe.strIngredient3}</b></ListGroupItem>}
            {props.recipe.strIngredient4 && props.recipe.strMeasure4 && <ListGroupItem>{props.recipe.strMeasure4} <b>{props.recipe.strIngredient4}</b></ListGroupItem>}
            {props.recipe.strIngredient5 && props.recipe.strMeasure5 && <ListGroupItem>{props.recipe.strMeasure5} <b>{props.recipe.strIngredient5}</b></ListGroupItem>}
            {props.recipe.strIngredient6 && props.recipe.strMeasure6 && <ListGroupItem>{props.recipe.strMeasure6} <b>{props.recipe.strIngredient6}</b></ListGroupItem>}
            {props.recipe.strIngredient7 && props.recipe.strMeasure7 && <ListGroupItem>{props.recipe.strMeasure7} <b>{props.recipe.strIngredient7}</b></ListGroupItem>}
            {props.recipe.strIngredient8 && props.recipe.strMeasure8 && <ListGroupItem>{props.recipe.strMeasure8} <b>{props.recipe.strIngredient8}</b></ListGroupItem>}
            {props.recipe.strIngredient9 && props.recipe.strMeasure9 && <ListGroupItem>{props.recipe.strMeasure9} <b>{props.recipe.strIngredient9}</b></ListGroupItem>}
            {props.recipe.strIngredient10 && props.recipe.strMeasure10 && <ListGroupItem>{props.recipe.strMeasure10} <b>{props.recipe.strIngredient10}</b></ListGroupItem>}
            {props.recipe.strIngredient11 && props.recipe.strMeasure11 && <ListGroupItem>{props.recipe.strMeasure11} <b>{props.recipe.strIngredient11}</b></ListGroupItem>}
            {props.recipe.strIngredient12 && props.recipe.strMeasure12 && <ListGroupItem>{props.recipe.strMeasure12} <b>{props.recipe.strIngredient12}</b></ListGroupItem>}
            {props.recipe.strIngredient13 && props.recipe.strMeasure13 && <ListGroupItem>{props.recipe.strMeasure13} <b>{props.recipe.strIngredient13}</b></ListGroupItem>}
            {props.recipe.strIngredient14 && props.recipe.strMeasure14 && <ListGroupItem>{props.recipe.strMeasure14} <b>{props.recipe.strIngredient14}</b></ListGroupItem>}
            {props.recipe.strIngredient15 && props.recipe.strMeasure15 && <ListGroupItem>{props.recipe.strMeasure15} <b>{props.recipe.strIngredient15}</b></ListGroupItem>}
            {props.recipe.strIngredient16 && props.recipe.strMeasure16 && <ListGroupItem>{props.recipe.strMeasure16} <b>{props.recipe.strIngredient16}</b></ListGroupItem>}
            {props.recipe.strIngredient17 && props.recipe.strMeasure17 && <ListGroupItem>{props.recipe.strMeasure17} <b>{props.recipe.strIngredient17}</b></ListGroupItem>}
            {props.recipe.strIngredient18 && props.recipe.strMeasure18 && <ListGroupItem>{props.recipe.strMeasure18} <b>{props.recipe.strIngredient18}</b></ListGroupItem>}
            {props.recipe.strIngredient19 && props.recipe.strMeasure19 && <ListGroupItem>{props.recipe.strMeasure19} <b>{props.recipe.strIngredient19}</b></ListGroupItem>}
            {props.recipe.strIngredient20 && props.recipe.strMeasure20 && <ListGroupItem>{props.recipe.strMeasure20} <b>{props.recipe.strIngredient20}</b></ListGroupItem>}
          </ListGroup>
          </section>
          <section
            className="content"
            style={{
              flexDirection: "column",
              alignSelf: "flex-start",
              margin: "15px"
            }}
          >
            <h4 className="text-muted">Directions</h4>
            <p>
             {props.recipe.strInstructions}
            </p>
          </section>
        </div>
        <div className="flex-container wrapper">
          <section className="videoSection" style={{ margin: "25px" }}>
            <iframe
              src={"https://www.youtube.com/embed/"+vidId}
              width="900"
              height="450"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </section>
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
        <img src='undraw_Chef_cu0r.png' style={{width: '100%', maxHeight: '70vh'}}/>
      </div>
    );
  }
  
  
}
