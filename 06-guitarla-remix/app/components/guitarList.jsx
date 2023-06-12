import Guitar from "./guitar"

export const GuitarList = ({guitars}) => {
  return (
    <>
      <h2 className="heading">Our collection</h2>
      {guitars.length && (
        <div className="guitars-grid">
          {guitars.map(guitar => (
            <Guitar key={guitar.id} guitar={guitar}/>
            ))}
        </div>
      )}
    </>
  )
}
