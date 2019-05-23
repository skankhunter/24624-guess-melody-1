import React from 'react';
import PropTypes from 'prop-types';
import ArtistQuestionInput from "./artist-question-input/artist-question-input.jsx";

const ArtistQuestionScreen = ({question, onAnswer}) => {
  const {
    answers,
  } = question;

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button" />
      <audio />
    </div>

    <form className="game__artist">
      {answers.map((it, i) => (
        <ArtistQuestionInput
          key={i}
          index={i}
          item={it}
          onAnswer={onAnswer}
        />
      ))}
    </form>
  </section>;
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
