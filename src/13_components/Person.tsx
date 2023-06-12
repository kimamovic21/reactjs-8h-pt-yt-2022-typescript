import React, { useState } from 'react';

interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
};

export enum Country {
    Bosnia = 'Bosnia',
    Brazil = 'Brazil',
    Canada = 'Canada',
    France = 'France',
};

const Person = (props: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <div>
        <h4>Name: {props.name}</h4>
        <h4>Email: {props.email}</h4>
        <h4>Age: {props.age}</h4>
        <h4>This person {props.isMarried ? 'is' : 'is not'} married.</h4>
        {props.friends.map((friend: string, index: number) => (
            <span key={index}>{friend} </span>
        ))}
        <h4>Country: {props.country}</h4>
    </div>
  );
};

export default Person;
