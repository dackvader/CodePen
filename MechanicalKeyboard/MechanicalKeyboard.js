import React, { useState, useEffect, useRef } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const useSetState = (initialState = []) => {
    const [state, setState] = useState(new Set(initialState));
    const add = (item) => setState(state => new Set(state.add(item)));
    const remove = (item) => setState(state => {
        state.delete(item);
        return new Set(state);
    });
    return { set: state, add, remove, has: char => state.has(char) };
}

const useSound = (url) => {
    const sound = useRef(new Audio(url));
    return { 
      play: () => sound.current.play(), 
      stop: () => {
        sound.current.pause();
        sound.current.currentTime = 0;
      }
    }
};

const Key = ({ char, span, active }: { char: string, span?: boolean, active: boolean}) => { 
    return (
        <div className={['key', span && 'span', active && 'active'].filter(Boolean).join(' ')}>
            <div className='side'/>
            <div className='top'/>
            <div className='char'>{char}</div>
        </div>
    )
}

const Column = ({ children }) => (
  <div className='column'>
    {children}
  </div>
);

const Row = ({ children }) => (
  <div className='row'>
    {children}
  </div>
);

const Keyboard = () => {
  // Mechanical click sound 😎
  const { play, stop } = useSound('https://cdn.yoavik.com/codepen/mechanical-keyboard/keytype.mp3');
  
    const { add, remove, has } = useSetState([]);

    useEffect(() => {
        document.addEventListener('keydown', e => { add(e.key); stop(); play(); });
        document.addEventListener('keyup', e => remove(e.key));
    }, []);

    const keys = (chars: string[], spans: boolean[] = []) => chars.map((char, i) => (
        <Key key={char} char={char} span={spans[i] || false} active={has(char)}/>
    ));

    return (
        <div className='keyboard'>
            <Column>
                <Row>
                    {keys(['7', '8', '9'])}
                </Row>
                <Row>
                    {keys(['4', '5', '6'])}
                </Row>
                <Row>
                    {keys(['1', '2', '3'])}
                </Row>
                <Row>
                    {keys(['0', '.'], [true, false])}
                </Row>
            </Column>
            <Column>
                {keys(['+', '-'], [true, true])}
            </Column>
            <div className='shade'/>
            <div className='cover'/>
        </div>
    );
}

ReactDOM.render(
  <Keyboard/>,
  document.body
);