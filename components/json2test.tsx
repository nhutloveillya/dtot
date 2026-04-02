import React from 'react'

export default function json2test(
    json: string
)
{
    const data = JSON.parse(json);
    for (let i = 0; i < 10; i++) {
        console.log(`This is iteration number ${i}`);
    }

  return (
    <div>json2test</div>
    )
}

