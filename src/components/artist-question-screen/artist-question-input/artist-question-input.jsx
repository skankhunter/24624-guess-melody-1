import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionInput = ({item, onAnswer}) => {
  const {picture, artist, index} = item;
  return (
    <div className="artist">
      <input className="artist__input visually-hidden"
        type="radio" name="answer"
        value={`artist-${index}`}
        id={`artist-${index}`}
        onClick={() => onAnswer(item)}/>
      <label className="artist__name" htmlFor={`artist-${index}`}>
        <img className="artist__picture" src={picture} alt={artist} />
        {artist}
      </label>
    </div>
  );
};

ArtistQuestionInput.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  item: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistQuestionInput;
