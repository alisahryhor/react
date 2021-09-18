import './content.css';

export default function Content() {
    return (
        <>
        <div className="container">
            <form>
                <select name="destination">
                    <option value="Des">Destination</option>
                    <option value="1">Hotel 1</option>
                    <option value="2">Hotel 2</option>
                    <option value="3">Hotel 3</option>
                    <option value="4">Hotel 4</option>
                </select>
            </form>
            <form action="Check-in">
                <p><input type="search" placeholder="Check-in"/></p>
            </form>
            <form action="Check-out">
                <p><input type="search" placeholder="Check-out"/></p>
            </form>
            <form action="Adults">
                <p><input type="search" placeholder="Adults"/></p>
            </form>
            <form action="Children">
                <p><input type="search" placeholder="Children"/></p>
            </form>
            <button className="button1">SEARCH</button>
        </div>
        <div>
            <h1>Travel With <span className="booking">Booking</span></h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
        </div>
            </>
    )
}