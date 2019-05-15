import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from "../audio-player/audio-player.jsx";

const mock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  clickHandler: jest.fn(),
  isPlaying: false,
};

describe(`AudioPlayer component`, () => {
  it(`renders correctly`, () => {
    const {src, clickHandler, isPlaying} = mock;

    function createNodeMock() {
      return {
        src: ``,
        oncanplaythrough: () => {},
        onplay: () => {},
        onpause: () => {},
        ontimeupdate: () => {},
        play: () => {},
        pause: () => {}
      };
    }

    const tree = renderer.create(
        <AudioPlayer src={src} onPlayButtonClick={clickHandler} isPlaying={isPlaying} />, {createNodeMock})
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
