import profilePic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">The Fundraiser</h2>
            <p className="card-text">I watch coding videos and play fc25</p>
        </div>

    );
}

export default Card