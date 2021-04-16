import React from 'react';
import './QuoteCard.css';
import PropTypes from 'prop-types';

function QuoteCard(props, {image, quote, character}) {
    return (
      <figure class="QuoteCard">
            <img src={props.image} alt={props.character} />
            <figcaption>
                <blockquote>
                {props.quote}
                </blockquote>
                <cite>{props.characterFirstName + ' ' + props.characterLastName}</cite>
            </figcaption>
      </figure>
    );
}

QuoteCard.propTypes = {
      characterFirstName: PropTypes.string.isRequired,
      characterLastName: PropTypes.string.isRequired,
    };
  
  export default QuoteCard;