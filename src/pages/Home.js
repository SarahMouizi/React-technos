export default function Home(){
    return(
        <div className="home">
            <h1>My Progression</h1>
            <div>Progamming : Don't waste time ! keep going !!</div>
        {
            new Date().toDateString()
        }
        </div>
    )
}