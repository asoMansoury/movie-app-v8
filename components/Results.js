export default function Results({results}) {

  return (
    <div>
        <h1>
            {results.map(result =>(
              <h1>{result.title}</h1>
            ))}
        </h1>
    </div>
  )
}
