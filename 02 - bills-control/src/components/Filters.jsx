

const Filters = ({ filter, setFilter }) => {

  return (
    <div className="filters shadow container">
        <form>
            <div className="field">
                <label>Filter expenses</label>
                <select
                    value={filter}
                    onChange={ (e) => setFilter(e.target.value) }
                >
                    <option value="">--All--</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="hobbie">Hobbie</option>
                    <option value="expenses">Other</option>
                    <option value="health">Health</option>
                    <option value="subscription">Subscriptions</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filters