import { useState } from 'react';
import data from '../../data/dummyDecks.json';
import { jumbleMany } from './appFunctions';
import { getRandomNum } from '../../utils/numbers';

export default function WordJumbleApp(){
    const [word, setWord] = useState<string>("")
    
    const onClick = async () => {
        let number: number = await getRandomNum(data.words.length)
        let word: string = await data.words[number];
        let jumbled:string = await jumbleMany(word)
        await setWord(jumbled)
    };

    return (
        <div className='bg-dark-1 w-full h-full grid  place-items-center place-content-center'>
            <h1 className='text-primary-colour text-2xl'>Word Scramble</h1>
            <h2 className='text-secondary-colour text-2xl'>{word ? word : "Jumble Word now!"}</h2>
            <div className='w-36 h-36 grid place-items-center text-2xl text-grey-pastel rounded-full bg-primary-colour' onClick={() => onClick()}>
            Jumble
            </div>
            {/* <button>Simple</button>
            <button>All Deck</button> */}
        </div>
    )
}